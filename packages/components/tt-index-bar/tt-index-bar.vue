<template>
  <view class="tt-index-bar">
    <scroll-view scroll-y class="tt-index-bar__content">
      <slot />
    </scroll-view>
    <view class="tt-index-bar__sidebar">
      <text v-for="idx in indexList" :key="idx" class="tt-index-bar__index" :class="{ 'tt-index-bar__index--active': activeIndex === idx }" @click="$emit('select', idx)">{{ idx }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { indexBarProps } from './props'
defineProps(indexBarProps)
defineEmits(['select'])
</script>

<style>
.tt-index-bar { position: relative; height: 100%; }
.tt-index-bar__content { height: 100%; }
.tt-index-bar__sidebar { position: absolute; right: 0; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; align-items: center; padding: 2px; z-index: 2; }
.tt-index-bar__index { width: 16px; height: 16px; font-size: 10px; text-align: center; line-height: 16px; color: var(--tt-muted-foreground, #737373); cursor: pointer; }
.tt-index-bar__index--active { color: var(--tt-primary, #171717); font-weight: 700; background: var(--tt-muted, #f5f5f5); border-radius: 50%; }
</style>
