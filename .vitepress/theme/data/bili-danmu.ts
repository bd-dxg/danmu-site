// bili-danmu 落地页文案。区块组件只负责渲染，文案集中在这里。
import {
  iconBox,
  iconChip,
  iconFaceMute,
  iconFollowList,
  iconMinusCircle,
  iconPageCheck,
  iconRefresh,
  iconTextInput,
} from './icons'

const REPO_URL = 'https://github.com/bd-dxg/bili-danmu'

export const stats = [
  { value: '3.0', unit: 'MB', label: '安装包体积' },
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
      body: '安装包 3.0 MB，装完占硬盘 12 MB。不用额外装浏览器组件（Windows 自带）、不用装 Python、不用下载语音模型，双击下一步就能用。',
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

// 本次更新（v1.5.0）：新增关注在播，表情弹幕不再被念成文字，发送框与设置页的几处小毛病一并修掉
export const update = {
  badge: 'v1.5.0',
  title: '这次更新了什么',
  lead: '一句话：多了「关注在播」一行，表情弹幕不再被念成文字，发送框和设置页的几处小毛病也顺手修了。',
  changes: [
    {
      icon: iconFollowList,
      title: '直播间里多了「关注在播」',
      body: '列出你已关注、并且正在开播的主播名，点名字直接连上那个直播间，不用再翻房间号。登录后自动查一次，想刷新点右侧的「刷新」。',
    },
    {
      icon: iconFaceMute,
      title: '表情弹幕不再被念成文字',
      body: '表情在弹幕窗里显示成 [冲鸭]、[生气] 这样的中括号形式，一眼能看出是表情而不是文字；朗读默认跳过表情，「文字 + 表情」混在同一条的只念文字那部分。',
    },
    {
      icon: iconTextInput,
      title: '发送框不再只显示 6 个字',
      body: '输入区以前塞不下更多字，连占位提示都被截断；现在能显示约 8 个中文，输入框和右端「穿透」按钮的高度也终于对齐了。',
    },
    {
      icon: iconPageCheck,
      title: '设置页的两处小毛病',
      body: '切换开关时的「✓ 已应用并保存」不再把页面内容顶得抖动，改成右下角浮层提示；「弹幕过滤」「朗读筛选」两页也不再冒出多余的竖向滚动条。',
    },
  ],
  also: [
    {
      title: '想连表情一起念也行',
      body: '默认不念，是因为表情在数据里只是「生气」「冲鸭」这样的词，念出来像一句莫名其妙的话；想全念，去「朗读 → 朗读筛选」打开「朗读表情弹幕」。',
    },
    {
      title: '这次没动别的',
      body: '连接、弹幕窗、朗读、筛选都没改，从 v1.4.1 升上来就是上面这几处新增和修复。',
    },
  ],
}

export const features = {
  eyebrow: '功能',
  title: '能做什么',
  items: [
    { title: '收弹幕', desc: '连上直播间就实时收，断线自动重连，掉线不用手动管。' },
    { title: '弹幕窗', desc: '桌面透明悬浮窗，可拖动、可缩放、可置顶、可鼠标穿透，背景不透明度可调。' },
    { title: '只看想看的', desc: '只显示舰长 / 房管、只显示带粉丝牌的、荣耀等级门槛、敏感词屏蔽。' },
    {
      title: '发弹幕',
      desc: '弹幕窗下方独立发送框，回车发送，字号跟着弹幕走；发送框右端的按钮随手开关鼠标穿透，打游戏不用切回设置页。',
    },
    {
      title: '弹幕朗读',
      desc: '14 个中文音色（普通话 / 方言 / 粤语 / 台湾），语速音量可调，念前先清洗 emoji 和链接，表情弹幕默认不念。',
    },
    { title: '礼物 / SC / 上舰', desc: '显示在弹幕上方的独立区域，可设金额门槛，连击只占一行显示总数，也能念出来。' },
    {
      title: '一键回房 / 关注在播',
      desc: '最近房间点一下直连；「关注在播」列出正在开播的关注主播，点名字就进。系统托盘常驻，运行状态一览。',
    },
    { title: '数据不外流', desc: '配置存在本机，不收集任何信息、不上传日志。' },
  ],
  todo: '还没做：滚动弹幕、顶弹、用户屏蔽、Windows 系统 TTS、开机自启、全局快捷键、自动更新。',
}

// 「和官方客户端比」区块：只列差异项，不贬低官方，末尾用脚注把话说圆
export const compare = {
  eyebrow: '和官方客户端比',
  title: '为什么选 bili-danmu',
  lead: '官方客户端功能齐全，只开着看弹幕完全够用。但如果你更在意下面这几件事，bili-danmu 会更顺手。',
  officialLabel: 'B 站官方客户端',
  oursLabel: 'bili-danmu',
  rows: [
    {
      title: '等级牌显示',
      official: '荣耀等级、粉丝牌固定挂在每条弹幕前，不好单独关掉。',
      ours: '两个都能单独显示或隐藏，想看就留、不想看就藏，弹幕更清爽。',
    },
    {
      title: '弹幕朗读',
      official: '多音字经常念错，emoji 和链接也会照念。',
      ours: '14 个中文音色可选，念之前先清洗 emoji 和链接，多音字出错更少。',
    },
    {
      title: '弹幕筛选',
      official: '所有弹幕一视同仁，没法只留舰长、房管的发言。',
      ours: '可以只显示、只朗读舰长和房管的弹幕，人多时也不被刷屏淹掉。',
    },
    {
      title: '体积与占用',
      official: '整套客户端功能很全，安装包和运行时占用也相应更大。',
      ours: '安装包 3.0 MB，装完占硬盘 12 MB，长时间挂着占用不越涨越多。',
    },
  ],
  footnote: '这里只列差异项。官方客户端在礼物特效、粉丝互动这些场景上更完整，两者不冲突，可以同时用。',
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
  title: '下载 bili-danmu v1.5.0',
  platform: 'Windows 10 / 11（x64）',
  size: '3.0 MB',
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
