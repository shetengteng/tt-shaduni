<template>
  <view class="tt-tabbar" :class="{ 'tt-tabbar--fixed': fixed, 'tt-tabbar--border': border, 'tt-tabbar--safe': safeAreaInsetBottom }">
    <template v-if="items.length">
      <view
        v-for="(item, i) in items"
        :key="i"
        class="tt-tabbar__item"
        :class="{ 'tt-tabbar__item--active': modelValue === i }"
        @click="onSelect(i)"
      >
        <view class="tt-tabbar__icon">
          <text>{{ iconMap[item.icon || ''] || '○' }}</text>
        </view>
        <text class="tt-tabbar__label">{{ item.text }}</text>
      </view>
    </template>
    <slot v-else />
  </view>
</template>

<script setup lang="ts">
import { tabbarProps } from './props'

const props = defineProps(tabbarProps)
const emit = defineEmits(['update:modelValue', 'change'])

const iconMap: Record<string, string> = {
  home: '⌂',
  list: '☰',
  user: '♟',
  search: '⌕',
  cart: '🛒',
  msg: '✉',
  star: '★',
  setting: '⚙',
}

function onSelect(i: number) {
  emit('update:modelValue', i)
  emit('change')
}
</script>

<style>
.tt-tabbar { display: flex; align-items: center; height: 100rpx; background: var(--tt-background, #ffffff); }
.tt-tabbar--fixed { position: fixed; bottom: 0; left: 0; right: 0; z-index: 100; }
.tt-tabbar--border { border-top: 2rpx solid var(--tt-border, #e5e5e5); }
.tt-tabbar--safe { padding-bottom: env(safe-area-inset-bottom); }
.tt-tabbar__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 4rpx;
  transition: color .2s;
  color: var(--tt-muted-foreground, #737373);
}
.tt-tabbar__item--active { color: var(--tt-primary, #171717); }
.tt-tabbar__icon { font-size: 36rpx; line-height: 1; }
.tt-tabbar__label { font-size: 20rpx; font-weight: 500; }
.tt-tabbar__item--active .tt-tabbar__label { font-weight: 600; }
</style>
