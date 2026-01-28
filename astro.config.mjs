// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isNetlify = process.env.NETLIFY === "true";

// https://astro.build/config
export default defineConfig({
  site: isNetlify ? "https://fozepro.netlify.app" : "https://SujithJ05.github.io",
  base: isNetlify ? "/" : "/FoxePro",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
