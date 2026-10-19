// douyin-danmu 落地页文案。区块组件只负责渲染，文案集中在这里。
import {
  iconBell,
  iconBox,
  iconChip,
  iconDownload,
  iconMinusCircle,
  iconRefresh,
} from './icons'

const REPO_URL = 'https://github.com/bd-dxg/douyin-danmu'

// 发版只需改这一行：版本号、下载文件名、代理地址都跟着它走
const VERSION = '0.3.0'
// 国内直连加速：v4.gh-proxy.org 代理 GitHub 下载，原链接直接拼在后面
const DOWNLOAD_URL = `https://v4.gh-proxy.org/${REPO_URL}/releases/download/v${VERSION}/douyin-danmu_${VERSION}_x64-setup.exe`

export const stats = [
  { value: '3.5', unit: 'MB', label: '安装包体积' },
  { value: '120', unit: '条', label: '弹幕最多保留' },
  { value: '14', unit: '种', label: '中文朗读音色' },
  { value: '0', unit: '条', label: '信息收集与日志上传' },
]

export const highlights = {
  eyebrow: '核心亮点',
  title: '抖音主播的弹幕窗，就该长在桌面上',
  lead: '抖音没有面向主播的桌面弹幕窗：手机看弹幕要抬手机，网页版弹幕又跟画面挤在一个窗口里。这个窗口贴在桌面上，跟游戏画面叠着也不打架。',
  cards: [
    {
      icon: iconBox,
      title: '小到离谱',
      body: '安装包 3.5 MB（0.3.0 实测）。不用额外装浏览器组件（Windows 自带 WebView2）、不用装 Python、不用下载语音模型，双击下一步就能用。',
    },
    {
      icon: iconChip,
      title: '不跟游戏抢电脑',
      body: '直播时游戏已经满负荷，助手不该再压上一块石头；鼠标穿透一开，弹幕窗不拦鼠标，点击直接落到游戏上。',
    },
    {
      icon: iconMinusCircle,
      title: '故意没做的功能',
      body: '没有用户头像、没有礼物图标，一行弹幕就是一行字；没有花哨动画；不打赏刷屏，同一个人送同一件礼物合并成一行显示总数量。',
    },
    {
      icon: iconRefresh,
      title: '挂着就行',
      body: '断线自动重连，退避到 64 秒再试，重连期间不弹报错、不刷屏；弹幕最多留 120 条，超出挤掉最早的，看一整天也不会卡。',
    },
  ],
}

export const showcase = {
  hero: {
    eyebrow: '实机效果',
    title: '弹幕直接叠在游戏画面上',
    lead: '弹幕窗是一层透明悬浮窗，下面就是游戏。用户名前是抖音等级，加入粉丝团的再跟一枚灯牌徽章；礼物单占一块区域，同一个人送同一件合并成一行只显示总数。',
    image: {
      src: '/imgs/douyin-danmu/弹幕效果.webp',
      width: 2184,
      height: 1226,
      alt: '弹幕窗透明叠在游戏画面上，左下角是带抖音等级与灯牌徽章的弹幕列表，礼物区在弹幕上方',
    },
    caption: '弹幕窗透明，直接叠在游戏画面上 · 用户名前是抖音等级与粉丝团灯牌 · 礼物区独立在弹幕上方',
  },
  settings: {
    eyebrow: '界面',
    title: '设置项都摆在明面上',
    lead: '没有藏在二级菜单里的开关，每一项改完即生效，配置存在本机。',
    shots: [
      {
        src: '/imgs/douyin-danmu/登录页面.webp',
        width: 1201,
        height: 1082,
        title: '扫码登录',
        desc: '登录后才能收礼物消息，登录信息只存本机',
      },
      {
        src: '/imgs/douyin-danmu/弹幕设置.webp',
        width: 879,
        height: 675,
        title: '弹幕样式',
        desc: '字号、行距、字体、背景不透明度随你调',
      },
      {
        src: '/imgs/douyin-danmu/朗读设置.webp',
        width: 879,
        height: 675,
        title: '朗读设置',
        desc: '选音色、调语速音量，先试听再挂后台',
      },
      {
        src: '/imgs/douyin-danmu/主播分区.webp',
        width: 879,
        height: 675,
        title: '礼物渲染',
        desc: '金额门槛、连击合并、礼物念不念，开关都在这里',
      },
      {
        src: '/imgs/douyin-danmu/内存占用.webp',
        width: 952,
        height: 599,
        title: '挂着直播时的占用',
        desc: '任务管理器里的真实数字，登录进程开完自己退出',
      },
      {
        src: '/imgs/douyin-danmu/关于软件.webp',
        width: 879,
        height: 675,
        title: '关于',
        desc: '版本号、检查更新、项目地址、开源致谢',
      },
    ],
  },
}

