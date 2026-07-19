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