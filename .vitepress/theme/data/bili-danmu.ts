// bili-danmu 落地页文案。区块组件只负责渲染，文案集中在这里。
import { iconBox, iconChip, iconMinusCircle, iconRefresh } from './icons'

const REPO_URL = 'https://github.com/bd-dxg/bili-danmu'

export const stats = [
  { value: '2.9', unit: 'MB', label: '安装包体积' },
  { value: '12', unit: 'MB', label: '装完占用硬盘' },
  { value: '14', unit: '种', label: '中文朗读音色' },
  { value: '0', unit: '条', label: '信息收集与日志上传' },
]

export const highlights = {
  eyebrow: '核心亮点',
  title: '它只干一件事，就是干好',
  lead: '给用 OBS 推流的主播一个不挡游戏画面的看弹幕窗口，也给想和主播一起玩的水友一个干净的看弹幕工具。',
  cards: [
    {
      icon: iconBox,
      title: '小到离谱',
      body: '安装包 2.9 MB，装完占硬盘 12 MB。不用额外装浏览器组件（Windows 自带）、不用装 Python、不用下载语音模型，双击下一步就能用。',
    },
    {
      icon: iconChip,
      title: '不跟游戏抢电脑',
      body: '直播时游戏已经满负荷，助手不该再压上一块石头。内存占用很小且长时间挂着不会越来越多；鼠标穿透一开，弹幕窗不拦鼠标，点击直接落到游戏上。',
    },
    {
      icon: iconMinusCircle,
      title: '故意没做的功能',
      body: '没有用户头像、没有礼物图标，一行弹幕就是一行字；没有花哨动画，弹幕淡入不影响画面拖动；不打赏刷屏，同一个人送同一件礼物合并成一行显示总数。',
    },
    {
      icon: iconRefresh,
      title: '挂着就行',
      body: '断线自动重连，重连期间不弹报错、不刷屏；弹幕最多留 120 条，超出挤掉最早的，看一整天也不会卡。',
    },
  ],
}

export const showcase = {
  hero: {
    eyebrow: '实机效果',
    title: '弹幕直接叠在游戏画面上',
    lead: '弹幕窗是一层透明悬浮窗，下面就是游戏。礼物行用金色区分，同一个人送同一件礼物合并成一行只显示总数；下方是发送框，回车即发。',
    image: {
      src: '/imgs/bili-danmu/弹幕效果.webp',
      width: 1410,
      height: 1096,
      alt: '弹幕窗透明叠在游戏画面上，左侧是金色区分的礼物行与弹幕列表，下方是发送框',
    },
    caption: '弹幕窗透明，直接叠在游戏画面上 · 礼物行金色区分，连击只占一行 · 下方发送框回车发送',
  },
  settings: {
    eyebrow: '界面',
    title: '设置项都摆在明面上',
    lead: '没有藏在二级菜单里的开关，每一项改完即生效，配置存在本机。',
    shots: [
      {
        src: '/imgs/bili-danmu/扫码登录.webp',
        width: 918,
        height: 711,
        title: '扫码登录',
        desc: '登录信息只存本机，按本机与本机用户加密',
      },
      {
        src: '/imgs/bili-danmu/弹幕设置.webp',
        width: 918,
        height: 711,
        title: '弹幕样式',
        desc: '字号、行距、字体、背景不透明度随你调',
      },
      {
        src: '/imgs/bili-danmu/朗读设置.webp',
        width: 924,
        height: 711,
        title: '朗读设置',
        desc: '选音色、调语速音量，先试听再挂后台',
      },
      {
        src: '/imgs/bili-danmu/主播分区.webp',
        width: 924,
        height: 711,
        title: '礼物与朗读',
        desc: '金额门槛、连击合并、礼物念不念，开关都在这里',
      },
      {
        src: '/imgs/bili-danmu/内存占用.webp',
        width: 713,
        height: 417,
        title: '挂着直播时的占用',
        desc: '任务管理器里的真实数字，长时间挂着不越涨越多',
      },
      {
        src: '/imgs/bili-danmu/关于软件.webp',
        width: 924,
        height: 711,
        title: '关于',
        desc: '版本号、项目地址、开源致谢',
      },
    ],
  },
}

