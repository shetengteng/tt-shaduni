import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSteps from '../tt-steps.vue'

describe('TtSteps', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtSteps)
    expect(wrapper.find('.tt-steps').exists()).toBe(true)
  })

  it('applies horizontal direction by default', () => {
    const wrapper = mount(TtSteps)
    expect(wrapper.find('.tt-steps--horizontal').exists()).toBe(true)
  })

  it('applies vertical direction', () => {
    const wrapper = mount(TtSteps, { props: { direction: 'vertical' } })
    expect(wrapper.find('.tt-steps--vertical').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtSteps, {
      slots: { default: '<div>Step 1</div>' },
    })
    expect(wrapper.text()).toContain('Step 1')
  })
})
