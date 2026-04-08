<template>
  <text class="tt-icon" :class="`tt-icon-${name}`" :style="iconStyle" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { iconProps } from './props'

const props = defineProps(iconProps)

const iconStyle = computed(() => {
  const size = typeof props.size === 'number' ? `${props.size}px` : props.size
  return {
    fontSize: size,
    lineHeight: size,
    width: size,
    height: size,
    color: props.color || undefined,
  }
})
</script>

<style>
.tt-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  color: inherit;
}
</style>
