<template>
  <view
    class="tt-segmented"
    :class="[
      'tt-segmented--' + size,
      { 'tt-segmented--block': block, 'tt-segmented--disabled': disabled }
    ]"
  >
    <view
      v-for="opt in options"
      :key="opt.value"
      class="tt-segmented__item"
      :class="{
        'tt-segmented__item--active': modelValue === opt.value,
        'tt-segmented__item--disabled': disabled || opt.disabled
      }"
      @click="onItemClick(opt)"
    >
      <slot name="item" :option="opt" :active="modelValue === opt.value">
        <text class="tt-segmented__label">{{ opt.label }}</text>
      </slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { segmentedProps, type TtSegmentedOption } from './props'

defineProps(segmentedProps)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

const onItemClick = (opt: TtSegmentedOption) => {
  if (opt.disabled) return
  emit('update:modelValue', opt.value)
  emit('change', opt.value)
}
</script>

<style>
.tt-segmented { display: inline-flex; padding: 4rpx; border-radius: 12rpx; background: var(--tt-secondary, #f5f5f5); }
.tt-segmented--block { display: flex; width: 100%; }
.tt-segmented--disabled { opacity: 0.5; }
.tt-segmented__item { flex: 1; display: flex; align-items: center; justify-content: center; padding: 16rpx 24rpx; font-size: 28rpx; color: var(--tt-muted-foreground, #737373); border-radius: 10rpx; transition: background-color 0.15s, color 0.15s; }
.tt-segmented--sm .tt-segmented__item { padding: 10rpx 16rpx; font-size: 24rpx; }
.tt-segmented--lg .tt-segmented__item { padding: 22rpx 32rpx; font-size: 30rpx; }
.tt-segmented__item--active { background: var(--tt-background, #ffffff); color: var(--tt-foreground, #0a0a0a); font-weight: 600; box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.04); }
.tt-segmented__item--disabled { color: var(--tt-muted-foreground, #a3a3a3); }
.tt-segmented__label { font-size: inherit; color: inherit; font-weight: inherit; }
</style>
