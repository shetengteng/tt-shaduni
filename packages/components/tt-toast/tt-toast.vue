<template>
  <view v-if="show" class="tt-toast">
    <view class="tt-toast__content">
      <view v-if="type === 'loading'" class="tt-toast__icon"><view class="tt-toast__spinner" /></view>
      <view v-else-if="type === 'success'" class="tt-toast__icon"><text>✓</text></view>
      <view v-else-if="type === 'fail'" class="tt-toast__icon"><text>✕</text></view>
      <text class="tt-toast__text">{{ message }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { toastProps } from './props'

defineProps(toastProps)
const emit = defineEmits<{
  (e: 'update:show', value: any): void
}>()

</script>

<style>
.tt-toast { position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; z-index: 2000; pointer-events: none; }
.tt-toast__content { background: var(--tt-foreground, #0a0a0a); color: var(--tt-background, #ffffff); padding: 12px 24px; border-radius: calc(var(--tt-radius, 6px) + 2px); display: flex; flex-direction: column; align-items: center; gap: 8px; max-width: 200px; }
.tt-toast__icon { font-size: 28px; }
.tt-toast__spinner { width: 24px; height: 24px; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: tt-spin 0.6s linear infinite; }
.tt-toast__text { font-size: 14px; text-align: center; line-height: 1.4; }
@keyframes tt-spin { to { transform: rotate(360deg); } }
</style>
