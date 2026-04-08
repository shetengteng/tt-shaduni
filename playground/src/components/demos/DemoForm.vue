<template>
  <view class="demo">
    <view class="demo-block">
      <text class="demo-label">Input</text>
      <tt-input v-model="inputVal" placeholder="Type something..." />
      <tt-input v-model="inputVal2" placeholder="Clearable" clearable />
      <tt-input v-model="pwdVal" type="password" placeholder="Password" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Textarea</text>
      <tt-textarea v-model="textVal" placeholder="Enter text..." />
      <tt-textarea v-model="textVal" :maxlength="200" show-count />
    </view>

    <view class="demo-block">
      <text class="demo-label">Checkbox & Radio</text>
      <tt-checkbox v-model="c1" label="Option A" />
      <tt-checkbox v-model="c2" label="Option B" />
      <tt-divider />
      <tt-radio v-model="r1" label="Choice A" />
      <tt-radio v-model="r2" label="Choice B" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Switch</text>
      <view class="demo-row">
        <tt-switch v-model="sw" />
        <text class="demo-hint">{{ sw ? 'ON' : 'OFF' }}</text>
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">Search</text>
      <tt-search v-model="searchVal" placeholder="Search..." show-cancel @cancel="searchVal = ''" />
    </view>

    <view class="demo-block">
      <text class="demo-label">NumberBox</text>
      <view class="demo-row">
        <tt-number-box v-model="num" :min="0" :max="20" />
        <text class="demo-hint">{{ num }}</text>
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">Rate</text>
      <tt-rate v-model="rate" />
      <text class="demo-hint">Score: {{ rate }}</text>
    </view>

    <view class="demo-block">
      <text class="demo-label">Slider</text>
      <tt-slider v-model="slider" />
      <text class="demo-hint">Value: {{ slider }}</text>
    </view>

    <view class="demo-block">
      <text class="demo-label">Form</text>
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
import { ref } from 'vue'

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
const fname = ref('')
const femail = ref('')
</script>

<style>
.form-row { display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px; }
.form-lbl { font-size: 13px; font-weight: 600; color: var(--tt-foreground, #0a0a0a); }
</style>
