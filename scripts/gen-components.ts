/**
 * Component scaffold generator — generates props.ts, index.ts, and .vue for each component.
 * Run: npx ts-node scripts/gen-components.ts
 */
import * as fs from 'fs'
import * as path from 'path'

interface CompDef {
  name: string        // kebab: tt-button
  pascal: string      // TtButton
  props: Array<[string, string, string, string]> // [name, type, tsType, default]
  emits?: string[]
  template: string
  style: string
  scriptExtra?: string
  slots?: string[]
}

const BASE = path.resolve(__dirname, '../packages/components')

function kebabToCamel(s: string) {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

function genPropsFile(c: CompDef): string {
  const imports: string[] = ["import type { ExtractPropTypes, PropType } from 'vue'"]
  const propLines = c.props.map(([name, type, tsType, def]) => {
    return `  ${name}: {\n    type: ${type},\n    default: ${def},\n  },`
  }).join('\n')

  const camelName = kebabToCamel(c.name.replace('tt-', '')) + 'Props'
  return `${imports.join('\n')}\n\nexport const ${camelName} = {\n${propLines}\n} as const\n\nexport type ${c.pascal}Props = ExtractPropTypes<typeof ${camelName}>\n`
}

function genIndexFile(c: CompDef): string {
  const camelName = kebabToCamel(c.name.replace('tt-', '')) + 'Props'
  return `export { default as ${c.pascal} } from './${c.name}.vue'\nexport { ${camelName} } from './props'\nexport type { ${c.pascal}Props } from './props'\n`
}

function genVueFile(c: CompDef): string {
  const camelName = kebabToCamel(c.name.replace('tt-', '')) + 'Props'
  const emitStr = c.emits?.length
    ? `\nconst emit = defineEmits<{\n${c.emits.map(e => `  (e: '${e}'${e.startsWith('update:') ? ', value: any' : ''}): void`).join('\n')}\n}>()\n`
    : ''
  return `<template>\n${c.template}\n</template>\n\n<script setup lang="ts">\n${c.scriptExtra || ''}import { ${camelName} } from './props'\n\ndefineProps(${camelName})${emitStr}\n</script>\n\n<style>\n${c.style}\n</style>\n`
}

function writeComp(c: CompDef) {
  const dir = path.join(BASE, c.name)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'props.ts'), genPropsFile(c))
  fs.writeFileSync(path.join(dir, 'index.ts'), genIndexFile(c))
  fs.writeFileSync(path.join(dir, `${c.name}.vue`), genVueFile(c))
  console.log(`✓ ${c.pascal}`)
}

// ============================================================
// Component Definitions
// ============================================================

