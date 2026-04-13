<template>
  <view class="demo">
    <view class="demo-block" id="demo-card" v-if="!only || only === 'card'">
      <text class="demo-label">{{ t('card') }}</text>
      <text class="demo-desc">{{ t('card.desc') }}</text>
      <tt-card title="Card Title" description="With description">
        <text class="demo-hint">Content area</text>
      </tt-card>
    </view>

    <view class="demo-block" id="demo-badge" v-if="!only || only === 'badge'">
      <text class="demo-label">{{ t('badge') }}</text>
      <text class="demo-desc">{{ t('badge.desc') }}</text>
      <view class="demo-row">
        <tt-badge :value="5"><tt-button variant="outline">Msgs</tt-button></tt-badge>
        <tt-badge :value="120" :max="99"><tt-button variant="outline">Notify</tt-button></tt-badge>
        <tt-badge dot><tt-button variant="outline">Dot</tt-button></tt-badge>
      </view>
    </view>

    <view class="demo-block" id="demo-tag" v-if="!only || only === 'tag'">
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

    <view class="demo-block" id="demo-divider" v-if="!only || only === 'divider'">
      <text class="demo-label">{{ t('divider') }}</text>
      <text class="demo-desc">{{ t('divider.desc') }}</text>
      <text class="demo-hint">Above</text>
      <tt-divider />
      <tt-divider>OR</tt-divider>
    </view>

    <view class="demo-block" id="demo-empty" v-if="!only || only === 'empty'">
      <text class="demo-label">{{ t('empty') }}</text>
      <text class="demo-desc">{{ t('empty.desc') }}</text>
      <tt-empty description="No data found" />
    </view>

    <view class="demo-block" id="demo-progress" v-if="!only || only === 'progress'">
      <text class="demo-label">{{ t('progress') }}</text>
      <text class="demo-desc">{{ t('progress.desc') }}</text>
      <tt-progress :percentage="30" />
      <view style="height: 10px;" />
      <tt-progress :percentage="75" />
      <view style="height: 10px;" />
      <tt-progress :percentage="100" />
    </view>

    <view class="demo-block" id="demo-skeleton" v-if="!only || only === 'skeleton'">
      <text class="demo-label">{{ t('skeleton') }}</text>
      <text class="demo-desc">{{ t('skeleton.desc') }}</text>
      <tt-skeleton :loading="true" avatar :rows="3" />
    </view>

    <view class="demo-block" id="demo-avatar" v-if="!only || only === 'avatar'">
      <text class="demo-label">{{ t('avatar') }}</text>
      <text class="demo-desc">{{ t('avatar.desc') }}</text>
      <view class="demo-row">
        <tt-avatar text="JD" />
        <tt-avatar text="AB" shape="square" />
        <tt-avatar text="S" :size="28" />
      </view>
    </view>

    <view class="demo-block" id="demo-countdown" v-if="!only || only === 'countdown'">
      <text class="demo-label">{{ t('countdown') }}</text>
      <text class="demo-desc">{{ t('countdown.desc') }}</text>
      <tt-count-down :time="86400000" />
    </view>

    <view class="demo-block" id="demo-image" v-if="!only || only === 'image'">
      <text class="demo-label">{{ t('image') }}</text>
      <text class="demo-desc">{{ t('image.desc') }}</text>
      <view class="demo-row">
        <tt-image src="https://picsum.photos/120/80" width="120px" height="80px" radius="8px" />
        <tt-image src="https://picsum.photos/80/80" width="80px" height="80px" radius="50%" />
      </view>
    </view>

    <view class="demo-block" id="demo-swiper" v-if="!only || only === 'swiper'">
      <text class="demo-label">{{ t('swiper') }}</text>
      <text class="demo-desc">{{ t('swiper.desc') }}</text>
      <view style="height: 300rpx;">
        <tt-swiper :autoplay="true" :interval="3000" indicator-dots circular style="height: 300rpx;">
          <swiper-item v-for="c in ['#3b82f6','#22c55e','#f59e0b']" :key="c" style="height: 300rpx;">
            <view class="swiper-slide" :style="{ background: c, height: '300rpx' }">
              <text class="swiper-slide__text">Slide</text>
            </view>
          </swiper-item>
        </tt-swiper>
      </view>
    </view>

    <view class="demo-block" id="demo-scrollview" v-if="!only || only === 'scrollview'">
      <text class="demo-label">{{ t('scrollView') }}</text>
      <text class="demo-desc">{{ t('scrollView.desc') }}</text>
      <tt-scroll-view scroll-y style="height: 200rpx;">
        <view v-for="i in 8" :key="i" class="scroll-item">
          <text>Scroll Item {{ i }}</text>
        </view>
      </tt-scroll-view>
    </view>

    <view class="demo-block" id="demo-table" v-if="!only || only === 'table'">
      <text class="demo-label">{{ t('table') }}</text>
      <text class="demo-desc">{{ t('table.desc') }}</text>
      <tt-table :columns="cols" :data="rows" bordered striped />
    </view>

    <view class="demo-block" id="demo-descriptions" v-if="!only || only === 'descriptions'">
      <text class="demo-label">{{ t('descriptions') }}</text>
      <text class="demo-desc">{{ t('descriptions.desc') }}</text>
      <tt-descriptions title="User Info" :items="descItems" :column="2" bordered />
    </view>

    <view class="demo-block" id="demo-list" v-if="!only || only === 'list'">
      <text class="demo-label">{{ t('list') }}</text>
      <text class="demo-desc">{{ t('list.desc') }}</text>
      <tt-list :finished="true" finished-text="No more">
        <tt-cell title="Item 1" value="Detail" is-link />
        <tt-cell title="Item 2" value="Detail" is-link />
        <tt-cell title="Item 3" value="Detail" is-link />
      </tt-list>
    </view>

    <view class="demo-block" id="demo-tooltip" v-if="!only || only === 'tooltip'">
      <text class="demo-label">{{ t('tooltip') }}</text>
      <text class="demo-desc">{{ t('tooltip.desc') }}</text>
      <view class="demo-row" style="padding-top: 36px;">
        <tt-tooltip content="Top tip" placement="top"><tt-button size="sm">Top</tt-button></tt-tooltip>
        <tt-tooltip content="Bottom tip" placement="bottom"><tt-button size="sm">Bottom</tt-button></tt-tooltip>
      </view>
    </view>

    <view class="demo-block" id="demo-drag" v-if="!only || only === 'drag'">
      <text class="demo-label">{{ t('drag') }}</text>
      <text class="demo-desc">{{ t('drag.desc') }}</text>
      <tt-drag v-model="dragItems" :columns="3" :gap="16" :border-radius="12">
        <template #default="{ item }">
          <view class="drag-demo-cell">
            <text class="drag-demo-cell__text">{{ item.text }}</text>
          </view>
        </template>
      </tt-drag>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import '@/styles/demo-shared.css'
