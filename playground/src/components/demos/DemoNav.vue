<template>
  <view class="demo">
    <view class="demo-block" id="demo-cell">
      <text class="demo-label">{{ t('cell') }}</text>
      <text class="demo-desc">{{ t('cell.desc') }}</text>
      <tt-cell title="Setting" value="Go" is-link />
      <tt-cell title="About" value="v1.0" is-link />
    </view>

    <view class="demo-block" id="demo-tabs">
      <text class="demo-label">{{ t('tabs') }}</text>
      <text class="demo-desc">{{ t('tabs.desc') }}</text>
      <tt-tabs v-model="tabIdx" :items="tabItems" />
    </view>

    <view class="demo-block" id="demo-navbar">
      <text class="demo-label">{{ t('navbar') }}</text>
      <text class="demo-desc">{{ t('navbar.desc') }}</text>
      <tt-navbar title="Page Title" left-arrow />
    </view>

    <view class="demo-block" id="demo-tabbar">
      <text class="demo-label">{{ t('tabbar') }}</text>
      <text class="demo-desc">{{ t('tabbar.desc') }}</text>
      <view class="tabbar-demo-wrap">
        <tt-tabbar v-model="tbIdx" :items="tabbarItems" :fixed="false" />
      </view>
    </view>

    <view class="demo-block" id="demo-steps">
      <text class="demo-label">{{ t('steps') }}</text>
      <text class="demo-desc">{{ t('steps.desc') }}</text>
      <tt-steps :active="1">
        <view class="step-item" v-for="(s, i) in stepItems" :key="i">
          <view class="step-circle" :class="{ 'step-circle--done': i < 1, 'step-circle--active': i === 1 }">
            <text class="step-circle__text">{{ i < 1 ? '✓' : i + 1 }}</text>
          </view>
          <text class="step-title" :class="{ 'step-title--active': i <= 1 }">{{ s.title }}</text>
        </view>
      </tt-steps>
    </view>

    <view class="demo-block" id="demo-sidebar">
      <text class="demo-label">{{ t('sidebar') }}</text>
      <text class="demo-desc">{{ t('sidebar.desc') }}</text>
      <tt-sidebar v-model="sideIdx" width="200rpx" :items="[{text:'Category 1'},{text:'Category 2'},{text:'Category 3'}]" />
    </view>

    <view class="demo-block" id="demo-breadcrumb">
      <text class="demo-label">{{ t('breadcrumb') }}</text>
      <text class="demo-desc">{{ t('breadcrumb.desc') }}</text>
      <tt-breadcrumb :items="[{text:'Home',link:true},{text:'Category',link:true},{text:'Page'}]" />
    </view>

    <view class="demo-block" id="demo-pagination">
      <text class="demo-label">{{ t('pagination') }}</text>
      <text class="demo-desc">{{ t('pagination.desc') }}</text>
      <tt-pagination v-model="page" :total="50" :page-size="10" />
    </view>

    <view class="demo-block" id="demo-dropdownmenu">
      <text class="demo-label">{{ t('dropdown') }}</text>
      <text class="demo-desc">{{ t('dropdown.desc') }}</text>
      <tt-dropdown-menu v-model="ddVal" title="Sort" :options="ddOptions" />
    </view>

    <view class="demo-block" id="demo-swipeaction">
      <text class="demo-label">{{ t('swipeAction') }}</text>
      <text class="demo-desc">{{ t('swipeAction.desc') }}</text>
      <tt-swipe-action :right-actions="[{ text: 'Delete', bgColor: '#ef4444' }]">
        <view class="swipe-demo-cell">
          <text>Swipe left to delete</text>
        </view>
      </tt-swipe-action>
      <tt-swipe-action :left-actions="[{ text: 'Pin', bgColor: '#3b82f6' }]" :right-actions="[{ text: 'Delete', bgColor: '#ef4444' }]">
        <view class="swipe-demo-cell">
          <text>Swipe both directions</text>
        </view>
      </tt-swipe-action>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import '@/styles/demo-shared.css'
const t = inject<(key: string) => string>('t', (k) => k)

const tabIdx = ref(0)
const tabItems = [{ label: 'Home', value: 0 }, { label: 'Profile', value: 1 }, { label: 'Setting', value: 2 }]
const tbIdx = ref(0)
const tabbarItems = [{ text: 'Home', icon: 'home' }, { text: 'List', icon: 'list' }, { text: 'Me', icon: 'user' }]
const stepItems = [{ title: 'Order' }, { title: 'Pay' }, { title: 'Done' }]
const sideIdx = ref(0)
const page = ref(1)
const ddVal = ref('')
const ddOptions = [{ text: 'Default', value: '0' }, { text: 'Price', value: '1' }, { text: 'Sales', value: '2' }]
</script>

<style>
.tabbar-demo-wrap {
  border: 2rpx solid var(--tt-border, #e5e5e5);
  border-radius: var(--tt-radius, 12rpx);
  overflow: hidden;
}
.step-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}
.step-circle {
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--tt-muted, #f5f5f5);
  border: 2rpx solid var(--tt-border, #e5e5e5);
}
.step-circle--done {
  background: var(--tt-primary, #171717);
  border-color: var(--tt-primary, #171717);
}
.step-circle--active {
  border-color: var(--tt-primary, #171717);
  border-width: 4rpx;
}
.step-circle__text {
  font-size: 22rpx;
  color: var(--tt-muted-foreground, #737373);
}
.step-circle--done .step-circle__text { color: #fff; }
.step-circle--active .step-circle__text { color: var(--tt-primary, #171717); font-weight: 600; }
.step-title {
  font-size: 22rpx;
  color: var(--tt-muted-foreground, #a3a3a3);
}
.step-title--active {
  color: var(--tt-foreground, #0a0a0a);
  font-weight: 500;
}
.swipe-demo-cell {
  padding: 40rpx 24rpx;
  background: var(--tt-background, #fff);
  border-bottom: 2rpx solid var(--tt-border, #e5e5e5);
  font-size: 28rpx;
  color: var(--tt-foreground, #0a0a0a);
}
</style>
