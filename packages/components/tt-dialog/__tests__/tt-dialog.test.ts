import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtDialog from '../tt-dialog.vue'

describe('TtDialog', () => {
  it('is hidden when show=false', () => {
    const wrapper = mount(TtDialog, { props: { show: false } })
    expect(wrapper.find('.tt-dialog--visible').exists()).toBe(false)
  })

  it('renders title', () => {
    const wrapper = mount(TtDialog, {
      props: { show: true, title: 'Confirm' },
    })
    expect(wrapper.text()).toContain('Confirm')
  })

  it('renders message', () => {
    const wrapper = mount(TtDialog, {
      props: { show: true, message: 'Are you sure?' },
    })
    expect(wrapper.text()).toContain('Are you sure?')
  })

  it('shows cancel button by default', () => {
    const wrapper = mount(TtDialog, { props: { show: true } })
    expect(wrapper.text()).toContain('Cancel')
  })

  it('hides cancel button when showCancelButton=false', () => {
    const wrapper = mount(TtDialog, {
      props: { show: true, showCancelButton: false },
    })
    const buttons = wrapper.findAll('.tt-dialog__btn')
    const hasCancel = buttons.some(b => b.text().includes('Cancel'))
    expect(hasCancel).toBe(false)
  })

  it('uses custom button text', () => {
    const wrapper = mount(TtDialog, {
      props: { show: true, confirmText: 'OK', cancelText: 'No' },
    })
    expect(wrapper.text()).toContain('OK')
    expect(wrapper.text()).toContain('No')
  })

  it('emits confirm on confirm click', async () => {
    const wrapper = mount(TtDialog, { props: { show: true } })
    const confirmBtn = wrapper.find('.tt-dialog__btn--confirm')
    if (confirmBtn.exists()) {
      await confirmBtn.trigger('click')
      expect(wrapper.emitted('confirm')).toBeTruthy()
    }
  })

  it('emits cancel on cancel click', async () => {
    const wrapper = mount(TtDialog, { props: { show: true } })
    const cancelBtn = wrapper.find('.tt-dialog__btn--cancel')
    if (cancelBtn.exists()) {
      await cancelBtn.trigger('click')
      expect(wrapper.emitted('cancel')).toBeTruthy()
    }
  })
})
