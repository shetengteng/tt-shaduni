import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtTabbar from '../tt-tabbar.vue'

describe('TtTabbar', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtTabbar)
    expect(wrapper.find('.tt-tabbar').exists()).toBe(true)
  })

  it('applies fixed class by default', () => {
    const wrapper = mount(TtTabbar)
    expect(wrapper.find('.tt-tabbar--fixed').exists()).toBe(true)
  })

  it('applies border class by default', () => {
    const wrapper = mount(TtTabbar)
    expect(wrapper.find('.tt-tabbar--border').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtTabbar, {
      slots: { default: '<div class="tab-item">Home</div>' },
    })
    expect(wrapper.text()).toContain('Home')
  })
})
