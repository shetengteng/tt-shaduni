import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtProgress from '../tt-progress.vue'

describe('TtProgress', () => {
  it('renders with default 0%', () => {
    const wrapper = mount(TtProgress)
    expect(wrapper.find('.tt-progress').exists()).toBe(true)
  })

  it('renders percentage text when showText=true', () => {
    const wrapper = mount(TtProgress, { props: { percentage: 50 } })
    expect(wrapper.text()).toContain('50%')
  })

  it('hides text when showText=false', () => {
    const wrapper = mount(TtProgress, {
      props: { percentage: 50, showText: false },
    })
    expect(wrapper.find('.tt-progress__text').exists()).toBe(false)
  })

  it('applies percentage to inner bar width', () => {
    const wrapper = mount(TtProgress, { props: { percentage: 75 } })
    const inner = wrapper.find('.tt-progress__inner')
    expect(inner.attributes('style')).toContain('75%')
  })

  it('clamps percentage at 100', () => {
    const wrapper = mount(TtProgress, { props: { percentage: 150 } })
    const inner = wrapper.find('.tt-progress__inner')
    expect(inner.attributes('style')).toContain('100%')
  })
})
