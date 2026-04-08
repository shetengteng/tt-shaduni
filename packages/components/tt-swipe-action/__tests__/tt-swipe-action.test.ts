import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSwipeAction from '../tt-swipe-action.vue'

describe('TtSwipeAction', () => {
  it('renders component', () => {
    const wrapper = mount(TtSwipeAction, { slots: { default: '<div>Content</div>' } })
    expect(wrapper.find('.tt-swipe-action').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtSwipeAction, { slots: { default: '<div class="inner">Content</div>' } })
    expect(wrapper.find('.inner').exists()).toBe(true)
  })
})
