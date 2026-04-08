<template>
  <view class="tt-tabbar" :class="{ 'tt-tabbar--fixed': fixed, 'tt-tabbar--border': border, 'tt-tabbar--safe': safeAreaInsetBottom }">
    <slot />
  </view>
</template>

<script setup lang="ts">
import { tabbarProps } from './props'

defineProps(tabbarProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'change'): void
}>()

</script>

<style>
.tt-tabbar { display: flex; align-items: center; height: 50px; background: var(--tt-background, #ffffff); }
.tt-tabbar--fixed { position: fixed; bottom: 0; left: 0; right: 0; z-index: 100; }
.tt-tabbar--border { border-top: 1px solid var(--tt-border, #e5e5e5); }
.tt-tabbar--safe { padding-bottom: env(safe-area-inset-bottom); }
</style>
