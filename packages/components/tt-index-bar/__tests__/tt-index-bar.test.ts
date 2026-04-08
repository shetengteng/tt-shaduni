import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtIndexBar from '../tt-index-bar.vue'

describe('TtIndexBar', () => {
  it('renders component', () => {
    const wrapper = mount(TtIndexBar)
    expect(wrapper.find('.tt-index-bar').exists()).toBe(true)
  })

  it('renders index list', () => {
    const wrapper = mount(TtIndexBar)
    const items = wrapper.findAll('.tt-index-bar__index')
    expect(items.length).toBeGreaterThan(0)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtIndexBar, { slots: { default: '<div class="test">Content</div>' } })
    expect(wrapper.find('.test').exists()).toBe(true)
  })
})
