import './style.css'
import { loadNav, loadFooter } from './partials.js'
import { marked } from 'marked'
import { getPostBySlug } from './lib/journal-posts.js'

loadNav('journal')
loadFooter()

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d)) return ''
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const params = new URLSearchParams(window.location.search)
const slug = params.get('slug')
const post = slug ? getPostBySlug(slug) : null

if (!post) {
  document.querySelector('#app').innerHTML = `
    <section class="hero hero--journal hero--no-corner">
      <h1>Post Not Found</h1>
      <p class="subtitle">This journal entry doesn't exist or may have been removed.</p>
    </section>
    <section class="journal-post-content">
      <a href="/journal.html" class="journal-back-link">← Back to Journal</a>
    </section>
  `
} else {
  document.title = `${post.title} | L & S Apothecary`
  document.querySelector('#app').innerHTML = `
    <section class="journal-post-header">
      <a href="/journal.html" class="journal-back-link">← Back to Journal</a>
      <span class="journal-tag">${post.tag || ''}</span>
      <h1>${post.title || 'Untitled'}</h1>
      ${post.date ? `<p class="journal-post-date">${formatDate(post.date)}</p>` : ''}
    </section>

    ${post.image ? `<img src="${post.image}" alt="" class="journal-post-image" />` : ''}

    <section class="journal-post-content">
      ${marked.parse(post.body || '')}
    </section>
  `
}