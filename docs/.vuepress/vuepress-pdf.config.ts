// .vuepress/vuepress-pdf.config.ts
import { defineUserConfig } from "@condorhero/vuepress-plugin-export-pdf-v2";

export default defineUserConfig({
  outFile: "FreeBSD-Handbook-CN.pdf",
  outDir: "docs/.vuepress/dist/",
});
