# TT ShadUni - VitePress Documentation

## Quick Start

### Prerequisites

- Node.js >= 16
- npm or pnpm

### Install Dependencies

```bash
# From the project root
npm install
```

### Development

```bash
# Start the VitePress dev server (auto-generates component docs first)
npm run docs:dev
```

The documentation site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run docs:build
```

Output is generated to `docs-vitepress/.vitepress/dist/`.

### Preview Production Build

```bash
npx vitepress preview docs-vitepress
```

## Project Structure

```
docs-vitepress/
├── .vitepress/
│   └── config.ts          # VitePress configuration (nav, sidebar, theme)
├── guide/
│   ├── introduction.md    # Library overview
│   ├── getting-started.md # Installation and usage guide
│   ├── theming.md         # CSS variable customization
│   └── dark-mode.md       # Dark mode configuration
├── components/
│   ├── button.md          # Component documentation (64 components)
│   ├── input.md
│   └── ...
└── index.md               # Homepage
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run docs:gen` | Auto-generate component API docs from source |
| `npm run docs:dev` | Start dev server with hot reload |
| `npm run docs:build` | Build static documentation site |

## Adding a New Component Doc

1. Create `docs-vitepress/components/<component-name>.md`
2. Add the component to the sidebar in `.vitepress/config.ts`
3. Run `npm run docs:dev` to preview

## Configuration

Edit `docs-vitepress/.vitepress/config.ts` to customize:
- Navigation links
- Sidebar structure
- Theme settings
- Base path (default: `/tt-shaduni/`)

---

# TT ShadUni - VitePress 文档

## 快速开始

### 环境要求

- Node.js >= 16
- npm 或 pnpm

### 安装依赖

```bash
# 在项目根目录
npm install
```

### 开发模式

```bash
# 启动 VitePress 开发服务器（会先自动生成组件文档）
npm run docs:dev
```

文档站将在 `http://localhost:5173` 可用。

### 构建生产版本

```bash
npm run docs:build
```

产物输出到 `docs-vitepress/.vitepress/dist/`。

### 预览生产构建

```bash
npx vitepress preview docs-vitepress
```

## 项目结构

```
docs-vitepress/
├── .vitepress/
│   └── config.ts          # VitePress 配置（导航、侧边栏、主题）
├── guide/
│   ├── introduction.md    # 组件库概览
│   ├── getting-started.md # 安装和使用指南
│   ├── theming.md         # CSS 变量自定义
│   └── dark-mode.md       # 深色模式配置
├── components/
│   ├── button.md          # 组件文档（64 个组件）
│   ├── input.md
│   └── ...
└── index.md               # 首页
```

## 可用脚本

| 命令 | 说明 |
|------|------|
| `npm run docs:gen` | 从源码自动生成组件 API 文档 |
| `npm run docs:dev` | 启动热更新开发服务器 |
| `npm run docs:build` | 构建静态文档站点 |

## 添加新组件文档

1. 创建 `docs-vitepress/components/<组件名>.md`
2. 在 `.vitepress/config.ts` 侧边栏中添加该组件
3. 运行 `npm run docs:dev` 预览

## 配置

编辑 `docs-vitepress/.vitepress/config.ts` 自定义：
- 导航链接
- 侧边栏结构
- 主题设置
- 基础路径（默认：`/tt-shaduni/`）
