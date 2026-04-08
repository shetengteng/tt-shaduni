<template>
  <view class="tt-notice-bar" :style="{ color: color || undefined, backgroundColor: background || undefined }">
    <text class="tt-notice-bar__icon">📢</text>
    <view class="tt-notice-bar__content">
      <text class="tt-notice-bar__text">{{ text }}</text>
    </view>
    <text v-if="closeable" class="tt-notice-bar__close" @click="emit('close')">×</text>
  </view>
</template>

<script setup lang="ts">
import { noticeBarProps } from './props'

defineProps(noticeBarProps)
const emit = defineEmits<{
  (e: 'close'): void
}>()

</script>

<style>
.tt-notice-bar { display: flex; align-items: center; padding: 8px 12px; background: var(--tt-warning, #f59e0b); color: var(--tt-warning-foreground, #fafafa); font-size: 13px; gap: 8px; }
.tt-notice-bar__icon { font-size: 14px; flex-shrink: 0; }
.tt-notice-bar__content { flex: 1; overflow: hidden; }
.tt-notice-bar__text { white-space: nowrap; }
.tt-notice-bar__close { font-size: 16px; cursor: pointer; flex-shrink: 0; opacity: 0.8; }
</style>
