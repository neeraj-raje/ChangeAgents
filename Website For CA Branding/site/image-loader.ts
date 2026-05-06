const basePath = process.env.NODE_ENV === 'production' ? '/ChangeAgents' : ''

export default function imageLoader({ src }: { src: string }) {
  // Avoid double-prefixing if src already starts with the basePath
  if (src.startsWith(basePath)) return src
  return `${basePath}${src}`
}
