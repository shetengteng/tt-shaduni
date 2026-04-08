<template>
  <view class="tt-tabs">
    <scroll-view class="tt-tabs__nav" scroll-x>
      <view class="tt-tabs__nav-inner">
        <view
          v-for="item in items"
          :key="item.value"
          class="tt-tabs__item"
          :class="{
            'tt-tabs__item--active': modelValue === item.value,
            'tt-tabs__item--disabled': item.disabled,
          }"
          @click="handleClick(item)"
        >
          <text class="tt-tabs__label">{{ item.label }}</text>
        </view>
      </view>
    </scroll-view>
    <view class="tt-tabs__content">
      <slot />
    </view>
  </view>
</template>

<script setup lang="ts">
import { tabsProps } from './props'

const props = defineProps(tabsProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

function handleClick(item: { value: string | number; disabled?: boolean }) {
  if (item.disabled) return
  emit('update:modelValue', item.value)
  emit('change', item.value)
}
</script>

<style>
.tt-tabs__nav {
  white-space: nowrap;
  border-bottom: 1px solid var(--tt-border, #e5e5e5);
}

.tt-tabs__nav-inner {
  display: inline-flex;
}

.tt-tabs__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  font-size: 14px;
  color: var(--tt-muted-foreground, #737373);
  position: relative;
  cursor: pointer;
  transition: color 0.2s;
  flex-shrink: 0;
}

.tt-tabs__item--active {
  color: var(--tt-foreground, #0a0a0a);
  font-weight: 600;
}

.tt-tabs__item--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 16px;
  right: 16px;
  height: 2px;
  background-color: var(--tt-primary, #171717);
  border-radius: 1px;
}

.tt-tabs__item--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.tt-tabs__label {
  font-size: inherit;
  color: inherit;
}

.tt-tabs__content {
  padding: 16px 0;
}
</style>
