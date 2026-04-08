<template>
  <view class="tt-cell" :class="{ 'tt-cell--border': border, 'tt-cell--link': isLink }" @click="emit('click')">
    <view class="tt-cell__left">
      <slot name="icon"><text v-if="icon" class="tt-cell__icon">{{ icon }}</text></slot>
      <view class="tt-cell__title-wrap">
        <text class="tt-cell__title">{{ title }}</text>
        <text v-if="label" class="tt-cell__label">{{ label }}</text>
      </view>
    </view>
    <view class="tt-cell__right">
      <slot><text class="tt-cell__value">{{ value }}</text></slot>
      <text v-if="isLink" class="tt-cell__arrow">›</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { cellProps } from './props'

defineProps(cellProps)
const emit = defineEmits<{
  (e: 'click'): void
}>()

</script>

<style>
.tt-cell { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: var(--tt-background, #ffffff); }
.tt-cell--border { border-bottom: 1px solid var(--tt-border, #e5e5e5); }
.tt-cell--link { cursor: pointer; }
.tt-cell__left { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0; }
.tt-cell__icon { font-size: 18px; }
.tt-cell__title-wrap { display: flex; flex-direction: column; }
.tt-cell__title { font-size: 14px; color: var(--tt-foreground, #0a0a0a); }
.tt-cell__label { font-size: 12px; color: var(--tt-muted-foreground, #737373); margin-top: 2px; }
.tt-cell__right { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }
.tt-cell__value { font-size: 14px; color: var(--tt-muted-foreground, #737373); }
.tt-cell__arrow { font-size: 20px; color: var(--tt-muted-foreground, #737373); }
</style>
