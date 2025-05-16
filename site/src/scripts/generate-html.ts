import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import handlebars from 'handlebars';

const CONTENT_DIR = 'content/articles';
const TEMPLATE_PATH = 'templates/article.html';
const OUTPUT_DIR = 'public/articles';

function loadTemplate(): handlebars.TemplateDelegate {
  const templateRaw = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  return handlebars.compile(templateRaw);
}

function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((slug) => fs.statSync(path.join(CONTENT_DIR, slug)).isDirectory());
}

function buildArticle(slug: string, template: handlebars.TemplateDelegate) {
  const articleDir = path.join(CONTENT_DIR, slug);
  const mdPath = path.join(articleDir, 'index.md');
  const metaPath = path.join(articleDir, 'meta.json');

  if (!fs.existsSync(mdPath) || !fs.existsSync(metaPath)) {
    console.warn(`❌ Skipping ${slug}: missing files.`);
    return;
  }

  const markdown = fs.readFileSync(mdPath, 'utf-8');
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));

  const htmlContent = marked.parse(markdown);

  const html = template({
    title: meta.title,
    description: meta.description,
    og_image: meta.og_image || '',
    content: htmlContent,
    ...meta,
  });

  const outDir = path.join(OUTPUT_DIR, slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);

  console.log(`✅ Built /articles/${slug}/index.html`);
}

function main() {
  const template = loadTemplate();
  const slugs = getAllSlugs();

  slugs.forEach((slug) => buildArticle(slug, template));
}

main();
