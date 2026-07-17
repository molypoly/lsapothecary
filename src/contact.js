import './style.css'
import { loadNav } from './partials.js'

loadNav('contact')

document.querySelector('#app').innerHTML = `
  <h1>Contact</h1>
`