<template>
  <tt-config-provider>
    <view class="page">
      <!-- Header -->
      <view class="hd">
        <text class="hd-title">TT ShadUni</text>
        <view class="hd-actions">
          <view class="hd-btn" @click="toggleLang">
            <text class="hd-btn-text">{{ lang === 'en' ? '中' : 'En' }}</text>
          </view>
          <view class="hd-btn" @click="toggleTheme">
            <text v-if="isDark" class="hd-icon">&#x2600;</text>
            <text v-else class="hd-icon">&#x263E;</text>
          </view>
        </view>
      </view>

      <!-- Category Pills -->
      <scroll-view scroll-x class="pills-wrap" :show-scrollbar="false">
        <view class="pills">
          <view
            v-for="c in cats"
            :key="c.key"
            class="pill"
            :class="{ active: cat === c.key }"
            @click="cat = c.key"
          >
            <text class="pill-text">{{ c.label }}</text>
          </view>
        </view>
      </scroll-view>

      <!-- Content -->
      <view class="content" :key="cat">
        <DemoBasic v-if="cat === 'basic'" />
        <DemoForm v-if="cat === 'form'" />
        <DemoDisplay v-if="cat === 'display'" />
        <DemoNav v-if="cat === 'nav'" />
        <DemoFeedback v-if="cat === 'feedback'" />
        <DemoLayout v-if="cat === 'layout'" />
      </view>
    </view>
  </tt-config-provider>
</template>

<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import { useTheme } from 'tt-ui/composables/use-theme'
import { useI18n } from '@/composables/use-i18n'
import DemoBasic from '@/components/demos/DemoBasic.vue'
import DemoForm from '@/components/demos/DemoForm.vue'
import DemoDisplay from '@/components/demos/DemoDisplay.vue'
import DemoNav from '@/components/demos/DemoNav.vue'
import DemoFeedback from '@/components/demos/DemoFeedback.vue'
import DemoLayout from '@/components/demos/DemoLayout.vue'

const { isDark, toggleTheme } = useTheme()
const { lang, t, toggleLang } = useI18n()
provide('t', t)

const cat = ref('basic')
const cats = computed(() => [
  { key: 'basic', label: t('cat.basic') },
  { key: 'form', label: t('cat.form') },
  { key: 'display', label: t('cat.display') },
  { key: 'nav', label: t('cat.nav') },
  { key: 'feedback', label: t('cat.feedback') },
  { key: 'layout', label: t('cat.layout') },
])
</script>

<style>
.page {
  min-height: 100vh;
  background: var(--tt-background, #fff);
  transition: background .3s;
  -webkit-font-smoothing: antialiased;
}

/* Header */
.hd {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 12px;
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--tt-background, #fff);
  transition: background .3s;
}
.hd-title {
  font-size: 20px;
  font-weight: 800;
  color: var(--tt-foreground, #0a0a0a);
  letter-spacing: -.6px;
}
.hd-actions { display: flex; gap: 8px; }
.hd-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--tt-border, #e5e5e5);
  background: var(--tt-background, #fff);
  cursor: pointer;
  transition: background .2s, border-color .2s;
}
.hd-btn:active { background: var(--tt-muted, #f5f5f5); }
.hd-btn-text { font-size: 14px; font-weight: 600; color: var(--tt-foreground, #0a0a0a); }
.hd-icon { font-size: 18px; }

/* Pills */
.pills-wrap {
  position: sticky;
  top: 72px;
  z-index: 15;
  background: var(--tt-background, #fff);
  transition: background .3s;
  white-space: nowrap;
}
.pills {
  display: flex;
  gap: 8px;
  padding: 0 20px 12px;
}
.pill {
  flex-shrink: 0;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid var(--tt-border, #e5e5e5);
  background: transparent;
  cursor: pointer;
  transition: all .2s;
}
.pill.active {
  background: var(--tt-foreground, #0a0a0a);
  border-color: var(--tt-foreground, #0a0a0a);
}
.pill-text {
  font-size: 13px;
  font-weight: 500;
  color: var(--tt-muted-foreground, #737373);
  transition: color .2s;
}
.pill.active .pill-text {
  color: var(--tt-background, #fff);
}

/* Content */
.content {
  padding: 0 20px 32px;
  animation: fadeIn .3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .content { animation: none; }
}

/* Shared demo styles */
.demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--tt-border, #e5e5e5);
  background: var(--tt-card, var(--tt-background, #fff));
  transition: border-color .2s;
}
.demo-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--tt-foreground, #0a0a0a);
  letter-spacing: -.2px;
  margin-bottom: 2px;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}
.demo-desc {
  font-size: 12px;
  color: var(--tt-muted-foreground, #737373);
  line-height: 1.4;
  margin-bottom: 4px;
}
.demo-hint {
  font-size: 13px;
  color: var(--tt-muted-foreground, #737373);
  line-height: 1.5;
}
</style>
