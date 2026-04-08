/**
 * Release script:
 * 1. Bump version in package.json
 * 2. Generate CHANGELOG.md
 * 3. Git commit + tag
 * 
 * Usage: node scripts/release.mjs [patch|minor|major]
 */
import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const releaseType = process.argv[2] || 'patch'
if (!['patch', 'minor', 'major'].includes(releaseType)) {
  console.error('Usage: node scripts/release.mjs [patch|minor|major]')
  process.exit(1)
}

const pkgPath = resolve(root, 'package.json')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

const [major, minor, patch] = pkg.version.split('.').map(Number)
const newVersion =
  releaseType === 'major'
    ? `${major + 1}.0.0`
    : releaseType === 'minor'
      ? `${major}.${minor + 1}.0`
      : `${major}.${minor}.${patch + 1}`

pkg.version = newVersion
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')

try {
  execSync('npx conventional-changelog -p angular -i CHANGELOG.md -s', {
    cwd: root,
    stdio: 'inherit',
  })
} catch {
  console.warn('⚠ conventional-changelog not found, skipping CHANGELOG generation')
}

execSync('git add -A', { cwd: root, stdio: 'inherit' })
execSync(`git commit -m "release: v${newVersion}"`, { cwd: root, stdio: 'inherit' })
execSync(`git tag v${newVersion}`, { cwd: root, stdio: 'inherit' })

console.log(`\n✓ Released v${newVersion}`)
console.log(`  Run 'git push --follow-tags' to publish`)
