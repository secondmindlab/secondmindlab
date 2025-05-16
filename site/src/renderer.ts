import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

export function renderHTML(meta: any, htmlContent: string): string {
  const templatePath = path.join('templates', 'article.html');
  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');
  const template = handlebars.compile(rawTemplate);

  return template({
    title: meta.title,
    description: meta.description,
    content: htmlContent,
    og_image: meta.og_image || '/default-og.png',
  });
}
