import './style.css'
import { loadNav, loadFooter } from './partials.js'

loadNav('contact')
loadFooter()

document.querySelector('#app').innerHTML = `
  <section class="hero hero--contact">
    <h1>Contact</h1>
    <p class="subtitle">Reach out for more information or to ask a question</p>
  </section>

  

  <div class="contact-box">
    <section class="contact-section">
      <div class="contact-info">
        <h2>Let's Connect</h2>
        <p>Have a question about a service, or not sure where to start? Send a message and we'll get back to you soon.</p>

        <div class="contact-info-item">
          <span class="contact-info-label">Email</span>
          <span class="contact-info-value"><a href="mailto:rosealynmcguire@gmail.com">rosealynmcguire@gmail.com</a></span>
        </div>

        <div class="contact-info-item">
          <span class="contact-info-label">Response Time</span>
          <span class="contact-info-value">Usually within 1–2 days</span>
        </div>
      </div>

      <form
        class="contact-form"
        id="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden" style="display:none">
          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="6" required></textarea>

        <button type="submit" class="btn">Send Message</button>
        <p id="contact-form-status" class="booking-form-status"></p>
      </form>
    </section>
  </div>
`

const form = document.getElementById('contact-form')
const status = document.getElementById('contact-form-status')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      status.textContent = "Thanks! Your message has been sent — we'll get back to you soon."
      status.classList.add('success')
      form.reset()
    })
    .catch(() => {
      status.textContent = 'Something went wrong sending your message. Please try again or email us directly.'
      status.classList.add('error')
    })
})