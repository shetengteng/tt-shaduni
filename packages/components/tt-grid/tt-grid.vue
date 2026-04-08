<template>
  <view class="tt-grid" :class="{ 'tt-grid--border': border }" :style="gridStyle">
    <slot />
  </view>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { gridProps } from './props'

const props = defineProps(gridProps)
provide('tt-grid-column', props.columnNum)
provide('tt-grid-square', props.square)

const gridStyle = computed(() => {
  const s: Record<string, string> = {}
  if (props.gutter) s.gap = `${props.gutter}px`
  s['grid-template-columns'] = `repeat(${props.columnNum}, 1fr)`
  return s
})
</script>

<style>
.tt-grid { display: grid; }
.tt-grid--border { border: 1px solid var(--tt-border, #e5e5e5); border-radius: var(--tt-radius, 6px); overflow: hidden; }
</style>
