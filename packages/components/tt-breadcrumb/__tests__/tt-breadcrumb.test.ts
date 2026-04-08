import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtBreadcrumb from '../tt-breadcrumb.vue'

describe('TtBreadcrumb', () => {
  const items = [{ text: 'Home', to: '/' }, { text: 'Cat', to: '/c' }, { text: 'Page' }]

  it('renders all items', () => {
    const wrapper = mount(TtBreadcrumb, { props: { items } })
    expect(wrapper.findAll('.tt-breadcrumb__item').length).toBe(3)
  })

  it('renders separators between items', () => {
    const wrapper = mount(TtBreadcrumb, { props: { items } })
    expect(wrapper.findAll('.tt-breadcrumb__separator').length).toBe(2)
  })

  it('marks last item', () => {
    const wrapper = mount(TtBreadcrumb, { props: { items } })
    const last = wrapper.findAll('.tt-breadcrumb__item')[2]
    expect(last.classes()).toContain('tt-breadcrumb__item--last')
  })

  it('marks link items', () => {
    const wrapper = mount(TtBreadcrumb, { props: { items } })
    const first = wrapper.findAll('.tt-breadcrumb__item')[0]
    expect(first.classes()).toContain('tt-breadcrumb__item--link')
  })

  it('emits navigate on link click', async () => {
    const wrapper = mount(TtBreadcrumb, { props: { items } })
    await wrapper.findAll('.tt-breadcrumb__item')[0].trigger('click')
    expect(wrapper.emitted('navigate')?.[0]).toEqual(['/'])
  })
})
