import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtTooltip from '../tt-tooltip.vue'

describe('TtTooltip', () => {
  it('renders slot content', () => {
    const wrapper = mount(TtTooltip, { props: { content: 'Tip' }, slots: { default: '<span>Hover</span>' } })
    expect(wrapper.text()).toContain('Hover')
  })

  it('renders tooltip content', () => {
    const wrapper = mount(TtTooltip, { props: { content: 'Tip text', show: true } })
    expect(wrapper.text()).toContain('Tip text')
  })

  it('applies placement class on popup', () => {
    const wrapper = mount(TtTooltip, { props: { content: 'T', placement: 'bottom', show: true } })
    expect(wrapper.find('.tt-tooltip__popup--bottom').exists()).toBe(true)
  })
})
