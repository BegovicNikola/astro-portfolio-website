import type { APIRoute } from "astro";

// A page that isn't HTML. The file name `robots.txt.ts` becomes the URL
// `/robots.txt`. At build time Astro runs GET() and saves the result as a file.
//
// `site` is the `site` value from astro.config.mjs, so the domain is only
// written in one place.
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL("sitemap-index.xml", site);

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
