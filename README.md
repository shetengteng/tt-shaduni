<p align="center">
  <h1 align="center">TT ShadUni</h1>
  <p align="center">A shadcn-inspired multi-platform UI component library for UniApp + Vue 3</p>
</p>

<p align="center">
  <a href="./README.zh-CN.md">中文文档</a>
</p>

---

## Features

- **shadcn Design Language** — Semantic CSS variable tokens with background / foreground pairs, clean and minimal aesthetics
- **Multi-platform** — One codebase for H5, WeChat Mini-program, Alipay Mini-program, and native App
- **Dark Mode** — Built-in light / dark theme with `ConfigProvider` injection and `useTheme` composable
- **Tree Shakable** — ESM build with UniApp `easycom` auto-import, per-component on-demand loading
- **TypeScript** — Full type definitions for all components, composables, and design tokens
- **Lightweight** — No SCSS runtime dependency; styles are self-contained with CSS variable fallbacks

## Components (63)

| Category | Components |
|----------|-----------|
| **Basic** | Button, Icon |
| **Form** | Input, Textarea, Checkbox, CheckboxGroup, Radio, RadioGroup, Switch, Search, NumberBox, Form, FormItem, DatePicker, Picker, Slider, Upload |
| **Display** | Card, Badge, Tag, Divider, Empty, Progress, Skeleton, Avatar, Rate, CountDown, Image, Descriptions, Typography, Table, List, Tooltip |
| **Navigation** | Cell, Tabs, Navbar, Tabbar, Steps, Breadcrumb, Sidebar, IndexBar, Pagination, DropdownMenu |
| **Feedback** | Popup, Dialog, Toast, ActionSheet, Sheet, NoticeBar, Loading, SwipeAction, Transition |
| **Layout** | Space, SafeArea, Collapse, CollapseItem, ConfigProvider, Row, Col, Grid, ScrollView, Swiper, Sticky |

## Quick Start

### Install

```bash
# In your UniApp project
npm install tt-shaduni
```

### Usage

Components are auto-imported via UniApp's `easycom` convention — no manual registration needed:

```vue
<template>
  <tt-config-provider>
    <tt-button variant="default">Click me</tt-button>
    <tt-input v-model="text" placeholder="Type..." clearable />
    <tt-switch v-model="on" />
  </tt-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
const on = ref(false)
</script>
```

### Theme Customization

Override design tokens via `ConfigProvider`:

```vue
<tt-config-provider :theme-vars="{ primary: '#6366f1', radius: '12px' }">
  <tt-button>Indigo Theme</tt-button>
</tt-config-provider>
```

### Dark Mode

```ts
import { useTheme } from 'tt-shaduni/composables/use-theme'

const { isDark, toggleTheme } = useTheme()
```

## Project Structure

```
packages/
├── components/       # 63 Vue SFC components
│   ├── tt-button/
│   ├── tt-input/
│   └── ...
├── composables/      # Shared hooks (useTheme)
├── styles/           # Design tokens
└── index.ts          # Entry point

playground/           # UniApp demo app
docs/                 # Documentation site (Vue CDN SPA)
```

## Development

```bash
# Run playground dev server
cd playground && npm run dev:h5

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **TypeScript** — Strict type definitions
- **UniApp** — Multi-platform framework (H5 / Mini-program / App)
- **Vite** — Build tool and dev server
- **Vitest** — Unit testing with `@vue/test-utils` and `happy-dom`

## License

MIT
