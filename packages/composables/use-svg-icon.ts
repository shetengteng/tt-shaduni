import { ref, computed, watch, onMounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'

export interface UseSvgIconOptions {
  name?: string
  svg?: string
  color?: string
  /** Directory where SVG files are stored (default: '/static/svg') */
  dir?: string
}

export interface UseSvgIconReturn {
  /** Raw SVG string loaded from file or prop */
  svgRaw: Ref<string>
  /** SVG string with color applied (currentColor replaced) */
  svgHtml: ComputedRef<string>
  /** Encoded data URI for use as CSS background-image */
  svgDataUri: ComputedRef<string>
  /** Reload the SVG (useful after name/svg change) */
  reload: () => Promise<void>
}

const svgCache = new Map<string, string>()

export function useSvgIcon(
  getName: () => string,
  getSvg: () => string,
  getColor: () => string,
  dir = './static/svg',
): UseSvgIconReturn {
  const svgRaw = ref('')

  const svgHtml = computed(() => {
    if (!svgRaw.value) return ''
    const color = getColor()
    if (!color) return svgRaw.value
    return svgRaw.value.replace(/currentColor/g, color)
  })

  const svgDataUri = computed(() => {
    if (!svgRaw.value) return ''
    let svg = svgRaw.value
    const color = getColor()
    if (color) svg = svg.replace(/currentColor/g, color)
    return `data:image/svg+xml,${encodeURIComponent(svg)}`
  })

  async function reload() {
    const inlineSvg = getSvg()
    if (inlineSvg) {
      svgRaw.value = inlineSvg
      return
    }

    const name = getName()
    if (!name) {
      svgRaw.value = ''
      return
    }

    const cached = svgCache.get(name)
    if (cached) {
      svgRaw.value = cached
      return
    }

    const path = `${dir}/${name}.svg`
    try {
      const text = await readSvgFile(path)
      const match = text.match(/<svg[\s\S]*?<\/svg>/i)
      if (match) {
        svgCache.set(name, match[0])
        svgRaw.value = match[0]
      }
    } catch (e) {
      console.warn(`[useSvgIcon] Failed to load: ${name}`, e)
    }
  }

  onMounted(reload)
  watch(getName, reload)
  watch(getSvg, reload)

  return { svgRaw, svgHtml, svgDataUri, reload }
}

function readSvgFile(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof plus !== 'undefined' && (plus as any).io) {
        ;(plus as any).io.resolveLocalFileSystemURL(
          `_www/${path}`,
          (entry: any) =>
            entry.file((file: any) => {
              const reader = new (plus as any).io.FileReader()
              reader.onloadend = (evt: any) => resolve(evt.target.result)
              reader.onerror = (err: any) => reject(err)
              reader.readAsText(file, 'utf-8')
            }),
          (err: any) => reject(err),
        )
        return
      }
    } catch {
      /* not APP-PLUS env */
    }

    try {
      if (typeof uni !== 'undefined' && (uni as any).getFileSystemManager) {
        const fs = (uni as any).getFileSystemManager()
        fs.readFile({
          filePath: path,
          encoding: 'binary',
          success: (res: any) => resolve(res.data),
          fail: reject,
        })
        return
      }
    } catch {
      /* not MP env */
    }

    if (typeof fetch !== 'undefined') {
      fetch(path).then((r) => r.text()).then(resolve).catch(reject)
    } else {
      reject(new Error('[useSvgIcon] No file reader available'))
    }
  })
}

/** Pre-warm the cache with SVG strings (useful for inline bundles) */
export function preloadSvgIcons(icons: Record<string, string>) {
  for (const [name, svg] of Object.entries(icons)) {
    svgCache.set(name, svg)
  }
}

/** Clear the SVG cache */
export function clearSvgIconCache() {
  svgCache.clear()
}
