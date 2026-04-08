<template>
  <view class="demo">
    <view class="demo-block">
      <text class="demo-label">{{ t('loading') }}</text>
      <text class="demo-desc">{{ t('loading.desc') }}</text>
      <view class="demo-row">
        <tt-loading />
        <tt-loading text="Loading..." vertical />
      </view>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('toast') }}</text>
      <text class="demo-desc">{{ t('toast.desc') }}</text>
      <tt-button size="sm" @click="showToast = true">Show Toast</tt-button>
      <tt-toast v-model:show="showToast" message="Saved!" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('dialog') }}</text>
      <text class="demo-desc">{{ t('dialog.desc') }}</text>
      <tt-button size="sm" @click="showDlg = true">Open Dialog</tt-button>
      <tt-dialog v-model:show="showDlg" title="Confirm" message="Are you sure?" show-cancel-button />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('popup') }}</text>
      <text class="demo-desc">{{ t('popup.desc') }}</text>
      <tt-button size="sm" @click="showPopup = true">Open Popup</tt-button>
      <tt-popup v-model:show="showPopup" position="bottom">
        <view style="padding: 20px;">
          <text class="demo-hint">Popup Content</text>
        </view>
      </tt-popup>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('actionsheet') }}</text>
      <text class="demo-desc">{{ t('actionsheet.desc') }}</text>
      <tt-button size="sm" @click="showAS = true">Open ActionSheet</tt-button>
      <tt-action-sheet v-model:show="showAS" :actions="[{name:'Edit'},{name:'Delete',color:'#ef4444'}]" cancel-text="Cancel" />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('sheet') }}</text>
      <text class="demo-desc">{{ t('sheet.desc') }}</text>
      <tt-button size="sm" @click="showSheet = true">Open Sheet</tt-button>
      <tt-sheet v-model:show="showSheet" title="Sheet Title">
        <view style="padding: 16px;"><text class="demo-hint">Sheet body content</text></view>
      </tt-sheet>
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('noticebar') }}</text>
      <text class="demo-desc">{{ t('noticebar.desc') }}</text>
      <tt-notice-bar text="This is a notice bar with scrollable text." closeable />
    </view>

    <view class="demo-block">
      <text class="demo-label">{{ t('transition') }}</text>
      <text class="demo-desc">{{ t('transition.desc') }}</text>
      <tt-button size="sm" @click="showTransition = !showTransition">Toggle</tt-button>
      <tt-transition :show="showTransition" name="fade">
        <view style="padding: 12px; background: var(--tt-muted, #f5f5f5); border-radius: 8px; margin-top: 8px;">
          <text class="demo-hint">Fade transition content</text>
        </view>
      </tt-transition>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import '@/styles/demo-shared.css'
const t = inject<(key: string) => string>('t', (k) => k)

const showToast = ref(false)
const showDlg = ref(false)
const showPopup = ref(false)
const showAS = ref(false)
const showSheet = ref(false)
const showTransition = ref(true)
</script>
