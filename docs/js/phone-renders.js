window.TTDocs = window.TTDocs || {}

;(function buildPhoneDemos() {
  const tips = (en, zh) => ({ en, zh })

  const buttonClasses = {
    default: 'p-btn-default',
    secondary: 'p-btn-secondary',
    destructive: 'p-btn-destructive',
    outline: 'p-btn-outline',
    ghost: 'p-btn-ghost',
  }

  function demo(id, tip, html, mount) {
    return { id, tip, html, mount }
  }

  function q(root, selector) {
    return root.querySelector(selector)
  }

  function qa(root, selector) {
    return Array.from(root.querySelectorAll(selector))
  }

  function section(label, body) {
    return `<section class="p-sec"><div class="p-label">${label}</div>${body}</section>`
  }

  function surface(title, subtitle, body) {
    return `<div class="p-surface">
      <div class="p-title">${title}</div>
      ${subtitle ? `<div class="p-subtitle">${subtitle}</div>` : ''}
      ${body ? `<div class="p-stack" style="margin-top:10px">${body}</div>` : ''}
    </div>`
  }

  function chip(label, attrs = '') {
    return `<button type="button" class="p-chip" ${attrs}>${label}</button>`
  }

  function uiButton(label, cls = 'p-btn-default', attrs = '') {
    return `<button type="button" class="p-btn ${cls}" ${attrs}>${label}</button>`
  }

  function hiddenPanel(className, body) {
    return `<div class="${className} p-hidden">${body}</div>`
  }

  function delegate(root, eventName, handler) {
    root.addEventListener(eventName, handler)
    return () => root.removeEventListener(eventName, handler)
  }

  function getComp(id) {
    return (window.TTDocs.allComponents || []).find((item) => item.id === id)
  }

  function getTipText(tip, lang) {
    if (!tip) return ''
    if (typeof tip === 'string') return tip
    return tip[lang] || tip.en || ''
  }

  function fallbackDemo(id, ctx) {
    const comp = getComp(id)
    const title = comp ? comp.name : 'Preview'
    const desc = ctx.lang === 'zh' && comp && comp.descZh ? comp.descZh : comp?.desc || 'Preview'
    const props = (comp?.props || []).slice(0, 4).map(([name, type]) => (
      `<div class="p-inline-actions"><span class="p-note">${name}</span><span class="p-demo-value">${type}</span></div>`
    )).join('')
    const examples = (comp?.examples || []).slice(0, 2).map((item) => (
      `<span class="p-badge-soft">${ctx.lang === 'zh' && item.titleZh ? item.titleZh : item.title}</span>`
    )).join('')

    return demo(
      id,
      tips(
        'This preview focuses on layout combinations and the key API surface.',
        '这个预览主要展示布局组合和核心 API。'
      ),
      `<div class="p-stack">
        ${surface(title, desc, `
          <div class="p-cluster">${examples || '<span class="p-badge-soft">Quick Start</span>'}</div>
          <div class="p-divider-space"></div>
          ${props || '<div class="p-note">Open the examples on the left for complete usage patterns.</div>'}
        `)}
        ${surface(
          ctx.lang === 'zh' ? '文档建议' : 'Docs Tips',
          ctx.lang === 'zh' ? '查看左侧多段示例，组合真实页面结构。' : 'Use the example cards on the left to compose real screens.',
          `<div class="p-note">${ctx.lang === 'zh'
            ? '展示类组件会偏重状态、组合和主题示例；表单/反馈类组件则优先演示交互。'
            : 'Display components focus on state, composition, and theming; form / feedback components prioritise interaction.'}</div>`
        )}
      </div>`
    )
  }

  const renderers = {
    button(ctx) {
      return demo(
        'button',
        tips('Switch variant and state, then click the CTA.', '切换按钮风格和状态，然后点击 CTA。'),
        `<div class="p-stack">
          ${section('Variants', `<div class="p-chip-row">
            ${chip('Default', 'data-variant="default"')}
            ${chip('Secondary', 'data-variant="secondary"')}
            ${chip('Outline', 'data-variant="outline"')}
            ${chip('Ghost', 'data-variant="ghost"')}
            ${chip('Danger', 'data-variant="destructive"')}
          </div>`)}
          ${section('State', `<div class="p-chip-row">
            ${chip('SM', 'data-size="sm"')}
            ${chip('MD', 'data-size="md"')}
            ${chip('LG', 'data-size="lg"')}
            ${chip('Loading', 'data-toggle="loading"')}
            ${chip('Disabled', 'data-toggle="disabled"')}
          </div>`)}
          ${surface('Live CTA', 'Click to simulate a real action.', `
            <div class="p-stack">
              ${uiButton('Publish update', 'p-btn-default', 'data-live-button')}
              <div class="p-inline-actions">
                <span class="p-note">Last action</span>
                <span class="p-demo-value" data-live-status>Idle</span>
              </div>
            </div>
          `)}
        </div>`,
        (root) => {
          const state = { variant: 'default', size: 'md', disabled: false, loading: false, clicks: 0 }
          const button = q(root, '[data-live-button]')
          const status = q(root, '[data-live-status]')

          function render() {
            qa(root, '[data-variant]').forEach((node) => node.classList.toggle('is-active', node.dataset.variant === state.variant))
            qa(root, '[data-size]').forEach((node) => node.classList.toggle('is-active', node.dataset.size === state.size))
            qa(root, '[data-toggle]').forEach((node) => node.classList.toggle('is-active', !!state[node.dataset.toggle]))
            button.className = `p-btn ${buttonClasses[state.variant]}`
            button.disabled = state.disabled || state.loading
            button.textContent = state.loading ? 'Saving...' : 'Publish update'
            button.style.width = state.size === 'lg' ? '100%' : 'auto'
            button.style.height = state.size === 'sm' ? '24px' : state.size === 'lg' ? '34px' : '28px'
            button.style.fontSize = state.size === 'sm' ? '10px' : state.size === 'lg' ? '13px' : '11px'
            button.style.opacity = state.disabled ? '0.5' : state.loading ? '0.72' : '1'
            button.style.cursor = state.disabled ? 'not-allowed' : 'pointer'
          }

          render()

          return delegate(root, 'click', (event) => {
            const variant = event.target.closest('[data-variant]')
            const size = event.target.closest('[data-size]')
            const toggle = event.target.closest('[data-toggle]')
            const liveButton = event.target.closest('[data-live-button]')

            if (variant) {
              state.variant = variant.dataset.variant
              render()
              return
            }

            if (size) {
              state.size = size.dataset.size
              render()
              return
            }

            if (toggle) {
              const key = toggle.dataset.toggle
              state[key] = !state[key]
              toggle.classList.toggle('is-active', state[key])
              render()
              return
            }

            if (liveButton && !state.disabled && !state.loading) {
              state.clicks += 1
              status.textContent = `Clicked ${state.clicks}x`
            }
          })
        }
      )
    },
    input() {
      return demo(
        'input',
        tips('Type, clear, or apply a preset value.', '输入、清空，或者点击预设值。'),
        `<div class="p-stack">
          ${section('Presets', `<div class="p-chip-row">
            ${chip('Ava Chen', 'data-fill="Ava Chen"')}
            ${chip('release-note', 'data-fill="release-note"')}
            ${chip('api.zoom.us', 'data-fill="api.zoom.us"')}
          </div>`)}
          ${surface('Interactive Input', 'Includes clear and live mirror feedback.', `
            <div class="p-stack">
              <div class="p-inline-actions">
                <input class="p-input" data-demo-input placeholder="Type something..." value="Ava Chen" />
                ${uiButton('Clear', 'p-btn-outline', 'style="height:32px;padding:0 10px" data-clear')}
              </div>
              <div class="p-inline-actions">
                <span class="p-note">Mirror</span>
                <span class="p-demo-value" data-input-value>Ava Chen</span>
              </div>
            </div>
          `)}
        </div>`,
        (root) => {
          const input = q(root, '[data-demo-input]')
          const mirror = q(root, '[data-input-value]')

          const updateMirror = () => { mirror.textContent = input.value || 'Empty' }
          updateMirror()

          const cleanups = []
          cleanups.push(delegate(root, 'click', (event) => {
            const fill = event.target.closest('[data-fill]')
            if (fill) {
              input.value = fill.dataset.fill
              updateMirror()
            }
            if (event.target.closest('[data-clear]')) {
              input.value = ''
              updateMirror()
              input.focus()
            }
          }))
          cleanups.push(delegate(input, 'input', updateMirror))
          return () => cleanups.forEach((fn) => fn())
        }
      )
    },
    textarea() {
      return demo(
        'textarea',
        tips('Try writing feedback and watch the live count update.', '输入反馈内容，实时查看字数变化。'),
        `<div class="p-stack">
          ${section('Templates', `<div class="p-chip-row">
            ${chip('Bug report', 'data-template="Bug report: steps to reproduce..."')}
            ${chip('Idea', 'data-template="Idea: bundle the mobile filters into a bottom sheet."')}
          </div>`)}
          ${surface('Feedback Box', 'Auto-size and word count feel.', `
            <div class="p-stack">
              <textarea class="p-input" data-demo-textarea style="min-height:92px;padding:10px;resize:none;font-family:inherit">The release checklist looks good.</textarea>
              <div class="p-inline-actions">
                <span class="p-note">Characters</span>
                <span class="p-demo-value" data-textarea-count>31 / 240</span>
              </div>
            </div>
          `)}
        </div>`,
        (root) => {
          const textarea = q(root, '[data-demo-textarea]')
          const counter = q(root, '[data-textarea-count]')

          const update = () => { counter.textContent = `${textarea.value.length} / 240` }
          update()

          const cleanups = []
          cleanups.push(delegate(root, 'click', (event) => {
            const template = event.target.closest('[data-template]')
            if (template) {
              textarea.value = template.dataset.template
              update()
            }
          }))
          cleanups.push(delegate(textarea, 'input', update))
          return () => cleanups.forEach((fn) => fn())
        }
      )
    },
    checkbox() {
      return demo(
        'checkbox',
        tips('Toggle checklist items and watch the completed count.', '勾选清单项，查看完成数量变化。'),
        `<div class="p-stack">
          ${surface('Release Checklist', 'Tap rows to toggle complete / pending.', `
            <div class="p-list">
              <div class="p-list-item is-active" data-check-row data-on="1"><span>Update changelog</span><span class="p-badge-soft">Done</span></div>
              <div class="p-list-item" data-check-row data-on="0"><span>Notify QA channel</span><span class="p-note">Pending</span></div>
              <div class="p-list-item" data-check-row data-on="0"><span>Upload app build</span><span class="p-note">Pending</span></div>
            </div>
            <div class="p-inline-actions">
              <span class="p-note">Completed</span>
              <span class="p-demo-value" data-check-count>1 / 3</span>
            </div>
          `)}
        </div>`,
        (root) => {
          const count = q(root, '[data-check-count]')
          const render = () => {
            const rows = qa(root, '[data-check-row]')
            const done = rows.filter((row) => row.dataset.on === '1').length
            count.textContent = `${done} / ${rows.length}`
            rows.forEach((row) => {
              const on = row.dataset.on === '1'
              row.classList.toggle('is-active', on)
              row.lastElementChild.className = on ? 'p-badge-soft' : 'p-note'
              row.lastElementChild.textContent = on ? 'Done' : 'Pending'
            })
          }
          render()
          return delegate(root, 'click', (event) => {
            const row = event.target.closest('[data-check-row]')
            if (!row) return
            row.dataset.on = row.dataset.on === '1' ? '0' : '1'
            render()
          })
        }
      )
    },
    radio() {
      return demo(
        'radio',
        tips('Select a single option to simulate real radio behaviour.', '选择一个选项，模拟真实单选行为。'),
        `<div class="p-stack">
          ${surface('Payment Method', 'Only one option can stay active.', `
            <div class="p-list">
              <div class="p-list-item is-active" data-radio="card"><span>Credit Card</span><span class="p-status"><span class="p-status-dot"></span>Default</span></div>
              <div class="p-list-item" data-radio="bank"><span>Bank Transfer</span><span class="p-note">2-3 business days</span></div>
              <div class="p-list-item" data-radio="wallet"><span>Wallet Balance</span><span class="p-note">Ready</span></div>
            </div>
            <div class="p-inline-actions">
              <span class="p-note">Selected</span>
              <span class="p-demo-value" data-radio-value>card</span>
            </div>
          `)}
        </div>`,
        (root) => delegate(root, 'click', (event) => {
          const row = event.target.closest('[data-radio]')
          if (!row) return
          qa(root, '[data-radio]').forEach((item) => item.classList.toggle('is-active', item === row))
          q(root, '[data-radio-value]').textContent = row.dataset.radio
        })
      )
    },
    switch() {
      return demo(
        'switch',
        tips('Toggle multiple preferences and inspect the summary.', '切换多项偏好设置，并查看汇总状态。'),
        `<div class="p-stack">
          ${surface('Preferences', 'Independent switches with status summary.', `
            <div class="p-list">
              <div class="p-inline-actions"><span>Push alerts</span><span class="p-switch p-switch-on" data-switch="push"></span></div>
              <div class="p-inline-actions"><span>Email digest</span><span class="p-switch" data-switch="email"></span></div>
              <div class="p-inline-actions"><span>Dark mode sync</span><span class="p-switch p-switch-on" data-switch="theme"></span></div>
            </div>
            <div class="p-inline-actions">
              <span class="p-note">Enabled</span>
              <span class="p-demo-value" data-switch-count>2 / 3</span>
            </div>
          `)}
        </div>`,
        (root) => {
          const count = q(root, '[data-switch-count]')
          const render = () => {
            const on = qa(root, '[data-switch].p-switch-on').length
            count.textContent = `${on} / ${qa(root, '[data-switch]').length}`
          }
          render()
          return delegate(root, 'click', (event) => {
            const toggle = event.target.closest('[data-switch]')
            if (!toggle) return
            toggle.classList.toggle('p-switch-on')
            render()
          })
        }
      )
    },
    search() {
      return demo(
        'search',
        tips('Type or use a history chip to update the fake search result.', '输入关键词或点击历史词条，更新模拟结果。'),
        `<div class="p-stack">
          ${surface('Search', 'Includes history and cancel action.', `
            <div class="p-inline-actions">
              <input class="p-input" data-search-input placeholder="Search orders / users / tickets" value="release" />
              <button type="button" class="p-chip" data-search-cancel>Cancel</button>
            </div>
            <div class="p-chip-row">
              ${chip('release', 'data-search-fill="release"')}
              ${chip('mobile', 'data-search-fill="mobile"')}
              ${chip('payments', 'data-search-fill="payments"')}
            </div>
            <div class="p-inline-actions">
              <span class="p-note">Query</span>
              <span class="p-demo-value" data-search-value>release</span>
            </div>
          `)}
        </div>`,
        (root) => {
          const input = q(root, '[data-search-input]')
          const value = q(root, '[data-search-value]')
          const sync = () => { value.textContent = input.value || 'Empty' }
          sync()

          const cleanups = []
          cleanups.push(delegate(root, 'click', (event) => {
            const fill = event.target.closest('[data-search-fill]')
            if (fill) {
              input.value = fill.dataset.searchFill
              sync()
            }
            if (event.target.closest('[data-search-cancel]')) {
              input.value = ''
              sync()
            }
          }))
          cleanups.push(delegate(input, 'input', sync))
          return () => cleanups.forEach((fn) => fn())
        }
      )
    },
    numberbox() {
      return demo(
        'numberbox',
        tips('Increase or decrease quantity and watch the mock subtotal.', '增减数量，查看模拟小计实时变化。'),
        `<div class="p-stack">
          ${surface('Cart Stepper', 'Bounded between 1 and 8.', `
            <div class="p-inline-actions">
              <div style="display:inline-flex;border:1px solid var(--border);border-radius:8px;overflow:hidden">
                <button type="button" class="p-chip" style="border:none;border-right:1px solid var(--border);border-radius:0" data-step="-1">-</button>
                <span class="p-demo-value" data-step-value style="display:inline-flex;align-items:center;justify-content:center;min-width:42px">2</span>
                <button type="button" class="p-chip" style="border:none;border-left:1px solid var(--border);border-radius:0" data-step="1">+</button>
              </div>
              <span class="p-badge-soft" data-step-total>$38</span>
            </div>
          `)}
        </div>`,
        (root) => {
          const value = q(root, '[data-step-value]')
          const total = q(root, '[data-step-total]')
          let count = 2

          const render = () => {
            value.textContent = String(count)
            total.textContent = `$${count * 19}`
          }
          render()

          return delegate(root, 'click', (event) => {
            const step = event.target.closest('[data-step]')
            if (!step) return
            count = Math.max(1, Math.min(8, count + Number(step.dataset.step)))
            render()
          })
        }
      )
    },
    rate() {
      return demo(
        'rate',
        tips('Click any star to set a score and update the label.', '点击星级设置评分，并同步文案。'),
        `<div class="p-stack">
          ${surface('Review Score', 'Tap a star to update the score.', `
            <div class="p-cluster" data-rate-stars>
              ${[1, 2, 3, 4, 5].map((item) => `<button type="button" class="p-chip" data-rate="${item}">${item}★</button>`).join('')}
            </div>
            <div class="p-inline-actions">
              <span class="p-note">Current</span>
              <span class="p-demo-value" data-rate-value>4 / 5</span>
            </div>
          `)}
        </div>`,
        (root) => {
          const value = q(root, '[data-rate-value]')
          let score = 4
          const render = () => {
            value.textContent = `${score} / 5`
            qa(root, '[data-rate]').forEach((node) => {
              node.classList.toggle('is-active', Number(node.dataset.rate) <= score)
            })
          }
          render()
          return delegate(root, 'click', (event) => {
            const star = event.target.closest('[data-rate]')
            if (!star) return
            score = Number(star.dataset.rate)
            render()
          })
        }
      )
    },
    slider() {
      return demo(
        'slider',
        tips('Drag the range input to simulate slider feedback.', '拖动范围控件，模拟 slider 的反馈。'),
        `<div class="p-stack">
          ${surface('Budget Filter', 'Slide to update the price range.', `
            <input class="p-range" data-slider type="range" min="0" max="100" value="36" />
            <div class="p-progress"><div class="p-progress-bar" data-slider-bar style="width:36%"></div></div>
            <div class="p-inline-actions">
              <span class="p-note">Value</span>
              <span class="p-demo-value" data-slider-value>36</span>
            </div>
          `)}
        </div>`,
        (root) => {
          const slider = q(root, '[data-slider]')
          const bar = q(root, '[data-slider-bar]')
          const value = q(root, '[data-slider-value]')
          const render = () => {
            bar.style.width = `${slider.value}%`
            value.textContent = slider.value
          }
          render()
          return delegate(slider, 'input', render)
        }
      )
    },
    picker() {
      return demo(
        'picker',
        tips('Open the panel, pick an option, and confirm it.', '打开面板、选择选项并确认。'),
        `<div class="p-stack" style="position:relative;min-height:220px">
          ${surface('Department', 'Controlled bottom sheet behaviour.', `
            ${uiButton('Open picker', 'p-btn-outline', 'data-picker-open')}
            <div class="p-inline-actions">
              <span class="p-note">Selected</span>
              <span class="p-demo-value" data-picker-value>Engineering / L2</span>
            </div>
          `)}
          ${hiddenPanel('p-overlay', '')}
          ${hiddenPanel('p-sheet', `
            <div class="p-stack">
              <div class="p-title">Select team</div>
              <div class="p-list">
                <div class="p-list-item is-active" data-picker-item="Engineering / L2">Engineering / L2</div>
                <div class="p-list-item" data-picker-item="Design / L1">Design / L1</div>
                <div class="p-list-item" data-picker-item="Marketing / L3">Marketing / L3</div>
              </div>
              <div class="p-inline-actions">
                ${uiButton('Cancel', 'p-btn-outline', 'style="height:28px" data-picker-cancel')}
                ${uiButton('Confirm', 'p-btn-default', 'style="height:28px" data-picker-confirm')}
              </div>
            </div>
          `)}
        </div>`,
        (root) => {
          const overlay = q(root, '.p-overlay')
          const sheet = q(root, '.p-sheet')
          const value = q(root, '[data-picker-value]')
          let draft = value.textContent

          const open = () => { overlay.classList.remove('p-hidden'); sheet.classList.remove('p-hidden') }
          const close = () => { overlay.classList.add('p-hidden'); sheet.classList.add('p-hidden') }

          return delegate(root, 'click', (event) => {
            if (event.target.closest('[data-picker-open]')) open()
            if (event.target.closest('[data-picker-cancel]') || event.target.closest('.p-overlay')) close()

            const item = event.target.closest('[data-picker-item]')
            if (item) {
              draft = item.dataset.pickerItem
              qa(root, '[data-picker-item]').forEach((node) => node.classList.toggle('is-active', node === item))
            }

            if (event.target.closest('[data-picker-confirm]')) {
              value.textContent = draft
              close()
            }
          })
        }
      )
    },
    datepicker() {
      return demo(
        'datepicker',
        tips('Pick a mocked date from the bottom sheet.', '在底部面板中选择一个模拟日期。'),
        `<div class="p-stack" style="position:relative;min-height:220px">
          ${surface('Delivery Date', 'Open the sheet to pick a day.', `
            ${uiButton('Choose date', 'p-btn-outline', 'data-date-open')}
            <div class="p-inline-actions">
              <span class="p-note">Selected</span>
              <span class="p-demo-value" data-date-value>2026-04-09</span>
            </div>
          `)}
          ${hiddenPanel('p-overlay', '')}
          ${hiddenPanel('p-sheet', `
            <div class="p-stack">
              <div class="p-title">Select date</div>
              <div class="p-list">
                <div class="p-list-item is-active" data-date-item="2026-04-09">2026-04-09</div>
                <div class="p-list-item" data-date-item="2026-04-12">2026-04-12</div>
                <div class="p-list-item" data-date-item="2026-04-16">2026-04-16</div>
              </div>
              <div class="p-inline-actions">
                ${uiButton('Cancel', 'p-btn-outline', 'style="height:28px" data-date-cancel')}
                ${uiButton('Confirm', 'p-btn-default', 'style="height:28px" data-date-confirm')}
              </div>
            </div>
          `)}
        </div>`,
        (root) => {
          const overlay = q(root, '.p-overlay')
          const sheet = q(root, '.p-sheet')
          const value = q(root, '[data-date-value]')
          let draft = value.textContent

          const open = () => { overlay.classList.remove('p-hidden'); sheet.classList.remove('p-hidden') }
          const close = () => { overlay.classList.add('p-hidden'); sheet.classList.add('p-hidden') }

          return delegate(root, 'click', (event) => {
            if (event.target.closest('[data-date-open]')) open()
            if (event.target.closest('[data-date-cancel]') || event.target.closest('.p-overlay')) close()

            const item = event.target.closest('[data-date-item]')
            if (item) {
              draft = item.dataset.dateItem
              qa(root, '[data-date-item]').forEach((node) => node.classList.toggle('is-active', node === item))
            }

            if (event.target.closest('[data-date-confirm]')) {
              value.textContent = draft
              close()
            }
          })
        }
      )
    },
    calendar() {
      return demo(
        'calendar',
        tips('Select available dates; disabled ones cannot be chosen.', '选择可用日期；禁用日期不可点击。'),
        `<div class="p-stack">
          ${surface('April 2026', 'Range-limited days inside the month view.', `
            <div class="p-calendar">
              ${['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'].map((day, index) => {
                const disabled = index < 2 || index > 11
                const selected = day === '09'
                return `<button type="button" class="p-cal-day${selected ? ' is-selected' : ''}${disabled ? ' is-disabled' : ''}" data-cal-day="${day}"${disabled ? ' disabled' : ''}>${day}</button>`
              }).join('')}
            </div>
            <div class="p-inline-actions">
              <span class="p-note">Selected</span>
              <span class="p-demo-value" data-cal-value>2026-04-09</span>
            </div>
          `)}
        </div>`,
        (root) => delegate(root, 'click', (event) => {
          const day = event.target.closest('[data-cal-day]')
          if (!day || day.disabled) return
          qa(root, '[data-cal-day]').forEach((node) => node.classList.toggle('is-selected', node === day))
          q(root, '[data-cal-value]').textContent = `2026-04-${day.dataset.calDay}`
        })
      )
    },
    upload() {
      return demo(
        'upload',
        tips('Add mocked assets or remove existing thumbnails.', '添加模拟资源，或删除现有缩略图。'),
        `<div class="p-stack">
          ${surface('Asset Picker', 'Simulate image upload and removal.', `
            <div class="p-thumb-grid" data-upload-grid>
              <button type="button" class="p-thumb is-filled" data-thumb="Cover">Cover</button>
              <button type="button" class="p-thumb is-filled" data-thumb="Banner">Banner</button>
              <button type="button" class="p-thumb" data-add-thumb>+ Add</button>
            </div>
            <div class="p-inline-actions">
              <span class="p-note">Files</span>
              <span class="p-demo-value" data-upload-count>2 / 6</span>
            </div>
          `)}
        </div>`,
        (root) => {
          const grid = q(root, '[data-upload-grid]')
          const count = q(root, '[data-upload-count]')
          let nextIndex = 3

          const render = () => {
            const files = qa(root, '[data-thumb]').length
            count.textContent = `${files} / 6`
          }
          render()

          return delegate(root, 'click', (event) => {
            const add = event.target.closest('[data-add-thumb]')
            const thumb = event.target.closest('[data-thumb]')
            if (add) {
              if (qa(root, '[data-thumb]').length >= 6) return
              const node = document.createElement('button')
              node.type = 'button'
              node.className = 'p-thumb is-filled'
              node.dataset.thumb = `File ${nextIndex}`
              node.textContent = `File ${nextIndex}`
              nextIndex += 1
              grid.insertBefore(node, add)
              render()
              return
            }
            if (thumb) {
              thumb.remove()
              render()
            }
          })
        }
      )
    },
    tabs() {
      return demo(
        'tabs',
        tips('Switch tabs to update the content panel below.', '切换标签页，内容区域会同步变化。'),
        `<div class="p-stack">
          ${surface('Team Space', 'Segmented nav with linked content.', `
            <div class="p-tabstrip">
              <button type="button" class="is-active" data-tab="Overview">Overview</button>
              <button type="button" data-tab="Analytics">Analytics</button>
              <button type="button" disabled>Members</button>
            </div>
            <div class="p-surface" style="padding:10px">
              <div class="p-title" data-tab-title>Overview</div>
              <div class="p-note" data-tab-body>Daily summary, release health, and pending approvals.</div>
            </div>
          `)}
        </div>`,
        (root) => {
          const title = q(root, '[data-tab-title]')
          const body = q(root, '[data-tab-body]')
          const content = {
            Overview: 'Daily summary, release health, and pending approvals.',
            Analytics: 'Traffic sources, conversion trends, and retention deltas.',
          }
          return delegate(root, 'click', (event) => {
            const tab = event.target.closest('[data-tab]')
            if (!tab) return
            qa(root, '[data-tab]').forEach((node) => node.classList.toggle('is-active', node === tab))
            title.textContent = tab.dataset.tab
            body.textContent = content[tab.dataset.tab]
          })
        }
      )
    },
    pagination() {
      return demo(
        'pagination',
        tips('Move between pages and watch the current page update.', '切换页码，当前页会实时更新。'),
        `<div class="p-stack">
          ${surface('Dataset Pages', 'Classic pagination with active highlight.', `
            <div class="p-cluster" data-pages>
              ${[1, 2, 3, 4, 5].map((page) => `<button type="button" class="p-chip${page === 2 ? ' is-active' : ''}" data-page="${page}">${page}</button>`).join('')}
            </div>
            <div class="p-inline-actions">
              <span class="p-note">Current page</span>
              <span class="p-demo-value" data-page-value>2</span>
            </div>
          `)}
        </div>`,
        (root) => delegate(root, 'click', (event) => {
          const page = event.target.closest('[data-page]')
          if (!page) return
          qa(root, '[data-page]').forEach((node) => node.classList.toggle('is-active', node === page))
          q(root, '[data-page-value]').textContent = page.dataset.page
        })
      )
    },
    dropdownmenu() {
      return demo(
        'dropdownmenu',
        tips('Open the filter menu and pick a new sort option.', '打开筛选菜单并选择新的排序项。'),
        `<div class="p-stack">
          ${surface('Sort By', 'Simple filter dropdown interaction.', `
            ${uiButton('Newest', 'p-btn-outline', 'data-dd-open style="width:100%;justify-content:space-between"')}
            <div class="p-list p-hidden" data-dd-list style="margin-top:10px">
              <div class="p-list-item is-active" data-dd-item="Newest">Newest</div>
              <div class="p-list-item" data-dd-item="Popular">Popular</div>
              <div class="p-list-item" data-dd-item="Price">Price</div>
            </div>
          `)}
        </div>`,
        (root) => delegate(root, 'click', (event) => {
          const open = event.target.closest('[data-dd-open]')
          const item = event.target.closest('[data-dd-item]')
          const list = q(root, '[data-dd-list]')

          if (open) {
            list.classList.toggle('p-hidden')
          }
          if (item) {
            qa(root, '[data-dd-item]').forEach((node) => node.classList.toggle('is-active', node === item))
            open.textContent = item.dataset.ddItem
            list.classList.add('p-hidden')
          }
        })
      )
    },
    popup() {
      return demo(
        'popup',
        tips('Open and close the overlay to inspect popup behaviour.', '打开和关闭遮罩，查看 popup 行为。'),
        `<div class="p-stack" style="position:relative;min-height:220px">
          ${surface('Overlay Entry', 'Bottom-position popup with close.', `
            ${uiButton('Open popup', 'p-btn-default', 'data-popup-open')}
          `)}
          ${hiddenPanel('p-overlay', '')}
          ${hiddenPanel('p-sheet', `
            <div class="p-stack">
              <div class="p-inline-actions">
                <div class="p-title">Quick actions</div>
                ${uiButton('Close', 'p-btn-outline', 'style="height:26px" data-popup-close')}
              </div>
              <div class="p-note">Filters, shortcuts, and frequently used actions live here.</div>
            </div>
          `)}
        </div>`,
        (root) => {
          const overlay = q(root, '.p-overlay')
          const sheet = q(root, '.p-sheet')
          const open = () => { overlay.classList.remove('p-hidden'); sheet.classList.remove('p-hidden') }
          const close = () => { overlay.classList.add('p-hidden'); sheet.classList.add('p-hidden') }
          return delegate(root, 'click', (event) => {
            if (event.target.closest('[data-popup-open]')) open()
            if (event.target.closest('[data-popup-close]') || event.target.closest('.p-overlay')) close()
          })
        }
      )
    },
    dialog() {
      return demo(
        'dialog',
        tips('Trigger the dialog, then confirm or cancel to close it.', '触发 dialog，再确认或取消关闭。'),
        `<div class="p-stack" style="position:relative;min-height:240px">
          ${surface('Danger Zone', 'Destructive action with explicit confirmation.', `
            ${uiButton('Delete workspace', 'p-btn-destructive', 'data-dialog-open')}
            <div class="p-inline-actions">
              <span class="p-note">Last result</span>
              <span class="p-demo-value" data-dialog-status>Awaiting action</span>
            </div>
          `)}
          ${hiddenPanel('p-overlay', '')}
          ${hiddenPanel('p-sheet', `
            <div class="p-stack">
              <div class="p-title">Delete workspace?</div>
              <div class="p-note">This action cannot be undone once the data is removed.</div>
              <div class="p-inline-actions">
                ${uiButton('Cancel', 'p-btn-outline', 'style="height:28px" data-dialog-cancel')}
                ${uiButton('Delete', 'p-btn-destructive', 'style="height:28px" data-dialog-confirm')}
              </div>
            </div>
          `)}
        </div>`,
        (root) => {
          const overlay = q(root, '.p-overlay')
          const sheet = q(root, '.p-sheet')
          const status = q(root, '[data-dialog-status]')
          const open = () => { overlay.classList.remove('p-hidden'); sheet.classList.remove('p-hidden') }
          const close = () => { overlay.classList.add('p-hidden'); sheet.classList.add('p-hidden') }
          return delegate(root, 'click', (event) => {
            if (event.target.closest('[data-dialog-open]')) open()
            if (event.target.closest('[data-dialog-cancel]') || event.target.closest('.p-overlay')) {
              status.textContent = 'Cancelled'
              close()
            }
            if (event.target.closest('[data-dialog-confirm]')) {
              status.textContent = 'Confirmed'
              close()
            }
          })
        }
      )
    },
    toast() {
      return demo(
        'toast',
        tips('Fire success / info / loading toasts and let them auto-hide.', '触发成功 / 普通 / 加载 toast，并观察自动消失。'),
        `<div class="p-stack" style="position:relative;min-height:180px">
          ${section('Quick Triggers', `<div class="p-cluster">
            ${uiButton('Success', 'p-btn-default', 'data-toast="Saved successfully"')}
            ${uiButton('Info', 'p-btn-outline', 'data-toast="Draft autosaved"')}
            ${uiButton('Loading', 'p-btn-secondary', 'data-toast="Syncing..." data-toast-light="1"')}
          </div>`)}
          <div class="p-toast p-hidden" data-toast-node>Draft autosaved</div>
        </div>`,
        (root) => {
          const toast = q(root, '[data-toast-node]')
          let timer = null
          const clear = () => { if (timer) window.clearTimeout(timer) }
          const hide = () => toast.classList.add('p-hidden')

          const cleanup = delegate(root, 'click', (event) => {
            const btn = event.target.closest('[data-toast]')
            if (!btn) return
            clear()
            toast.textContent = btn.dataset.toast
            toast.classList.toggle('light', btn.dataset.toastLight === '1')
            toast.classList.remove('p-hidden')
            timer = window.setTimeout(hide, btn.dataset.toastLight === '1' ? 1200 : 1600)
          })

          return () => {
            clear()
            cleanup()
          }
        }
      )
    },
    actionsheet() {
      return demo(
        'actionsheet',
        tips('Open the action sheet and choose a mocked action.', '打开 ActionSheet，选择一个模拟操作。'),
        `<div class="p-stack" style="position:relative;min-height:240px">
          ${surface('Message Actions', 'Typical mobile bottom action sheet.', `
            ${uiButton('More actions', 'p-btn-outline', 'data-as-open')}
            <div class="p-inline-actions">
              <span class="p-note">Selected</span>
              <span class="p-demo-value" data-as-value>None</span>
            </div>
          `)}
          ${hiddenPanel('p-overlay', '')}
          ${hiddenPanel('p-sheet', `
            <div class="p-stack">
              <div class="p-title">Choose action</div>
              <div class="p-list">
                <div class="p-list-item" data-as-item="Pin message">Pin message</div>
                <div class="p-list-item" data-as-item="Forward">Forward</div>
                <div class="p-list-item" data-as-item="Delete" style="color:#ef4444">Delete</div>
              </div>
              ${uiButton('Cancel', 'p-btn-outline', 'style="height:28px" data-as-cancel')}
            </div>
          `)}
        </div>`,
        (root) => {
          const overlay = q(root, '.p-overlay')
          const sheet = q(root, '.p-sheet')
          const value = q(root, '[data-as-value]')
          const open = () => { overlay.classList.remove('p-hidden'); sheet.classList.remove('p-hidden') }
          const close = () => { overlay.classList.add('p-hidden'); sheet.classList.add('p-hidden') }
          return delegate(root, 'click', (event) => {
            if (event.target.closest('[data-as-open]')) open()
            if (event.target.closest('[data-as-cancel]') || event.target.closest('.p-overlay')) close()
            const item = event.target.closest('[data-as-item]')
            if (item) {
              value.textContent = item.dataset.asItem
              close()
            }
          })
        }
      )
    },
    sheet() {
      return demo(
        'sheet',
        tips('Open the bottom panel to simulate a settings drawer.', '打开底部面板，模拟设置抽屉。'),
        `<div class="p-stack" style="position:relative;min-height:220px">
          ${surface('Quick Filters', 'Persistent sheet with contextual controls.', `
            ${uiButton('Open panel', 'p-btn-outline', 'data-sheet-open')}
          `)}
          ${hiddenPanel('p-overlay', '')}
          ${hiddenPanel('p-sheet', `
            <div class="p-stack">
              <div class="p-title">Workspace filters</div>
              <div class="p-chip-row">
                <span class="p-badge-soft">Open</span>
                <span class="p-badge-soft">Assigned to me</span>
                <span class="p-badge-soft">Today</span>
              </div>
              ${uiButton('Close', 'p-btn-outline', 'style="height:28px" data-sheet-close')}
            </div>
          `)}
        </div>`,
        (root) => {
          const overlay = q(root, '.p-overlay')
          const sheet = q(root, '.p-sheet')
          const open = () => { overlay.classList.remove('p-hidden'); sheet.classList.remove('p-hidden') }
          const close = () => { overlay.classList.add('p-hidden'); sheet.classList.add('p-hidden') }
          return delegate(root, 'click', (event) => {
            if (event.target.closest('[data-sheet-open]')) open()
            if (event.target.closest('[data-sheet-close]') || event.target.closest('.p-overlay')) close()
          })
        }
      )
    },
    noticebar() {
      return demo(
        'noticebar',
        tips('Dismiss the bar, then restore it to test interaction.', '关闭通知栏，再恢复查看交互效果。'),
        `<div class="p-stack">
          <div class="p-surface" data-notice-wrap>
            <div class="p-inline-actions">
              <div class="p-subtitle">Planned maintenance tonight at 02:00 UTC.</div>
              ${uiButton('x', 'p-btn-outline', 'style="height:24px;padding:0 8px" data-notice-close')}
            </div>
          </div>
          ${uiButton('Restore notice', 'p-btn-outline', 'data-notice-reset')}
        </div>`,
        (root) => delegate(root, 'click', (event) => {
          const wrap = q(root, '[data-notice-wrap]')
          if (event.target.closest('[data-notice-close]')) wrap.classList.add('p-hidden')
          if (event.target.closest('[data-notice-reset]')) wrap.classList.remove('p-hidden')
        })
      )
    },
    collapse() {
      return demo(
        'collapse',
        tips('Expand different panels to inspect accordion behaviour.', '展开不同面板，查看折叠交互。'),
        `<div class="p-stack">
          ${surface('FAQ', 'Tap headers to open / close sections.', `
            <div class="p-list">
              <div class="p-list-item is-active" data-collapse="1">Billing cadence</div>
              <div class="p-note" data-collapse-body="1">Invoices are generated on the first day of each month.</div>
              <div class="p-list-item" data-collapse="2">How to invite members</div>
              <div class="p-note p-hidden" data-collapse-body="2">Open workspace settings and choose Invite members.</div>
              <div class="p-list-item" data-collapse="3">Where to download reports</div>
              <div class="p-note p-hidden" data-collapse-body="3">Reports are available in Analytics → Exports.</div>
            </div>
          `)}
        </div>`,
        (root) => delegate(root, 'click', (event) => {
          const item = event.target.closest('[data-collapse]')
          if (!item) return
          const key = item.dataset.collapse
          qa(root, '[data-collapse]').forEach((node) => node.classList.toggle('is-active', node === item))
          qa(root, '[data-collapse-body]').forEach((node) => node.classList.toggle('p-hidden', node.dataset.collapseBody !== key))
        })
      )
    },
    sidebar() {
      return demo(
        'sidebar',
        tips('Click a section to update the main content area.', '点击侧边项，右侧内容会同步切换。'),
        `<div class="p-stack">
          ${surface('Workspace Menu', 'Sidebar category navigation.', `
            <div style="display:grid;grid-template-columns:92px 1fr;gap:12px">
              <div class="p-list">
                <div class="p-list-item is-active" data-side="Orders">Orders</div>
                <div class="p-list-item" data-side="Coupons">Coupons</div>
                <div class="p-list-item" data-side="Reviews">Reviews</div>
              </div>
              <div class="p-surface" style="padding:10px">
                <div class="p-title" data-side-title>Orders</div>
                <div class="p-note" data-side-body>Track pending deliveries and recent invoices.</div>
              </div>
            </div>
          `)}
        </div>`,
        (root) => {
          const bodyMap = {
            Orders: 'Track pending deliveries and recent invoices.',
            Coupons: 'Manage limited discounts and campaign schedules.',
            Reviews: 'Reply to feedback and moderate flagged content.',
          }
          return delegate(root, 'click', (event) => {
            const item = event.target.closest('[data-side]')
            if (!item) return
            qa(root, '[data-side]').forEach((node) => node.classList.toggle('is-active', node === item))
            q(root, '[data-side-title]').textContent = item.dataset.side
            q(root, '[data-side-body]').textContent = bodyMap[item.dataset.side]
          })
        }
      )
    },
    tabbar() {
      return demo(
        'tabbar',
        tips('Switch the bottom tab to simulate mobile navigation.', '切换底部 tab，模拟移动端导航。'),
        `<div class="p-stack">
          ${surface('Current Screen', 'Tab selection updates the active label.', `
            <div class="p-inline-actions">
              <span class="p-note">Active tab</span>
              <span class="p-demo-value" data-tabbar-value>Home</span>
            </div>
          `)}
          <div class="p-surface" style="padding:8px 10px">
            <div class="p-tabstrip">
              <button type="button" class="is-active" data-tabbar="Home">Home</button>
              <button type="button" data-tabbar="Inbox">Inbox</button>
              <button type="button" data-tabbar="Profile">Profile</button>
            </div>
          </div>
        </div>`,
        (root) => delegate(root, 'click', (event) => {
          const tab = event.target.closest('[data-tabbar]')
          if (!tab) return
          qa(root, '[data-tabbar]').forEach((node) => node.classList.toggle('is-active', node === tab))
          q(root, '[data-tabbar-value]').textContent = tab.dataset.tabbar
        })
      )
    },
    breadcrumb() {
      return demo(
        'breadcrumb',
        tips('Navigate between crumbs to inspect hierarchy feedback.', '点击不同层级，查看面包屑反馈。'),
        `<div class="p-stack">
          ${surface('Project Path', 'Tap a crumb to make it current.', `
            <div class="p-cluster">
              <button type="button" class="p-chip" data-crumb="Workspace">Workspace</button>
              <span class="p-note">/</span>
              <button type="button" class="p-chip" data-crumb="Projects">Projects</button>
              <span class="p-note">/</span>
              <button type="button" class="p-chip is-active" data-crumb="Release Board">Release Board</button>
            </div>
            <div class="p-inline-actions">
              <span class="p-note">Current</span>
              <span class="p-demo-value" data-crumb-value>Release Board</span>
            </div>
          `)}
        </div>`,
        (root) => delegate(root, 'click', (event) => {
          const crumb = event.target.closest('[data-crumb]')
          if (!crumb) return
          qa(root, '[data-crumb]').forEach((node) => node.classList.toggle('is-active', node === crumb))
          q(root, '[data-crumb-value]').textContent = crumb.dataset.crumb
        })
      )
    },
    indexbar() {
      return demo(
        'indexbar',
        tips('Choose a letter to jump the highlighted section.', '点击字母，高亮对应分组。'),
        `<div class="p-stack">
          ${surface('Contact Index', 'Side letters jump between groups.', `
            <div style="display:grid;grid-template-columns:1fr 20px;gap:8px">
              <div class="p-surface" style="padding:10px">
                <div class="p-title" data-index-title>A</div>
                <div class="p-note" data-index-body>Alice, Adam, Amber</div>
              </div>
              <div class="p-list" style="gap:4px">
                ${['A', 'B', 'C', 'D'].map((letter, index) => `<button type="button" class="p-chip${index === 0 ? ' is-active' : ''}" data-index="${letter}" style="padding:0">${letter}</button>`).join('')}
              </div>
            </div>
          `)}
        </div>`,
        (root) => {
          const groups = {
            A: 'Alice, Adam, Amber',
            B: 'Ben, Bella, Brian',
            C: 'Cindy, Chris, Carter',
            D: 'Dora, Daniel, Dawn',
          }
          return delegate(root, 'click', (event) => {
            const letter = event.target.closest('[data-index]')
            if (!letter) return
            qa(root, '[data-index]').forEach((node) => node.classList.toggle('is-active', node === letter))
            q(root, '[data-index-title]').textContent = letter.dataset.index
            q(root, '[data-index-body]').textContent = groups[letter.dataset.index]
          })
        }
      )
    },
    progress() {
      return demo(
        'progress',
        tips('Adjust the stage percentage to preview progress changes.', '调节阶段百分比，预览进度变化。'),
        `<div class="p-stack">
          ${surface('Campaign Progress', 'Drag to change the completion rate.', `
            <input class="p-range" type="range" min="0" max="100" value="68" data-progress />
            <div class="p-progress"><div class="p-progress-bar" data-progress-bar style="width:68%"></div></div>
            <div class="p-inline-actions">
              <span class="p-note">Completion</span>
              <span class="p-demo-value" data-progress-value>68%</span>
            </div>
          `)}
        </div>`,
        (root) => {
          const progress = q(root, '[data-progress]')
          const bar = q(root, '[data-progress-bar]')
          const value = q(root, '[data-progress-value]')
          const update = () => {
            bar.style.width = `${progress.value}%`
            value.textContent = `${progress.value}%`
          }
          update()
          return delegate(progress, 'input', update)
        }
      )
    },
    countdown() {
      return demo(
        'countdown',
        tips('Start or reset a short timer to mimic countdown behaviour.', '开始或重置短计时，模拟倒计时行为。'),
        `<div class="p-stack">
          ${surface('Launch Countdown', 'Five-second demo timer.', `
            <div class="p-inline-actions">
              <span class="p-title" data-countdown-value>00:05</span>
              <div class="p-cluster">
                ${uiButton('Start', 'p-btn-default', 'style="height:28px" data-countdown-start')}
                ${uiButton('Reset', 'p-btn-outline', 'style="height:28px" data-countdown-reset')}
              </div>
            </div>
          `)}
        </div>`,
        (root) => {
          const value = q(root, '[data-countdown-value]')
          let current = 5
          let timer = null

          const render = () => {
            value.textContent = `00:0${current}`
          }

          const stop = () => {
            if (timer) {
              window.clearInterval(timer)
              timer = null
            }
          }

          render()

          const cleanup = delegate(root, 'click', (event) => {
            if (event.target.closest('[data-countdown-start]') && !timer) {
              timer = window.setInterval(() => {
                current = Math.max(0, current - 1)
                render()
                if (current === 0) stop()
              }, 1000)
            }
            if (event.target.closest('[data-countdown-reset]')) {
              stop()
              current = 5
              render()
            }
          })

          return () => {
            stop()
            cleanup()
          }
        }
      )
    },
    list() {
      return demo(
        'list',
        tips('Load more rows until the mock list reaches the end.', '继续加载更多，直到模拟列表完成。'),
        `<div class="p-stack">
          ${surface('Infinite Feed', 'Press load more to append items.', `
            <div class="p-list" data-list-body>
              <div class="p-list-item">Design sync notes</div>
              <div class="p-list-item">Client feedback digest</div>
            </div>
            <div class="p-inline-actions">
              ${uiButton('Load more', 'p-btn-outline', 'style="height:28px" data-list-load')}
              <span class="p-note" data-list-status>2 loaded</span>
            </div>
          `)}
        </div>`,
        (root) => {
          const body = q(root, '[data-list-body]')
          const status = q(root, '[data-list-status]')
          let count = 2

          return delegate(root, 'click', (event) => {
            if (!event.target.closest('[data-list-load]')) return
            if (count >= 5) {
              status.textContent = 'No more data'
              return
            }
            count += 1
            const node = document.createElement('div')
            node.className = 'p-list-item'
            node.textContent = `Generated row ${count}`
            body.appendChild(node)
            status.textContent = `${count} loaded`
          })
        }
      )
    },
    swiper() {
      return demo(
        'swiper',
        tips('Move across slides to preview carousel state changes.', '切换 slide，预览轮播状态变化。'),
        `<div class="p-stack">
          ${surface('Feature Carousel', 'Next / prev controls update the active slide.', `
            <div class="p-surface" style="padding:16px;background:linear-gradient(135deg,var(--primary),#4f46e5);color:#fff">
              <div class="p-title" style="color:#fff" data-swiper-title>Slide 1</div>
              <div class="p-note" style="color:rgba(255,255,255,.82)" data-swiper-body>Overview of the release roadmap and milestones.</div>
            </div>
            <div class="p-inline-actions">
              ${uiButton('Prev', 'p-btn-outline', 'style="height:28px" data-swiper-prev')}
              ${uiButton('Next', 'p-btn-default', 'style="height:28px" data-swiper-next')}
            </div>
          `)}
        </div>`,
        (root) => {
          const slides = [
            ['Slide 1', 'Overview of the release roadmap and milestones.'],
            ['Slide 2', 'Design review highlights and unresolved edge cases.'],
            ['Slide 3', 'Final QA checklist and launch timeline.'],
          ]
          const title = q(root, '[data-swiper-title]')
          const body = q(root, '[data-swiper-body]')
          let index = 0

          const render = () => {
            title.textContent = slides[index][0]
            body.textContent = slides[index][1]
          }
          render()

          return delegate(root, 'click', (event) => {
            if (event.target.closest('[data-swiper-prev]')) {
              index = (index + slides.length - 1) % slides.length
              render()
            }
            if (event.target.closest('[data-swiper-next]')) {
              index = (index + 1) % slides.length
              render()
            }
          })
        }
      )
    },
  }

  function buildDemo(id, ctx = {}) {
    const renderer = renderers[id]
    if (!renderer) return fallbackDemo(id, ctx)
    return renderer(ctx)
  }

  window.TTDocs.getPhoneRender = function getPhoneRender(id, ctx = {}) {
    return buildDemo(id, ctx).html
  }

  window.TTDocs.getPhoneDemoMeta = function getPhoneDemoMeta(id, lang = 'en') {
    const current = buildDemo(id, { lang })
    return {
      tip: getTipText(current.tip, lang),
      interactive: typeof current.mount === 'function',
    }
  }

  window.TTDocs.mountPhoneDemo = function mountPhoneDemo(root, id, ctx = {}) {
    const current = buildDemo(id, ctx)
    if (typeof current.mount !== 'function') return null
    return current.mount(root, ctx)
  }
})()
