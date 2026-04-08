<template>
  <view class="tt-slider" :class="{ 'tt-slider--disabled': disabled }">
    <slider
      class="tt-slider__native"
      :value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :activeColor="activeColor || 'var(--tt-primary, #171717)'"
      :backgroundColor="'var(--tt-muted, #f5f5f5)'"
      :block-size="18"
      block-color="transparent"
      @changing="onChanging"
      @change="onChange"
    />
  </view>
</template>

<script setup lang="ts">
import { sliderProps } from './props'

const props = defineProps(sliderProps)
const emit = defineEmits(['update:modelValue', 'change'])

function onChanging(e: any) {
  const val = e.detail?.value ?? e.target?.value ?? props.modelValue
  emit('update:modelValue', Number(val))
}

function onChange(e: any) {
  const val = e.detail?.value ?? e.target?.value ?? props.modelValue
  emit('update:modelValue', Number(val))
  emit('change', Number(val))
}
</script>

<style>
.tt-slider { padding: 16rpx 0; }
.tt-slider__native { width: 100%; margin: 0; }
.tt-slider--disabled { opacity: .5; pointer-events: none; }

/* shadcn-style overrides for UniApp H5 slider internals */
.tt-slider .uni-slider-handle-wrapper {
  height: 8rpx !important;
  border-radius: 999rpx !important;
  background: var(--tt-muted, #f5f5f5) !important;
  overflow: visible !important;
}
.tt-slider .uni-slider-track {
  height: 8rpx !important;
  border-radius: 999rpx !important;
  background: var(--tt-primary, #171717) !important;
}
.tt-slider .uni-slider-thumb,
.tt-slider .uni-slider-handle {
  width: 36rpx !important;
  height: 36rpx !important;
  border-radius: 50% !important;
  background: var(--tt-background, #fff) !important;
  border: 4rpx solid var(--tt-primary, #171717) !important;
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,.1) !important;
  margin-top: -14rpx !important;
}
</style>
