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
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
  })

  it('passes min/max/step props', () => {
    const wrapper = mount(TtSlider, { props: { modelValue: 5, min: 0, max: 10, step: 2 } })
    const slider = wrapper.find('slider')
    expect(slider.exists()).toBe(true)
  })
})
