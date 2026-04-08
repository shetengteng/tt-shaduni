<template>
  <view class="demo">
    <view class="demo-block">
      <text class="demo-label">{{ t('button') }}</text>
      <text class="demo-desc">{{ t('button.desc') }}</text>
      <view class="demo-row">
        <tt-button variant="default">Default</tt-button>
        <tt-button variant="secondary">Secondary</tt-button>
        <tt-button variant="destructive">Delete</tt-button>
      </view>
      <view class="demo-row">
        <tt-button variant="outline">Outline</tt-button>
        <tt-button variant="ghost">Ghost</tt-button>
        <tt-button variant="link">Link</tt-button>
      </view>
      <view class="demo-row">
        <tt-button size="sm">Small</tt-button>
        <tt-button size="md">Medium</tt-button>
        <tt-button size="lg">Large</tt-button>
      </view>
      <view class="demo-row">
        <tt-button disabled>Disabled</tt-button>
        <tt-button loading>Loading</tt-button>
      </view>
      <tt-button block>Block</tt-button>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('typography') }}</text>
      <text class="demo-desc">{{ t('typography.desc') }}</text>
      <tt-typography type="title" :level="2">Heading H2</tt-typography>
      <tt-typography type="title" :level="4">Heading H4</tt-typography>
      <tt-typography>Regular body text.</tt-typography>
      <tt-typography bold>Bold text</tt-typography>
      <tt-typography type="link">Link text</tt-typography>
      <tt-typography :ellipsis="1">Long text that gets truncated to one line with ellipsis to demonstrate the overflow feature of the typography component.</tt-typography>
    </view>
  </view>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import '@/styles/demo-shared.css'
const t = inject<(key: string) => string>('t', (k) => k)
</script>
