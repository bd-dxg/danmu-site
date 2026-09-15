<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

// 本次更新（v1.3.0）主推的四条，文案一律避免「队列 / 采样 / 事件类型」这类说法
const changes = [
  {
    icon: '<path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20"/><circle cx="10" cy="7.5" r="3.5"/><path d="M18.5 8.5v5M21 11h-5"/>',
    title: '谁进来了，弹幕窗里看得到',
    body: '进房、关注、分享、点赞、舰长进场这几件事，会用比弹幕浅一档的颜色单独显示，一眼分得开。默认是关的 —— 观众一多，这类消息会比弹幕还多，不如不开。',
  },
  {
    icon: '<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.6 6a8.6 8.6 0 0 1 0 12"/>',
    title: '舰长进场会念出来',
    body: '念的是「欢迎舰长 老板A进入直播间」。只念舰长、提督、总督；排在待念弹幕后面，不打断正在念的内容；可以单独打开，不受弹幕朗读总开关影响。',
  },
  {
    icon: '<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
    title: '热闹起来也不会刷屏',
    body: '同一个人 60 秒内只出现一次，整体大约每 30 秒一条；舰长进场另有自己的一份额度。房间再热，这些消息也淹没不了弹幕。',
  },
  {
    icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
    title: '出问题能查得动了',
    body: '日志自动写在电脑里，按大小轮换、只留最近 7 份；「关于」页新增「日志」按钮，一键打开所在目录。反馈问题时附上日志，排查快很多。',
  },
]

const also = [
  { title: '不会再开出第二个窗口', body: '重复启动时直接唤出已经开着的那个窗口。' },
  { title: '有新版本会提示你', body: '启动后悄悄检查一次，在「关于」页显示提示；只提醒，不偷偷下载安装。' },
  { title: '设置页说明改成人话了', body: '「队列」「积压」「采样」这类说法，换成了普通说法。' },
]
</script>

<template>
  <section id="update" class="bd-section">
    <div class="bd-container">
      <ScrollReveal>
        <header class="bd-head">
          <span class="update__badge">
            <span class="update__dot" aria-hidden="true" />
            最新
            <strong>v1.3.0</strong>
          </span>
          <h2 class="bd-title">这次更新了什么</h2>
          <p class="bd-lead">一句话：让你知道谁进来了，出事的时候也查得动。以下四项默认都不打扰你，想要才开。</p>
        </header>
      </ScrollReveal>

      <div class="bd-grid bd-grid--2">
        <ScrollReveal v-for="(item, i) in changes" :key="item.title" :delay="i * 70">
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
          <li v-for="item in also" :key="item.title" class="also__item">
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

/* 附带的三条：一行一条，比上面的大卡片轻 */
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
