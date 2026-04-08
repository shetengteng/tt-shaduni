<template>
  <view class="tt-collapse">
    <slot />
  </view>
</template>

<script setup lang="ts">
import { collapseProps } from './props'

defineProps(collapseProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

</script>

<style>
.tt-collapse { border: 1px solid var(--tt-border, #e5e5e5); border-radius: var(--tt-radius, 6px); overflow: hidden; }
</style>
