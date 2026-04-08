import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtGrid from '../tt-grid.vue'

describe('TtGrid', () => {
  it('renders grid', () => {
    const wrapper = mount(TtGrid)
    expect(wrapper.classes()).toContain('tt-grid')
  })

  it('applies border class', () => {
    const wrapper = mount(TtGrid, { props: { border: true } })
    expect(wrapper.classes()).toContain('tt-grid--border')
  })

  it('sets grid columns from columnNum', () => {
    const wrapper = mount(TtGrid, { props: { columnNum: 3 } })
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('repeat(3, 1fr)')
  })

  it('applies gutter gap', () => {
    const wrapper = mount(TtGrid, { props: { gutter: 8 } })
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('gap: 8px')
  })
})
