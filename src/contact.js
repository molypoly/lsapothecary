import './style.css'
import { loadNav, loadFooter } from './partials.js'

loadNav('contact')
loadFooter()

document.querySelector('#app').innerHTML = `
  <section class="hero">
    <h1>Contact</h1>
    <p class="subtitle">Reach out for more information or to ask a question</p>
  </section>

  <section class="contact-section">
    <form class="contact-form" id="contact-form">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="6" required></textarea>

      <button type="submit" class="btn">Send Message</button>
    </form>
  </section>
`

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  const subject = encodeURIComponent(`Website inquiry from ${name}`)
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)

  window.location.href = `mailto:rosealynmcguire@gmail.com?subject=${subject}&body=${body}`
})