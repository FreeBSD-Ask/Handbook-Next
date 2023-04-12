/**
 * @file configs/sidebar.ts
 * @brief Contains the SidebarConfig object.
 * @copyright Copyright (c) 2022 FreeBSD Chinese Community. All rights reserved.
 */

import type {SidebarConfig} from '@vuepress/theme-default';

export const sideBarConfig: SidebarConfig = [
   {
    text: 'FreeBSD 手册翻译项目',
    children: ['/README.md'],
   },
   {
    text: '译者说明',
    children: ['/yi-zhe-shuo-ming.md'],
   },
   {
    text: 'FreeBSD 手册',
    children: ['/freebsd-shou-ce.md'],
   },
   {
    text: '目录',
    children: ['/SUMMARY.md'],
   },
   {
    text: '概述',
    children: ['/gai-shu.md'],
  },
  {
    text: '前言',
    children: [
      '/qian-yan/zhi-du-zhe.md',
      '/qian-yan/di-si-ban.md',
      '/qian-yan/di-san-ban.md',
	  '/qian-yan/di-er-ban-2004.md',
      '/qian-yan/di-yi-ban-2001.md',
      '/qian-yan/ben-shu-de-zu-zhi-jie-gou.md',
      '/qian-yan/ben-shu-zhong-shi-yong-de-yi-xie-yue-ding.md',
      '/qian-yan/zhi-xie.md',
    ],
  },
  {
    text: '第一部分：快速开始',
    children: ['/di-yi-bu-fen-kuai-su-kai-shi.md'],
  },
  {
    text: '第1章 简介',
    children: [
      '/di-1-zhang-jian-jie/1.1.-gai-shu.md',
      '/di-1-zhang-jian-jie/1.2.-huan-ying-lai-dao-freebsd.md',
      '/di-1-zhang-jian-jie/1.3.-guan-yu-freebsd-xiang-mu.md',
    ],
  },
  {
    text: '第2章 安装 FreeBSD',
    children: [
      '/di-2-zhang-an-zhuang-freebsd/2.1.-gai-shu.md',
      '/di-2-zhang-an-zhuang-freebsd/2.2.-zui-di-ying-jian-yao-qiu.md',
      '/di-2-zhang-an-zhuang-freebsd/2.3.-an-zhuang-qian-de-zhun-bei-gong-zuo.md',
      '/di-2-zhang-an-zhuang-freebsd/2.4.-kai-shi-an-zhuang.md',
      '/di-2-zhang-an-zhuang-freebsd/2.5.-shi-yong-bsdinstall.md',
      '/di-2-zhang-an-zhuang-freebsd/2.6.-fen-pei-ci-pan-kong-jian.md',
      '/di-2-zhang-an-zhuang-freebsd/2.7.-huo-qu-an-zhuang-wen-jian.md',
      '/di-2-zhang-an-zhuang-freebsd/2.8.-zhang-hu-shi-qu-fu-wu-he-an-quan.md',
      '/di-2-zhang-an-zhuang-freebsd/2.9.-gu-zhang-pai-chu.md',
      '/di-2-zhang-an-zhuang-freebsd/2.10.-shi-yong-live-cd.md',
    ],
  },
  {
    text: '第3章 FreeBSD 基础',
    children: [
      '/di-3-zhang-freebsd-ji-chu/3.1.-gai-shu.md',
      '/di-3-zhang-freebsd-ji-chu/3.2.-xu-ni-kong-zhi-tai-he-zhong-duan.md',
      '/di-3-zhang-freebsd-ji-chu/3.3.-yong-hu-he-ji-ben-zhang-hu-guan-li.md',
      '/di-3-zhang-freebsd-ji-chu/3.4.-quan-xian.md',
      '/di-3-zhang-freebsd-ji-chu/3.5.-mu-lu-jie-gou.md',
      '/di-3-zhang-freebsd-ji-chu/3.6.-ci-pan-jie-gou.md',
      '/di-3-zhang-freebsd-ji-chu/3.7.-wen-jian-xi-tong-de-gua-zai-yu-xie-zai.md',
      '/di-3-zhang-freebsd-ji-chu/3.8.-jin-cheng-he-shou-hu-jin-cheng.md',
      '/di-3-zhang-freebsd-ji-chu/3.9.shell.md',
      '/di-3-zhang-freebsd-ji-chu/3.10.-wen-ben-bian-ji-qi.md',
      '/di-3-zhang-freebsd-ji-chu/3.11.-she-bei-he-she-bei-jie-dian.md',
      '/di-3-zhang-freebsd-ji-chu/3.12.-shou-ce-ye.md',
    ],
  },
  {
    text: '第4章 安装应用程序：软件包和 Ports',
    children: [
      '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.1.-gai-shu.md',
      '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.2.-ruan-jian-an-zhuang-de-gai-shu.md',
      '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.3.-xun-zhao-suo-xu-de-ying-yong-cheng-xu.md',
      '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.4.-shi-yong-pkg-jin-hang-er-jin-zhi-bao-guan-li.md',
      '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.5.-shi-yong-ports.md',
      '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.6.-shi-yong-poudriere-gou-jian-ruan-jian-bao.md',
      '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.7.-an-zhuang-hou-de-zhu-yi-shi-xiang.md',
      '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.8.-ru-he-chu-li-sun-huai-de-port.md',
    ],
  },
  {
    text: '第5章 X Window 系统',
    children: [
		'/di-5-zhang-xwindow-xi-tong/5.1.-gai-shu.md',
		'/di-5-zhang-xwindow-xi-tong/5.2.-an-zhuang-xorg.md',
		'/di-5-zhang-xwindow-xi-tong/5.3.-xian-ka-qu-dong.md',
		'/di-5-zhang-xwindow-xi-tong/5.4.-xorg-pei-zhi.md',
		'/di-5-zhang-xwindow-xi-tong/5.5.-zai-x11-zhong-shi-yong-zi-ti.md',
    ],
  },
  {
    text: '第二部分：常见任务',
    children: ['/di-er-bu-fen-chang-jian-ren-wu.md'],
  },
  {
    text: '第6章 FreeBSD 中的 Wayland',
    children: [
		'/di-6-zhang-freebsd-zhong-de-wayland/6.1.-wayland-gai-shu.md',
		'/di-6-zhang-freebsd-zhong-de-wayland/6.2.wayfire-hun-cheng-qi.md',
		'/di-6-zhang-freebsd-zhong-de-wayland/6.3.hikari-hun-cheng-qi.md',
		'/di-6-zhang-freebsd-zhong-de-wayland/6.4.sway-hun-cheng-qi.md',
		'/di-6-zhang-freebsd-zhong-de-wayland/6.5.-shi-yong-xwayland.md',
		'/di-6-zhang-freebsd-zhong-de-wayland/6.6.-shi-yong-vnc-jin-hang-yuan-cheng-lian-jie.md',
		'/di-6-zhang-freebsd-zhong-de-wayland/6.7.-wayland-deng-lu-guan-li-qi.md',
		'/di-6-zhang-freebsd-zhong-de-wayland/6.8.-shi-yong-gong-ju.md',
	],
  },
  {
    text: '第7章 桌面环境',
    children: [
		'/di-7-zhang-zhuo-mian-huan-jing/7.1.-gai-shu.md',
		'/di-7-zhang-zhuo-mian-huan-jing/7.2.-zhuo-mian-huan-jing.md',
		'/di-7-zhang-zhuo-mian-huan-jing/7.3.-liu-lan-qi.md',
		'/di-7-zhang-zhuo-mian-huan-jing/7.4.-kai-fa-gong-ju.md',
		'/di-7-zhang-zhuo-mian-huan-jing/7.5.-zhuo-mian-sheng-chan-li-gong-ju.md',
		'/di-7-zhang-zhuo-mian-huan-jing/7.6.-wen-dang-yue-du-qi.md',
		'/di-7-zhang-zhuo-mian-huan-jing/7.7.-cai-wu.md',
    ],
  },
  {
    text: '第8章 多媒体',
    children: [
		'/di-8-zhang-duo-mei-ti/8.1.-gai-shu.md',
		'/di-8-zhang-duo-mei-ti/8.2.-she-zhi-sheng-ka.md',
		'/di-8-zhang-duo-mei-ti/8.3.mp3-yin-pin.md',
		'/di-8-zhang-duo-mei-ti/8.4.-shi-pin-bo-fang.md',
		'/di-8-zhang-duo-mei-ti/8.5.-dian-shi-ka.md',
		'/di-8-zhang-duo-mei-ti/8.6.mythtv.md',
		'/di-8-zhang-duo-mei-ti/8.7.-tu-xiang-sao-miao-yi.md',
    ],
  },
  {
    text: '第9章 配置 FreeBSD 内核',
    children: [
		'/di-9-zhang-pei-zhi-freebsd-nei-he/9.1.-gai-shu.md',
		'/di-9-zhang-pei-zhi-freebsd-nei-he/9.2.-wei-shi-mo-yao-bian-yi-zi-ding-yi-nei-he.md',
		'/di-9-zhang-pei-zhi-freebsd-nei-he/9.3.-liu-lan-xi-tong-ying-jian.md',
		'/di-9-zhang-pei-zhi-freebsd-nei-he/9.4.-pei-zhi-wen-jian.md',
		'/di-9-zhang-pei-zhi-freebsd-nei-he/9.5.-bian-yi-yu-an-zhuang-ding-zhi-nei-he.md',
		'/di-9-zhang-pei-zhi-freebsd-nei-he/9.6.-ru-guo-fa-sheng-le-yi-xie-cuo-wu.md',
    ],
  },
  {
    text: '第10章 打印',
    children: [
		'/di-10-zhang-da-yin/10.1.-kuai-su-ru-men.md',
		'/di-10-zhang-da-yin/10.2.-lian-jie-da-yin-ji.md',
		'/di-10-zhang-da-yin/10.3.-chang-jian-de-ye-mian-miao-shu-yu-yan.md',
		'/di-10-zhang-da-yin/10.4.-zhi-jie-da-yin.md',
		'/di-10-zhang-da-yin/10.5.lpd-hang-shi-da-yin-ji-cheng-xu.md',
		'/di-10-zhang-da-yin/10.6.-qi-ta-da-yin-xi-tong.md',
    ],
  },
  {
    text: '第11章 Linux 二进制兼容层',
    children: [
		'/di-11-zhang-linux-er-jin-zhi-jian-rong-ceng/11.1.-gai-shu.md',
		'/di-11-zhang-linux-er-jin-zhi-jian-rong-ceng/11.2.-pei-zhi-linux-er-jin-zhi-jian-rong-ceng.md',
		'/di-11-zhang-linux-er-jin-zhi-jian-rong-ceng/10.3.-cong-freebsd-ruan-jian-bao-an-zhuang-centos-ji-chu-xi-tong.md',
		'/di-11-zhang-linux-er-jin-zhi-jian-rong-ceng/11.4.-shi-yong-debootstrap8-gou-jian-debian-ubuntu-ji-ben-xi-tong.md',
		'/di-11-zhang-linux-er-jin-zhi-jian-rong-ceng/11.5.-gao-ji-zhu-ti.md',
    ],
  },
  {
    text: '第12章 WINE',
    children: [
		'/di-12-zhang-wine/12.1.-gai-shu.md',
		'/di-12-zhang-wine/12.2.wine-gai-shu-he-gai-nian.md',
		'/di-12-zhang-wine/12.3.-zai-freebsd-shang-an-zhuang-wine.md',
		'/di-12-zhang-wine/12.4.-zai-freebsd-shang-yun-hang-di-yi-ge-wine-cheng-xu.md',
		'/di-12-zhang-wine/12.5.-pei-zhi-wine-an-zhuang.md',
		'/di-12-zhang-wine/12.6.wine-tu-xing-guan-li-yong-hu-jie-mian.md',
		'/di-12-zhang-wine/12.7.freebsd-duo-yong-hu-yu-wine.md',
		'/di-12-zhang-wine/12.8.wine-yu-freebsd-faq.md',
    ],
  },
  {
    text: '第三部分：系统管理',
    children: ['/di-san-bu-fen-xi-tong-guan-li.md'],
  },
  {
    text: '第13章 配置与优化',
    children: [
		'/di-13-zhang-pei-zhi-yu-you-hua/13.1.-gai-shu.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.2.-qi-dong-fu-wu.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.3.-pei-zhi-cron8.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.4.-guan-li-freebsd-zhong-de-fu-wu.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.5.-she-zhi-wang-ka.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.6.-xu-ni-zhu-ji.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.7.-pei-zhi-xi-tong-ri-zhi.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.8.-pei-zhi-wen-jian.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.9.-shi-yong-sysctl8-jin-hang-you-hua.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.10.-ci-pan-you-hua.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.11.-nei-he-can-shu-you-hua.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.12.-tian-jia-jiao-huan-kong-jian.md',
		'/di-13-zhang-pei-zhi-yu-you-hua/13.13.-dian-yuan-he-zi-yuan-guan-li.md',
    ],
  },
  {
    text: '第14章 FreeBSD 的引导过程',
    children: [
		'/di-14-zhang-freebsd-de-yin-dao-guo-cheng/14.1.-gai-shu.md',
		'/di-14-zhang-freebsd-de-yin-dao-guo-cheng/14.2.freebsd-de-yin-dao-guo-cheng.md',
		'/di-14-zhang-freebsd-de-yin-dao-guo-cheng/14.3.device-hints.md',
		'/di-14-zhang-freebsd-de-yin-dao-guo-cheng/14.4.-guan-ji-liu-cheng.md',
    ],
  },
  {
    text: '第15章 安全',
    children: [
		'/di-15-zhang-an-quan/15.1.-gai-shu.md',
		'/di-15-zhang-an-quan/15.2.-jian-jie.md',
		'/di-15-zhang-an-quan/15.3.-yi-ci-xing-mi-ma.md',
		'/di-15-zhang-an-quan/15.4.tcp-wrapper.md',
		'/di-15-zhang-an-quan/15.5.kerberos.md',
		'/di-15-zhang-an-quan/15.6.openssl.md',
		'/di-15-zhang-an-quan/15.7.ipsec-vpn.md',
		'/di-15-zhang-an-quan/15.8.openssh.md',
		'/di-15-zhang-an-quan/15.9.-wen-jian-xi-tong-fang-wen-kong-zhi-lie-biao.md',
		'/di-15-zhang-an-quan/15.10.-jian-ce-di-san-fang-an-quan-wen-ti.md',
		'/di-15-zhang-an-quan/15.11.freebsd-an-quan-gong-gao.md',
		'/di-15-zhang-an-quan/15.12.-jin-cheng-shen-ji.md',
		'/di-15-zhang-an-quan/15.13.-zi-yuan-pei-e.md',
		'/di-15-zhang-an-quan/15.14.-shi-yong-sudo-guan-li-quan-xian.md',
		'/di-15-zhang-an-quan/15.15.-shi-yong-doas-lai-dai-ti-sudo.md',
    ],
  },
  {
    text: '第16章 Jail',
    children: [
		'/di-16-zhang-jail/16.1.-gai-shu.md',
		'/di-16-zhang-jail/16.2.-yu-jail-you-guan-de-shu-yu.md',
		'/di-16-zhang-jail/16.3.-jian-li-he-kong-zhi-jail.md',
		'/di-16-zhang-jail/16.4.-wei-tiao-he-guan-li.md',
		'/di-16-zhang-jail/16.5.-geng-xin-duo-ge-jail.md',
		'/di-16-zhang-jail/16.6.-shi-yong-ezjail-guan-li-jail.md',
    ],
  },
  {
    text: '第17章 强制访问控制',
    children: [
		'/di-17-zhang-qiang-zhi-fang-wen-kong-zhi/17.1.-gai-shu.md',
		'/di-17-zhang-qiang-zhi-fang-wen-kong-zhi/17.2.-guan-jian-shu-yu.md',
		'/di-17-zhang-qiang-zhi-fang-wen-kong-zhi/17.3.-le-jie-mac-biao-qian.md',
		'/di-17-zhang-qiang-zhi-fang-wen-kong-zhi/17.4.-gui-hua-an-quan-pei-zhi.md',
		'/di-17-zhang-qiang-zhi-fang-wen-kong-zhi/17.5.-ke-yong-de-mac-ce-lve.md',
		'/di-17-zhang-qiang-zhi-fang-wen-kong-zhi/17.6.-yong-hu-suo-ding.md',
		'/di-17-zhang-qiang-zhi-fang-wen-kong-zhi/17.7.mac-jail-zhong-de-nagios.md',
		'/di-17-zhang-qiang-zhi-fang-wen-kong-zhi/17.8.mac-kuang-jia-de-gu-zhang-pai-chu.md',
    ],
  },
  {
    text: '第18章 安全事件审计',
    children: [
		'/di-18-zhang-an-quan-shi-jian-shen-ji/18.1.-gai-shu.md',
		'/di-18-zhang-an-quan-shi-jian-shen-ji/18.2.-guan-jian-shu-yu.md',
		'/di-18-zhang-an-quan-shi-jian-shen-ji/18.3.-shen-ji-pei-zhi.md',
		'/di-18-zhang-an-quan-shi-jian-shen-ji/18.4.-shi-yong-shen-ji-gen-zong.md',
    ],
  },
  {
    text: '第19章 存储',
    children: [
		'/di-19-zhang-cun-chu/19.1.-gai-shu.md',
		'/di-19-zhang-cun-chu/19.2.-tian-jia-ci-pan.md',
		'/di-19-zhang-cun-chu/19.3.-tiao-zheng-he-zeng-jia-ci-pan-da-xiao.md',
		'/di-19-zhang-cun-chu/19.4.usb-cun-chu-she-bei.md',
		'/di-19-zhang-cun-chu/19.5.-chuang-jian-he-shi-yong-cd.md',
		'/di-19-zhang-cun-chu/19.6.-chuang-jian-he-shi-yong-dvd.md',
		'/di-19-zhang-cun-chu/19.7.-chuang-jian-he-shi-yong-ruan-pan.md',
		'/di-19-zhang-cun-chu/19.8.-shi-yong-ntfs-ci-pan.md',
		'/di-19-zhang-cun-chu/19.9.-bei-fen-de-ji-chu-zhi-shi.md',
		'/di-19-zhang-cun-chu/19.10.-nei-cun-pan.md',
		'/di-19-zhang-cun-chu/19.11.-wen-jian-xi-tong-kuai-zhao.md',
		'/di-19-zhang-cun-chu/19.12.-ci-pan-pei-e.md',
		'/di-19-zhang-cun-chu/19.13.-jia-mi-ci-pan-fen-qu.md',
		'/di-19-zhang-cun-chu/19.14.-jia-mi-jiao-huan-fen-qu.md',
		'/di-19-zhang-cun-chu/19.15.-gao-ke-yong-xing-cun-chu-hast.md',
    ],
  },
  {
    text: '第20章 GEOM: 模块化磁盘转换框架',
    children: [
		'/di-20-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/20.1.-gai-shu.md',
		'/di-20-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/20.2.raid0-tiao-dai.md',
		'/di-20-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/20.3.raid1-jing-xiang.md',
		'/di-20-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/20.4.raid3-dai-you-zhuan-yong-qi-ou-xiao-yan-de-zi-jie-ji-tiao-dai.md',
		'/di-20-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/20.5.-ruan-jian-raid-she-bei.md',
		'/di-20-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/20.6.geom-gate-wang-luo-she-bei.md',
		'/di-20-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/20.7.-wei-ci-pan-she-bei-tian-jia-juan-biao.md',
		'/di-20-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/20.8.-tong-guo-geom-shi-xian-ufs-ri-zhi.md',
    ],
  },
  {
    text: '第21章 Z 文件系统（ZFS）',
    children: [
		'/di-21-zhang-z-wen-jian-xi-tong-zfs/21.1.-shi-shi-mo-shi-zfs-yu-zhong-bu-tong.md',
		'/di-21-zhang-z-wen-jian-xi-tong-zfs/21.2.-kuai-su-ru-men-zhi-nan.md',
		'/di-21-zhang-z-wen-jian-xi-tong-zfs/21.3.zpool-guan-li.md',
		'/di-21-zhang-z-wen-jian-xi-tong-zfs/21.4.zfs-guan-li.md',
		'/di-21-zhang-z-wen-jian-xi-tong-zfs/21.5.-wei-tuo-guan-li.md',
		'/di-21-zhang-z-wen-jian-xi-tong-zfs/21.6.-gao-ji-zhu-ti.md',
		'/di-21-zhang-z-wen-jian-xi-tong-zfs/21.7.-geng-duo-zi-yuan.md',
		'/di-21-zhang-z-wen-jian-xi-tong-zfs/21.8.zfs-te-xing-he-shu-yu.md',
    ],
  },
  {
    text: '第22章 其他文件系统',
    children: [
		'/di-22-zhang-qi-ta-wen-jian-xi-tong/22.1.-gai-shu.md',
		'/di-22-zhang-qi-ta-wen-jian-xi-tong/22.2.linux-wen-jian-xi-tong.md',
    ],
  },
  {
    text: '第23章 虚拟化',
    children: [
		'/di-23-zhang-xu-ni-hua/23.1.-gai-shu.md',
		'/di-23-zhang-xu-ni-hua/23.2.-shi-yong-macos-shang-de-parallels-desktop-an-zhuang-freebsd.md',
		'/di-23-zhang-xu-ni-hua/23.3.-shi-yong-macos-shang-de-vmware-fusion-an-zhuang-freebsd.md',
		'/di-23-zhang-xu-ni-hua/23.4.-shi-yong-virtualbox-an-zhuang-freebsd.md',
		'/di-23-zhang-xu-ni-hua/23.5.-zai-freebsd-shang-an-zhuang-virtualbox.md',
		'/di-23-zhang-xu-ni-hua/23.6.-shi-yong-freebsd-shang-de-bhyve-xu-ni-ji.md',
		'/di-23-zhang-xu-ni-hua/23.7.-shi-yong-freebsd-shang-de-xen-xu-ni-ji.md',
    ],
  },
  {
    text: '第24章 本地化——i18n/L10n 的使用和设置',
    children: [
		'/di-24-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/24.1.-gai-shu.md',
		'/di-24-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/24.2.-shi-yong-ben-di-hua.md',
		'/di-24-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/24.3.-xun-zhao-i18n-ying-yong-cheng-xu.md',
		'/di-24-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/24.4.-te-ding-yu-yan-de-qu-yu-pei-zhi.md',
    ],
  },
  {
    text: '第25章 FreeBSD 更新与升级',
    children: [
		'/di-25-zhang-freebsd-geng-xin-yu-sheng-ji/25.1.-gai-shu.md',
		'/di-25-zhang-freebsd-geng-xin-yu-sheng-ji/25.2.-geng-xin-freebsd.md',
		'/di-25-zhang-freebsd-geng-xin-yu-sheng-ji/25.3.-geng-xin-bootcode.md',
		'/di-25-zhang-freebsd-geng-xin-yu-sheng-ji/25.4.-geng-xin-wen-dang.md',
		'/di-25-zhang-freebsd-geng-xin-yu-sheng-ji/25.5.-zhui-zong-kai-fa-fen-zhi.md',
		'/di-25-zhang-freebsd-geng-xin-yu-sheng-ji/25.6.-cong-yuan-dai-ma-geng-xin-freebsd.md',
		'/di-25-zhang-freebsd-geng-xin-yu-sheng-ji/25.7.-duo-tai-ji-qi-de-zhui-zong.md',
    ],
  },
  {
    text: '第26章 DTrace',
    children: [
		'/di-26-zhang-dtrace/26.1.-gai-shu.md',
		'/di-26-zhang-dtrace/26.2.-shi-xian-shang-de-cha-yi.md',
		'/di-26-zhang-dtrace/26.3.-kai-qi-dtrace-zhi-chi.md',
		'/di-26-zhang-dtrace/26.4.-shi-yong-dtrace.md',
    ],
  },
  {
    text: '第27章 USB 设备模式/USB OTG',
    children: [
		'/di-27-zhang-usb-she-bei-mo-shi-usb-otg/27.1.-gai-shu.md',
		'/di-27-zhang-usb-she-bei-mo-shi-usb-otg/27.2.usb-xu-ni-chuan-hang-duan-kou.md',
		'/di-27-zhang-usb-she-bei-mo-shi-usb-otg/27.3.usb-she-bei-mo-shi-wang-luo-jie-kou.md',
		'/di-27-zhang-usb-she-bei-mo-shi-usb-otg/27.4.usb-xu-ni-cun-chu-she-bei.md',
    ],
  },
  {
    text: '第四部分：网络通讯',
    children: ['/di-si-bu-fen-wang-luo-tong-xun.md'],
  },
  {
    text: '第28章 串行通信',
    children: [
		'/di-28-zhang-chuan-hang-tong-xin/28.1.-gai-shu.md',
		'/di-28-zhang-chuan-hang-tong-xin/28.2.-chuan-hang-shu-yu-he-ying-jian.md',
		'/di-28-zhang-chuan-hang-tong-xin/28.3.-zhong-duan.md',
		'/di-28-zhang-chuan-hang-tong-xin/28.4.-bo-ru-fu-wu.md',
		'/di-28-zhang-chuan-hang-tong-xin/28.5.-bo-chu-fu-wu.md',
		'/di-28-zhang-chuan-hang-tong-xin/28.6.-she-zhi-chuan-hang-kong-zhi-tai.md',
    ],
  },
  {
    text: '第29章 PPP',
    children: [
		'/di-29-zhang-ppp/29.1.-gai-shu.md',
		'/di-29-zhang-ppp/29.2.-pei-zhi-ppp.md',
		'/di-29-zhang-ppp/29.3.ppp-lian-jie-de-gu-zhang-pai-chu.md',
		'/di-29-zhang-ppp/29.4.-shi-yong-yi-tai-wang-ppppppoe.md',
		'/di-29-zhang-ppp/29.5.-shi-yong-atm-shang-de-ppp-pppoa.md',
    ],
  },
  {
    text: '第30章 电子邮件',
    children: [
		'/di-30-zhang-dian-zi-you-jian/30.1.-gai-shu.md',
		'/di-30-zhang-dian-zi-you-jian/30.2.-you-jian-zu-jian.md',
		'/di-30-zhang-dian-zi-you-jian/30.3.sendmail-pei-zhi-wen-jian.md',
		'/di-30-zhang-dian-zi-you-jian/30.4.-gai-bian-you-jian-chuan-shu-dai-li.md',
		'/di-30-zhang-dian-zi-you-jian/30.5.-gu-zhang-pai-chu.md',
		'/di-30-zhang-dian-zi-you-jian/30.6.-gao-ji-zhu-ti.md',
		'/di-30-zhang-dian-zi-you-jian/30.7.-she-zhi-wei-jin-fa-song.md',
		'/di-30-zhang-dian-zi-you-jian/30.8.-zai-bo-hao-lian-jie-zhong-shi-yong-you-jian.md',
		'/di-30-zhang-dian-zi-you-jian/30.9.smtp-ren-zheng.md',
		'/di-30-zhang-dian-zi-you-jian/30.10.-you-jian-yong-hu-dai-li.md',
		'/di-30-zhang-dian-zi-you-jian/30.11.-shi-yong-fetchmail.md',
		'/di-30-zhang-dian-zi-you-jian/30.12.-shi-yong-procmail.md',
    ],
  },
  {
    text: '第31章 网络服务器',
    children: [
		'/di-31-zhang-wang-luo-fu-wu-qi/31.1.-gai-shu.md',
		'/di-31-zhang-wang-luo-fu-wu-qi/31.2.inetd-chao-ji-fu-wu-qi.md',
		'/di-31-zhang-wang-luo-fu-wu-qi/31.3.-wang-luo-wen-jian-xi-tong-nfs.md',
		'/di-31-zhang-wang-luo-fu-wu-qi/31.4.-wang-luo-xin-xi-xi-tong-nis.md',
		'/di-31-zhang-wang-luo-fu-wu-qi/31.5.-qing-xing-mu-lu-fang-wen-xie-yi-ldap.md',
		'/di-31-zhang-wang-luo-fu-wu-qi/31.6.-dong-tai-zhu-ji-she-zhi-xie-yi-dhcp.md',
		'/di-31-zhang-wang-luo-fu-wu-qi/31.7.-yu-ming-xi-tong-dns.md',
		'/di-31-zhang-wang-luo-fu-wu-qi/31.8.apache-http-fu-wu-qi.md',
		'/di-31-zhang-wang-luo-fu-wu-qi/31.9.-wen-jian-chuan-shu-xie-yi-ftp.md',
		'/di-31-zhang-wang-luo-fu-wu-qi/31.10.-yong-yu-microsoft-windows-ke-hu-duan-de-wen-jian-he-da-yin-fu-wu-samba.md',
		'/di-31-zhang-wang-luo-fu-wu-qi/31.11.-yong-ntp-jin-hang-shi-zhong-tong-bu.md',
		'/di-31-zhang-wang-luo-fu-wu-qi/31.12.iscsi-target-he-initiator-de-pei-zhi.md',
    ],
  },
  {
    text: '第32章 防火墙',
    children: [
		'/di-32-zhang-fang-huo-qiang/32.1.-gai-shu.md',
		'/di-32-zhang-fang-huo-qiang/32.2.-fang-huo-qiang-de-gai-nian.md',
		'/di-32-zhang-fang-huo-qiang/32.3.pf.md',
		'/di-32-zhang-fang-huo-qiang/32.4.ipfw.md',
		'/di-32-zhang-fang-huo-qiang/32.5.ipfilter-ipf.md',
		'/di-32-zhang-fang-huo-qiang/32.6.blacklistd.md',
    ],
  },
  {
    text: '第33章 高级网络',
    children: [
		'/di-33-zhang-gao-ji-wang-luo/33.1.-gai-shu.md',
		'/di-33-zhang-gao-ji-wang-luo/33.2.-wang-guan-he-lu-you.md',
		'/di-33-zhang-gao-ji-wang-luo/33.3.-wu-xian-wang-luo.md',
		'/di-33-zhang-gao-ji-wang-luo/33.4.usb-wang-luo-gong-xiang.md',
		'/di-33-zhang-gao-ji-wang-luo/33.5.-lan-ya.md',
		'/di-33-zhang-gao-ji-wang-luo/33.6.-qiao-jie.md',
		'/di-33-zhang-gao-ji-wang-luo/33.7.-lian-lu-ju-he-yu-gu-zhang-zhuan-yi.md',
		'/di-33-zhang-gao-ji-wang-luo/33.8.-shi-yong-pxe-jin-hang-wu-pan-cao-zuo.md',
		'/di-33-zhang-gao-ji-wang-luo/33.9.ipv6.md',
		'/di-33-zhang-gao-ji-wang-luo/33.10.-gong-yong-di-zhi-rong-yu-xie-yi-carp.md',
		'/di-33-zhang-gao-ji-wang-luo/33.11.vlan.md',
    ],
  },
  {
    text: '第五部分：附录',
    children: ['/di-wu-bu-fen-fu-lu.md'],
  },
  {
    text: '附录 A. 获取 FreeBSD',
    children: [
      '/fu-lu-a.-huo-qu-freebsd/a.1.-jing-xiang-zhan.md',
      '/fu-lu-a.-huo-qu-freebsd/a.2.-shi-yong-git.md',
      '/fu-lu-a.-huo-qu-freebsd/a.3.-shi-yong-subversion.md',
      '/fu-lu-a.-huo-qu-freebsd/a.4.cd-he-dvd-tao-zhuang.md',
    ],
  },
  {
    text: '附录 B. 书目',
    children: [
      '/fu-lu-b.-shu-mu/b.1.freebsd-xiang-guan-shu-ji.md',
      '/fu-lu-b.-shu-mu/b.2.-an-quan-xing-can-kao-wen-xian.md',
      '/fu-lu-b.-shu-mu/b.3.unix-li-shi.md',
      '/fu-lu-b.-shu-mu/b.4.-kai-fa-zhi-nan.md',
    ],
  },
  {
    text: '附录 C. 网络资源',
    children: [
      '/fu-lu-c.-wang-luo-zi-yuan/c.1.-wang-zhan.md',
      '/fu-lu-c.-wang-luo-zi-yuan/c.2.-you-jian-lie-biao.md',
      '/fu-lu-c.-wang-luo-zi-yuan/c.3.-usenet-xin-wen-zu.md',
    ],
  },
  {
    text: '附录 D. OpenPGP 密钥',
    children: ['/fu-lu-d.-openpgp-mi-yue/d.1.-guan-fang-cheng-yuan.md'],
  },
  {
    text: '术语表',
    children: ['/shu-yu-biao.md'],
  },
  {
    text: '后记',
    children: ['/hou-ji.md'],
  },
];
