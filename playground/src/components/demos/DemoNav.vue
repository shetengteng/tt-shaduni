<template>
  <view class="demo">
    <view class="demo-block" id="demo-cell" v-if="!only || only === 'cell'">
      <text class="demo-label">{{ t('cell') }}</text>
      <text class="demo-desc">{{ t('cell.desc') }}</text>
      <tt-cell title="Setting" value="Go" is-link />
      <tt-cell title="About" value="v1.0" is-link />
    </view>

    <view class="demo-block" id="demo-tabs" v-if="!only || only === 'tabs'">
      <text class="demo-label">{{ t('tabs') }}</text>
      <text class="demo-desc">{{ t('tabs.desc') }}</text>
      <tt-tabs v-model="tabIdx" :items="tabItems" />
    </view>

    <view class="demo-block" id="demo-navbar" v-if="!only || only === 'navbar'">
      <text class="demo-label">{{ t('navbar') }}</text>
      <text class="demo-desc">{{ t('navbar.desc') }}</text>
      <tt-navbar title="Page Title" left-arrow />
    </view>

    <view class="demo-block" id="demo-tabbar" v-if="!only || only === 'tabbar'">
      <text class="demo-label">{{ t('tabbar') }}</text>
      <text class="demo-desc">{{ t('tabbar.desc') }}</text>
      <view class="tabbar-demo-wrap">
        <tt-tabbar v-model="tbIdx" :items="tabbarItems" :fixed="false" />
      </view>
    </view>

    <view class="demo-block" id="demo-steps" v-if="!only || only === 'steps'">
      <text class="demo-label">{{ t('steps') }}</text>
      <text class="demo-desc">{{ t('steps.desc') }}</text>
      <tt-steps :active="1" :items="stepItems" />
    </view>

    <view class="demo-block" id="demo-sidebar" v-if="!only || only === 'sidebar'">
      <text class="demo-label">{{ t('sidebar') }}</text>
      <text class="demo-desc">{{ t('sidebar.desc') }}</text>
      <tt-sidebar v-model="sideIdx" width="200rpx" :items="[{text:'Category 1'},{text:'Category 2'},{text:'Category 3'}]" />
    </view>

    <view class="demo-block" id="demo-breadcrumb" v-if="!only || only === 'breadcrumb'">
      <text class="demo-label">{{ t('breadcrumb') }}</text>
      <text class="demo-desc">{{ t('breadcrumb.desc') }}</text>
      <tt-breadcrumb :items="[{text:'Home',link:true},{text:'Category',link:true},{text:'Page'}]" />
    </view>

    <view class="demo-block" id="demo-pagination" v-if="!only || only === 'pagination'">
      <text class="demo-label">{{ t('pagination') }}</text>
      <text class="demo-desc">{{ t('pagination.desc') }}</text>
      <tt-pagination v-model="page" :total="50" :page-size="10" />
    </view>

    <view class="demo-block" id="demo-dropdownmenu" v-if="!only || only === 'dropdownmenu'">
      <text class="demo-label">{{ t('dropdown') }}</text>
      <text class="demo-desc">{{ t('dropdown.desc') }}</text>
      <tt-dropdown-menu v-model="ddVal" title="Sort" :options="ddOptions" />
    </view>

    <view class="demo-block" id="demo-swipeaction" v-if="!only || only === 'swipeaction'">
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

    <view class="demo-block" id="demo-indexbar" v-if="!only || only === 'indexbar'">
      <text class="demo-label">{{ t('indexBar') }}</text>
      <text class="demo-desc">{{ t('indexBar.desc') }}</text>
      <view class="indexbar-demo-wrap">
        <tt-index-bar :index-list="indexLetters" :active-index="activeIdx" @select="activeIdx = $event">
          <view v-for="letter in indexLetters" :key="letter" :id="'tt-index-anchor-' + letter" class="indexbar-group">
            <text class="indexbar-group__title">{{ letter }}</text>
            <view class="indexbar-group__item" v-for="n in 3" :key="n">
              <text class="indexbar-group__text">{{ letter }} - Item {{ n }}</text>
            </view>
          </view>
        </tt-index-bar>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import '@/styles/demo-shared.css'
defineProps<{ only?: string }>()
const t = inject<(key: string) => string>('t', (k) => k)

const tabIdx = ref(0)
const tabItems = [{ label: 'Home', value: 0 }, { label: 'Profile', value: 1 }, { label: 'Setting', value: 2 }]
const tbIdx = ref(0)
const tabbarItems = [{ text: 'Home', icon: 'home' }, { text: 'List', icon: 'list' }, { text: 'Me', icon: 'user' }]
const stepItems = [
  { title: 'Order', description: 'Place order' },
  { title: 'Pay', description: 'Make payment' },
  { title: 'Done', description: 'Completed' },
]
const sideIdx = ref(0)
const page = ref(1)
const ddVal = ref('')
const ddOptions = [{ text: 'Default', value: '0' }, { text: 'Price', value: '1' }, { text: 'Sales', value: '2' }]
const indexLetters = ['A', 'B', 'C', 'D', 'E']
const activeIdx = ref('A')
</script>

<style>
.tabbar-demo-wrap {
  border: 2rpx solid var(--tt-border, #e5e5e5);
  border-radius: var(--tt-radius, 12rpx);
  overflow: hidden;
}
.swipe-demo-cell {
  padding: 40rpx 24rpx;
  background: var(--tt-background, #fff);
  border-bottom: 2rpx solid var(--tt-border, #e5e5e5);
  font-size: 28rpx;
  color: var(--tt-foreground, #0a0a0a);
}
.indexbar-demo-wrap {
  height: 400rpx;
  border: 2rpx solid var(--tt-border, #e5e5e5);
  border-radius: var(--tt-radius, 12rpx);
  overflow: hidden;
  position: relative;
}
.indexbar-group__title {
  font-size: 24rpx;
  font-weight: 600;
  color: var(--tt-muted-foreground, #737373);
  padding: 12rpx 24rpx;
  background: var(--tt-muted, #f5f5f5);
}
.indexbar-group__item {
  padding: 20rpx 24rpx;
  border-bottom: 1rpx solid var(--tt-border, #e5e5e5);
}
.indexbar-group__text {
  font-size: 26rpx;
  color: var(--tt-foreground, #0a0a0a);
}
</style>
