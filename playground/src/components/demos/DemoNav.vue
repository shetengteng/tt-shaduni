<template>
  <view class="demo">
    <view class="demo-block">
      <text class="demo-label">{{ t('cell') }}</text>
      <text class="demo-desc">{{ t('cell.desc') }}</text>
      <tt-cell title="Setting" value="Go" is-link />
      <tt-cell title="About" value="v1.0" is-link />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('tabs') }}</text>
      <text class="demo-desc">{{ t('tabs.desc') }}</text>
      <tt-tabs v-model="tabIdx" :items="['Home', 'Profile', 'Setting']" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('navbar') }}</text>
      <text class="demo-desc">{{ t('navbar.desc') }}</text>
      <tt-navbar title="Page Title" left-arrow />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('tabbar') }}</text>
      <text class="demo-desc">{{ t('tabbar.desc') }}</text>
      <tt-tabbar v-model="tbIdx" :items="tabbarItems" :fixed="false" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('steps') }}</text>
      <text class="demo-desc">{{ t('steps.desc') }}</text>
      <tt-steps :active="1" :items="stepItems" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('sidebar') }}</text>
      <text class="demo-desc">{{ t('sidebar.desc') }}</text>
      <tt-sidebar v-model="sideIdx" width="200rpx" :items="[{text:'Category 1'},{text:'Category 2'},{text:'Category 3'}]" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('breadcrumb') }}</text>
      <text class="demo-desc">{{ t('breadcrumb.desc') }}</text>
      <tt-breadcrumb :items="[{text:'Home',link:true},{text:'Category',link:true},{text:'Page'}]" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('pagination') }}</text>
      <text class="demo-desc">{{ t('pagination.desc') }}</text>
      <tt-pagination v-model="page" :total="50" :page-size="10" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('dropdown') }}</text>
      <text class="demo-desc">{{ t('dropdown.desc') }}</text>
      <tt-dropdown-menu v-model="ddVal" title="Sort" :options="ddOptions" />
    </view>

    <view class="demo-block">
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
const tbIdx = ref(0)
const tabbarItems = [{ text: 'Home', icon: 'home' }, { text: 'List', icon: 'list' }, { text: 'Me', icon: 'user' }]
const stepItems = [{ title: 'Order' }, { title: 'Pay' }, { title: 'Done' }]
const sideIdx = ref(0)
const page = ref(1)
const ddVal = ref('')
const ddOptions = [{ text: 'Default', value: '0' }, { text: 'Price', value: '1' }, { text: 'Sales', value: '2' }]
</script>

<style>
.swipe-demo-cell {
  padding: 40rpx 24rpx;
  background: var(--tt-background, #fff);
  border-bottom: 2rpx solid var(--tt-border, #e5e5e5);
  font-size: 28rpx;
  color: var(--tt-foreground, #0a0a0a);
}
</style>
