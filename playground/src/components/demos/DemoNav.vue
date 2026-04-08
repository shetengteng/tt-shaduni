<template>
  <view class="demo">
    <view class="demo-block">
      <text class="demo-label">Cell</text>
      <text class="demo-desc">List cell with title, value, link arrow</text>
      <tt-cell title="Language" value="English" is-link />
      <tt-cell title="Theme" value="System" is-link />
      <tt-cell title="About" is-link :border="false" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Tabs</text>
      <text class="demo-desc">Tab navigation with active indicator</text>
      <tt-tabs v-model="tab" :items="tabItems" />
      <text class="demo-hint">Active: {{ tab }}</text>
    </view>

    <view class="demo-block">
      <text class="demo-label">Navbar</text>
      <text class="demo-desc">Top bar with back arrow and slots</text>
      <tt-navbar title="Page Title" left-arrow left-text="Back" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Tabbar</text>
      <text class="demo-desc">Fixed bottom tab bar</text>
      <tt-tabbar v-model="tbIdx" :fixed="false" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Steps</text>
      <text class="demo-desc">Step indicator, horizontal/vertical</text>
      <tt-steps :active="1" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Sidebar</text>
      <text class="demo-desc">Vertical category navigation</text>
      <view style="display: flex; height: 140px;">
        <tt-sidebar v-model="sbIdx" :items="sbItems" />
        <view style="flex: 1; padding: 14px; font-size: 13px;">{{ sbItems[sbIdx].text }}</view>
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">Breadcrumb</text>
      <text class="demo-desc">Hierarchy navigation trail</text>
      <tt-breadcrumb :items="[{text:'Home',to:'/'},{text:'Category',to:'/cat'},{text:'Current'}]" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Pagination</text>
      <text class="demo-desc">Page number navigation</text>
      <tt-pagination v-model="page" :total-items="50" :items-per-page="10" />
      <text class="demo-hint">Page: {{ page }}</text>
    </view>

    <view class="demo-block">
      <text class="demo-label">DropdownMenu</text>
      <text class="demo-desc">Filter/sort dropdown with options</text>
      <tt-dropdown-menu v-model="ddVal" :options="ddOpts" title="Sort" />
      <text class="demo-hint">{{ ddVal }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab = ref('t1')
const tabItems = [{ label: 'Tab 1', value: 't1' }, { label: 'Tab 2', value: 't2' }, { label: 'Disabled', value: 't3', disabled: true }]
const tbIdx = ref(0)
const sbIdx = ref(0)
const sbItems = [{ text: 'All' }, { text: 'Hot' }, { text: 'New' }, { text: 'Sale' }]
const page = ref(1)
const ddVal = ref('newest')
const ddOpts = [{ text: 'Newest', value: 'newest' }, { text: 'Popular', value: 'popular' }, { text: 'Price', value: 'price' }]
</script>
