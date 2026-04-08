<template>
  <view
    class="tt-navbar"
    :class="{ 'tt-navbar--fixed': fixed, 'tt-navbar--border': border }"
  >
    <view class="tt-navbar__left" @click="handleLeftClick">
      <slot name="left">
        <text v-if="leftArrow" class="tt-navbar__arrow">‹</text>
        <text v-if="leftText" class="tt-navbar__left-text">{{ leftText }}</text>
      </slot>
    </view>
    <view class="tt-navbar__title">
      <slot name="title">
        <text class="tt-navbar__title-text">{{ title }}</text>
      </slot>
    </view>
    <view class="tt-navbar__right">
      <slot name="right" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { navbarProps } from './props'

defineProps(navbarProps)
const emit = defineEmits<{
  (e: 'clickLeft'): void
}>()

function handleLeftClick() {
  emit('clickLeft')
}
</script>

<style>
.tt-navbar {
  display: flex;
  align-items: center;
  height: 88rpx;
  padding: 0 32rpx;
  background-color: var(--tt-background, #ffffff);
  position: relative;
}

.tt-navbar--fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.tt-navbar--border {
  border-bottom: 2rpx solid var(--tt-border, #e5e5e5);
}

.tt-navbar__left {
  display: flex;
  align-items: center;
  gap: 8rpx;
  min-width: 120rpx;
  cursor: pointer;
}

.tt-navbar__arrow {
  font-size: 48rpx;
  color: var(--tt-foreground, #0a0a0a);
  line-height: 1;
}

.tt-navbar__left-text {
  font-size: 28rpx;
  color: var(--tt-foreground, #0a0a0a);
}

.tt-navbar__title {
  flex: 1;
  text-align: center;
}

.tt-navbar__title-text {
  font-size: 32rpx;
  font-weight: 600;
  color: var(--tt-foreground, #0a0a0a);
}

.tt-navbar__right {
  display: flex;
  align-items: center;
  min-width: 120rpx;
  justify-content: flex-end;
}
</style>
