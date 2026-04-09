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

  it('shows link arrow when isLink=true', () => {
    const wrapper = mount(TtCell, { props: { isLink: true } })
    expect(wrapper.find('.tt-cell__arrow').exists()).toBe(true)
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
})
