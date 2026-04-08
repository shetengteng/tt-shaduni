import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtDatePicker from '../tt-date-picker.vue'

describe('TtDatePicker', () => {
  it('hidden when show is false', () => {
    const wrapper = mount(TtDatePicker, { props: { show: false } })
    expect(wrapper.find('.tt-date-picker').exists()).toBe(false)
  })

  it('renders when show is true', () => {
    const wrapper = mount(TtDatePicker, { props: { show: true } })
    expect(wrapper.find('.tt-date-picker').exists()).toBe(true)
  })

  it('renders title', () => {
    const wrapper = mount(TtDatePicker, { props: { show: true, title: 'Pick Date' } })
    expect(wrapper.text()).toContain('Pick Date')
  })
})
