<template>
  <view class="tt-form-item">
    <view class="tt-form-item__label">
      <text v-if="required" class="tt-form-item__required">*</text>
      <text>{{ label }}</text>
    </view>
    <view class="tt-form-item__content"><slot /></view>
  </view>
</template>

<script setup lang="ts">
import { formItemProps } from './props'

defineProps(formItemProps)
</script>

<style>
.tt-form-item { display: flex; align-items: flex-start; margin-bottom: 16px; }
.tt-form-item__label { width: 80px; font-size: 14px; color: var(--tt-foreground, #0a0a0a); padding-top: 10px; flex-shrink: 0; }
.tt-form-item__required { color: var(--tt-destructive, #ef4444); margin-right: 2px; }
.tt-form-item__content { flex: 1; }
</style>