defineProps<{ only?: string }>()
const t = inject<(key: string) => string>('t', (k) => k)

const cols = [{ key: 'name', title: 'Name' }, { key: 'age', title: 'Age' }, { key: 'role', title: 'Role' }]
const rows = [{ name: 'Alice', age: 28, role: 'Dev' }, { name: 'Bob', age: 32, role: 'PM' }]
const descItems = [{ label: 'Name', value: 'Alice' }, { label: 'Age', value: '28' }, { label: 'Email', value: 'alice@example.com' }, { label: 'Role', value: 'Developer' }]
const dragItems = ref([
  { text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' },
  { text: 'Item 4' }, { text: 'Item 5' }, { text: 'Item 6' },
])
</script>

<style>
.swiper-slide {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--tt-radius, 12rpx);
}
.swiper-slide__text {
  color: #fff;
  font-size: 32rpx;
  font-weight: 700;
}
.scroll-item {
  padding: 20rpx 24rpx;
  border-bottom: 2rpx solid var(--tt-border, #e5e5e5);
  font-size: 28rpx;
  color: var(--tt-foreground, #0a0a0a);
}
.drag-demo-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: var(--tt-muted, #f5f5f5);
  border-radius: 12rpx;
}
.drag-demo-cell__text {
  font-size: 26rpx;
  color: var(--tt-foreground, #0a0a0a);
  font-weight: 500;
}
</style>
