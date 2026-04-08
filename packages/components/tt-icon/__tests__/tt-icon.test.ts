import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtIcon from '../tt-icon.vue'

describe('TtIcon', () => {
  it('renders with name class', () => {
    const wrapper = mount(TtIcon, { props: { name: 'close' } })
    expect(wrapper.classes()).toContain('tt-icon')
    expect(wrapper.classes()).toContain('tt-icon-close')
  })

  it('applies numeric size as px', () => {
    const wrapper = mount(TtIcon, { props: { name: 'home', size: 24 } })
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('24px')
  })

  it('applies string size directly', () => {
    const wrapper = mount(TtIcon, { props: { name: 'home', size: '2em' } })
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('2em')
  })

  it('applies custom color', () => {
    const wrapper = mount(TtIcon, { props: { name: 'home', color: 'red' } })
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('red')
  })

  it('defaults to size 16', () => {
    const wrapper = mount(TtIcon, { props: { name: 'home' } })
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('16px')
  })
})
