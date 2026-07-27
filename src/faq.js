import './style.css'
import { loadNav, loadFooter } from './partials.js'

loadNav('faq')
loadFooter()

document.querySelector('#app').innerHTML = `
  <section class="hero">
    <h1>Apothecary Journal</h1>
    <p class="subtitle">Micro-learnings on herbs, crystals, and healing modalities</p>
  </section>

  <section class="journal-index">
    <div class="journal-post">
      <span class="journal-tag">Herbalism</span>
      <h2>Post Title Placeholder</h2>
      <p>A short excerpt introducing the topic goes here, giving readers a preview of what the full post covers.</p>
      <a href="#" class="journal-read-more">Read More →</a>
    </div>

    <div class="journal-post">
      <span class="journal-tag">Crystals</span>
      <h2>Post Title Placeholder</h2>
      <p>A short excerpt introducing the topic goes here, giving readers a preview of what the full post covers.</p>
      <a href="#" class="journal-read-more">Read More →</a>
    </div>

    <div class="journal-post">
      <span class="journal-tag">Reiki</span>
      <h2>Post Title Placeholder</h2>
      <p>A short excerpt introducing the topic goes here, giving readers a preview of what the full post covers.</p>
      <a href="#" class="journal-read-more">Read More →</a>
    </div>
  </section>
`