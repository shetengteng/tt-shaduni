/**
 * EMAS Serverless SDK 初始化
 *
 * Usage:
 *   import MPServerless from '@alicloud/mpserverless-sdk'
 *   import { createEmas } from 'tt-shaduni/cloud-emas'
 *   const emas = createEmas(MPServerless, { appId, spaceId, clientSecret, endpoint })
 *   await emas.init()
 */

export interface EmasConfig {
  appId: string
  spaceId: string
  clientSecret: string
  endpoint: string
}

let _mpserverless: any = null
let _initialized = false

export function createEmas(SDK: any, config: EmasConfig) {
  const init = async () => {
    if (_initialized && _mpserverless) return true

    try {
      _mpserverless = new SDK(uni, {
        appId: config.appId,
        spaceId: config.spaceId,
        clientSecret: config.clientSecret,
        endpoint: config.endpoint,
      })
      _initialized = true
      return true
    } catch (error) {
      console.error('[EMAS] 初始化失败:', error)
      return false
    }
  }

  const getMpServerless = () => _mpserverless
  const getDb = () => _mpserverless?.db || null
  const isReady = () => _initialized && !!_mpserverless

  const reset = () => {
    _mpserverless = null
    _initialized = false
  }

  return { init, getMpServerless, getDb, isReady, reset }
}

export type EmasInstance = ReturnType<typeof createEmas>
