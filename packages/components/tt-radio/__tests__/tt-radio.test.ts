import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtRadio from '../tt-radio.vue'

describe('TtRadio', () => {
  it('renders with label', () => {
    const wrapper = mount(TtRadio, { props: { label: 'Option B' } })
    expect(wrapper.text()).toContain('Option B')
  })

  it('applies checked class when modelValue=true', () => {
    const wrapper = mount(TtRadio, { props: { modelValue: true } })
    expect(wrapper.find('.tt-radio--checked').exists()).toBe(true)
  })

  it('emits update:modelValue on click', async () => {
    const wrapper = mount(TtRadio, { props: { modelValue: false } })
    await wrapper.find('.tt-radio').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(TtRadio, {
      props: { modelValue: false, disabled: true },
    })
    await wrapper.find('.tt-radio').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    expect(wrapper.find('.tt-radio').classes()).toContain('tt-radio--disabled')
    expect(wrapper.find('.tt-radio__dot').exists()).toBe(false)
  })

  it('applies disabled class', () => {
    const wrapper = mount(TtRadio, { props: { disabled: true } })
    expect(wrapper.find('.tt-radio--disabled').exists()).toBe(true)
  })
})
