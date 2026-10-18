---
layout: home

# 落地页各区块由组件渲染，正文不需要 vp-doc 排版，避免多套样式打架
markdownStyles: false

hero:
  name: bili-danmu
  text: 不跟游戏抢资源的弹幕助手
  tagline: 3.0 MB 装完就能用。透明悬浮窗叠在游戏画面上，鼠标穿透不拦点击，弹幕还能念出来。
  image:
    src: /imgs/bili-danmu/app-icon.webp
    alt: bili-danmu 图标
  actions:
    - theme: brand
      text: 下载安装包
      link: https://v4.gh-proxy.org/https://github.com/bd-dxg/bili-danmu/releases/download/v1.6.0/bili-danmu_1.6.0_x64-setup.exe
    - theme: alt
      text: 蓝奏下载密码:6u67
      link: https://wwbor.lanzouu.com/b03fmf2u0j
---

<script setup lang="ts">
// 本页所有文案都在 theme/data/bili-danmu.ts 里，改文案改那里
import { compare, download, features, highlights, privacy, showcase, stats, update } from '../.vitepress/theme/data/bili-danmu'
</script>

<LandingStats :items="stats" />

<LandingCompare :compare="compare" />

<LandingUpdate :update="update" />

<LandingShowcase :showcase="showcase" />

<LandingHighlights :highlights="highlights" :features="features" />

<LandingClosing :privacy="privacy" :download="download" />
