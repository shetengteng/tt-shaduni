import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtTransition from '../tt-transition.vue'

describe('TtTransition', () => {
  it('visible when show is true', () => {
    const wrapper = mount(TtTransition, { props: { show: true }, slots: { default: '<span>Hi</span>' } })
    expect(wrapper.find('.tt-transition').exists()).toBe(true)
    expect(wrapper.text()).toContain('Hi')
  })

  it('hidden when show is false', () => {
    const wrapper = mount(TtTransition, { props: { show: false }, slots: { default: '<span>Hi</span>' } })
    expect(wrapper.find('.tt-transition').exists()).toBe(false)
  })

  it('applies fade-enter class when show', () => {
    const wrapper = mount(TtTransition, { props: { show: true, name: 'fade' } })
    expect(wrapper.find('.tt-transition--fade-enter').exists()).toBe(true)
  })
})
