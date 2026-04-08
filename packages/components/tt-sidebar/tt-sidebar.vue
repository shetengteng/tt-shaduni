<template>
  <view class="tt-sidebar">
    <view v-for="(item, i) in items" :key="i" class="tt-sidebar__item" :class="{ 'tt-sidebar__item--active': modelValue === i, 'tt-sidebar__item--disabled': item.disabled }" @click="!item.disabled && $emit('update:modelValue', i) && $emit('change', i)">
      <text class="tt-sidebar__text">{{ item.text }}</text>
      <view v-if="item.badge" class="tt-sidebar__badge">
        <text>{{ item.badge }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { sidebarProps } from './props'
defineProps(sidebarProps)
defineEmits(['update:modelValue', 'change'])
</script>

<style>
.tt-sidebar { width: 80px; background: var(--tt-muted, #f5f5f5); }
.tt-sidebar__item { position: relative; display: flex; align-items: center; justify-content: center; padding: 14px 8px; cursor: pointer; transition: background .2s; }
.tt-sidebar__item--active { background: var(--tt-background, #fff); font-weight: 600; }
.tt-sidebar__item--active::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 3px; height: 16px; background: var(--tt-primary, #171717); border-radius: 0 3px 3px 0; }
.tt-sidebar__item--disabled { opacity: .5; pointer-events: none; }
.tt-sidebar__text { font-size: 13px; }
.tt-sidebar__badge { position: absolute; top: 6px; right: 6px; min-width: 16px; height: 16px; padding: 0 4px; background: var(--tt-destructive, #ef4444); color: #fff; font-size: 10px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
</style>
