<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

// 尺寸写进 width/height，避免图片加载完才撑开导致页面跳动
const shots = [
  {
    src: '/imgs/扫码登录.webp',
    width: 918,
    height: 711,
    title: '扫码登录',
    desc: '登录信息只存本机，按本机与本机用户加密',
  },
  {
    src: '/imgs/弹幕设置.webp',
    width: 918,
    height: 711,
    title: '弹幕样式',
    desc: '字号、行距、字体、背景不透明度随你调',
  },
  {
    src: '/imgs/朗读设置.webp',
    width: 924,
    height: 711,
    title: '朗读设置',
    desc: '选音色、调语速音量，先试听再挂后台',
  },
  {
    src: '/imgs/主播分区.webp',
    width: 924,
    height: 711,
    title: '礼物与朗读',
    desc: '金额门槛、连击合并、礼物念不念，开关都在这里',
  },
  {
    src: '/imgs/内存占用.webp',
    width: 713,
    height: 417,
    title: '挂着直播时的占用',
    desc: '任务管理器里的真实数字，长时间挂着不越涨越多',
  },
  {
    src: '/imgs/关于软件.webp',
    width: 924,
    height: 711,
    title: '关于',
    desc: '版本号、项目地址、开源致谢',
  },
]
</script>

<template>
  <section id="showcase" class="bd-section">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <p class="bd-eyebrow">实机效果</p>
          <h2 class="bd-title">弹幕直接叠在游戏画面上</h2>
          <p class="bd-lead">
            弹幕窗是一层透明悬浮窗，下面就是游戏。礼物行用金色区分，同一个人送同一件礼物合并成一行只显示总数；下方是发送框，回车即发。
          </p>
        </header>
      </ScrollReveal>

      <ScrollReveal :delay="80">
        <figure class="shot">
          <div class="bd-glow">
            <div class="bd-frame">
              <img
                src="/imgs/弹幕效果.webp"
                :width="1410"
                :height="1096"
                alt="弹幕窗透明叠在游戏画面上，左侧是金色区分的礼物行与弹幕列表，下方是发送框" />
            </div>
          </div>
          <figcaption class="bd-caption">
            弹幕窗透明，直接叠在游戏画面上 · 礼物行金色区分，连击只占一行 · 下方发送框回车发送
          </figcaption>
        </figure>
      </ScrollReveal>
    </div>
  </section>

  <section id="interface" class="bd-section bd-section--tint">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <p class="bd-eyebrow">界面</p>
          <h2 class="bd-title">设置项都摆在明面上</h2>
          <p class="bd-lead">没有藏在二级菜单里的开关，每一项改完即生效，配置存在本机。</p>
        </header>
      </ScrollReveal>

      <div class="bd-grid bd-grid--2">
        <ScrollReveal v-for="(item, i) in shots" :key="item.src" :delay="i * 60">
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
