---
layout: home

# 落地页各区块由组件渲染，正文不需要 vp-doc 排版，避免多套样式打架
markdownStyles: false

hero:
  name: douyin-danmu
  text: 抖音主播的桌面弹幕窗
  tagline: 3 MB 装完就能用。透明悬浮窗挂在桌面上看弹幕，鼠标穿透直接点到游戏上，弹幕还能用 Edge TTS 念出来。
  image:
    src: /imgs/douyin-danmu/app-icon.png
    alt: douyin-danmu 图标
  actions:
    - theme: brand
      text: 下载安装包
      link: https://github.com/bd-dxg/douyin-danmu/releases/latest
    - theme: alt
      text: 蓝奏下载密码:6u67
      link: https://wwbor.lanzouu.com/b03fmf2u0j
---

<script setup lang="ts">
// 本页所有文案都在 theme/data/douyin-danmu.ts 里，改文案改那里
import { download, features, highlights, privacy, stats } from '../.vitepress/theme/data/douyin-danmu'
</script>

<LandingStats :items="stats" />

<LandingHighlights :highlights="highlights" :features="features" />

<LandingClosing :privacy="privacy" :download="download" />
