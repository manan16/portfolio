import { site } from '../data/portfolio';

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${site.canonicalUrl}/sitemap.xml\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
