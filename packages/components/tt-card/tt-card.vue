<template>
  <view class="tt-card" :class="`tt-card--shadow-${shadow}`">
    <view v-if="title || $slots.header" class="tt-card__header">
      <slot name="header">
        <view class="tt-card__header-inner">
          <text v-if="title" class="tt-card__title">{{ title }}</text>
          <text v-if="description" class="tt-card__description">{{ description }}</text>
        </view>
      </slot>
    </view>
    <view class="tt-card__content">
      <slot />
    </view>
    <view v-if="$slots.footer" class="tt-card__footer">
      <slot name="footer" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { cardProps } from './props'

defineProps(cardProps)
</script>

<style>
.tt-card {
  border-radius: calc(var(--tt-radius, 6px) + 2px);
  border: 1px solid var(--tt-border, #e5e5e5);
  background-color: var(--tt-card, #ffffff);
  color: var(--tt-card-foreground, #0a0a0a);
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.tt-card--shadow-always {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
}

.tt-card--shadow-never {
  box-shadow: none;
}

.tt-card__header {
  padding: 20px 20px 0;
}

.tt-card__header-inner {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tt-card__title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: inherit;
}

.tt-card__description {
  font-size: 13px;
  color: var(--tt-muted-foreground, #737373);
  line-height: 1.5;
}

.tt-card__content {
  padding: 20px;
}

.tt-card__footer {
  padding: 0 20px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
