import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://recompilado.com.br",
  output: "static",
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});