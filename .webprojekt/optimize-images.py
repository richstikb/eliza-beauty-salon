"""Create WebP derivatives for the selected site; preserve all originals."""
import json
import re
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
PAGES = ['index.html', 'kezelesek.html', 'rolunk.html', 'kapcsolat.html', 'adatkezeles.html']
out = ROOT / 'assets' / 'images'
out.mkdir(parents=True, exist_ok=True)
sources = set()
for page in PAGES:
    sources.update(re.findall(r'<img[^>]+src="(képek/[^\"]+)"', (ROOT / page).read_text(encoding='utf-8')))
old_manifest = ROOT / '.webprojekt' / 'image-manifest.json'
if old_manifest.exists():
    sources.update(json.loads(old_manifest.read_text(encoding='utf-8')))
manifest = {}
for source in sorted(sources):
    original = ROOT / source
    with Image.open(original) as raw:
        im = ImageOps.exif_transpose(raw)
        im = im.convert('RGBA' if 'A' in im.getbands() else 'RGB')
        avatar = 'kisfelbontasu' in source
        max_width = min(im.width, 128 if avatar else 1200)
        widths = sorted(set([w for w in [480, 800] if w < max_width] + [max_width]))
        variants = []
        for width in widths:
            height = round(im.height * width / im.width)
            resized = im.resize((width, height), Image.Resampling.LANCZOS)
            target = out / f'{original.stem}-{width}.webp'
            resized.save(target, 'WEBP', quality=84 if avatar else 82, method=6)
            with Image.open(target) as check:
                check.load()
                assert check.size == (width, height) and check.format == 'WEBP'
            variants.append({'src': target.relative_to(ROOT).as_posix(), 'width': width, 'height': height, 'bytes': target.stat().st_size})
        manifest[source] = {'original_bytes': original.stat().st_size, 'avatar': avatar, 'variants': variants}
old_manifest.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
before = sum(x['original_bytes'] for x in manifest.values())
after = sum(x['variants'][-1]['bytes'] for x in manifest.values())
print(f'{len(manifest)} images: {before:,} -> {after:,} bytes; reduction {100*(1-after/before):.1f}% (largest variants)')
