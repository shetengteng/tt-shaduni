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
      <tt-tabbar v-model="tbIdx" :items="tabbarItems" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('steps') }}</text>
      <text class="demo-desc">{{ t('steps.desc') }}</text>
      <tt-steps :active="1" :items="stepItems" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('sidebar') }}</text>
      <text class="demo-desc">{{ t('sidebar.desc') }}</text>
      <tt-sidebar v-model="sideIdx" :items="[{text:'Category 1'},{text:'Category 2'},{text:'Category 3'}]" />
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
      <tt-dropdown-menu :items="ddItems" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
const t = inject<(key: string) => string>('t', (k) => k)

const tabIdx = ref(0)
const tbIdx = ref(0)
const tabbarItems = [{ text: 'Home', icon: 'home' }, { text: 'List', icon: 'list' }, { text: 'Me', icon: 'user' }]
const stepItems = [{ title: 'Order' }, { title: 'Pay' }, { title: 'Done' }]
const sideIdx = ref(0)
const page = ref(1)
const ddItems = [{ title: 'Sort', options: [{ text: 'Default', value: '0' }, { text: 'Price', value: '1' }] }]
</script>
