<template>
  <tt-config-provider>
    <view class="page">
      <view class="section">
        <text class="section-title">TT-UI Button Variants</text>
        <view class="button-group">
          <tt-button variant="default" @click="handleClick('default')">Default</tt-button>
          <tt-button variant="secondary">Secondary</tt-button>
          <tt-button variant="destructive">Destructive</tt-button>
          <tt-button variant="outline">Outline</tt-button>
          <tt-button variant="ghost">Ghost</tt-button>
          <tt-button variant="link">Link</tt-button>
        </view>
      </view>

      <view class="section">
        <text class="section-title">Sizes</text>
        <view class="button-group">
          <tt-button size="sm">Small</tt-button>
          <tt-button size="md">Medium</tt-button>
          <tt-button size="lg">Large</tt-button>
        </view>
      </view>

      <view class="section">
        <text class="section-title">States</text>
        <view class="button-group">
          <tt-button disabled>Disabled</tt-button>
          <tt-button loading>Loading</tt-button>
          <tt-button block>Block Button</tt-button>
        </view>
      </view>

      <view class="section">
        <text class="section-title">Theme</text>
        <view class="button-group">
          <tt-button @click="toggleTheme">
            Toggle {{ isDark ? 'Light' : 'Dark' }}
          </tt-button>
          <text class="theme-label">Current: {{ isDark ? 'Dark' : 'Light' }}</text>
        </view>
      </view>
    </view>
  </tt-config-provider>
</template>

<script setup lang="ts">
import { useTheme } from '../../../../packages/composables/use-theme'

const { isDark, toggleTheme } = useTheme()

function handleClick(variant: string) {
  uni.showToast({ title: `Clicked: ${variant}`, icon: 'none' })
}
</script>

<style>
.page {
  padding: 20px 16px;
  min-height: 100vh;
  background-color: var(--tt-background, #ffffff);
}

.section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--tt-foreground, #0a0a0a);
  margin-bottom: 12px;
  display: block;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.theme-label {
  font-size: 13px;
  color: var(--tt-muted-foreground, #737373);
}
</style>
