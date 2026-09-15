import { defineConfig } from 'vitepress'

// 官网地址。不要带结尾斜杠：下面用它拼 og:image 时会拼出 `//`
const SITE_URL = 'https://danmu.bddxg.top'
const REPO_URL = 'https://github.com/bd-dxg/bili-danmu'
const RELEASE_URL = `${REPO_URL}/releases/latest`

export default defineConfig({
  srcDir: 'docs',
  lang: 'zh-CN',
  title: 'bili-danmu',
  description: '2.9 MB 的轻量化 B 站直播弹幕助手：透明悬浮窗不挡游戏，鼠标穿透，弹幕朗读，断线自愈。',
  cleanUrls: true,
  sitemap: { hostname: SITE_URL },

  // 站点只有浅色一种形态，不渲染主题切换开关。
  // 注意：VitePress 2 起 appearance 是顶层配置，放进 themeConfig 会被静默忽略。
  // 想恢复深色切换就改成 'force-dark'（深色变量保留在 style.css 的 git 历史里）。
  appearance: false,

  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: '/imgs/app-icon.webp' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'bili-danmu — 不跟游戏抢资源的弹幕助手' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '2.9 MB 安装包，装完占 12 MB 硬盘。透明悬浮窗叠在游戏上，鼠标穿透，弹幕朗读。',
      },
    ],
    ['meta', { property: 'og:image', content: `${SITE_URL}/imgs/app-icon.webp` }],
    ['meta', { name: 'keywords', content: 'B站弹幕助手,哔哩哔哩直播弹幕,弹幕朗读,OBS弹幕,轻量弹幕助手,bili-danmu' }],
  ],

  themeConfig: {
    logo: '/imgs/app-icon.webp',
    siteTitle: 'bili-danmu',

    nav: [
      { text: '更新', link: '/#update' },
      { text: '核心亮点', link: '/#highlights' },
      { text: '效果', link: '/#showcase' },
      { text: '功能', link: '/#features' },
      { text: '隐私', link: '/#privacy' },
      { text: '下载', link: RELEASE_URL },
    ],

    socialLinks: [{ icon: 'github', link: REPO_URL }],

    outline: false,
    returnToTopLabel: '回到顶部',
    docFooter: { prev: false, next: false },

    footer: {
      message:
        '以 GNU GPL v3 开源 · 弹幕协议实现参考 <a href="https://github.com/SoraYjy/DanmuFree" target="_blank" rel="noreferrer">DanmuFree</a>',
      copyright: 'Copyright © 2025 bd-dxg',
    },
  },
})
