import fs from 'node:fs';
import path from 'node:path';

// Follow only references from the selected site's entry point, including srcset.
const root = path.resolve('public');
const pending = ['index.html'];
const seen = new Set();
while (pending.length) {
  const relative = pending.pop();
  if (seen.has(relative)) continue;
  seen.add(relative);
  const dest = path.resolve(root, relative);
  if (!dest.startsWith(root + path.sep)) throw Error(`Unsafe reference: ${relative}`);
  if (!/\.(html|css|js)$/.test(relative)) {
    const source = path.resolve(relative);
    if (!fs.existsSync(source)) throw Error(`Missing asset: ${relative}`);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(source, dest);
  }
  if (!fs.existsSync(dest)) throw Error(`Missing page: ${relative}`);
  if (!/\.(html|css)$/.test(relative)) continue;
  const text = fs.readFileSync(dest, 'utf8');
  const refs = [...text.matchAll(/(?:src|href|action)=["']([^"']+)["']/g)].map(m => m[1]);
  for (const m of text.matchAll(/srcset=["']([^"']+)["']/g)) refs.push(...m[1].split(',').map(s => s.trim().split(/\s+/)[0]));
  for (const m of text.matchAll(/url\(\s*["']?([^\s)'"\s]+)["']?\s*\)/g)) refs.push(m[1]);
  for (const ref of refs) {
    if (/^(?:[a-z]+:|\/\/|#)/i.test(ref)) continue;
    const clean = decodeURIComponent(ref.split(/[?#]/)[0]);
    if (clean) pending.push(path.posix.normalize(clean.startsWith('/') ? clean.slice(1) : path.posix.join(path.posix.dirname(relative), clean)));
  }
}
console.log(`Public: ${seen.size} referenced files verified.`);
