<template>
  <scroll-view scroll-x class="cat-nav" :show-scrollbar="false">
    <view class="cat-nav__list">
      <view
        v-for="c in categories"
        :key="c.key"
        class="cat-nav__item"
        :class="{ 'cat-nav__item--active': modelValue === c.key }"
        @click="$emit('update:modelValue', c.key)"
      >
        <text class="cat-nav__label">{{ c.label }}</text>
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  categories: Array<{ key: string; label: string }>
}>()
defineEmits(['update:modelValue'])
</script>

<style>
.cat-nav {
  position: sticky;
  top: 101rpx;
  z-index: 15;
  background: var(--tt-background, #fff);
  transition: background .3s;
  white-space: nowrap;
}
.cat-nav__list {
  display: flex;
  gap: 12rpx;
  padding: 16rpx 32rpx 20rpx;
}
.cat-nav__item {
  flex-shrink: 0;
  padding: 10rpx 28rpx;
  border-radius: 999rpx;
  border: 2rpx solid var(--tt-border, #e5e5e5);
  background: transparent;
  cursor: pointer;
  transition: all .2s;
}
.cat-nav__item--active {
  background: var(--tt-foreground, #0a0a0a);
  border-color: var(--tt-foreground, #0a0a0a);
}
.cat-nav__label {
  font-size: 24rpx;
  font-weight: 500;
  color: var(--tt-muted-foreground, #737373);
  transition: color .2s;
}
.cat-nav__item--active .cat-nav__label {
  color: var(--tt-background, #fff);
}
</style>
