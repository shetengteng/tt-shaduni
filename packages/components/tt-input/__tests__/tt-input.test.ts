import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtInput from '../tt-input.vue'

describe('TtInput', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtInput)
    expect(wrapper.find('.tt-input').exists()).toBe(true)
  })

  it('applies disabled class', () => {
    const wrapper = mount(TtInput, { props: { disabled: true } })
    expect(wrapper.find('.tt-input--disabled').exists()).toBe(true)
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(TtInput, { props: { modelValue: '' } })
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    await input.trigger('input', { detail: { value: 'hello' } })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['hello'])
  })

  it('emits clear event', async () => {
    const wrapper = mount(TtInput, {
      props: { modelValue: 'text', clearable: true },
    })
    const clearBtn = wrapper.find('.tt-input__clear')
    expect(clearBtn.exists()).toBe(true)
    await clearBtn.trigger('click')
    expect(wrapper.emitted('clear')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
  })

  it('toggles focused class on focus and blur', async () => {
    const wrapper = mount(TtInput, { props: { modelValue: '' } })
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)

    await input.trigger('focus')
    expect(wrapper.find('.tt-input').classes()).toContain('tt-input--focused')
    expect(wrapper.emitted('focus')).toHaveLength(1)

    await input.trigger('blur')
    expect(wrapper.find('.tt-input').classes()).not.toContain('tt-input--focused')
    expect(wrapper.emitted('blur')).toHaveLength(1)
  })

  it('shows clear button when clearable and has value', () => {
    const wrapper = mount(TtInput, {
      props: { modelValue: 'abc', clearable: true },
    })
    expect(wrapper.find('.tt-input__clear').exists()).toBe(true)
  })

  it('hides clear button when disabled', () => {
    const wrapper = mount(TtInput, {
      props: { modelValue: 'abc', clearable: true, disabled: true },
    })
    expect(wrapper.find('.tt-input__clear').exists()).toBe(false)
  })

  it('hides clear button when value is empty', () => {
    const wrapper = mount(TtInput, {
      props: { modelValue: '', clearable: true },
    })
    expect(wrapper.find('.tt-input__clear').exists()).toBe(false)
  })
})
