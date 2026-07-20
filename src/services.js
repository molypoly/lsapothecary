// services.js
import './style.css'
import { loadNav } from './partials.js'

loadNav('services')

document.querySelector('#app').innerHTML = `
  <section class="hero hero--services">
    <img src="/ns-tree.png" class="ns-tree" alt="" />
    <h1>Nurtured Spirits</h1>
    <p class="subtitle">Reiki, readings, energy clearing, and more</p>
  </section>

  <section class="services-detail">
    <div class="service-card">
      <h2>Readings by Rosie</h2>
      <div class="service-row"><span class="service-name">Single Card Draw</span><span class="service-meta">15–30 min · $25</span></div>
      <div class="service-row"><span class="service-name">Three Card Spread</span><span class="service-meta">30–45 min · $50</span></div>
      <div class="service-row"><span class="service-name">Five Card Spread</span><span class="service-meta">45–60 min · $80</span></div>
      <div class="service-row"><span class="service-name">Intuitive Energy and Card Reading</span><span class="service-meta">45–60 min · $100</span></div>
    </div>

    <div class="service-card">
      <h2>Reiki with Rosie</h2>
      <div class="service-row"><span class="service-name">Intake and Consultation</span><span class="service-meta">30 min · Free</span></div>
      <div class="service-row"><span class="service-name">Rapid Reiki</span><span class="service-meta">15–30 min · $60</span></div>
      <div class="service-row"><span class="service-name">Chakra Balance</span><span class="service-meta">15–30 min · $60</span></div>
      <div class="service-row"><span class="service-name">Full Reiki Treatment (First Session)</span><span class="service-meta">45–60 min · $80</span></div>
      <div class="service-row"><span class="service-name">Full Reiki Treatment (Follow-ups)</span><span class="service-meta">45–60 min · $120</span></div>
    </div>

    <div class="service-card">
      <h2>Energy Clearing</h2>
      <div class="service-row"><span class="service-name">Move In Standard</span><span class="service-meta">30–45 min · $50</span></div>
      <div class="service-row"><span class="service-name">The Eviction Notice</span><span class="service-meta">45–60 min · $80</span></div>
      <div class="service-row"><span class="service-name">Realign Reaffirm Refresh</span><span class="service-meta">30 min · $60</span></div>
      <div class="service-row"><span class="service-name">Events</span><span class="service-meta">60–90 min · $100–$250</span></div>
    </div>

    <div class="service-card">
      <h2>Nurtured Spirits Coaching</h2>
      <div class="service-row"><span class="service-name">Consultation</span><span class="service-meta">30 min · Free</span></div>
      <div class="service-row"><span class="service-name">First Session</span><span class="service-meta">$80 (regular $120)</span></div>
    </div>

    <div class="service-card service-card--full">
      <h2>Weddings by Rosie</h2>
      <div class="service-row"><span class="service-name">I Do &amp; Done (Elopement Style)</span><span class="service-meta">$200 + travel if beyond 15km</span></div>
      <div class="service-row"><span class="service-name">Non-Denominational Ceremony</span><span class="service-meta">$500 + travel if beyond 15km</span></div>
      <div class="service-row"><span class="service-name">Custom Handfasting Ceremony</span><span class="service-meta">$700 + travel if beyond 15km</span></div>
      <p class="placeholder-note">Half officiant fee due upfront as a non-refundable deposit</p>
    </div>

    <p class="placeholder-note travel-note">Travel fees: $0.70/km beyond 15km. Mobile sessions currently available in Kelowna proper; travel fees apply for West Kelowna, Lake Country, and beyond.</p>
  </section>

  <section class="cta-footer">
    <h2>Ready to Begin?</h2>
    <a href="/booking.html" class="btn">Book a Session</a>
  </section>
`