<template>
  <view class="tt-slider" :class="{ 'tt-slider--disabled': disabled }">
    <view class="tt-slider__track" ref="trackRef" @click="onTrackClick">
      <view class="tt-slider__bar" :style="barStyle"></view>
      <view class="tt-slider__thumb" :style="thumbStyle"></view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { sliderProps } from './props'

const props = defineProps(sliderProps)
const emit = defineEmits(['update:modelValue', 'change'])

const pct = computed(() => ((props.modelValue - props.min) / (props.max - props.min)) * 100)
const barStyle = computed(() => ({
  width: `${pct.value}%`,
  background: props.activeColor || 'var(--tt-primary, #171717)',
}))
const thumbStyle = computed(() => ({ left: `${pct.value}%` }))

function onTrackClick(e: any) {
  if (props.disabled) return
  const rect = e.currentTarget?.getBoundingClientRect?.()
  if (!rect) return
  const x = e.clientX || e.detail?.x || 0
  const ratio = Math.min(1, Math.max(0, (x - rect.left) / rect.width))
  const raw = props.min + ratio * (props.max - props.min)
  const val = Math.round(raw / props.step) * props.step
  emit('update:modelValue', val)
  emit('change', val)
}
</script>

<style>
.tt-slider { padding: 12px 0; }
.tt-slider__track { position: relative; height: 4px; background: var(--tt-muted, #f5f5f5); border-radius: 2px; cursor: pointer; }
.tt-slider__bar { position: absolute; left: 0; top: 0; height: 100%; border-radius: 2px; transition: width .15s; }
.tt-slider__thumb { position: absolute; top: 50%; width: 16px; height: 16px; border-radius: 50%; background: var(--tt-background, #fff); border: 2px solid var(--tt-primary, #171717); transform: translate(-50%, -50%); transition: left .15s; box-shadow: 0 1px 3px rgba(0,0,0,.1); }
.tt-slider--disabled { opacity: .5; pointer-events: none; }
</style>
