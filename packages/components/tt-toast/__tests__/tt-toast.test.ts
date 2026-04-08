import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtToast from '../tt-toast.vue'

describe('TtToast', () => {
  it('is hidden when show=false', () => {
    const wrapper = mount(TtToast, { props: { show: false } })
    expect(wrapper.find('.tt-toast').exists()).toBe(false)
  })

  it('is visible when show=true', () => {
    const wrapper = mount(TtToast, { props: { show: true } })
    expect(wrapper.find('.tt-toast').exists()).toBe(true)
  })

  it('renders message text', () => {
    const wrapper = mount(TtToast, {
      props: { show: true, message: 'Done!' },
    })
    expect(wrapper.text()).toContain('Done!')
  })

  it('shows success icon for type=success', () => {
    const wrapper = mount(TtToast, {
      props: { show: true, type: 'success' },
    })
    expect(wrapper.find('.tt-toast__icon').exists()).toBe(true)
    expect(wrapper.text()).toContain('✓')
  })

  it('shows loading spinner for type=loading', () => {
    const wrapper = mount(TtToast, {
      props: { show: true, type: 'loading' },
    })
    expect(wrapper.find('.tt-toast__spinner').exists()).toBe(true)
  })

  it('shows fail icon for type=fail', () => {
    const wrapper = mount(TtToast, {
      props: { show: true, type: 'fail' },
    })
    expect(wrapper.text()).toContain('✕')
  })
})
