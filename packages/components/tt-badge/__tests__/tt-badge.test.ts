import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtBadge from '../tt-badge.vue'

describe('TtBadge', () => {
  it('renders value', () => {
    const wrapper = mount(TtBadge, { props: { value: 5 } })
    expect(wrapper.text()).toContain('5')
  })

  it('caps value at max', () => {
    const wrapper = mount(TtBadge, { props: { value: 120, max: 99 } })
    expect(wrapper.text()).toContain('99+')
  })

  it('shows string value without max capping', () => {
    const wrapper = mount(TtBadge, { props: { value: 'new' } })
    expect(wrapper.text()).toContain('new')
  })

  it('shows dot mode', () => {
    const wrapper = mount(TtBadge, { props: { dot: true } })
    expect(wrapper.find('.tt-badge__content--dot').exists()).toBe(true)
  })

  it('hides when hidden=true', () => {
    const wrapper = mount(TtBadge, { props: { value: 5, hidden: true } })
    expect(wrapper.find('.tt-badge__content').exists()).toBe(false)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtBadge, {
      props: { value: 1 },
      slots: { default: '<span>Item</span>' },
    })
    expect(wrapper.text()).toContain('Item')
  })
})
