<template>
  <view class="tt-empty">
    <slot name="image"><text class="tt-empty__icon">📭</text></slot>
    <text class="tt-empty__desc">{{ description }}</text>
    <slot />
  </view>
</template>

<script setup lang="ts">
import { emptyProps } from './props'

defineProps(emptyProps)
</script>

<style>
.tt-empty { display: flex; flex-direction: column; align-items: center; padding: 40px 0; }
.tt-empty__icon { font-size: 48px; margin-bottom: 12px; }
.tt-empty__desc { font-size: 14px; color: var(--tt-muted-foreground, #737373); }
</style>
