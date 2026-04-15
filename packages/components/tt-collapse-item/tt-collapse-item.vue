<template>
  <view class="tt-collapse-item" :class="{ 'tt-collapse-item--disabled': disabled }">
    <view class="tt-collapse-item__header" @click="toggle">
      <text class="tt-collapse-item__title">{{ title }}</text>
      <tt-icon class="tt-collapse-item__arrow" :class="{ 'tt-collapse-item__arrow--up': open }" name="ri-arrow-right-s-line" :size="32" color="var(--tt-muted-foreground, #737373)" />
    </view>
    <view v-if="open" class="tt-collapse-item__body">
      <view class="tt-collapse-item__content">
        <slot />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'
import { collapseItemProps } from './props'

const props = defineProps(collapseItemProps)
const emit = defineEmits<{
  (e: 'toggle', name: string | number): void
}>()

const parentValue = inject<Ref<any[]>>('tt-collapse-value', undefined)
const parentToggle = inject<(name: string | number) => void>('tt-collapse-toggle', undefined)

const open = computed(() => {
  if (parentValue?.value) {
    return parentValue.value.includes(props.name)
  }
  return false
})

function toggle() {
  if (props.disabled) return
  if (parentToggle) {
    parentToggle(props.name)
  }
  emit('toggle', props.name)
}
</script>

<style>
.tt-collapse-item { border-bottom: 2rpx solid var(--tt-border, #e5e5e5); }
.tt-collapse-item:last-child { border-bottom: none; }
.tt-collapse-item--disabled { opacity: .5; pointer-events: none; }
.tt-collapse-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx 28rpx;
  cursor: pointer;
  transition: background .15s;
}
.tt-collapse-item__header:active { background: var(--tt-muted, #f5f5f5); }
.tt-collapse-item__title { font-size: 28rpx; font-weight: 500; color: var(--tt-foreground, #0a0a0a); }
.tt-collapse-item__arrow {
  transform: rotate(90deg);
  transition: transform .2s;
}
.tt-collapse-item__arrow--up { transform: rotate(-90deg); }
.tt-collapse-item__body { overflow: hidden; }
.tt-collapse-item__content { padding: 0 28rpx 24rpx; font-size: 26rpx; color: var(--tt-muted-foreground, #737373); line-height: 1.5; }
</style>
