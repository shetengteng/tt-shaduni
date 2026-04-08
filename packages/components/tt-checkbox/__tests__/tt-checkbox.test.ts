import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtCheckbox from '../tt-checkbox.vue'

describe('TtCheckbox', () => {
  it('renders with label', () => {
    const wrapper = mount(TtCheckbox, { props: { label: 'Option A' } })
    expect(wrapper.text()).toContain('Option A')
  })

  it('applies checked class when modelValue=true', () => {
    const wrapper = mount(TtCheckbox, { props: { modelValue: true } })
    expect(wrapper.find('.tt-checkbox--checked').exists()).toBe(true)
  })

  it('emits toggle on click', async () => {
    const wrapper = mount(TtCheckbox, { props: { modelValue: false } })
    await wrapper.find('.tt-checkbox').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(TtCheckbox, {
      props: { modelValue: false, disabled: true },
    })
    await wrapper.find('.tt-checkbox').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('applies disabled class', () => {
    const wrapper = mount(TtCheckbox, { props: { disabled: true } })
    expect(wrapper.find('.tt-checkbox--disabled').exists()).toBe(true)
  })
})
