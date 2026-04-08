import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtFormItem from '../tt-form-item.vue'

describe('TtFormItem', () => {
  it('renders label text', () => {
    const wrapper = mount(TtFormItem, { props: { label: 'Name' } })
    expect(wrapper.text()).toContain('Name')
  })

  it('shows required asterisk when required', () => {
    const wrapper = mount(TtFormItem, { props: { label: 'Email', required: true } })
    expect(wrapper.find('.tt-form-item__required').exists()).toBe(true)
    expect(wrapper.find('.tt-form-item__required').text()).toBe('*')
  })

  it('hides required asterisk by default', () => {
    const wrapper = mount(TtFormItem, { props: { label: 'Phone' } })
    expect(wrapper.find('.tt-form-item__required').exists()).toBe(false)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtFormItem, {
      props: { label: 'Field' },
      slots: { default: '<input placeholder="test" />' },
    })
    expect(wrapper.find('input').exists()).toBe(true)
  })
})
