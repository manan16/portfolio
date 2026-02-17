import { site } from '../data/portfolio';

export function GET() {
  const pages = [''];
  const now = new Date().toISOString();

  const urls = pages
    .map((path) => {
      return `<url><loc>${site.canonicalUrl}/${path}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>`;
    })
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
