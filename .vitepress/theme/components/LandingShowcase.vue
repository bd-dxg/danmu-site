<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import mediumZoom from 'medium-zoom'
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

// 截图点一下放大看细节。只在客户端挂，SSR 阶段没有 DOM
let zoom: ReturnType<typeof mediumZoom> | undefined

onMounted(() => {
  zoom = mediumZoom('#showcase img, #interface img', {
    background: 'rgba(255, 255, 255, 0.92)',
    margin: 32,
  })
})

onBeforeUnmount(() => zoom?.detach())
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
          <figcaption class="bd-caption">
            {{ hero.caption }}
            <span class="shot__hint">点击图片看大图</span>
          </figcaption>
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
              <span class="shot__hint">点击图片看大图</span>
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

/* 放大提示：另起一行、淡一点，不抢描述本身的注意力 */
.shot__hint {
  display: block;
  margin-top: 0.3rem;
  color: var(--bd-text-3);
  font-size: 0.8125rem;
  opacity: 0.65;
}

#interface .bd-grid {
  margin-top: 0.5rem;
}
</style>
