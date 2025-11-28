import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://lowlandgeospatial.com',
  output: 'server',  // or 'static' if fully static site
  adapter: cloudflare(),
  integrations: [tailwind(), icon()],
});
