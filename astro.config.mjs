// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://SujithJ05.github.io",
  base: "/FoxePro",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
