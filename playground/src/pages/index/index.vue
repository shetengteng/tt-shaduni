<template>
  <tt-config-provider>
    <view class="page">
      <view class="header">
        <text class="header-title">TT ShadUni</text>
        <view class="theme-toggle" @click="toggleTheme">
          <text v-if="isDark" class="toggle-icon">☀️</text>
          <text v-else class="toggle-icon">🌙</text>
        </view>
      </view>

      <tt-tabs v-model="activeTab" :items="tabs" />

      <!-- Button -->
      <view v-if="activeTab === 'button'" class="demo-section">
        <tt-card title="Variants">
          <view class="demo-row">
            <tt-button variant="default">Default</tt-button>
            <tt-button variant="secondary">Secondary</tt-button>
            <tt-button variant="destructive">Destructive</tt-button>
          </view>
          <view class="demo-row">
            <tt-button variant="outline">Outline</tt-button>
            <tt-button variant="ghost">Ghost</tt-button>
            <tt-button variant="link">Link</tt-button>
          </view>
        </tt-card>
        <tt-card title="Sizes" description="sm / md / lg">
          <view class="demo-row">
            <tt-button size="sm">Small</tt-button>
            <tt-button size="md">Medium</tt-button>
            <tt-button size="lg">Large</tt-button>
          </view>
        </tt-card>
        <tt-card title="States">
          <view class="demo-row">
            <tt-button disabled>Disabled</tt-button>
            <tt-button loading>Loading</tt-button>
          </view>
          <view class="demo-row">
            <tt-button block>Block Button</tt-button>
          </view>
        </tt-card>
      </view>

      <!-- Input -->
      <view v-if="activeTab === 'input'" class="demo-section">
        <tt-card title="Basic Input">
          <tt-input v-model="inputVal" placeholder="Type something..." />
        </tt-card>
        <tt-card title="Clearable">
          <tt-input v-model="inputVal2" placeholder="Clearable input" clearable />
        </tt-card>
        <tt-card title="Disabled">
          <tt-input model-value="Disabled text" disabled />
        </tt-card>
        <tt-card title="Password">
          <tt-input v-model="passwordVal" type="password" placeholder="Enter password" />
        </tt-card>
      </view>

      <!-- Card -->
      <view v-if="activeTab === 'card'" class="demo-section">
        <tt-card title="Card Title" description="This is a card description">
          <text class="demo-text">Card content goes here. Cards are versatile containers for grouping related content.</text>
        </tt-card>
        <tt-card title="With Footer" description="Card with action footer">
          <text class="demo-text">Content area</text>
          <template #footer>
            <tt-button variant="outline" size="sm">Cancel</tt-button>
            <tt-button size="sm">Save</tt-button>
          </template>
        </tt-card>
        <tt-card shadow="never">
          <text class="demo-text">Card without shadow (shadow="never")</text>
        </tt-card>
      </view>

      <!-- Dialog -->
      <view v-if="activeTab === 'dialog'" class="demo-section">
        <tt-card title="Dialog">
          <view class="demo-row">
            <tt-button @click="showDialog = true">Open Dialog</tt-button>
            <tt-button variant="outline" @click="showAlert = true">Alert</tt-button>
          </view>
        </tt-card>
        <tt-card title="Popup Positions">
          <view class="demo-row">
            <tt-button variant="outline" size="sm" @click="popupPos = 'center'; showPopup = true">Center</tt-button>
            <tt-button variant="outline" size="sm" @click="popupPos = 'bottom'; showPopup = true">Bottom</tt-button>
            <tt-button variant="outline" size="sm" @click="popupPos = 'top'; showPopup = true">Top</tt-button>
          </view>
        </tt-card>

        <tt-dialog
          v-model:show="showDialog"
          title="Confirm Action"
          message="Are you sure you want to proceed?"
          @confirm="handleConfirm"
        />
        <tt-dialog
          v-model:show="showAlert"
          title="Notice"
          message="This is an alert dialog."
          :show-cancel-button="false"
          confirm-text="OK"
        />
        <tt-popup v-model:show="showPopup" :position="popupPos" closeable round>
          <view class="popup-content">
            <text class="demo-text">Popup Content ({{ popupPos }})</text>
          </view>
        </tt-popup>
      </view>

      <!-- Navbar -->
      <view v-if="activeTab === 'navbar'" class="demo-section">
        <tt-card title="Navbar Variants">
          <tt-navbar title="Page Title" left-arrow left-text="Back" />
          <view style="height: 8px;" />
          <tt-navbar title="No Border" :border="false">
            <template #right>
              <text class="nav-action">Save</text>
            </template>
          </tt-navbar>
        </tt-card>
      </view>

      <!-- Tabs -->
      <view v-if="activeTab === 'tabs'" class="demo-section">
        <tt-card title="Tabs Demo">
          <tt-tabs v-model="demoTab" :items="demoTabs" />
          <view class="tab-content">
            <text class="demo-text">Active tab: {{ demoTab }}</text>
          </view>
        </tt-card>
      </view>

      <!-- Theme -->
      <view v-if="activeTab === 'theme'" class="demo-section">
        <tt-card title="Theme System" description="shadcn-style CSS Variables">
          <view class="theme-demo">
            <view class="color-row">
              <view class="color-swatch" style="background: var(--tt-primary, #171717);" />
              <text class="color-label">Primary</text>
            </view>
            <view class="color-row">
              <view class="color-swatch" style="background: var(--tt-secondary, #f5f5f5);" />
              <text class="color-label">Secondary</text>
            </view>
            <view class="color-row">
              <view class="color-swatch" style="background: var(--tt-destructive, #ef4444);" />
              <text class="color-label">Destructive</text>
            </view>
            <view class="color-row">
              <view class="color-swatch" style="background: var(--tt-muted, #f5f5f5);" />
              <text class="color-label">Muted</text>
            </view>
            <view class="color-row">
              <view class="color-swatch" style="background: var(--tt-accent, #f5f5f5);" />
              <text class="color-label">Accent</text>
            </view>
          </view>
        </tt-card>
        <tt-card title="Toggle Theme">
          <view class="theme-card-inner">
            <text class="theme-mode">{{ isDark ? 'Dark Mode' : 'Light Mode' }}</text>
            <view class="theme-indicator" :class="{ 'theme-indicator--dark': isDark }" @click="toggleTheme">
              <view class="theme-dot" :class="{ 'theme-dot--dark': isDark }" />
            </view>
          </view>
        </tt-card>
      </view>
    </view>
  </tt-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'tt-ui/composables/use-theme'

