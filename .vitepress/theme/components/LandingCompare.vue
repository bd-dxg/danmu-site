<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

// 「和官方客户端比」对比表。文案在 theme/data/<产品>.ts 里，这里只渲染。
// 窄屏折成纵向列表：隐藏表头，用 data-label 把列名贴到每个单元格前面。
type Row = { title: string; official: string; ours: string }

defineProps<{
  compare: {
    eyebrow: string
    title: string
    lead?: string
    officialLabel: string
    oursLabel: string
    rows: Row[]
    footnote?: string
  }
}>()

// 两列的标记图标：官方中性减号、我们粉色对勾，svg 内部内容直接 v-html
const iconMinus = '<path d="M5 12h14"/>'
const iconCheck = '<path d="M20 6 9 17l-5-5"/>'
</script>

<template>
  <section id="compare" class="bd-section bd-section--tint">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <p class="bd-eyebrow">{{ compare.eyebrow }}</p>
          <h2 class="bd-title">{{ compare.title }}</h2>
          <p v-if="compare.lead" class="bd-lead">{{ compare.lead }}</p>
        </header>
      </ScrollReveal>

      <ScrollReveal :delay="80">
        <div class="cmp">
          <table class="cmp__table">
            <thead>
              <tr>
                <th scope="col" class="cmp__corner">对比项</th>
                <th scope="col">{{ compare.officialLabel }}</th>
                <th scope="col" class="cmp__ours-head">{{ compare.oursLabel }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in compare.rows" :key="row.title">
                <th scope="row" class="cmp__row-title">{{ row.title }}</th>
                <td class="cmp__cell" :data-label="compare.officialLabel">
                  <span class="cmp__text">
                    <span class="cmp__mark cmp__mark--no" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.2"
                        stroke-linecap="round"
                        v-html="iconMinus" />
                    </span>
                    {{ row.official }}
                  </span>
                </td>
                <td class="cmp__cell cmp__cell--ours" :data-label="compare.oursLabel">
                  <span class="cmp__text">
                    <span class="cmp__mark cmp__mark--yes" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        v-html="iconCheck" />
                    </span>
                    {{ row.ours }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-if="compare.footnote" class="cmp__note">{{ compare.footnote }}</p>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.cmp {
  overflow: hidden;
  border: 1px solid var(--bd-border);
  border-radius: var(--bd-radius);
  background: #ffffff;
  box-shadow: var(--bd-shadow-md);
}

.cmp__table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.cmp__table thead th {
  padding: 1rem 1.5rem;
  background: var(--bd-bg-soft);
  color: var(--bd-text-2);
  font-size: 0.8125rem;
  font-weight: 650;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.cmp__table thead .cmp__corner {
  color: var(--bd-text-3);
  font-weight: 500;
}

.cmp__table thead .cmp__ours-head {
  background: var(--bd-pink-soft);
  color: var(--bd-pink-ink);
}

.cmp__table tbody th,
.cmp__table tbody td {
  padding: 1.2rem 1.5rem;
  vertical-align: top;
  font-size: 0.9375rem;
  line-height: 1.75;
}

.cmp__table tbody tr + tr th,
.cmp__table tbody tr + tr td {
  border-top: 1px solid var(--bd-border);
}

.cmp__row-title {
  width: 9rem;
  color: var(--bd-text-1);
  font-weight: 650;
}

.cmp__cell {
  color: var(--bd-text-3);
}

.cmp__cell--ours {
  background: rgba(251, 114, 153, 0.08);
  color: var(--bd-text-1);
}

.cmp__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  border-radius: 999px;
  vertical-align: -0.22em;
}

.cmp__mark svg {
  width: 0.8rem;
  height: 0.8rem;
}

.cmp__mark--no {
  background: var(--bd-surface-strong);
  color: var(--bd-text-3);
}

.cmp__mark--yes {
  background: var(--bd-pink-soft);
  color: var(--bd-pink-ink);
}

.cmp__note {
  margin: 1.25rem 0 0;
  color: var(--bd-text-3);
  font-size: 0.8125rem;
  line-height: 1.8;
  text-align: center;
  opacity: 0.85;
}

/* 窄屏：表格折成纵向列表，每个单元格前面贴列名 */
@media (max-width: 47.9375rem) {
  .cmp__table,
  .cmp__table tbody,
  .cmp__table tr,
  .cmp__table th,
  .cmp__table td {
    display: block;
    width: auto;
  }

  .cmp__table thead {
    display: none;
  }

  .cmp__table tbody tr {
    padding: 1.35rem 1.35rem 1.5rem;
  }

  .cmp__table tbody tr + tr {
    border-top: 1px solid var(--bd-border);
  }

  .cmp__table tbody tr + tr th,
  .cmp__table tbody tr + tr td {
    border-top: 0;
  }

  .cmp__table tbody th,
  .cmp__table tbody td {
    padding: 0;
  }

  .cmp__row-title {
    margin-bottom: 0.85rem;
    font-size: 1rem;
  }

  .cmp__cell {
    display: grid;
    grid-template-columns: 4.75rem minmax(0, 1fr);
    gap: 0.7rem;
    background: transparent;
  }

  .cmp__cell + .cmp__cell {
    margin-top: 0.7rem;
  }

  .cmp__cell::before {
    content: attr(data-label);
    color: var(--bd-text-3);
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1.75;
  }

  .cmp__cell--ours::before {
    color: var(--bd-pink-ink);
  }

  .cmp__text {
    min-width: 0;
  }
}
</style>
