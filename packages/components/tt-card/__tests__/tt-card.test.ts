import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtCard from '../tt-card.vue'

describe('TtCard', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtCard)
    expect(wrapper.find('.tt-card').exists()).toBe(true)
  })

  it('renders title', () => {
    const wrapper = mount(TtCard, { props: { title: 'Card Title' } })
    expect(wrapper.text()).toContain('Card Title')
  })

  it('renders description when title is present', () => {
    const wrapper = mount(TtCard, {
      props: { title: 'Title', description: 'A description' },
    })
    expect(wrapper.text()).toContain('A description')
  })

  it('applies shadow variant class', () => {
    const wrapper = mount(TtCard, { props: { shadow: 'hover' } })
    expect(wrapper.find('.tt-card--shadow-hover').exists()).toBe(true)
  })

  it('applies shadow-always by default', () => {
    const wrapper = mount(TtCard)
    expect(wrapper.find('.tt-card--shadow-always').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtCard, { slots: { default: '<p>Body</p>' } })
    expect(wrapper.text()).toContain('Body')
  })
})
