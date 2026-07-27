import './style.css'
import { loadNav, loadFooter } from './partials.js'

loadNav('about')
loadFooter()

document.querySelector('#app').innerHTML = `
  <section class="hero hero--about">
    <img src="/about-sprig.png" class="about-sprig" alt="" />
    <img src="/about-bottom.png" class="about-bottom" alt="" />
    <h1>About Rosealyn</h1>
    <p class="subtitle">Holistic Practitioner and Steward of Lavender & Sage Apothecary</p>
  </section>

  <section class="about-content">
    <p>My journey to Lavender & Sage Apothecary has been one of healing, transformation, and coming home to myself.</p>
    <p>For many years, I searched for balance, connection, and a deeper understanding of who I was. Through my own experiences with trauma, recovery, neurodivergence, and personal growth, I learned that healing is not about becoming someone new, it is about reconnecting with the person you have always been.</p>
    <p>My path has taken me through profound moments of challenge and change, including my journey into recovery and the continued work of healing my mind, body, and spirit. Along the way, I discovered the power of compassion, self-awareness, mindfulness, and creating a Spiritual Practice rooted in connection rather than perfection. These experiences have shaped the way I support others: with empathy, curiosity, acceptance, and a belief that every person’s healing journey is uniquely their own.</p>
    <p>Lavender & Sage Apothecary was created from a passion for natural healing, education, and community. Through Reiki, spiritual guidance, intuitive practices, and wellness offerings, my intention is to create a welcoming space where people can slow down, reconnect with themselves, and explore the tools that support their own journey.</p>
    <p>I believe healing should be accessible. That is why I offer an energetic exchange approach, including sliding scale options, because support, connection, and personal growth should not be limited by financial circumstances.</p>
    <p>My little companion Dragon is also an important part of my journey. As my beloved familiar, he has brought comfort, grounding, and endless personality into my life. While he is not a standard part of sessions, as Lavender & Sage grows into a future home-based studio space, there may be opportunities for those who feel called to experience the calming presence that animals can bring into a healing environment.</p>
    <p>Outside of my practice, I am a writer, creator, lifelong learner, nature lover, and someone who believes there is always more to discover. I am passionate about sharing knowledge, creating meaningful connections, and reminding others that healing does not have to be perfect, it simply has to be honest.</p>
    <p>My purpose is to walk alongside others as they reconnect with themselves, discover their own inner wisdom, and create a life that feels aligned, authentic, and whole.</p>
    <p>Welcome to Lavender & Sage Apothecary. I would be honoured to walk alongside you.</p>
  </section>
`