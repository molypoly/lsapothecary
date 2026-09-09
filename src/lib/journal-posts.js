import { load } from 'js-yaml'

const modules = import.meta.glob('/content/journal/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parsePost(raw, path) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  let data = {}
  let body = raw

  if (match) {
    data = load(match[1]) || {}
    body = match[2]
  }

  const slug = path.split('/').pop().replace(/\.md$/, '')
  return { slug, ...data, body: body.trim() }
}

export const posts = Object.entries(modules)
  .map(([path, raw]) => parsePost(raw, path))
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug)
}