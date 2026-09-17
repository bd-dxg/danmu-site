# danmu-site

bd-dxg 弹幕助手的官网，基于 VitePress 构建，一个站点放两款产品：

- [bili-danmu](https://github.com/bd-dxg/bili-danmu)：B 站直播弹幕助手
- [douyin-danmu](https://github.com/bd-dxg/douyin-danmu)：抖音直播弹幕助手

线上地址 <https://danmu.bddxg.top>

## 技术栈

- VitePress `2.0.0-alpha.20` + Vue 3
- 包管理 pnpm `12.4.1`（`pnpm-lock.yaml` 由这个版本生成，CI 也用同一个版本）
- 主题固定浅色，不做亮暗切换（`appearance: false`）
- `oxlint` / `oxfmt` 做检查与格式化

## 常用命令

| 命令               | 说明                                     |
| ------------------ | ---------------------------------------- |
| `pnpm install`     | 安装依赖                                 |
| `pnpm dev`         | 本地开发，<http://localhost:5173>        |
| `pnpm build`       | 构建到 `.vitepress/dist/`                |
| `pnpm preview`     | 预览构建产物                             |
| `pnpm exec oxlint` | 静态检查（开了类型检查，改完代码跑一遍） |
| `pnpm exec oxfmt`  | 格式化；加 `--check` 只检查不改          |

## 页面结构

| 路由            | 内容                                                |
| --------------- | --------------------------------------------------- |
| `/`             | 首页：站点 hero + 两张产品卡片（`LandingProducts`） |
| `/bili-danmu`   | bili-danmu 落地页                                   |
| `/douyin-danmu` | douyin-danmu 落地页                                 |

## 目录结构

```text
.vitepress/
  config.ts                    站点配置：元信息、导航（两款产品平铺）、社交链接、页脚
  theme/
    index.ts                   把落地页区块组件注册成全局组件
    style.css                  设计令牌 + VitePress 变量覆盖 + .bd-* 通用原语
    env.d.ts                   *.vue 模块声明，给 oxlint 的类型检查用
    data/
      icons.ts                 亮点卡图标（两款产品共用，避免同一段 svg 抄两遍）
      bili-danmu.ts            bili-danmu 页全部文案
      douyin-danmu.ts          douyin-danmu 页全部文案
    components/
      ScrollReveal.vue         滚动进视口淡入
      LandingProducts.vue      首页产品卡（数据写在组件里，只有两张卡）
      LandingStats.vue         数字条（文案走 props）
      LandingUpdate.vue        本次更新（bili 专属，v1.3.0）
      LandingShowcase.vue      实机效果大图 + 界面截图组（bili 专属）
      LandingHighlights.vue    核心亮点卡片 + 功能表（文案走 props）
      LandingClosing.vue       隐私说明 + 下载 CTA（文案走 props）
docs/
  index.md                     首页：hero frontmatter + 产品卡组件
  bili-danmu.md                bili-danmu 页：hero frontmatter + 按顺序引用区块组件
  douyin-danmu.md              douyin-danmu 页：同上
  public/imgs/
    bili-danmu/                 bili-danmu 的图标与截图（发布后走 /imgs/bili-danmu/xxx）
    douyin-danmu/               douyin-danmu 的图标与截图（发布后走 /imgs/douyin-danmu/xxx）
tsconfig.json                  类型检查配置
```

> 注意 `.vitepress` 在**仓库根目录**，不在 `docs/` 下，所以构建产物是 `.vitepress/dist/` 而不是 `docs/.vitepress/dist/`。

## 文案与数据怎么走的

区块组件本身不存文案：`LandingStats` / `LandingHighlights` / `LandingClosing` 都用 props 拿数据，页面在 `docs/*.md` 里用 `<script setup>` 从 `theme/data/<产品>.ts` import 后传进去。

`LandingUpdate`（本次更新）和 `LandingShowcase`（截图）只有 bili-danmu 页在用，文案仍写在组件 `<script setup>` 顶部。

## 改内容改哪里

- **首屏文案**：`docs/index.md`、`docs/bili-danmu.md`、`docs/douyin-danmu.md` 的 `hero` frontmatter
- **产品页区块文案**：`.vitepress/theme/data/<产品>.ts`
- **区块顺序**：对应 `.md` 底部的组件标签顺序
- **首页产品卡**：`.vitepress/theme/components/LandingProducts.vue` 的 `products` 数组
- **配色与间距**：`.vitepress/theme/style.css` 顶部的 `:root` 令牌
- **导航与页脚**：`.vitepress/config.ts`

### 需要多处同步的值

这些值没有收敛到常量，改的时候别漏：

- **bili 版本号**（`v1.3.0`）：`data/bili-danmu.ts` 的 `download.title`、`LandingUpdate.vue` 的 `update__badge`
- **douyin 版本号**（`v0.1.1`）：`data/douyin-danmu.ts` 的 `download.title`
- **体积数字**（bili `2.9 MB` / `12 MB`，douyin `3 MB`）：`data/*.ts`、`LandingProducts.vue` 的 `tags`、`config.ts` 的 `description` 与 `og:description`
- **仓库地址**：`data/*.ts` 的 `REPO_URL`、`LandingProducts.vue` 的 `releaseUrl`、`docs/bili-danmu.md` 与 `docs/douyin-danmu.md` 的 action 链接
- **蓝奏网盘链接**（`https://wwbor.lanzouu.com/b03fmf2u0j`，密码 `6u67`）：两个产品共用同一个分享链接，出现在 `docs/bili-danmu.md` 与 `docs/douyin-danmu.md` 的 hero action 里，改一处就得改两处
- **图标路径**：两个产品都叫 `app-icon`，分别放在 `/imgs/bili-danmu/` 与 `/imgs/douyin-danmu/` 下；`config.ts` 的 favicon 与 `og:image` 目前用的是 bili 图标，要换站点级图标得自己出一张
- **官网域名**：`config.ts` 的 `SITE_URL`、`deploy.yml` 的 `TARGET`

> `SITE_URL` **不要写结尾斜杠**，否则拼出来的 `og:image` 会变成 `https://域名//imgs/...`。

## 部署

推 `main` 触发 `.github/workflows/deploy.yml`：装依赖 → `pnpm build` → rsync 同步 `.vitepress/dist/` 到腾讯云 `/opt/1panel/www/sites/danmu.bddxg.top/index`。

仓库 Secrets 需要：`PRIVATE_KEY`、`REMOTE_TXHOST`、`REMOTE_PORT`。

> 旧版站点把 bili-danmu 放在 `/`，现在首页是产品总览，bili-danmu 挪到 `/bili-danmu`，老链接不会有重定向。

## 相关仓库

- [bd-dxg/bili-danmu](https://github.com/bd-dxg/bili-danmu)：B 站弹幕助手本体，Tauri 2 + Vue 3
- [bd-dxg/douyin-danmu](https://github.com/bd-dxg/douyin-danmu)：抖音弹幕助手，骨架来自 bili-danmu，协议层换抖音
