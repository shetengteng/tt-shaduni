import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtTextarea from '../tt-textarea.vue'

describe('TtTextarea', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtTextarea)
    expect(wrapper.find('.tt-textarea').exists()).toBe(true)
  })

  it('applies disabled class', () => {
    const wrapper = mount(TtTextarea, { props: { disabled: true } })
    expect(wrapper.find('.tt-textarea--disabled').exists()).toBe(true)
  })

  it('shows word count when showCount=true and maxlength set', () => {
    const wrapper = mount(TtTextarea, {
      props: { showCount: true, maxlength: 100, modelValue: 'hi' },
    })
    expect(wrapper.find('.tt-textarea__count').exists()).toBe(true)
  })
})
