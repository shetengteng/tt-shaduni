# TT ShadUni Playground

Interactive demo application for TT ShadUni component library.

## Prerequisites

- Node.js >= 18
- npm >= 9

## Setup

```bash
cd playground
npm install --cache /tmp/npm-cache-tt
```

> The `--cache` flag avoids potential npm permission issues.

## Development

### H5 (Browser)

```bash
npm run dev:h5
```

Opens at `http://localhost:5173/`. Visit `/phone.html` for a phone-frame wrapper preview.

### WeChat Mini-program

```bash
npm run dev:mp-weixin
```

Import the generated `dist/dev/mp-weixin` folder in WeChat DevTools.

### Alipay Mini-program

```bash
npm run dev:mp-alipay
```

Import the generated `dist/dev/mp-alipay` folder in Alipay DevTools.

### App (Native)

```bash
npm run dev:app
```

Use HBuilderX to run the native app.

## Build

```bash
npm run build:h5
npm run build:mp-weixin
npm run build:mp-alipay
npm run build:app
```

## Structure

```
playground/
├── src/
│   ├── pages/index/index.vue   # Main demo page with all component demos
│   ├── App.vue                 # Root app component
│   └── main.ts                 # Entry point
├── public/
│   └── phone.html              # iPhone-frame wrapper for phone.html preview
├── index.html                  # UniApp HTML template
└── vite.config.ts              # Vite config with tt-ui path alias
```

## Component Demos

The playground includes interactive demos for all 63 components, organized by category tabs:

- **Basic**: Button, Icon
- **Form**: Input, Textarea, Checkbox, Radio, Switch, Search, NumberBox, Form
- **Display**: Card, Badge, Tag, Divider, Empty, Progress, Skeleton, Avatar, Rate, CountDown, Image
- **Navigation**: Cell, Tabs, Navbar, Tabbar, Steps
- **Feedback**: Loading, Toast, Dialog, Popup, ActionSheet, Sheet, NoticeBar
- **Layout**: Collapse, Space, ConfigProvider (Theme)
