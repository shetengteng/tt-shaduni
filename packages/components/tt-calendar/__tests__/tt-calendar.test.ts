import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtCalendar from '../tt-calendar.vue'

describe('TtCalendar', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtCalendar)
    expect(wrapper.find('.tt-calendar').exists()).toBe(true)
    expect(wrapper.find('.tt-calendar__header').exists()).toBe(true)
    expect(wrapper.findAll('.tt-calendar__weekday').length).toBe(7)
  })

  it('displays correct month title', () => {
    const wrapper = mount(TtCalendar, { props: { modelValue: '2025-03-15' } })
    expect(wrapper.find('.tt-calendar__title').text()).toBe('Mar 2025')
  })

  it('highlights selected date', () => {
    const wrapper = mount(TtCalendar, { props: { modelValue: '2025-06-10' } })
    const selected = wrapper.find('.tt-calendar__cell--selected')
    expect(selected.exists()).toBe(true)
    expect(selected.find('.tt-calendar__day').text()).toBe('10')
  })

  it('emits update:modelValue on day click', async () => {
    const wrapper = mount(TtCalendar, { props: { modelValue: '2025-06-01' } })
    const dayCells = wrapper.findAll('.tt-calendar__cell').filter(c => {
      const day = c.find('.tt-calendar__day')
      return day.exists() && day.text() === '15'
    })
    await dayCells[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2025-06-15'])
  })

  it('does not emit on disabled date', async () => {
    const wrapper = mount(TtCalendar, {
      props: { modelValue: '2025-06-15', minDate: '2025-06-10', maxDate: '2025-06-20' },
    })
    const dayCells = wrapper.findAll('.tt-calendar__cell').filter(c => {
      const day = c.find('.tt-calendar__day')
      return day.exists() && day.text() === '5'
    })
    if (dayCells.length) {
      await dayCells[0].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    }
  })

  it('does not emit when readonly', async () => {
    const wrapper = mount(TtCalendar, { props: { modelValue: '2025-06-01', readonly: true } })
    const dayCells = wrapper.findAll('.tt-calendar__cell').filter(c => {
      const day = c.find('.tt-calendar__day')
      return day.exists() && day.text() === '15'
    })
    await dayCells[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('uses Monday as first day when firstDayOfWeek is 1', () => {
    const wrapper = mount(TtCalendar, { props: { firstDayOfWeek: 1 } })
    const weekdays = wrapper.findAll('.tt-calendar__weekday')
    expect(weekdays[0].text()).toBe('Mo')
    expect(weekdays[6].text()).toBe('Su')
  })

  it('navigates to next month', async () => {
    const wrapper = mount(TtCalendar, { props: { modelValue: '2025-12-01' } })
    expect(wrapper.find('.tt-calendar__title').text()).toBe('Dec 2025')
    const arrows = wrapper.findAll('.tt-calendar__arrow')
    await arrows[1].trigger('click')
    expect(wrapper.find('.tt-calendar__title').text()).toBe('Jan 2026')
  })

  it('navigates to prev month', async () => {
    const wrapper = mount(TtCalendar, { props: { modelValue: '2025-01-01' } })
    expect(wrapper.find('.tt-calendar__title').text()).toBe('Jan 2025')
    const arrows = wrapper.findAll('.tt-calendar__arrow')
    await arrows[0].trigger('click')
    expect(wrapper.find('.tt-calendar__title').text()).toBe('Dec 2024')
  })
})
