<template>
  <view class="demo">
    <view class="demo-block">
      <text class="demo-label">{{ t('card') }}</text>
      <text class="demo-desc">{{ t('card.desc') }}</text>
      <tt-card title="Card Title" description="With description">
        <text class="demo-hint">Content area</text>
      </tt-card>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('badge') }}</text>
      <text class="demo-desc">{{ t('badge.desc') }}</text>
      <view class="demo-row">
        <tt-badge :value="5"><tt-button variant="outline">Msgs</tt-button></tt-badge>
        <tt-badge :value="120" :max="99"><tt-button variant="outline">Notify</tt-button></tt-badge>
        <tt-badge dot><tt-button variant="outline">Dot</tt-button></tt-badge>
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('tag') }}</text>
      <text class="demo-desc">{{ t('tag.desc') }}</text>
      <view class="demo-row">
        <tt-tag>Default</tt-tag>
        <tt-tag type="primary">Primary</tt-tag>
        <tt-tag type="success">Success</tt-tag>
        <tt-tag type="warning">Warning</tt-tag>
        <tt-tag type="danger">Danger</tt-tag>
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('divider') }}</text>
      <text class="demo-desc">{{ t('divider.desc') }}</text>
      <text class="demo-hint">Above</text>
      <tt-divider />
      <tt-divider>OR</tt-divider>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('empty') }}</text>
      <text class="demo-desc">{{ t('empty.desc') }}</text>
      <tt-empty description="No data found" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('progress') }}</text>
      <text class="demo-desc">{{ t('progress.desc') }}</text>
      <tt-progress :percentage="30" />
      <view style="height: 10px;" />
      <tt-progress :percentage="75" />
      <view style="height: 10px;" />
      <tt-progress :percentage="100" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('skeleton') }}</text>
      <text class="demo-desc">{{ t('skeleton.desc') }}</text>
      <tt-skeleton :loading="true" avatar :rows="3" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('avatar') }}</text>
      <text class="demo-desc">{{ t('avatar.desc') }}</text>
      <view class="demo-row">
        <tt-avatar text="JD" />
        <tt-avatar text="AB" shape="square" />
        <tt-avatar text="S" :size="28" />
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('countdown') }}</text>
      <text class="demo-desc">{{ t('countdown.desc') }}</text>
      <tt-count-down :time="86400000" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('image') }}</text>
      <text class="demo-desc">{{ t('image.desc') }}</text>
      <tt-image width="120px" height="80px" radius="8px" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('table') }}</text>
      <text class="demo-desc">{{ t('table.desc') }}</text>
      <tt-table :columns="cols" :data="rows" bordered striped />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('descriptions') }}</text>
      <text class="demo-desc">{{ t('descriptions.desc') }}</text>
      <tt-descriptions title="User Info" :items="descItems" :column="2" bordered />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('list') }}</text>
      <text class="demo-desc">{{ t('list.desc') }}</text>
      <tt-list :finished="true" finished-text="No more">
        <tt-cell title="Item 1" value="Detail" is-link />
        <tt-cell title="Item 2" value="Detail" is-link />
        <tt-cell title="Item 3" value="Detail" is-link />
      </tt-list>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('tooltip') }}</text>
      <text class="demo-desc">{{ t('tooltip.desc') }}</text>
      <view class="demo-row" style="padding-top: 36px;">
        <tt-tooltip content="Top tip" placement="top"><tt-button size="sm">Top</tt-button></tt-tooltip>
        <tt-tooltip content="Bottom tip" placement="bottom"><tt-button size="sm">Bottom</tt-button></tt-tooltip>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import '@/styles/demo-shared.css'
const t = inject<(key: string) => string>('t', (k) => k)

const cols = [{ key: 'name', title: 'Name' }, { key: 'age', title: 'Age' }, { key: 'role', title: 'Role' }]
const rows = [{ name: 'Alice', age: 28, role: 'Dev' }, { name: 'Bob', age: 32, role: 'PM' }]
const descItems = [{ label: 'Name', value: 'Alice' }, { label: 'Age', value: '28' }, { label: 'Email', value: 'alice@example.com' }, { label: 'Role', value: 'Developer' }]
</script>
