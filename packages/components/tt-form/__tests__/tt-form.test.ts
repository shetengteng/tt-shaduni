import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtForm from '../tt-form.vue'

describe('TtForm', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtForm)
    expect(wrapper.find('.tt-form').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtForm, {
      slots: { default: '<div class="field">Name</div>' },
    })
    expect(wrapper.text()).toContain('Name')
  })
})
