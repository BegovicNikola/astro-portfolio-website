// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nikolabegovic.com",
  integrations: [react(), sitemap()],
  prefetch: true,

  // Astro downloads these at build time and serves them from your own site.
  // Each cssVariable is a name we can reference in CSS (see global.css).
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Fraunces",
      cssVariable: "--ff-display",
      weights: [400, 500, 600],
      styles: ["normal"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--ff-body",
      weights: [400, 500, 600],
      styles: ["normal"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Space Mono",
      cssVariable: "--ff-mono",
      weights: [400, 700],
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
