<template>
  <view class="tt-fab" :class="rootClasses" :style="rootStyle">
    <!-- speed-dial 子按钮容器 -->
    <view
      v-if="items.length > 0"
      v-show="internalOpen"
      class="tt-fab__items"
      :class="`tt-fab__items--${direction}`"
      :style="itemsStyle"
    >
      <view
        v-for="(item, idx) in items"
        :key="item.key"
        class="tt-fab__item"
        :class="[
          `tt-fab__item--${item.type ?? type}`,
          { 'tt-fab__item--disabled': item.disabled },
        ]"
        :style="getItemStyle(idx)"
        hover-class="tt-fab__item--pressed"
        @click="onItemClick(item, idx)"
      >
        <slot name="item" :item="item" :index="idx">
          <tt-icon
            v-if="item.icon"
            :name="item.icon"
            :size="Number(iconSize) * 0.85"
            :color="iconColor"
          />
          <text v-if="item.text" class="tt-fab__item-text">{{ item.text }}</text>
          <view v-if="item.badge !== undefined && item.badge !== null" class="tt-fab__item-badge">
            <text class="tt-fab__item-badge-text">{{ item.badge }}</text>
          </view>
        </slot>
      </view>
    </view>

    <!-- 主按钮 -->
    <view
      class="tt-fab__main"
      :class="mainClasses"
      :style="mainStyle"
      hover-class="tt-fab__main--pressed"
      @click="onMainClick"
    >
      <slot>
        <tt-icon
          v-if="icon"
          :name="icon"
          :size="iconSize"
          :color="iconColor"
        />
        <text v-if="text" class="tt-fab__main-text">{{ text }}</text>
      </slot>
      <slot name="badge" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { fabProps, type TtFabItem } from './props'
import TtIcon from '../tt-icon/tt-icon.vue'

const props = defineProps(fabProps)
const emit = defineEmits<{
  (e: 'click', event: Event): void
  (e: 'select', item: TtFabItem, index: number): void
  (e: 'update:modelValue', value: boolean): void
}>()

const internalOpen = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  internalOpen.value = val
})

const hasItems = computed(() => props.items.length > 0)

const isExtended = computed(() => !!props.text)

const rootClasses = computed(() => [
  `tt-fab--${props.position}`,
])

const rootStyle = computed(() => {
  const style: Record<string, string> = {
    zIndex: String(props.zIndex),
  }
  if (props.position === 'custom') {
    if (props.offsetTop) style.top = props.offsetTop
    if (props.offsetBottom) style.bottom = props.offsetBottom
    if (props.offsetLeft) style.left = props.offsetLeft
    if (props.offsetRight) style.right = props.offsetRight
  } else if (props.position === 'bottom-right') {
    style.bottom = props.offsetBottom
    style.right = props.offsetRight
  } else if (props.position === 'bottom-left') {
    style.bottom = props.offsetBottom
    style.left = props.offsetLeft || props.offsetRight
  } else if (props.position === 'bottom-center') {
    style.bottom = props.offsetBottom
    style.left = '50%'
    style.transform = 'translateX(-50%)'
  } else if (props.position === 'top-right') {
    style.top = props.offsetTop || '40rpx'
    style.right = props.offsetRight
  }
  return style
})

const mainClasses = computed(() => [
  `tt-fab__main--${props.type}`,
  `tt-fab__main--${props.size}`,
  {
    'tt-fab__main--circle': props.shape === 'circle',
    'tt-fab__main--square': props.shape === 'square',
    'tt-fab__main--extended': isExtended.value,
    'tt-fab__main--disabled': props.disabled,
    'tt-fab__main--shadow': props.shadow,
  },
])

const mainStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.shape === 'square' && !isExtended.value) {
    style.borderRadius = props.radius
  }
  if (props.shadow) {
    style.boxShadow = `0 8rpx 32rpx ${props.shadowColor}`
  }
  return style
})

const itemsStyle = computed(() => ({
  gap: props.gap + 'rpx',
}))

function getItemStyle(idx: number) {
  return {
    animationDelay: internalOpen.value ? `${idx * 30}ms` : '0ms',
  }
}

function setOpen(val: boolean) {
  internalOpen.value = val
  emit('update:modelValue', val)
}

function onMainClick(e: Event) {
  if (props.disabled) return
  emit('click', e)
  if (hasItems.value) {
    setOpen(!internalOpen.value)
  }
}

function onItemClick(item: TtFabItem, idx: number) {
  if (item.disabled) return
  emit('select', item, idx)
  if (props.autoClose) {
    setOpen(false)
  }
}
</script>

<style>
/* ── 根容器（固定定位） ── */
.tt-fab {
  position: fixed;
  display: inline-flex;
  align-items: flex-end;
  pointer-events: none;
}

/* ── 主按钮 ── */
.tt-fab__main {
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
}

