<template>
  <view class="tt-checkbox" :class="{ 'tt-checkbox--checked': modelValue, 'tt-checkbox--disabled': disabled }" @click="!disabled && emit('update:modelValue', !modelValue)">
    <view class="tt-checkbox__box">
      <text v-if="modelValue" class="tt-checkbox__check">✓</text>
    </view>
    <text v-if="label" class="tt-checkbox__label">{{ label }}</text>
    <slot />
  </view>
</template>

<script setup lang="ts">
import { checkboxProps } from './props'

defineProps(checkboxProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

</script>

<style>
.tt-checkbox { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }
.tt-checkbox--disabled { opacity: 0.5; cursor: not-allowed; }
.tt-checkbox__box { width: 18px; height: 18px; border: 1.5px solid var(--tt-border, #e5e5e5); border-radius: 4px; display: flex; align-items: center; justify-content: center; transition: all 0.15s; flex-shrink: 0; }
.tt-checkbox--checked .tt-checkbox__box { background: var(--tt-primary, #171717); border-color: var(--tt-primary, #171717); }
.tt-checkbox__check { font-size: 12px; color: var(--tt-primary-foreground, #fafafa); line-height: 1; }
.tt-checkbox__label { font-size: 14px; color: var(--tt-foreground, #0a0a0a); }
</style>
