import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pagesDir = join(__dirname, '../src/pages/comp')

const demoFileMap = {
  icon:     { file: 'DemoIcon',     path: '@/components/demos/DemoIcon.vue' },
  basic:    { file: 'DemoBasic',    path: '@/components/demos/DemoBasic.vue' },
  form:     { file: 'DemoForm',     path: '@/components/demos/DemoForm.vue' },
  display:  { file: 'DemoDisplay',  path: '@/components/demos/DemoDisplay.vue' },
  nav:      { file: 'DemoNav',      path: '@/components/demos/DemoNav.vue' },
  feedback: { file: 'DemoFeedback', path: '@/components/demos/DemoFeedback.vue' },
  layout:   { file: 'DemoLayout',   path: '@/components/demos/DemoLayout.vue' },
}

const components = [
  { id: 'button', cat: 'basic' },
  { id: 'typography', cat: 'basic' },
  { id: 'icon', cat: 'icon' },
  { id: 'input', cat: 'form' },
  { id: 'textarea', cat: 'form' },
  { id: 'checkbox', cat: 'form' },
  { id: 'radio', cat: 'form' },
  { id: 'switch', cat: 'form' },
  { id: 'search', cat: 'form' },
  { id: 'numberbox', cat: 'form' },
  { id: 'form', cat: 'form' },
  { id: 'rate', cat: 'form' },
  { id: 'slider', cat: 'form' },
  { id: 'picker', cat: 'form' },
  { id: 'datepicker', cat: 'form' },
  { id: 'calendar', cat: 'form' },
  { id: 'upload', cat: 'form' },
  { id: 'card', cat: 'display' },
  { id: 'badge', cat: 'display' },
  { id: 'tag', cat: 'display' },
  { id: 'divider', cat: 'display' },
  { id: 'empty', cat: 'display' },
  { id: 'progress', cat: 'display' },
  { id: 'skeleton', cat: 'display' },
  { id: 'avatar', cat: 'display' },
  { id: 'image', cat: 'display' },
  { id: 'countdown', cat: 'display' },
  { id: 'swiper', cat: 'display' },
  { id: 'scrollview', cat: 'display' },
  { id: 'table', cat: 'display' },
  { id: 'descriptions', cat: 'display' },
  { id: 'list', cat: 'display' },
  { id: 'tooltip', cat: 'display' },
  { id: 'cell', cat: 'nav' },
  { id: 'tabs', cat: 'nav' },
  { id: 'navbar', cat: 'nav' },
  { id: 'tabbar', cat: 'nav' },
  { id: 'steps', cat: 'nav' },
  { id: 'sidebar', cat: 'nav' },
  { id: 'breadcrumb', cat: 'nav' },
  { id: 'pagination', cat: 'nav' },
  { id: 'dropdownmenu', cat: 'nav' },
  { id: 'swipeaction', cat: 'nav' },
  { id: 'indexbar', cat: 'nav' },
  { id: 'popup', cat: 'feedback' },
  { id: 'dialog', cat: 'feedback' },
  { id: 'toast', cat: 'feedback' },
  { id: 'actionsheet', cat: 'feedback' },
  { id: 'sheet', cat: 'feedback' },
  { id: 'noticebar', cat: 'feedback' },
  { id: 'loading', cat: 'feedback' },
  { id: 'transition', cat: 'feedback' },
  { id: 'configprovider', cat: 'layout' },
  { id: 'space', cat: 'layout' },
  { id: 'safearea', cat: 'layout' },
  { id: 'collapse', cat: 'layout' },
  { id: 'row', cat: 'layout' },
  { id: 'grid', cat: 'layout' },
  { id: 'sticky', cat: 'layout' },
]

mkdirSync(pagesDir, { recursive: true })

for (const comp of components) {
  const demo = demoFileMap[comp.cat]
  const onlyAttr = comp.cat === 'icon' ? '' : ` only="${comp.id}"`
  const content = `<template>
  <CompPageLayout>
    <${demo.file}${onlyAttr} />
  </CompPageLayout>
</template>

<script setup lang="ts">
import CompPageLayout from '@/components/CompPageLayout.vue'
import ${demo.file} from '${demo.path}'
</script>
`
  writeFileSync(join(pagesDir, `${comp.id}.vue`), content)
}

const pagesEntries = components.map(c => ({
  path: `pages/comp/${c.id}`,
  style: { navigationStyle: 'custom', navigationBarTitleText: '' }
}))

console.log('Generated', components.length, 'component pages')
console.log('\nAdd to pages.json "pages" array:\n')
console.log(JSON.stringify(pagesEntries, null, 2))
