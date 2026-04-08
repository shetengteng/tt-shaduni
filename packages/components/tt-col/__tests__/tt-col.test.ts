import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtCol from '../tt-col.vue'

describe('TtCol', () => {
  it('renders with default span', () => {
    const wrapper = mount(TtCol)
    expect(wrapper.classes()).toContain('tt-col')
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('width: 100%')
  })

  it('computes width from span', () => {
    const wrapper = mount(TtCol, { props: { span: 12 } })
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('50%')
  })

  it('applies offset margin', () => {
    const wrapper = mount(TtCol, { props: { span: 12, offset: 6 } })
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('margin-left: 25%')
  })

  it('renders slot content', () => {
    const wrapper = mount(TtCol, { slots: { default: 'Child' } })
    expect(wrapper.text()).toBe('Child')
  })
})
