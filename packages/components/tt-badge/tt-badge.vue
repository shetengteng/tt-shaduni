<template>
  <view class="tt-badge">
    <slot />
    <view v-if="!hidden && (dot || value)" class="tt-badge__content" :class="{ 'tt-badge__content--dot': dot }">
      <text v-if="!dot" class="tt-badge__text">{{ typeof value === 'number' && value > max ? max + '+' : value }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { badgeProps } from './props'

defineProps(badgeProps)
</script>

<style>
.tt-badge { position: relative; display: inline-flex; }
.tt-badge__content { position: absolute; top: -4px; right: -4px; background: var(--tt-destructive, #ef4444); border-radius: 9999px; min-width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; padding: 0 5px; z-index: 1; }
.tt-badge__content--dot { min-width: 8px; height: 8px; padding: 0; top: -2px; right: -2px; }
.tt-badge__text { font-size: 11px; color: #fff; font-weight: 600; line-height: 1; }
</style>
