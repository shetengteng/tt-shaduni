import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtPagination from '../tt-pagination.vue'

describe('TtPagination', () => {
  it('renders pagination', () => {
    const wrapper = mount(TtPagination, { props: { modelValue: 1, totalItems: 50, itemsPerPage: 10 } })
    expect(wrapper.find('.tt-pagination').exists()).toBe(true)
  })

  it('renders correct number of page buttons', () => {
    const wrapper = mount(TtPagination, { props: { modelValue: 1, totalItems: 50, itemsPerPage: 10 } })
    const items = wrapper.findAll('.tt-pagination__item')
    expect(items.length).toBe(5)
  })

  it('marks active page', () => {
    const wrapper = mount(TtPagination, { props: { modelValue: 3, totalItems: 50, itemsPerPage: 10 } })
    const active = wrapper.find('.tt-pagination__item--active')
    expect(active.text()).toBe('3')
  })

  it('emits on page click', async () => {
    const wrapper = mount(TtPagination, { props: { modelValue: 1, totalItems: 50, itemsPerPage: 10 } })
    const items = wrapper.findAll('.tt-pagination__item')
    await items[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([3])
  })

  it('disables prev button on first page', () => {
    const wrapper = mount(TtPagination, { props: { modelValue: 1, totalItems: 50, itemsPerPage: 10 } })
    const btns = wrapper.findAll('.tt-pagination__btn')
    expect(btns[0].classes()).toContain('tt-pagination__btn--disabled')
  })
})
