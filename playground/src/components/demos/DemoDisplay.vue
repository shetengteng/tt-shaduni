<template>
  <view class="demo">
    <view class="demo-block">
      <text class="demo-label">Card</text>
      <text class="demo-desc">Container with header, content, footer slots</text>
      <tt-card title="Card Title" description="With description">
        <text class="demo-hint">Content area</text>
      </tt-card>
    </view>

    <view class="demo-block">
      <text class="demo-label">Badge</text>
      <text class="demo-desc">Number/dot/max cap overlay</text>
      <view class="demo-row">
        <tt-badge :value="5"><tt-button variant="outline">Msgs</tt-button></tt-badge>
        <tt-badge :value="120" :max="99"><tt-button variant="outline">Notify</tt-button></tt-badge>
        <tt-badge dot><tt-button variant="outline">Dot</tt-button></tt-badge>
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">Tag</text>
      <text class="demo-desc">5 types + closeable + round</text>
      <view class="demo-row">
        <tt-tag>Default</tt-tag>
        <tt-tag type="primary">Primary</tt-tag>
        <tt-tag type="success">Success</tt-tag>
        <tt-tag type="warning">Warning</tt-tag>
        <tt-tag type="danger">Danger</tt-tag>
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">Divider</text>
      <text class="demo-desc">Horizontal line with text slot</text>
      <text class="demo-hint">Above</text>
      <tt-divider />
      <tt-divider>OR</tt-divider>
    </view>

    <view class="demo-block">
      <text class="demo-label">Empty</text>
      <text class="demo-desc">Empty state placeholder</text>
      <tt-empty description="No data found" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Progress</text>
      <text class="demo-desc">Linear bar 0-100%</text>
      <tt-progress :percentage="30" />
      <view style="height: 10px;" />
      <tt-progress :percentage="75" />
      <view style="height: 10px;" />
      <tt-progress :percentage="100" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Skeleton</text>
      <text class="demo-desc">Loading placeholder with avatar/rows</text>
      <tt-skeleton :loading="true" avatar :rows="3" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Avatar</text>
      <text class="demo-desc">Circle/square with text fallback</text>
      <view class="demo-row">
        <tt-avatar text="JD" />
        <tt-avatar text="AB" shape="square" />
        <tt-avatar text="S" :size="28" />
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">CountDown</text>
      <text class="demo-desc">Timer with HH:mm:ss format</text>
      <tt-count-down :time="86400000" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Image</text>
      <text class="demo-desc">Lazy-load, mode, radius</text>
      <tt-image width="120px" height="80px" radius="8px" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Table</text>
      <text class="demo-desc">Bordered/striped simple table</text>
      <tt-table :columns="cols" :data="rows" bordered striped />
    </view>

    <view class="demo-block">
      <text class="demo-label">Descriptions</text>
      <text class="demo-desc">Key-value pairs in grid layout</text>
      <tt-descriptions title="User Info" :items="descItems" :column="2" bordered />
    </view>

    <view class="demo-block">
      <text class="demo-label">List</text>
      <text class="demo-desc">Infinite scroll with loading/finished</text>
      <tt-list :finished="true" finished-text="No more">
        <tt-cell title="Item 1" value="Detail" is-link />
        <tt-cell title="Item 2" value="Detail" is-link />
        <tt-cell title="Item 3" value="Detail" is-link />
      </tt-list>
    </view>

    <view class="demo-block">
      <text class="demo-label">Tooltip</text>
      <text class="demo-desc">4-direction tooltip popup</text>
      <view class="demo-row" style="padding-top: 36px;">
        <tt-tooltip content="Top tip" placement="top"><tt-button size="sm">Top</tt-button></tt-tooltip>
        <tt-tooltip content="Bottom tip" placement="bottom"><tt-button size="sm">Bottom</tt-button></tt-tooltip>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const cols = [{ key: 'name', title: 'Name' }, { key: 'age', title: 'Age' }, { key: 'role', title: 'Role' }]
const rows = [{ name: 'Alice', age: 28, role: 'Dev' }, { name: 'Bob', age: 32, role: 'PM' }]
const descItems = [{ label: 'Name', value: 'Alice' }, { label: 'Age', value: '28' }, { label: 'Email', value: 'alice@example.com' }, { label: 'Role', value: 'Developer' }]
</script>
