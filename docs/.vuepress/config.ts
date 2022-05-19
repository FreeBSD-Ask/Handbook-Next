/**
 * @file config.ts
 * @brief Configuration of the translated handbook.
 * @copyright Copyright (c) 2022 FreeBSD Chinese Community. All rights reserved.
 */

import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme } from "vuepress";
import { defineUserConfig } from "vuepress";
import { sideBarConfig } from "./configs";

export default defineUserConfig({
  lang: "zh-CN",
  title: "FreeBSD 简体中文手册",
  description: "FreeBSD 简体中文手册",

  theme: defaultTheme({
    logo: "https://handbook-next.freebsdcn.org/favicon.ico",
    sidebar: sideBarConfig,
  }),

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
});
