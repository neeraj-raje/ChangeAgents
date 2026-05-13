import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join, extname, basename } from 'path'

const dirs = [
  'public/assets/team',
  'public/assets/Clients',
]

for (const dir of dirs) {
  const files = await readdir(dir)
  for (const file of files) {
    const ext = extname(file).toLowerCase()
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue
    const src = join(dir, file)
    const dest = join(dir, basename(file, ext) + '.webp')
    await sharp(src).webp({ quality: 85 }).toFile(dest)
    console.log(`converted: ${dest}`)
  }
}
