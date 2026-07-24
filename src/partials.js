// partials.js
export function loadNav(activePage) {
  const nav = document.createElement('nav')
  nav.innerHTML = `
    <button class="nav-toggle" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="nav-links">
      <a href="/index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>
      <a href="/about.html" class="${activePage === 'about' ? 'active' : ''}">About</a>
      <a href="/services.html" class="${activePage === 'services' ? 'active' : ''}">Services</a>
      <a href="/booking.html" class="${activePage === 'booking' ? 'active' : ''}">Booking</a>
      <a href="/faq.html" class="${activePage === 'faq' ? 'active' : ''}">FAQ</a>
      <a href="/contact.html" class="${activePage === 'contact' ? 'active' : ''}">Contact</a>
    </div>
  `
  document.body.prepend(nav)

  const toggle = nav.querySelector('.nav-toggle')
  const links = nav.querySelector('.nav-links')
  toggle.addEventListener('click', () => {
    links.classList.toggle('open')
    toggle.classList.toggle('open')
  })
}

export function loadFooter() {
  const footer = document.createElement('footer')
  footer.innerHTML = `
    <div class="footer-row">
      <div class="footer-links">
        <a href="/index.html">Home</a>
        <a href="/about.html">About</a>
        <a href="/services.html">Services</a>
        <a href="/booking.html">Booking</a>
        <a href="/faq.html">FAQ</a>
        <a href="/contact.html">Contact</a>
      </div>
      <p class="footer-credit">Designed by <a href="https://digitizeokanagan.com" target="_blank" rel="noopener">Digitize Okanagan</a></p>
      <div class="footer-social">
        <a href="https://www.instagram.com/landsapothecary713/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/people/Lavender-Sage-Apothecary/61575444639013/" target="_blank" rel="noopener">Facebook</a>
      </div>
    </div>
  `
  document.body.appendChild(footer)
}