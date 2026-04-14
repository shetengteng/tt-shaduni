/**
 * Generate uni_modules format output from packages/
 * Output: dist/uni_modules/tt-shaduni/
 *
 * Compiles .ts → .js and strips TypeScript syntax from .vue files
 * so the output works in pure-JS UniApp / HBuilderX projects.
 */
import { cpSync, mkdirSync, writeFileSync, readFileSync, readdirSync, existsSync, unlinkSync, statSync } from 'fs'
import { resolve, dirname, extname, join } from 'path'
import { fileURLToPath } from 'url'
import { transformSync } from 'esbuild'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const pkgDir = resolve(root, 'packages')
const outDir = resolve(root, 'dist/uni_modules/tt-shaduni')

mkdirSync(outDir, { recursive: true })

cpSync(resolve(pkgDir, 'components'), resolve(outDir, 'components'), { recursive: true, filter: (src) => !src.includes('__tests__') })
cpSync(resolve(pkgDir, 'composables'), resolve(outDir, 'composables'), { recursive: true })
cpSync(resolve(pkgDir, 'icons'), resolve(outDir, 'icons'), { recursive: true })
cpSync(resolve(pkgDir, 'styles'), resolve(outDir, 'styles'), { recursive: true })
cpSync(resolve(pkgDir, 'utils'), resolve(outDir, 'utils'), { recursive: true })
cpSync(resolve(pkgDir, 'index.ts'), resolve(outDir, 'index.ts'))

if (existsSync(resolve(pkgDir, 'env.d.ts'))) {
  cpSync(resolve(pkgDir, 'env.d.ts'), resolve(outDir, 'env.d.ts'))
}

/* ── Step: compile .ts → .js with esbuild ── */
function walkDir(dir) {
  const files = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) files.push(...walkDir(full))
    else files.push(full)
  }
  return files
}

const tsFiles = walkDir(outDir).filter(f => extname(f) === '.ts' && !f.endsWith('.d.ts'))
for (const tsFile of tsFiles) {
  const jsFile = tsFile.replace(/\.ts$/, '.js')
  const src = readFileSync(tsFile, 'utf8')
  const { code } = transformSync(src, { loader: 'ts', format: 'esm', target: 'es2020' })
  writeFileSync(jsFile, code)
  unlinkSync(tsFile)
}
console.log(`  ${tsFiles.length} .ts files compiled to .js`)

/* ── Step: strip TypeScript from .vue <script> blocks using esbuild ── */
const vueFiles = walkDir(outDir).filter(f => extname(f) === '.vue')
let vueChanged = 0
for (const vueFile of vueFiles) {
  let content = readFileSync(vueFile, 'utf8')
  const original = content

  const scriptRe = /<script([^>]*)lang="ts"([^>]*)>([\s\S]*?)<\/script>/g
  content = content.replace(scriptRe, (full, before, after, body) => {
    try {
      const { code } = transformSync(body, { loader: 'ts', format: 'esm', target: 'es2020' })
      return `<script${before}${after}>${code}</script>`
    } catch (e) {
      console.warn(`  ⚠ esbuild failed for ${vueFile}, falling back to regex`)
      return full.replace('lang="ts"', '')
    }
  })

  if (content !== original) {
    writeFileSync(vueFile, content)
    vueChanged++
  }
}
console.log(`  ${vueChanged}/${vueFiles.length} .vue files had TS stripped`)

/* ── Step: fix SVG path for uni_modules consumers ── */
const svgIconFile = resolve(outDir, 'composables/use-svg-icon.js')
if (existsSync(svgIconFile)) {
  let svgCode = readFileSync(svgIconFile, 'utf8')
  svgCode = svgCode.replace(/["']\.\/static\/svg["']/g, '"/static/svg"')
  writeFileSync(svgIconFile, svgCode)
  console.log('  SVG path fixed to /static/svg')
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
