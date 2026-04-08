<template>
  <text class="tt-icon" :style="iconStyle">{{ iconChar }}</text>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { iconProps } from './props'

const ICON_MAP: Record<string, string> = {
  home: '⌂', search: '⌕', user: '♟', setting: '⚙', close: '✕', check: '✓',
  'arrow-left': '‹', 'arrow-right': '›', 'arrow-up': '‸', 'arrow-down': '⌄',
  plus: '+', minus: '−', star: '★', 'star-o': '☆', heart: '♥', 'heart-o': '♡',
  edit: '✎', delete: '✖', info: 'ℹ', warning: '⚠', success: '✔', error: '✘',
  loading: '⟳', refresh: '↻', share: '⇧', link: '🔗', copy: '⧉', menu: '☰',
  more: '⋯', filter: '⧫', sort: '⇅', calendar: '📅', clock: '⏱', location: '⊕',
  phone: '✆', mail: '✉', camera: '📷', image: '🖼', file: '📄', folder: '📁',
  lock: '🔒', unlock: '🔓', eye: '👁', 'eye-off': '⊘', bell: '🔔', cart: '🛒',
  tag: '🏷', 'thumbs-up': '👍', 'thumbs-down': '👎',
}

const props = defineProps(iconProps)

const iconChar = computed(() => ICON_MAP[props.name] || props.name)

const iconStyle = computed(() => {
  const size = typeof props.size === 'number' ? `${props.size}px` : props.size
  return {
    fontSize: size,
    lineHeight: size,
    width: size,
    height: size,
    color: props.color || undefined,
  }
})
</script>

<style>
.tt-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  color: inherit;
}
</style>
