// booking.js
import './style.css'
import { loadNav, loadFooter } from './partials.js'

loadNav('booking')
loadFooter()

document.querySelector('#app').innerHTML = `
  <section class="hero hero--no-corner">
    <h1>Booking</h1>
    <p class="subtitle">Choose a service, then send us a request and we'll confirm a time with you</p>
  </section>

  <section class="services-detail booking-services">
    <div class="service-card">
      <div class="booking-group">
        <h3 class="booking-group-title">Reiki with Rosie</h3>
        <div class="booking-buttons-wrap">
          <div class="booking-buttons">
            <button class="booking-btn active" data-service-name="Intake &amp; Consultation">Intake &amp; Consultation</button>
            <button class="booking-btn" data-service-name="Rapid Reiki">Rapid Reiki</button>
            <button class="booking-btn" data-service-name="Chakra Balance">Chakra Balance</button>
            <button class="booking-btn" data-service-name="Full Reiki (First Session)">Full Reiki (First Session)</button>
            <button class="booking-btn" data-service-name="Full Reiki (Follow-up)">Full Reiki (Follow-up)</button>
          </div>
        </div>
      </div>

      <div class="booking-group">
        <h3 class="booking-group-title">Readings by Rosie</h3>
        <div class="booking-buttons-wrap">
          <div class="booking-buttons">
            <button class="booking-btn" data-service-name="Single Card Draw">Single Card Draw</button>
            <button class="booking-btn" data-service-name="Three Card Spread">Three Card Spread</button>
            <button class="booking-btn" data-service-name="Five Card Spread">Five Card Spread</button>
            <button class="booking-btn" data-service-name="Intuitive Energy and Card Reading">Intuitive Energy and Card Reading</button>
          </div>
        </div>
      </div>

      <div class="booking-group">
        <h3 class="booking-group-title">Energy Clearing</h3>
        <div class="booking-buttons-wrap">
          <div class="booking-buttons">
            <button class="booking-btn" data-service-name="Move In Standard">Move In Standard</button>
            <button class="booking-btn" data-service-name="The Eviction Notice">The Eviction Notice</button>
            <button class="booking-btn" data-service-name="Realign Reaffirm Refresh">Realign Reaffirm Refresh</button>
            <button class="booking-btn" data-service-name="Events">Events</button>
          </div>
        </div>
      </div>

      <div class="booking-group">
        <h3 class="booking-group-title">Nurtured Spirits Coaching</h3>
        <div class="booking-buttons-wrap">
          <div class="booking-buttons">
            <button class="booking-btn" data-service-name="Free Consultation">Free Consultation</button>
            <button class="booking-btn" data-service-name="First Session">First Session</button>
          </div>
        </div>
      </div>

      <!--
      <div class="booking-group">
        <h3 class="booking-group-title">Weddings by Rosie</h3>
        <div class="booking-buttons-wrap">
          <div class="booking-buttons">
            <button class="booking-btn" data-service-name="I Do &amp; Done">I Do &amp; Done</button>
            <button class="booking-btn" data-service-name="Non-Denominational Ceremony">Non-Denominational Ceremony</button>
            <button class="booking-btn" data-service-name="Custom Handfasting Ceremony">Custom Handfasting Ceremony</button>
          </div>
        </div>
      </div>
      -->
    </div>
  </section>

  <section class="booking-form-section">
    <form
      id="booking-request-form"
      name="booking-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="booking-request" />
      <p class="hidden" style="display:none">
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </p>

      <div class="field-full">
        <label for="service">Service</label>
        <input type="text" id="service" name="service" readonly value="Intake &amp; Consultation" />
      </div>

      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div>
        <label for="phone">Phone (optional)</label>
        <input type="tel" id="phone" name="phone" />
      </div>

      <div>
        <label for="preferred-datetime">Preferred date/time</label>
        <input type="text" id="preferred-datetime" name="preferred-datetime" placeholder="e.g. Tuesday afternoon, or a specific date/time" />
      </div>

      <div class="field-full">
        <label for="notes">Notes</label>
        <textarea id="notes" name="notes" rows="3" placeholder="Anything else we should know?"></textarea>
      </div>

      <button type="submit" class="booking-submit-btn">Send Request</button>
      <p id="booking-form-status" class="booking-form-status"></p>
    </form>
  </section>
`

// Wire up button clicks to update the selected service
document.querySelectorAll('.booking-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.booking-btn').forEach((b) => b.classList.remove('active'))
    btn.classList.add('active')
    document.getElementById('service').value = btn.dataset.serviceName
    document.getElementById('booking-request-form').scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

// Handle form submission via fetch (keeps user on the page)
const form = document.getElementById('booking-request-form')
const status = document.getElementById('booking-form-status')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      status.textContent = "Thanks! Your request has been sent — we'll be in touch soon to confirm."
      status.classList.add('success')
      form.reset()
      document.getElementById('service').value = document.querySelector('.booking-btn.active')?.dataset.serviceName || ''
    })
    .catch(() => {
      status.textContent = 'Something went wrong sending your request. Please try again or email us directly.'
      status.classList.add('error')
    })
})

// Mobile: collapsible service groups
function isMobile() {
  return window.matchMedia('(max-width: 600px)').matches
}

document.querySelectorAll('.booking-group-title').forEach((title) => {
  title.addEventListener('click', () => {
    if (!isMobile()) return
    const group = title.closest('.booking-group')
    const wasExpanded = group.classList.contains('expanded')

    // Collapse all groups, then expand the clicked one (unless it was already open)
    document.querySelectorAll('.booking-group').forEach((g) => g.classList.remove('expanded'))
    if (!wasExpanded) group.classList.add('expanded')
  })
})

// Auto-expand the group containing the active/default service on mobile
if (isMobile()) {
  const activeBtn = document.querySelector('.booking-btn.active')
  activeBtn?.closest('.booking-group')?.classList.add('expanded')
}