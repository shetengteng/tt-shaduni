<template>
  <view class="tt-textarea" :class="{ 'tt-textarea--disabled': disabled }">
    <textarea class="tt-textarea__inner" :value="modelValue" :placeholder="placeholder" :maxlength="maxlength" :disabled="disabled" :auto-height="autoHeight" :placeholder-style="'color: var(--tt-muted-foreground, #737373)'" @input="(e: any) => emit('update:modelValue', e.detail.value)" />
    <text v-if="showCount" class="tt-textarea__count">{{ String(modelValue).length }}{{ maxlength > 0 ? '/' + maxlength : '' }}</text>
  </view>
</template>

<script setup lang="ts">
import { textareaProps } from './props'

defineProps(textareaProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

</script>

<style>
.tt-textarea { border: 1px solid var(--tt-input, #e5e5e5); border-radius: var(--tt-radius, 6px); padding: 10px 12px; background: var(--tt-background, #ffffff); transition: border-color 0.2s; }
.tt-textarea--disabled { opacity: 0.5; }
.tt-textarea__inner { width: 100%; font-size: 14px; color: var(--tt-foreground, #0a0a0a); background: transparent; border: none; min-height: 80px; line-height: 1.6; }
.tt-textarea__count { font-size: 12px; color: var(--tt-muted-foreground, #737373); text-align: right; display: block; margin-top: 4px; }
</style>
