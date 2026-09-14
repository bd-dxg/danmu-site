<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

// icon 是 svg 内部内容，直接 v-html 塞进 <svg>
const highlights = [
  {
    icon: '<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
    title: '小到离谱',
    body: '安装包 2.9 MB，装完占硬盘 12 MB。不用额外装浏览器组件（Windows 自带）、不用装 Python、不用下载语音模型，双击下一步就能用。',
  },
  {
    icon: '<rect x="7.5" y="7.5" width="9" height="9" rx="2"/><path d="M10 3.5V7M14 3.5V7M10 17v3.5M14 17v3.5M3.5 10H7M3.5 14H7M17 10h3.5M17 14h3.5"/>',
    title: '不跟游戏抢电脑',
    body: '直播时游戏已经满负荷，助手不该再压上一块石头。内存占用很小且长时间挂着不会越来越多；鼠标穿透一开，弹幕窗不拦鼠标，点击直接落到游戏上。',
  },
  {
    icon: '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12h7"/>',
    title: '故意没做的功能',
    body: '没有用户头像、没有礼物图标，一行弹幕就是一行字；没有花哨动画，弹幕淡入不影响画面拖动；不打赏刷屏，同一个人送同一件礼物合并成一行显示总数。',
  },
  {
    icon: '<path d="M20.5 12a8.5 8.5 0 1 1-2.5-6"/><path d="M20.5 3.5V9H15"/>',
    title: '挂着就行',
    body: '断线自动重连，重连期间不弹报错、不刷屏；弹幕最多留 120 条，超出挤掉最早的，看一整天也不会卡。',
  },
]

const features = [
  { title: '收弹幕', desc: '连上直播间就实时收，断线自动重连，掉线不用手动管。' },
  { title: '弹幕窗', desc: '桌面透明悬浮窗，可拖动、可缩放、可置顶、可鼠标穿透，背景不透明度可调。' },
  { title: '只看想看的', desc: '只显示舰长 / 房管、只显示带粉丝牌的、荣耀等级门槛、敏感词屏蔽。' },
  { title: '发弹幕', desc: '弹幕窗下方独立发送框，回车发送，字号跟着弹幕走。' },
  { title: '弹幕朗读', desc: '14 个中文音色（普通话 / 方言 / 粤语 / 台湾），语速音量可调，念前先清洗 emoji 和链接。' },
  { title: '礼物 / SC / 上舰', desc: '显示在弹幕上方的独立区域，可设金额门槛，连击只占一行显示总数，也能念出来。' },
  { title: '一键回房', desc: '最近房间点一下直连，系统托盘常驻，运行状态一览。' },
  { title: '数据不外流', desc: '配置存在本机，不收集任何信息、不上传日志。' },
]
</script>

<template>
  <section id="highlights" class="bd-section">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <p class="bd-eyebrow">核心亮点</p>
          <h2 class="bd-title">它只干一件事，就是干好</h2>
          <p class="bd-lead">
            给用 OBS 推流的主播一个不挡游戏画面的看弹幕窗口，也给想和主播一起玩的水友一个干净的看弹幕工具。
          </p>
        </header>
      </ScrollReveal>

      <div class="bd-grid bd-grid--2">
        <ScrollReveal v-for="(item, i) in highlights" :key="item.title" :delay="i * 70">
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
          <p class="bd-eyebrow">功能</p>
          <h2 class="bd-title">能做什么</h2>
        </header>
        <div class="feats">
          <div v-for="item in features" :key="item.title" class="feats__cell">
            <h3 class="feats__title">{{ item.title }}</h3>
            <p class="feats__desc">{{ item.desc }}</p>
          </div>
        </div>
        <p class="feats__todo">还没做：滚动弹幕、顶弹、用户屏蔽、Windows 系统 TTS、开机自启、全局快捷键、自动更新。</p>
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
