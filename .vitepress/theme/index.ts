// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import LandingClosing from './components/LandingClosing.vue'
import LandingHighlights from './components/LandingHighlights.vue'
import LandingProducts from './components/LandingProducts.vue'
import LandingShowcase from './components/LandingShowcase.vue'
import LandingStats from './components/LandingStats.vue'
import LandingUpdate from './components/LandingUpdate.vue'
import './style.css'

// 落地页各区块在 docs/*.md 里按顺序引用，这里注册成全局组件。
// 区块文案由页面从 theme/data/<产品>.ts 传进来，组件本身不存文案。
const sections = {
  LandingProducts,
  LandingStats,
  LandingUpdate,
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
