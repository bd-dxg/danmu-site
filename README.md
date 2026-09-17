# danmu-site

[bili-danmu](https://github.com/bd-dxg/bili-danmu) 的官网落地页，基于 VitePress 构建。

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

## 目录结构

```text
.vitepress/
  config.ts                    站点配置：元信息、导航锚点、社交链接、页脚
  theme/
    index.ts                   把落地页区块组件注册成全局组件
    style.css                  设计令牌 + VitePress 变量覆盖 + .bd-* 通用原语
    env.d.ts                   *.vue 模块声明，给 oxlint 的类型检查用
    components/
      ScrollReveal.vue         滚动进视口淡入
      LandingStats.vue         数据条
      LandingUpdate.vue        本次更新（v1.3.0）
      LandingShowcase.vue      实机效果大图 + 界面截图组
      LandingHighlights.vue    核心亮点卡片 + 功能表
      LandingClosing.vue       隐私说明 + 下载 CTA
docs/
  index.md                     首页：hero frontmatter + 按顺序引用区块组件
  public/imgs/                 截图（从主项目 imgs/ 原样拷贝，发布后走 /imgs/xxx.webp）
tsconfig.json                  类型检查配置
```

> 注意 `.vitepress` 在**仓库根目录**，不在 `docs/` 下，所以构建产物是 `.vitepress/dist/` 而不是 `docs/.vitepress/dist/`。

## 改内容改哪里

- **首屏文案**：`docs/index.md` 的 `hero` frontmatter
- **区块顺序**：`docs/index.md` 底部的组件标签顺序
- **区块内容**：`.vitepress/theme/components/` 里对应组件 `<script setup>` 顶部的数组
- **配色与间距**：`.vitepress/theme/style.css` 顶部的 `:root` 令牌
- **导航与页脚**：`.vitepress/config.ts`

### 需要多处同步的值

这些值没有收敛到常量，改的时候别漏：

- **版本号**（`v1.3.0`）：`LandingClosing.vue` 的 `cta__title`、`LandingUpdate.vue` 的 `update__badge`
- **体积与占用**（`2.9 MB` / `12 MB`）：`docs/index.md` 的 tagline、`LandingClosing.vue`、`LandingHighlights.vue`、`LandingStats.vue`、`config.ts` 的 `description` 与 `og:description`
- **仓库地址**：`config.ts` 与 `LandingClosing.vue` 的 `REPO_URL`、`docs/index.md` 的 action 链接
- **官网域名**：`config.ts` 的 `SITE_URL`、`deploy.yml` 的 `TARGET`

> `SITE_URL` **不要写结尾斜杠**，否则拼出来的 `og:image` 会变成 `https://域名//imgs/...`。

## 部署

推 `main` 触发 `.github/workflows/deploy.yml`：装依赖 → `pnpm build` → rsync 同步 `.vitepress/dist/` 到腾讯云 `/opt/1panel/www/sites/danmu.bddxg.top/index`。

仓库 Secrets 需要：`PRIVATE_KEY`、`REMOTE_TXHOST`、`REMOTE_PORT`。

## 相关仓库

- [bd-dxg/bili-danmu](https://github.com/bd-dxg/bili-danmu)：弹幕助手本体，Tauri 2 + Vue 3