// 本次更新（v0.3.0）：接上自动更新，以后新版点一下自己装好
// 注：本版是最后一个需要手动下载的版本
export const update = {
  badge: `v${VERSION}`,
  title: '这次更新了什么',
  lead: '一句话：以后有新版本，点一下按钮就自己下载、验签、装好并重启，不用再回 GitHub 手动下。这一版是最后一个需要手动装的版本。',
  changes: [
    {
      icon: iconDownload,
      title: '点一下就把新版装好',
      body: '「关于」页的胶囊按钮承载完整流程：检查更新 → 检查中… → 发现新版本 → 下载 x% → 安装中… → 已是最新 / 重试，装完自己重启。另有「手动下」按钮直接下载安装包。',
    },
    {
      icon: iconBell,
      title: '更新提示挪到看得见的地方',
      body: '关于页得主动点进去，主播平时根本看不到。现在侧边栏「关于软件」有新版时亮一个小红点，一打开就看见；检查频率从「只在启动时查一次」改成「启动 5 秒后查一次 + 之后每 6 小时一次」，连续开播几天不重启也不会漏。',
    },
  ],
  also: [
    {
      title: '发现新版本就在后台静默下好安装包',
      body: '点按钮时只剩「安装 → 重启」，秒级完成，不用盯着进度条。',
    },
    {
      title: '签名校验 + 防降级',
      body: '服务端公钥验签，验不过拒绝安装；签名里绑定的版本还必须与更新清单声明的版本一致，挡住「新版本号配旧发布包」的篡改。',
    },
    {
      title: '旧的「版本更新提醒」已被取代',
      body: '之前启动查 GitHub Releases、跳浏览器下载那一套已经去掉了，现在全在应用里完成。',
    },
  ],
}

export const features = {
  eyebrow: '功能',
  title: '能做什么',
  items: [
    { title: '收弹幕', desc: '连上直播间就实时收，断线自动重连（1/2/4/…/64s 退避），掉线不用手动管。' },
    { title: '弹幕窗', desc: '桌面透明悬浮窗，可拖动、可缩放、可置顶、可鼠标穿透，透明度可调，位置和大小自动记住。' },
    { title: '身份徽章', desc: '用户名前显示抖音等级；加入粉丝团的观众再跟一枚灯牌徽章。' },
    { title: '只看想看的', desc: '等级门槛筛选 + 敏感词屏蔽，显示与朗读各一套，互不影响。' },
    { title: '礼物', desc: '显示在弹幕上方独立区域，可设金额门槛；连击只占一行显示总数量，也能插队念出来。' },
    { title: '欢迎信息', desc: '进房 / 关注 / 点赞提示行。默认关 —— 这类消息比弹幕还多。' },
    {
      title: '弹幕朗读',
      desc: '14 个中文音色（普通话 / 方言 / 粤语 / 台湾），语速音量可调，念之前先清洗 emoji 和链接；表情弹幕默认不念，@提及念成「某某对某某说 内容」。',
    },
    { title: '其他', desc: '最近房间一键直连 / 关注在播、系统托盘常驻、运行状态一览、统一日志。' },
  ],
  todo: '还没做：发送弹幕、滚动弹幕、顶弹、用户屏蔽、Windows 系统 TTS、开机自启、全局快捷键。',
}

export const privacy = {
  eyebrow: '数据与隐私',
  title: '它不会往外传你的东西',
  items: [
    {
      title: '配置存本机',
      body: '配置写在 %APPDATA%\\com.douyindanmu.app\\config.json；登录 Cookie 加密保存，和本机、本机用户绑定，配置文件拷到别的电脑也读不出来，要重新扫码。',
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
  title: `下载 douyin-danmu v${VERSION}`,
  platform: 'Windows 10 / 11（x64）',
  size: '3.5 MB',
  note: '双击安装，不需要额外运行环境',
  steps: [
    '下载安装包，双击装好（首次运行如提示缺少 WebView2，Win10 装一下即可，Win11 自带）',
    '填直播间号：地址栏 live.douyin.com/ 后面那串数字，点「连接」',
    '想听弹幕就去朗读页开开关、选音色；想收礼物消息再扫码登录',
  ],
  repoUrl: REPO_URL,
  downloadUrl: DOWNLOAD_URL,
  releaseUrl: `${REPO_URL}/releases/latest`,
  license: { name: 'GNU GPL v3', url: `${REPO_URL}/blob/main/LICENSE` },
  creditsLabel: '弹幕协议实现参考',
  credits: [
    { name: 'DanmuFree', url: 'https://github.com/SoraYjy/DanmuFree' },
    { name: 'DouyinLiveWebFetcher', url: 'https://github.com/saermart/DouyinLiveWebFetcher' },
  ],
}
