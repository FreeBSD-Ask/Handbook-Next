/**
 * @file configs/sidebar.ts
 * @brief Contains the SidebarConfig object.
 * @copyright Copyright (c) 2022 The FreeBSD Ask Authors. All rights reserved.
 */

import type { SidebarConfig } from "@vuepress/theme-default";

export const sideBarConfig: SidebarConfig = [
  {
    text: "FreeBSD 手册",
    children: ["/README.md", "/freebsd-shou-ce.md", "/gai-shu.md"],
  },
  {
    text: "第一部分：快速开始",
    children: ["/di-yi-bu-fen-kuai-su-kai-shi.md"],
  },
  {
    text: "前言",
    children: [
      "/qian-yan/mu-biao-shou-zhong.md",
      "/qian-yan/xiang-dui-yu-di-san-ban-de-gai-dong.md",
      "/qian-yan/xiang-dui-yu-di-er-ban-de-gai-dong-2004.md",
      "/qian-yan/xiang-dui-yu-di-yi-ban-de-gai-dong-2001.md",
      "/qian-yan/ben-shu-de-zu-zhi-jie-gou.md",
      "/qian-yan/ben-shu-zhong-shi-yong-de-yi-xie-yue-ding.md",
      "/qian-yan/zhi-xie.md",
    ],
  },
  {
    text: "第1章 简介",
    children: [
      "/di-yi-bu-fen-kuai-su-kai-shi.md",
      "/di-1-zhang-jian-jie/1.1.-gai-shu.md",
      "/di-1-zhang-jian-jie/1.2.-huan-ying-lai-dao-freebsd.md",
      "/di-1-zhang-jian-jie/1.3.-guan-yu-freebsd-xiang-mu.md",
    ],
  },
];
