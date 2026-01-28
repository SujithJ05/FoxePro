// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import github from "@astrojs/github";

// https://astro.build/config
export default defineConfig({
  site: "https://SujithJ05.github.io/FoxePro/",
  output: "static",
  adapter: github(),
  vite: {
    plugins: [tailwindcss()],
  },
});
