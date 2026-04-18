<template>
  <view class="demo">
    <view class="demo-block" id="demo-loading" v-if="!only || only === 'loading'">
      <text class="demo-label">{{ t('loading') }}</text>
      <text class="demo-desc">{{ t('loading.desc') }}</text>
      <view class="demo-row">
        <tt-loading />
        <tt-loading text="Loading..." vertical />
      </view>
    </view>

    <view class="demo-block" id="demo-toast" v-if="!only || only === 'toast'">
      <text class="demo-label">{{ t('toast') }}</text>
      <text class="demo-desc">{{ t('toast.desc') }}</text>
      <tt-button size="sm" @click="showToast = true">Show Toast</tt-button>
      <tt-toast v-model:show="showToast" message="Saved!" />
    </view>

    <view class="demo-block" id="demo-notify" v-if="!only || only === 'notify'">
      <text class="demo-label">{{ t('notify') }}</text>
      <text class="demo-desc">{{ t('notify.desc') }}</text>
      <view class="demo-row">
        <tt-button size="sm" @click="notify.info('This is an info message')">Info</tt-button>
        <tt-button size="sm" variant="outline" @click="notify.success('Saved successfully')">Success</tt-button>
        <tt-button size="sm" variant="outline" @click="notify.warning('Please check input')">Warning</tt-button>
        <tt-button size="sm" variant="destructive" @click="notify.error('Something went wrong')">Error</tt-button>
      </view>
      <tt-notify />
    </view>

    <view class="demo-block" id="demo-dialog" v-if="!only || only === 'dialog'">
      <text class="demo-label">{{ t('dialog') }}</text>
      <text class="demo-desc">{{ t('dialog.desc') }}</text>
      <tt-button size="sm" @click="showDlg = true">Open Dialog</tt-button>
      <tt-dialog v-model:show="showDlg" title="Confirm" message="Are you sure?" show-cancel-button />
    </view>

    <view class="demo-block" id="demo-popup" v-if="!only || only === 'popup'">
      <text class="demo-label">{{ t('popup') }}</text>
      <text class="demo-desc">{{ t('popup.desc') }}</text>
      <view class="demo-row">
        <tt-button size="sm" @click="showPopup = true">Bottom</tt-button>
        <tt-button size="sm" variant="outline" @click="showPopupCenter = true">Center</tt-button>
      </view>
      <tt-popup v-model:show="showPopup" position="bottom">
        <view class="popup-content">
          <view class="popup-header">
            <text class="popup-header__title">Select Option</text>
            <text class="popup-header__close" @click="showPopup = false">×</text>
          </view>
          <tt-cell title="Option A" value="Recommended" is-link />
          <tt-cell title="Option B" is-link />
          <tt-cell title="Option C" is-link />
          <view style="padding: 24rpx;">
            <tt-button block @click="showPopup = false">Confirm</tt-button>
          </view>
        </view>
      </tt-popup>
      <tt-popup v-model:show="showPopupCenter" position="center">
        <view class="popup-center-box">
          <text class="popup-center-box__title">Centered Popup</text>
          <text class="popup-center-box__desc">This popup appears in the center of the screen with a fade animation.</text>
          <tt-button size="sm" @click="showPopupCenter = false">Got it</tt-button>
        </view>
      </tt-popup>
    </view>

    <view class="demo-block" id="demo-actionsheet" v-if="!only || only === 'actionsheet'">
      <text class="demo-label">{{ t('actionsheet') }}</text>
      <text class="demo-desc">{{ t('actionsheet.desc') }}</text>
      <tt-button size="sm" @click="showAS = true">Open ActionSheet</tt-button>
      <tt-action-sheet v-model:show="showAS" :actions="[{name:'Edit'},{name:'Delete',color:'#ef4444'}]" cancel-text="Cancel" />
    </view>

    <view class="demo-block" id="demo-sheet" v-if="!only || only === 'sheet'">
      <text class="demo-label">{{ t('sheet') }}</text>
      <text class="demo-desc">{{ t('sheet.desc') }}</text>
      <tt-button size="sm" @click="showSheet = true">Open Sheet</tt-button>
      <tt-sheet v-model:show="showSheet" title="Sheet Title">
        <view style="padding: 16px;"><text class="demo-hint">Sheet body content</text></view>
      </tt-sheet>
    </view>

    <view class="demo-block" id="demo-noticebar" v-if="!only || only === 'noticebar'">
      <text class="demo-label">{{ t('noticebar') }}</text>
      <text class="demo-desc">{{ t('noticebar.desc') }}</text>
      <tt-notice-bar text="This is a notice bar with scrollable text." closeable />
    </view>

    <view class="demo-block" id="demo-transition" v-if="!only || only === 'transition'">
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
import { notify } from 'tt-shaduni'

defineProps<{ only?: string }>()
const t = inject<(key: string) => string>('t', (k) => k)

const showToast = ref(false)
const showDlg = ref(false)
const showPopup = ref(false)
const showPopupCenter = ref(false)
const showAS = ref(false)
const showSheet = ref(false)
const showTransition = ref(true)
</script>

<style>
.popup-content {
  background: var(--tt-background, #fff);
  border-radius: 24rpx 24rpx 0 0;
}
.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28rpx 32rpx;
  border-bottom: 2rpx solid var(--tt-border, #e5e5e5);
}
.popup-header__title {
  font-size: 30rpx;
  font-weight: 600;
  color: var(--tt-foreground, #0a0a0a);
}
.popup-header__close {
  font-size: 40rpx;
  color: var(--tt-muted-foreground, #737373);
  cursor: pointer;
  line-height: 1;
}
.popup-center-box {
  width: 500rpx;
  padding: 48rpx 40rpx;
  background: var(--tt-background, #fff);
  border-radius: var(--tt-radius, 12rpx);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20rpx;
}
.popup-center-box__title {
  font-size: 32rpx;
  font-weight: 600;
  color: var(--tt-foreground, #0a0a0a);
}
.popup-center-box__desc {
  font-size: 26rpx;
  color: var(--tt-muted-foreground, #737373);
  text-align: center;
  line-height: 1.5;
}
</style>
