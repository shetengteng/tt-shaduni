import { ref, computed } from 'vue'

export type ThemeMode = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'tt-ui-theme'

const themeMode = ref<ThemeMode>('system')
const systemTheme = ref<'light' | 'dark'>('light')
let initialized = false

function initTheme() {
  if (initialized) return
  initialized = true

  try {
    const stored = uni.getStorageSync(STORAGE_KEY) as ThemeMode
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      themeMode.value = stored
    }
  } catch {
    // storage unavailable, keep default
  }

  try {
    const sysInfo = uni.getSystemInfoSync()
    systemTheme.value = (sysInfo as any).theme === 'dark' ? 'dark' : 'light'
  } catch {
    // fallback to light
  }

  // @ts-expect-error — onThemeChange may not exist on all platforms
  uni.onThemeChange?.((res: { theme: string }) => {
    systemTheme.value = res.theme === 'dark' ? 'dark' : 'light'
  })
}

const resolvedTheme = computed<'light' | 'dark'>(() => {
  if (themeMode.value === 'system') return systemTheme.value
  return themeMode.value
})

function setTheme(mode: ThemeMode) {
  themeMode.value = mode
  try {
    uni.setStorageSync(STORAGE_KEY, mode)
  } catch {
    // ignore
  }
}

function toggleTheme() {
  setTheme(resolvedTheme.value === 'light' ? 'dark' : 'light')
}

export function useTheme() {
  return {
    themeMode,
    resolvedTheme,
    isDark: computed(() => resolvedTheme.value === 'dark'),
    setTheme,
    toggleTheme,
    initTheme,
  }
}
