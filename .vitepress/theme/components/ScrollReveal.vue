<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * 滚动进视口时淡入上移。
 *
 * 只在确认元素位于视口下方时才加 `bd-armed`（隐藏态），首屏内容保持直接可见，
 * 因此无 JS / 禁用动画时页面不会白屏。样式见 style.css 第 7 节。
 */
const props = withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const root = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | undefined

onMounted(() => {
  const el = root.value
  if (!el || typeof IntersectionObserver === 'undefined') return

  // 首屏内的元素不参与观察，直接可见
  if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
    el.classList.add('is-visible')
    return
  }

  el.style.transitionDelay = `${props.delay}ms`
  el.classList.add('bd-armed')

  observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer?.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  )
  observer.observe(el)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div ref="root" class="bd-reveal">
    <slot />
  </div>
</template>
