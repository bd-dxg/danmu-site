<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

// 核心亮点 + 功能表。文案在 theme/data/<产品>.ts 里，这里只渲染。
// 卡片 icon 是 svg 内部内容，直接 v-html 塞进 <svg>
type Card = { icon: string; title: string; body: string }
type Head = { eyebrow: string; title: string; lead?: string }

defineProps<{
  highlights: Head & { cards: Card[] }
  features: Head & { items: { title: string; desc: string }[]; todo: string }
}>()
</script>

<template>
  <section id="highlights" class="bd-section">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <p class="bd-eyebrow">{{ highlights.eyebrow }}</p>
          <h2 class="bd-title">{{ highlights.title }}</h2>
          <p class="bd-lead">{{ highlights.lead }}</p>
        </header>
      </ScrollReveal>

      <div class="bd-grid bd-grid--2">
        <ScrollReveal v-for="(item, i) in highlights.cards" :key="item.title" :delay="i * 70">
          <article class="bd-card">
            <span class="bd-card__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                v-html="item.icon" />
            </span>
            <h3 class="bd-card__title">{{ item.title }}</h3>
            <p class="bd-card__body">{{ item.body }}</p>
          </article>
        </ScrollReveal>
      </div>
    </div>
  </section>

  <section id="features" class="bd-section">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <p class="bd-eyebrow">{{ features.eyebrow }}</p>
          <h2 class="bd-title">{{ features.title }}</h2>
        </header>
        <div class="feats">
          <div v-for="item in features.items" :key="item.title" class="feats__cell">
            <h3 class="feats__title">{{ item.title }}</h3>
            <p class="feats__desc">{{ item.desc }}</p>
          </div>
        </div>
        <p class="feats__todo">{{ features.todo }}</p>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
/* 功能表：1px 分隔线靠父级背景色透出来，比给每格画边框简单 */
.feats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  overflow: hidden;
  border: 1px solid var(--bd-border);
  border-radius: var(--bd-radius);
  background: var(--bd-border);
  box-shadow: var(--bd-shadow-sm);
}

@media (min-width: 40rem) {
  .feats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 60rem) {
  .feats {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.feats__cell {
  padding: 1.5rem 1.4rem;
  background: #ffffff;
  transition: background-color 0.25s var(--bd-ease);
}

.feats__cell:hover {
  background: var(--bd-pink-soft);
}

.feats__title {
  margin: 0 0 0.55rem;
  color: var(--bd-text-1);
  font-size: 1rem;
  font-weight: 650;
  letter-spacing: -0.01em;
}

.feats__desc {
  margin: 0;
  color: var(--bd-text-3);
  font-size: 0.875rem;
  line-height: 1.8;
}

.feats__todo {
  margin: 1.25rem 0 0;
  color: var(--bd-text-3);
  font-size: 0.8125rem;
  line-height: 1.8;
  text-align: center;
  opacity: 0.75;
}
</style>
