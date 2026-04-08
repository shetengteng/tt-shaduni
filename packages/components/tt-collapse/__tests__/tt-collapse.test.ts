import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtCollapse from '../tt-collapse.vue'

describe('TtCollapse', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtCollapse)
    expect(wrapper.find('.tt-collapse').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtCollapse, {
      slots: { default: '<div class="item">Section</div>' },
    })
    expect(wrapper.text()).toContain('Section')
  })

  it('defaults to non-accordion mode', () => {
    const wrapper = mount(TtCollapse)
    expect(wrapper.props('accordion')).toBe(false)
  })
})
