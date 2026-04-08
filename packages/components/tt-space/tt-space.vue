<template>
  <view class="tt-space" :class="['tt-space--' + direction, { 'tt-space--wrap': wrap }]" :style="spaceStyle">
    <slot />
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { spaceProps } from './props'

defineProps(spaceProps)
</script>

<style>
.tt-space { display: flex; }
.tt-space--horizontal { flex-direction: row; }
.tt-space--vertical { flex-direction: column; }
.tt-space--wrap { flex-wrap: wrap; }
</style>
