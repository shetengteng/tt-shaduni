import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtRate from '../tt-rate.vue'

describe('TtRate', () => {
  it('renders correct number of stars', () => {
    const wrapper = mount(TtRate, { props: { count: 5 } })
    expect(wrapper.findAll('.tt-rate__star').length).toBe(5)
  })

  it('marks active stars based on modelValue', () => {
    const wrapper = mount(TtRate, { props: { modelValue: 3, count: 5 } })
    const active = wrapper.findAll('.tt-rate__star--active')
    expect(active.length).toBe(3)
  })

  it('emits update:modelValue on star click', async () => {
    const wrapper = mount(TtRate, { props: { modelValue: 0, count: 5 } })
    const stars = wrapper.findAll('.tt-rate__star')
    expect(stars).toHaveLength(5)
    await stars[3].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([4])
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(TtRate, {
      props: { modelValue: 0, disabled: true, count: 5 },
    })
    const stars = wrapper.findAll('.tt-rate__star')
    expect(stars).toHaveLength(5)
    await stars[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    expect(wrapper.findAll('.tt-rate__star--active')).toHaveLength(0)
  })

  it('does not emit when readonly', async () => {
    const wrapper = mount(TtRate, {
      props: { modelValue: 3, readonly: true, count: 5 },
    })
    const stars = wrapper.findAll('.tt-rate__star')
    expect(stars).toHaveLength(5)
    await stars[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    expect(wrapper.findAll('.tt-rate__star--active')).toHaveLength(3)
  })
})
