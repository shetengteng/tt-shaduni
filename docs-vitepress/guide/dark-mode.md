# Dark Mode

TT ShadUni includes built-in dark mode support.

## Using the Theme Composable

```vue
<script setup lang="ts">
import { useTheme } from 'tt-shaduni'

const { isDark, toggleTheme, setTheme } = useTheme()
</script>

<template>
  <tt-button @click="toggleTheme">
    {{ isDark ? '☀ Light' : '☾ Dark' }}
  </tt-button>
</template>
```

## Persistent Theme

The theme preference is automatically persisted to `uni.setStorageSync` and restored on page load.

## ConfigProvider Theme Prop

```vue
<tt-config-provider theme="dark">
  <!-- Always dark -->
</tt-config-provider>
```
