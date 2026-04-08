<template>
  <view class="demo">
    <view class="demo-block">
      <text class="demo-label">{{ t('input') }}</text>
      <text class="demo-desc">{{ t('input.desc') }}</text>
      <tt-input v-model="inputVal" placeholder="Type something..." />
      <tt-input v-model="inputVal2" placeholder="Clearable" clearable />
      <tt-input v-model="pwdVal" type="password" placeholder="Password" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('textarea') }}</text>
      <text class="demo-desc">{{ t('textarea.desc') }}</text>
      <tt-textarea v-model="textVal" placeholder="Enter text..." />
      <tt-textarea v-model="textVal" :maxlength="200" show-count />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('checkbox_radio') }}</text>
      <text class="demo-desc">{{ t('checkbox_radio.desc') }}</text>
      <tt-checkbox v-model="c1" label="Option A" />
      <tt-checkbox v-model="c2" label="Option B" />
      <tt-divider />
      <tt-radio v-model="r1" label="Choice A" />
      <tt-radio v-model="r2" label="Choice B" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('switch') }}</text>
      <text class="demo-desc">{{ t('switch.desc') }}</text>
      <view class="demo-row">
        <tt-switch v-model="sw" />
        <text class="demo-hint">{{ sw ? 'ON' : 'OFF' }}</text>
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('search') }}</text>
      <text class="demo-desc">{{ t('search.desc') }}</text>
      <tt-search v-model="searchVal" placeholder="Search..." show-cancel @cancel="searchVal = ''" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('numberbox') }}</text>
      <text class="demo-desc">{{ t('numberbox.desc') }}</text>
      <view class="demo-row">
        <tt-number-box v-model="num" :min="0" :max="20" />
        <text class="demo-hint">{{ num }}</text>
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('rate') }}</text>
      <text class="demo-desc">{{ t('rate.desc') }}</text>
      <tt-rate v-model="rate" />
      <text class="demo-hint">Score: {{ rate }}</text>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('slider') }}</text>
      <text class="demo-desc">{{ t('slider.desc') }}</text>
      <tt-slider v-model="slider" />
      <text class="demo-hint">Value: {{ slider }}</text>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('picker') }}</text>
      <text class="demo-desc">{{ t('picker.desc') }}</text>
      <tt-button size="sm" @click="showPicker = true">Open Picker</tt-button>
      <tt-picker v-model:show="showPicker" :columns="pickerCols" title="Select" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('datepicker') }}</text>
      <text class="demo-desc">{{ t('datepicker.desc') }}</text>
      <tt-button size="sm" @click="showDate = true">{{ dateVal || 'Select Date' }}</tt-button>
      <tt-date-picker v-model="dateVal" v-model:show="showDate" title="Select Date" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('upload') }}</text>
      <text class="demo-desc">{{ t('upload.desc') }}</text>
      <tt-upload v-model:file-list="files" :max-count="6" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('form') }}</text>
      <text class="demo-desc">{{ t('form.desc') }}</text>
      <tt-form>
        <view class="form-row">
          <text class="form-lbl">Name</text>
          <tt-input v-model="fname" placeholder="Your name" />
        </view>
        <view class="form-row">
          <text class="form-lbl">Email</text>
          <tt-input v-model="femail" placeholder="Email" />
        </view>
        <tt-button block>Submit</tt-button>
      </tt-form>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
const t = inject<(key: string) => string>('t', (k) => k)

const inputVal = ref('')
const inputVal2 = ref('Hello')
const pwdVal = ref('')
const textVal = ref('')
const c1 = ref(true)
const c2 = ref(false)
const r1 = ref(true)
const r2 = ref(false)
const sw = ref(true)
const searchVal = ref('')
const num = ref(3)
const rate = ref(3)
const slider = ref(40)
const showPicker = ref(false)
const pickerCols = [{ text: 'A', value: 'a' }, { text: 'B', value: 'b' }, { text: 'C', value: 'c' }]
const showDate = ref(false)
const dateVal = ref('')
const files = ref<Array<{ url: string }>>([])
const fname = ref('')
const femail = ref('')
</script>

<style>
.form-row { display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px; }
.form-lbl { font-size: 13px; font-weight: 600; color: var(--tt-foreground, #0a0a0a); }
</style>
