<template>
  <view class="demo">
    <view class="demo-block" id="demo-icon">
      <text class="demo-label">{{ t('icon.gallery') }}</text>
      <text class="demo-desc">{{ t('icon.gallery.desc') }}</text>
      <view class="icon-grid">
        <view
          v-for="name in iconNames"
          :key="name"
          class="icon-card"
          :class="{ 'icon-card--active': copied === name }"
          @click="onCopy(name)"
        >
          <view class="icon-card__icon">
            <tt-icon :name="name" size="28" />
          </view>
          <text class="icon-card__name">{{ name }}</text>
        </view>
      </view>
      <view v-if="copied" class="icon-toast">
        <text class="icon-toast__text">{{ t('icon.copied') }}: {{ copied }}</text>
      </view>
    </view>

    <view class="demo-block" id="demo-icon-sizes">
      <text class="demo-label">{{ t('icon.sizes') }}</text>
      <text class="demo-desc">{{ t('icon.sizes.desc') }}</text>
      <view class="icon-showcase">
        <view v-for="s in [16, 20, 24, 32, 40]" :key="s" class="icon-showcase__item">
          <view class="icon-showcase__circle" :style="{ width: (s * 2 + 24) + 'rpx', height: (s * 2 + 24) + 'rpx' }">
            <tt-icon name="star" :size="s" />
          </view>
          <text class="icon-showcase__label">{{ s }}</text>
        </view>
      </view>
    </view>

    <view class="demo-block" id="demo-icon-colors">
      <text class="demo-label">{{ t('icon.colors') }}</text>
      <text class="demo-desc">{{ t('icon.colors.desc') }}</text>
      <view class="icon-colors">
        <view v-for="c in colorSet" :key="c.color" class="icon-colors__item">
          <view class="icon-colors__circle" :style="{ background: c.bg }">
            <tt-icon name="heart" size="28" :color="c.color" />
          </view>
          <text class="icon-colors__label">{{ c.label }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import '@/styles/demo-shared.css'

const t = inject<(key: string) => string>('t', (k) => k)
const copied = ref('')

const colorSet = [
  { color: 'var(--tt-primary, #171717)', bg: 'rgba(23,23,23,.08)', label: 'Primary' },
  { color: '#ef4444', bg: 'rgba(239,68,68,.08)', label: 'Red' },
  { color: '#3b82f6', bg: 'rgba(59,130,246,.08)', label: 'Blue' },
  { color: '#22c55e', bg: 'rgba(34,197,94,.08)', label: 'Green' },
  { color: '#f59e0b', bg: 'rgba(245,158,11,.08)', label: 'Amber' },
]

function onCopy(name: string) {
  copied.value = name
  setTimeout(() => { if (copied.value === name) copied.value = '' }, 1500)
}

const iconNames = [
  'home', 'search', 'user', 'setting', 'close', 'check',
  'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down',
  'plus', 'minus', 'star', 'star-o', 'heart', 'heart-o',
  'edit', 'delete', 'info', 'warning', 'success', 'error',
  'loading', 'refresh', 'share', 'link', 'copy', 'menu',
  'more', 'filter', 'sort', 'calendar', 'clock', 'location',
  'phone', 'mail', 'camera', 'image', 'file', 'folder',
  'lock', 'unlock', 'eye', 'eye-off', 'bell', 'cart',
  'tag', 'thumbs-up', 'thumbs-down',
]
</script>

<style>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16rpx;
}
.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rpx 8rpx 16rpx;
  border-radius: var(--tt-radius, 12rpx);
  border: 2rpx solid transparent;
  cursor: pointer;
  transition: all .2s ease;
}
.icon-card:active,
.icon-card--active {
  background: var(--tt-accent, #f5f5f5);
  border-color: var(--tt-border, #e5e5e5);
}
.icon-card__icon {
  width: 72rpx;
  height: 72rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16rpx;
  background: var(--tt-muted, rgba(0,0,0,.04));
  margin-bottom: 12rpx;
}
.icon-card__name {
  font-size: 20rpx;
  color: var(--tt-muted-foreground, #737373);
  text-align: center;
  line-height: 1.2;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.icon-toast {
  margin-top: 20rpx;
  padding: 16rpx 24rpx;
  border-radius: var(--tt-radius, 12rpx);
  background: var(--tt-primary, #171717);
  text-align: center;
}
.icon-toast__text {
  font-size: 24rpx;
  color: #fff;
}
.icon-showcase {
  display: flex;
  align-items: flex-end;
  gap: 28rpx;
  padding: 24rpx 0;
}
.icon-showcase__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}
.icon-showcase__circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--tt-muted, rgba(0,0,0,.04));
}
.icon-showcase__label {
  font-size: 22rpx;
  color: var(--tt-muted-foreground, #737373);
  font-weight: 500;
}
.icon-colors {
  display: flex;
  gap: 28rpx;
  padding: 24rpx 0;
}
.icon-colors__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}
.icon-colors__circle {
  width: 88rpx;
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.icon-colors__label {
  font-size: 22rpx;
  color: var(--tt-muted-foreground, #737373);
  font-weight: 500;
}
</style>
