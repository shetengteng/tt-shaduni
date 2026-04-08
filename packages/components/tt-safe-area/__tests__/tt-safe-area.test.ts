import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSafeArea from '../tt-safe-area.vue'

describe('TtSafeArea', () => {
  it('renders with default bottom position', () => {
    const wrapper = mount(TtSafeArea)
    expect(wrapper.find('.tt-safe-area').exists()).toBe(true)
    expect(wrapper.find('.tt-safe-area--bottom').exists()).toBe(true)
  })

  it('applies top position', () => {
    const wrapper = mount(TtSafeArea, { props: { position: 'top' } })
    expect(wrapper.find('.tt-safe-area--top').exists()).toBe(true)
  })
})
