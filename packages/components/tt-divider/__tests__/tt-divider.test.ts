import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtDivider from '../tt-divider.vue'

describe('TtDivider', () => {
  it('renders horizontal by default', () => {
    const wrapper = mount(TtDivider)
    expect(wrapper.find('.tt-divider').exists()).toBe(true)
    expect(wrapper.find('.tt-divider--horizontal').exists()).toBe(true)
  })

  it('renders vertical', () => {
    const wrapper = mount(TtDivider, { props: { direction: 'vertical' } })
    expect(wrapper.find('.tt-divider--vertical').exists()).toBe(true)
  })

  it('renders slot content at center by default', () => {
    const wrapper = mount(TtDivider, { slots: { default: 'OR' } })
    expect(wrapper.text()).toContain('OR')
  })

  it('applies content position class', () => {
    const wrapper = mount(TtDivider, {
      props: { contentPosition: 'left' },
      slots: { default: 'Text' },
    })
    expect(wrapper.find('.tt-divider--left').exists()).toBe(true)
  })
})
