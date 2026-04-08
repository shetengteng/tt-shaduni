import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtTypography from '../tt-typography.vue'

describe('TtTypography', () => {
  it('renders text type by default', () => {
    const wrapper = mount(TtTypography, { slots: { default: 'Hello' } })
    expect(wrapper.text()).toBe('Hello')
    expect(wrapper.classes()).toContain('tt-typography--text')
  })

  it('renders title with level', () => {
    const wrapper = mount(TtTypography, { props: { type: 'title', level: 2 } })
    expect(wrapper.classes()).toContain('tt-typography--title')
    expect(wrapper.classes()).toContain('tt-typography--h2')
  })

  it('applies bold class', () => {
    const wrapper = mount(TtTypography, { props: { bold: true } })
    expect(wrapper.classes()).toContain('tt-typography--bold')
  })

  it('applies underline class', () => {
    const wrapper = mount(TtTypography, { props: { underline: true } })
    expect(wrapper.classes()).toContain('tt-typography--underline')
  })

  it('applies delete class', () => {
    const wrapper = mount(TtTypography, { props: { delete: true } })
    expect(wrapper.classes()).toContain('tt-typography--delete')
  })

  it('applies disabled class', () => {
    const wrapper = mount(TtTypography, { props: { disabled: true } })
    expect(wrapper.classes()).toContain('tt-typography--disabled')
  })

  it('emits click', async () => {
    const wrapper = mount(TtTypography)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
