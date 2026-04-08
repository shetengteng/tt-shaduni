<template>
  <view class="demo">
    <view class="demo-block">
      <text class="demo-label">Loading</text>
      <view class="demo-row">
        <tt-loading />
        <tt-loading text="Loading..." />
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">Toast</text>
      <view class="demo-row">
        <tt-button size="sm" @click="toast = true">Toast</tt-button>
        <tt-button size="sm" variant="outline" @click="sToast = true">Success</tt-button>
      </view>
      <tt-toast :show="toast" message="Hello toast" @update:show="toast = $event" />
      <tt-toast :show="sToast" type="success" message="Done!" @update:show="sToast = $event" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Dialog</text>
      <view class="demo-row">
        <tt-button size="sm" @click="dlg = true">Confirm</tt-button>
        <tt-button size="sm" variant="outline" @click="alert = true">Alert</tt-button>
      </view>
      <tt-dialog v-model:show="dlg" title="Confirm" message="Proceed?" />
      <tt-dialog v-model:show="alert" title="Notice" message="Alert" :show-cancel-button="false" confirm-text="OK" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Popup</text>
      <view class="demo-row">
        <tt-button size="sm" variant="outline" @click="pPos='center';popup=true">Center</tt-button>
        <tt-button size="sm" variant="outline" @click="pPos='bottom';popup=true">Bottom</tt-button>
        <tt-button size="sm" variant="outline" @click="pPos='top';popup=true">Top</tt-button>
      </view>
      <tt-popup v-model:show="popup" :position="pPos" closeable round>
        <view style="padding: 36px 20px; text-align: center;">{{ pPos }}</view>
      </tt-popup>
    </view>

    <view class="demo-block">
      <text class="demo-label">ActionSheet</text>
      <tt-button size="sm" @click="as = true">Show</tt-button>
      <tt-action-sheet v-model:show="as" :actions="asActs" />
    </view>

    <view class="demo-block">
      <text class="demo-label">Sheet</text>
      <tt-button size="sm" @click="sheet = true">Open</tt-button>
      <tt-sheet v-model:show="sheet" title="Sheet">
        <text class="demo-hint">Sheet content</text>
      </tt-sheet>
    </view>

    <view class="demo-block">
      <text class="demo-label">NoticeBar</text>
      <tt-notice-bar text="Notification message." closeable />
    </view>

    <view class="demo-block">
      <text class="demo-label">Transition</text>
      <tt-button size="sm" @click="trans = !trans">Toggle</tt-button>
      <tt-transition :show="trans" name="fade">
        <view style="padding: 14px; background: var(--tt-muted, #f5f5f5); border-radius: 8px; margin-top: 8px;">
          <text class="demo-hint">Fade content</text>
        </view>
      </tt-transition>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const toast = ref(false)
const sToast = ref(false)
const dlg = ref(false)
const alert = ref(false)
const popup = ref(false)
const pPos = ref<'center' | 'top' | 'bottom'>('center')
const as = ref(false)
const asActs = [{ name: 'Edit' }, { name: 'Delete', color: '#ef4444' }, { name: 'Disabled', disabled: true }]
const sheet = ref(false)
const trans = ref(true)
</script>
