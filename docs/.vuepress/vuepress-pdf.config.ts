// .vuepress/vuepress-pdf.config.ts
import { defineUserConfig } from "@condorhero/vuepress-plugin-export-pdf-v2";

export default defineUserConfig({
  outDir: "docs/.vuepress/dist/",
  outFile: "FreeBSD-Handbook-YY_MM_DD-HH_mm.pdf",
});
