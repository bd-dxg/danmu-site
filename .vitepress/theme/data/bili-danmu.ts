// bili-danmu 落地页文案。区块组件只负责渲染，文案集中在这里。
import { iconAtMention, iconBox, iconChip, iconFollowList, iconMinusCircle, iconRefresh } from './icons'

const REPO_URL = 'https://github.com/bd-dxg/bili-danmu'

// 发版只需改这一行：版本号、下载文件名、代理地址都跟着它走
const VERSION = '1.6.0'
// 国内直连加速：v4.gh-proxy.org 代理 GitHub 下载，原链接直接拼在后面
const DOWNLOAD_URL = `https://v4.gh-proxy.org/${REPO_URL}/releases/download/v${VERSION}/bili-danmu_${VERSION}_x64-setup.exe`

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

// 本次更新（v1.6.0）：@提及的人不再丢，「关注在播」首位固定成自己的直播间
export const update = {
  badge: `v${VERSION}`,
  title: '这次更新了什么',
  lead: '一句话：被 @ 的人不再是一件没头没尾的话，弹幕里能看出是谁对谁说的；「关注在播」首位固定你自己的直播间，开播前也能先连上。',
  changes: [
    {
      icon: iconAtMention,
      title: '@提及不再丢名字',
      body: '别人 @ 某人时，B 站把被 @ 的名字单独放在报文里、正文里反而没有，以前只能看到一句没头没尾的话。现在弹幕窗显示成「@名字 正文」，名字用弹幕用户名同一种颜色，一眼看出是谁对谁说的。',
    },
    {
      icon: iconFollowList,
      title: '「我的直播间」固定排第一位',
      body: '「关注在播」那一行的首位固定是你自己的直播间，点一下直接连上，不看开播状态 —— 开播前也能先把助手连对房间。未登录、没有直播间、查询失败时这一条不出现，不影响后面的关注列表。',
    },
  ],
  also: [
    {
      title: '朗读里也说得清是谁对谁',
      body: '被 @ 的弹幕念成「发送者对被提及者说 正文」，不看「念用户名」开关也知道是谁跟谁说话；只 @ 人不说话的那种（正文为空）整条跳过，不念。',
    },
    {
      title: '这次没动别的',
      body: '连接、弹幕窗、朗读、筛选都没改，从 v1.5.0 升上来就是上面这两处新增。',
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
      desc: '14 个中文音色（普通话 / 方言 / 粤语 / 台湾），语速音量可调，念前先清洗 emoji 和链接，表情弹幕默认不念，@提及念成「某某对某某说 内容」。',
    },
    { title: '礼物 / SC / 上舰', desc: '显示在弹幕上方的独立区域，可设金额门槛，连击只占一行显示总数，也能念出来。' },
    {
      title: '一键回房 / 关注在播',
      desc: '最近房间点一下直连；「关注在播」首位固定是你自己的直播间（不看开播状态），后面列出正在开播的关注主播，点名字就进。系统托盘常驻，运行状态一览。',
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
  title: `下载 bili-danmu v${VERSION}`,
  platform: 'Windows 10 / 11（x64）',
  size: '3.0 MB',
  note: '双击安装，不需要额外运行环境',
  steps: [
    '下载安装包，双击装好',
    '扫码登录（B 站 2025+ 不向游客推弹幕，未登录收不到）',
    '填直播间号点「连接」，弹幕窗就出来了',
  ],
  repoUrl: REPO_URL,
  downloadUrl: DOWNLOAD_URL,
  releaseUrl: `${REPO_URL}/releases/latest`,
  license: { name: 'GNU GPL v3', url: `${REPO_URL}/blob/main/LICENSE` },
  creditsLabel: '弹幕协议实现参考',
  credits: [{ name: 'DanmuFree', url: 'https://github.com/SoraYjy/DanmuFree' }],
}
