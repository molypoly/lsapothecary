import './style.css'
import { loadNav } from './partials.js'

loadNav('services')

document.querySelector('#app').innerHTML = `
  <section class="hero">
    <h1>Services</h1>
    <p class="subtitle">Nurtured Spirits, reiki, herbalism, and spiritual guidance</p>
  </section>

  <section class="services-detail">
    <div class="service-block">
      <h2>Reiki Sessions</h2>
      <p>Full sessions, Rapid Reiki (shorter sessions), or chakra-focused sessions, available for people of all ages, animals, events, and spaces.</p>
      <p class="placeholder-note">Placeholder: duration and pricing</p>
    </div>

    <div class="service-block">
      <h2>Herbalism</h2>
      <p>Custom herbal teas and Epsom salt bath soaks, blended for your specific needs. Tinctures and salves coming soon.</p>
      <p class="placeholder-note">Placeholder: duration and pricing</p>
    </div>

    <div class="service-block">
      <h2>Spiritual Coaching &amp; Guided Meditation</h2>
      <p>Life coaching and guided meditation to support your personal journey.</p>
      <p class="placeholder-note">Placeholder: duration and pricing</p>
    </div>

    <div class="service-block">
      <h2>Intuitive Readings</h2>
      <p>Tarot readings for guidance and reflection.</p>
      <p class="placeholder-note">Placeholder: duration and pricing</p>
    </div>
  </section>

  <section class="cta-footer">
    <h2>Ready to Begin?</h2>
    <a href="/booking.html" class="btn">Book a Session</a>
  </section>
`