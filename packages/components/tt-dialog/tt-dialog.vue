<template>
  <tt-popup :show="show" position="center" @update:show="handleClose">
    <view class="tt-dialog">
      <view v-if="title" class="tt-dialog__header">
        <text class="tt-dialog__title">{{ title }}</text>
      </view>
      <view class="tt-dialog__body">
        <slot>
          <text class="tt-dialog__message">{{ message }}</text>
        </slot>
      </view>
      <view class="tt-dialog__footer">
        <view
          v-if="showCancelButton"
          class="tt-dialog__btn tt-dialog__btn--cancel"
          @click="handleCancel"
        >
          <text>{{ cancelText }}</text>
        </view>
        <view
          class="tt-dialog__btn tt-dialog__btn--confirm"
          @click="handleConfirm"
        >
          <text>{{ confirmText }}</text>
        </view>
      </view>
    </view>
  </tt-popup>
</template>

<script setup lang="ts">
import { dialogProps } from './props'

defineProps(dialogProps)
const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()

function handleClose() {
  emit('update:show', false)
}

function handleConfirm() {
  emit('confirm')
  handleClose()
}

function handleCancel() {
  emit('cancel')
  handleClose()
}
</script>

<style>
.tt-dialog {
  width: 280px;
  background-color: var(--tt-background, #ffffff);
  border-radius: calc(var(--tt-radius, 6px) + 4px);
  overflow: hidden;
}

.tt-dialog__header {
  padding: 24px 24px 0;
  text-align: center;
}

.tt-dialog__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--tt-foreground, #0a0a0a);
}

.tt-dialog__body {
  padding: 16px 24px 24px;
  text-align: center;
}

.tt-dialog__message {
  font-size: 14px;
  color: var(--tt-muted-foreground, #737373);
  line-height: 1.6;
}

.tt-dialog__footer {
  display: flex;
  border-top: 1px solid var(--tt-border, #e5e5e5);
}

.tt-dialog__btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.15s;
}

.tt-dialog__btn--cancel {
  color: var(--tt-muted-foreground, #737373);
  border-right: 1px solid var(--tt-border, #e5e5e5);
}

.tt-dialog__btn--confirm {
  color: var(--tt-primary, #171717);
  font-weight: 600;
}
</style>
