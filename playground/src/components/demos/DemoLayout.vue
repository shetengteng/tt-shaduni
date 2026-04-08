<template>
  <view class="demo">
    <view class="demo-block">
      <text class="demo-label">Row / Col</text>
      <tt-row :gutter="8">
        <tt-col :span="12"><view class="g-cell pri">12</view></tt-col>
        <tt-col :span="12"><view class="g-cell sec">12</view></tt-col>
      </tt-row>
      <view style="height: 8px;" />
      <tt-row :gutter="8">
        <tt-col :span="8"><view class="g-cell pri">8</view></tt-col>
        <tt-col :span="16"><view class="g-cell sec">16</view></tt-col>
      </tt-row>
    </view>

    <view class="demo-block">
      <text class="demo-label">Grid</text>
      <tt-grid :column-num="4" border>
        <view class="g-item">A</view>
        <view class="g-item">B</view>
        <view class="g-item">C</view>
        <view class="g-item">D</view>
      </tt-grid>
    </view>

    <view class="demo-block">
      <text class="demo-label">Space</text>
      <tt-space :size="10">
        <tt-button size="sm">A</tt-button>
        <tt-button size="sm">B</tt-button>
        <tt-button size="sm">C</tt-button>
      </tt-space>
    </view>

    <view class="demo-block">
      <text class="demo-label">Collapse</text>
      <tt-collapse v-model="collapse">
        <text class="demo-hint">Collapse content</text>
      </tt-collapse>
    </view>

    <view class="demo-block">
      <text class="demo-label">Sticky</text>
      <text class="demo-hint">Makes child stick to top on scroll.</text>
    </view>

    <view class="demo-block">
      <text class="demo-label">Theme</text>
      <view class="theme-row">
        <view class="swatch" style="background: var(--tt-primary, #171717);" />
        <text class="demo-hint">Primary</text>
      </view>
      <view class="theme-row">
        <view class="swatch" style="background: var(--tt-secondary, #f5f5f5);" />
        <text class="demo-hint">Secondary</text>
      </view>
      <view class="theme-row">
        <view class="swatch" style="background: var(--tt-destructive, #ef4444);" />
        <text class="demo-hint">Destructive</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const collapse = ref([])
</script>

<style>
.g-cell { padding: 10px; text-align: center; border-radius: 4px; font-size: 12px; font-weight: 600; }
.g-cell.pri { background: var(--tt-primary, #171717); color: var(--tt-primary-foreground, #fafafa); }
.g-cell.sec { background: var(--tt-secondary, #f5f5f5); color: var(--tt-secondary-foreground, #171717); }
.g-item { padding: 12px; text-align: center; font-size: 13px; font-weight: 500; }
.theme-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
.swatch { width: 28px; height: 28px; border-radius: 6px; border: 1px solid var(--tt-border, #e5e5e5); flex-shrink: 0; }
</style>
