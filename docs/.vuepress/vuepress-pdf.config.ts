// .vuepress/vuepress-pdf.config.ts
import { defineUserConfig } from "@condorhero/vuepress-plugin-export-pdf-v2";

export default defineUserConfig({
  outDir: "docs/.vuepress/dist/",
  sorter: (pageA, pageB) => {
    const aIndex = routeOrder.findIndex(route => route === pageA.path)
    const bIndex = routeOrder.findIndex(route => route === pageB.path)
    return aIndex - bIndex
  },
  pdfOptions: {
    format: 'A4',
    displayHeaderFooter: true,
    headerTemplate,
    footerTemplate,
    margin: {
      bottom: 70,
      left: 25,
      right: 25,
      top: 70,
    },
  },
});

const routeOrder = [
    '/index.html',
    '/yi-zhe-shuo-ming.html',
    '/freebsd-shou-ce.html',
    '/SUMMARY.md',
    '/gai-shu.html',
    '/qian-yan/zhi-du-zhe.html',
    '/qian-yan/di-si-ban-de-zhu-yao-bian-hua.html',
    '/qian-yan/di-san-ban-de-zhu-yao-bian-hua-2004.html',
    '/qian-yan/di-er-ban-de-zhu-yao-bian-hua-2001.html',
    '/qian-yan/ben-shu-de-zu-zhi-jie-gou.html',
    '/qian-yan/ben-shu-zhong-shi-yong-de-yi-xie-yue-ding.html',
    '/qian-yan/zhi-xie.html',
    '/di-yi-bu-fen-kuai-su-kai-shi.html',
    '/di-1-zhang-jian-jie/1.1.-gai-shu.html',
    '/di-1-zhang-jian-jie/1.2.-huan-ying-lai-dao-freebsd.html',
    '/di-1-zhang-jian-jie/1.3.-guan-yu-freebsd-xiang-mu.html',
    '/di-2-zhang-an-zhuang-freebsd/2.1.-gai-shu.html',
    '/di-2-zhang-an-zhuang-freebsd/2.2.-zui-di-ying-jian-yao-qiu.html',
    '/di-2-zhang-an-zhuang-freebsd/2.3.-an-zhuang-qian-de-zhun-bei-gong-zuo.html',
    '/di-2-zhang-an-zhuang-freebsd/2.4.-kai-shi-an-zhuang.html',
    '/di-2-zhang-an-zhuang-freebsd/2.5.-shi-yong-bsdinstall.html',
    '/di-2-zhang-an-zhuang-freebsd/2.6.-fen-pei-ci-pan-kong-jian.html',
    '/di-2-zhang-an-zhuang-freebsd/2.7.-huo-qu-an-zhuang-wen-jian.html',
    '/di-2-zhang-an-zhuang-freebsd/2.8.-zhang-hu-shi-qu-fu-wu-he-an-quan.html',
    '/di-2-zhang-an-zhuang-freebsd/2.9.-wang-luo-jie-kou.html',
    '/di-2-zhang-an-zhuang-freebsd/2.10.-gu-zhang-pai-chu.html',
    '/di-2-zhang-an-zhuang-freebsd/2.11.-shi-yong-live-cd.html',
    '/di-3-zhang-freebsd-ji-chu/3.1.-gai-shu.html',
    '/di-3-zhang-freebsd-ji-chu/3.2.-xu-ni-kong-zhi-tai-he-zhong-duan.html',
    '/di-3-zhang-freebsd-ji-chu/3.3.-yong-hu-he-ji-ben-zhang-hu-guan-li.html',
    '/di-3-zhang-freebsd-ji-chu/3.4.-quan-xian.html',
    '/di-3-zhang-freebsd-ji-chu/3.5.-mu-lu-jie-gou.html',
    '/di-3-zhang-freebsd-ji-chu/3.6.-ci-pan-jie-gou.html',
    '/di-3-zhang-freebsd-ji-chu/3.7.-wen-jian-xi-tong-de-gua-zai-yu-xie-zai.html',
    '/di-3-zhang-freebsd-ji-chu/3.8.-jin-cheng-he-shou-hu-jin-cheng.html',
    '/di-3-zhang-freebsd-ji-chu/3.9.shell.html',
    '/di-3-zhang-freebsd-ji-chu/3.10.-wen-ben-bian-ji-qi.html',
    '/di-3-zhang-freebsd-ji-chu/3.11.-she-bei-he-she-bei-jie-dian.html',
    '/di-3-zhang-freebsd-ji-chu/3.12.-shou-ce-ye.html',
    '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.1.-gai-shu.html',
    '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.2.-ruan-jian-an-zhuang-de-gai-shu.html',
    '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.3.-xun-zhao-suo-xu-de-ying-yong-cheng-xu.html',
    '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.4.-shi-yong-pkg-jin-hang-er-jin-zhi-bao-guan-li.html',
    '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.5.-shi-yong-ports.html',
    '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.6.-shi-yong-poudriere-gou-jian-ruan-jian-bao.html',
    '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.7.-an-zhuang-hou-de-zhu-yi-shi-xiang.html',
    '/di-4-zhang-an-zhuang-ying-yong-cheng-xu-ruan-jian-bao-he-ports/4.8.-ru-he-chu-li-sun-huai-de-port.html',
    '/di-5-zhang-xwindow-xi-tong/5.1.-gai-shu.html',
    '/di-5-zhang-xwindow-xi-tong/5.2.-shu-yu.html',
    '/di-5-zhang-xwindow-xi-tong/5.3.-an-zhuang-xorg.html',
    '/di-5-zhang-xwindow-xi-tong/5.4.-xorg-pei-zhi.html',
    '/di-5-zhang-xwindow-xi-tong/5.5.-zai-x11-zhong-shi-yong-zi-ti.html',
    '/di-5-zhang-xwindow-xi-tong/5.6.x-xian-shi-guan-li-qi.html',
    '/di-5-zhang-xwindow-xi-tong/5.7.-zhuo-mian-huan-jing.html',
    '/di-5-zhang-xwindow-xi-tong/5.8.-shi-yong-compiz-fusion.html',
    '/di-5-zhang-xwindow-xi-tong/5.9.-gu-zhang-pai-chu.html',
    '/di-5-zhang-xwindow-xi-tong/5.10.freebsd-zhong-de-wayland.html',
    '/di-er-bu-fen-chang-jian-ren-wu.html',
    '/di-6-zhang-zhuo-mian-ying-yong-cheng-xu/6.1.-gai-shu.html',
    '/di-6-zhang-zhuo-mian-ying-yong-cheng-xu/6.2.-liu-lan-qi.html',
    '/di-6-zhang-zhuo-mian-ying-yong-cheng-xu/6.3.-sheng-chan-li-gong-ju.html',
    '/di-6-zhang-zhuo-mian-ying-yong-cheng-xu/6.4.-wen-dang-yue-du-qi.html',
    '/di-6-zhang-zhuo-mian-ying-yong-cheng-xu/6.5.-cai-wu.html',
    '/di-7-zhang-duo-mei-ti/7.1.-gai-shu.html',
    '/di-7-zhang-duo-mei-ti/7.2.-she-zhi-sheng-ka.html',
    '/di-7-zhang-duo-mei-ti/7.3.mp3-yin-pin.html',
    '/di-7-zhang-duo-mei-ti/7.4.-shi-pin-bo-fang.html',
    '/di-7-zhang-duo-mei-ti/7.5.-dian-shi-ka.html',
    '/di-7-zhang-duo-mei-ti/7.6.mythtv.html',
    '/di-7-zhang-duo-mei-ti/7.7.-tu-xiang-sao-miao-yi.html',
    '/di-8-zhang-pei-zhi-freebsd-nei-he/8.1.-gai-shu.html',
    '/di-8-zhang-pei-zhi-freebsd-nei-he/8.2.-wei-shi-mo-yao-bian-yi-zi-ding-yi-nei-he.html',
    '/di-8-zhang-pei-zhi-freebsd-nei-he/8.3.-liu-lan-xi-tong-ying-jian.html',
    '/di-8-zhang-pei-zhi-freebsd-nei-he/8.4.-pei-zhi-wen-jian.html',
    '/di-8-zhang-pei-zhi-freebsd-nei-he/8.5.-bian-yi-yu-an-zhuang-zi-ding-yi-nei-he.html',
    '/di-8-zhang-pei-zhi-freebsd-nei-he/8.6.-ru-guo-fa-sheng-le-yi-xie-cuo-wu.html',
    '/di-9-zhang-da-yin/9.1.-kuai-su-ru-men.html',
    '/di-9-zhang-da-yin/9.2.-da-yin-ji-lian-jie.html',
    '/di-9-zhang-da-yin/9.3.-chang-jian-de-ye-mian-miao-shu-yu-yan.html',
    '/di-9-zhang-da-yin/9.4.-zhi-jie-da-yin.html',
    '/di-9-zhang-da-yin/9.5.lpd-hang-shi-da-yin-ji-cheng-xu.html',
    '/di-9-zhang-da-yin/9.6.-qi-ta-da-yin-xi-tong.html',
    '/di-10-zhang-linux-er-jin-zhi-jian-rong-ceng/10.1.-gai-shu.html',
    '/di-10-zhang-linux-er-jin-zhi-jian-rong-ceng/10.2.-pei-zhi-linux-er-jin-zhi-jian-rong-ceng.html',
    '/di-10-zhang-linux-er-jin-zhi-jian-rong-ceng/10.3.-cong-freebsd-ruan-jian-bao-an-zhuang-centos-ji-chu-xi-tong.html',
    '/di-10-zhang-linux-er-jin-zhi-jian-rong-ceng/10.4.-shi-yong-debootstrap8-gou-jian-debian-ubuntu-ji-ben-xi-tong.html',
    '/di-10-zhang-linux-er-jin-zhi-jian-rong-ceng/10.5.-gao-ji-zhu-ti.html',
    '/di-11-zhang-wine/11.1.-gai-shu.html',
    '/di-11-zhang-wine/11.2.-wine-gai-shu-he-gai-nian.html',
    '/di-11-zhang-wine/11.3.-zai-freebsd-shang-an-zhuang-wine.html',
    '/di-11-zhang-wine/11.4.-zai-freebsd-shang-yun-hang-di-yi-ge-wine-cheng-xu.html',
    '/di-11-zhang-wine/11.5.-pei-zhi-wine-an-zhuang.html',
    '/di-11-zhang-wine/11.6.-wine-tu-xing-guan-li-yong-hu-jie-mian.html',
    '/di-11-zhang-wine/11.7.-freebsd-duo-yong-hu-yu-wine.html',
    '/di-11-zhang-wine/11.8.-wine-yu-freebsd-faq.html',
    '/di-san-bu-fen-xi-tong-guan-li.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.1.-gai-shu.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.2.-qi-dong-fu-wu.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.3.-pei-zhi-cron8.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.4.-guan-li-freebsd-zhong-de-fu-wu.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.5.-she-zhi-wang-ka.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.6.-xu-ni-zhu-ji.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.7.-pei-zhi-xi-tong-ri-zhi.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.8.-pei-zhi-wen-jian.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.9.-shi-yong-sysctl8-jin-hang-you-hua.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.10.-ci-pan-you-hua.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.11.-nei-he-can-shu-you-hua.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.12.-tian-jia-jiao-huan-kong-jian.html',
    '/di-12-zhang-pei-zhi-yu-you-hua/12.13.-dian-yuan-he-zi-yuan-guan-li.html',
    '/di-13-zhang-freebsd-de-yin-dao-guo-cheng/13.1.-gai-shu.html',
    '/di-13-zhang-freebsd-de-yin-dao-guo-cheng/13.2.freebsd-de-yin-dao-guo-cheng.html',
    '/di-13-zhang-freebsd-de-yin-dao-guo-cheng/13.3.-device-hints.html',
    '/di-13-zhang-freebsd-de-yin-dao-guo-cheng/13.4.-guan-ji-liu-cheng.html',
    '/di-14-zhang-an-quan/14.1.-gai-shu.html',
    '/di-14-zhang-an-quan/14.2.-jian-jie.html',
    '/di-14-zhang-an-quan/14.3.-yi-ci-xing-mi-ma.html',
    '/di-14-zhang-an-quan/14.4.tcp-wrapper.html',
    '/di-14-zhang-an-quan/14.5.-kerberos.html',
    '/di-14-zhang-an-quan/14.6.-openssl.html',
    '/di-14-zhang-an-quan/14.7.ipsec-vpn.html',
    '/di-14-zhang-an-quan/14.8.-openssh.html',
    '/di-14-zhang-an-quan/14.9.-wen-jian-xi-tong-fang-wen-kong-zhi-lie-biao.html',
    '/di-14-zhang-an-quan/14.10.-jian-ce-di-san-fang-an-quan-wen-ti.html',
    '/di-14-zhang-an-quan/14.11.freebsd-an-quan-gong-gao.html',
    '/di-14-zhang-an-quan/14.12.-jin-cheng-shen-ji.html',
    '/di-14-zhang-an-quan/14.13.-zi-yuan-pei-e.html',
    '/di-14-zhang-an-quan/14.14.-shi-yong-sudo-guan-li-quan-xian.html',
    '/di-14-zhang-an-quan/14.15.-shi-yong-doas-zuo-wei-sudo-de-ti-dai-pin.html',
    '/di-15-zhang-jail/15.1.-gai-shu.html',
    '/di-15-zhang-jail/15.2.-yu-jail-you-guan-de-shu-yu.html',
    '/di-15-zhang-jail/15.3.-jian-li-he-kong-zhi-jail.html',
    '/di-15-zhang-jail/15.4.-wei-tiao-he-guan-li.html',
    '/di-15-zhang-jail/15.5.-geng-xin-duo-ge-jail.html',
    '/di-15-zhang-jail/15.6.-shi-yong-ezjail-guan-li-jail.html',
    '/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.1.-gai-shu.html',
    '/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.2.-guan-jian-shu-yu.html',
    '/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.3.-le-jie-mac-biao-qian.html',
    '/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.4.-gui-hua-an-quan-pei-zhi.html',
    '/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.5.-ke-yong-de-mac-ce-lve.html',
    '/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.6.-yong-hu-suo-ding.html',
    '/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.7.mac-jail-zhong-de-nagios.html',
    '/di-16-zhang-qiang-zhi-fang-wen-kong-zhi/16.8.-mac-kuang-jia-de-gu-zhang-pai-chu.html',
    '/di-17-zhang-an-quan-shi-jian-shen-ji/17.1.-gai-shu.html',
    '/di-17-zhang-an-quan-shi-jian-shen-ji/17.2.-guan-jian-shu-yu.html',
    '/di-17-zhang-an-quan-shi-jian-shen-ji/17.3.-shen-ji-pei-zhi.html',
    '/di-17-zhang-an-quan-shi-jian-shen-ji/17.4.-shi-yong-shen-ji-zhui-zong.html',
    '/di-18-zhang-cun-chu/18.1.-gai-shu.html',
    '/di-18-zhang-cun-chu/18.2.-tian-jia-ci-pan.html',
    '/di-18-zhang-cun-chu/18.3.-tiao-zheng-he-zeng-jia-ci-pan-da-xiao.html',
    '/di-18-zhang-cun-chu/18.4.-usb-cun-chu-she-bei.html',
    '/di-18-zhang-cun-chu/18.5.-chuang-jian-he-shi-yong-cd-mei-ti.html',
    '/di-18-zhang-cun-chu/18.6.-chuang-jian-he-shi-yong-dvd-mei-ti.html',
    '/di-18-zhang-cun-chu/18.7.-chuang-jian-he-shi-yong-ruan-pan.html',
    '/di-18-zhang-cun-chu/18.8.-shi-yong-ntfs-ci-pan.html',
    '/di-18-zhang-cun-chu/18.9.-bei-fen-ji-chu.html',
    '/di-18-zhang-cun-chu/18.10.-nei-cun-pan.html',
    '/di-18-zhang-cun-chu/18.11.-wen-jian-xi-tong-kuai-zhao.html',
    '/di-18-zhang-cun-chu/18.12.-ci-pan-pei-e.html',
    '/di-18-zhang-cun-chu/18.13.-jia-mi-ci-pan-fen-qu.html',
    '/di-18-zhang-cun-chu/18.14.-jia-mi-jiao-huan-fen-qu.html',
    '/di-18-zhang-cun-chu/18.15.-gao-ke-yong-xing-cun-chu-hast.html',
    '/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.1.-gai-shu.html',
    '/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.2.-raid0-tiao-dai.html',
    '/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.3.-raid1-jing-xiang.html',
    '/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.4.-raid3-dai-you-zhuan-yong-qi-ou-xiao-yan-de-zi-jie-ji-tiao-dai.html',
    '/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.5.-ruan-jian-raid-she-bei.html',
    '/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.6.-geom-gate-wang-luo-she-bei.html',
    '/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.7.-wei-ci-pan-she-bei-tian-jia-juan-biao.html',
    '/di-19-zhang-geom-mo-kuai-hua-ci-pan-zhuan-huan-kuang-jia/19.8.-tong-guo-geom-shi-xian-ufs-ri-zhi.html',
    '/di-20-zhang-z-wen-jian-xi-tong-zfs/20.1.-shi-shi-mo-shi-zfs-yu-zhong-bu-tong.html',
    '/di-20-zhang-z-wen-jian-xi-tong-zfs/20.2.-kuai-su-ru-men-zhi-nan.html',
    '/di-20-zhang-z-wen-jian-xi-tong-zfs/20.3.-zpool-guan-li.html',
    '/di-20-zhang-z-wen-jian-xi-tong-zfs/20.4.-zfs-guan-li.html',
    '/di-20-zhang-z-wen-jian-xi-tong-zfs/20.5.-wei-tuo-guan-li.html',
    '/di-20-zhang-z-wen-jian-xi-tong-zfs/20.6.-gao-ji-zhu-ti.html',
    '/di-20-zhang-z-wen-jian-xi-tong-zfs/20.7.-geng-duo-zi-yuan.html',
    '/di-20-zhang-z-wen-jian-xi-tong-zfs/20.8.-zfs-te-xing-he-shu-yu.html',
    '/di-21-zhang-qi-ta-wen-jian-xi-tong/21.1.-gai-shu.html',
    '/di-21-zhang-qi-ta-wen-jian-xi-tong/21.2.-linux-wen-jian-xi-tong.html',
    '/di-22-zhang-xu-ni-hua/22.1.-gai-shu.html',
    '/di-22-zhang-xu-ni-hua/22.2.-shi-yong-macos-shang-de-parallels-desktop-an-zhuang-freebsd.html',
    '/di-22-zhang-xu-ni-hua/22.3.-shi-yong-macos-shang-de-vmware-fusion-an-zhuang-freebsd.html',
    '/di-22-zhang-xu-ni-hua/22.4.-shi-yong-virtualbox-an-zhuang-freebsd.html',
    '/di-22-zhang-xu-ni-hua/22.5.-zai-freebsd-shang-an-zhuang-virtualbox.html',
    '/di-22-zhang-xu-ni-hua/22.6.-shi-yong-freebsd-shang-de-bhyve-xu-ni-ji.html',
    '/di-22-zhang-xu-ni-hua/22.7.-shi-yong-freebsd-shang-de-xen-xu-ni-ji.html',
    '/di-23-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/23.1.-gai-shu.html',
    '/di-23-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/23.2.-shi-yong-ben-di-hua.html',
    '/di-23-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/23.3.-xun-zhao-i18n-ying-yong-cheng-xu.html',
    '/di-23-zhang-ben-di-hua-i18nl10n-de-shi-yong-he-she-zhi/23.4.-te-ding-yu-yan-de-di-yu-pei-zhi.html',
    '/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.1.-gai-shu.html',
    '/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.2.-freebsd-geng-xin.html',
    '/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.3.-geng-xin-bootcode.html',
    '/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.4.-geng-xin-wen-dang-ji.html',
    '/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.5.-zhui-zong-kai-fa-fen-zhi.html',
    '/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.6.-cong-yuan-dai-ma-geng-xin-freebsd.html',
    '/di-24-zhang-geng-xin-yu-sheng-ji-freebsd/24.7.-duo-tai-ji-qi-de-sheng-ji.html',
    '/di-25-zhang-dtrace/25.1.-gai-shu.html',
    '/di-25-zhang-dtrace/25.2.-shi-xian-shang-de-cha-yi.html',
    '/di-25-zhang-dtrace/25.3.-kai-qi-dtrace-zhi-chi.html',
    '/di-25-zhang-dtrace/25.4.-shi-yong-dtrace.html',
    '/di-26-zhang-usb-device-mo-shi-usb-otg/26.1.-gai-shu.html',
    '/di-26-zhang-usb-device-mo-shi-usb-otg/26.2.-usb-xu-ni-chuan-hang-duan-kou.html',
    '/di-26-zhang-usb-device-mo-shi-usb-otg/26.3.-usb-device-mo-shi-wang-luo-jie-kou.html',
    '/di-26-zhang-usb-device-mo-shi-usb-otg/26.4.-usb-xu-ni-cun-chu-she-bei.html',
    '/di-si-bu-fen-wang-luo-tong-xun.html',
    '/di-27-zhang-chuan-hang-tong-xin/27.1.-gai-shu.html',
    '/di-27-zhang-chuan-hang-tong-xin/27.2.-chuan-hang-shu-yu-he-ying-jian.html',
    '/di-27-zhang-chuan-hang-tong-xin/27.3.-zhong-duan-ji.html',
    '/di-27-zhang-chuan-hang-tong-xin/27.4.-bo-ru-fu-wu.html',
    '/di-27-zhang-chuan-hang-tong-xin/27.5.-bo-chu-fu-wu.html',
    '/di-27-zhang-chuan-hang-tong-xin/27.6.-she-zhi-chuan-hang-kong-zhi-tai.html',
    '/di-28-zhang-ppp/28.1.-gai-shu.html',
    '/di-28-zhang-ppp/28.2.-pei-zhi-ppp.html',
    '/di-28-zhang-ppp/28.3.-ppp-lian-jie-de-gu-zhang-pai-chu.html',
    '/di-28-zhang-ppp/28.4.-shi-yong-yi-tai-wang-ppppppoe.html',
    '/di-28-zhang-ppp/28.5.-shi-yong-atm-shang-de-ppp-pppoa.html',
    '/di-29-zhang-dian-zi-you-jian/29.1.-gai-shu.html',
    '/di-29-zhang-dian-zi-you-jian/29.2.-you-jian-zu-jian.html',
    '/di-29-zhang-dian-zi-you-jian/29.3.sendmail-pei-zhi-wen-jian.html',
    '/di-29-zhang-dian-zi-you-jian/29.4.-gai-bian-you-jian-chuan-shu-dai-li.html',
    '/di-29-zhang-dian-zi-you-jian/29.5.-gu-zhang-pai-chu.html',
    '/di-29-zhang-dian-zi-you-jian/29.6.-gao-ji-zhu-ti.html',
    '/di-29-zhang-dian-zi-you-jian/29.7.-she-zhi-wei-jin-fa-song.html',
    '/di-29-zhang-dian-zi-you-jian/29.8.-zai-bo-hao-lian-jie-zhong-shi-yong-you-jian.html',
    '/di-29-zhang-dian-zi-you-jian/29.9.smtp-ren-zheng.html',
    '/di-29-zhang-dian-zi-you-jian/29.10.-you-jian-yong-hu-dai-li.html',
    '/di-29-zhang-dian-zi-you-jian/29.11.-shi-yong-fetchmail.html',
    '/di-29-zhang-dian-zi-you-jian/29.12.-shi-yong-procmail.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.1.-gai-shu.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.2.-inetd-chao-ji-fu-wu-qi.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.3.-wang-luo-wen-jian-xi-tong-nfs.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.4.-wang-luo-xin-xi-xi-tong-nis.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.5.-qing-xing-mu-lu-fang-wen-xie-yi-ldap.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.6.-dong-tai-zhu-ji-she-zhi-xie-yi-dhcp.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.7.-yu-ming-xi-tong-dns.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.8.-apache-http-fu-wu-qi.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.9.-wen-jian-chuan-shu-xie-yi-ftp.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.10.-yong-yu-microsoft-windows-ke-hu-duan-de-wen-jian-he-da-yin-fu-wu-samba.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.11.-yong-ntp-jin-hang-shi-zhong-tong-bu.html',
    '/di-30-zhang-wang-luo-fu-wu-qi/30.12.iscsi-target-he-initiator-de-pei-zhi.html',
    '/di-31-zhang-fang-huo-qiang/31.1.-gai-shu.html',
    '/di-31-zhang-fang-huo-qiang/31.2.-fang-huo-qiang-de-gai-nian.html',
    '/di-31-zhang-fang-huo-qiang/31.3.-pf.html',
    '/di-31-zhang-fang-huo-qiang/31.4.-ipfw.html',
    '/di-31-zhang-fang-huo-qiang/31.5.-ipfilter-ipf.html',
    '/di-31-zhang-fang-huo-qiang/31.6.-hei-ming-dan.html',
    '/di-32-zhang-gao-ji-wang-luo/32.1.-gai-shu.html',
    '/di-32-zhang-gao-ji-wang-luo/32.2.-wang-guan-he-lu-you.html',
    '/di-32-zhang-gao-ji-wang-luo/32.3.-wu-xian-wang-luo.html',
    '/di-32-zhang-gao-ji-wang-luo/32.4.usb-wang-luo-gong-xiang.html',
    '/di-32-zhang-gao-ji-wang-luo/32.5.-lan-ya.html',
    '/di-32-zhang-gao-ji-wang-luo/32.6.-qiao-jie.html',
    '/di-32-zhang-gao-ji-wang-luo/32.7.-lian-lu-ju-he-yu-gu-zhang-zhuan-yi.html',
    '/di-32-zhang-gao-ji-wang-luo/32.8.-shi-yong-pxe-jin-hang-wu-pan-cao-zuo.html',
    '/di-32-zhang-gao-ji-wang-luo/32.9.-ipv6.html',
    '/di-32-zhang-gao-ji-wang-luo/32.10.-gong-yong-di-zhi-rong-yu-xie-yi-carp.html',
    '/di-32-zhang-gao-ji-wang-luo/32.11.-vlan.html',
    '/di-wu-bu-fen-fu-lu.html',
    '/fu-lu-a.-huo-qu-freebsd/a.1.-jing-xiang-zhan.html',
    '/fu-lu-a.-huo-qu-freebsd/a.2.-shi-yong-git.html',
    '/fu-lu-a.-huo-qu-freebsd/a.3.-shi-yong-subversion.html',
    '/fu-lu-a.-huo-qu-freebsd/a.4.cd-he-dvd-tao-zhuang.html',
    '/fu-lu-b.-shu-mu/b.1.freebsd-xiang-guan-shu-ji.html',
    '/fu-lu-b.-shu-mu/b.2.-yong-hu-zhi-nan.html',
    '/fu-lu-b.-shu-mu/b.3.-guan-li-zhi-nan.html',
    '/fu-lu-b.-shu-mu/b.4.-kai-fa-zhi-nan.html',
    '/fu-lu-b.-shu-mu/b.6.-an-quan-xing-can-kao-wen-xian.html',
    '/fu-lu-b.-shu-mu/b.5.-shen-ru-cao-zuo-xi-tong.html',
    '/fu-lu-b.-shu-mu/b.7.-ying-jian-can-kao.html',
    '/fu-lu-b.-shu-mu/b.8.-unix-li-shi.html',
    '/fu-lu-b.-shu-mu/b.9.-qi-kan-he-za-zhi.html',
    '/fu-lu-c.-wang-luo-zi-yuan/c.1.-wang-zhan.html',
    '/fu-lu-c.-wang-luo-zi-yuan/c.2.-you-jian-lie-biao.html',
    '/fu-lu-c.-wang-luo-zi-yuan/c.3.-usenet-xin-wen-zu.html',
    '/fu-lu-d.-openpgp-mi-yue/d.1.-guan-fang-cheng-yuan.html',
    '/shu-yu-biao.html',
    '/hou-ji.html',
    ]

const headerTemplate = `<div style="width: 100%; display: flex; justify-content: center; align-items: center; color: lightgray; border-bottom: solid lightgray 1px; padding-bottom: 10px; font-size: 10px;">
  <span class="title"></span>
</div>`

const footerTemplate = `<div style="width: 100%; display: flex; justify-content: center; align-items: center; color: lightgray; border-top: solid lightgray 1px; padding-top: 10px; font-size: 10px;">
  <span class="pageNumber"></span> - <span class="totalPages"></span>
</div>`
