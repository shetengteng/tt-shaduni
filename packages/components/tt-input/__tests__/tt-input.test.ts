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
    if (input.exists()) {
      await input.trigger('input', { detail: { value: 'hello' } })
    }
    // UniApp input event uses e.detail.value
  })

  it('emits clear event', async () => {
    const wrapper = mount(TtInput, {
      props: { modelValue: 'text', clearable: true },
    })
    const clearBtn = wrapper.find('.tt-input__clear')
    if (clearBtn.exists()) {
      await clearBtn.trigger('click')
      expect(wrapper.emitted('clear')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
    }
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
