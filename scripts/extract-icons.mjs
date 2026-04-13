#!/usr/bin/env node

/**
 * Remix Icon SVG Extractor for tt-shaduni
 *
 * Usage:
 *   node scripts/extract-icons.mjs --icons home-line,star-fill --out static/svg
 *   node scripts/extract-icons.mjs --all --out static/svg
 *   node scripts/extract-icons.mjs --list                    # list all icons
 *   node scripts/extract-icons.mjs --search home              # search by keyword
 *   node scripts/extract-icons.mjs --categories               # list categories
 */

import { existsSync, mkdirSync, readdirSync, copyFileSync, statSync } from 'fs'
import { join, basename, resolve } from 'path'

const args = process.argv.slice(2)

function getFlag(name) {
  const idx = args.indexOf(name)
  return idx !== -1 ? (args[idx + 1] || true) : null
}

const hasFlag = (name) => args.includes(name)

const remixIconDir = resolve('node_modules/remixicon/icons')
if (!existsSync(remixIconDir)) {
  console.error('❌ remixicon package not found. Run: npm install remixicon --save-dev')
  process.exit(1)
}

function collectSvgFiles(dir) {
  const result = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      result.push(...collectSvgFiles(full))
    } else if (entry.endsWith('.svg')) {
      result.push({ path: full, name: basename(entry, '.svg'), category: basename(dir) })
    }
  }
  return result
}

const allSvgs = collectSvgFiles(remixIconDir)
const svgMap = new Map(allSvgs.map(s => [s.name, s]))

// --help
if (hasFlag('--help') || hasFlag('-h') || args.length === 0) {
  console.log(`
Remix Icon SVG Extractor

Commands:
  --icons <names>   Extract specific icons (comma-separated, without ri- prefix)
  --all             Extract all icons (~4600+)
  --out <dir>       Output directory (default: static/svg)
  --list            List all available icon names
  --search <term>   Search icons by keyword
  --categories      List icon categories with counts

Examples:
  node scripts/extract-icons.mjs --icons home-line,star-fill --out playground/static/svg
  node scripts/extract-icons.mjs --search arrow
  node scripts/extract-icons.mjs --list | head -50
`)
  process.exit(0)
}

// --categories
if (hasFlag('--categories')) {
  const cats = {}
  for (const s of allSvgs) {
    cats[s.category] = (cats[s.category] || 0) + 1
  }
  const sorted = Object.entries(cats).sort((a, b) => b[1] - a[1])
  console.log(`\n📂 ${sorted.length} categories, ${allSvgs.length} total icons:\n`)
  for (const [cat, count] of sorted) {
    console.log(`  ${cat.padEnd(25)} ${count}`)
  }
  process.exit(0)
}

// --list
if (hasFlag('--list')) {
  const names = allSvgs.map(s => s.name).sort()
  for (const n of names) console.log(n)
  console.log(`\nTotal: ${names.length} icons`)
  process.exit(0)
}

// --search
const searchTerm = getFlag('--search')
if (searchTerm && typeof searchTerm === 'string') {
  const kw = searchTerm.toLowerCase()
  const matched = allSvgs.filter(s => s.name.includes(kw)).sort((a, b) => a.name.localeCompare(b.name))
  if (matched.length === 0) {
    console.log(`No icons matching "${searchTerm}"`)
  } else {
    console.log(`\n🔍 ${matched.length} icons matching "${searchTerm}":\n`)
    for (const s of matched) {
      console.log(`  ${s.name.padEnd(35)} [${s.category}]`)
    }
  }
  process.exit(0)
}

// --icons / --all → extract
const outDir = getFlag('--out') || 'static/svg'
const allFlag = hasFlag('--all')
const iconsStr = getFlag('--icons')
const requestedNames = iconsStr && typeof iconsStr === 'string'
  ? iconsStr.split(',').map(n => n.replace(/^ri-/, '').trim())
  : []

if (!allFlag && requestedNames.length === 0) {
  console.error('Specify --icons <names> or --all. Use --help for usage.')
  process.exit(1)
}

const targetDir = resolve(typeof outDir === 'string' ? outDir : 'static/svg')
if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true })

const toCopy = allFlag
  ? allSvgs
  : requestedNames.map(n => svgMap.get(n)).filter(Boolean)

let copied = 0
for (const entry of toCopy) {
  const dest = join(targetDir, `ri-${entry.name}.svg`)
  copyFileSync(entry.path, dest)
  copied++
}

const notFound = allFlag ? [] : requestedNames.filter(n => !svgMap.has(n))

console.log(`\n✅ Extracted ${copied} icon(s) → ${outDir}`)
if (notFound.length) {
  console.warn(`⚠️  Not found: ${notFound.join(', ')}`)
  console.log(`   Tip: names omit "ri-" prefix, e.g. "home-line" not "ri-home-line"`)
  console.log(`   Use --search <keyword> to find available icons`)
}
