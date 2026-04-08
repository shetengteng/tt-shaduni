<template>
  <tt-popup :show="show" position="bottom" @update:show="emit('update:show', $event)">
    <view class="tt-action-sheet">
      <text v-if="title" class="tt-action-sheet__title">{{ title }}</text>
      <view v-for="(action, i) in actions" :key="i" class="tt-action-sheet__item" :class="{ 'tt-action-sheet__item--disabled': action.disabled }" :style="{ color: action.color }" @click="!action.disabled && (emit('select', action), emit('update:show', false))">
        <text>{{ action.name }}</text>
      </view>
      <view class="tt-action-sheet__gap" />
      <view class="tt-action-sheet__cancel" @click="emit('cancel'); emit('update:show', false)">
        <text>{{ cancelText }}</text>
      </view>
    </view>
  </tt-popup>
</template>

<script setup lang="ts">
import { actionSheetProps } from './props'

defineProps(actionSheetProps)
const emit = defineEmits<{
  (e: 'update:show', value: any): void
  (e: 'select'): void
  (e: 'cancel'): void
}>()

</script>

<style>
.tt-action-sheet { background: var(--tt-background, #ffffff); }
.tt-action-sheet__title { display: block; text-align: center; padding: 16px; font-size: 14px; color: var(--tt-muted-foreground, #737373); border-bottom: 1px solid var(--tt-border, #e5e5e5); }
.tt-action-sheet__item { padding: 16px; text-align: center; font-size: 16px; color: var(--tt-foreground, #0a0a0a); cursor: pointer; transition: background 0.15s; }
.tt-action-sheet__item--disabled { opacity: 0.4; cursor: not-allowed; }
.tt-action-sheet__gap { height: 8px; background: var(--tt-muted, #f5f5f5); }
.tt-action-sheet__cancel { padding: 16px; text-align: center; font-size: 16px; color: var(--tt-foreground, #0a0a0a); cursor: pointer; }
</style>
