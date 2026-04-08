<template>
  <view class="tt-switch" :class="{ 'tt-switch--on': modelValue, 'tt-switch--disabled': disabled, ['tt-switch--' + size]: true }" @click="!disabled && emit('update:modelValue', !modelValue)" :style="modelValue && activeColor ? { backgroundColor: activeColor } : {}">
    <view class="tt-switch__thumb" />
  </view>
</template>

<script setup lang="ts">
import { switchProps } from './props'

defineProps(switchProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

</script>

<style>
.tt-switch { width: 44px; height: 24px; border-radius: 12px; background: var(--tt-muted, #f5f5f5); position: relative; cursor: pointer; transition: background 0.3s; }
.tt-switch--sm { width: 36px; height: 20px; border-radius: 10px; }
.tt-switch--on { background: var(--tt-primary, #171717); }
.tt-switch--disabled { opacity: 0.5; cursor: not-allowed; }
.tt-switch__thumb { width: 20px; height: 20px; border-radius: 50%; background: #fff; position: absolute; top: 2px; left: 2px; transition: transform 0.3s; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.tt-switch--sm .tt-switch__thumb { width: 16px; height: 16px; }
.tt-switch--on .tt-switch__thumb { transform: translateX(20px); }
.tt-switch--sm.tt-switch--on .tt-switch__thumb { transform: translateX(16px); }
</style>
