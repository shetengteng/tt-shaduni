import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtRow from '../tt-row.vue'

describe('TtRow', () => {
  it('renders with default classes', () => {
    const wrapper = mount(TtRow)
    expect(wrapper.classes()).toContain('tt-row')
    expect(wrapper.classes()).toContain('tt-row--wrap')
    expect(wrapper.classes()).toContain('tt-row--align-top')
  })

  it('applies align class', () => {
    const wrapper = mount(TtRow, { props: { align: 'middle' } })
    expect(wrapper.classes()).toContain('tt-row--align-middle')
  })

  it('removes wrap class when wrap is false', () => {
    const wrapper = mount(TtRow, { props: { wrap: false } })
    expect(wrapper.classes()).not.toContain('tt-row--wrap')
  })

  it('applies gutter margin', () => {
    const wrapper = mount(TtRow, { props: { gutter: 16 } })
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('margin-left: -8px')
    expect(style).toContain('margin-right: -8px')
  })

  it('renders slot content', () => {
    const wrapper = mount(TtRow, { slots: { default: '<div class="child">A</div>' } })
    expect(wrapper.find('.child').exists()).toBe(true)
  })
})
