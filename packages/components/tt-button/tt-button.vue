<template>
  <button
    class="tt-button"
    :class="rootClass"
    :disabled="disabled || loading"
    :open-type="openType || undefined"
    :aria-disabled="disabled || loading"
    @click="handleClick"
  >
    <view v-if="loading" class="tt-button__loading">
      <view class="tt-button__spinner" />
    </view>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { buttonProps } from './props'

const props = defineProps(buttonProps)
const emit = defineEmits<{
  (e: 'click', event: Event): void
}>()

const rootClass = computed(() => [
  `tt-button--${props.variant}`,
  `tt-button--${props.size}`,
  {
    'tt-button--disabled': props.disabled,
    'tt-button--loading': props.loading,
    'tt-button--block': props.block,
  },
])

function handleClick(e: Event) {
  if (!props.disabled && !props.loading) {
    emit('click', e)
  }
}
</script>

<style>
.tt-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: var(--tt-radius, 6px);
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  line-height: 1.2;
  transition: opacity 0.15s, background-color 0.15s;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.tt-button::after {
  display: none;
}

/* — Variants — */

.tt-button--default {
  background-color: var(--tt-primary, #171717);
  color: var(--tt-primary-foreground, #fafafa);
}

.tt-button--destructive {
  background-color: var(--tt-destructive, #ef4444);
  color: var(--tt-destructive-foreground, #fafafa);
}

.tt-button--outline {
  background-color: var(--tt-background, #ffffff);
  color: var(--tt-foreground, #0a0a0a);
  border: 1px solid var(--tt-border, #e5e5e5);
}

.tt-button--secondary {
  background-color: var(--tt-secondary, #f5f5f5);
  color: var(--tt-secondary-foreground, #171717);
}

.tt-button--ghost {
  background-color: transparent;
  color: var(--tt-foreground, #0a0a0a);
}

.tt-button--link {
  background-color: transparent;
  color: var(--tt-primary, #171717);
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* — Sizes — */

.tt-button--sm {
  height: 32px;
  padding: 0 12px;
  font-size: 12px;
  border-radius: calc(var(--tt-radius, 6px) - 2px);
}

.tt-button--md {
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
}

.tt-button--lg {
  height: 44px;
  padding: 0 24px;
  font-size: 16px;
  border-radius: calc(var(--tt-radius, 6px) + 2px);
}

.tt-button--icon {
  width: 36px;
  height: 36px;
  padding: 0;
}

/* — States — */

.tt-button--block {
  display: flex;
  width: 100%;
}

.tt-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.tt-button--loading {
  opacity: 0.7;
  cursor: wait;
}

/* — Loading spinner — */

.tt-button__loading {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tt-button__spinner {
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: tt-spin 0.6s linear infinite;
}

@keyframes tt-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
