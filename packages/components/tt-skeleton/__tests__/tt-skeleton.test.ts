import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSkeleton from '../tt-skeleton.vue'

describe('TtSkeleton', () => {
  it('renders skeleton when loading=true', () => {
    const wrapper = mount(TtSkeleton, { props: { loading: true } })
    expect(wrapper.find('.tt-skeleton').exists()).toBe(true)
  })

  it('renders slot content when loading=false', () => {
    const wrapper = mount(TtSkeleton, {
      props: { loading: false },
      slots: { default: '<p>Content</p>' },
    })
    expect(wrapper.text()).toContain('Content')
  })

  it('renders rows', () => {
    const wrapper = mount(TtSkeleton, { props: { loading: true, rows: 4 } })
    expect(wrapper.findAll('.tt-skeleton__row').length).toBe(4)
  })

  it('shows avatar placeholder', () => {
    const wrapper = mount(TtSkeleton, {
      props: { loading: true, avatar: true },
    })
    expect(wrapper.find('.tt-skeleton__avatar').exists()).toBe(true)
  })

  it('shows title placeholder by default', () => {
    const wrapper = mount(TtSkeleton, { props: { loading: true } })
    expect(wrapper.find('.tt-skeleton__title').exists()).toBe(true)
  })

  it('applies animate class', () => {
    const wrapper = mount(TtSkeleton, { props: { loading: true } })
    expect(wrapper.find('.tt-skeleton--animate').exists()).toBe(true)
  })
})
