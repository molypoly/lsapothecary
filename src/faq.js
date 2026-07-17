import './style.css'
import { loadNav } from './partials.js'

loadNav('faq')

document.querySelector('#app').innerHTML = `
  <h1>FAQ</h1>
`