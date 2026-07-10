import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://traffic-router-puce.vercel.app';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap({
    filter: (page) => !page.includes('/tools/complaint-draft/print')
  })],
  build: { format: 'directory' },
  compressHTML: true
});
