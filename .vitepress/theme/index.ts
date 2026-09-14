// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import LandingClosing from './components/LandingClosing.vue'
import LandingHighlights from './components/LandingHighlights.vue'
import LandingShowcase from './components/LandingShowcase.vue'
import LandingStats from './components/LandingStats.vue'
import './style.css'

// 落地页各区块在 docs/index.md 里按顺序引用，这里注册成全局组件
const sections = {
  LandingStats,
  LandingShowcase,
  LandingHighlights,
  LandingClosing,
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    for (const [name, component] of Object.entries(sections)) {
      app.component(name, component)
    }
  },
} satisfies Theme
