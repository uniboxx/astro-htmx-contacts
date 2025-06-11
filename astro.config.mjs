// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/contacts',
  },

  output: 'server',
  adapter: netlify(),
  integrations: [icon()],
});