import fs from 'node:fs';
export function webpMarkup(html) {
  const file = '.webprojekt/image-manifest.json';
  if (!fs.existsSync(file)) return html;
  const manifest = JSON.parse(fs.readFileSync(file, 'utf8'));
  let photoIndex = 0;
  return html.replace(/<img\b[^>]*>/g, tag => {
    const source = tag.match(/\bsrc="([^"]+)"/)?.[1];
    const item = manifest[source];
    if (!item) return tag;
    const firstPhoto = photoIndex++ === 0;
    const largest = item.variants.at(-1);
    tag = tag.replace(/\s(?:src|srcset|sizes|width|height|loading|decoding|fetchpriority)="[^"]*"/g, '');
    const size = item.avatar ? '64px' : '(max-width: 760px) calc(100vw - 40px), (max-width: 1000px) 50vw, 600px';
    return tag.replace(/>$/, ` src="${largest.src}" srcset="${item.variants.map(v => `${v.src} ${v.width}w`).join(', ')}" sizes="${size}" width="${item.avatar ? 64 : largest.width}" height="${item.avatar ? 64 : largest.height}" loading="${firstPhoto ? 'eager' : 'lazy'}" decoding="async"${firstPhoto ? ' fetchpriority="high"' : ''}>`);
  });
}
