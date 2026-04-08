<template>
  <view class="tt-dropdown-menu" :class="{ 'tt-dropdown-menu--disabled': disabled }">
    <view class="tt-dropdown-menu__bar" @click="toggle">
      <text class="tt-dropdown-menu__title">{{ displayText }}</text>
      <text class="tt-dropdown-menu__arrow" :class="{ 'tt-dropdown-menu__arrow--up': open }">▾</text>
    </view>
    <view v-if="open" class="tt-dropdown-menu__popup">
      <view class="tt-dropdown-menu__overlay" @click="open = false"></view>
      <view class="tt-dropdown-menu__content">
        <view v-for="opt in options" :key="opt.value" class="tt-dropdown-menu__option" :class="{ 'tt-dropdown-menu__option--active': modelValue === opt.value }" @click="select(opt)">
          <text>{{ opt.text }}</text>
          <text v-if="modelValue === opt.value" class="tt-dropdown-menu__check">✓</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { dropdownMenuProps } from './props'

const props = defineProps(dropdownMenuProps)
const emit = defineEmits(['update:modelValue', 'change'])
const open = ref(false)

const displayText = computed(() => {
  const found = props.options.find(o => o.value === props.modelValue)
  return found ? found.text : props.title || 'Select'
})

function toggle() { if (!props.disabled) open.value = !open.value }
function select(opt: { value: string | number }) { emit('update:modelValue', opt.value); emit('change', opt.value); open.value = false }
</script>

<style>
.tt-dropdown-menu { position: relative; }
.tt-dropdown-menu--disabled { opacity: .5; pointer-events: none; }
.tt-dropdown-menu__bar { display: flex; align-items: center; justify-content: center; height: 44px; padding: 0 12px; cursor: pointer; gap: 4px; }
.tt-dropdown-menu__title { font-size: 14px; font-weight: 500; }
.tt-dropdown-menu__arrow { font-size: 10px; transition: transform .2s; }
.tt-dropdown-menu__arrow--up { transform: rotate(180deg); }
.tt-dropdown-menu__popup { position: absolute; left: 0; right: 0; top: 100%; z-index: 10; }
.tt-dropdown-menu__overlay { position: fixed; inset: 0; z-index: -1; }
.tt-dropdown-menu__content { background: var(--tt-background, #fff); border: 1px solid var(--tt-border, #e5e5e5); border-radius: var(--tt-radius, 6px); box-shadow: 0 4px 12px rgba(0,0,0,.08); overflow: hidden; }
.tt-dropdown-menu__option { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; font-size: 14px; cursor: pointer; transition: background .15s; }
.tt-dropdown-menu__option:active { background: var(--tt-muted, #f5f5f5); }
.tt-dropdown-menu__option--active { color: var(--tt-primary, #171717); font-weight: 600; }
.tt-dropdown-menu__check { font-size: 14px; color: var(--tt-primary, #171717); }
</style>
