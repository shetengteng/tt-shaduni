import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtScrollView from '../tt-scroll-view.vue'

describe('TtScrollView', () => {
  it('renders component', () => {
    const wrapper = mount(TtScrollView, { slots: { default: '<div>Content</div>' } })
    expect(wrapper.find('.tt-scroll-view').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtScrollView, { slots: { default: '<div class="inner">A</div>' } })
    expect(wrapper.find('.inner').exists()).toBe(true)
  })
})
