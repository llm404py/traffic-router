// Legacy entry point intentionally disabled.
// The production site is built from Astro pages under src/pages/.
// Run: npm install && npm run build
export default {
  async fetch() {
    return new Response('GameHelp India now builds with Astro. See README.md.', {
      status: 410,
      headers: { 'content-type': 'text/plain; charset=UTF-8', 'x-robots-tag': 'noindex' }
    });
  }
};
