// booking.js
import './style.css'
import { loadNav, loadFooter } from './partials.js'

loadNav('booking')
loadFooter()

document.querySelector('#app').innerHTML = `
  <section class="hero">
    <h1>Booking</h1>
    <p class="subtitle">Choose a service, then pick a time that works for you</p>
  </section>

  <section class="services-detail booking-services">
    <div class="service-card">
      <div class="booking-group">
        <h3 class="booking-group-title">Reiki with Rosie</h3>
        <div class="booking-buttons">
          <button class="booking-btn active" data-service-link="landsapothecary/intake">Intake &amp; Consultation</button>
          <button class="booking-btn" data-service-link="landsapothecary/rapidreiki">Rapid Reiki</button>
          <button class="booking-btn" data-service-link="landsapothecary/chakra-balance">Chakra Balance</button>
          <button class="booking-btn" data-service-link="landsapothecary/full-reiki-treatment-first-session">Full Reiki (First Session)</button>
          <button class="booking-btn" data-service-link="landsapothecary/full-reiki-treatment-follow-ups">Full Reiki (Follow-up)</button>
        </div>
      </div>

      <div class="booking-group">
        <h3 class="booking-group-title">Readings by Rosie</h3>
        <div class="booking-buttons">
          <button class="booking-btn" data-service-link="landsapothecary/singlecard">Single Card Draw</button>
          <button class="booking-btn" data-service-link="landsapothecary/three-card-spread">Three Card Spread</button>
          <button class="booking-btn" data-service-link="landsapothecary/five-card-spread">Five Card Spread</button>
          <button class="booking-btn" data-service-link="landsapothecary/intuitive-energy-and-card-reading">Intuitive Energy and Card Reading</button>
        </div>
      </div>

      <div class="booking-group">
        <h3 class="booking-group-title">Energy Clearing</h3>
        <div class="booking-buttons">
          <button class="booking-btn" data-service-link="landsapothecary/move-in-standard">Move In Standard</button>
          <button class="booking-btn" data-service-link="landsapothecary/the-eviction-notice">The Eviction Notice</button>
          <button class="booking-btn" data-service-link="landsapothecary/realign-reaffirm-refresh">Realign Reaffirm Refresh</button>
          <button class="booking-btn" data-service-link="landsapothecary/events">Events</button>
        </div>
      </div>

      <div class="booking-group">
        <h3 class="booking-group-title">Nurtured Spirits Coaching</h3>
        <div class="booking-buttons">
          <button class="booking-btn" data-service-link="landsapothecary/consultation">Free Consultation</button>
          <button class="booking-btn" data-service-link="landsapothecary/first-session">First Session</button>
        </div>
      </div>

      <!--
      <div class="booking-group">
        <h3 class="booking-group-title">Weddings by Rosie</h3>
        <div class="booking-buttons">
          <button class="booking-btn" data-service-link="landsapothecary/elopement">I Do &amp; Done</button>
          <button class="booking-btn" data-service-link="landsapothecary/non-denominational">Non-Denominational Ceremony</button>
          <button class="booking-btn" data-service-link="landsapothecary/handfasting">Custom Handfasting Ceremony</button>
        </div>
      </div>
      -->
    </div>
  </section>

  <section class="booking-calendar-section">
    <div id="my-cal-inline-booking" style="width:100%;min-height:600px;overflow:scroll"></div>
  </section>
`

// Cal.com embed script (single namespace, reused for all event types)
;(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar) }
  let d = C.document
  C.Cal = C.Cal || function () {
    let cal = C.Cal
    let ar = arguments
    if (!cal.loaded) {
      cal.ns = {}
      cal.q = cal.q || []
      d.head.appendChild(d.createElement('script')).src = A
      cal.loaded = true
    }
    if (ar[0] === L) {
      const api = function () { p(api, arguments) }
      const namespace = ar[1]
      api.q = api.q || []
      if (typeof namespace === 'string') {
        cal.ns[namespace] = cal.ns[namespace] || api
        p(cal.ns[namespace], ar)
        p(cal, ['initNamespace', namespace])
      } else p(cal, ar)
      return
    }
    p(cal, ar)
  }
})(window, 'https://app.cal.com/embed/embed.js', 'init')

Cal('init', 'booking', { origin: 'https://app.cal.com' })
Cal.config = Cal.config || {}
Cal.config.forwardQueryParams = true

function loadCalendar(calLink) {
  document.getElementById('my-cal-inline-booking').innerHTML = ''
  Cal.ns['booking']('inline', {
    elementOrSelector: '#my-cal-inline-booking',
    config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
    calLink: calLink,
  })
  Cal.ns['booking']('ui', { hideEventTypeDetails: false, layout: 'month_view' })
}

// Load the first service's calendar by default
loadCalendar('landsapothecary/intake')

setTimeout(() => {
  document.getElementById('my-cal-inline-booking').scrollIntoView({ behavior: 'smooth', block: 'start' })
}, 900)

// Wire up button clicks to swap the calendar
document.querySelectorAll('.booking-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.booking-btn').forEach((b) => b.classList.remove('active'))
    btn.classList.add('active')
    loadCalendar(btn.dataset.serviceLink)
    setTimeout(() => {
      document.getElementById('my-cal-inline-booking').scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 900)
  })
})