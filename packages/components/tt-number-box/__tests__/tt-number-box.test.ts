import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtNumberBox from '../tt-number-box.vue'

describe('TtNumberBox', () => {
  it('renders with default value 0', () => {
    const wrapper = mount(TtNumberBox)
    expect(wrapper.find('.tt-number-box').exists()).toBe(true)
    expect(wrapper.find('.tt-number-box__value').text()).toBe('0')
  })

  it('emits increment on plus click', async () => {
    const wrapper = mount(TtNumberBox, { props: { modelValue: 5 } })
    const btns = wrapper.findAll('.tt-number-box__btn')
    await btns[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([6])
  })

  it('emits decrement on minus click', async () => {
    const wrapper = mount(TtNumberBox, { props: { modelValue: 5 } })
    const btns = wrapper.findAll('.tt-number-box__btn')
    await btns[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([4])
  })

  it('does not go below min', async () => {
    const wrapper = mount(TtNumberBox, {
      props: { modelValue: 0, min: 0 },
    })
    const btns = wrapper.findAll('.tt-number-box__btn')
    await btns[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('does not go above max', async () => {
    const wrapper = mount(TtNumberBox, {
      props: { modelValue: 10, max: 10 },
    })
    const btns = wrapper.findAll('.tt-number-box__btn')
    await btns[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('respects step', async () => {
    const wrapper = mount(TtNumberBox, {
      props: { modelValue: 0, step: 5 },
    })
    const btns = wrapper.findAll('.tt-number-box__btn')
    await btns[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([5])
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(TtNumberBox, {
      props: { modelValue: 5, disabled: true },
    })
    const btns = wrapper.findAll('.tt-number-box__btn')
    await btns[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })
})
