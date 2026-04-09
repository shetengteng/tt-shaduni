import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSlider from '../tt-slider.vue'

describe('TtSlider', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtSlider)
    expect(wrapper.classes()).toContain('tt-slider')
  })

  it('applies disabled class', () => {
    const wrapper = mount(TtSlider, { props: { disabled: true } })
    expect(wrapper.classes()).toContain('tt-slider--disabled')
  })

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(TtSlider, { props: { modelValue: 50, min: 0, max: 100 } })
    await wrapper.find('slider').trigger('change', { detail: { value: 75 } })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([75])
    expect(wrapper.emitted('change')?.[0]).toEqual([75])
  })

  it('passes min/max/step props', () => {
    const wrapper = mount(TtSlider, { props: { modelValue: 5, min: 0, max: 10, step: 2 } })
    const slider = wrapper.find('slider')
    expect(slider.exists()).toBe(true)
  })

  it('emits update:modelValue on changing', async () => {
    const wrapper = mount(TtSlider, { props: { modelValue: 50, min: 0, max: 100 } })
    await wrapper.find('slider').trigger('changing', { detail: { value: 60 } })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([60])
    expect(wrapper.emitted('change')).toBeUndefined()
  })
})
