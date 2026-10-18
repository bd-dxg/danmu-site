# 项目说明

danmu-site：bili-danmu / douyin-danmu 两款桌面弹幕助手的落地页。VitePress，文案与组件分离（文案在 `.vitepress/theme/data/*.ts`，组件只渲染 props）。

## 常用命令

```powershell
pnpm dev      # 本地预览
pnpm build    # 构建到 .vitepress/dist（推 main 由 CI 自动构建部署）
```

没有测试，`pnpm build` 通过即视为验证通过。

## 发版：必须改的地方

**核心坑：`.md` 文件顶部的 frontmatter 是 YAML，构建时不执行 JS。** 写 `link: ${VERSION}` 会原样输出成字符串，点击 404。只有 `.vue` 文件和 `.md` 里的 `<script setup>` 能读变量。

### 两款产品

1. `data/<产品>.ts` 顶部的 `const VERSION = 'x.y.z'`
   → 自动带动 `update.badge`、`download.title`、`download.downloadUrl`、首页卡片上的下载按钮，不用手改
2. 同文件的 `update` 对象：换成新版的更新内容（`changes` 主条目 + `also` 补充）
3. `LandingProducts.vue` 里该产品卡片的 `tags`：把 `v<旧版本>` 换成 `v<新版本>`
4. `docs/<产品>.md` hero 的「下载安装包」`link`：完整直链
5. 体积有变化时：`data/<产品>.ts` 的 `stats` 与 `highlights.cards[0].body`（只有 douyin 那句带「（0.2.1 实测）」）、`LandingProducts.vue` 的 `tags`、`config.ts` 的 `description` 与 `og:description`

第 3、4 步**写死了版本号和文件名**，漏改不会报错，只会下载 404。第 4 步没法收敛到变量：frontmatter 是 YAML，只能手写。

### 下载直链格式

国内加速走 `v4.gh-proxy.org`，原始 GitHub 链接直接拼在域名后面：

```text
https://v4.gh-proxy.org/https://github.com/bd-dxg/douyin-danmu/releases/download/v0.2.1/douyin-danmu_0.2.1_x64-setup.exe
```

注意文件名里是 `0.2.1`（无 v），路径里是 `v0.2.1`（有 v）。改完用下面这条验一下，返回 200 才算对：

```powershell
curl.exe -sIL -o NUL -w "%{http_code}`n" "<直链>"
```

`releases/latest` 只适合当「历史版本 / 所有版本」入口，不是直接下载——GitHub 的 `/releases/latest/download/<文件名>` 用不了，因为资产文件名里带版本号。

### 其他多处同步的值

- **仓库地址**：`data/*.ts` 的 `REPO_URL`、`LandingProducts.vue`、`docs/*.md` 的 action 链接
- **蓝奏网盘链接**（`https://wwbor.lanzouu.com/b03fmf2u0j`，密码 `6u67`）：两个产品的 `docs/*.md` hero action 里各有一份
- **官网域名**：`config.ts` 的 `SITE_URL`（不要写结尾斜杠）、`.github/workflows/deploy.yml` 的 `TARGET`

## 约定

- 文案一律进 `theme/data/<产品>.ts`，不写在组件里
- `LandingClosing.vue` 的 `downloadUrl` 是可选字段，缺失时回落到 `releaseUrl`（两款目前都走直链）
- 区块顺序由 `docs/*.md` 底部组件标签顺序决定
