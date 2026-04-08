<template>
  <view class="tt-steps" :class="'tt-steps--' + direction">
    <slot />
  </view>
</template>

<script setup lang="ts">
import { stepsProps } from './props'

defineProps(stepsProps)
</script>

<style>
.tt-steps { display: flex; }
.tt-steps--horizontal { flex-direction: row; }
.tt-steps--vertical { flex-direction: column; }
</style>
