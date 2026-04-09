<template>
  <tt-config-provider>
    <view class="comp-page comp-page--single">
      <DemoIcon v-if="cat === 'icon'" />
      <DemoBasic v-if="cat === 'basic'" />
      <DemoForm v-if="cat === 'form'" />
      <DemoDisplay v-if="cat === 'display'" />
      <DemoNav v-if="cat === 'nav'" />
      <DemoFeedback v-if="cat === 'feedback'" />
      <DemoLayout v-if="cat === 'layout'" />
    </view>
  </tt-config-provider>
</template>

<script setup lang="ts">
import { provide, onMounted, nextTick } from 'vue'
import { useTheme } from 'tt-ui/composables/use-theme'
import { useI18n } from '@/composables/use-i18n'
import DemoIcon from '@/components/demos/DemoIcon.vue'
import DemoBasic from '@/components/demos/DemoBasic.vue'
import DemoForm from '@/components/demos/DemoForm.vue'
import DemoDisplay from '@/components/demos/DemoDisplay.vue'
import DemoNav from '@/components/demos/DemoNav.vue'
import DemoFeedback from '@/components/demos/DemoFeedback.vue'
import DemoLayout from '@/components/demos/DemoLayout.vue'

const props = defineProps<{ cat: string; target: string }>()

const { isDark, toggleTheme } = useTheme()
const { lang, t, toggleLang } = useI18n()
provide('t', t)
provide('lang', lang)

const hash = window.location.hash
const paramStr = hash.split('?')[1] || ''
const urlParams = new URLSearchParams(paramStr)
if (urlParams.get('lang') === 'zh' && lang.value !== 'zh') toggleLang()
if (urlParams.get('theme') === 'dark' && !isDark.value) toggleTheme()

onMounted(async () => {
  await nextTick()
  await nextTick()
  setTimeout(() => {
    const el = document.getElementById(`demo-${props.target}`)
    if (el) el.classList.add('comp-page-target')
  }, 50)
})

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
.comp-page--single :deep(.demo-block) {
  display: none !important;
}
.comp-page--single :deep(.demo-block.comp-page-target) {
  display: flex !important;
}
</style>
