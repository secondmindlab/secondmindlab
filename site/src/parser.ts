import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

export function parseArticle(slug: string) {
  const articlePath = path.join('content/articles', slug);
  const markdownPath = path.join(articlePath, 'index.md');
  const metaPath = path.join(articlePath, 'meta.json');

  const rawMarkdown = fs.readFileSync(markdownPath, 'utf-8');
  const rawMeta = fs.readFileSync(metaPath, 'utf-8');

  const htmlContent = DOMPurify.sanitize(marked.parse(rawMarkdown));
  const meta = JSON.parse(rawMeta);

  return { htmlContent, meta };
}
