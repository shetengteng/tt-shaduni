import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtImage from '../tt-image.vue'

describe('TtImage', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtImage)
    expect(wrapper.find('.tt-image').exists()).toBe(true)
  })

  it('applies custom width and height', () => {
    const wrapper = mount(TtImage, {
      props: { width: '200px', height: '150px' },
    })
    const style = wrapper.find('.tt-image').attributes('style') || ''
    expect(style).toContain('200px')
    expect(style).toContain('150px')
  })

  it('applies radius', () => {
    const wrapper = mount(TtImage, { props: { radius: '8px' } })
    const style = wrapper.find('.tt-image').attributes('style') || ''
    expect(style).toContain('8px')
  })
})
