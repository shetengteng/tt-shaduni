<template>
  <view class="tt-count-down">
    <slot :time-data="{ hours: 0, minutes: 0, seconds: 0 }"><text class="tt-count-down__text">00:00:00</text></slot>
  </view>
</template>

<script setup lang="ts">
import { countDownProps } from './props'

defineProps(countDownProps)
const emit = defineEmits<{
  (e: 'finish'): void
}>()

</script>

<style>
.tt-count-down { display: inline-flex; }
.tt-count-down__text { font-size: 14px; color: var(--tt-foreground, #0a0a0a); font-variant-numeric: tabular-nums; }
</style>
