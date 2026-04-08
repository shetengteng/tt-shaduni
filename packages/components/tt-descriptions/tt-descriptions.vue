<template>
  <view class="tt-descriptions" :class="{ 'tt-descriptions--bordered': bordered }">
    <view v-if="title" class="tt-descriptions__header">
      <text class="tt-descriptions__title">{{ title }}</text>
    </view>
    <view class="tt-descriptions__body" :style="{ 'grid-template-columns': `repeat(${column}, 1fr)` }">
      <view v-for="(item, i) in items" :key="i" class="tt-descriptions__item" :style="{ 'grid-column': item.span ? `span ${item.span}` : '' }">
        <text class="tt-descriptions__label">{{ item.label }}</text>
        <text class="tt-descriptions__value">{{ item.value }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { descriptionsProps } from './props'
defineProps(descriptionsProps)
</script>

<style>
.tt-descriptions { border-radius: var(--tt-radius, 6px); overflow: hidden; }
.tt-descriptions--bordered { border: 1px solid var(--tt-border, #e5e5e5); }
.tt-descriptions__header { padding: 12px 16px; border-bottom: 1px solid var(--tt-border, #e5e5e5); }
.tt-descriptions__title { font-size: 15px; font-weight: 600; }
.tt-descriptions__body { display: grid; gap: 0; }
.tt-descriptions__item { padding: 12px 16px; border-bottom: 1px solid var(--tt-border, #e5e5e5); }
.tt-descriptions__label { font-size: 12px; color: var(--tt-muted-foreground, #737373); margin-bottom: 4px; display: block; }
.tt-descriptions__value { font-size: 14px; color: var(--tt-foreground, #0a0a0a); display: block; }
</style>
