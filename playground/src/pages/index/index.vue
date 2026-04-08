<template>
  <tt-config-provider>
    <view class="pg-root">
      <PlaygroundHeader
        :lang="lang"
        :isDark="isDark"
        @toggleLang="toggleLang"
        @toggleTheme="toggleTheme"
      />

      <CategoryNav v-model="cat" :categories="cats" />

      <view class="pg-body" :key="cat">
        <DemoIcon v-if="cat === 'icon'" />
        <DemoBasic v-if="cat === 'basic'" />
        <DemoForm v-if="cat === 'form'" />
        <DemoDisplay v-if="cat === 'display'" />
        <DemoNav v-if="cat === 'nav'" />
        <DemoFeedback v-if="cat === 'feedback'" />
        <DemoLayout v-if="cat === 'layout'" />
      </view>

      <view class="pg-footer">
        <text class="pg-footer__text">TT ShadUni · Built with UniApp + Vue 3</text>
      </view>
    </view>
  </tt-config-provider>
</template>

<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import { useTheme } from 'tt-ui/composables/use-theme'
import { useI18n } from '@/composables/use-i18n'
import PlaygroundHeader from '@/components/PlaygroundHeader.vue'
import CategoryNav from '@/components/CategoryNav.vue'
import DemoIcon from '@/components/demos/DemoIcon.vue'
import DemoBasic from '@/components/demos/DemoBasic.vue'
import DemoForm from '@/components/demos/DemoForm.vue'
import DemoDisplay from '@/components/demos/DemoDisplay.vue'
import DemoNav from '@/components/demos/DemoNav.vue'
import DemoFeedback from '@/components/demos/DemoFeedback.vue'
import DemoLayout from '@/components/demos/DemoLayout.vue'

const { isDark, toggleTheme } = useTheme()
const { lang, t, toggleLang } = useI18n()
provide('t', t)
provide('lang', lang)

const cat = ref('basic')
const cats = computed(() => [
  { key: 'icon', label: t('cat.icon') },
  { key: 'basic', label: t('cat.basic') },
  { key: 'form', label: t('cat.form') },
  { key: 'display', label: t('cat.display') },
  { key: 'nav', label: t('cat.nav') },
  { key: 'feedback', label: t('cat.feedback') },
  { key: 'layout', label: t('cat.layout') },
])
</script>

<style>
.pg-root {
  min-height: 100vh;
  background: var(--tt-background, #fff);
  transition: background .3s;
  -webkit-font-smoothing: antialiased;
}
.pg-body {
  padding: 0 32rpx 48rpx;
  animation: pgFadeIn .25s ease;
}
@keyframes pgFadeIn {
  from { opacity: 0; transform: translateY(6rpx); }
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .pg-body { animation: none; }
}
.pg-footer {
  padding: 32rpx 0 48rpx;
  text-align: center;
}
.pg-footer__text {
  font-size: 20rpx;
  color: var(--tt-muted-foreground, #a3a3a3);
}
</style>
