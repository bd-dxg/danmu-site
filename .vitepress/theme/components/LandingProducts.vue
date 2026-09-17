<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

// 首页产品卡：两款产品各自的入口、体积、版本与一句话说明
const products = [
  {
    name: 'bili-danmu',
    icon: '/imgs/bili-danmu/app-icon.webp',
    tagline: 'B 站直播弹幕助手',
    desc: '透明悬浮窗叠在游戏画面上，不挡游戏不拦鼠标；14 个中文音色把弹幕念出来；断线自己重连。',
    tags: ['2.9 MB', 'v1.3.0', '弹幕朗读', '能发弹幕'],
    href: '/bili-danmu',
    releaseUrl: 'https://github.com/bd-dxg/bili-danmu/releases/latest',
  },
  {
    name: 'douyin-danmu',
    icon: '/imgs/douyin-danmu/app-icon.png',
    tagline: '抖音直播弹幕助手',
    desc: '给用 OBS 推流的主播：桌面看弹幕 + Edge TTS 朗读，鼠标穿透不挡游戏；不登录也能收弹幕、进场、关注、点赞。',
    tags: ['3 MB', 'v0.1.1', '弹幕朗读', '只读弹幕'],
    href: '/douyin-danmu',
    releaseUrl: 'https://github.com/bd-dxg/douyin-danmu/releases/latest',
  },
]
</script>

<template>
  <section id="products" class="bd-section">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <p class="bd-eyebrow">产品</p>
          <h2 class="bd-title">同一套骨架，两个平台</h2>
          <p class="bd-lead">都是 Windows 桌面端、安装包都只有几 MB、都不跟游戏抢电脑。区别只在盯的是哪个平台。</p>
        </header>
      </ScrollReveal>

      <div class="bd-grid bd-grid--2">
        <ScrollReveal v-for="(item, i) in products" :key="item.name" :delay="i * 80">
          <article class="bd-card prod">
            <div class="prod__top">
              <img
                class="prod__icon"
                :src="item.icon"
                :alt="`${item.name} 图标`"
                width="56"
                height="56"
                decoding="async" />
              <div>
                <h3 class="prod__name">{{ item.name }}</h3>
                <p class="prod__tagline">{{ item.tagline }}</p>
              </div>
            </div>

            <p class="bd-card__body">{{ item.desc }}</p>

            <ul class="prod__tags">
              <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
            </ul>

            <div class="prod__actions">
              <a class="btn btn--brand" :href="item.href">看这个产品</a>
              <a class="btn btn--ghost" :href="item.releaseUrl" target="_blank" rel="noreferrer">下载安装包</a>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prod {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
}

.prod__top {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1.1rem;
}

.prod__icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 16px;
  object-fit: contain;
}

.prod__name {
  margin: 0;
  color: var(--bd-text-1);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.prod__tagline {
  margin: 0.2rem 0 0;
  color: var(--bd-text-3);
  font-size: 0.875rem;
}

.prod__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 1.15rem 0 0;
  padding: 0;
  list-style: none;
}

.prod__tags li {
  padding: 0.2rem 0.65rem;
  border: 1px solid var(--bd-border);
  border-radius: 999px;
  background: var(--bd-bg-soft);
  color: var(--bd-text-3);
  font-size: 0.8125rem;
  line-height: 1.6;
}

/* 按钮沉到卡片底部，两张卡片的按钮高度才能对齐 */
.prod__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
  padding: 0 1.4rem;
  border-radius: 999px;
  font-size: 0.9375rem;
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
  box-shadow: 0 12px 30px -14px rgba(251, 114, 153, 0.75);
}

.btn--brand:hover {
  background: #ff86a8;
  color: var(--bd-on-brand);
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
</style>
