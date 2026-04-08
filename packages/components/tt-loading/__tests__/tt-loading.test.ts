import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtLoading from '../tt-loading.vue'

describe('TtLoading', () => {
  it('renders spinner', () => {
    const wrapper = mount(TtLoading)
    expect(wrapper.find('.tt-loading').exists()).toBe(true)
    expect(wrapper.find('.tt-loading__spinner').exists()).toBe(true)
  })

  it('renders text', () => {
    const wrapper = mount(TtLoading, { props: { text: 'Loading...' } })
    expect(wrapper.text()).toContain('Loading...')
  })

  it('applies vertical layout', () => {
    const wrapper = mount(TtLoading, { props: { vertical: true } })
    expect(wrapper.find('.tt-loading--vertical').exists()).toBe(true)
  })

  it('hides text when empty', () => {
    const wrapper = mount(TtLoading)
    expect(wrapper.find('.tt-loading__text').exists()).toBe(false)
  })
})
