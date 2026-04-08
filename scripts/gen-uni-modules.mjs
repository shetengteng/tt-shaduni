/**
 * Generate uni_modules format output from packages/
 * Output: dist/uni_modules/tt-shaduni/
 */
import { cpSync, mkdirSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const pkgDir = resolve(root, 'packages')
const outDir = resolve(root, 'dist/uni_modules/tt-shaduni')

mkdirSync(outDir, { recursive: true })

cpSync(resolve(pkgDir, 'components'), resolve(outDir, 'components'), { recursive: true, filter: (src) => !src.includes('__tests__') })
cpSync(resolve(pkgDir, 'composables'), resolve(outDir, 'composables'), { recursive: true })
cpSync(resolve(pkgDir, 'styles'), resolve(outDir, 'styles'), { recursive: true })
cpSync(resolve(pkgDir, 'utils'), resolve(outDir, 'utils'), { recursive: true })
cpSync(resolve(pkgDir, 'index.ts'), resolve(outDir, 'index.ts'))

if (existsSync(resolve(pkgDir, 'env.d.ts'))) {
  cpSync(resolve(pkgDir, 'env.d.ts'), resolve(outDir, 'env.d.ts'))
}

const components = readdirSync(resolve(pkgDir, 'components'))
  .filter((d) => d.startsWith('tt-'))

const easycom = {}
for (const comp of components) {
  easycom[`^${comp}$`] = `@/uni_modules/tt-shaduni/components/${comp}/${comp}.vue`
}

const pkgJson = JSON.parse(JSON.stringify({
  id: 'tt-shaduni',
  displayName: 'TT ShadUni',
  version: '1.0.0',
  description: 'A shadcn-style UniApp component library',
  keywords: ['uniapp', 'vue3', 'shadcn', 'component-library'],
  repository: 'https://github.com/shetengteng/tt-shaduni',
  engines: { HBuilderX: '^3.6.0' },
  dcloudext: { category: ['前端组件-通用UI组件'], sale: { regular: { price: '0.00' } }, contact: { qq: '' } },
  uni_modules: {
    dependencies: [],
    encrypt: [],
    platforms: { cloud: { tcb: 'y', aliyun: 'y' }, client: { Vue: { vue3: 'y' }, App: { 'app-vue': 'y' }, 'H5-mobile': { Safari: 'y', Android: 'y' }, 'MP-WEIXIN': { y: 'y' }, 'MP-ALIPAY': { y: 'y' } } },
  },
}))

writeFileSync(resolve(outDir, 'package.json'), JSON.stringify(pkgJson, null, 2))

writeFileSync(
  resolve(outDir, 'readme.md'),
  `# TT ShadUni\n\nA shadcn-style UniApp Vue3 component library.\n\nSee [GitHub](https://github.com/shetengteng/tt-shaduni) for docs.\n`,
)

console.log(`✓ uni_modules output generated at dist/uni_modules/tt-shaduni/`)
console.log(`  ${components.length} components copied`)
