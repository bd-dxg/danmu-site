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
