<template>
  <view class="pg-hd">
    <view class="pg-hd__left">
      <text class="pg-hd__logo">TT</text>
      <view class="pg-hd__info">
        <text class="pg-hd__title">ShadUni</text>
        <text class="pg-hd__version">v1.0.0 · 64 components</text>
      </view>
    </view>
    <view class="pg-hd__actions">
      <view class="pg-hd__btn" @click="$emit('toggleLang')">
        <text class="pg-hd__btn-label">{{ lang === 'en' ? '中' : 'En' }}</text>
      </view>
      <view class="pg-hd__btn" @click="$emit('toggleTheme')">
        <text class="pg-hd__btn-label">{{ isDark ? '☀' : '☽' }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  lang: string
  isDark: boolean
}>()
defineEmits(['toggleLang', 'toggleTheme'])
</script>

<style>
.pg-hd {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx 32rpx 20rpx;
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--tt-background, #fff);
  border-bottom: 1rpx solid var(--tt-border, #e5e5e5);
  transition: background .3s, border-color .3s;
}
.pg-hd__left { display: flex; align-items: center; gap: 16rpx; }
.pg-hd__logo {
  width: 56rpx;
  height: 56rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--tt-foreground, #0a0a0a);
  color: var(--tt-background, #fff);
  font-size: 22rpx;
  font-weight: 800;
  border-radius: 14rpx;
  letter-spacing: -1rpx;
}
.pg-hd__info { display: flex; flex-direction: column; }
.pg-hd__title {
  font-size: 32rpx;
  font-weight: 700;
  color: var(--tt-foreground, #0a0a0a);
  letter-spacing: -1rpx;
  line-height: 1.2;
}
.pg-hd__version {
  font-size: 20rpx;
  color: var(--tt-muted-foreground, #737373);
  line-height: 1.4;
}
.pg-hd__actions { display: flex; gap: 12rpx; }
.pg-hd__btn {
  min-width: 64rpx;
  height: 64rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16rpx;
  border: 2rpx solid var(--tt-border, #e5e5e5);
  background: var(--tt-background, #fff);
  cursor: pointer;
  transition: background .2s, border-color .2s;
  padding: 0 12rpx;
}
.pg-hd__btn:active { background: var(--tt-muted, #f5f5f5); }
.pg-hd__btn-label {
  font-size: 24rpx;
  font-weight: 600;
  color: var(--tt-foreground, #0a0a0a);
}
</style>
