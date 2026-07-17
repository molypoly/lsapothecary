import './style.css'
import { loadNav } from './partials.js'

loadNav('booking')

document.querySelector('#app').innerHTML = `
  <h1>Booking</h1>
`