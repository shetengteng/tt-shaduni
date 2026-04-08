# TT ShadUni 演练场

TT ShadUni 组件库的交互式演示应用。

## 环境要求

- Node.js >= 18
- npm >= 9

## 安装

```bash
cd playground
npm install --cache /tmp/npm-cache-tt
```

> `--cache` 参数可避免部分环境下的 npm 权限问题。

## 开发

### H5 (浏览器)

```bash
npm run dev:h5
```

默认访问 `http://localhost:5173/`。访问 `/phone.html` 可查看手机外壳预览效果。

### 微信小程序

```bash
npm run dev:mp-weixin
```

在微信开发者工具中导入 `dist/dev/mp-weixin` 目录。

### 支付宝小程序

```bash
npm run dev:mp-alipay
```

在支付宝小程序开发者工具中导入 `dist/dev/mp-alipay` 目录。

### App (原生)

```bash
npm run dev:app
```

使用 HBuilderX 运行原生应用。

## 构建

```bash
npm run build:h5
npm run build:mp-weixin
npm run build:mp-alipay
npm run build:app
```

## 目录结构

```
playground/
├── src/
│   ├── pages/index/index.vue   # 主演示页面（全部组件 demo）
│   ├── App.vue                 # 根组件
│   └── main.ts                 # 入口文件
├── public/
│   └── phone.html              # iPhone 外壳预览包装页
├── index.html                  # UniApp HTML 模板
└── vite.config.ts              # Vite 配置（含 tt-ui 路径别名）
```

## 组件演示

演练场包含全部 63 个组件的交互式演示，按类别分标签展示：

- **基础**: Button, Icon, Typography, Transition
- **表单**: Input, Textarea, Checkbox, Radio, Switch, Search, NumberBox, Form, Slider, Picker, DatePicker, Upload
- **展示**: Card, Badge, Tag, Divider, Empty, Progress, Skeleton, Avatar, Rate, CountDown, Image, Table, Descriptions, List, Swiper
- **导航**: Cell, Tabs, Navbar, Tabbar, Steps, Sidebar, Breadcrumb, Pagination, IndexBar, DropdownMenu
- **反馈**: Loading, Toast, Dialog, Popup, ActionSheet, Sheet, NoticeBar, Tooltip, SwipeAction
- **布局**: Collapse, Space, ConfigProvider (主题), Grid/Row/Col, ScrollView, Sticky, SafeArea
