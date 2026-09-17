<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

// 数字口碑：几个一眼能记住的量。文案在 theme/data/<产品>.ts 里，这里只渲染
defineProps<{ items: { value: string; unit: string; label: string }[] }>()
</script>

<template>
  <section id="stats" class="bd-section stats">
    <div class="bd-container">
      <ScrollReveal>
        <ul class="stats__list">
          <li v-for="item in items" :key="item.label" class="stats__item">
            <p class="stats__value">
              <span class="bd-grad">{{ item.value }}</span>
              <small>{{ item.unit }}</small>
            </p>
            <p class="stats__label">{{ item.label }}</p>
          </li>
        </ul>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
/* 紧贴首屏，不要和 Hero 之间空出一大块 */
.stats {
  padding-top: 0;
  padding-bottom: 2rem;
}

.stats__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--bd-border);
  border-radius: var(--bd-radius);
  background: var(--bd-border);
  box-shadow: var(--bd-shadow-sm);
  overflow: hidden;
}

.stats__item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  align-items: center;
  padding: 1.5rem 1rem;
  background: #ffffff;
  text-align: center;
}

.stats__value {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  margin: 0;
  font-size: 1.75rem;
  font-weight: 750;
  line-height: 1;
  letter-spacing: -0.02em;
}

.stats__value small {
  color: var(--bd-text-3);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0;
}

.stats__label {
  margin: 0;
  color: var(--bd-text-3);
  font-size: 0.8125rem;
  line-height: 1.5;
}

@media (min-width: 40rem) {
  .stats__item {
    padding: 1.75rem 1rem;
  }

  .stats__value {
    font-size: 2.25rem;
  }
}

@media (min-width: 60rem) {
  .stats__list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .stats__value {
    font-size: 2.5rem;
  }
}
</style>
