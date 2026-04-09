import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtNavbar from '../tt-navbar.vue'

describe('TtNavbar', () => {
  it('renders title', () => {
    const wrapper = mount(TtNavbar, { props: { title: 'Page Title' } })
    expect(wrapper.text()).toContain('Page Title')
  })

  it('renders left text', () => {
    const wrapper = mount(TtNavbar, { props: { leftText: 'Back' } })
    expect(wrapper.text()).toContain('Back')
  })

  it('shows left arrow when leftArrow=true', () => {
    const wrapper = mount(TtNavbar, { props: { leftArrow: true } })
    expect(wrapper.find('.tt-navbar__arrow').exists()).toBe(true)
  })

  it('applies fixed class', () => {
    const wrapper = mount(TtNavbar, { props: { fixed: true } })
    expect(wrapper.find('.tt-navbar--fixed').exists()).toBe(true)
  })

  it('shows border by default', () => {
    const wrapper = mount(TtNavbar)
    expect(wrapper.find('.tt-navbar--border').exists()).toBe(true)
  })

  it('emits clickLeft on left area click', async () => {
    const wrapper = mount(TtNavbar, { props: { leftArrow: true } })
    const left = wrapper.find('.tt-navbar__left')
    await left.trigger('click')
    expect(wrapper.emitted('clickLeft')).toHaveLength(1)
  })
})
