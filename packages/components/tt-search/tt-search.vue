<template>
  <view class="tt-search" :class="['tt-search--' + variant]">
    <view
      class="tt-search__input-wrap"
      :class="{ 'tt-search__input-wrap--focused': focused }"
    >
      <tt-icon
        class="tt-search__icon"
        name="ri-search-line"
        :size="32"
        :color="focused ? 'var(--tt-foreground, #0a0a0a)' : 'var(--tt-muted-foreground, #737373)'"
      />
      <input
        class="tt-search__input"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :placeholder-style="'color: var(--tt-muted-foreground, #737373)'"
        @input="(e: any) => emit('update:modelValue', e.detail.value)"
        @confirm="emit('search', modelValue)"
        @focus="focused = true"
        @blur="focused = false"
      />
      <view
        v-if="clearable && modelValue"
        class="tt-search__clear"
        @click="onClear"
      >
        <tt-icon name="ri-close-circle-fill" :size="28" color="var(--tt-muted-foreground, #a3a3a3)" />
      </view>
    </view>
    <text v-if="showCancel" class="tt-search__cancel" @click="emit('cancel')">Cancel</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { searchProps } from './props'
import TtIcon from '../tt-icon/tt-icon.vue'

defineProps(searchProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'search', value: string): void
  (e: 'cancel'): void
  (e: 'clear'): void
}>()

const focused = ref(false)

function onClear() {
  emit('update:modelValue', '')
  emit('clear')
}
</script>

<style>
.tt-search { display: flex; align-items: center; gap: 16rpx; padding: 16rpx 24rpx; background: var(--tt-background, #ffffff); }
.tt-search__input-wrap { flex: 1; display: flex; align-items: center; gap: 12rpx; height: 72rpx; padding: 0 20rpx; border-radius: var(--tt-radius, 12rpx); border: 2rpx solid transparent; transition: border-color 0.15s, background-color 0.15s; }
.tt-search--default .tt-search__input-wrap { background: var(--tt-muted, #f5f5f5); }
.tt-search--ghost .tt-search__input-wrap { background: var(--tt-background, #ffffff); border-color: var(--tt-border, #e5e5e5); }
.tt-search__input-wrap--focused { background: var(--tt-background, #ffffff); border-color: var(--tt-foreground, #0a0a0a); }
.tt-search__icon { flex-shrink: 0; }
.tt-search__input { flex: 1; font-size: 28rpx; color: var(--tt-foreground, #0a0a0a); background: transparent; border: none; height: 100%; }
.tt-search__clear { flex-shrink: 0; padding: 4rpx; display: flex; align-items: center; justify-content: center; }
.tt-search__cancel { font-size: 28rpx; color: var(--tt-primary, #171717); cursor: pointer; flex-shrink: 0; }
</style>
