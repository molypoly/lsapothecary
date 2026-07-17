import './style.css'
import { loadNav } from './partials.js'

loadNav('about')

document.querySelector('#app').innerHTML = `
  <section class="hero">
    <h1>About Rosealyn</h1>
    <p class="subtitle">Holistic practitioner, healer, and guide</p>
  </section>

  <section class="about-content">
    <p>Rosealyn McGuire is a holistic practitioner offering reiki, herbalism, and spiritual guidance through Lavender &amp; Sage Apothecary's Nurtured Spirits program.</p>
    <p>As a Reiki practitioner, she offers full sessions, Rapid Reiki, and chakra-focused sessions — for people of all ages, animals, events, and spaces. She doesn't yet have a physical studio, so sessions are offered as mobile visits to your home or outdoors, depending on your preference.</p>
    <p>Her herbalism practice blends herbs into custom teas and bath soaks tailored to specific needs, with tinctures and salves coming soon.</p>
    <p>Rosealyn also offers spiritual and life coaching, guided meditation, and intuitive tarot readings for guidance and reflection.</p>
    <p>Placeholder: a closing paragraph on her philosophy, training background, or what led her to this work — to be filled in once we hear back from her.</p>
  </section>
`