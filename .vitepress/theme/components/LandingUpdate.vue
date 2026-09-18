<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

// 本次更新板块。数据由页面从 theme/data/<产品>.ts 传进来，组件只负责排版。
defineProps<{
  update: {
    badge: string
    title: string
    lead: string
    changes: { icon: string; title: string; body: string }[]
    also: { title: string; body: string }[]
  }
}>()
</script>

<template>
  <section id="update" class="bd-section">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <span class="update__badge">
            <span class="update__dot" aria-hidden="true" />
            最新
            <strong>{{ update.badge }}</strong>
          </span>
          <h2 class="bd-title">{{ update.title }}</h2>
          <p class="bd-lead">{{ update.lead }}</p>
        </header>
      </ScrollReveal>

      <div class="bd-grid bd-grid--2">
        <ScrollReveal v-for="(item, i) in update.changes" :key="item.title" :delay="i * 70">
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

      <ScrollReveal :delay="120">
        <ul class="also">
          <li v-for="item in update.also" :key="item.title" class="also__item">
            <strong class="also__title">{{ item.title }}</strong>
            <span class="also__body">{{ item.body }}</span>
          </li>
        </ul>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.update__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 1rem;
  padding: 0.3rem 0.9rem;
  border: 1px solid rgba(251, 114, 153, 0.32);
  border-radius: 999px;
  background: var(--bd-pink-soft);
  color: var(--bd-pink-ink);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.update__badge strong {
  font-weight: 750;
}

.update__dot {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 999px;
  background: var(--bd-pink);
  box-shadow: 0 0 0 3px rgba(251, 114, 153, 0.22);
}

/* 附带项：一行一条，比上面的大卡片轻 */
.also {
  display: grid;
  gap: 1px;
  margin: 1.25rem 0 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--bd-border);
  border-radius: var(--bd-radius);
  background: var(--bd-border);
  list-style: none;
  box-shadow: var(--bd-shadow-sm);
}

.also__item {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.1rem 0.6rem;
  padding: 1rem 1.4rem;
  background: #ffffff;
  font-size: 0.9375rem;
  line-height: 1.75;
}

.also__title {
  color: var(--bd-text-1);
  font-weight: 650;
}

.also__body {
  color: var(--bd-text-3);
}
</style>
