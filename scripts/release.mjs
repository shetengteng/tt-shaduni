/**
 * Release & publish script:
 * 1. Build lib (vite + dts)
 * 2. Bump version in package.json
 * 3. Git commit + tag
 * 4. Publish to npm
 * 5. Git push with tags
 * 
 * Usage:
 *   NPM_TOKEN=npm_xxx node scripts/release.mjs [patch|minor|major]
 *   NPM_TOKEN=npm_xxx node scripts/release.mjs 1.2.3          # explicit version
 *   node scripts/release.mjs --dry-run                         # preview only
 */
import { execSync } from 'child_process'
import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const versionArg = args.find(a => a !== '--dry-run') || 'patch'

const pkgPath = resolve(root, 'package.json')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
const oldVersion = pkg.version

function bumpVersion(current, type) {
  if (/^\d+\.\d+\.\d+/.test(type)) return type
  const [major, minor, patch] = current.split('.').map(Number)
  if (type === 'major') return `${major + 1}.0.0`
  if (type === 'minor') return `${major}.${minor + 1}.0`
  if (type === 'patch') return `${major}.${minor}.${patch + 1}`
  console.error('Usage: node scripts/release.mjs [patch|minor|major|x.y.z] [--dry-run]')
  process.exit(1)
}

const newVersion = bumpVersion(oldVersion, versionArg)

console.log(`\n📦 tt-shaduni release: v${oldVersion} → v${newVersion}`)
if (dryRun) console.log('   (dry-run mode — no changes will be made)\n')

function run(cmd, opts = {}) {
  console.log(`  $ ${cmd}`)
  if (dryRun) return
  execSync(cmd, { cwd: root, stdio: 'inherit', ...opts })
}

// Step 1: Build
console.log('\n🔨 Building...')
run('npm run build:all')

// Step 2: Bump version
console.log(`\n📝 Bumping version to ${newVersion}...`)
if (!dryRun) {
  pkg.version = newVersion
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
}

// Step 3: Changelog (optional)
try {
  run('npx conventional-changelog -p angular -i CHANGELOG.md -s')
} catch {
  console.warn('  ⚠ conventional-changelog not available, skipping')
}

// Step 4: Git commit + tag
console.log('\n🏷  Committing and tagging...')
run('git add -A')
run(`git commit -m "release: v${newVersion}"`)
run(`git tag v${newVersion}`)

// Step 5: Publish to npm
const npmToken = process.env.NPM_TOKEN
if (!npmToken && !dryRun) {
  console.error('\n❌ NPM_TOKEN not set. Run with: NPM_TOKEN=npm_xxx node scripts/release.mjs')
  console.log('   Git commit and tag have been created. You can publish manually with:')
  console.log('   npm publish --access public')
  process.exit(1)
}

console.log('\n🚀 Publishing to npm...')
const localNpmrc = resolve(root, '.npmrc')
let createdNpmrc = false
if (npmToken && !dryRun) {
  writeFileSync(localNpmrc, `//registry.npmjs.org/:_authToken=${npmToken}\n`)
  createdNpmrc = true
}

try {
  run('npm publish --access public')
} finally {
  if (createdNpmrc && existsSync(localNpmrc)) unlinkSync(localNpmrc)
}

// Step 6: Push
console.log('\n📤 Pushing to remote...')
run('git push --follow-tags')

console.log(`\n✅ Published tt-shaduni@${newVersion} to npm`)
console.log(`   https://www.npmjs.com/package/tt-shaduni`)
