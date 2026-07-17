export function loadNav(activePage) {
  const nav = document.createElement('nav')
  nav.innerHTML = `
    <a href="/index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>
    <a href="/about.html" class="${activePage === 'about' ? 'active' : ''}">About</a>
    <a href="/services.html" class="${activePage === 'services' ? 'active' : ''}">Services</a>
    <a href="/booking.html" class="${activePage === 'booking' ? 'active' : ''}">Booking</a>
    <a href="/faq.html" class="${activePage === 'faq' ? 'active' : ''}">FAQ</a>
    <a href="/contact.html" class="${activePage === 'contact' ? 'active' : ''}">Contact</a>
  `
  document.body.prepend(nav)
}