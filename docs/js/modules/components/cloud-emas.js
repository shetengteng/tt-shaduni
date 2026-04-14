window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["cloud-emas"] = {
  "id": "cloud-emas",
  "cat": "cloud",
  "name": "Cloud EMAS",
  "desc": "EMAS Serverless SDK wrapper with CloudBase-style chainable DB API, auth, and error handling. Tree-shakable — only bundled when imported.",
  "descZh": "EMAS Serverless SDK 封装，提供 CloudBase 风格的链式数据库 API、授权和错误处理。按需加载——不导入则不打包。",
  "usage": "import { setupEmas } from 'tt-shaduni/cloud-emas'\n\nconst { db, initEmas, anonymousAuth } = setupEmas({\n  config: { appId, spaceId, clientSecret, endpoint }\n})\n\nawait initEmas()\nawait anonymousAuth()\nconst res = await db.collection('users').where({ id: '001' }).get()",
  "props": [
    ["config.appId", "string", "(required)"],
    ["config.spaceId", "string", "(required)"],
    ["config.clientSecret", "string", "(required)"],
    ["config.endpoint", "string", "(required)"],
    ["sdk", "any", "auto-require"],
    ["mockDb", "MockDb", "undefined"]
  ],
  "tag": "setupEmas",
  "examples": [
    {
      "title": "Quick Setup",
      "titleZh": "快速初始化",
      "desc": "One-line setup returns all APIs you need.",
      "descZh": "一行配置返回全部 API。",
      "code": "// api/emas.js\nimport { setupEmas } from '@/uni_modules/tt-shaduni/cloud-emas'\nimport { EMAS_CONFIG, WX_APPID } from '@/config'\n\nconst {\n  initEmas, db, dbCmd,\n  anonymousAuth, wechatAuth,\n  resetAuthState, resetWechatAuthState,\n} = setupEmas({\n  config: { appId: WX_APPID, ...EMAS_CONFIG }\n})\n\nexport {\n  initEmas, db, dbCmd,\n  anonymousAuth, wechatAuth,\n  resetAuthState, resetWechatAuthState,\n}"
    },
    {
      "title": "App Startup Auth",
      "titleZh": "应用启动授权",
      "desc": "Initialize EMAS and authenticate on app launch.",
      "descZh": "在应用启动时初始化 EMAS 并完成授权。",
      "code": "// App.vue\nimport { initEmas, anonymousAuth, wechatAuth } from '@/api/emas'\n\nexport default {\n  onLaunch() {\n    const authFn = loginType === 'wechat' ? wechatAuth : anonymousAuth\n    initEmas().then(() => authFn())\n  }\n}"
    },
    {
      "title": "Database CRUD",
      "titleZh": "数据库增删改查",
      "desc": "CloudBase-style chainable API for database operations.",
      "descZh": "CloudBase 风格的链式数据库操作。",
      "code": "import { db, dbCmd } from '@/api/emas'\n\n// Query\nconst { data } = await db.collection('projects')\n  .where({ accountId: 'user_001', archived: false })\n  .orderBy('sortOrder', 'asc')\n  .get()\n\n// Insert\nconst { id } = await db.collection('projects').add({\n  name: 'Read Books', icon: 'ri-book-line', color: '#3B82F6'\n})\n\n// Update by doc ID\nawait db.collection('projects').doc(id).update({ name: 'Read More' })\n\n// Delete\nawait db.collection('projects').doc(id).remove()\n\n// Batch query with operators\nconst { data: recent } = await db.collection('records')\n  .where({ date: dbCmd.gte('2026-04-01') })\n  .limit(50)\n  .get()"
    },
    {
      "title": "Mock Mode (Dev)",
      "titleZh": "Mock 模式（开发环境）",
      "desc": "Pass mockDb to use in-memory data during development.",
      "descZh": "传入 mockDb 在开发时使用内存数据。",
      "code": "import { setupEmas } from '@/uni_modules/tt-shaduni/cloud-emas'\nimport { mockDb } from '@/mock/db'\n\nconst { db } = setupEmas({\n  config: { appId, spaceId, clientSecret, endpoint },\n  mockDb: DEV_MODE ? mockDb : undefined\n})\n\n// Same API works with both mock and real DB\nconst { data } = await db.collection('users').get()"
    },
    {
      "title": "Error Handling",
      "titleZh": "错误处理",
      "desc": "Built-in quota error detection with toast notifications.",
      "descZh": "内置请求额度检测，自动显示 Toast 提示。",
      "code": "import { isQuotaError, handleEmasError } from '@/api/emas'\n\ntry {\n  await db.collection('records').add(record)\n} catch (e) {\n  if (isQuotaError(e)) {\n    // Auto toast: '今日云服务请求额度已用完'\n    console.warn('Quota exceeded')\n  }\n}"
    },
    {
      "title": "Exported API Reference",
      "titleZh": "导出 API 一览",
      "desc": "All exports from setupEmas().",
      "descZh": "setupEmas() 返回的全部 API。",
      "code": "const {\n  // SDK lifecycle\n  initEmas,         // () => Promise<boolean>\n  getMpServerless,  // () => MPServerless | null\n  isEmasReady,      // () => boolean\n  getDb,            // () => emasDb | null\n\n  // Database\n  db,               // { collection(name) }\n  dbCmd,            // { eq, neq, gt, gte, lt, lte, in, nin, and, or, exists }\n  command,          // alias for dbCmd\n\n  // Anonymous auth\n  anonymousAuth,    // () => Promise<{ success }>\n  isAuthorized,     // () => boolean\n  resetAuthState,   // () => void\n\n  // WeChat auth\n  wechatAuth,       // () => Promise<{ success, userInfo }>\n  isWechatAuthorized, // () => boolean\n  resetWechatAuthState, // () => void\n} = setupEmas({ config })"
    }
  ]
}
