/**
 * @file config.ts
 * @brief Configuration of the translated handbook.
 * @copyright Copyright (c) 2022 FreeBSD Chinese Community. All rights reserved.
 */

import {googleAnalyticsPlugin} from '@vuepress/plugin-google-analytics';
import {defineUserConfig} from 'vuepress';
import {defaultTheme} from '@vuepress/theme-default';
import {fullTextSearchPlugin} from 'vuepress2-plugin-full-text-search';
import {sitemapPlugin} from 'vuepress-plugin-sitemap2';

import {sideBarConfig} from './configs';
    
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'FreeBSD 简体中文手册',
  description: 'FreeBSD 简体中文手册',

  theme: defaultTheme({
    logo: '/favicon.ico',
    sidebar: sideBarConfig,
    lastUpdated: true,
    lastUpdatedText: '上次更新'
    contributorsText: '贡献者',  
  }),
  
  plugins: [
    fullTextSearchPlugin,
    googleAnalyticsPlugin({
      id: 'G-JJRKFX86Z7',
    }),
    sitemapPlugin({
      hostname: 'https://handbook.bsdcn.org',
    }),
  ],
});
