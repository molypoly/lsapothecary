import './style.css'
import { loadNav, loadFooter } from './partials.js'
import { posts } from './lib/journal-posts.js'

loadNav('journal')
loadFooter()

function renderPosts() {
  if (!posts.length) {
    return `
      <section class="journal-coming-soon">
        <div class="coming-soon-card">
          <span class="journal-tag">Coming Soon</span>
          <h2>New reflections are on the way</h2>
          <p>Rosie is currently writing her first pieces on herbs, crystals, and healing modalities. Check back soon for micro-learnings from the apothecary.</p>
        </div>
      </section>
    `
  }

  return `
    <section class="journal-index">
      ${posts
        .map(
          (post) => `
        <div class="journal-post">
          <span class="journal-tag">${post.tag || ''}</span>
          <h2>${post.title || 'Untitled'}</h2>
          <p>${post.excerpt || ''}</p>
          <a href="/journal-post.html?slug=${encodeURIComponent(post.slug)}" class="journal-read-more">Read More →</a>
        </div>
      `
        )
        .join('')}
    </section>
  `
}

document.querySelector('#app').innerHTML = `
  <section class="hero hero--journal hero--no-corner">
    <h1>Apothecary Journal</h1>
    <p class="subtitle">Micro-learnings on herbs, crystals, and healing modalities</p>
    <img src="/journal_side.png" alt="" class="journal-side-decor" />
  </section>

  ${renderPosts()}
`