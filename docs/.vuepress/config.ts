/**
 * @file config.ts
 * @brief Configuration of the translated handbook.
 * @copyright Copyright (c) 2022 The FreeBSD Ask Authors. All rights reserved.
 */

import { defaultTheme } from "vuepress";
import { defineUserConfig } from "vuepress";
import { sideBarConfig } from "./configs";

export default defineUserConfig({
  lang: "zh-CN",
  title: "FreeBSD 简体中文手册",
  description: "FreeBSD 简体中文手册",

  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
    sidebar: sideBarConfig,
  }),

  plugins: [],
});
