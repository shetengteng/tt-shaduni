window.TTDocs = window.TTDocs || {}

;(function buildPhoneDemos() {
  const tips = (en, zh) => ({ en, zh })

  function demo(id, tip, html, mount) {
    return { id, tip, html, mount }
  }
  function q(root, sel) { return root.querySelector(sel) }
  function qa(root, sel) { return Array.from(root.querySelectorAll(sel)) }
  function delegate(root, ev, fn) { root.addEventListener(ev, fn); return () => root.removeEventListener(ev, fn) }

  function section(label, body) {
    return `<section class="p-sec"><div class="p-label">${label}</div>${body}</section>`
  }
  function surface(title, subtitle, body) {
    return `<div class="p-surface"><div class="p-title">${title}</div>${subtitle ? `<div class="p-subtitle">${subtitle}</div>` : ''}${body ? `<div class="p-stack" style="margin-top:10px">${body}</div>` : ''}</div>`
  }
  function hiddenPanel(cls, body) {
    return `<div class="${cls} tt-hidden">${body}</div>`
  }

  function ttBtn(label, variant, attrs) {
    return `<button type="button" class="tt-button tt-button--${variant || 'default'} tt-button--md" ${attrs || ''}>${label}</button>`
  }
  function ttBtnSm(label, variant, attrs) {
    return `<button type="button" class="tt-button tt-button--${variant || 'default'} tt-button--sm" ${attrs || ''}>${label}</button>`
  }

  function getComp(id) { return (window.TTDocs.allComponents || []).find(c => c.id === id) }
  function getTipText(tip, lang) { return tip ? (typeof tip === 'string' ? tip : tip[lang] || tip.en || '') : '' }

  function fallbackDemo(id, ctx) {
    const comp = getComp(id)
    const title = comp ? comp.name : 'Preview'
    const desc = ctx.lang === 'zh' && comp?.descZh ? comp.descZh : comp?.desc || 'Preview'
    const props = (comp?.props || []).slice(0, 4).map(([name, type]) =>
      `<div class="p-inline-actions"><span class="p-note">${name}</span><span class="p-demo-value">${type}</span></div>`
    ).join('')
    const examples = (comp?.examples || []).slice(0, 2).map(item =>
      `<span class="p-badge-soft">${ctx.lang === 'zh' && item.titleZh ? item.titleZh : item.title}</span>`
    ).join('')
    return demo(id, tips('Preview focuses on key API surface.', '预览主要展示核心 API。'),
      `<div class="p-stack">${surface(title, desc, `<div class="p-cluster">${examples || '<span class="p-badge-soft">Quick Start</span>'}</div><div class="p-divider-space"></div>${props || '<div class="p-note">See examples on the left.</div>'}`)}</div>`
    )
  }

  const renderers = {
    button(ctx) {
      return demo('button',
        tips('Switch variant and state, then click the CTA.', '切换按钮风格和状态，然后点击 CTA。'),
        `<div class="p-stack">
          ${section('Variants', `<div class="p-stack" style="gap:6px">
            <div class="p-cluster">
              <button type="button" class="tt-button tt-button--default tt-button--sm" data-v="default">Default</button>
              <button type="button" class="tt-button tt-button--secondary tt-button--sm" data-v="secondary">Secondary</button>
              <button type="button" class="tt-button tt-button--outline tt-button--sm" data-v="outline">Outline</button>
            </div>
            <div class="p-cluster">
              <button type="button" class="tt-button tt-button--ghost tt-button--sm" data-v="ghost">Ghost</button>
              <button type="button" class="tt-button tt-button--destructive tt-button--sm" data-v="destructive">Danger</button>
              <button type="button" class="tt-button tt-button--link tt-button--sm" data-v="link">Link</button>
            </div>
          </div>`)}
          ${section('Sizes', `<div class="p-cluster" style="align-items:center">
            <button type="button" class="tt-button tt-button--default tt-button--sm">SM</button>
            <button type="button" class="tt-button tt-button--default tt-button--md">MD</button>
            <button type="button" class="tt-button tt-button--default tt-button--lg">LG</button>
          </div>`)}
          ${section('States', `<div class="p-cluster">
            <button type="button" class="tt-button tt-button--default tt-button--sm tt-button--disabled" disabled>Disabled</button>
            <button type="button" class="tt-button tt-button--default tt-button--sm tt-button--loading"><span class="tt-button__loading"><span class="tt-button__spinner"></span></span>Loading</button>
          </div>`)}
          ${surface('Block CTA', '', `<button type="button" class="tt-button tt-button--default tt-button--md tt-button--block" data-live-button>Publish update</button><div class="p-inline-actions"><span class="p-note">Last action</span><span class="p-demo-value" data-live-status>Idle</span></div>`)}
        </div>`,
        (root) => {
          let clicks = 0
          return delegate(root, 'click', e => {
            if (e.target.closest('[data-live-button]')) {
              clicks++
              q(root, '[data-live-status]').textContent = `Clicked ${clicks}x`
            }
          })
        }
      )
    },

    input() {
      return demo('input',
        tips('Type, clear, or apply a preset.', '输入、清空，或点击预设值。'),
        `<div class="p-stack">
          ${section('Presets', `<div class="p-chip-row">
            <button class="p-chip" data-fill="Ava Chen">Ava Chen</button>
            <button class="p-chip" data-fill="release-note">release-note</button>
          </div>`)}
          ${surface('Interactive Input', '', `<div class="p-stack">
            <div class="tt-input" data-input-wrap>
              <input class="tt-input__inner" data-demo-input placeholder="Type something..." value="Ava Chen" />
              <div class="tt-input__clear" data-clear><span class="tt-input__clear-icon">×</span></div>
            </div>
            <div class="p-inline-actions"><span class="p-note">Mirror</span><span class="p-demo-value" data-mirror>Ava Chen</span></div>
          </div>`)}
        </div>`,
        (root) => {
          const input = q(root, '[data-demo-input]')
          const mirror = q(root, '[data-mirror]')
          const wrap = q(root, '[data-input-wrap]')
          const sync = () => { mirror.textContent = input.value || 'Empty' }
          input.addEventListener('focus', () => wrap.classList.add('tt-input--focused'))
          input.addEventListener('blur', () => wrap.classList.remove('tt-input--focused'))
          const cl = []
          cl.push(delegate(root, 'click', e => {
            const fill = e.target.closest('[data-fill]')
            if (fill) { input.value = fill.dataset.fill; sync() }
            if (e.target.closest('[data-clear]')) { input.value = ''; sync(); input.focus() }
          }))
          cl.push(delegate(input, 'input', sync))
          return () => cl.forEach(fn => fn())
        }
      )
    },

    textarea() {
      return demo('textarea',
        tips('Write feedback and watch the live count.', '输入反馈内容，实时查看字数。'),
        `<div class="p-stack">
          ${section('Templates', `<div class="p-chip-row">
            <button class="p-chip" data-tpl="Bug report: steps to reproduce...">Bug report</button>
            <button class="p-chip" data-tpl="Idea: bundle filters into a sheet.">Idea</button>
          </div>`)}
          ${surface('Feedback Box', '', `<div class="p-stack">
            <div class="tt-textarea" data-ta-wrap>
              <textarea class="tt-textarea__inner" data-ta>The release checklist looks good.</textarea>
              <span class="tt-textarea__count" data-ta-count>31 / 240</span>
            </div>
          </div>`)}
        </div>`,
        (root) => {
          const ta = q(root, '[data-ta]')
          const counter = q(root, '[data-ta-count]')
          const wrap = q(root, '[data-ta-wrap]')
          const update = () => { counter.textContent = `${ta.value.length} / 240` }
          ta.addEventListener('focus', () => wrap.classList.add('tt-textarea--focused'))
          ta.addEventListener('blur', () => wrap.classList.remove('tt-textarea--focused'))
          update()
          const cl = []
          cl.push(delegate(root, 'click', e => {
            const tpl = e.target.closest('[data-tpl]')
            if (tpl) { ta.value = tpl.dataset.tpl; update() }
          }))
          cl.push(delegate(ta, 'input', update))
          return () => cl.forEach(fn => fn())
        }
      )
    },

    checkbox() {
      return demo('checkbox',
        tips('Toggle checklist items and watch the count.', '勾选清单项，查看完成数量。'),
        `<div class="p-stack">
          ${surface('Release Checklist', '', `<div class="p-stack" style="gap:10px">
            <div class="tt-checkbox tt-checkbox--checked" data-ck><div class="tt-checkbox__box"><span class="tt-checkbox__check">✓</span></div><span class="tt-checkbox__label">Update changelog</span></div>
            <div class="tt-checkbox" data-ck><div class="tt-checkbox__box"></div><span class="tt-checkbox__label">Notify QA channel</span></div>
            <div class="tt-checkbox" data-ck><div class="tt-checkbox__box"></div><span class="tt-checkbox__label">Upload app build</span></div>
            <div class="p-inline-actions"><span class="p-note">Completed</span><span class="p-demo-value" data-ck-count>1 / 3</span></div>
          </div>`)}
        </div>`,
        (root) => {
          const counter = q(root, '[data-ck-count]')
          const render = () => {
            const items = qa(root, '[data-ck]')
            const done = items.filter(el => el.classList.contains('tt-checkbox--checked')).length
            counter.textContent = `${done} / ${items.length}`
          }
          return delegate(root, 'click', e => {
            const item = e.target.closest('[data-ck]')
            if (!item) return
            const on = item.classList.toggle('tt-checkbox--checked')
            const box = item.querySelector('.tt-checkbox__box')
            box.innerHTML = on ? '<span class="tt-checkbox__check">✓</span>' : ''
            render()
          })
        }
      )
    },

    radio() {
      return demo('radio',
        tips('Select a single option.', '选择一个选项。'),
        `<div class="p-stack">
          ${surface('Payment Method', '', `<div class="p-stack" style="gap:10px">
            <div class="tt-radio tt-radio--checked" data-rd="card"><div class="tt-radio__circle"><div class="tt-radio__dot"></div></div><span class="tt-radio__label">Credit Card</span></div>
            <div class="tt-radio" data-rd="bank"><div class="tt-radio__circle"></div><span class="tt-radio__label">Bank Transfer</span></div>
            <div class="tt-radio" data-rd="wallet"><div class="tt-radio__circle"></div><span class="tt-radio__label">Wallet Balance</span></div>
            <div class="p-inline-actions"><span class="p-note">Selected</span><span class="p-demo-value" data-rd-val>card</span></div>
          </div>`)}
        </div>`,
        (root) => delegate(root, 'click', e => {
          const item = e.target.closest('[data-rd]')
          if (!item) return
          qa(root, '[data-rd]').forEach(el => {
            const on = el === item
            el.classList.toggle('tt-radio--checked', on)
            el.querySelector('.tt-radio__circle').innerHTML = on ? '<div class="tt-radio__dot"></div>' : ''
          })
          q(root, '[data-rd-val]').textContent = item.dataset.rd
        })
      )
    },

    switch() {
      return demo('switch',
        tips('Toggle preferences and inspect the summary.', '切换偏好设置，查看汇总。'),
        `<div class="p-stack">
          ${surface('Preferences', '', `<div class="p-stack" style="gap:10px">
            <div class="p-inline-actions"><span>Push alerts</span><div class="tt-switch tt-switch--on" data-sw="push"><div class="tt-switch__thumb"></div></div></div>
            <div class="p-inline-actions"><span>Email digest</span><div class="tt-switch" data-sw="email"><div class="tt-switch__thumb"></div></div></div>
            <div class="p-inline-actions"><span>Dark mode sync</span><div class="tt-switch tt-switch--on" data-sw="theme"><div class="tt-switch__thumb"></div></div></div>
            <div class="p-inline-actions"><span class="p-note">Enabled</span><span class="p-demo-value" data-sw-count>2 / 3</span></div>
          </div>`)}
        </div>`,
        (root) => {
          const counter = q(root, '[data-sw-count]')
          const render = () => { counter.textContent = `${qa(root, '.tt-switch--on').length} / ${qa(root, '[data-sw]').length}` }
          render()
          return delegate(root, 'click', e => {
            const sw = e.target.closest('[data-sw]')
            if (!sw) return
            sw.classList.toggle('tt-switch--on')
            render()
          })
        }
      )
    },

    search() {
      return demo('search',
        tips('Type or use history chips.', '输入关键词或点击历史词条。'),
        `<div class="p-stack">
          ${surface('Search', '', `<div class="p-stack">
            <div class="tt-search">
              <input class="tt-search__input" data-s-input placeholder="Search orders / users" value="release" />
              <span class="tt-search__cancel" data-s-cancel>Cancel</span>
            </div>
            <div class="p-chip-row">
              <button class="p-chip" data-s-fill="release">release</button>
              <button class="p-chip" data-s-fill="mobile">mobile</button>
              <button class="p-chip" data-s-fill="payments">payments</button>
            </div>
            <div class="p-inline-actions"><span class="p-note">Query</span><span class="p-demo-value" data-s-val>release</span></div>
          </div>`)}
        </div>`,
        (root) => {
          const input = q(root, '[data-s-input]')
          const val = q(root, '[data-s-val]')
          const sync = () => { val.textContent = input.value || 'Empty' }
          sync()
          const cl = []
          cl.push(delegate(root, 'click', e => {
            const fill = e.target.closest('[data-s-fill]')
            if (fill) { input.value = fill.dataset.sFill; sync() }
            if (e.target.closest('[data-s-cancel]')) { input.value = ''; sync() }
          }))
          cl.push(delegate(input, 'input', sync))
          return () => cl.forEach(fn => fn())
        }
      )
    },

    numberbox() {
      return demo('numberbox',
        tips('Adjust quantity with the stepper.', '增减数量，查看模拟小计。'),
        `<div class="p-stack">
          ${surface('Cart Stepper', '', `<div class="p-inline-actions">
            <div class="tt-number-box">
              <button type="button" class="tt-number-box__btn" data-step="-1">−</button>
              <span class="tt-number-box__value" data-step-val>2</span>
              <button type="button" class="tt-number-box__btn" data-step="1">+</button>
            </div>
            <span class="p-badge-soft" data-step-total>$38</span>
          </div>`)}
        </div>`,
        (root) => {
          let count = 2
          const render = () => {
            q(root, '[data-step-val]').textContent = count
            q(root, '[data-step-total]').textContent = `$${count * 19}`
          }
          render()
          return delegate(root, 'click', e => {
            const step = e.target.closest('[data-step]')
            if (!step) return
            count = Math.max(1, Math.min(8, count + Number(step.dataset.step)))
            render()
          })
        }
      )
    },

    rate() {
      return demo('rate',
        tips('Click a star to set the score.', '点击星级设置评分。'),
        `<div class="p-stack">
          ${surface('Review Score', '', `
            <div class="tt-rate" data-rate-wrap>
              ${[1,2,3,4,5].map(i => `<span class="tt-rate__star${i <= 4 ? ' tt-rate__star--active' : ''}" data-rate="${i}">★</span>`).join('')}
            </div>
            <div class="p-inline-actions"><span class="p-note">Current</span><span class="p-demo-value" data-rate-val>4 / 5</span></div>
          `)}
        </div>`,
        (root) => {
          let score = 4
          const render = () => {
            q(root, '[data-rate-val]').textContent = `${score} / 5`
            qa(root, '[data-rate]').forEach(el => el.classList.toggle('tt-rate__star--active', Number(el.dataset.rate) <= score))
          }
          return delegate(root, 'click', e => {
            const star = e.target.closest('[data-rate]')
            if (!star) return
            score = Number(star.dataset.rate)
            render()
          })
        }
      )
    },

    slider() {
      return demo('slider',
        tips('Drag to simulate slider feedback.', '拖动控件，模拟 slider 反馈。'),
        `<div class="p-stack">
          ${surface('Budget Filter', '', `
            <div class="tt-slider">
              <div class="tt-slider__track">
                <div class="tt-slider__fill" data-sl-fill style="width:36%"></div>
                <div class="tt-slider__thumb" data-sl-thumb style="left:calc(36% - 10px)"></div>
              </div>
            </div>
            <input type="range" min="0" max="100" value="36" data-sl-range style="width:100%;opacity:0;height:0;margin:0;position:absolute" />
            <div class="p-inline-actions"><span class="p-note">Value</span><span class="p-demo-value" data-sl-val>36</span></div>
          `)}
        </div>`,
        (root) => {
          const range = q(root, '[data-sl-range]')
          const fill = q(root, '[data-sl-fill]')
          const thumb = q(root, '[data-sl-thumb]')
          const val = q(root, '[data-sl-val]')
          range.style.opacity = '0'
          range.style.position = 'absolute'
          range.style.width = '100%'
          range.style.height = '20px'
          range.style.top = '0'
          range.style.cursor = 'pointer'
          range.style.zIndex = '5'
          range.parentElement.style.position = 'relative'
          const render = () => {
            fill.style.width = `${range.value}%`
            thumb.style.left = `calc(${range.value}% - 10px)`
            val.textContent = range.value
          }
          render()
          return delegate(range, 'input', render)
        }
      )
    },

    picker() {
      return demo('picker',
        tips('Open the panel and pick an option.', '打开面板、选择选项并确认。'),
        `<div class="p-stack" style="position:relative;min-height:220px">
          ${surface('Department', '', `
            ${ttBtnSm('Open picker', 'outline', 'data-pk-open')}
            <div class="p-inline-actions"><span class="p-note">Selected</span><span class="p-demo-value" data-pk-val>Engineering</span></div>
          `)}
          ${hiddenPanel('tt-overlay', '')}
          <div class="tt-sheet tt-hidden" data-pk-sheet>
            <div class="tt-sheet__title">Select team</div>
            <div class="p-stack" style="gap:4px">
              <div class="tt-cell" style="border-radius:var(--tt-radius)" data-pk-item="Engineering"><span class="tt-cell__title">Engineering</span></div>
              <div class="tt-cell" style="border-radius:var(--tt-radius)" data-pk-item="Design"><span class="tt-cell__title">Design</span></div>
              <div class="tt-cell" style="border-radius:var(--tt-radius)" data-pk-item="Marketing"><span class="tt-cell__title">Marketing</span></div>
            </div>
            <div class="p-inline-actions" style="margin-top:10px">
              ${ttBtnSm('Cancel', 'outline', 'data-pk-cancel')}
              ${ttBtnSm('Confirm', 'default', 'data-pk-confirm')}
            </div>
          </div>
        </div>`,
        (root) => {
          const overlay = q(root, '.tt-overlay')
          const sheet = q(root, '[data-pk-sheet]')
          const val = q(root, '[data-pk-val]')
          let draft = val.textContent
          const open = () => { overlay.classList.remove('tt-hidden'); sheet.classList.remove('tt-hidden') }
          const close = () => { overlay.classList.add('tt-hidden'); sheet.classList.add('tt-hidden') }
          return delegate(root, 'click', e => {
            if (e.target.closest('[data-pk-open]')) open()
            if (e.target.closest('[data-pk-cancel]') || e.target.closest('.tt-overlay')) close()
            const item = e.target.closest('[data-pk-item]')
            if (item) draft = item.dataset.pkItem
            if (e.target.closest('[data-pk-confirm]')) { val.textContent = draft; close() }
          })
        }
      )
    },

    datepicker() {
      return demo('datepicker',
        tips('Pick a date from the bottom sheet.', '在底部面板中选择日期。'),
        `<div class="p-stack" style="position:relative;min-height:220px">
          ${surface('Delivery Date', '', `
            ${ttBtnSm('Choose date', 'outline', 'data-dt-open')}
            <div class="p-inline-actions"><span class="p-note">Selected</span><span class="p-demo-value" data-dt-val>2026-04-09</span></div>
          `)}
          ${hiddenPanel('tt-overlay', '')}
          <div class="tt-sheet tt-hidden" data-dt-sheet>
            <div class="tt-sheet__title">Select date</div>
            <div class="p-stack" style="gap:4px">
              <div class="tt-cell" style="border-radius:var(--tt-radius)" data-dt-item="2026-04-09"><span class="tt-cell__title">2026-04-09</span></div>
              <div class="tt-cell" style="border-radius:var(--tt-radius)" data-dt-item="2026-04-12"><span class="tt-cell__title">2026-04-12</span></div>
              <div class="tt-cell" style="border-radius:var(--tt-radius)" data-dt-item="2026-04-16"><span class="tt-cell__title">2026-04-16</span></div>
            </div>
            <div class="p-inline-actions" style="margin-top:10px">
              ${ttBtnSm('Cancel', 'outline', 'data-dt-cancel')}
              ${ttBtnSm('Confirm', 'default', 'data-dt-confirm')}
            </div>
          </div>
        </div>`,
        (root) => {
          const overlay = q(root, '.tt-overlay')
          const sheet = q(root, '[data-dt-sheet]')
          const val = q(root, '[data-dt-val]')
          let draft = val.textContent
          const open = () => { overlay.classList.remove('tt-hidden'); sheet.classList.remove('tt-hidden') }
          const close = () => { overlay.classList.add('tt-hidden'); sheet.classList.add('tt-hidden') }
          return delegate(root, 'click', e => {
            if (e.target.closest('[data-dt-open]')) open()
            if (e.target.closest('[data-dt-cancel]') || e.target.closest('.tt-overlay')) close()
            const item = e.target.closest('[data-dt-item]')
            if (item) draft = item.dataset.dtItem
            if (e.target.closest('[data-dt-confirm]')) { val.textContent = draft; close() }
          })
        }
      )
    },

    calendar() {
      return demo('calendar',
        tips('Select a date from the calendar.', '从日历中选择日期。'),
        `<div class="p-stack">
          ${surface('April 2026', '', `
            <div class="p-calendar">
              ${['01','02','03','04','05','06','07','08','09','10','11','12','13','14'].map((d, i) => {
                const disabled = i < 2 || i > 11
                const selected = d === '09'
                return `<button type="button" class="p-cal-day${selected ? ' is-selected' : ''}${disabled ? ' is-disabled' : ''}" data-cal="${d}"${disabled ? ' disabled' : ''}>${d}</button>`
              }).join('')}
            </div>
            <div class="p-inline-actions"><span class="p-note">Selected</span><span class="p-demo-value" data-cal-val>2026-04-09</span></div>
          `)}
        </div>`,
        (root) => delegate(root, 'click', e => {
          const day = e.target.closest('[data-cal]')
          if (!day || day.disabled) return
          qa(root, '[data-cal]').forEach(n => n.classList.toggle('is-selected', n === day))
          q(root, '[data-cal-val]').textContent = `2026-04-${day.dataset.cal}`
        })
      )
    },

    upload() {
      return demo('upload',
        tips('Add or remove mock assets.', '添加或删除模拟资源。'),
        `<div class="p-stack">
          ${surface('Asset Picker', '', `
            <div class="p-thumb-grid" data-up-grid>
              <button type="button" class="p-thumb is-filled" data-thumb="Cover">Cover</button>
              <button type="button" class="p-thumb is-filled" data-thumb="Banner">Banner</button>
              <button type="button" class="p-thumb" data-add-thumb>+ Add</button>
            </div>
            <div class="p-inline-actions"><span class="p-note">Files</span><span class="p-demo-value" data-up-count>2 / 6</span></div>
          `)}
        </div>`,
        (root) => {
          const grid = q(root, '[data-up-grid]')
          const counter = q(root, '[data-up-count]')
          let idx = 3
          const render = () => { counter.textContent = `${qa(root, '[data-thumb]').length} / 6` }
          render()
          return delegate(root, 'click', e => {
            const add = e.target.closest('[data-add-thumb]')
            const thumb = e.target.closest('[data-thumb]')
            if (add) {
              if (qa(root, '[data-thumb]').length >= 6) return
              const n = document.createElement('button')
              n.type = 'button'; n.className = 'p-thumb is-filled'; n.dataset.thumb = `File ${idx}`; n.textContent = `File ${idx}`
              idx++; grid.insertBefore(n, add); render()
            } else if (thumb) { thumb.remove(); render() }
          })
        }
      )
    },

    form() {
      return demo('form',
        tips('Fill a form with tt-form-item layout.', '使用 tt-form-item 填写表单。'),
        `<div class="p-stack">
          ${surface('Contact Form', '', `<div class="p-stack">
            <div class="tt-form-item">
              <div class="tt-form-item__label"><span class="tt-form-item__required">*</span>Name</div>
              <div class="tt-form-item__content"><div class="tt-input"><input class="tt-input__inner" placeholder="Your name" /></div></div>
            </div>
            <div class="tt-form-item">
              <div class="tt-form-item__label">Email</div>
              <div class="tt-form-item__content"><div class="tt-input"><input class="tt-input__inner" placeholder="hello@team.dev" /></div></div>
            </div>
            <button type="button" class="tt-button tt-button--default tt-button--md tt-button--block">Submit</button>
          </div>`)}
        </div>`
      )
    },

    tabs() {
      return demo('tabs',
        tips('Switch tabs to update content.', '切换标签页，内容同步变化。'),
        `<div class="p-stack">
          ${surface('Team Space', '', `
            <div class="tt-tabs">
              <div class="tt-tabs__item tt-tabs__item--active" data-tab="Overview">Overview</div>
              <div class="tt-tabs__item" data-tab="Analytics">Analytics</div>
              <div class="tt-tabs__item" style="opacity:.5">Members</div>
            </div>
            <div class="p-surface" style="padding:10px;margin-top:8px">
              <div class="p-title" data-tab-title>Overview</div>
              <div class="p-note" data-tab-body>Daily summary, release health, and approvals.</div>
            </div>
          `)}
        </div>`,
        (root) => {
          const content = { Overview: 'Daily summary, release health, and approvals.', Analytics: 'Traffic sources, conversion trends, and retention.' }
          return delegate(root, 'click', e => {
            const tab = e.target.closest('[data-tab]')
            if (!tab) return
            qa(root, '[data-tab]').forEach(n => n.classList.toggle('tt-tabs__item--active', n === tab))
            q(root, '[data-tab-title]').textContent = tab.dataset.tab
            q(root, '[data-tab-body]').textContent = content[tab.dataset.tab]
          })
        }
      )
    },

    cell() {
      return demo('cell',
        tips('Tap cells to see link behaviour.', '点击单元格查看链接效果。'),
        `<div class="p-stack">
          ${surface('Settings', '', `
            <div class="tt-cell"><span class="tt-cell__title">Account</span><span class="tt-cell__value">Go<span class="tt-cell__arrow"> ›</span></span></div>
            <div class="tt-cell"><span class="tt-cell__title">Notifications</span><span class="tt-cell__value">On<span class="tt-cell__arrow"> ›</span></span></div>
            <div class="tt-cell" style="border-bottom:none"><span class="tt-cell__title">About</span><span class="tt-cell__value">v1.0<span class="tt-cell__arrow"> ›</span></span></div>
          `)}
        </div>`
      )
    },

    navbar() {
      return demo('navbar',
        tips('Preview navbar with back arrow.', '预览带返回箭头的导航栏。'),
        `<div class="p-stack">
          <div class="tt-navbar"><span class="tt-navbar__left">‹</span><span class="tt-navbar__title">Page Title</span></div>
          <div class="p-surface" style="padding:20px;text-align:center"><div class="p-note">Page content below navbar</div></div>
        </div>`
      )
    },

    tabbar() {
      return demo('tabbar',
        tips('Switch tabs to simulate mobile nav.', '切换底部 tab 模拟移动端导航。'),
        `<div class="p-stack">
          ${surface('Active Tab', '', `<div class="p-inline-actions"><span class="p-note">Active</span><span class="p-demo-value" data-tb-val>Home</span></div>`)}
          <div class="tt-tabbar">
            <div class="tt-tabbar__item tt-tabbar__item--active" data-tb="Home">Home</div>
            <div class="tt-tabbar__item" data-tb="Inbox">Inbox</div>
            <div class="tt-tabbar__item" data-tb="Profile">Profile</div>
          </div>
        </div>`,
        (root) => delegate(root, 'click', e => {
          const tab = e.target.closest('[data-tb]')
          if (!tab) return
          qa(root, '[data-tb]').forEach(n => n.classList.toggle('tt-tabbar__item--active', n === tab))
          q(root, '[data-tb-val]').textContent = tab.dataset.tb
        })
      )
    },

    steps() {
      return demo('steps',
        tips('View the step indicator.', '查看步骤指示器。'),
        `<div class="p-stack">
          ${surface('Order Flow', '', `
            <div class="tt-steps">
              <div class="tt-step tt-step--done"><div class="tt-step__circle">✓</div><span class="tt-step__title">Order</span></div>
              <div class="tt-step tt-step--active"><div class="tt-step__circle">2</div><span class="tt-step__title">Pay</span></div>
              <div class="tt-step"><div class="tt-step__circle">3</div><span class="tt-step__title">Done</span></div>
            </div>
          `)}
        </div>`
      )
    },

    sidebar() {
      return demo('sidebar',
        tips('Click a section to update content.', '点击侧边项，内容同步切换。'),
        `<div class="p-stack">
          ${surface('Category Nav', '', `
            <div style="display:grid;grid-template-columns:80px 1fr;gap:8px">
              <div class="p-stack" style="gap:4px">
                <div class="tt-cell" style="border:none;border-radius:var(--tt-radius);background:var(--tt-accent);font-size:12px" data-side="Orders"><span class="tt-cell__title" style="font-size:12px">Orders</span></div>
                <div class="tt-cell" style="border:none;border-radius:var(--tt-radius);font-size:12px" data-side="Coupons"><span class="tt-cell__title" style="font-size:12px">Coupons</span></div>
                <div class="tt-cell" style="border:none;border-radius:var(--tt-radius);font-size:12px" data-side="Reviews"><span class="tt-cell__title" style="font-size:12px">Reviews</span></div>
              </div>
              <div class="p-surface" style="padding:10px">
                <div class="p-title" data-side-title>Orders</div>
                <div class="p-note" data-side-body>Track deliveries and invoices.</div>
              </div>
            </div>
          `)}
        </div>`,
        (root) => {
          const bodyMap = { Orders: 'Track deliveries and invoices.', Coupons: 'Manage discounts and campaigns.', Reviews: 'Reply to feedback.' }
          return delegate(root, 'click', e => {
            const item = e.target.closest('[data-side]')
            if (!item) return
            qa(root, '[data-side]').forEach(n => n.style.background = n === item ? 'var(--tt-accent)' : '')
            q(root, '[data-side-title]').textContent = item.dataset.side
            q(root, '[data-side-body]').textContent = bodyMap[item.dataset.side]
          })
        }
      )
    },

    breadcrumb() {
      return demo('breadcrumb',
        tips('Navigate between crumbs.', '点击不同层级。'),
        `<div class="p-stack">
          ${surface('Project Path', '', `
            <div class="p-cluster" style="font-size:12px;gap:4px">
              <span class="tt-tag tt-tag--default" style="cursor:pointer" data-crumb="Workspace">Workspace</span>
              <span class="p-note">/</span>
              <span class="tt-tag tt-tag--default" style="cursor:pointer" data-crumb="Projects">Projects</span>
              <span class="p-note">/</span>
              <span class="tt-tag tt-tag--primary" style="cursor:pointer" data-crumb="Release Board">Release Board</span>
            </div>
            <div class="p-inline-actions"><span class="p-note">Current</span><span class="p-demo-value" data-crumb-val>Release Board</span></div>
          `)}
        </div>`,
        (root) => delegate(root, 'click', e => {
          const crumb = e.target.closest('[data-crumb]')
          if (!crumb) return
          qa(root, '[data-crumb]').forEach(n => {
            n.className = n === crumb ? 'tt-tag tt-tag--primary' : 'tt-tag tt-tag--default'
            n.style.cursor = 'pointer'
          })
          q(root, '[data-crumb-val]').textContent = crumb.dataset.crumb
        })
      )
    },

    pagination() {
      return demo('pagination',
        tips('Switch pages.', '切换页码。'),
        `<div class="p-stack">
          ${surface('Pages', '', `
            <div class="p-cluster" style="gap:4px">
              ${[1,2,3,4,5].map(p => `<button type="button" class="tt-button tt-button--${p===2?'default':'outline'} tt-button--sm" style="min-width:32px;padding:0" data-pg="${p}">${p}</button>`).join('')}
            </div>
            <div class="p-inline-actions"><span class="p-note">Current</span><span class="p-demo-value" data-pg-val>2</span></div>
          `)}
        </div>`,
        (root) => delegate(root, 'click', e => {
          const pg = e.target.closest('[data-pg]')
          if (!pg) return
          qa(root, '[data-pg]').forEach(n => {
            n.className = `tt-button tt-button--${n === pg ? 'default' : 'outline'} tt-button--sm`
            n.style.minWidth = '32px'; n.style.padding = '0'
          })
          q(root, '[data-pg-val]').textContent = pg.dataset.pg
        })
      )
    },

    dropdownmenu() {
      return demo('dropdownmenu',
        tips('Open filter menu and pick an option.', '打开筛选菜单并选择排序项。'),
        `<div class="p-stack">
          ${surface('Sort By', '', `
            ${ttBtnSm('Newest ▾', 'outline', 'data-dd-open style="width:100%"')}
            <div class="p-stack tt-hidden" data-dd-list style="margin-top:6px;gap:4px">
              <div class="tt-cell" style="border-radius:var(--tt-radius)" data-dd-item="Newest"><span class="tt-cell__title">Newest</span></div>
              <div class="tt-cell" style="border-radius:var(--tt-radius)" data-dd-item="Popular"><span class="tt-cell__title">Popular</span></div>
              <div class="tt-cell" style="border-radius:var(--tt-radius)" data-dd-item="Price"><span class="tt-cell__title">Price</span></div>
            </div>
          `)}
        </div>`,
        (root) => delegate(root, 'click', e => {
          const open = e.target.closest('[data-dd-open]')
          const item = e.target.closest('[data-dd-item]')
          const list = q(root, '[data-dd-list]')
          if (open) list.classList.toggle('tt-hidden')
          if (item) { open.textContent = item.dataset.ddItem + ' ▾'; list.classList.add('tt-hidden') }
        })
      )
    },

    popup() {
      return demo('popup',
        tips('Open and close the popup overlay.', '打开和关闭弹出层。'),
        `<div class="p-stack" style="position:relative;min-height:220px">
          ${surface('Overlay', '', `${ttBtnSm('Open popup', 'default', 'data-pop-open')}`)}
          ${hiddenPanel('tt-overlay', '')}
          <div class="tt-popup tt-popup--bottom tt-hidden" data-pop-sheet>
            <div class="p-inline-actions"><div class="p-title">Quick actions</div>${ttBtnSm('Close', 'outline', 'data-pop-close')}</div>
            <div class="tt-cell" style="margin-top:8px"><span class="tt-cell__title">Option A</span><span class="tt-cell__arrow">›</span></div>
            <div class="tt-cell"><span class="tt-cell__title">Option B</span><span class="tt-cell__arrow">›</span></div>
          </div>
        </div>`,
        (root) => {
          const overlay = q(root, '.tt-overlay')
          const sheet = q(root, '[data-pop-sheet]')
          const open = () => { overlay.classList.remove('tt-hidden'); sheet.classList.remove('tt-hidden') }
          const close = () => { overlay.classList.add('tt-hidden'); sheet.classList.add('tt-hidden') }
          return delegate(root, 'click', e => {
            if (e.target.closest('[data-pop-open]')) open()
            if (e.target.closest('[data-pop-close]') || e.target.closest('.tt-overlay')) close()
          })
        }
      )
    },

    dialog() {
      return demo('dialog',
        tips('Trigger the dialog, then confirm or cancel.', '触发对话框，确认或取消。'),
        `<div class="p-stack" style="position:relative;min-height:240px">
          ${surface('Danger Zone', '', `
            <button type="button" class="tt-button tt-button--destructive tt-button--sm" data-dlg-open>Delete workspace</button>
            <div class="p-inline-actions"><span class="p-note">Result</span><span class="p-demo-value" data-dlg-status>Awaiting</span></div>
          `)}
          ${hiddenPanel('tt-overlay', '')}
          <div class="tt-dialog tt-hidden" data-dlg>
            <div class="tt-dialog__title">Delete workspace?</div>
            <div class="tt-dialog__msg">This action cannot be undone.</div>
            <div class="tt-dialog__actions">
              ${ttBtnSm('Cancel', 'outline', 'data-dlg-cancel')}
              <button type="button" class="tt-button tt-button--destructive tt-button--sm" data-dlg-confirm>Delete</button>
            </div>
          </div>
        </div>`,
        (root) => {
          const overlay = q(root, '.tt-overlay')
          const dlg = q(root, '[data-dlg]')
          const status = q(root, '[data-dlg-status]')
          const open = () => { overlay.classList.remove('tt-hidden'); dlg.classList.remove('tt-hidden') }
          const close = () => { overlay.classList.add('tt-hidden'); dlg.classList.add('tt-hidden') }
          return delegate(root, 'click', e => {
            if (e.target.closest('[data-dlg-open]')) open()
            if (e.target.closest('[data-dlg-cancel]') || e.target.closest('.tt-overlay')) { status.textContent = 'Cancelled'; close() }
            if (e.target.closest('[data-dlg-confirm]')) { status.textContent = 'Confirmed'; close() }
          })
        }
      )
    },

    toast() {
      return demo('toast',
        tips('Fire toasts and let them auto-hide.', '触发 toast 并观察自动消失。'),
        `<div class="p-stack" style="position:relative;min-height:180px">
          ${section('Triggers', `<div class="p-cluster">
            ${ttBtnSm('Success', 'default', 'data-toast="Saved successfully"')}
            ${ttBtnSm('Info', 'outline', 'data-toast="Draft autosaved"')}
          </div>`)}
          <div class="tt-toast tt-hidden" data-toast-node>Saved</div>
        </div>`,
        (root) => {
          const toast = q(root, '[data-toast-node]')
          let timer = null
          return delegate(root, 'click', e => {
            const btn = e.target.closest('[data-toast]')
            if (!btn) return
            if (timer) clearTimeout(timer)
            toast.textContent = btn.dataset.toast
            toast.classList.remove('tt-hidden')
            timer = setTimeout(() => toast.classList.add('tt-hidden'), 1600)
          })
        }
      )
    },

    actionsheet() {
      return demo('actionsheet',
        tips('Open the action sheet.', '打开操作面板。'),
        `<div class="p-stack" style="position:relative;min-height:240px">
          ${surface('Message Actions', '', `
            ${ttBtnSm('More actions', 'outline', 'data-as-open')}
            <div class="p-inline-actions"><span class="p-note">Selected</span><span class="p-demo-value" data-as-val>None</span></div>
          `)}
          ${hiddenPanel('tt-overlay', '')}
          <div class="tt-action-sheet tt-hidden" data-as-sheet>
            <div class="tt-action-sheet__item" data-as-item="Pin message">Pin message</div>
            <div class="tt-action-sheet__item" data-as-item="Forward">Forward</div>
            <div class="tt-action-sheet__item" data-as-item="Delete" style="color:#ef4444">Delete</div>
            <div class="tt-action-sheet__cancel" data-as-cancel>Cancel</div>
          </div>
        </div>`,
        (root) => {
          const overlay = q(root, '.tt-overlay')
          const sheet = q(root, '[data-as-sheet]')
          const val = q(root, '[data-as-val]')
          const open = () => { overlay.classList.remove('tt-hidden'); sheet.classList.remove('tt-hidden') }
          const close = () => { overlay.classList.add('tt-hidden'); sheet.classList.add('tt-hidden') }
          return delegate(root, 'click', e => {
            if (e.target.closest('[data-as-open]')) open()
            if (e.target.closest('[data-as-cancel]') || e.target.closest('.tt-overlay')) close()
            const item = e.target.closest('[data-as-item]')
            if (item) { val.textContent = item.dataset.asItem; close() }
          })
        }
      )
    },

    sheet() {
      return demo('sheet',
        tips('Open the bottom panel.', '打开底部面板。'),
        `<div class="p-stack" style="position:relative;min-height:220px">
          ${surface('Filters', '', `${ttBtnSm('Open panel', 'outline', 'data-sh-open')}`)}
          ${hiddenPanel('tt-overlay', '')}
          <div class="tt-sheet tt-hidden" data-sh-sheet>
            <div class="tt-sheet__title">Workspace filters</div>
            <div class="p-cluster">
              <span class="tt-tag tt-tag--default">Open</span>
              <span class="tt-tag tt-tag--default">Assigned to me</span>
              <span class="tt-tag tt-tag--primary">Today</span>
            </div>
            <div style="margin-top:10px">${ttBtnSm('Close', 'outline', 'data-sh-close')}</div>
          </div>
        </div>`,
        (root) => {
          const overlay = q(root, '.tt-overlay')
          const sheet = q(root, '[data-sh-sheet]')
          const open = () => { overlay.classList.remove('tt-hidden'); sheet.classList.remove('tt-hidden') }
          const close = () => { overlay.classList.add('tt-hidden'); sheet.classList.add('tt-hidden') }
          return delegate(root, 'click', e => {
            if (e.target.closest('[data-sh-open]')) open()
            if (e.target.closest('[data-sh-close]') || e.target.closest('.tt-overlay')) close()
          })
        }
      )
    },

    noticebar() {
      return demo('noticebar',
        tips('Dismiss and restore the notice.', '关闭通知栏再恢复。'),
        `<div class="p-stack">
          <div class="tt-notice-bar" data-nb-wrap>
            <span>Planned maintenance tonight at 02:00 UTC.</span>
            <span class="tt-notice-bar__close" data-nb-close>×</span>
          </div>
          ${ttBtnSm('Restore', 'outline', 'data-nb-reset')}
        </div>`,
        (root) => delegate(root, 'click', e => {
          const wrap = q(root, '[data-nb-wrap]')
          if (e.target.closest('[data-nb-close]')) wrap.classList.add('tt-hidden')
          if (e.target.closest('[data-nb-reset]')) wrap.classList.remove('tt-hidden')
        })
      )
    },

    loading() {
      return demo('loading',
        tips('View loading spinner states.', '查看加载指示器。'),
        `<div class="p-stack">
          ${surface('Loading States', '', `
            <div class="p-cluster" style="align-items:center;gap:20px">
              <div class="tt-loading"><div class="tt-loading__spinner" style="width:20px;height:20px"></div></div>
              <div class="tt-loading tt-loading--vertical"><div class="tt-loading__spinner" style="width:24px;height:24px"></div><span class="tt-loading__text">Loading...</span></div>
            </div>
          `)}
        </div>`
      )
    },

    transition() {
      return demo('transition',
        tips('Toggle the fade animation.', '切换淡入淡出动画。'),
        `<div class="p-stack">
          ${surface('Fade Transition', '', `
            ${ttBtnSm('Toggle', 'outline', 'data-tr-toggle')}
            <div class="p-surface" data-tr-box style="padding:12px;margin-top:8px;transition:opacity .3s">
              <div class="p-note">Fade transition content</div>
            </div>
          `)}
        </div>`,
        (root) => {
          let visible = true
          return delegate(root, 'click', e => {
            if (!e.target.closest('[data-tr-toggle]')) return
            visible = !visible
            q(root, '[data-tr-box]').style.opacity = visible ? '1' : '0'
          })
        }
      )
    },

    collapse() {
      return demo('collapse',
        tips('Expand panels to inspect accordion.', '展开面板查看折叠交互。'),
        `<div class="p-stack">
          ${surface('FAQ', '', `<div class="p-stack" style="gap:0">
            <div class="tt-collapse-item tt-collapse-item--open" data-col="1">
              <div class="tt-collapse-item__header" data-col-head="1">Billing cadence<span class="tt-collapse-item__arrow">›</span></div>
              <div class="tt-collapse-item__body" data-col-body="1">Invoices on the first of each month.</div>
            </div>
            <div class="tt-collapse-item" data-col="2">
              <div class="tt-collapse-item__header" data-col-head="2">How to invite<span class="tt-collapse-item__arrow">›</span></div>
              <div class="tt-collapse-item__body tt-hidden" data-col-body="2">Settings → Invite members.</div>
            </div>
            <div class="tt-collapse-item" data-col="3">
              <div class="tt-collapse-item__header" data-col-head="3">Download reports<span class="tt-collapse-item__arrow">›</span></div>
              <div class="tt-collapse-item__body tt-hidden" data-col-body="3">Analytics → Exports.</div>
            </div>
          </div>`)}
        </div>`,
        (root) => delegate(root, 'click', e => {
          const head = e.target.closest('[data-col-head]')
          if (!head) return
          const key = head.dataset.colHead
          qa(root, '[data-col]').forEach(el => {
            const k = el.dataset.col
            const open = k === key
            el.classList.toggle('tt-collapse-item--open', open)
            const body = q(root, `[data-col-body="${k}"]`)
            if (body) body.classList.toggle('tt-hidden', !open)
          })
        })
      )
    },

    progress() {
      return demo('progress',
        tips('Adjust the progress bar.', '拖动查看进度变化。'),
        `<div class="p-stack">
          ${surface('Campaign Progress', '', `
            <input type="range" min="0" max="100" value="68" data-prog-range style="width:100%" />
            <div class="tt-progress">
              <div class="tt-progress__bar"><div class="tt-progress__inner" data-prog-bar style="width:68%"></div></div>
              <span class="tt-progress__text" data-prog-val>68%</span>
            </div>
          `)}
        </div>`,
        (root) => {
          const range = q(root, '[data-prog-range]')
          const bar = q(root, '[data-prog-bar]')
          const val = q(root, '[data-prog-val]')
          const render = () => { bar.style.width = `${range.value}%`; val.textContent = `${range.value}%` }
          render()
          return delegate(range, 'input', render)
        }
      )
    },

    countdown() {
      return demo('countdown',
        tips('Start or reset a short timer.', '开始或重置计时器。'),
        `<div class="p-stack">
          ${surface('Launch Timer', '', `<div class="p-inline-actions">
            <span class="tt-count-down" data-cd-val>00:05</span>
            <div class="p-cluster">${ttBtnSm('Start', 'default', 'data-cd-start')}${ttBtnSm('Reset', 'outline', 'data-cd-reset')}</div>
          </div>`)}
        </div>`,
        (root) => {
          const val = q(root, '[data-cd-val]')
          let current = 5, timer = null
          const render = () => { val.textContent = `00:0${current}` }
          const stop = () => { if (timer) { clearInterval(timer); timer = null } }
          render()
          const cleanup = delegate(root, 'click', e => {
            if (e.target.closest('[data-cd-start]') && !timer) {
              timer = setInterval(() => { current = Math.max(0, current - 1); render(); if (!current) stop() }, 1000)
            }
            if (e.target.closest('[data-cd-reset]')) { stop(); current = 5; render() }
          })
          return () => { stop(); cleanup() }
        }
      )
    },

    list() {
      return demo('list',
        tips('Load more rows until end.', '加载更多直到结束。'),
        `<div class="p-stack">
          ${surface('Feed', '', `<div class="p-stack" style="gap:0">
            <div class="tt-cell" data-list-item>Design sync notes</div>
            <div class="tt-cell" data-list-item>Client feedback digest</div>
          </div>
          <div class="p-inline-actions" style="margin-top:8px">
            ${ttBtnSm('Load more', 'outline', 'data-list-load')}
            <span class="p-note" data-list-status>2 loaded</span>
          </div>`)}
        </div>`,
        (root) => {
          const status = q(root, '[data-list-status]')
          let count = 2
          return delegate(root, 'click', e => {
            if (!e.target.closest('[data-list-load]')) return
            if (count >= 5) { status.textContent = 'No more data'; return }
            count++
            const n = document.createElement('div')
            n.className = 'tt-cell'; n.dataset.listItem = ''; n.innerHTML = `<span class="tt-cell__title">Generated row ${count}</span>`
            q(root, '[data-list-load]').parentElement.previousElementSibling.querySelector('.p-stack').appendChild(n)
            status.textContent = `${count} loaded`
          })
        }
      )
    },

    swiper() {
      return demo('swiper',
        tips('Navigate between slides.', '切换 slide 预览轮播。'),
        `<div class="p-stack">
          ${surface('Carousel', '', `
            <div style="padding:16px;background:linear-gradient(135deg,var(--primary),#4f46e5);color:#fff;border-radius:var(--tt-radius)">
              <div style="font-weight:700;margin-bottom:4px" data-sw-title>Slide 1</div>
              <div style="font-size:11px;opacity:.82" data-sw-body>Overview of the release roadmap.</div>
            </div>
            <div class="p-inline-actions" style="margin-top:8px">
              ${ttBtnSm('Prev', 'outline', 'data-sw-prev')}
              ${ttBtnSm('Next', 'default', 'data-sw-next')}
            </div>
          `)}
        </div>`,
        (root) => {
          const slides = [['Slide 1', 'Overview of the release roadmap.'], ['Slide 2', 'Design review highlights.'], ['Slide 3', 'QA checklist and launch timeline.']]
          let idx = 0
          const render = () => { q(root, '[data-sw-title]').textContent = slides[idx][0]; q(root, '[data-sw-body]').textContent = slides[idx][1] }
          return delegate(root, 'click', e => {
            if (e.target.closest('[data-sw-prev]')) idx = (idx + slides.length - 1) % slides.length
            if (e.target.closest('[data-sw-next]')) idx = (idx + 1) % slides.length
            render()
          })
        }
      )
    },

    badge() {
      return demo('badge',
        tips('View badge types.', '查看徽标类型。'),
        `<div class="p-stack">
          ${surface('Badges', '', `<div class="p-cluster" style="gap:16px">
            <div class="tt-badge">
              ${ttBtnSm('Msgs', 'outline')}
              <div class="tt-badge__content"><span class="tt-badge__text">5</span></div>
            </div>
            <div class="tt-badge">
              ${ttBtnSm('Notify', 'outline')}
              <div class="tt-badge__content"><span class="tt-badge__text">99+</span></div>
            </div>
            <div class="tt-badge">
              ${ttBtnSm('Dot', 'outline')}
              <div class="tt-badge__content tt-badge__content--dot"></div>
            </div>
          </div>`)}
        </div>`
      )
    },

    tag() {
      return demo('tag',
        tips('View tag types.', '查看标签类型。'),
        `<div class="p-stack">
          ${surface('Tag Types', '', `<div class="p-cluster">
            <span class="tt-tag tt-tag--default">Default</span>
            <span class="tt-tag tt-tag--primary">Primary</span>
            <span class="tt-tag tt-tag--success">Success</span>
            <span class="tt-tag tt-tag--warning">Warning</span>
            <span class="tt-tag tt-tag--danger">Danger</span>
          </div>`)}
        </div>`
      )
    },

    divider() {
      return demo('divider',
        tips('View divider variations.', '查看分割线变体。'),
        `<div class="p-stack">
          ${surface('Dividers', '', `
            <div class="p-note">Above</div>
            <div class="tt-divider"></div>
            <div class="tt-divider"><span class="tt-divider__text">OR</span></div>
            <div class="p-note">Below</div>
          `)}
        </div>`
      )
    },

    empty() {
      return demo('empty',
        tips('Empty state placeholder.', '空状态占位。'),
        `<div class="p-stack">
          ${surface('Empty State', '', `
            <div class="tt-empty">
              <div class="tt-empty__icon">📭</div>
              <div class="tt-empty__desc">No data found</div>
            </div>
          `)}
        </div>`
      )
    },

    avatar() {
      return demo('avatar',
        tips('View avatar shapes and sizes.', '查看头像形状和尺寸。'),
        `<div class="p-stack">
          ${surface('Avatars', '', `<div class="p-cluster" style="align-items:center;gap:12px">
            <div class="tt-avatar" style="width:36px;height:36px">JD</div>
            <div class="tt-avatar" style="width:36px;height:36px;border-radius:6px">AB</div>
            <div class="tt-avatar" style="width:28px;height:28px;font-size:11px">S</div>
          </div>`)}
        </div>`
      )
    },

    skeleton() {
      return demo('skeleton',
        tips('View skeleton loading.', '查看骨架屏。'),
        `<div class="p-stack">
          ${surface('Skeleton', '', `
            <div class="tt-skeleton">
              <div class="tt-skeleton__avatar"></div>
              <div class="tt-skeleton__rows">
                <div class="tt-skeleton__row" style="width:80%"></div>
                <div class="tt-skeleton__row" style="width:60%"></div>
                <div class="tt-skeleton__row" style="width:90%"></div>
              </div>
            </div>
          `)}
        </div>`
      )
    },

    image() {
      return demo('image',
        tips('View image with radius.', '查看图片圆角效果。'),
        `<div class="p-stack">
          ${surface('Images', '', `<div class="p-cluster" style="gap:12px">
            <div class="tt-image" style="width:80px;height:60px;border-radius:8px;background:var(--tt-muted);display:flex;align-items:center;justify-content:center"><span class="p-note">120×80</span></div>
            <div class="tt-image" style="width:50px;height:50px;border-radius:50%;background:var(--tt-muted);display:flex;align-items:center;justify-content:center"><span class="p-note">80²</span></div>
          </div>`)}
        </div>`
      )
    },

    scrollview() {
      return demo('scrollview',
        tips('Scroll vertically inside the container.', '在容器内垂直滚动。'),
        `<div class="p-stack">
          ${surface('Scroll View', '', `
            <div style="height:120px;overflow-y:auto;border:1px solid var(--tt-border);border-radius:var(--tt-radius)">
              ${[1,2,3,4,5,6,7,8].map(i => `<div class="tt-cell"><span class="tt-cell__title">Scroll Item ${i}</span></div>`).join('')}
            </div>
          `)}
        </div>`
      )
    },

    table() {
      return demo('table',
        tips('View a simple table.', '查看简单表格。'),
        `<div class="p-stack">
          ${surface('Data Table', '', `
            <table style="width:100%;border-collapse:collapse;font-size:12px">
              <thead><tr style="background:var(--tt-muted)"><th style="padding:6px 8px;text-align:left">Name</th><th style="padding:6px 8px;text-align:left">Age</th><th style="padding:6px 8px;text-align:left">Role</th></tr></thead>
              <tbody>
                <tr><td style="padding:6px 8px;border-bottom:1px solid var(--tt-border)">Alice</td><td style="padding:6px 8px;border-bottom:1px solid var(--tt-border)">28</td><td style="padding:6px 8px;border-bottom:1px solid var(--tt-border)">Dev</td></tr>
                <tr><td style="padding:6px 8px">Bob</td><td style="padding:6px 8px">32</td><td style="padding:6px 8px">PM</td></tr>
              </tbody>
            </table>
          `)}
        </div>`
      )
    },

    descriptions() {
      return demo('descriptions',
        tips('View key-value descriptions.', '查看描述列表。'),
        `<div class="p-stack">
          ${surface('User Info', '', `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px">
              <div><span class="p-note">Name</span><div>Alice</div></div>
              <div><span class="p-note">Age</span><div>28</div></div>
              <div><span class="p-note">Email</span><div>alice@ex.com</div></div>
              <div><span class="p-note">Role</span><div>Developer</div></div>
            </div>
          `)}
        </div>`
      )
    },

    tooltip() {
      return demo('tooltip',
        tips('Hover buttons to see tooltips.', '悬停按钮查看提示。'),
        `<div class="p-stack">
          ${surface('Tooltips', '', `<div class="p-cluster">
            ${ttBtnSm('Top', 'outline', 'title="Top tip"')}
            ${ttBtnSm('Bottom', 'outline', 'title="Bottom tip"')}
          </div>`)}
        </div>`
      )
    },

    swipeaction() {
      return demo('swipeaction',
        tips('Swipe to reveal actions.', '滑动显示操作按钮。'),
        `<div class="p-stack">
          ${surface('Swipe Actions', '', `
            <div style="position:relative;overflow:hidden;border-radius:var(--tt-radius)">
              <div class="tt-cell" style="border-bottom:none"><span class="tt-cell__title">Swipe left to delete</span><span class="tt-cell__value" style="color:var(--tt-destructive);font-size:11px">← swipe</span></div>
            </div>
            <div style="position:relative;overflow:hidden;border-radius:var(--tt-radius)">
              <div class="tt-cell" style="border-bottom:none"><span class="tt-cell__title">Swipe both ways</span><span class="tt-cell__value" style="font-size:11px">↔</span></div>
            </div>
          `)}
        </div>`
      )
    },

    indexbar() {
      return demo('indexbar',
        tips('Choose a letter to jump sections.', '点击字母高亮分组。'),
        `<div class="p-stack">
          ${surface('Contact Index', '', `
            <div style="display:grid;grid-template-columns:1fr 20px;gap:8px">
              <div class="p-surface" style="padding:10px"><div class="p-title" data-idx-title>A</div><div class="p-note" data-idx-body>Alice, Adam, Amber</div></div>
              <div class="p-stack" style="gap:2px">${['A','B','C','D'].map((l,i) => `<button class="p-chip${i===0?' is-active':''}" data-idx="${l}" style="padding:0;min-width:20px;height:20px;font-size:10px">${l}</button>`).join('')}</div>
            </div>
          `)}
        </div>`,
        (root) => {
          const groups = { A:'Alice, Adam, Amber', B:'Ben, Bella, Brian', C:'Cindy, Chris, Carter', D:'Dora, Daniel, Dawn' }
          return delegate(root, 'click', e => {
            const letter = e.target.closest('[data-idx]')
            if (!letter) return
            qa(root, '[data-idx]').forEach(n => n.classList.toggle('is-active', n === letter))
            q(root, '[data-idx-title]').textContent = letter.dataset.idx
            q(root, '[data-idx-body]').textContent = groups[letter.dataset.idx]
          })
        }
      )
    },

    configprovider() {
      return demo('configprovider',
        tips('Theme tokens overview.', '主题 Token 概览。'),
        `<div class="p-stack">
          ${surface('Theme Tokens', '', `<div class="p-cluster" style="gap:8px">
            <div style="width:32px;height:32px;border-radius:8px;background:var(--tt-primary)"></div>
            <div style="width:32px;height:32px;border-radius:8px;background:var(--tt-secondary);border:1px solid var(--tt-border)"></div>
            <div style="width:32px;height:32px;border-radius:8px;background:var(--tt-muted)"></div>
            <div style="width:32px;height:32px;border-radius:8px;background:var(--tt-destructive)"></div>
          </div>`)}
        </div>`
      )
    },

    space() {
      return demo('space',
        tips('Horizontal and vertical spacing.', '水平和垂直间距。'),
        `<div class="p-stack">
          ${surface('Space Component', '', `
            <div class="tt-space tt-space--horizontal" style="gap:12px">
              ${ttBtnSm('A', 'default')}${ttBtnSm('B', 'outline')}${ttBtnSm('C', 'secondary')}
            </div>
            <div class="tt-space tt-space--vertical" style="gap:8px;margin-top:12px">
              <span class="tt-tag tt-tag--default">Vertical A</span>
              <span class="tt-tag tt-tag--primary">Vertical B</span>
              <span class="tt-tag tt-tag--success">Vertical C</span>
            </div>
          `)}
        </div>`
      )
    },

    safearea() {
      return demo('safearea',
        tips('Safe area inset padding.', '安全区域内边距。'),
        `<div class="p-stack">
          ${surface('Safe Area', '', `
            <div style="border:1px dashed var(--tt-border);border-radius:var(--tt-radius);padding:12px;background:var(--tt-muted)">
              <div class="p-note" style="text-align:center">Content between safe areas</div>
            </div>
          `)}
        </div>`
      )
    },

    sticky() {
      return demo('sticky',
        tips('Sticks element to top on scroll.', '滚动时吸附顶部。'),
        `<div class="p-stack">
          ${surface('Sticky Element', '', `
            <div style="background:var(--tt-primary);padding:10px 16px;border-radius:8px"><span style="color:var(--tt-primary-foreground);font-size:12px">Sticky element (offset: 200rpx)</span></div>
            <div class="p-note" style="margin-top:8px">Scroll parent to see sticky behaviour.</div>
          `)}
        </div>`
      )
    },

    row() {
      return demo('row',
        tips('12-column grid layout.', '12 列栅格布局。'),
        `<div class="p-stack">
          ${surface('Grid Layout', '', `
            <div style="display:flex;gap:4px;margin-bottom:6px">
              <div style="flex:1;background:var(--tt-primary);color:var(--tt-primary-foreground);text-align:center;padding:8px 0;border-radius:6px;font-size:11px">8</div>
              <div style="flex:1;background:var(--tt-muted-foreground);color:#fff;text-align:center;padding:8px 0;border-radius:6px;font-size:11px">8</div>
              <div style="flex:1;background:var(--tt-primary);color:var(--tt-primary-foreground);text-align:center;padding:8px 0;border-radius:6px;font-size:11px">8</div>
            </div>
            <div style="display:flex;gap:4px">
              <div style="flex:6;background:var(--tt-primary);color:var(--tt-primary-foreground);text-align:center;padding:8px 0;border-radius:6px;font-size:11px">6</div>
              <div style="flex:12;background:var(--tt-muted-foreground);color:#fff;text-align:center;padding:8px 0;border-radius:6px;font-size:11px">12</div>
              <div style="flex:6;background:var(--tt-primary);color:var(--tt-primary-foreground);text-align:center;padding:8px 0;border-radius:6px;font-size:11px">6</div>
            </div>
          `)}
        </div>`
      )
    },

    grid() {
      return demo('grid',
        tips('N-column grid with border.', 'N 列宫格。'),
        `<div class="p-stack">
          ${surface('Grid', '', `
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--tt-border);border:1px solid var(--tt-border);border-radius:var(--tt-radius);overflow:hidden">
              ${[1,2,3,4,5,6,7,8].map(i => `<div style="background:var(--tt-background);padding:12px 0;text-align:center;font-size:12px">${i}</div>`).join('')}
            </div>
          `)}
        </div>`
      )
    },

    typography() {
      return demo('typography',
        tips('View typography styles.', '查看排版样式。'),
        `<div class="p-stack">
          ${surface('Typography', '', `<div class="p-stack" style="gap:4px">
            <div style="font-size:18px;font-weight:700">Heading H2</div>
            <div style="font-size:14px;font-weight:600">Heading H4</div>
            <div style="font-size:13px">Regular body text.</div>
            <div style="font-size:13px;font-weight:700">Bold text</div>
            <a style="font-size:13px;color:var(--tt-primary);text-decoration:underline">Link text</a>
          </div>`)}
        </div>`
      )
    },

    icon() {
      return demo('icon',
        tips('Browse icon gallery.', '浏览图标集。'),
        `<div class="p-stack">
          ${surface('Icon Gallery', '', `<div class="p-note">Icons render from the tt-icon component. Preview the full gallery in the playground.</div>`)}
          ${surface('Sizes', '', `<div class="p-cluster" style="align-items:flex-end;gap:12px">
            ${[16,20,24,32].map(s => `<div style="width:${s+12}px;height:${s+12}px;border-radius:50%;background:var(--tt-muted);display:flex;align-items:center;justify-content:center;font-size:${s*0.6}px">★</div>`).join('')}
          </div>`)}
        </div>`
      )
    },
  }

  function buildDemo(id, ctx) {
    const renderer = renderers[id]
    if (!renderer) return fallbackDemo(id, ctx || {})
    return renderer(ctx || {})
  }

  window.TTDocs.getPhoneRender = function(id, ctx) { return buildDemo(id, ctx).html }
  window.TTDocs.getPhoneDemoMeta = function(id, lang) {
    const d = buildDemo(id, { lang: lang || 'en' })
    return { tip: getTipText(d.tip, lang || 'en'), interactive: typeof d.mount === 'function' }
  }
  window.TTDocs.mountPhoneDemo = function(root, id, ctx) {
    const d = buildDemo(id, ctx)
    if (typeof d.mount !== 'function') return null
    return d.mount(root, ctx)
  }
})()
