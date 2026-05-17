import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtCell from '../tt-cell.vue'

describe('TtCell', () => {
  it('renders title', () => {
    const wrapper = mount(TtCell, { props: { title: 'Cell Title' } })
    expect(wrapper.text()).toContain('Cell Title')
  })

  it('renders value', () => {
    const wrapper = mount(TtCell, { props: { value: 'Content' } })
    expect(wrapper.text()).toContain('Content')
  })

  it('renders label', () => {
    const wrapper = mount(TtCell, { props: { label: 'Description' } })
    expect(wrapper.text()).toContain('Description')
  })

  it('applies link modifier when isLink=true', () => {
    const wrapper = mount(TtCell, { props: { isLink: true } })
    expect(wrapper.find('.tt-cell--link').exists()).toBe(true)
  })

  it('renders an arrow icon on the right when isLink=true', () => {
    const wrapper = mount(TtCell, { props: { isLink: true } })
    const rightSide = wrapper.find('.tt-cell__right')
    expect(rightSide.exists()).toBe(true)
    expect(rightSide.html()).toContain('ri-arrow-right-s-line')
  })

  it('omits the arrow icon when isLink=false', () => {
    const wrapper = mount(TtCell, { props: { isLink: false } })
    const rightSide = wrapper.find('.tt-cell__right')
    expect(rightSide.html()).not.toContain('ri-arrow-right-s-line')
  })

  it('shows border by default', () => {
    const wrapper = mount(TtCell)
    expect(wrapper.find('.tt-cell--border').exists()).toBe(true)
  })

  it('hides border when border=false', () => {
    const wrapper = mount(TtCell, { props: { border: false } })
    expect(wrapper.find('.tt-cell--border').exists()).toBe(false)
  })

  it('emits click', async () => {
    const wrapper = mount(TtCell)
    await wrapper.find('.tt-cell').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('renders icon slot content', () => {
    const wrapper = mount(TtCell, {
      slots: {
        icon: '<span class="custom-icon">I</span>',
      },
    })
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
  })

  it('applies hover class only when both hover and isLink are true', () => {
    const both = mount(TtCell, { props: { hover: true, isLink: true } })
    expect(both.find('.tt-cell--hover').exists()).toBe(true)

    const hoverOnly = mount(TtCell, { props: { hover: true, isLink: false } })
    expect(hoverOnly.find('.tt-cell--hover').exists()).toBe(false)

    const linkOnly = mount(TtCell, { props: { hover: false, isLink: true } })
    expect(linkOnly.find('.tt-cell--hover').exists()).toBe(false)
  })

  it('hover defaults to true and pairs with isLink for active feedback', () => {
    const wrapper = mount(TtCell, { props: { isLink: true } })
    expect(wrapper.find('.tt-cell--hover').exists()).toBe(true)
  })
})
