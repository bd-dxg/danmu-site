<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

// 尺寸写进 width/height，避免图片加载完才撑开导致页面跳动
interface Shot {
  src: string
  width: number
  height: number
  title: string
  desc: string
}

const props = defineProps<{
  showcase: {
    hero: {
      eyebrow: string
      title: string
      lead: string
      image: { src: string; width: number; height: number; alt: string }
      caption: string
    }
    settings: {
      eyebrow: string
      title: string
      lead: string
      shots: Shot[]
    }
  }
}>()

const { hero, settings } = props.showcase
</script>

<template>
  <section id="showcase" class="bd-section">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <p class="bd-eyebrow">{{ hero.eyebrow }}</p>
          <h2 class="bd-title">{{ hero.title }}</h2>
          <p class="bd-lead">{{ hero.lead }}</p>
        </header>
      </ScrollReveal>

      <ScrollReveal :delay="80">
        <figure class="shot">
          <div class="bd-glow">
            <div class="bd-frame">
              <img :src="hero.image.src" :width="hero.image.width" :height="hero.image.height" :alt="hero.image.alt" />
            </div>
          </div>
          <figcaption class="bd-caption">{{ hero.caption }}</figcaption>
        </figure>
      </ScrollReveal>
    </div>
  </section>

  <section id="interface" class="bd-section bd-section--tint">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <p class="bd-eyebrow">{{ settings.eyebrow }}</p>
          <h2 class="bd-title">{{ settings.title }}</h2>
          <p class="bd-lead">{{ settings.lead }}</p>
        </header>
      </ScrollReveal>

      <div class="bd-grid bd-grid--2">
        <ScrollReveal v-for="(item, i) in settings.shots" :key="item.src" :delay="i * 60">
          <figure class="shot">
            <div class="bd-frame bd-frame--fixed">
              <img
                :src="item.src"
                :width="item.width"
                :height="item.height"
                :alt="`${item.title}界面截图`"
                loading="lazy"
                decoding="async" />
            </div>
            <figcaption class="bd-caption">
              <strong>{{ item.title }}</strong>
              · {{ item.desc }}
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shot {
  margin: 0 auto;
  max-width: 60rem;
}

.bd-frame--fixed {
  aspect-ratio: 4 / 3;
}

/* 内存占用那张是宽幅的，统一框内居中留白，避免每张卡片高度参差 */
.bd-frame--fixed img {
  height: 100%;
  object-fit: contain;
}

.bd-caption strong {
  color: var(--bd-text-1);
  font-weight: 600;
}

#interface .bd-grid {
  margin-top: 0.5rem;
}
</style>
