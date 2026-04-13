<p align="center">
  <h1 align="center">TT ShadUni</h1>
  <p align="center">基于 shadcn 设计风格的 UniApp + Vue 3 多端 UI 组件库</p>
</p>

<p align="center">
  <a href="./README.md">English</a>
</p>

---

## 特性

- **shadcn 设计语言** — 语义化 CSS 变量 Token，背景 / 前景配对，简洁现代的视觉风格
- **多端适配** — 一套代码同时运行在 H5、微信小程序、支付宝小程序和原生 App
- **暗色模式** — 内置 light / dark 主题，通过 `ConfigProvider` 注入，配合 `useTheme` 组合式函数
- **按需加载** — ESM 构建 + UniApp `easycom` 自动导入，组件级别按需加载
- **TypeScript** — 全组件、组合式函数和设计 Token 的完整类型定义
- **轻量级** — 无 SCSS 运行时依赖，样式自包含，CSS 变量自带 fallback

## 组件 (64 个)

| 分类 | 组件 |
|------|------|
| **基础** | Button 按钮、Icon 图标 |
| **表单** | Input 输入框、Textarea 文本域、Checkbox 复选框、CheckboxGroup 复选框组、Radio 单选框、RadioGroup 单选框组、Switch 开关、Search 搜索、NumberBox 步进器、Form 表单、FormItem 表单项、DatePicker 日期选择、Calendar 日历、Picker 选择器、Slider 滑块、Upload 上传 |
| **展示** | Card 卡片、Badge 徽标、Tag 标签、Divider 分割线、Empty 空状态、Progress 进度条、Skeleton 骨架屏、Avatar 头像、Rate 评分、CountDown 倒计时、Image 图片、Descriptions 描述列表、Typography 排版、Table 表格、List 列表、Tooltip 提示 |
| **导航** | Cell 单元格、Tabs 标签页、Navbar 导航栏、Tabbar 标签栏、Steps 步骤条、Breadcrumb 面包屑、Sidebar 侧边导航、IndexBar 索引栏、Pagination 分页、DropdownMenu 下拉菜单 |
| **反馈** | Popup 弹出层、Dialog 对话框、Toast 轻提示、ActionSheet 动作面板、Sheet 底部面板、NoticeBar 通知栏、Loading 加载、SwipeAction 滑动操作、Transition 过渡动画 |
| **布局** | Space 间距、SafeArea 安全区域、Collapse 折叠面板、CollapseItem 折叠面板项、ConfigProvider 全局配置、Row 行、Col 列、Grid 宫格、ScrollView 滚动视图、Swiper 轮播、Sticky 粘性布局 |

## 演示与文档

- **在线 Playground**：[https://env-00jy66hfif8f-static.normal.cloudstatic.cn/](https://env-00jy66hfif8f-static.normal.cloudstatic.cn/)
- **GitHub Pages**：[https://shetengteng.github.io/tt-shaduni/](https://shetengteng.github.io/tt-shaduni/)

## 快速开始

### 安装

```bash
# 在你的 UniApp 项目中
npm install tt-shaduni
```

### 使用

组件通过 UniApp 的 `easycom` 约定自动导入，无需手动注册：

```vue
<template>
  <tt-config-provider>
    <tt-button variant="default">点击</tt-button>
    <tt-input v-model="text" placeholder="请输入..." clearable />
    <tt-switch v-model="on" />
  </tt-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
const on = ref(false)
</script>
```

### 主题定制

通过 `ConfigProvider` 覆盖设计 Token：

```vue
<tt-config-provider :theme-vars="{ primary: '#6366f1', radius: '12px' }">
  <tt-button>靛蓝主题</tt-button>
</tt-config-provider>
```

### 暗色模式

```ts
import { useTheme } from 'tt-shaduni/composables/use-theme'

const { isDark, toggleTheme } = useTheme()
```

## 项目结构

```
packages/
├── components/       # 64 个 Vue SFC 组件
│   ├── tt-button/
│   ├── tt-input/
│   └── ...
├── composables/      # 共享 Hook (useTheme)
├── styles/           # 设计 Token
└── index.ts          # 入口文件

playground/           # UniApp 演示应用
docs/                 # 文档站点 (Vue CDN SPA)
docs-vitepress/       # VitePress 文档站
build/                # Vite 库构建配置
scripts/              # 发布、文档生成、uni_modules 脚本
```

## 开发

```bash
# 启动 Playground 开发服务器
cd playground && npm run dev:h5

# 运行测试
npm test

# 监听模式运行测试
npm run test:watch
```

## 文档 (VitePress)

项目包含基于 VitePress 的文档站，支持从组件 `props.ts` 自动生成 API 文档。

```bash
# 从 props.ts 自动生成组件 API 文档
npm run docs:gen

# 启动 VitePress 本地开发服务器（会自动先生成文档）
npm run docs:dev

# 构建 VitePress 静态站点用于部署
npm run docs:build
```

生成的文档站包含：
- **快速开始** — 安装和使用指南
- **主题定制** — CSS 变量自定义说明
- **暗色模式** — `useTheme` 组合式函数使用指南
- **组件 API** — 从每个组件的 `props.ts` 自动生成

VitePress 配置位于 `docs-vitepress/.vitepress/config.ts`，生成的组件文档在 `docs-vitepress/components/`。

## 构建与发布

```bash
# 构建组件库 (ESM + CJS)
npm run build

# 生成 TypeScript 类型声明
npm run build:dts

# 完整构建 (库 + 类型)
npm run build:all

# 生成 uni_modules 格式
npm run build:uni_modules

# 生成组件 API 文档
npm run docs:gen

# 启动 VitePress 文档开发服务器
npm run docs:dev

# 构建 VitePress 文档
npm run docs:build

# 发布新版本 (patch/minor/major)
node scripts/release.mjs patch
git push --follow-tags
```

### 构建产物

```
dist/
├── es/            # ESM 模块 (支持 Tree Shaking)
├── lib/           # CJS 模块
├── types/         # TypeScript 类型声明
└── uni_modules/   # UniApp 插件格式
    └── tt-shaduni/
```

### 按需导入 (Vite)

```ts
// vite.config.ts
import { TtUIResolver } from 'tt-shaduni/resolver'
import Components from 'unplugin-vue-components/vite'

export default {
  plugins: [
    Components({
      resolvers: [TtUIResolver()],
    }),
  ],
}
```

## CI/CD

- **CI**：每次 push/PR 到 `main` 自动运行 Lint + Test + Build
- **发布**：推送 `v*` 标签触发 — 发布到 npm + 创建 GitHub Release
- **文档**：`docs-vitepress/` 变更时自动部署 VitePress 到 GitHub Pages

## 技术栈

- **Vue 3** — Composition API + `<script setup>`
- **TypeScript** — 严格类型定义
- **UniApp** — 多端框架 (H5 / 小程序 / App)
- **Vite** — 构建工具和开发服务器
- **Vitest** — 单元测试，配合 `@vue/test-utils` 和 `happy-dom`

## 许可证

MIT
