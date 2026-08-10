// journal.js
import './style.css'
import { loadNav, loadFooter } from './partials.js'

loadNav('journal')
loadFooter()

document.querySelector('#app').innerHTML = `
  <section class="hero hero--journal hero--no-corner">
    <h1>Apothecary Journal</h1>
    <p class="subtitle">Micro-learnings on herbs, crystals, and healing modalities</p>
    <img src="/journal_side.png" alt="" class="journal-side-decor" />
  </section>

  <section class="journal-coming-soon">
    <div class="coming-soon-card">
      <span class="journal-tag">Coming Soon</span>
      <h2>New reflections are on the way</h2>
      <p>Currently writing the first pieces on herbs, crystals, and healing modalities. Check back soon for micro-learnings from the apothecary.</p>
    </div>
  </section>
`