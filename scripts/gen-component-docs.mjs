/**
 * Auto-generate component API documentation from props.ts files
 * Output: docs-vitepress/components/*.md
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const compDir = resolve(root, 'packages/components')
const outDir = resolve(root, 'docs-vitepress/components')

const components = readdirSync(compDir).filter((d) => d.startsWith('tt-'))

function parsePropType(line) {
  const typeMatch = line.match(/type:\s*(String|Number|Boolean|Array|Object|Function)/)
  const asMatch = line.match(/as\s+PropType<([^>]+)>/)
  if (asMatch) return asMatch[1]
  if (typeMatch) return typeMatch[1].toLowerCase()
  if (line.includes('Boolean')) return 'boolean'
  if (line.includes('String')) return 'string'
  if (line.includes('Number')) return 'number'
  return 'any'
}

function parseDefault(line) {
  const defMatch = line.match(/default:\s*([^,}\n]+)/)
  if (defMatch) return defMatch[1].trim().replace(/[()]/g, '')
  return '-'
}

function parsePropName(line) {
  const m = line.match(/^\s*(\w+)\s*[:{]/)
  return m ? m[1] : null
}

function parseProps(content) {
  const props = []
  const lines = content.split('\n')
  let i = 0
  while (i < lines.length) {
    const name = parsePropName(lines[i])
    if (name) {
      let block = lines[i]
      let braces = 0
      for (let j = i; j < Math.min(i + 10, lines.length); j++) {
        block += '\n' + lines[j]
        braces += (lines[j].match(/\{/g) || []).length
        braces -= (lines[j].match(/\}/g) || []).length
        if (braces <= 0 && j > i) break
      }
      props.push({
        name,
        type: parsePropType(block),
        default: parseDefault(block),
      })
    }
    i++
  }
  return props
}

let generated = 0

for (const comp of components) {
  const propsFile = resolve(compDir, comp, 'props.ts')
  if (!existsSync(propsFile)) continue

  const content = readFileSync(propsFile, 'utf-8')
  const props = parseProps(content)
  const displayName = comp
    .replace('tt-', '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')

  let md = `# ${displayName}\n\n`
  md += `## Usage\n\n\`\`\`vue\n<template>\n  <${comp} />\n</template>\n\`\`\`\n\n`
  md += `## Props\n\n| Prop | Type | Default |\n|---|---|---|\n`
  for (const p of props) {
    md += `| \`${p.name}\` | \`${p.type}\` | \`${p.default}\` |\n`
  }
  md += '\n'

  writeFileSync(resolve(outDir, `${comp.replace('tt-', '')}.md`), md)
  generated++
}

console.log(`✓ Generated ${generated} component docs in docs-vitepress/components/`)