const components: CompDef[] = [
  // --- Phase 2 remaining ---
  {
    name: 'tt-toast', pascal: 'TtToast',
    props: [
      ['message', 'String', 'string', "''"],
      ['type', "String as PropType<'text' | 'success' | 'fail' | 'loading'>", 'string', "'text'"],
      ['duration', 'Number', 'number', '2000'],
      ['show', 'Boolean', 'boolean', 'false'],
    ],
    emits: ['update:show'],
    template: `  <view v-if="show" class="tt-toast">\n    <view class="tt-toast__content">\n      <view v-if="type === 'loading'" class="tt-toast__icon"><view class="tt-toast__spinner" /></view>\n      <view v-else-if="type === 'success'" class="tt-toast__icon"><text>✓</text></view>\n      <view v-else-if="type === 'fail'" class="tt-toast__icon"><text>✕</text></view>\n      <text class="tt-toast__text">{{ message }}</text>\n    </view>\n  </view>`,
    style: `.tt-toast { position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; z-index: 2000; pointer-events: none; }\n.tt-toast__content { background: var(--tt-foreground, #0a0a0a); color: var(--tt-background, #ffffff); padding: 12px 24px; border-radius: calc(var(--tt-radius, 6px) + 2px); display: flex; flex-direction: column; align-items: center; gap: 8px; max-width: 200px; }\n.tt-toast__icon { font-size: 28px; }\n.tt-toast__spinner { width: 24px; height: 24px; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: tt-spin 0.6s linear infinite; }\n.tt-toast__text { font-size: 14px; text-align: center; line-height: 1.4; }\n@keyframes tt-spin { to { transform: rotate(360deg); } }`,
  },
  {
    name: 'tt-form', pascal: 'TtForm',
    props: [
      ['model', 'Object', 'Record<string, any>', '() => ({})'],
      ['rules', 'Object', 'Record<string, any>', '() => ({})'],
      ['labelWidth', 'String', 'string', "'80px'"],
    ],
    template: `  <view class="tt-form">\n    <slot />\n  </view>`,
    style: `.tt-form { width: 100%; }`,
  },
  {
    name: 'tt-form-item', pascal: 'TtFormItem',
    props: [
      ['label', 'String', 'string', "''"],
      ['prop', 'String', 'string', "''"],
      ['required', 'Boolean', 'boolean', 'false'],
    ],
    template: `  <view class="tt-form-item">\n    <view class="tt-form-item__label">\n      <text v-if="required" class="tt-form-item__required">*</text>\n      <text>{{ label }}</text>\n    </view>\n    <view class="tt-form-item__content"><slot /></view>\n  </view>`,
    style: `.tt-form-item { display: flex; align-items: flex-start; margin-bottom: 16px; }\n.tt-form-item__label { width: 80px; font-size: 14px; color: var(--tt-foreground, #0a0a0a); padding-top: 10px; flex-shrink: 0; }\n.tt-form-item__required { color: var(--tt-destructive, #ef4444); margin-right: 2px; }\n.tt-form-item__content { flex: 1; }`,
  },

  // --- Phase 3: P0 ---
  {
    name: 'tt-image', pascal: 'TtImage',
    props: [
      ['src', 'String', 'string', "''"],
      ['mode', 'String', 'string', "'aspectFill'"],
      ['width', 'String', 'string', "'100%'"],
      ['height', 'String', 'string', "'auto'"],
      ['radius', 'String', 'string', "'0'"],
      ['lazyLoad', 'Boolean', 'boolean', 'true'],
    ],
    template: `  <view class="tt-image" :style="{ width, height, borderRadius: radius }">\n    <image class="tt-image__img" :src="src" :mode="mode" :lazy-load="lazyLoad" />\n  </view>`,
    style: `.tt-image { overflow: hidden; display: inline-block; }\n.tt-image__img { width: 100%; height: 100%; display: block; }`,
  },
  {
    name: 'tt-space', pascal: 'TtSpace',
    props: [
      ['direction', "String as PropType<'horizontal' | 'vertical'>", 'string', "'horizontal'"],
      ['size', '[String, Number]', 'string | number', '8'],
      ['wrap', 'Boolean', 'boolean', 'false'],
      ['align', "String as PropType<'start' | 'center' | 'end' | 'baseline'>", 'string', "'start'"],
    ],
    template: `  <view class="tt-space" :class="['tt-space--' + direction, { 'tt-space--wrap': wrap }]" :style="spaceStyle">\n    <slot />\n  </view>`,
    scriptExtra: `import { computed } from 'vue'\n`,
    style: `.tt-space { display: flex; }\n.tt-space--horizontal { flex-direction: row; }\n.tt-space--vertical { flex-direction: column; }\n.tt-space--wrap { flex-wrap: wrap; }`,
  },
  {
    name: 'tt-safe-area', pascal: 'TtSafeArea',
    props: [
      ['position', "String as PropType<'top' | 'bottom'>", 'string', "'bottom'"],
    ],
    template: `  <view class="tt-safe-area" :class="'tt-safe-area--' + position" />`,
    style: `.tt-safe-area--top { padding-top: env(safe-area-inset-top); }\n.tt-safe-area--bottom { padding-bottom: env(safe-area-inset-bottom); }`,
  },
  {
    name: 'tt-textarea', pascal: 'TtTextarea',
    props: [
      ['modelValue', 'String', 'string', "''"],
      ['placeholder', 'String', 'string', "''"],
      ['maxlength', 'Number', 'number', '-1'],
      ['disabled', 'Boolean', 'boolean', 'false'],
      ['autoHeight', 'Boolean', 'boolean', 'false'],
      ['showCount', 'Boolean', 'boolean', 'false'],
    ],
    emits: ['update:modelValue'],
    template: `  <view class="tt-textarea" :class="{ 'tt-textarea--disabled': disabled }">\n    <textarea class="tt-textarea__inner" :value="modelValue" :placeholder="placeholder" :maxlength="maxlength" :disabled="disabled" :auto-height="autoHeight" :placeholder-style="'color: var(--tt-muted-foreground, #737373)'" @input="(e: any) => emit('update:modelValue', e.detail.value)" />\n    <text v-if="showCount" class="tt-textarea__count">{{ String(modelValue).length }}{{ maxlength > 0 ? '/' + maxlength : '' }}</text>\n  </view>`,
    style: `.tt-textarea { border: 1px solid var(--tt-input, #e5e5e5); border-radius: var(--tt-radius, 6px); padding: 10px 12px; background: var(--tt-background, #ffffff); transition: border-color 0.2s; }\n.tt-textarea--disabled { opacity: 0.5; }\n.tt-textarea__inner { width: 100%; font-size: 14px; color: var(--tt-foreground, #0a0a0a); background: transparent; border: none; min-height: 80px; line-height: 1.6; }\n.tt-textarea__count { font-size: 12px; color: var(--tt-muted-foreground, #737373); text-align: right; display: block; margin-top: 4px; }`,
  },
  {
    name: 'tt-checkbox', pascal: 'TtCheckbox',
    props: [
      ['modelValue', 'Boolean', 'boolean', 'false'],
      ['label', 'String', 'string', "''"],
      ['disabled', 'Boolean', 'boolean', 'false'],
    ],
    emits: ['update:modelValue'],
    template: `  <view class="tt-checkbox" :class="{ 'tt-checkbox--checked': modelValue, 'tt-checkbox--disabled': disabled }" @click="!disabled && emit('update:modelValue', !modelValue)">\n    <view class="tt-checkbox__box">\n      <text v-if="modelValue" class="tt-checkbox__check">✓</text>\n    </view>\n    <text v-if="label" class="tt-checkbox__label">{{ label }}</text>\n    <slot />\n  </view>`,
    style: `.tt-checkbox { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }\n.tt-checkbox--disabled { opacity: 0.5; cursor: not-allowed; }\n.tt-checkbox__box { width: 18px; height: 18px; border: 1.5px solid var(--tt-border, #e5e5e5); border-radius: 4px; display: flex; align-items: center; justify-content: center; transition: all 0.15s; flex-shrink: 0; }\n.tt-checkbox--checked .tt-checkbox__box { background: var(--tt-primary, #171717); border-color: var(--tt-primary, #171717); }\n.tt-checkbox__check { font-size: 12px; color: var(--tt-primary-foreground, #fafafa); line-height: 1; }\n.tt-checkbox__label { font-size: 14px; color: var(--tt-foreground, #0a0a0a); }`,
  },
  {
    name: 'tt-radio', pascal: 'TtRadio',
    props: [
      ['modelValue', 'Boolean', 'boolean', 'false'],
      ['label', 'String', 'string', "''"],
      ['disabled', 'Boolean', 'boolean', 'false'],
    ],
    emits: ['update:modelValue'],
    template: `  <view class="tt-radio" :class="{ 'tt-radio--checked': modelValue, 'tt-radio--disabled': disabled }" @click="!disabled && emit('update:modelValue', true)">\n    <view class="tt-radio__circle">\n      <view v-if="modelValue" class="tt-radio__dot" />\n    </view>\n    <text v-if="label" class="tt-radio__label">{{ label }}</text>\n    <slot />\n  </view>`,
    style: `.tt-radio { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }\n.tt-radio--disabled { opacity: 0.5; cursor: not-allowed; }\n.tt-radio__circle { width: 18px; height: 18px; border: 1.5px solid var(--tt-border, #e5e5e5); border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.15s; flex-shrink: 0; }\n.tt-radio--checked .tt-radio__circle { border-color: var(--tt-primary, #171717); }\n.tt-radio__dot { width: 10px; height: 10px; border-radius: 50%; background: var(--tt-primary, #171717); }\n.tt-radio__label { font-size: 14px; color: var(--tt-foreground, #0a0a0a); }`,
  },
  {
    name: 'tt-switch', pascal: 'TtSwitch',
    props: [
      ['modelValue', 'Boolean', 'boolean', 'false'],
      ['disabled', 'Boolean', 'boolean', 'false'],
      ['activeColor', 'String', 'string', "''"],
      ['size', "String as PropType<'sm' | 'md'>", 'string', "'md'"],
    ],
    emits: ['update:modelValue'],
    template: `  <view class="tt-switch" :class="{ 'tt-switch--on': modelValue, 'tt-switch--disabled': disabled, ['tt-switch--' + size]: true }" @click="!disabled && emit('update:modelValue', !modelValue)" :style="modelValue && activeColor ? { backgroundColor: activeColor } : {}">\n    <view class="tt-switch__thumb" />\n  </view>`,
    style: `.tt-switch { width: 44px; height: 24px; border-radius: 12px; background: var(--tt-muted, #f5f5f5); position: relative; cursor: pointer; transition: background 0.3s; }\n.tt-switch--sm { width: 36px; height: 20px; border-radius: 10px; }\n.tt-switch--on { background: var(--tt-primary, #171717); }\n.tt-switch--disabled { opacity: 0.5; cursor: not-allowed; }\n.tt-switch__thumb { width: 20px; height: 20px; border-radius: 50%; background: #fff; position: absolute; top: 2px; left: 2px; transition: transform 0.3s; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }\n.tt-switch--sm .tt-switch__thumb { width: 16px; height: 16px; }\n.tt-switch--on .tt-switch__thumb { transform: translateX(20px); }\n.tt-switch--sm.tt-switch--on .tt-switch__thumb { transform: translateX(16px); }`,
  },
  {
    name: 'tt-cell', pascal: 'TtCell',
    props: [
      ['title', 'String', 'string', "''"],
      ['value', 'String', 'string', "''"],
      ['label', 'String', 'string', "''"],
      ['icon', 'String', 'string', "''"],
      ['isLink', 'Boolean', 'boolean', 'false'],
      ['border', 'Boolean', 'boolean', 'true'],
    ],
    emits: ['click'],
    template: `  <view class="tt-cell" :class="{ 'tt-cell--border': border, 'tt-cell--link': isLink }" @click="emit('click')">\n    <view class="tt-cell__left">\n      <slot name="icon"><text v-if="icon" class="tt-cell__icon">{{ icon }}</text></slot>\n      <view class="tt-cell__title-wrap">\n        <text class="tt-cell__title">{{ title }}</text>\n        <text v-if="label" class="tt-cell__label">{{ label }}</text>\n      </view>\n    </view>\n    <view class="tt-cell__right">\n      <slot><text class="tt-cell__value">{{ value }}</text></slot>\n      <text v-if="isLink" class="tt-cell__arrow">›</text>\n    </view>\n  </view>`,
    style: `.tt-cell { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: var(--tt-background, #ffffff); }\n.tt-cell--border { border-bottom: 1px solid var(--tt-border, #e5e5e5); }\n.tt-cell--link { cursor: pointer; }\n.tt-cell__left { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0; }\n.tt-cell__icon { font-size: 18px; }\n.tt-cell__title-wrap { display: flex; flex-direction: column; }\n.tt-cell__title { font-size: 14px; color: var(--tt-foreground, #0a0a0a); }\n.tt-cell__label { font-size: 12px; color: var(--tt-muted-foreground, #737373); margin-top: 2px; }\n.tt-cell__right { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }\n.tt-cell__value { font-size: 14px; color: var(--tt-muted-foreground, #737373); }\n.tt-cell__arrow { font-size: 20px; color: var(--tt-muted-foreground, #737373); }`,
  },
  {
    name: 'tt-loading', pascal: 'TtLoading',
    props: [
      ['size', '[String, Number]', 'string | number', '24'],
      ['color', 'String', 'string', "''"],
      ['text', 'String', 'string', "''"],
      ['vertical', 'Boolean', 'boolean', 'false'],
    ],
    template: `  <view class="tt-loading" :class="{ 'tt-loading--vertical': vertical }">\n    <view class="tt-loading__spinner" :style="spinnerStyle" />\n    <text v-if="text" class="tt-loading__text">{{ text }}</text>\n  </view>`,
    scriptExtra: `import { computed } from 'vue'\n`,
    style: `.tt-loading { display: inline-flex; align-items: center; gap: 8px; }\n.tt-loading--vertical { flex-direction: column; }\n.tt-loading__spinner { border: 2px solid var(--tt-muted, #f5f5f5); border-top-color: var(--tt-primary, #171717); border-radius: 50%; animation: tt-spin 0.6s linear infinite; }\n.tt-loading__text { font-size: 14px; color: var(--tt-muted-foreground, #737373); }\n@keyframes tt-spin { to { transform: rotate(360deg); } }`,
  },
  {
    name: 'tt-tabbar', pascal: 'TtTabbar',
    props: [
      ['modelValue', 'Number', 'number', '0'],
      ['fixed', 'Boolean', 'boolean', 'true'],
      ['border', 'Boolean', 'boolean', 'true'],
      ['safeAreaInsetBottom', 'Boolean', 'boolean', 'true'],
    ],
    emits: ['update:modelValue', 'change'],
    template: `  <view class="tt-tabbar" :class="{ 'tt-tabbar--fixed': fixed, 'tt-tabbar--border': border, 'tt-tabbar--safe': safeAreaInsetBottom }">\n    <slot />\n  </view>`,
    style: `.tt-tabbar { display: flex; align-items: center; height: 50px; background: var(--tt-background, #ffffff); }\n.tt-tabbar--fixed { position: fixed; bottom: 0; left: 0; right: 0; z-index: 100; }\n.tt-tabbar--border { border-top: 1px solid var(--tt-border, #e5e5e5); }\n.tt-tabbar--safe { padding-bottom: env(safe-area-inset-bottom); }`,
  },

  // --- Phase 4: P1 ---
  {
    name: 'tt-badge', pascal: 'TtBadge',
    props: [
      ['value', '[String, Number]', 'string | number', "''"],
      ['max', 'Number', 'number', '99'],
      ['dot', 'Boolean', 'boolean', 'false'],
      ['hidden', 'Boolean', 'boolean', 'false'],
    ],
    template: `  <view class="tt-badge">\n    <slot />\n    <view v-if="!hidden && (dot || value)" class="tt-badge__content" :class="{ 'tt-badge__content--dot': dot }">\n      <text v-if="!dot" class="tt-badge__text">{{ typeof value === 'number' && value > max ? max + '+' : value }}</text>\n    </view>\n  </view>`,
    style: `.tt-badge { position: relative; display: inline-flex; }\n.tt-badge__content { position: absolute; top: -4px; right: -4px; background: var(--tt-destructive, #ef4444); border-radius: 9999px; min-width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; padding: 0 5px; z-index: 1; }\n.tt-badge__content--dot { min-width: 8px; height: 8px; padding: 0; top: -2px; right: -2px; }\n.tt-badge__text { font-size: 11px; color: #fff; font-weight: 600; line-height: 1; }`,
  },
  {
    name: 'tt-tag', pascal: 'TtTag',
    props: [
      ['type', "String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>", 'string', "'default'"],
      ['closeable', 'Boolean', 'boolean', 'false'],
      ['round', 'Boolean', 'boolean', 'false'],
      ['size', "String as PropType<'sm' | 'md'>", 'string', "'md'"],
    ],
    emits: ['close'],
    template: `  <view class="tt-tag" :class="['tt-tag--' + type, 'tt-tag--' + size, { 'tt-tag--round': round }]">\n    <slot />\n    <text v-if="closeable" class="tt-tag__close" @click="emit('close')">×</text>\n  </view>`,
    style: `.tt-tag { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 4px; font-size: 12px; line-height: 1.4; }\n.tt-tag--sm { padding: 1px 6px; font-size: 11px; }\n.tt-tag--round { border-radius: 9999px; }\n.tt-tag--default { background: var(--tt-secondary, #f5f5f5); color: var(--tt-secondary-foreground, #171717); }\n.tt-tag--primary { background: var(--tt-primary, #171717); color: var(--tt-primary-foreground, #fafafa); }\n.tt-tag--success { background: var(--tt-success, #22c55e); color: var(--tt-success-foreground, #fafafa); }\n.tt-tag--warning { background: var(--tt-warning, #f59e0b); color: var(--tt-warning-foreground, #fafafa); }\n.tt-tag--danger { background: var(--tt-destructive, #ef4444); color: var(--tt-destructive-foreground, #fafafa); }\n.tt-tag__close { cursor: pointer; font-size: 14px; line-height: 1; opacity: 0.7; }`,
  },
  {
    name: 'tt-divider', pascal: 'TtDivider',
    props: [
      ['direction', "String as PropType<'horizontal' | 'vertical'>", 'string', "'horizontal'"],
      ['contentPosition', "String as PropType<'left' | 'center' | 'right'>", 'string', "'center'"],
    ],
    template: `  <view class="tt-divider" :class="['tt-divider--' + direction, 'tt-divider--' + contentPosition]">\n    <slot />\n  </view>`,
    style: `.tt-divider { display: flex; align-items: center; color: var(--tt-muted-foreground, #737373); font-size: 13px; }\n.tt-divider--horizontal { width: 100%; }\n.tt-divider--horizontal::before, .tt-divider--horizontal::after { content: ''; flex: 1; height: 1px; background: var(--tt-border, #e5e5e5); }\n.tt-divider--horizontal::before { margin-right: 12px; }\n.tt-divider--horizontal::after { margin-left: 12px; }\n.tt-divider--left::before { flex: 0; max-width: 0; margin: 0; }\n.tt-divider--right::after { flex: 0; max-width: 0; margin: 0; }\n.tt-divider--vertical { height: 1em; width: 1px; background: var(--tt-border, #e5e5e5); display: inline-block; margin: 0 8px; vertical-align: middle; }`,
  },
  {
    name: 'tt-empty', pascal: 'TtEmpty',
    props: [
      ['description', 'String', 'string', "'No data'"],
      ['image', 'String', 'string', "''"],
    ],
    template: `  <view class="tt-empty">\n    <slot name="image"><text class="tt-empty__icon">📭</text></slot>\n    <text class="tt-empty__desc">{{ description }}</text>\n    <slot />\n  </view>`,
    style: `.tt-empty { display: flex; flex-direction: column; align-items: center; padding: 40px 0; }\n.tt-empty__icon { font-size: 48px; margin-bottom: 12px; }\n.tt-empty__desc { font-size: 14px; color: var(--tt-muted-foreground, #737373); }`,
  },
  {
    name: 'tt-progress', pascal: 'TtProgress',
    props: [
      ['percentage', 'Number', 'number', '0'],
      ['strokeWidth', 'Number', 'number', '8'],
      ['color', 'String', 'string', "''"],
      ['showText', 'Boolean', 'boolean', 'true'],
    ],
    template: `  <view class="tt-progress">\n    <view class="tt-progress__bar" :style="{ height: strokeWidth + 'px' }">\n      <view class="tt-progress__inner" :style="{ width: Math.min(percentage, 100) + '%', backgroundColor: color || undefined }" />\n    </view>\n    <text v-if="showText" class="tt-progress__text">{{ percentage }}%</text>\n  </view>`,
    style: `.tt-progress { display: flex; align-items: center; gap: 10px; width: 100%; }\n.tt-progress__bar { flex: 1; background: var(--tt-muted, #f5f5f5); border-radius: 9999px; overflow: hidden; }\n.tt-progress__inner { height: 100%; background: var(--tt-primary, #171717); border-radius: 9999px; transition: width 0.3s; }\n.tt-progress__text { font-size: 12px; color: var(--tt-muted-foreground, #737373); flex-shrink: 0; width: 36px; text-align: right; }`,
  },
  {
    name: 'tt-skeleton', pascal: 'TtSkeleton',
    props: [
      ['loading', 'Boolean', 'boolean', 'true'],
      ['rows', 'Number', 'number', '3'],
      ['avatar', 'Boolean', 'boolean', 'false'],
      ['title', 'Boolean', 'boolean', 'true'],
      ['animate', 'Boolean', 'boolean', 'true'],
    ],
    template: `  <view v-if="loading" class="tt-skeleton" :class="{ 'tt-skeleton--animate': animate }">\n    <view v-if="avatar" class="tt-skeleton__avatar" />\n    <view class="tt-skeleton__content">\n      <view v-if="title" class="tt-skeleton__title" />\n      <view v-for="i in rows" :key="i" class="tt-skeleton__row" :style="{ width: i === rows ? '60%' : '100%' }" />\n    </view>\n  </view>\n  <slot v-else />`,
    style: `.tt-skeleton { display: flex; gap: 12px; }\n.tt-skeleton__avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--tt-muted, #f5f5f5); flex-shrink: 0; }\n.tt-skeleton__content { flex: 1; }\n.tt-skeleton__title { width: 40%; height: 16px; background: var(--tt-muted, #f5f5f5); border-radius: 4px; margin-bottom: 12px; }\n.tt-skeleton__row { height: 12px; background: var(--tt-muted, #f5f5f5); border-radius: 4px; margin-bottom: 8px; }\n.tt-skeleton--animate .tt-skeleton__avatar, .tt-skeleton--animate .tt-skeleton__title, .tt-skeleton--animate .tt-skeleton__row { animation: tt-skeleton-pulse 1.5s ease infinite; }\n@keyframes tt-skeleton-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`,
  },
  {
    name: 'tt-avatar', pascal: 'TtAvatar',
    props: [
      ['src', 'String', 'string', "''"],
      ['size', '[String, Number]', 'string | number', '40'],
      ['shape', "String as PropType<'circle' | 'square'>", 'string', "'circle'"],
      ['text', 'String', 'string', "''"],
    ],
    template: `  <view class="tt-avatar" :class="'tt-avatar--' + shape" :style="avatarStyle">\n    <image v-if="src" class="tt-avatar__img" :src="src" mode="aspectFill" />\n    <text v-else class="tt-avatar__text">{{ text ? text[0].toUpperCase() : '' }}</text>\n  </view>`,
    scriptExtra: `import { computed } from 'vue'\n`,
    style: `.tt-avatar { display: inline-flex; align-items: center; justify-content: center; overflow: hidden; background: var(--tt-muted, #f5f5f5); color: var(--tt-muted-foreground, #737373); font-weight: 600; }\n.tt-avatar--circle { border-radius: 50%; }\n.tt-avatar--square { border-radius: var(--tt-radius, 6px); }\n.tt-avatar__img { width: 100%; height: 100%; }\n.tt-avatar__text { font-size: 14px; }`,
  },
  {
    name: 'tt-collapse', pascal: 'TtCollapse',
    props: [
      ['modelValue', 'Array', 'Array<string | number>', '() => []'],
      ['accordion', 'Boolean', 'boolean', 'false'],
    ],
    emits: ['update:modelValue'],
    template: `  <view class="tt-collapse">\n    <slot />\n  </view>`,
    style: `.tt-collapse { border: 1px solid var(--tt-border, #e5e5e5); border-radius: var(--tt-radius, 6px); overflow: hidden; }`,
  },
  {
    name: 'tt-steps', pascal: 'TtSteps',
    props: [
      ['active', 'Number', 'number', '0'],
      ['direction', "String as PropType<'horizontal' | 'vertical'>", 'string', "'horizontal'"],
    ],
    template: `  <view class="tt-steps" :class="'tt-steps--' + direction">\n    <slot />\n  </view>`,
    style: `.tt-steps { display: flex; }\n.tt-steps--horizontal { flex-direction: row; }\n.tt-steps--vertical { flex-direction: column; }`,
  },
  {
    name: 'tt-action-sheet', pascal: 'TtActionSheet',
    props: [
      ['show', 'Boolean', 'boolean', 'false'],
      ['title', 'String', 'string', "''"],
      ['actions', 'Array as PropType<Array<{ name: string; disabled?: boolean; color?: string }>>', 'Array', '() => []'],
      ['cancelText', 'String', 'string', "'Cancel'"],
    ],
    emits: ['update:show', 'select', 'cancel'],
    template: `  <tt-popup :show="show" position="bottom" @update:show="emit('update:show', $event)">\n    <view class="tt-action-sheet">\n      <text v-if="title" class="tt-action-sheet__title">{{ title }}</text>\n      <view v-for="(action, i) in actions" :key="i" class="tt-action-sheet__item" :class="{ 'tt-action-sheet__item--disabled': action.disabled }" :style="{ color: action.color }" @click="!action.disabled && (emit('select', action), emit('update:show', false))">\n        <text>{{ action.name }}</text>\n      </view>\n      <view class="tt-action-sheet__gap" />\n      <view class="tt-action-sheet__cancel" @click="emit('cancel'); emit('update:show', false)">\n        <text>{{ cancelText }}</text>\n      </view>\n    </view>\n  </tt-popup>`,
    style: `.tt-action-sheet { background: var(--tt-background, #ffffff); }\n.tt-action-sheet__title { display: block; text-align: center; padding: 16px; font-size: 14px; color: var(--tt-muted-foreground, #737373); border-bottom: 1px solid var(--tt-border, #e5e5e5); }\n.tt-action-sheet__item { padding: 16px; text-align: center; font-size: 16px; color: var(--tt-foreground, #0a0a0a); cursor: pointer; transition: background 0.15s; }\n.tt-action-sheet__item--disabled { opacity: 0.4; cursor: not-allowed; }\n.tt-action-sheet__gap { height: 8px; background: var(--tt-muted, #f5f5f5); }\n.tt-action-sheet__cancel { padding: 16px; text-align: center; font-size: 16px; color: var(--tt-foreground, #0a0a0a); cursor: pointer; }`,
  },
  {
    name: 'tt-notice-bar', pascal: 'TtNoticeBar',
    props: [
      ['text', 'String', 'string', "''"],
      ['color', 'String', 'string', "''"],
      ['background', 'String', 'string', "''"],
      ['closeable', 'Boolean', 'boolean', 'false'],
      ['scrollable', 'Boolean', 'boolean', 'true'],
    ],
    emits: ['close'],
    template: `  <view class="tt-notice-bar" :style="{ color: color || undefined, backgroundColor: background || undefined }">\n    <text class="tt-notice-bar__icon">📢</text>\n    <view class="tt-notice-bar__content">\n      <text class="tt-notice-bar__text">{{ text }}</text>\n    </view>\n    <text v-if="closeable" class="tt-notice-bar__close" @click="emit('close')">×</text>\n  </view>`,
    style: `.tt-notice-bar { display: flex; align-items: center; padding: 8px 12px; background: var(--tt-warning, #f59e0b); color: var(--tt-warning-foreground, #fafafa); font-size: 13px; gap: 8px; }\n.tt-notice-bar__icon { font-size: 14px; flex-shrink: 0; }\n.tt-notice-bar__content { flex: 1; overflow: hidden; }\n.tt-notice-bar__text { white-space: nowrap; }\n.tt-notice-bar__close { font-size: 16px; cursor: pointer; flex-shrink: 0; opacity: 0.8; }`,
  },
  {
    name: 'tt-rate', pascal: 'TtRate',
    props: [
      ['modelValue', 'Number', 'number', '0'],
      ['count', 'Number', 'number', '5'],
      ['disabled', 'Boolean', 'boolean', 'false'],
      ['readonly', 'Boolean', 'boolean', 'false'],
      ['size', '[String, Number]', 'string | number', '20'],
    ],
    emits: ['update:modelValue'],
    template: `  <view class="tt-rate">\n    <text v-for="i in count" :key="i" class="tt-rate__star" :class="{ 'tt-rate__star--active': i <= modelValue }" :style="{ fontSize: (typeof size === 'number' ? size + 'px' : size) }" @click="!disabled && !readonly && emit('update:modelValue', i)">★</text>\n  </view>`,
    style: `.tt-rate { display: inline-flex; gap: 2px; }\n.tt-rate__star { color: var(--tt-muted, #f5f5f5); cursor: pointer; transition: color 0.15s; }\n.tt-rate__star--active { color: var(--tt-warning, #f59e0b); }`,
  },
  {
    name: 'tt-number-box', pascal: 'TtNumberBox',
    props: [
      ['modelValue', 'Number', 'number', '0'],
      ['min', 'Number', 'number', '0'],
      ['max', 'Number', 'number', '99999'],
      ['step', 'Number', 'number', '1'],
      ['disabled', 'Boolean', 'boolean', 'false'],
    ],
    emits: ['update:modelValue'],
    template: `  <view class="tt-number-box" :class="{ 'tt-number-box--disabled': disabled }">\n    <view class="tt-number-box__btn" @click="!disabled && modelValue > min && emit('update:modelValue', modelValue - step)"><text>−</text></view>\n    <text class="tt-number-box__value">{{ modelValue }}</text>\n    <view class="tt-number-box__btn" @click="!disabled && modelValue < max && emit('update:modelValue', modelValue + step)"><text>+</text></view>\n  </view>`,
    style: `.tt-number-box { display: inline-flex; align-items: center; border: 1px solid var(--tt-border, #e5e5e5); border-radius: var(--tt-radius, 6px); overflow: hidden; }\n.tt-number-box--disabled { opacity: 0.5; }\n.tt-number-box__btn { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--tt-foreground, #0a0a0a); font-size: 16px; background: var(--tt-muted, #f5f5f5); }\n.tt-number-box__value { min-width: 40px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: var(--tt-foreground, #0a0a0a); }`,
  },
  {
    name: 'tt-count-down', pascal: 'TtCountDown',
    props: [
      ['time', 'Number', 'number', '0'],
      ['format', 'String', 'string', "'HH:mm:ss'"],
      ['autoStart', 'Boolean', 'boolean', 'true'],
    ],
    emits: ['finish'],
    template: `  <view class="tt-count-down">\n    <slot :time-data="{ hours: 0, minutes: 0, seconds: 0 }"><text class="tt-count-down__text">00:00:00</text></slot>\n  </view>`,
    style: `.tt-count-down { display: inline-flex; }\n.tt-count-down__text { font-size: 14px; color: var(--tt-foreground, #0a0a0a); font-variant-numeric: tabular-nums; }`,
  },
  {
    name: 'tt-search', pascal: 'TtSearch',
    props: [
      ['modelValue', 'String', 'string', "''"],
      ['placeholder', 'String', 'string', "'Search'"],
      ['showCancel', 'Boolean', 'boolean', 'false'],
      ['disabled', 'Boolean', 'boolean', 'false'],
    ],
    emits: ['update:modelValue', 'search', 'cancel'],
    template: `  <view class="tt-search">\n    <view class="tt-search__input-wrap">\n      <text class="tt-search__icon">🔍</text>\n      <input class="tt-search__input" :value="modelValue" :placeholder="placeholder" :disabled="disabled" :placeholder-style="'color: var(--tt-muted-foreground, #737373)'" @input="(e: any) => emit('update:modelValue', e.detail.value)" @confirm="emit('search', modelValue)" />\n    </view>\n    <text v-if="showCancel" class="tt-search__cancel" @click="emit('cancel')">Cancel</text>\n  </view>`,
    style: `.tt-search { display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: var(--tt-background, #ffffff); }\n.tt-search__input-wrap { flex: 1; display: flex; align-items: center; gap: 6px; height: 36px; padding: 0 10px; background: var(--tt-muted, #f5f5f5); border-radius: var(--tt-radius, 6px); }\n.tt-search__icon { font-size: 14px; }\n.tt-search__input { flex: 1; font-size: 14px; color: var(--tt-foreground, #0a0a0a); background: transparent; border: none; height: 100%; }\n.tt-search__cancel { font-size: 14px; color: var(--tt-primary, #171717); cursor: pointer; flex-shrink: 0; }`,
  },
  {
    name: 'tt-sheet', pascal: 'TtSheet',
    props: [
      ['show', 'Boolean', 'boolean', 'false'],
      ['position', "String as PropType<'bottom' | 'right'>", 'string', "'bottom'"],
      ['title', 'String', 'string', "''"],
    ],
    emits: ['update:show'],
    template: `  <tt-popup :show="show" :position="position" closeable round @update:show="emit('update:show', $event)">\n    <view class="tt-sheet">\n      <view v-if="title" class="tt-sheet__header"><text class="tt-sheet__title">{{ title }}</text></view>\n      <view class="tt-sheet__body"><slot /></view>\n    </view>\n  </tt-popup>`,
    style: `.tt-sheet { min-height: 200px; }\n.tt-sheet__header { padding: 16px 20px; border-bottom: 1px solid var(--tt-border, #e5e5e5); }\n.tt-sheet__title { font-size: 16px; font-weight: 600; color: var(--tt-foreground, #0a0a0a); }\n.tt-sheet__body { padding: 20px; }`,
  },
]

components.forEach(writeComp)
console.log(`\nDone: ${components.length} components generated`)
