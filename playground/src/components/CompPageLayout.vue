<template>
  <tt-config-provider>
    <view class="comp-page">
      <slot />
    </view>
  </tt-config-provider>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { useTheme } from 'tt-ui/composables/use-theme'
import { useI18n } from '@/composables/use-i18n'

const { isDark, toggleTheme } = useTheme()
const { lang, t, toggleLang } = useI18n()
provide('t', t)
provide('lang', lang)

const hash = window.location.hash
const paramStr = hash.split('?')[1] || ''
const urlParams = new URLSearchParams(paramStr)
if (urlParams.get('lang') === 'zh' && lang.value !== 'zh') toggleLang()
if (urlParams.get('theme') === 'dark' && !isDark.value) toggleTheme()

window.addEventListener('message', (e) => {
  if (!e.data || typeof e.data !== 'object') return
  if (e.data.type === 'setTheme' && e.data.dark !== isDark.value) toggleTheme()
  if (e.data.type === 'setLang' && e.data.lang !== lang.value) toggleLang()
})
</script>

<style>
.comp-page {
  min-height: 100vh;
  background: var(--tt-background, #fff);
  padding: 12px;
  box-sizing: border-box;
}
</style>
