import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtCountDown from '../tt-count-down.vue'

describe('TtCountDown', () => {
  it('renders the count-down container', () => {
    const wrapper = mount(TtCountDown, { props: { time: 60000 } })
    expect(wrapper.find('.tt-count-down').exists()).toBe(true)
  })

  it('displays default placeholder time', () => {
    const wrapper = mount(TtCountDown, { props: { time: 5000 } })
    expect(wrapper.find('.tt-count-down__text').exists()).toBe(true)
  })

  it('provides timeData via scoped slot', () => {
    const wrapper = mount(TtCountDown, {
      props: { time: 5000 },
      slots: {
        default: `<template #default="{ timeData }">
          <span class="custom">{{ timeData.hours }}h</span>
        </template>`,
      },
    })
    expect(wrapper.find('.custom').exists()).toBe(true)
  })
})
