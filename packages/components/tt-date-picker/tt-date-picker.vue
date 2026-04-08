<template>
  <view v-if="show" class="tt-date-picker">
    <view class="tt-date-picker__toolbar">
      <text class="tt-date-picker__cancel" @click="$emit('update:show', false)">Cancel</text>
      <text class="tt-date-picker__title">{{ title }}</text>
      <text class="tt-date-picker__confirm" @click="onConfirm">Confirm</text>
    </view>
    <view class="tt-date-picker__body">
      <picker-view class="tt-date-picker__view" :value="pickerVal" @change="onChange">
        <picker-view-column>
          <view v-for="y in years" :key="y" class="tt-date-picker__item"><text>{{ y }}</text></view>
        </picker-view-column>
        <picker-view-column>
          <view v-for="m in 12" :key="m" class="tt-date-picker__item"><text>{{ pad(m) }}</text></view>
        </picker-view-column>
        <picker-view-column>
          <view v-for="d in days" :key="d" class="tt-date-picker__item"><text>{{ pad(d) }}</text></view>
        </picker-view-column>
      </picker-view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { datePickerProps } from './props'

const props = defineProps(datePickerProps)
const emit = defineEmits(['update:modelValue', 'update:show', 'confirm'])

const now = new Date()
const selectedYear = ref(now.getFullYear())
const selectedMonth = ref(now.getMonth() + 1)
const selectedDay = ref(now.getDate())
const pickerVal = ref([selectedYear.value - 2020, selectedMonth.value - 1, selectedDay.value - 1])

const years = computed(() => { const arr = []; for (let y = 2020; y <= 2030; y++) arr.push(y); return arr })
const days = computed(() => new Date(selectedYear.value, selectedMonth.value, 0).getDate())

function pad(n: number) { return n < 10 ? `0${n}` : `${n}` }

function onChange(e: any) {
  const v = e.detail.value
  selectedYear.value = 2020 + v[0]
  selectedMonth.value = v[1] + 1
  selectedDay.value = v[2] + 1
  pickerVal.value = v
}

function onConfirm() {
  const val = `${selectedYear.value}-${pad(selectedMonth.value)}-${pad(selectedDay.value)}`
  emit('update:modelValue', val)
  emit('confirm', val)
  emit('update:show', false)
}
</script>

<style>
.tt-date-picker { background: var(--tt-background, #fff); border-radius: var(--tt-radius, 12rpx) var(--tt-radius, 12rpx) 0 0; }
.tt-date-picker__toolbar { display: flex; align-items: center; justify-content: space-between; height: 88rpx; padding: 0 32rpx; border-bottom: 2rpx solid var(--tt-border, #e5e5e5); }
.tt-date-picker__cancel { font-size: 28rpx; color: var(--tt-muted-foreground, #737373); }
.tt-date-picker__title { font-size: 30rpx; font-weight: 600; }
.tt-date-picker__confirm { font-size: 28rpx; color: var(--tt-primary, #171717); font-weight: 500; }
.tt-date-picker__view { height: 440rpx; }
.tt-date-picker__body { padding: 0 32rpx; }
.tt-date-picker__item { display: flex; align-items: center; justify-content: center; height: 88rpx; font-size: 28rpx; }
</style>
