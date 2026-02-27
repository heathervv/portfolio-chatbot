import { readdirSync, statSync } from 'node:fs'
import path from 'node:path'

const srcRoot = path.resolve(process.cwd(), 'src')
const forbidden = []

const walk = (dir) => {
  const entries = readdirSync(dir)

  for (const entry of entries) {
    const fullPath = path.join(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      walk(fullPath)
      continue
    }

    if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      forbidden.push(path.relative(process.cwd(), fullPath))
    }
  }
}

walk(srcRoot)

if (forbidden.length > 0) {
  console.error('Found disallowed JavaScript files in src/:')
  for (const file of forbidden) {
    console.error(`- ${file}`)
  }
  process.exit(1)
}

console.log('TS-only check passed: no .js/.jsx files in src/')
