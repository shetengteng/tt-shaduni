import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtColorPicker from '../tt-color-picker.vue'

const RED = 'hsl(0, 70%, 80%)'
const BLUE = 'hsl(220, 65%, 82%)'

describe('TtColorPicker', () => {
  it('renders previewCount swatches by default', () => {
    const wrapper = mount(TtColorPicker, { props: { previewCount: 5 } })
    const swatches = wrapper.findAll('.tt-color-picker__swatch')
    expect(swatches).toHaveLength(5)
  })

  it('marks the active swatch when modelValue matches', () => {
    const wrapper = mount(TtColorPicker, {
      props: { modelValue: BLUE, previewCount: 8 },
    })
    expect(wrapper.find('.tt-color-picker__swatch--active').exists()).toBe(true)
  })

  it('places the current color at the head when not in preset list', () => {
    const customColor = 'rgb(123, 99, 200)'
    const wrapper = mount(TtColorPicker, {
      props: { modelValue: customColor, previewCount: 5 },
    })
    const first = wrapper.findAll('.tt-color-picker__swatch')[0]
    expect((first.element as HTMLElement).style.backgroundColor).toContain(
      '123, 99, 200',
    )
  })

  it('emits update:modelValue on inline swatch click', async () => {
    const wrapper = mount(TtColorPicker, {
      props: { modelValue: BLUE, previewCount: 6 },
    })
    const swatches = wrapper.findAll('.tt-color-picker__swatch')
    await swatches[1].trigger('click')
    const events = wrapper.emitted('update:modelValue')
    expect(events).toBeTruthy()
    expect(events?.[0]).toHaveLength(1)
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(TtColorPicker, {
      props: { disabled: true, previewCount: 6 },
    })
    const swatches = wrapper.findAll('.tt-color-picker__swatch')
    await swatches[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('renders custom colors as flat list', () => {
    const wrapper = mount(TtColorPicker, {
      props: { colors: [RED, BLUE], previewCount: 5 },
    })
    const swatches = wrapper.findAll('.tt-color-picker__swatch')
    expect(swatches).toHaveLength(2)
  })

  it('renders object-form colors with label', async () => {
    const wrapper = mount(TtColorPicker, {
      props: {
        colors: [
          { value: RED, label: 'Cherry' },
          { value: BLUE, label: 'Sky' },
        ],
        previewCount: 2,
      },
    })
    const swatches = wrapper.findAll('.tt-color-picker__swatch')
    expect(swatches).toHaveLength(2)
  })

  it('hides the more button when all colors fit in preview', () => {
    const wrapper = mount(TtColorPicker, {
      props: { colors: [RED, BLUE], previewCount: 5 },
    })
    expect(wrapper.find('.tt-color-picker__more').exists()).toBe(false)
  })

  it('shows the more button when there are extra colors', () => {
    const wrapper = mount(TtColorPicker, {
      props: { previewCount: 4 },
    })
    expect(wrapper.find('.tt-color-picker__more').exists()).toBe(true)
  })

  it('appends recommended colors to the front of the preview list', () => {
    const customRed = 'hsl(355, 80%, 75%)'
    const wrapper = mount(TtColorPicker, {
      props: {
        recommended: [{ value: customRed, label: 'Brand Red' }],
        previewCount: 5,
      },
    })
    const first = wrapper.findAll('.tt-color-picker__swatch')[0]
    expect((first.element as HTMLElement).style.backgroundColor).not.toBe('')
  })

  it('respects modelValue when provided alongside recommended', () => {
    const customRed = 'hsl(355, 80%, 75%)'
    const wrapper = mount(TtColorPicker, {
      props: {
        modelValue: customRed,
        recommended: [{ value: customRed, label: 'Brand Red' }],
        previewCount: 5,
      },
    })
    expect(wrapper.find('.tt-color-picker__swatch--active').exists()).toBe(true)
  })

  it('shows current color in preview when selected from beyond previewCount', () => {
    const colors = Array.from({ length: 12 }, (_, i) => `hsl(${i * 30}, 60%, 80%)`)
    const beyond = colors[8]
    const wrapper = mount(TtColorPicker, {
      props: { colors, modelValue: beyond, previewCount: 5 },
    })
    const swatches = wrapper.findAll('.tt-color-picker__swatch')
    expect(swatches).toHaveLength(5)

    const first = swatches[0]
    expect((first.element as HTMLElement).style.backgroundColor).not.toBe('')

    expect(wrapper.find('.tt-color-picker__swatch--active').exists()).toBe(true)
    expect(first.classes()).toContain('tt-color-picker__swatch--active')
  })

  it('marks the grid tick after selecting in popup (tempColor reactivity)', async () => {
    const wrapper = mount(TtColorPicker, {
      props: { modelValue: '', previewCount: 4 },
    })

    await wrapper.find('.tt-color-picker__more').trigger('click')

    const gridItems = wrapper.findAll('.tt-color-picker__grid-item')
    expect(gridItems.length).toBeGreaterThan(0)

    await gridItems[2].trigger('click')

    const activeGrid = wrapper.find('.tt-color-picker__grid-item--active')
    expect(activeGrid.exists()).toBe(true)
    expect(wrapper.find('.tt-color-picker__grid-tick').exists()).toBe(true)
  })
})