const { isDark, toggleTheme } = useTheme()

const activeTab = ref('button')
const tabs = [
  { label: 'Button', value: 'button' },
  { label: 'Input', value: 'input' },
  { label: 'Card', value: 'card' },
  { label: 'Dialog', value: 'dialog' },
  { label: 'Navbar', value: 'navbar' },
  { label: 'Tabs', value: 'tabs' },
  { label: 'Theme', value: 'theme' },
]

const inputVal = ref('')
const inputVal2 = ref('Hello')
const passwordVal = ref('')

const showDialog = ref(false)
const showAlert = ref(false)
const showPopup = ref(false)
const popupPos = ref<'center' | 'top' | 'bottom'>('center')

const demoTab = ref('tab1')
const demoTabs = [
  { label: 'Tab 1', value: 'tab1' },
  { label: 'Tab 2', value: 'tab2' },
  { label: 'Disabled', value: 'tab3', disabled: true },
]

function handleConfirm() {
  uni.showToast({ title: 'Confirmed!', icon: 'none' })
}
</script>

<style>
.page {
  padding: 0 16px 16px;
  min-height: 100vh;
  background-color: var(--tt-background, #ffffff);
  transition: background-color 0.3s;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
}

.header-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--tt-foreground, #0a0a0a);
  letter-spacing: -0.5px;
}

.theme-toggle {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--tt-radius, 6px);
  border: 1px solid var(--tt-border, #e5e5e5);
  background-color: var(--tt-background, #ffffff);
  cursor: pointer;
}

.toggle-icon {
  font-size: 18px;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
}

.demo-row:last-child {
  margin-bottom: 0;
}

.demo-text {
  font-size: 14px;
  color: var(--tt-foreground, #0a0a0a);
  line-height: 1.6;
}

.popup-content {
  padding: 40px 24px;
  text-align: center;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-action {
  font-size: 14px;
  color: var(--tt-primary, #171717);
  font-weight: 500;
}

.tab-content {
  padding: 12px 0;
}

.theme-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.color-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.color-swatch {
  width: 32px;
  height: 32px;
  border-radius: var(--tt-radius, 6px);
  border: 1px solid var(--tt-border, #e5e5e5);
  flex-shrink: 0;
}

.color-label {
  font-size: 13px;
  color: var(--tt-foreground, #0a0a0a);
}

.theme-card-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.theme-mode {
  font-size: 15px;
  font-weight: 600;
  color: var(--tt-foreground, #0a0a0a);
}

.theme-indicator {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background-color: var(--tt-muted, #f5f5f5);
  position: relative;
  transition: background-color 0.3s;
  cursor: pointer;
}

.theme-indicator--dark {
  background-color: var(--tt-primary, #fafafa);
}

.theme-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--tt-background, #ffffff);
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 0.3s, background-color 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.theme-dot--dark {
  transform: translateX(20px);
  background-color: var(--tt-primary-foreground, #0a0a0a);
}
</style>
