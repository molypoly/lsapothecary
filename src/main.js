// main.js
import './style.css'
import { loadNav, loadFooter } from './partials.js'

loadNav('home')
loadFooter()

document.querySelector('#app').innerHTML = `
  <section class="hero">
    <div class="hero-logo-slot">
      <img src="/logo-hero.png" alt="Lavender &amp; Sage Apothecary" class="hero-logo" />
    </div>
    <p class="subtitle">Reiki healing, herbalism, and spiritual guidance rooted in nature.</p>
    <a href="/booking.html" class="btn">Book a Session</a>
  </section>

  <section class="teaser">
    <h2>Welcome to Lavender & Sage Apothecary</h2>
    <p>Welcome, and thank you for being here. Lavender & Sage Apothecary is a space rooted in compassion, curiosity, and intentional healing, a place to slow down, reconnect, and explore practices that support your mind, body, and spirit.</p>
    <p>Here, our focus stays grounded in Dharma, not Dogma. Healing is a personal journey, and there is no single path that fits everyone. All are welcome exactly as they are, and I invite you to explore what resonates, discover what supports you, and take the next step on your own unique journey.</p>
    <a href="/about.html">Read More of My Story →</a>
  </section>

  <section class="services-grid">
    <h2>Nurtured Spirits</h2>
    <p class="section-intro">A holistic offering of reiki, herbalism, and spiritual guidance, tailored to you, your space, or your animal companion.</p>
    <div class="cards">
      <div class="card">
        <h3>Reiki Sessions</h3>
        <p>Full sessions, Rapid Reiki, or chakra-focused, for people, pets, events, and spaces.</p>
      </div>
      <div class="card">
        <h3>Herbalism</h3>
        <p>Custom herbal teas and bath soaks, blended for your specific needs.</p>
      </div>
      <div class="card">
        <h3>Spiritual Coaching</h3>
        <p>Guided meditation and life coaching to support your journey.</p>
      </div>
      <div class="card">
        <h3>Intuitive Readings</h3>
        <p>Tarot readings for guidance and reflection.</p>
      </div>
    </div>
    <a href="/services.html">View All Services →</a>
  </section>

  <section class="cta-footer">
    <h2>Begin Your Healing Journey</h2>
    <a href="/contact.html" class="btn">Get in Touch</a>
  </section>
`