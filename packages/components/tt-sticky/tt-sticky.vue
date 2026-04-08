<template>
  <view class="tt-sticky" :style="stickyStyle"><slot /></view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { stickyProps } from './props'

const props = defineProps(stickyProps)

const stickyStyle = computed(() =>
  props.disabled
    ? {}
    : { position: 'sticky' as const, top: `${props.offsetTop}px`, 'z-index': props.zIndex }
)
</script>

<style>
.tt-sticky { width: 100%; }
</style>
