import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSheet from '../tt-sheet.vue'

describe('TtSheet', () => {
  it('renders the sheet container', () => {
    const wrapper = mount(TtSheet, { props: { show: true } })
    expect(wrapper.find('.tt-sheet').exists()).toBe(true)
  })

  it('renders title', () => {
    const wrapper = mount(TtSheet, {
      props: { show: true, title: 'Sheet Title' },
    })
    expect(wrapper.text()).toContain('Sheet Title')
  })

  it('hides header when no title', () => {
    const wrapper = mount(TtSheet, { props: { show: true } })
    expect(wrapper.find('.tt-sheet__header').exists()).toBe(false)
  })

  it('renders slot content in body', () => {
    const wrapper = mount(TtSheet, {
      props: { show: true },
      slots: { default: '<p>Body content</p>' },
    })
    expect(wrapper.text()).toContain('Body content')
  })
})
