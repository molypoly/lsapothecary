import './style.css'
import { loadNav } from './partials.js'

loadNav('home')

document.querySelector('#app').innerHTML = `
  <section class="hero">
    <h1>Lavender &amp; Sage Apothecary</h1>
    <p class="subtitle">Reiki healing, herbalism, and spiritual guidance rooted in nature.</p>
    <a href="/booking.html" class="btn">Book a Session</a>
  </section>

  <section class="teaser">
    <h2>About Rosealyn</h2>
    <p>Placeholder: a short bio introducing Rosealyn as a holistic practitioner, master reiki practitioner, herbalist, spiritual guide, and end-of-life doula.</p>
    <a href="/about.html">Read More →</a>
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

  <section class="testimonials">
    <h2>Testimonials</h2>
    <blockquote>"Placeholder testimonial quote goes here." <span>— Client Name</span></blockquote>
    <blockquote>"Placeholder testimonial quote goes here." <span>— Client Name</span></blockquote>
  </section>

  <section class="cta-footer">
    <h2>Begin Your Healing Journey</h2>
    <a href="/contact.html" class="btn">Get in Touch</a>
  </section>
`