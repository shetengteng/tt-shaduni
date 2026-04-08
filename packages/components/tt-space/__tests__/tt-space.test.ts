import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSpace from '../tt-space.vue'

describe('TtSpace', () => {
  it('renders horizontal by default', () => {
    const wrapper = mount(TtSpace)
    expect(wrapper.find('.tt-space').exists()).toBe(true)
    expect(wrapper.find('.tt-space--horizontal').exists()).toBe(true)
  })

  it('renders vertical', () => {
    const wrapper = mount(TtSpace, { props: { direction: 'vertical' } })
    expect(wrapper.find('.tt-space--vertical').exists()).toBe(true)
  })

  it('applies wrap class', () => {
    const wrapper = mount(TtSpace, { props: { wrap: true } })
    expect(wrapper.find('.tt-space--wrap').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtSpace, {
      slots: { default: '<span>A</span><span>B</span>' },
    })
    expect(wrapper.text()).toContain('A')
    expect(wrapper.text()).toContain('B')
  })
})
