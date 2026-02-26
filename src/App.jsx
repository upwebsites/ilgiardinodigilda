import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Facebook, MapPin, Phone, Mail, Sparkles, X, CheckCircle2 } from 'lucide-react'
import './App.css'

const Navbar = () => (
  <nav className="navbar-premium">
    <div className="container nav-content">
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05, rotate: -1 }}
      >
        <img src="/images/logo.jpg" alt="Logo" className="nav-logo-img" />
        <span>Il giardino di Gilda</span>
      </motion.div>
      <div className="nav-links">
        <a href="#chi-siamo">Chi Siamo</a>
        <a href="#servizi">Servizi</a>
        <a href="#contatti">Contatti</a>
      </div>
    </div>
  </nav>
)

const Hero = () => (
  <section className="hero-premium">
    <div className="container hero-grid">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="section-subtitle">Centro Cinofilo d'Eccellenza</span>
        <h1>Il miglior amico del tuo cane, <br /><span>in un giardino d'altri tempi.</span></h1>
        <p>Un ambiente sereno, professionale e immerso nel verde dove ogni cane può imparare, giocare e crescere in totale armonia.</p>
        <div className="hero-actions">
          <a href="#servizi" className="btn-premium">Esplora i Servizi</a>
          <a href="#chi-siamo" className="btn-outline">Scopri chi siamo</a>
        </div>
      </motion.div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="hero-image-container">
          <img src="/images/Educazione.png" alt="Professional training" className="hero-main-img" />
          <div className="stats-badge-premium">
            <div className="stats-icon"><Sparkles size={20} /></div>
            <div className="stats-text">
              <strong>500+</strong>
              <span>Cani Felici</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

const About = () => (
  <section id="chi-siamo" className="about-premium">
    <div className="container section-grid">
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-subtitle">La nostra filosofia</span>
        <h2>Dove l'amore per i cani <br />incontra la professionalità</h2>
        <p>Il Giardino di Gilda nasce dal desiderio di offrire uno spazio d'eccellenza dedicato al benessere dei nostri amici a quattro zampe. Utilizziamo esclusivamente metodi gentili e positivi, basati sulle più moderne scoperte nel campo della cinofilia.</p>
        <p>La nostra missione è costruire un ponte di comunicazione tra te e il tuo cane, in un ambiente protetto, stimolante e immerso nella natura.</p>
      </motion.div>
      <motion.div
        className="about-visual"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="premium-image-stack">
          <img src="/training.png" alt="Professional training session" className="main-about-img premium-card" />
        </div>
      </motion.div>
    </div>
  </section>
)

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content-premium"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={onClose}><X size={24} /></button>

            <div className="modal-inner">
              <div className="modal-visual">
                <img src={service.image} alt={service.title} />
                <div className="modal-visual-badge">{service.tag}</div>
              </div>

              <div className="modal-info">
                <span className="section-subtitle">Dettagli Servizio</span>
                <h2>{service.title}</h2>
                <p className="modal-full-desc">{service.fullDesc}</p>

                <div className="modal-features">
                  <h3>Cosa include:</h3>
                  <ul>
                    {service.features.map((f, i) => (
                      <li key={i}><CheckCircle2 size={18} className="feat-icon" /> {f}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-cta">
                  <a href="#contatti" className="btn-premium" onClick={onClose}>Prenota ora</a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Asilo Diurno',
      image: '/images/Asilo diurno.png',
      tag: 'Socializzazione',
      desc: 'Più di un semplice parcheggio: una vera vacanza per il tuo cane con giochi di gruppo e relax supervisionato.',
      fullDesc: 'L\'asilo diurno è il cuore pulsante del nostro giardino. Qui il tuo cane non viene solo "custodito", ma vive un\'esperienza di socializzazione completa. Sotto la costante supervisione dei nostri educatori, i cani sono divisi in gruppi compatibili per taglia e temperamento, alternando momenti di gioco libero a sessioni di riposo rigenerante.',
      features: ['Aree ombreggiate e fresche', 'Acqua fresca sempre disponibile', 'Educatori sempre presenti', 'Aggiornamenti foto/video via WhatsApp']
    },
    {
      title: 'Taxi Dog',
      image: '/images/Taxi dog.png',
      tag: 'Comodità',
      desc: 'Trasporto dedicato VIP per garantire al tuo amico spostamenti sicuri e zero stress per te.',
      fullDesc: 'Il nostro servizio Taxi Dog è pensato per chi vuole il meglio per il proprio cane ma ha una vita frenetica. Utilizziamo veicoli climatizzati e attrezzati con trasportini a norma di legge, garantendo la massima sicurezza e il minimo stress durante il tragitto casa-giardino-casa.',
      features: ['Pick-up e delivery a domicilio', 'Veicoli igienizzati quotidianamente', 'Conducenti esperti e gentili', 'Gestione orari flessibile']
    },
    {
      title: 'Educazione',
      image: '/images/Educazione.png',
      tag: 'Percorsi',
      desc: 'Costruisci un legame magico basato sulla fiducia e sulla comprensione reciproca con metodi gentili.',
      fullDesc: 'L\'educazione cinofila per noi è un dialogo, non un set di comandi. I nostri percorsi individuali o di gruppo mirano a risolvere piccoli e grandi problemi di convivenza, partendo sempre dal benessere psicofisico del cane e dalla corretta comunicazione con il proprietario.',
      features: ['Metodi esclusivamente positivi', 'Piani di lavoro personalizzati', 'Analisi del linguaggio del corpo', 'Supporto post-lezione']
    },
    {
      title: 'Nosework',
      image: '/images/Nosework.png',
      tag: 'Attività',
      desc: 'Sviluppa il superpotere del tuo cane attraverso il gioco olfattivo per calma e autostima.',
      fullDesc: 'Il Nosework è l\'attività che più di ogni altra valorizza la natura del cane. Attraverso la ricerca di odori specifici, aiutiamo i cani "iperattivi" a trovare concentrazione e calma, e i cani timidi a guadagnare autostima. È un\'attività faticosa mentalmente ma estremamente appagante.',
      features: ['Stimolazione mentale profonda', 'Adatto a tutte le età e razze', 'Migliora il legame cane-proprietario', 'Utile per la gestione dello stress']
    },
    {
      title: 'Area Verde & Eventi',
      image: '/images/Aree verdi sicure.png',
      tag: 'Community',
      desc: 'Seminari, incontri sociali e ampi spazi recintati per correre in totale libertà e sicurezza.',
      fullDesc: 'Il nostro spazio non è solo un centro addestramento, è un punto di ritrovo. Offriamo l\'affitto di aree verdi recintate per sgambamenti in totale privacy e organizziamo eventi a tema, seminari con esperti e giornate di socializzazione controllata per far crescere la nostra community.',
      features: ['Spazi 100% recintati e sicuri', 'Seminari con professionisti', 'Eventi stagionali a tema', 'Area relax per i proprietari']
    }
  ]

  return (
    <section id="servizi" className="services-premium">
      <div className="container">
        <div className="services-intro">
          <span className="section-subtitle">Cosa offriamo</span>
          <h2 className="section-title">Servizi pensati per il <br />benessere del tuo cane</h2>
        </div>

        <div className="services-bento-grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className={`service-bento-card card-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onClick={() => setSelectedService(s)}
            >
              <div className="service-image-overlay">
                <img src={s.image} alt={s.title} className="service-bg-img" />
                <div className="service-gradient"></div>
              </div>
              <div className="service-content">
                <span className="card-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="card-footer">
                  <span className="learn-more">Scopri di più →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  )
}

const Contact = () => (
  <section id="contatti" className="contact-premium">
    <div className="container">
      <div className="contact-header-centered">
        <span className="section-subtitle">Contatti</span>
        <h2 className="section-title">Iniziamo un percorso insieme</h2>
      </div>

      <div className="contact-premium-grid">
        <motion.div
          className="contact-cards-stack"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact-premium-card">
            <MapPin className="card-icon" />
            <div className="card-content">
              <h3>Indirizzo</h3>
              <a href="https://maps.app.goo.gl/vYF8SjD3JkH7zqfM7" target="_blank" rel="noopener noreferrer">
                Via Benedetto Croce, Quarto (NA)<br />
                <span className="sub-text">(viale vivaio Simegarden)</span>
              </a>
            </div>
          </div>

          <div className="contact-premium-card">
            <Phone className="card-icon" />
            <div className="card-content">
              <h3>Telefono</h3>
              <a href="tel:+393407658721">+39 340 765 8721</a>
            </div>
          </div>

          <div className="contact-premium-card">
            <Mail className="card-icon" />
            <div className="card-content">
              <h3>Email</h3>
              <a href="mailto:marianna.robustelli@alice.it">marianna.robustelli@alice.it</a>
            </div>
          </div>

          <div className="social-premium">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram /> <span>Instagram</span></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"><Facebook /> <span>Facebook</span></a>
          </div>
        </motion.div>

        <motion.div
          className="contact-map-premium"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.5293240890664!2d14.118671376652617!3d40.87671192716304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b137397637841%3A0x63348ea683701980!2sSimegarden!5e0!3m2!1sit!2sit!4v1740597145456"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mappa Il giardino di Gilda"
          ></iframe>
        </motion.div>
      </div>
    </div>
  </section>
)

function App() {
  return (
    <div className="app-premium">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <footer className="footer-premium">
        <div className="container">
          <p>© 2026 Il giardino di Gilda — Eccellenza Cinofila Professionale</p>
        </div>
      </footer>
    </div>
  )
}

export default App
