<template>
  <scroll-view class="tt-scroll-view" :scroll-x="scrollX" :scroll-y="scrollY" :refresher-enabled="refresherEnabled" :refresher-triggered="refresherTriggered" :lower-threshold="lowerThreshold" @refresherrefresh="$emit('refresh')" @scrolltolower="$emit('scrolltolower')">
    <slot />
  </scroll-view>
</template>

<script setup lang="ts">
import { scrollViewProps } from './props'
defineProps(scrollViewProps)
defineEmits(['refresh', 'scrolltolower'])
</script>

<style>
.tt-scroll-view { width: 100%; }
</style>
