import { describe, it, expect, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import TtTooltip from '../tt-tooltip.vue'

interface Rect {
  left: number
  top: number
  right: number
  bottom: number
  width: number
  height: number
}

interface MockMap {
  trigger: Rect
  popup: Rect
  windowWidth: number
  windowHeight: number
}

const DEFAULT_MOCK: MockMap = {
  trigger: { left: 100, top: 100, right: 160, bottom: 130, width: 60, height: 30 },
  popup: { left: 0, top: 0, right: 200, bottom: 60, width: 200, height: 60 },
  windowWidth: 375,
  windowHeight: 667,
}

let currentMock: MockMap = { ...DEFAULT_MOCK }

function installUniMock(mock: MockMap = DEFAULT_MOCK) {
  currentMock = { ...mock }
  ;(globalThis as unknown as { uni: unknown }).uni = {
    createSelectorQuery: () => ({
      in() {
        return this
      },
      select(selector: string) {
        return {
          boundingClientRect(cb: (rect: Rect | null) => void) {
            // dispatch by id prefix
            const isTrigger = selector.includes('trg')
            const isPopup = selector.includes('pop')
            return {
              exec() {
                if (isTrigger) cb(currentMock.trigger)
                else if (isPopup) cb(currentMock.popup)
                else cb(null)
              },
            }
          },
        }
      },
    }),
    getSystemInfoSync: () => ({
      windowWidth: currentMock.windowWidth,
      windowHeight: currentMock.windowHeight,
      screenWidth: currentMock.windowWidth,
      screenHeight: currentMock.windowHeight,
    }),
  }
}

function uninstallUniMock() {
  delete (globalThis as unknown as { uni?: unknown }).uni
}

describe('TtTooltip', () => {
  afterEach(() => {
    uninstallUniMock()
  })

  describe('rendering & slots', () => {
    it('renders default slot', () => {
      const wrapper = mount(TtTooltip, { props: { content: 'Tip' }, slots: { default: '<span>Hover</span>' } })
      expect(wrapper.text()).toContain('Hover')
    })

    it('renders content prop', () => {
      const wrapper = mount(TtTooltip, { props: { content: 'Tip text', show: true } })
      expect(wrapper.text()).toContain('Tip text')
    })

    it('renders content slot (rich)', () => {
      const wrapper = mount(TtTooltip, {
        props: { show: true },
        slots: { content: '<view class="menu"><text>Item A</text></view>' },
      })
      expect(wrapper.find('.menu').exists()).toBe(true)
    })
  })

  describe('trigger & visibility', () => {
    it('toggles on click trigger', async () => {
      const wrapper = mount(TtTooltip, { props: { content: 'T' }, slots: { default: '<span>x</span>' } })
      expect(wrapper.find('.tt-tooltip__popup').exists()).toBe(false)
      await wrapper.find('.tt-tooltip__trigger').trigger('click')
      expect(wrapper.find('.tt-tooltip__popup').exists()).toBe(true)
      await wrapper.find('.tt-tooltip__trigger').trigger('click')
      expect(wrapper.find('.tt-tooltip__popup').exists()).toBe(false)
    })

    it('emits update:show', async () => {
      const wrapper = mount(TtTooltip, { props: { content: 'T' }, slots: { default: '<span>x</span>' } })
      await wrapper.find('.tt-tooltip__trigger').trigger('click')
      expect(wrapper.emitted('update:show')?.[0]).toEqual([true])
    })

    it('manual trigger ignores click', async () => {
      const wrapper = mount(TtTooltip, {
        props: { content: 'M', trigger: 'manual' },
        slots: { default: '<span>x</span>' },
      })
      await wrapper.find('.tt-tooltip__trigger').trigger('click')
      expect(wrapper.find('.tt-tooltip__popup').exists()).toBe(false)
    })

    it('respects v-model:show', async () => {
      const wrapper = mount(TtTooltip, { props: { content: 'V', show: true } })
      expect(wrapper.find('.tt-tooltip__popup').exists()).toBe(true)
      await wrapper.setProps({ show: false })
      expect(wrapper.find('.tt-tooltip__popup').exists()).toBe(false)
    })
  })

  describe('backdrop & click outside', () => {
    it('renders backdrop by default when visible', () => {
      const wrapper = mount(TtTooltip, { props: { content: 'B', show: true } })
      expect(wrapper.find('.tt-tooltip__backdrop').exists()).toBe(true)
    })

    it('hides on backdrop click', async () => {
      const wrapper = mount(TtTooltip, { props: { content: 'C', show: true } })
      await wrapper.find('.tt-tooltip__backdrop').trigger('click')
      expect(wrapper.find('.tt-tooltip__popup').exists()).toBe(false)
    })

    it('omits backdrop when closeOnClickOutside=false', () => {
      const wrapper = mount(TtTooltip, { props: { content: 'X', show: true, closeOnClickOutside: false } })
      expect(wrapper.find('.tt-tooltip__backdrop').exists()).toBe(false)
    })
  })

  describe('arrow & variant', () => {
    it('renders arrow by default', () => {
      const w = mount(TtTooltip, { props: { content: 'A', show: true } })
      expect(w.find('.tt-tooltip__arrow').exists()).toBe(true)
    })

    it('omits arrow when arrow=false', () => {
      const w = mount(TtTooltip, { props: { content: 'A', show: true, arrow: false } })
      expect(w.find('.tt-tooltip__arrow').exists()).toBe(false)
    })

    it('applies variant inner class', () => {
      const wDark = mount(TtTooltip, { props: { content: 'd', show: true, variant: 'dark' } })
      expect(wDark.find('.tt-tooltip__inner--dark').exists()).toBe(true)

      const wLight = mount(TtTooltip, { props: { content: 'l', show: true, variant: 'light' } })
      expect(wLight.find('.tt-tooltip__inner--light').exists()).toBe(true)
    })
  })

  describe('boundary detection (selector-query path)', () => {
    async function settle() {
      // run microtasks (nextTick + queryRect promises + arrow recompute)
      await flushPromises()
      await flushPromises()
      await flushPromises()
    }

    it('uses given placement when popup fits', async () => {
      installUniMock({
        trigger: { left: 100, top: 200, right: 160, bottom: 230, width: 60, height: 30 },
        popup: { left: 0, top: 0, right: 100, bottom: 40, width: 100, height: 40 },
        windowWidth: 375,
        windowHeight: 667,
      })
      const wrapper = mount(TtTooltip, {
        props: { content: 'fit', show: true, placement: 'bottom', boundary: 8, offset: 10 },
      })
      await settle()

      expect(wrapper.find('.tt-tooltip__arrow--bottom').exists()).toBe(true)
      const style = wrapper.find('.tt-tooltip__popup').attributes('style') ?? ''
      // ideal: top = trigger.bottom (230) + offset (10) = 240
      expect(style).toMatch(/top:\s*240px/)
    })

    it('clamps left when popup overflows on the left edge', async () => {
      installUniMock({
        // trigger near left edge (x=10), popup wider than trigger so center alignment overflows
        trigger: { left: 10, top: 200, right: 50, bottom: 230, width: 40, height: 30 },
        popup: { left: 0, top: 0, right: 200, bottom: 40, width: 200, height: 40 },
        windowWidth: 375,
        windowHeight: 667,
      })
      const wrapper = mount(TtTooltip, {
        props: { content: 'clamp', show: true, placement: 'bottom', boundary: 8, offset: 10 },
      })
      await settle()

      const style = wrapper.find('.tt-tooltip__popup').attributes('style') ?? ''
      // ideal left = 10 + (40-200)/2 = -70 → clamped to boundary 8
      expect(style).toMatch(/left:\s*8px/)
    })

    it('clamps right when popup overflows on the right edge', async () => {
      installUniMock({
        // trigger near right edge
        trigger: { left: 340, top: 200, right: 370, bottom: 230, width: 30, height: 30 },
        popup: { left: 0, top: 0, right: 200, bottom: 40, width: 200, height: 40 },
        windowWidth: 375,
        windowHeight: 667,
      })
      const wrapper = mount(TtTooltip, {
        props: { content: 'clamp-right', show: true, placement: 'bottom', boundary: 8, offset: 10 },
      })
      await settle()

      const style = wrapper.find('.tt-tooltip__popup').attributes('style') ?? ''
      // ideal left = 340 + (30-200)/2 = 255; right edge would be 255+200=455 > 375
      // clamp: maxLeft = 375 - 200 - 8 = 167
      expect(style).toMatch(/left:\s*167px/)
    })

    it('flips placement from top → bottom when not enough space above', async () => {
      installUniMock({
        // trigger near top, no room for popup above
        trigger: { left: 100, top: 20, right: 160, bottom: 50, width: 60, height: 30 },
        popup: { left: 0, top: 0, right: 100, bottom: 40, width: 100, height: 40 },
        windowWidth: 375,
        windowHeight: 667,
      })
      const wrapper = mount(TtTooltip, {
        props: { content: 'flip', show: true, placement: 'top', boundary: 8, offset: 10 },
      })
      await settle()

      // arrow class should reflect actual placement after flip
      expect(wrapper.find('.tt-tooltip__arrow--bottom').exists()).toBe(true)
      const style = wrapper.find('.tt-tooltip__popup').attributes('style') ?? ''
      // bottom: top = trigger.bottom (50) + offset (10) = 60
      expect(style).toMatch(/top:\s*60px/)
    })

    it('does not flip when disableFlip=true (clamps instead)', async () => {
      installUniMock({
        trigger: { left: 100, top: 20, right: 160, bottom: 50, width: 60, height: 30 },
        popup: { left: 0, top: 0, right: 100, bottom: 40, width: 100, height: 40 },
        windowWidth: 375,
        windowHeight: 667,
      })
      const wrapper = mount(TtTooltip, {
        props: { content: 'noflip', show: true, placement: 'top', boundary: 8, offset: 10, disableFlip: true },
      })
      await settle()

      expect(wrapper.find('.tt-tooltip__arrow--top').exists()).toBe(true)
      const style = wrapper.find('.tt-tooltip__popup').attributes('style') ?? ''
      // ideal top = 20 - 40 - 10 = -30 → clamped to 8
      expect(style).toMatch(/top:\s*8px/)
    })

    it('respects align=start (left edge of popup aligns to trigger left)', async () => {
      installUniMock({
        trigger: { left: 100, top: 200, right: 130, bottom: 230, width: 30, height: 30 },
        popup: { left: 0, top: 0, right: 100, bottom: 40, width: 100, height: 40 },
        windowWidth: 375,
        windowHeight: 667,
      })
      const wrapper = mount(TtTooltip, {
        props: { content: 'align', show: true, placement: 'bottom', align: 'start', boundary: 8, offset: 10 },
      })
      await settle()

      const style = wrapper.find('.tt-tooltip__popup').attributes('style') ?? ''
      // align=start → left = trigger.left = 100
      expect(style).toMatch(/left:\s*100px/)
    })

    it('respects align=end (right edge of popup aligns to trigger right)', async () => {
      installUniMock({
        trigger: { left: 200, top: 200, right: 240, bottom: 230, width: 40, height: 30 },
        popup: { left: 0, top: 0, right: 100, bottom: 40, width: 100, height: 40 },
        windowWidth: 375,
        windowHeight: 667,
      })
      const wrapper = mount(TtTooltip, {
        props: { content: 'align-end', show: true, placement: 'bottom', align: 'end', boundary: 8, offset: 10 },
      })
      await settle()

      const style = wrapper.find('.tt-tooltip__popup').attributes('style') ?? ''
      // align=end → left = trigger.right - popup.width = 240 - 100 = 140
      expect(style).toMatch(/left:\s*140px/)
    })
  })
})