// 本次更新（v1.3.0）主推的四条，文案一律避免「队列 / 采样 / 事件类型」这类说法
export const update = {
  badge: 'v1.3.0',
  title: '这次更新了什么',
  lead: '一句话：让你知道谁进来了，出事的时候也查得动。以下四项默认都不打扰你，想要才开。',
  changes: [
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
  ],
  also: [
    { title: '不会再开出第二个窗口', body: '重复启动时直接唤出已经开着的那个窗口。' },
    { title: '有新版本会提示你', body: '启动后悄悄检查一次，在「关于」页显示提示；只提醒，不偷偷下载安装。' },
    { title: '设置页说明改成人话了', body: '「队列」「积压」「采样」这类说法，换成了普通说法。' },
  ],
}

export const features = {
  eyebrow: '功能',
  title: '能做什么',
  items: [
    { title: '收弹幕', desc: '连上直播间就实时收，断线自动重连，掉线不用手动管。' },
    { title: '弹幕窗', desc: '桌面透明悬浮窗，可拖动、可缩放、可置顶、可鼠标穿透，背景不透明度可调。' },
    { title: '只看想看的', desc: '只显示舰长 / 房管、只显示带粉丝牌的、荣耀等级门槛、敏感词屏蔽。' },
    { title: '发弹幕', desc: '弹幕窗下方独立发送框，回车发送，字号跟着弹幕走。' },
    {
      title: '弹幕朗读',
      desc: '14 个中文音色（普通话 / 方言 / 粤语 / 台湾），语速音量可调，念前先清洗 emoji 和链接。',
    },
    { title: '礼物 / SC / 上舰', desc: '显示在弹幕上方的独立区域，可设金额门槛，连击只占一行显示总数，也能念出来。' },
    { title: '一键回房', desc: '最近房间点一下直连，系统托盘常驻，运行状态一览。' },
    { title: '数据不外流', desc: '配置存在本机，不收集任何信息、不上传日志。' },
  ],
  todo: '还没做：滚动弹幕、顶弹、用户屏蔽、Windows 系统 TTS、开机自启、全局快捷键、自动更新。',
}

export const privacy = {
  eyebrow: '数据与隐私',
  title: '它不会往外传你的东西',
  items: [
    {
      title: '配置存本机',
      body: '配置只写在本机用户目录下；登录信息加密保存，且与本机、本机用户绑定，配置文件拷到别的电脑也读不出来，要重新扫码。',
    },
    {
      title: '不收集、不上传',
      body: '不收集任何信息，不上传日志。没有埋点、没有统计 SDK。',
    },
    {
      title: '唯一的对外请求',
      body: '开启朗读后，弹幕文字会发往微软 Edge TTS 服务合成语音；关掉朗读开关就停。',
    },
  ],
}

export const download = {
  eyebrow: '下载',
  title: '下载 bili-danmu v1.3.0',
  platform: 'Windows 10 / 11（x64）',
  size: '2.9 MB',
  note: '双击安装，不需要额外运行环境',
  steps: [
    '下载安装包，双击装好',
    '扫码登录（B 站 2025+ 不向游客推弹幕，未登录收不到）',
    '填直播间号点「连接」，弹幕窗就出来了',
  ],
  repoUrl: REPO_URL,
  releaseUrl: `${REPO_URL}/releases/latest`,
  license: { name: 'GNU GPL v3', url: `${REPO_URL}/blob/main/LICENSE` },
  creditsLabel: '弹幕协议实现参考',
  credits: [{ name: 'DanmuFree', url: 'https://github.com/SoraYjy/DanmuFree' }],
}
