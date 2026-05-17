<template>
  <view
    class="tt-tag"
    :class="[
      'tt-tag--' + type,
      'tt-tag--' + size,
      'tt-tag--' + variant,
      { 'tt-tag--round': round }
    ]"
  >
    <slot />
    <text v-if="closeable" class="tt-tag__close" @click="emit('close')">×</text>
  </view>
</template>

<script setup lang="ts">
import { tagProps } from './props'

defineProps(tagProps)
const emit = defineEmits<{
  (e: 'close'): void
}>()

</script>

<style>
.tt-tag { display: inline-flex; align-items: center; gap: 8rpx; padding: 4rpx 16rpx; border-radius: 8rpx; font-size: 24rpx; line-height: 1.4; border: 1rpx solid transparent; }
.tt-tag--sm { padding: 2rpx 12rpx; font-size: 22rpx; }
.tt-tag--round { border-radius: 19998rpx; }
.tt-tag--solid.tt-tag--default { background: var(--tt-secondary, #f5f5f5); color: var(--tt-secondary-foreground, #171717); }
.tt-tag--solid.tt-tag--primary { background: var(--tt-primary, #171717); color: var(--tt-primary-foreground, #fafafa); }
.tt-tag--solid.tt-tag--success { background: var(--tt-success, #22c55e); color: var(--tt-success-foreground, #fafafa); }
.tt-tag--solid.tt-tag--warning { background: var(--tt-warning, #f59e0b); color: var(--tt-warning-foreground, #fafafa); }
.tt-tag--solid.tt-tag--danger { background: var(--tt-destructive, #ef4444); color: var(--tt-destructive-foreground, #fafafa); }
.tt-tag--dashed { background: transparent; border-style: dashed; border-color: var(--tt-border, #e5e5e5); color: var(--tt-muted-foreground, #737373); }
.tt-tag--dashed.tt-tag--default { border-color: var(--tt-border, #e5e5e5); color: var(--tt-muted-foreground, #737373); }
.tt-tag--dashed.tt-tag--primary { border-color: var(--tt-primary, #171717); color: var(--tt-primary, #171717); }
.tt-tag--dashed.tt-tag--success { border-color: var(--tt-success, #22c55e); color: var(--tt-success, #22c55e); }
.tt-tag--dashed.tt-tag--warning { border-color: var(--tt-warning, #f59e0b); color: var(--tt-warning, #f59e0b); }
.tt-tag--dashed.tt-tag--danger { border-color: var(--tt-destructive, #ef4444); color: var(--tt-destructive, #ef4444); }
.tt-tag__close { cursor: pointer; font-size: 28rpx; line-height: 1; opacity: 0.7; }
</style>
