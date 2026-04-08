import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtDescriptions from '../tt-descriptions.vue'

describe('TtDescriptions', () => {
  const items = [{ label: 'Name', value: 'Alice' }, { label: 'Age', value: '28' }]

  it('renders items', () => {
    const wrapper = mount(TtDescriptions, { props: { items } })
    expect(wrapper.findAll('.tt-descriptions__item').length).toBe(2)
  })

  it('renders title when provided', () => {
    const wrapper = mount(TtDescriptions, { props: { items, title: 'Info' } })
    expect(wrapper.find('.tt-descriptions__title').text()).toBe('Info')
  })

  it('hides title when not provided', () => {
    const wrapper = mount(TtDescriptions, { props: { items } })
    expect(wrapper.find('.tt-descriptions__header').exists()).toBe(false)
  })

  it('applies bordered class', () => {
    const wrapper = mount(TtDescriptions, { props: { items, bordered: true } })
    expect(wrapper.classes()).toContain('tt-descriptions--bordered')
  })
})
