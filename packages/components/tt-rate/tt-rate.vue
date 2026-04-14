<template>
  <view class="tt-rate">
    <view v-for="i in count" :key="i" class="tt-rate__star" :class="{ 'tt-rate__star--active': i <= modelValue }" @click="!disabled && !readonly && emit('update:modelValue', i)">
      <tt-icon :name="i <= modelValue ? 'ri-star-fill' : 'ri-star-line'" :size="rateSize" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { rateProps } from './props'
import TtIcon from '../tt-icon/tt-icon.vue'

const props = defineProps(rateProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const rateSize = computed(() => {
  if (typeof props.size === 'number') return props.size
  const n = parseInt(props.size as string, 10)
  return isNaN(n) ? 40 : n
})
</script>

<style>
.tt-rate { display: inline-flex; gap: 4rpx; }
.tt-rate__star { color: var(--tt-muted, #f5f5f5); cursor: pointer; transition: color 0.15s; }
.tt-rate__star--active { color: var(--tt-warning, #f59e0b); }
</style>
