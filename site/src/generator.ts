import fs from 'fs';
import path from 'path';
import { parseArticle } from './parser';
import { renderHTML } from './renderer';
import { validateMeta } from './validator';

function getSlugs(): string[] {
  return fs.readdirSync('content/articles').filter((f) => {
    const fullPath = path.join('content/articles', f);
    return (
      fs.existsSync(path.join(fullPath, 'index.md')) &&
      fs.existsSync(path.join(fullPath, 'meta.json'))
    );
  });
}

function ensureDirExists(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function generateAll() {
  const slugs = getSlugs();
  for (const slug of slugs) {
    const { htmlContent, meta } = parseArticle(slug);
    validateMeta(meta);
    const output = renderHTML(meta, htmlContent);

    const outDir = path.join('public/articles', slug);
    ensureDirExists(outDir);
    fs.writeFileSync(path.join(outDir, 'index.html'), output, 'utf-8');
  }
}

generateAll();
