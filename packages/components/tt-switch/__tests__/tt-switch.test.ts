import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSwitch from '../tt-switch.vue'

describe('TtSwitch', () => {
  it('renders with default state (off)', () => {
    const wrapper = mount(TtSwitch)
    expect(wrapper.find('.tt-switch').exists()).toBe(true)
    expect(wrapper.find('.tt-switch--on').exists()).toBe(false)
  })

  it('applies on class when modelValue=true', () => {
    const wrapper = mount(TtSwitch, { props: { modelValue: true } })
    expect(wrapper.find('.tt-switch--on').exists()).toBe(true)
  })

  it('emits update:modelValue on click', async () => {
    const wrapper = mount(TtSwitch, { props: { modelValue: false } })
    await wrapper.find('.tt-switch').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(TtSwitch, { props: { disabled: true } })
    await wrapper.find('.tt-switch').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('applies disabled class', () => {
    const wrapper = mount(TtSwitch, { props: { disabled: true } })
    expect(wrapper.find('.tt-switch--disabled').exists()).toBe(true)
  })

  it('applies size class', () => {
    const wrapper = mount(TtSwitch, { props: { size: 'sm' } })
    expect(wrapper.find('.tt-switch--sm').exists()).toBe(true)
  })
})
