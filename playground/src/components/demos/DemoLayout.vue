<template>
  <view class="demo">
    <view class="demo-block">
      <text class="demo-label">{{ t('row_col') }}</text>
      <text class="demo-desc">{{ t('row_col.desc') }}</text>
      <tt-row :gutter="8">
        <tt-col :span="8"><view class="grid-cell">8</view></tt-col>
        <tt-col :span="8"><view class="grid-cell alt">8</view></tt-col>
        <tt-col :span="8"><view class="grid-cell">8</view></tt-col>
      </tt-row>
      <tt-row :gutter="8">
        <tt-col :span="6"><view class="grid-cell">6</view></tt-col>
        <tt-col :span="12"><view class="grid-cell alt">12</view></tt-col>
        <tt-col :span="6"><view class="grid-cell">6</view></tt-col>
      </tt-row>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('grid') }}</text>
      <text class="demo-desc">{{ t('grid.desc') }}</text>
      <tt-grid :column="4" border>
        <view v-for="i in 8" :key="i" class="grid-item">
          <text class="grid-item-text">{{ i }}</text>
        </view>
      </tt-grid>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('space') }}</text>
      <text class="demo-desc">{{ t('space.desc') }}</text>
      <view class="demo-row">
        <tt-button size="sm">A</tt-button>
        <tt-button size="sm">B</tt-button>
        <tt-button size="sm">C</tt-button>
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('collapse') }}</text>
      <text class="demo-desc">{{ t('collapse.desc') }}</text>
      <tt-collapse v-model="collapseVal">
        <tt-collapse-item title="Section A" name="a">
          <text class="demo-hint">Content A</text>
        </tt-collapse-item>
        <tt-collapse-item title="Section B" name="b">
          <text class="demo-hint">Content B</text>
        </tt-collapse-item>
      </tt-collapse>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('sticky') }}</text>
      <text class="demo-desc">{{ t('sticky.desc') }}</text>
      <tt-sticky :offset-top="80">
        <view style="background: var(--tt-primary, #18181b); padding: 10px 16px; border-radius: 8px;">
          <text style="color: #fff; font-size: 13px;">I stick at 80px</text>
        </view>
      </tt-sticky>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('theme') }}</text>
      <text class="demo-desc">{{ t('theme.desc') }}</text>
      <view class="demo-row">
        <view class="swatch" style="background: var(--tt-primary, #18181b);" />
        <view class="swatch" style="background: var(--tt-secondary, #f5f5f5);" />
        <view class="swatch" style="background: var(--tt-muted, #a3a3a3);" />
        <view class="swatch" style="background: var(--tt-destructive, #ef4444);" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
const t = inject<(key: string) => string>('t', (k) => k)

const collapseVal = ref(['a'])
</script>

<style>
.grid-cell {
  background: var(--tt-primary, #18181b);
  color: #fff;
  text-align: center;
  font-size: 12px;
  padding: 10px 0;
  border-radius: 6px;
}
.grid-cell.alt { background: var(--tt-muted-foreground, #737373); }
.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
}
.grid-item-text {
  font-size: 13px;
  color: var(--tt-foreground, #0a0a0a);
}
.swatch {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--tt-border, #e5e5e5);
}
</style>
