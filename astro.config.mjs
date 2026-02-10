import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.andreisimion.eu",
  integrations: [tailwind(), mdx(), sitemap()],
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
