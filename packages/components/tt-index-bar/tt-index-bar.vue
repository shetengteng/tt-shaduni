<template>
  <view class="tt-index-bar">
    <scroll-view scroll-y class="tt-index-bar__content" :scroll-into-view="scrollTarget">
      <slot />
    </scroll-view>
    <view class="tt-index-bar__sidebar">
      <text
        v-for="idx in indexList"
        :key="idx"
        class="tt-index-bar__index"
        :class="{ 'tt-index-bar__index--active': currentIdx === idx }"
        @click="onSelect(idx)"
      >{{ idx }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { indexBarProps } from './props'

const props = defineProps(indexBarProps)
const emit = defineEmits(['update:activeIndex', 'select'])

const innerIdx = ref(props.activeIndex)
const currentIdx = computed(() => props.activeIndex || innerIdx.value)
const scrollTarget = ref('')

function onSelect(idx: string) {
  innerIdx.value = idx
  scrollTarget.value = ''
  setTimeout(() => { scrollTarget.value = `tt-index-anchor-${idx}` }, 0)
  emit('update:activeIndex', idx)
  emit('select', idx)
}
</script>

<style>
.tt-index-bar { position: relative; height: 100%; }
.tt-index-bar__content { height: 100%; }
.tt-index-bar__sidebar { position: absolute; right: 0; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; align-items: center; padding: 4rpx; z-index: 2; }
.tt-index-bar__index { width: 32rpx; height: 32rpx; font-size: 20rpx; text-align: center; line-height: 32rpx; color: var(--tt-muted-foreground, #737373); cursor: pointer; }
.tt-index-bar__index--active { color: var(--tt-primary, #171717); font-weight: 700; background: var(--tt-muted, #f5f5f5); border-radius: 50%; }
</style>
