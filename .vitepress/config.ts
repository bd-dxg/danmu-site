import { defineConfig } from 'vitepress'

// 官网地址。不要带结尾斜杠：下面用它拼 og:image 时会拼出 `//`
const SITE_URL = 'https://danmu.bddxg.top'

export default defineConfig({
  srcDir: 'docs',
  lang: 'zh-CN',
  title: '弹幕助手',
  description:
    'bd-dxg 的两款轻量弹幕助手：bili-danmu 盯 B 站直播，douyin-danmu 盯抖音直播。都是 Windows 桌面端，安装包几 MB，透明悬浮窗不挡游戏，鼠标穿透，弹幕朗读。',
  cleanUrls: true,
  sitemap: { hostname: SITE_URL },

  // 站点只有浅色一种形态，不渲染主题切换开关。
  // 注意：VitePress 2 起 appearance 是顶层配置，放进 themeConfig 会被静默忽略。
  // 想恢复深色切换就改成 'force-dark'（深色变量保留在 style.css 的 git 历史里）。
  appearance: false,

  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: '/imgs/bili-danmu/app-icon.webp' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '弹幕助手 — 不跟游戏抢资源的直播弹幕窗' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'bili-danmu 与 douyin-danmu：安装包只有几 MB，透明悬浮窗叠在游戏上，鼠标穿透，弹幕朗读。',
      },
    ],
    ['meta', { property: 'og:image', content: `${SITE_URL}/imgs/bili-danmu/app-icon.webp` }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          '弹幕助手,B站弹幕助手,哔哩哔哩直播弹幕,抖音弹幕助手,抖音直播弹幕,弹幕朗读,OBS弹幕,bili-danmu,douyin-danmu',
      },
    ],
  ],

  themeConfig: {
    siteTitle: '弹幕助手',

    nav: [
      { text: 'bili-danmu', link: '/bili-danmu' },
      { text: 'douyin-danmu', link: '/douyin-danmu' },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/bd-dxg' }],

    outline: false,
    returnToTopLabel: '回到顶部',
    docFooter: { prev: false, next: false },

    footer: {
      message:
        'bili-danmu 与 douyin-danmu 均以 <a href="https://github.com/bd-dxg/douyin-danmu/blob/main/LICENSE" target="_blank" rel="noreferrer">GNU GPL v3</a> 开源',
      copyright: 'Copyright © 2025 bd-dxg',
    },
  },
})