/* shapes */
.tt-fab__main--circle { border-radius: 9999rpx; }
.tt-fab__main--square { border-radius: 32rpx; }

/* sizes */
.tt-fab__main--mini { width: 80rpx; height: 80rpx; }
.tt-fab__main--regular { width: 104rpx; height: 104rpx; }
.tt-fab__main--large { width: 128rpx; height: 128rpx; }

/* extended (text + icon) */
.tt-fab__main--extended {
  width: auto;
  padding: 0 32rpx;
  height: 96rpx;
  border-radius: 48rpx;
  gap: 12rpx;
}

.tt-fab__main-text {
  font-size: 28rpx;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
  max-width: 60vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* types (主题色) */
.tt-fab__main--primary {
  background: var(--tt-primary, #171717);
  color: var(--tt-primary-foreground, #fafafa);
}
.tt-fab__main--default {
  background: var(--tt-secondary, #f5f5f5);
  color: var(--tt-secondary-foreground, #171717);
}
.tt-fab__main--success {
  background: var(--tt-success, #22c55e);
  color: var(--tt-success-foreground, #fafafa);
}
.tt-fab__main--warning {
  background: var(--tt-warning, #f59e0b);
  color: var(--tt-warning-foreground, #fafafa);
}
.tt-fab__main--danger {
  background: var(--tt-destructive, #ef4444);
  color: var(--tt-destructive-foreground, #fafafa);
}

/* states */
.tt-fab__main--pressed {
  transform: scale(0.94);
  opacity: 0.94;
}
.tt-fab__main--disabled {
  opacity: 0.5;
  pointer-events: none;
}

/* ── 子按钮容器 ── */
.tt-fab__items {
  position: absolute;
  display: flex;
  pointer-events: auto;
}

.tt-fab__items--up {
  bottom: 100%;
  right: 0;
  flex-direction: column-reverse;
  padding-bottom: 24rpx;
  align-items: flex-end;
}

.tt-fab__items--down {
  top: 100%;
  right: 0;
  flex-direction: column;
  padding-top: 24rpx;
  align-items: flex-end;
}

/* 左对齐：当 FAB 位于左侧时，items 应当贴主按钮的左边对齐，避免向左溢出屏幕 */
.tt-fab--bottom-left .tt-fab__items--up,
.tt-fab--bottom-left .tt-fab__items--down,
.tt-fab--top-left .tt-fab__items--up,
.tt-fab--top-left .tt-fab__items--down {
  right: auto;
  left: 0;
  align-items: flex-start;
}

/* 居中对齐：当 FAB 居中（bottom-center / top-center）时，items 也居中对齐 */
.tt-fab--bottom-center .tt-fab__items--up,
.tt-fab--bottom-center .tt-fab__items--down,
.tt-fab--top-center .tt-fab__items--up,
.tt-fab--top-center .tt-fab__items--down {
  right: auto;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}

.tt-fab__items--left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: row-reverse;
  padding-right: 24rpx;
}

.tt-fab__items--right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: row;
  padding-left: 24rpx;
}

/* ── 子按钮 ── */
.tt-fab__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8rpx;
  min-width: 88rpx;
  height: 88rpx;
  padding: 0 24rpx;
  border-radius: 9999rpx;
  position: relative;
  box-shadow: 0 6rpx 24rpx rgba(0, 0, 0, 0.16);
  animation: tt-fab-item-in 0.18s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.tt-fab__item-text {
  font-size: 26rpx;
  font-weight: 500;
  color: inherit;
  white-space: nowrap;
}

.tt-fab__item--primary {
  background: var(--tt-primary, #171717);
  color: var(--tt-primary-foreground, #fafafa);
}
.tt-fab__item--default {
  background: var(--tt-background, #ffffff);
  color: var(--tt-foreground, #0a0a0a);
}
.tt-fab__item--success {
  background: var(--tt-success, #22c55e);
  color: var(--tt-success-foreground, #fafafa);
}
.tt-fab__item--warning {
  background: var(--tt-warning, #f59e0b);
  color: var(--tt-warning-foreground, #fafafa);
}
.tt-fab__item--danger {
  background: var(--tt-destructive, #ef4444);
  color: var(--tt-destructive-foreground, #fafafa);
}

.tt-fab__item--pressed {
  transform: scale(0.94);
  opacity: 0.94;
}

.tt-fab__item--disabled {
  opacity: 0.5;
  pointer-events: none;
}

/* item badge */
.tt-fab__item-badge {
  position: absolute;
  top: -8rpx;
  right: -8rpx;
  min-width: 32rpx;
  height: 32rpx;
  padding: 0 8rpx;
  border-radius: 16rpx;
  background: var(--tt-destructive, #ef4444);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tt-fab__item-badge-text {
  font-size: 20rpx;
  color: #ffffff;
  line-height: 1;
}

/* 子按钮进场动画 */
@keyframes tt-fab-item-in {
  from {
    transform: scale(0.6) translateY(20rpx);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}
</style>
