/**
* @file configs/sidebar.ts
* @brief Contains the SidebarConfig object.
* @copyright Copyright "/c) 2022 The FreeBSD Ask Authors. All rights reserved.
*/

import type { SidebarConfig } from "@vuepress/theme-default";

export const sideBarConfig: SidebarConfig = [
{
  text: "FreeBSD 手册",
  children: [
    "/README.md",
    "/freebsd-shou-ce.md",
    "/gai-shu.md"
  ],
  
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
  text: "第一部分：快速开始",
  children: [
    "/di-yi-bu-fen-kuai-su-kai-shi.md",
    
  ],
  
},
{
  text: "第1章 简介",
  children: [
    "/di-1-zhang-jian-jie/1.1.-gai-shu.md",
    "/di-1-zhang-jian-jie/1.2.-huan-ying-lai-dao-freebsd.md",
    "/di-1-zhang-jian-jie/1.3.-guan-yu-freebsd-xiang-mu.md",
    
  ],
  
},
{
  text: "第2章 安装 FreeBSD",
  children: [
    "/di-2-zhang-an-zhuang-freebsd/2.1.-gai-shu.md",
    "/di-2-zhang-an-zhuang-freebsd/2.2.-zui-di-ying-jian-yao-qiu.md",
    "/di-2-zhang-an-zhuang-freebsd/2.3.-an-zhuang-qian-de-zhun-bei-gong-zuo.md",
    "/di-2-zhang-an-zhuang-freebsd/2.4.-kai-shi-an-zhuang.md",
    "/di-2-zhang-an-zhuang-freebsd/2.5.-shi-yong-bsdinstall.md",
    "/di-2-zhang-an-zhuang-freebsd/2.6.-fen-pei-ci-pan-kong-jian.md",
    "/di-2-zhang-an-zhuang-freebsd/2.7.-huo-qu-an-zhuang-wen-jian.md",
    "/di-2-zhang-an-zhuang-freebsd/2.8.-zhang-hu-shi-qu-fu-wu-he-an-quan.md",
    "/di-2-zhang-an-zhuang-freebsd/2.9.-wang-luo-jie-kou.md",
    "/di-2-zhang-an-zhuang-freebsd/2.10.-gu-zhang-pai-chu.md",
    "/di-2-zhang-an-zhuang-freebsd/2.11.-shi-yong-live-cd.md",
    
  ],
  
},
{
  text: "第3章 FreeBSD 基础",
  children: [
    "/di-3-zhang-freebsd-ji-chu/3.1.-gai-shu.md",
    "/di-3-zhang-freebsd-ji-chu/3.2.-xu-ni-kong-zhi-tai-he-zhong-duan.md",
    "/di-3-zhang-freebsd-ji-chu/3.3.-yong-hu-he-ji-ben-zhang-hu-guan-li.md",
    "/di-3-zhang-freebsd-ji-chu/3.4.-quan-xian.md",
    "/di-3-zhang-freebsd-ji-chu/3.5.-mu-lu-jie-gou.md",
    "/di-3-zhang-freebsd-ji-chu/3.6.-ci-pan-zu-zhi.md",
    "/di-3-zhang-freebsd-ji-chu/3.7.-wen-jian-xi-tong-de-gua-zai-yu-xie-zai.md",
    "/di-3-zhang-freebsd-ji-chu/3.8.-jin-cheng-he-shou-hu-jin-cheng.md",
    "/di-3-zhang-freebsd-ji-chu/3.9.shell.md",
    "/di-3-zhang-freebsd-ji-chu/3.10.-wen-ben-bian-ji-qi.md",
    "/di-3-zhang-freebsd-ji-chu/3.11.-she-bei-he-she-bei-jie-dian.md",
    "/di-3-zhang-freebsd-ji-chu/3.12.-shou-ce-ye.md",
    
  ],
  
},
{
  text: "第4章 安装应用程序: Package 和 Port",
  children: [
    "/di-4-zhang-an-zhuang-ying-yong-cheng-xu-package-he-port/4.1.-gai-shu.md",
    "/di-4-zhang-an-zhuang-ying-yong-cheng-xu-package-he-port/4.2.-ruan-jian-an-zhuang-de-gai-shu.md",
    "/di-4-zhang-an-zhuang-ying-yong-cheng-xu-package-he-port/4.3.-xun-zhao-suo-xu-de-ying-yong-cheng-xu.md",
    "/di-4-zhang-an-zhuang-ying-yong-cheng-xu-package-he-port/4.4.-shi-yong-pkg-jin-hang-er-jin-zhi-bao-guan-li.md",
    "/di-4-zhang-an-zhuang-ying-yong-cheng-xu-package-he-port/4.5.-shi-yong-ports-collection.md",
    "/di-4-zhang-an-zhuang-ying-yong-cheng-xu-package-he-port/4.6.-shi-yong-poudriere-gou-jian-ruan-jian-bao.md",
    "/di-4-zhang-an-zhuang-ying-yong-cheng-xu-package-he-port/4.7.-an-zhuang-hou-de-zhu-yi-shi-xiang.md",
    "/di-4-zhang-an-zhuang-ying-yong-cheng-xu-package-he-port/4.8.-ru-he-chu-li-sun-huai-de-port.md",
    
  ],
  
},
{
  text: "第5章 X Window 系统",
  children: [
    "/di-5-zhang-xwindow-xi-tong/5.1.-gai-shu.md",
    "/di-5-zhang-xwindow-xi-tong/5.2.-shu-yu.md",
    "/di-5-zhang-xwindow-xi-tong/5.3.-an-zhuang-xorg.md",
    "/di-5-zhang-xwindow-xi-tong/5.4.-xorg-pei-zhi.md",
    "/di-5-zhang-xwindow-xi-tong/5.5.-zai-x11-zhong-shi-yong-zi-ti.md",
    "/di-5-zhang-xwindow-xi-tong/5.6.x-xian-shi-guan-li-qi.md",
    "/di-5-zhang-xwindow-xi-tong/5.7.-zhuo-mian-huan-jing.md",
    "/di-5-zhang-xwindow-xi-tong/5.8.-shi-yong-compiz-fusion.md",
    "/di-5-zhang-xwindow-xi-tong/5.9.-gu-zhang-pai-chu.md",
    "/di-5-zhang-xwindow-xi-tong/5.10.freebsd-zhong-de-wayland.md",
    
  ],
  
},
{
  text: "第二部分：常见任务",
  children: [
    "/di-er-bu-fen-chang-jian-ren-wu.md",
    
  ],
  
},
{
  text: "第6章 桌面应用程序",
  children: [
    "/di-6-zhang-zhuo-mian-ying-yong-cheng-xu/6.1.-gai-shu.md",
    "/di-6-zhang-zhuo-mian-ying-yong-cheng-xu/6.2.-liu-lan-qi.md",
    "/di-6-zhang-zhuo-mian-ying-yong-cheng-xu/6.3.-sheng-chan-li-gong-ju.md",
    "/di-6-zhang-zhuo-mian-ying-yong-cheng-xu/6.4.-wen-dang-yue-du-qi.md",
    "/di-6-zhang-zhuo-mian-ying-yong-cheng-xu/6.5.-cai-wu.md",
    
  ],
  
},
{
  text: "第7章 多媒体",
  children: [
    "/di-7-zhang-duo-mei-ti/7.1.-gai-shu.md",
    "/di-7-zhang-duo-mei-ti/7.2.-she-zhi-sheng-ka.md",
    "/di-7-zhang-duo-mei-ti/7.3.mp3-yin-pin.md",
    "/di-7-zhang-duo-mei-ti/7.4.-shi-pin-hui-fang.md",
    "/di-7-zhang-duo-mei-ti/7.5.-dian-shi-ka.md",
    "/di-7-zhang-duo-mei-ti/7.6.mythtv.md",
    "/di-7-zhang-duo-mei-ti/7.7.-tu-xiang-sao-miao-yi.md",
    
  ],
  
},
{
  text: "第8章 配置 FreeBSD 内核",
  children: [
    "/di-8-zhang-pei-zhi-freebsd-nei-he/8.1.-gai-shu.md",
    "/di-8-zhang-pei-zhi-freebsd-nei-he/8.2.-wei-shi-mo-yao-gou-jian-zi-ding-yi-nei-he.md",
    "/di-8-zhang-pei-zhi-freebsd-nei-he/8.3.-liu-lan-xi-tong-ying-jian.md",
    "/di-8-zhang-pei-zhi-freebsd-nei-he/8.5.-gou-jian-yu-an-zhuang-zi-ding-yi-nei-he.md",
    "/di-8-zhang-pei-zhi-freebsd-nei-he/8.6.-ru-guo-fa-sheng-le-yi-xie-cuo-wu.md",
    
  ],
  
},
{
  text: "第9章 打印",
  children: [
    "/di-9-zhang-da-yin/9.1.-kuai-su-ru-men.md",
    "/di-9-zhang-da-yin/9.2.-da-yin-ji-lian-jie.md",
    "/di-9-zhang-da-yin/9.3.-chang-jian-de-ye-mian-miao-shu-yu-yan.md",
    "/di-9-zhang-da-yin/9.4.-zhi-jie-da-yin.md",
    "/di-9-zhang-da-yin/9.5.lpd-hang-shi-da-yin-ji-cheng-xu.md",
    "/di-9-zhang-da-yin/9.6.-qi-ta-da-yin-xi-tong.md",
    
  ],
  
},
{
  text: "第10章 Linux 二进制兼容层",
  children: [
    "/di-10-zhang-linux-er-jin-zhi-jian-rong-ceng/10.1.-gai-shu.md",
    "/di-10-zhang-linux-er-jin-zhi-jian-rong-ceng/10.2.-pei-zhi-linux-er-jin-zhi-jian-rong-ceng.md",
    "/di-10-zhang-linux-er-jin-zhi-jian-rong-ceng/10.3.-cong-freebsd-ruan-jian-bao-an-zhuang-centos-ji-chu-xi-tong.md",
    "/di-10-zhang-linux-er-jin-zhi-jian-rong-ceng/10.4.-shi-yong-debootstrap8-gou-jian-debian-ubuntu-ji-ben-xi-tong.md",
    "/di-10-zhang-linux-er-jin-zhi-jian-rong-ceng/10.5.-gao-ji-zhu-ti.md",
    
  ],
  
},
{
  text: "第11章 wine",
  children: [
    "/di-11-zhang-wine/11.1.-gai-shu.md",
    "/di-11-zhang-wine/11.2.-wine-gai-shu-he-gai-nian.md",
    "/di-11-zhang-wine/11.3.-zai-freebsd-shang-an-zhuang-wine.md",
    "/di-11-zhang-wine/11.4.-zai-freebsd-shang-yun-hang-di-yi-ge-wine-cheng-xu.md",
    "/di-11-zhang-wine/11.5.-pei-zhi-wine-an-zhuang.md",
    "/di-11-zhang-wine/11.6.-wine-tu-xing-guan-li-yong-hu-jie-mian.md",
    "/di-11-zhang-wine/11.7.-freebsd-duo-yong-hu-yu-wine.md",
    "/di-11-zhang-wine/11.8.-wine-yu-freebsd-faq.md",
    
  ],
  
},
{
  text: "第三部分：系统管理",
  children: [
    "/di-san-bu-fen-xi-tong-guan-li.md",
    
  ],
  
},
{
  text: "第12章 设置和调整",
  children: [
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.1.-gai-shu.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.2.-qi-dong-fu-wu.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.3.-pei-zhi-cron8.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.4.-guan-li-freebsd-zhong-de-fu-wu.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.5.-she-zhi-wang-ka.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.6.-xu-ni-zhu-ji.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.7.-pei-zhi-xi-tong-ri-zhi.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.8.-pei-zhi-wen-jian.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.9.-shi-yong-sysctl8-jin-hang-tiao-zheng.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.10.-tiao-zheng-ci-pan.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.11.-tiao-zheng-nei-he-xian-zhi.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.12.-tian-jia-jiao-huan-kong-jian.md",
    "/di-12-zhang-she-zhi-he-tiao-zheng/12.13.-dian-yuan-he-zi-yuan-guan-li.md",
    
  ],
  
},
{
  text: "第13章 FreeBSD 的启动过程",
  children: [
    "/di-13-zhang-freebsd-de-qi-dong-guo-cheng/13.1.-gai-shu.md",
    "/di-13-zhang-freebsd-de-qi-dong-guo-cheng/13.2.-freebsd-de-qi-dong-guo-cheng.md",
    "/di-13-zhang-freebsd-de-qi-dong-guo-cheng/13.3.-device-hints.md",
    "/di-13-zhang-freebsd-de-qi-dong-guo-cheng/13.4.-guan-ji-shun-xu.md",
    
  ],
  
},
{
  text: "第14章 安全",
  children: [
    "/di-14-zhang-an-quan/14.1.-gai-shu.md",
    "/di-14-zhang-an-quan/14.2.-jie-shao.md",
    "/di-14-zhang-an-quan/14.3.-yi-ci-xing-mi-ma.md",
    "/di-14-zhang-an-quan/14.4.tcp-wrapper.md",
    "/di-14-zhang-an-quan/14.5.-kerberos.md",
    "/di-14-zhang-an-quan/14.6.-openssl.md",
    "/di-14-zhang-an-quan/14.7.-ipsec-shang-de-vpn.md",
    "/di-14-zhang-an-quan/14.8.-openssh.md",
    "/di-14-zhang-an-quan/14.9.-wen-jian-xi-tong-fang-wen-kong-zhi-biao.md",
    "/di-14-zhang-an-quan/14.10.-jian-ce-di-san-fang-an-quan-wen-ti.md",
    "/di-14-zhang-an-quan/14.11.freebsd-an-quan-gong-gao.md",
    "/di-14-zhang-an-quan/14.12.-jin-cheng-shen-ji.md",
    "/di-14-zhang-an-quan/14.13.-zi-yuan-pei-e.md",
    "/di-14-zhang-an-quan/14.14.-shi-yong-sudo-guan-li-quan-xian.md",
    "/di-14-zhang-an-quan/14.15.-shi-yong-doas-zuo-wei-sudo-de-ti-dai-pin.md",
    
  ],
  
},
{
  text: "第15章 Jail",
  children: [
    "/di-15-zhang-jail/15.1.-gai-shu.md",
    "/di-15-zhang-jail/15.2.-yu-jail-you-guan-de-shu-yu.md",
    "/di-15-zhang-jail/15.3.-jian-li-he-kong-zhi-jail.md",
    "/di-15-zhang-jail/15.4.-wei-tiao-he-guan-li.md",
    "/di-15-zhang-jail/15.5.-geng-xin-duo-ge-jail.md",
    "/di-15-zhang-jail/15.6.-shi-yong-ezjail-guan-li-jail.md",
    
  ],
  
},
{
  text: "第16章 强制访问控制",
  children: [
    "/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.1.-gai-shu.md",
    "/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.2.-guan-jian-shu-yu.md",
    "/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.3.-le-jie-mac-biao-qian.md",
    "/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.4.-gui-hua-an-quan-pei-zhi.md",
    "/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.5.-ke-yong-de-mac-ce-lve.md",
    "/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.6.-yong-hu-suo-ding.md",
    "/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.7.mac-jail-zhong-de-nagios.md",
    "/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.8.-mac-kuang-jia-de-gu-zhang-pai-chu.md",
    
  ],
  
},
{
  text: "第17章 安全事件审计",
  children: [
    "/di-17-zhang-an-quan-shi-jian-shen-ji/17.1.-gai-shu.md",
    "/di-17-zhang-an-quan-shi-jian-shen-ji/17.2.-guan-jian-shu-yu.md",
    "/di-17-zhang-an-quan-shi-jian-shen-ji/17.3.-shen-ji-pei-zhi.md",
    "/di-17-zhang-an-quan-shi-jian-shen-ji/17.4.-shi-yong-shen-ji-zhui-zong.md",
    
  ],
  
},
{
  text: "第18章 存储",
  children: [
    "/di-18-zhang-cun-chu/18.1.-gai-shu.md",
    "/di-18-zhang-cun-chu/18.2.-tian-jia-ci-pan.md",
    "/di-18-zhang-cun-chu/18.3.-tiao-zheng-he-zeng-jia-ci-pan-da-xiao.md",
    "/di-18-zhang-cun-chu/18.4.-usb-cun-chu-she-bei.md",
    "/di-18-zhang-cun-chu/18.5.-chuang-jian-he-shi-yong-cd-mei-ti.md",
    "/di-18-zhang-cun-chu/18.6.-chuang-jian-he-shi-yong-dvd-mei-ti.md",
    "/di-18-zhang-cun-chu/18.7.-chuang-jian-he-shi-yong-ruan-pan.md",
    "/di-18-zhang-cun-chu/18.8.-shi-yong-ntfs-ci-pan.md",
    "/di-18-zhang-cun-chu/18.9.-bei-fen-ji-chu.md",
    "/di-18-zhang-cun-chu/18.10.-nei-cun-pan.md",
    "/di-18-zhang-cun-chu/18.11.-wen-jian-xi-tong-kuai-zhao.md",
    "/di-18-zhang-cun-chu/18.12.-ci-pan-pei-e.md",
    "/di-18-zhang-cun-chu/18.13.-jia-mi-ci-pan-fen-qu.md",
    "/di-18-zhang-cun-chu/18.14.-jia-mi-jiao-huan-fen-qu.md",
    "/di-18-zhang-cun-chu/18.15.-gao-ke-yong-xing-cun-chu-hast.md",
    
  ],
  
},
{
  text: "第19章 GEOM: 模块化磁盘转换框架",
  children: [
    "/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.1.-gai-shu.md",
    "/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.2.-raid0-tiao-dai.md",
    "/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.3.-raid1-jing-xiang.md",
    "/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.4.-raid3-dai-you-zhuan-yong-qi-ou-xiao-yan-de-zi-jie-ji-tiao-dai.md",
    "/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.5.-ruan-jian-raid-she-bei.md",
    "/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.6.-geom-gate-wang-luo-she-bei.md",
    "/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.7.-wei-ci-pan-she-bei-tian-jia-juan-biao.md",
    "/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.8.-tong-guo-geom-shi-xian-ufs-ri-zhi.md",
    
  ],
  
},
{
  text: "第20章 Z 文件系统 ZFS",
  children: [
    "/di-20-zhang-z-wen-jian-xi-tong-zfs/20.1.-shi-mo-shi-zfs-yu-zhong-bu-tong.md",
    "/di-20-zhang-z-wen-jian-xi-tong-zfs/20.2.-kuai-su-ru-men-zhi-nan.md",
    "/di-20-zhang-z-wen-jian-xi-tong-zfs/20.3.-zpool-guan-li.md",
    "/di-20-zhang-z-wen-jian-xi-tong-zfs/20.4.-zfs-guan-li.md",
    "/di-20-zhang-z-wen-jian-xi-tong-zfs/20.5.-wei-tuo-guan-li.md",
    "/di-20-zhang-z-wen-jian-xi-tong-zfs/20.6.-gao-ji-zhu-ti.md",
    "/di-20-zhang-z-wen-jian-xi-tong-zfs/20.7.-geng-duo-zi-yuan.md",
    "/di-20-zhang-z-wen-jian-xi-tong-zfs/20.8.-zfs-te-xing-he-shu-yu.md",
    
  ],
  
},
{
  text: "第21章 其他文件系统",
  children: [
    "/di-21-zhang-qi-ta-wen-jian-xi-tong/21.1.-gai-shu.md",
    "/di-21-zhang-qi-ta-wen-jian-xi-tong/21.2.-linux-wen-jian-xi-tong.md",
    
  ],
  
},
{
  text: "第22章 虚拟化",
  children: [
    "/di-22-zhang-xu-ni-hua/22.1.-gai-shu.md",
    "/di-22-zhang-xu-ni-hua/22.2.-shi-yong-macos-shang-de-parallels-desktop-an-zhuang-freebsd.md",
    "/di-22-zhang-xu-ni-hua/22.3.-shi-yong-macos-shang-de-vmware-fusion-an-zhuang-freebsd.md",
    "/di-22-zhang-xu-ni-hua/22.4.-shi-yong-virtualbox-an-zhuang-freebsd.md",
    "/di-22-zhang-xu-ni-hua/22.5.-zai-freebsd-shang-an-zhuang-virtualbox.md",
    "/di-22-zhang-xu-ni-hua/22.6.-shi-yong-freebsd-shang-de-bhyve-xu-ni-ji.md",
    "/di-22-zhang-xu-ni-hua/22.7.-shi-yong-freebsd-shang-de-xen-xu-ni-ji.md",
    
  ],
  
},
{
  text: "第23章 本地化 - i18n/L10n 的使用和设置",
  children: [
    "/di-23-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/23.1.-gai-shu.md",
    "/di-23-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/23.2.-shi-yong-ben-di-hua.md",
    "/di-23-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/23.3.-xun-zhao-i18n-ying-yong-cheng-xu.md",
    "/di-23-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/23.4.-te-ding-yu-yan-de-di-yu-pei-zhi.md",
    
  ],
  
},
{
  text: "第24章 更新与升级 FreeBSD",
  children: [
    "/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.1.-gai-shu.md",
    "/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.2.-freebsd-geng-xin.md",
    "/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.3.-geng-xin-wen-dang-ji.md",
    "/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.4.-zhui-zong-kai-fa-fen-zhi.md",
    "/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.5.-cong-yuan-dai-ma-geng-xin-freebsd.md",
    "/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.6.-duo-tai-ji-qi-de-sheng-ji.md",
    
  ],
  
},
{
  text: "第25章 DTrace",
  children: [
    "/di-25-zhang-dtrace/25.1.-gai-shu.md",
    "/di-25-zhang-dtrace/25.2.-shi-xian-shang-de-cha-yi.md",
    "/di-25-zhang-dtrace/25.3.-kai-qi-dtrace-zhi-chi.md",
    "/di-25-zhang-dtrace/25.4.-shi-yong-dtrace.md",
    
  ],
  
},
{
  text: "第26章 USB Device 模式 / USB OTG",
  children: [
    "/di-26-zhang-usb-device-mo-shi-usb-otg/26.1.-gai-shu.md",
    "/di-26-zhang-usb-device-mo-shi-usb-otg/26.2.-usb-xu-ni-chuan-hang-duan-kou.md",
    "/di-26-zhang-usb-device-mo-shi-usb-otg/26.3.-usb-device-mo-shi-wang-luo-jie-kou.md",
    "/di-26-zhang-usb-device-mo-shi-usb-otg/26.4.-usb-xu-ni-cun-chu-she-bei.md",
    
  ],
  
},
{
  text: "第三部分：网络通讯",
  children: [
    "/di-si-bu-fen-wang-luo-tong-xun.md",
    
  ],
  
},
{
  text: "第27章 串行通信",
  children: [
    "/di-27-zhang-chuan-hang-tong-xin/27.1.-gai-shu.md",
    "/di-27-zhang-chuan-hang-tong-xin/27.2.-chuan-hang-shu-yu-he-ying-jian.md",
    "/di-27-zhang-chuan-hang-tong-xin/27.3.-zhong-duan-ji.md",
    "/di-27-zhang-chuan-hang-tong-xin/27.4.-bo-ru-fu-wu.md",
    "/di-27-zhang-chuan-hang-tong-xin/27.5.-bo-chu-fu-wu.md",
    "/di-27-zhang-chuan-hang-tong-xin/27.6.-she-zhi-chuan-hang-kong-zhi-tai.md",
    
  ],
  
},
{
  text: "第28章 PPP",
  children: [
    "/di-28-zhang-ppp/28.1.-gai-shu.md",
    "/di-28-zhang-ppp/28.2.-pei-zhi-ppp.md",
    "/di-28-zhang-ppp/28.3.-ppp-lian-jie-de-gu-zhang-pai-chu.md",
    "/di-28-zhang-ppp/28.4.-shi-yong-yi-tai-wang-ppppppoe.md",
    "/di-28-zhang-ppp/28.5.-shi-yong-atm-shang-de-ppp-pppoa.md",
    
  ],
  
},
{
  text: "第29章：电子邮件",
  children: [
    "/di-29-zhang-dian-zi-you-jian/29.1.-gai-shu.md",
    "/di-29-zhang-dian-zi-you-jian/29.2.-you-jian-zu-jian.md",
    "/di-29-zhang-dian-zi-you-jian/29.3.-sendmail-pei-zhi-wen-jian.md",
    "/di-29-zhang-dian-zi-you-jian/29.4.-gai-bian-you-jian-chuan-shu-dai-li.md",
    "/di-29-zhang-dian-zi-you-jian/29.5.-gu-zhang-pai-chu.md",
    "/di-29-zhang-dian-zi-you-jian/29.6.-gao-ji-zhu-ti.md",
    "/di-29-zhang-dian-zi-you-jian/29.7.-she-zhi-wei-jin-fa-song.md",
    "/di-29-zhang-dian-zi-you-jian/29.8.-zai-bo-hao-lian-jie-zhong-shi-yong-you-jian.md",
    "/di-29-zhang-dian-zi-you-jian/29.9.smtp-ren-zheng.md",
    "/di-29-zhang-dian-zi-you-jian/29.10.-you-jian-yong-hu-dai-li.md",
    "/di-29-zhang-dian-zi-you-jian/29.11.-shi-yong-fetchmail.md",
    "/di-29-zhang-dian-zi-you-jian/29.12.-shi-yong-procmail.md",
    
  ],
  
},
{
  text: "第30章 网络服务器",
  children: [
    "/di-30-zhang-wang-luo-fu-wu-qi/30.1.-gai-shu.md",
    "/di-30-zhang-wang-luo-fu-wu-qi/30.2.-inetd-chao-ji-fu-wu-qi.md",
    "/di-30-zhang-wang-luo-fu-wu-qi/30.3.-wang-luo-wen-jian-xi-tong-nfs.md",
    "/di-30-zhang-wang-luo-fu-wu-qi/30.4.-wang-luo-xin-xi-xi-tong-nis.md",
    "/di-30-zhang-wang-luo-fu-wu-qi/30.5.-qing-xing-mu-lu-fang-wen-xie-yi-ldap.md",
    "/di-30-zhang-wang-luo-fu-wu-qi/30.6.-dong-tai-zhu-ji-she-zhi-xie-yi-dhcp.md",
    "/di-30-zhang-wang-luo-fu-wu-qi/30.7.-yu-ming-xi-tong-dns.md",
    "/di-30-zhang-wang-luo-fu-wu-qi/30.8.-apache-http-fu-wu-qi.md",
    "/di-30-zhang-wang-luo-fu-wu-qi/30.9.-wen-jian-chuan-shu-xie-yi-ftp.md",
    "/di-30-zhang-wang-luo-fu-wu-qi/30.10.-yong-yu-microsoft-windows-ke-hu-duan-de-wen-jian-he-da-yin-fu-wu-samba.md",
    "/di-30-zhang-wang-luo-fu-wu-qi/30.11.-yong-ntp-jin-hang-shi-zhong-tong-bu.md",
    "/di-30-zhang-wang-luo-fu-wu-qi/30.12.-iscsi-qi-dong-qi-he-mu-biao-ji-qi-pei-zhi.md",
    
  ],
  
},
{
  text: "第31章 防火墙",
  children: [
    "/di-31-zhang-fang-huo-qiang/31.1.-gai-shu.md",
    "/di-31-zhang-fang-huo-qiang/31.2.-fang-huo-qiang-de-gai-nian.md",
    "/di-31-zhang-fang-huo-qiang/31.3.-pf.md",
    "/di-31-zhang-fang-huo-qiang/31.4.-ipfw.md",
    "/di-31-zhang-fang-huo-qiang/31.5.-ipfilter-ipf.md",
    "/di-31-zhang-fang-huo-qiang/31.6.-hei-ming-dan.md",
    
  ],
  
},
{
  text: "第32章 高级网络",
  children: [
    "/di-32-zhang-gao-ji-wang-luo/32.1.-gai-shu.md",
    "/di-32-zhang-gao-ji-wang-luo/32.2.-wang-guan-he-lu-you.md",
    "/di-32-zhang-gao-ji-wang-luo/32.3.-wu-xian-wang-luo.md",
    "/di-32-zhang-gao-ji-wang-luo/32.4.-usb-tethering.md",
    "/di-32-zhang-gao-ji-wang-luo/32.5.-lan-ya.md",
    "/di-32-zhang-gao-ji-wang-luo/32.6.-qiao-jie.md",
    "/di-32-zhang-gao-ji-wang-luo/32.7.-lian-jie-ju-he-he-gu-zhang-zhuan-yi.md",
    "/di-32-zhang-gao-ji-wang-luo/32.8.-shi-yong-pxe-jin-hang-wu-pan-cao-zuo.md",
    "/di-32-zhang-gao-ji-wang-luo/32.9.-ipv6.md",
    "/di-32-zhang-gao-ji-wang-luo/32.10.-gong-yong-di-zhi-rong-yu-xie-yi-carp.md",
    "/di-32-zhang-gao-ji-wang-luo/32.11.-vlan.md",
    
  ],
  
},
{
  text: "第五部分：附录",
  children: [
    "/di-wu-bu-fen-fu-lu.md",
    
  ],
  
},
{
  text: "附录 A. 获取 FreeBSD",
  children: [
    "/fu-lu-a.-huo-qu-freebsd/a.1.-jing-xiang-zhan.md",
    "/fu-lu-a.-huo-qu-freebsd/a.2.-shi-yong-git.md",
    "/fu-lu-a.-huo-qu-freebsd/a.3.-shi-yong-subversion.md",
    "/fu-lu-a.-huo-qu-freebsd/a.4.cd-he-dvd-tao-zhuang.md",
    
  ],
  
},
{
  text: "附录 B. 书目",
  children: [
    "/fu-lu-b.-shu-mu/b.1.freebsd-xiang-guan-shu-ji.md",
    "/fu-lu-b.-shu-mu/b.2.-yong-hu-zhi-nan.md",
    "/fu-lu-b.-shu-mu/b.3.-guan-li-zhi-nan.md",
    "/fu-lu-b.-shu-mu/b.4.-kai-fa-zhi-nan.md",
    "/fu-lu-b.-shu-mu/b.6.-an-quan-xing-can-kao-wen-xian.md",
    "/fu-lu-b.-shu-mu/b.5.-shen-ru-cao-zuo-xi-tong.md",
    "/fu-lu-b.-shu-mu/b.7.-ying-jian-can-kao.md",
    "/fu-lu-b.-shu-mu/b.8.-unix-li-shi.md",
    "/fu-lu-b.-shu-mu/b.9.-qi-kan-he-za-zhi.md",
    
  ],
  
},
{
  text: "附录 C. 网络资源",
  children: [
    "/fu-lu-c.-wang-luo-zi-yuan/c.1.-wang-zhan.md",
    "/fu-lu-c.-wang-luo-zi-yuan/c.2.-you-jian-lie-biao.md",
    "/fu-lu-c.-wang-luo-zi-yuan/c.3.-usenet-xin-wen-zu.md",
    
  ],
  
},
{
  text: "附录 D. OpenPGP 密钥",
  children: [
    "/fu-lu-d.-openpgp-mi-yue/d.1.-guan-fang-cheng-yuan.md",
    
  ],
  
},
{
  text: "术语表",
  children: [
    "/shu-yu-biao.md",
    
  ],
  
},
{
  text: "签名",
  children: [
    "/qian-ming.md",
    
  ],
  
},
  
];
