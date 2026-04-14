export { createEmas } from './init'
export type { EmasConfig, EmasInstance } from './init'

export { createEmasDb, dbCmd, command } from './database'
export type { MockDb } from './database'

export { createAnonymousAuth, createWechatAuth } from './auth'

export { isQuotaError, handleEmasError, checkEmasError } from './error'

import { createEmas } from './init'
import type { EmasConfig } from './init'
import { createEmasDb, dbCmd } from './database'
import type { MockDb } from './database'
import { createAnonymousAuth, createWechatAuth } from './auth'

export interface SetupEmasOptions {
  config: EmasConfig
  sdk?: any
  mockDb?: MockDb
}

export function setupEmas(options: SetupEmasOptions) {
  const emas = createEmas(options.config, options.sdk)
  const { db } = createEmasDb(emas, options.mockDb)
  const anonAuth = createAnonymousAuth(emas)
  const wxAuth = createWechatAuth(emas)

  return {
    initEmas: () => emas.init(),
    getMpServerless: () => emas.getMpServerless(),
    isEmasReady: () => emas.isReady(),
    getDb: () => emas.getDb(),
    db,
    dbCmd,
    command: dbCmd,
    anonymousAuth: () => anonAuth.authorize(),
    isAuthorized: () => anonAuth.isAuthorized(),
    resetAuthState: () => anonAuth.resetState(),
    wechatAuth: () => wxAuth.authorize(),
    isWechatAuthorized: () => wxAuth.isAuthorized(),
    resetWechatAuthState: () => wxAuth.resetState(),
  }
}
