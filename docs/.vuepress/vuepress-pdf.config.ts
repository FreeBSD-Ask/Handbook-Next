// .vuepress/vuepress-pdf.config.ts
import { defineUserConfig } from "@condorhero/vuepress-plugin-export-pdf-v2";

export default defineUserConfig({
  theme: "@vuepress/theme-default",
  outFile: "FreeBSD-Handbook-CN.pdf",
});
