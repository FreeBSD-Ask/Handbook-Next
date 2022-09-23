// .vuepress/vuepress-pdf.config.ts
import { defineUserConfig } from "@condorhero/vuepress-plugin-export-pdf-v2";

export default defineUserConfig({
  outDir: "docs/.vuepress/dist/",
  routePatterns: {
  "index.html", "yi-zhe-shuo-ming.html","freebsd-shou-ce.html","!/404.html"
  },
});
