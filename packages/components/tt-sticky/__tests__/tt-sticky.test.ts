import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSticky from '../tt-sticky.vue'

describe('TtSticky', () => {
  it('renders with sticky style', () => {
    const wrapper = mount(TtSticky)
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('position: sticky')
  })

  it('applies offset top', () => {
    const wrapper = mount(TtSticky, { props: { offsetTop: 56 } })
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('top: 56px')
  })

  it('does not apply sticky when disabled', () => {
    const wrapper = mount(TtSticky, { props: { disabled: true } })
    const style = wrapper.attributes('style') || ''
    expect(style).not.toContain('position: sticky')
  })

  it('renders slot content', () => {
    const wrapper = mount(TtSticky, { slots: { default: '<div class="child">A</div>' } })
    expect(wrapper.find('.child').exists()).toBe(true)
  })
})
