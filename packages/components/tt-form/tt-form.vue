<template>
  <view
    class="tt-form"
    :class="[`tt-form--${props.variant}`]"
  >
    <slot />
  </view>
</template>

<script setup lang="ts">
import { provide, reactive, watchEffect } from 'vue'
import { formProps, TT_FORM_INJECT_KEY, type TtFormContext } from './props'

const props = defineProps(formProps)

const ctx = reactive<TtFormContext>({
  variant: props.variant as TtFormContext['variant'],
  labelWidth: props.labelWidth,
  borderedLast: props.borderedLast,
})

watchEffect(() => {
  ctx.variant = props.variant as TtFormContext['variant']
  ctx.labelWidth = props.labelWidth
  ctx.borderedLast = props.borderedLast
})

provide(TT_FORM_INJECT_KEY, ctx)
</script>

<style>
.tt-form { width: 100%; }
.tt-form--list { display: flex; flex-direction: column; }
</style>
