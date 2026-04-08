import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtAvatar from '../tt-avatar.vue'

describe('TtAvatar', () => {
  it('renders with default circle shape', () => {
    const wrapper = mount(TtAvatar)
    expect(wrapper.find('.tt-avatar').exists()).toBe(true)
    expect(wrapper.find('.tt-avatar--circle').exists()).toBe(true)
  })

  it('applies square shape', () => {
    const wrapper = mount(TtAvatar, { props: { shape: 'square' } })
    expect(wrapper.find('.tt-avatar--square').exists()).toBe(true)
  })

  it('renders first character of text as fallback', () => {
    const wrapper = mount(TtAvatar, { props: { text: 'John' } })
    expect(wrapper.find('.tt-avatar__text').text()).toBe('J')
  })

  it('shows image when src is provided', () => {
    const wrapper = mount(TtAvatar, { props: { src: 'avatar.jpg' } })
    expect(wrapper.find('.tt-avatar__img').exists()).toBe(true)
  })

  it('hides image when no src', () => {
    const wrapper = mount(TtAvatar)
    expect(wrapper.find('.tt-avatar__img').exists()).toBe(false)
  })
})
