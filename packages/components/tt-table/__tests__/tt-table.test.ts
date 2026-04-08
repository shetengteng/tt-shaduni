import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtTable from '../tt-table.vue'

describe('TtTable', () => {
  const columns = [{ key: 'name', title: 'Name' }, { key: 'age', title: 'Age' }]
  const data = [{ name: 'Alice', age: 28 }, { name: 'Bob', age: 32 }]

  it('renders table', () => {
    const wrapper = mount(TtTable, { props: { columns, data } })
    expect(wrapper.find('.tt-table').exists()).toBe(true)
  })

  it('renders header cells', () => {
    const wrapper = mount(TtTable, { props: { columns, data } })
    const ths = wrapper.findAll('.tt-table__th')
    expect(ths.length).toBe(2)
    expect(ths[0].text()).toBe('Name')
  })

  it('renders data rows', () => {
    const wrapper = mount(TtTable, { props: { columns, data } })
    const rows = wrapper.findAll('.tt-table__row')
    expect(rows.length).toBe(2)
  })

  it('applies bordered class', () => {
    const wrapper = mount(TtTable, { props: { columns, data, bordered: true } })
    expect(wrapper.find('.tt-table--bordered').exists()).toBe(true)
  })

  it('applies striped class', () => {
    const wrapper = mount(TtTable, { props: { columns, data, striped: true } })
    expect(wrapper.find('.tt-table--striped').exists()).toBe(true)
  })
})
