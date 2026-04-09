<template>
  <tt-config-provider>
    <view class="embed-root" :class="{ 'embed-root--single': !!targetId }">
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
import { ref, provide, onMounted, nextTick } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useTheme } from 'tt-ui/composables/use-theme'
import { useI18n } from '@/composables/use-i18n'
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
const targetId = ref('')

onLoad((query) => {
  if (query?.cat) cat.value = query.cat
  if (query?.id) targetId.value = query.id
  if (query?.lang === 'zh' && lang.value !== 'zh') toggleLang()
  if (query?.theme === 'dark' && !isDark.value) toggleTheme()
})

onMounted(async () => {
  await nextTick()
  await nextTick()
  if (targetId.value) {
    setTimeout(() => {
      const target = document.getElementById(`demo-${targetId.value}`)
      if (!target) return
      target.classList.add('embed-target')
    }, 50)
  }
})

window.addEventListener('message', (e) => {
  if (!e.data || typeof e.data !== 'object') return
  if (e.data.type === 'setTheme') {
    const wantDark = e.data.dark
    if (wantDark !== isDark.value) toggleTheme()
  }
  if (e.data.type === 'setLang') {
    if (e.data.lang !== lang.value) toggleLang()
  }
})
</script>

<style>
.embed-root {
  min-height: 100vh;
  background: var(--tt-background, #fff);
  padding: 12px;
  box-sizing: border-box;
}
.embed-root--single :deep(.demo-block) {
  display: none !important;
}
.embed-root--single :deep(.demo-block.embed-target) {
  display: flex !important;
}
</style>
