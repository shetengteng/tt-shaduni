# Getting Started

## Installation

### npm

```bash
npm install tt-shaduni
```

### uni_modules

Download from the [Releases](https://github.com/shetengteng/tt-shaduni/releases) page and copy the `tt-shaduni` folder to your project's `uni_modules/` directory.

## Quick Setup

### With easycom (Recommended)

Add the following to your `pages.json`:

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^tt-(.*)": "tt-shaduni/components/tt-$1/tt-$1.vue"
    }
  }
}
```

Then use components directly in templates without imports:

```vue
<template>
  <tt-button variant="default">Click me</tt-button>
</template>
```

### With Auto Import (Vite)

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

### Manual Import

```vue
<script setup lang="ts">
import { TtButton } from 'tt-shaduni'
</script>

<template>
  <TtButton variant="default">Click me</TtButton>
</template>
```

## Theme Configuration

Wrap your app with `tt-config-provider`:

```vue
<template>
  <tt-config-provider :theme="'light'">
    <view>Your app content</view>
  </tt-config-provider>
</template>
```
