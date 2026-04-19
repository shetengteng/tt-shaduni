import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtForm from '../tt-form.vue'

describe('TtForm', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtForm)
    expect(wrapper.find('.tt-form').exists()).toBe(true)
    expect(wrapper.classes()).toContain('tt-form--default')
  })

  it('renders slot content', () => {
    const wrapper = mount(TtForm, {
      slots: { default: '<div class="field">Name</div>' },
    })
    expect(wrapper.text()).toContain('Name')
  })

  it('applies list variant class', () => {
    const wrapper = mount(TtForm, { props: { variant: 'list' } })
    expect(wrapper.classes()).toContain('tt-form--list')
  })

  it('applies inline variant class', () => {
    const wrapper = mount(TtForm, { props: { variant: 'inline' } })
    expect(wrapper.classes()).toContain('tt-form--inline')
  })
})
