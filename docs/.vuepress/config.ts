/**
 * @file config.ts
 * @brief Configuration of the translated handbook.
 * @copyright Copyright (c) 2022 FreeBSD Chinese Community. All rights reserved.
 */

import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defineUserConfig } from '@vuepress/cli'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { seoPlugin } from 'vuepress-plugin-seo2'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { commentPlugin } from 'vuepress-plugin-comment2'

import {sideBarConfig} from './configs'
    
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'FreeBSD 简体中文手册',
  description: 'FreeBSD 简体中文手册',

  theme: defaultTheme({
    logo: '/favicon.ico',
    sidebar: sideBarConfig,
    docsRepo: 'https://github.com/FreeBSD-Ask/Handbook',
    docsBranch: 'main',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: '在 GitHub 上修改此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者'
  }),
  
  plugins: [
    commentPlugin({
      provider: "Giscus",
      repo:'FreeBSD-Ask/Handbook-giscus-discussions',
      repoId:'R_kgDOIFzFKw',
      category:'General',
      categoryId:'DIC_kwDOIFzFK84CRsdz'
    }),
    googleAnalyticsPlugin({
      id: 'G-JJRKFX86Z7',
    }),
    backToTopPlugin(),
    sitemapPlugin({
      hostname: 'https://handbook.bsdcn.org',
    }),
    seoPlugin({
      hostname: 'https://handbook.bsdcn.org',
    }),
    docsearchPlugin({
      appId: 'UC6DQQ5A2K',
      apiKey: 'f343b344e3fcc957062a351fcabbc78c',
      indexName: 'freebsd',
	  locales: {
        "/": {
          placeholder: "搜索",
		   translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除搜索条件",
                resetButtonAriaLabel: "清除搜索条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "无搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试搜索",
                reportMissingResultsText: "没有找到应有的搜索结果？",
                reportMissingResultsLinkText: "点击反馈",
              },	  
	     },
          },
        },
      },
    }),
  ],
});
