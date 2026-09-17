<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

// 数据与隐私 + 下载 CTA。文案在 theme/data/<产品>.ts 里，这里只渲染
defineProps<{
  privacy: { eyebrow: string; title: string; items: { title: string; body: string }[] }
  download: {
    eyebrow: string
    title: string
    platform: string
    size: string
    note: string
    steps: string[]
    repoUrl: string
    releaseUrl: string
    license: { name: string; url: string }
    creditsLabel: string
    credits: { name: string; url: string }[]
  }
}>()
</script>

<template>
  <section id="privacy" class="bd-section">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <p class="bd-eyebrow">{{ privacy.eyebrow }}</p>
          <h2 class="bd-title">{{ privacy.title }}</h2>
        </header>
      </ScrollReveal>

      <div class="bd-grid bd-grid--3">
        <ScrollReveal v-for="(item, i) in privacy.items" :key="item.title" :delay="i * 70">
          <article class="bd-card">
            <h3 class="bd-card__title">{{ item.title }}</h3>
            <p class="bd-card__body">{{ item.body }}</p>
          </article>
        </ScrollReveal>
      </div>
    </div>
  </section>

  <section id="download" class="bd-section">
    <div class="bd-container">
      <ScrollReveal>
        <div class="cta bd-glow">
          <div class="cta__inner">
            <p class="bd-eyebrow">{{ download.eyebrow }}</p>
            <h2 class="cta__title">{{ download.title }}</h2>
            <p class="cta__lead">
              {{ download.platform }}·
              <span class="bd-grad">{{ download.size }}</span>
              · {{ download.note }}
            </p>

            <ol class="cta__steps">
              <li v-for="(step, i) in download.steps" :key="step">
                <span class="cta__num">{{ i + 1 }}</span>
                <span>{{ step }}</span>
              </li>
            </ol>

            <div class="cta__actions">
              <a class="btn btn--brand" :href="download.releaseUrl" target="_blank" rel="noreferrer">下载安装包</a>
              <a class="btn btn--ghost" :href="download.repoUrl" target="_blank" rel="noreferrer">查看源码</a>
            </div>

            <p class="cta__meta">
              以
              <a :href="download.license.url" target="_blank" rel="noreferrer">{{ download.license.name }}</a>
              开源 · {{ download.creditsLabel }}
              <template v-for="(item, i) in download.credits" :key="item.url">
                <span v-if="i">、</span>
                <a :href="item.url" target="_blank" rel="noreferrer">{{ item.name }}</a>
              </template>
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.cta {
  overflow: hidden;
  border: 1px solid var(--bd-border);
  border-radius: 28px;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%);
  box-shadow: var(--bd-shadow-lg);
}

.cta__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem 2.75rem;
  text-align: center;
}

@media (min-width: 40rem) {
  .cta__inner {
    padding: 3.75rem 3rem 3.25rem;
  }
}

.cta__title {
  margin: 0;
  color: var(--bd-text-1);
  font-size: clamp(1.6rem, 3.4vw, 2.6rem);
  font-weight: 750;
  line-height: 1.25;
  letter-spacing: -0.03em;
}

.cta__lead {
  margin: 1rem 0 0;
  max-width: 38rem;
  color: var(--bd-text-2);
  font-size: 1rem;
  line-height: 1.8;
}

.cta__steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin: 2.25rem 0 0;
  padding: 0;
  max-width: 46rem;
  list-style: none;
  text-align: left;
}

@media (min-width: 60rem) {
  .cta__steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    max-width: none;
  }
}

.cta__steps li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 0.9rem 1.1rem;
  border: 1px solid var(--bd-border);
  border-radius: 14px;
  background: var(--bd-bg-soft);
  color: var(--bd-text-2);
  font-size: 0.9375rem;
  line-height: 1.7;
}

.cta__num {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.1rem;
  border-radius: 999px;
  background: var(--bd-pink);
  color: var(--bd-on-brand);
  font-size: 0.8125rem;
  font-weight: 700;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.875rem;
  margin-top: 2.25rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 0 1.75rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    transform 0.2s var(--bd-ease),
    box-shadow 0.2s var(--bd-ease),
    border-color 0.2s var(--bd-ease);
}

.btn:hover {
  transform: translateY(-2px);
}

.btn--brand {
  background: var(--bd-pink);
  color: var(--bd-on-brand);
  box-shadow: 0 12px 30px -12px rgba(251, 114, 153, 0.75);
}

.btn--brand:hover {
  background: #ff86a8;
  color: var(--bd-on-brand);
  box-shadow: 0 18px 38px -12px rgba(251, 114, 153, 0.85);
}

.btn--ghost {
  border: 1px solid var(--bd-border-strong);
  background: #ffffff;
  color: var(--bd-text-1);
}

.btn--ghost:hover {
  border-color: rgba(15, 23, 42, 0.28);
  background: var(--bd-bg-soft);
  color: var(--bd-text-1);
}

.cta__meta {
  margin: 2rem 0 0;
  color: var(--bd-text-3);
  font-size: 0.8125rem;
  line-height: 1.9;
}

.cta__meta a {
  color: var(--bd-pink-ink);
  text-decoration: none;
}

.cta__meta a:hover {
  text-decoration: underline;
}
</style>
