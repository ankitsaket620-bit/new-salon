/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import {
  Sparkles,
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Star,
  X,
} from 'lucide-react';
import { validateBookingForm, buildWhatsAppUrl, BookingData } from './utils/booking';

// High-resolution image assets with local fallbacks
const heroImg = "https://images.unsplash.com/photo-1706629503650-cade709d15e3?auto=format&fit=crop&w=1800&q=88";
const interiorImg = "https://images.unsplash.com/photo-1706629504952-ab5e50f5c179?auto=format&fit=crop&w=1000&q=85";
const portraitImg = "https://images.unsplash.com/photo-1779406165962-7df12de281b1?auto=format&fit=crop&w=900&q=85";
const productsImg = "https://images.unsplash.com/photo-1758788390320-16e1f280cf49?auto=format&fit=crop&w=900&q=85";

const gallery = [
  heroImg,
  interiorImg,
  portraitImg,
  productsImg,
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
];

const MAP = "https://maps.app.goo.gl/SqD344gvwBKWXFUR7";
const WA = "https://wa.me/919179767000";

interface ServiceItem {
  title: string;
  tag: string;
  text: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const services: ServiceItem[] = [
  {
    title: "The Signature Cut",
    tag: "HAIR",
    text: "A considered cut and finish, shaped around the way you move.",
    icon: Scissors,
  },
  {
    title: "Ritual Colour",
    tag: "COLOUR",
    text: "Dimensional colour and luminous glossing with a bespoke consultation.",
    icon: Sparkles,
  },
  {
    title: "Skin Ceremony",
    tag: "BEAUTY",
    text: "A restorative facial ritual for skin that looks quietly radiant.",
    icon: Star,
  },
  {
    title: "Occasion Atelier",
    tag: "MAKEUP",
    text: "Bridal, party and event looks made to last and be remembered.",
    icon: CalendarDays,
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#home" className={`logo ${dark ? "logo-dark" : ""}`} data-testid="brand-logo">
      <span className="logo-mark">I</span>
      <span>
        <b>IDEAL</b>
        <small>FAMILY SALON · BHOPAL</small>
      </span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  );
}

function Nav({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: [string, string][] = [
    ["about", "About"],
    ["services", "Services"],
    ["gallery", "Gallery"],
    ["why", "The Experience"],
    ["reviews", "Reviews"],
    ["contact", "Contact"],
  ];

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`} data-testid="main-navigation">
      <Logo />
      <div className="nav-links">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} data-testid={`nav-${id}-link`}>
            {label}
          </a>
        ))}
        <button className="nav-book" onClick={onBook} data-testid="nav-book-button">
          Book appointment <ArrowUpRight size={15} />
        </button>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        data-testid="mobile-menu-button"
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="mobile-menu">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-${id}-link`}
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            data-testid="mobile-nav-book-button"
          >
            Book appointment <ArrowUpRight size={15} />
          </button>
        </div>
      )}
    </nav>
  );
}

export default function App() {
  const [booking, setBooking] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [lastSubmission, setLastSubmission] = useState<BookingData | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const openBookingWithService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setBooking(true);
    setSent(false);
    setError("");
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);
    const data: BookingData = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      service: String(formData.get("service") || selectedService || ""),
      date: String(formData.get("date") || ""),
      time: String(formData.get("time") || ""),
      message: String(formData.get("message") || ""),
    };

    const validation = validateBookingForm(data);
    if (!validation.isValid) {
      setError(validation.error || "Please complete all highlighted details.");
      return;
    }

    setLastSubmission(data);
    setSent(true);
  };

  return (
    <div className="site">
      <Nav onBook={() => openBookingWithService()} />

      <main id="home">
        {/* HERO SECTION */}
        <section className="hero">
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          <div className="hero-wash" />
          <div className="hero-content">
            <motion.div initial="hidden" animate="visible" variants={reveal}>
              <p className="eyebrow">EST. 2014 · ARERA COLONY, BHOPAL</p>
              <h1>
                <span>Where beauty</span>
                <em>meets elegance.</em>
              </h1>
              <p className="hero-copy">
                A considered beauty experience for hair, skin and occasion — delivered with warmth,
                precision and a little ceremony.
              </p>
              <div className="hero-actions">
                <button
                  className="button button-dark"
                  onClick={() => openBookingWithService()}
                  data-testid="hero-book-button"
                >
                  Book an appointment <ArrowUpRight size={16} />
                </button>
                <a href="#services" className="text-link" data-testid="hero-services-link">
                  Explore services <ArrowDownRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="hero-note">
            PROFESSIONAL CARE <i>·</i> PREMIUM EXPERIENCE <i>·</i> PERSONALIZED SERVICE
          </div>
          <a href="#about" className="scroll-cue" data-testid="hero-scroll-link">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDownRight size={18} />
          </a>
          <div className="hero-stamp">
            I
            <span>
              IDEAL
              <br />
              FAMILY SALON
            </span>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div>
            BEAUTY IS A RITUAL <span>✦</span> COLOUR IS AN ATTITUDE <span>✦</span> CONFIDENCE IS
            THE FINISH <span>✦</span> BEAUTY IS A RITUAL <span>✦</span>
          </div>
        </div>

        {/* INTRO / ABOUT SECTION */}
        <motion.section
          className="intro section"
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
        >
          <div className="intro-image">
            <img src={interiorImg} alt="Bright, elegant salon interior" loading="lazy" />
            <span className="image-caption">THE SPACE / 01</span>
          </div>
          <div className="intro-copy">
            <SectionLabel>THE IDEAL APPROACH</SectionLabel>
            <h2>
              Beauty with a <i>point of view.</i>
            </h2>
            <p>
              Ideal Family Salon is Bhopal's destination for expressive hair, skin and makeup. Our
              artists listen closely, work with intention and leave you feeling unmistakably
              yourself.
            </p>
            <p className="muted">
              From the first consultation to the final mirror moment, every detail is shaped around
              your confidence.
            </p>
            <div className="signature">
              I<span>IDEAL FAMILY SALON</span>
            </div>
            <a className="text-link" href="#contact" data-testid="about-contact-link">
              Find your way to us <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.section>

        {/* SERVICES SECTION */}
        <section className="services section" id="services">
          <div className="section-head">
            <div>
              <SectionLabel>THE MENU</SectionLabel>
              <h2>
                Designed for your <i>next chapter.</i>
              </h2>
            </div>
            <p>Our menu is intentionally edited. Talk to us about the right ritual for you.</p>
          </div>
          <div className="service-grid">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  className={`service-card service-${i}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={reveal}
                >
                  <div className="service-top">
                    <span>
                      0<span>{i + 1}</span>
                    </span>
                    <Icon size={21} />
                  </div>
                  <div>
                    <small>{service.tag}</small>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <button
                    onClick={() => openBookingWithService(service.title)}
                    className="circle-arrow"
                    aria-label={`Book ${service.title}`}
                    data-testid={`service-${i}-book-button`}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="experience" id="why">
          <div className="experience-inner">
            <SectionLabel>THE EXPERIENCE</SectionLabel>
            <h2>
              More than a salon.
              <br />
              <i>Your beauty experience.</i>
            </h2>
            <div className="benefits">
              <div>
                <b>01</b>
                <h3>Expert professionals</h3>
                <p>Hands trained in the detail that makes a finish feel like yours.</p>
              </div>
              <div>
                <b>02</b>
                <h3>Premium products</h3>
                <p>Thoughtful formulas, selected for results and ritual alike.</p>
              </div>
              <div>
                <b>03</b>
                <h3>Personal attention</h3>
                <p>One conversation, one clear point of view, never a rushed service.</p>
              </div>
            </div>
          </div>
          <div className="experience-portrait">
            <img src={portraitImg} alt="Salon stylist creating a beauty look" loading="lazy" />
            <span>THE CRAFT / 02</span>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="gallery section" id="gallery">
          <div className="section-head">
            <div>
              <SectionLabel>SELECTED WORK</SectionLabel>
              <h2>
                A little <i>inspiration.</i>
              </h2>
            </div>
            <p>Real beauty is never one-size-fits-all. Tap an image to step closer.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((src, i) => (
              <button
                key={src}
                className={`gallery-item gi-${i}`}
                onClick={() => setLightbox(i)}
                data-testid={`gallery-image-${i}`}
              >
                <img
                  src={src}
                  alt={[
                    "Salon styling detail",
                    "Salon interior",
                    "Hair styling portrait",
                    "Premium beauty products",
                    "Hair transformation",
                    "Beauty treatment",
                  ][i]}
                  loading="lazy"
                />
                <span>0{i + 1} / VIEW</span>
              </button>
            ))}
          </div>
        </section>

        {/* TRANSFORMATION SECTION */}
        <section className="transform section">
          <div className="transform-image">
            <img src={productsImg} alt="Beauty products arranged in a salon" loading="lazy" />
            <div className="transform-label">THE FINISH / 03</div>
          </div>
          <div className="transform-copy">
            <SectionLabel>THE TRANSFORMATION</SectionLabel>
            <h2>
              Quiet luxury,
              <br />
              <i>visible results.</i>
            </h2>
            <p>
              Whether it is a fresh cut, a luminous colour or the makeup that carries you through
              the room — we believe the best transformations still feel like you.
            </p>
            <div className="rating">
              <span>4.7</span>
              <div>
                <div className="stars">★★★★★</div>
                <small>928 VERIFIED GOOGLE REVIEWS</small>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section className="reviews section" id="reviews">
          <div className="reviews-heading">
            <SectionLabel>THE WORD ON THE STREET</SectionLabel>
            <h2>
              Kind words from
              <br />
              <i>the chair.</i>
            </h2>
            <a
              href={MAP}
              target="_blank"
              rel="noreferrer"
              className="text-link"
              data-testid="google-reviews-link"
            >
              Read all Google reviews <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="review-list">
            <blockquote>
              <div className="stars">★★★★★</div>
              <p>
                “Loved my experience here! The staff was so sweet and the service was really good.
                Super happy with how my hair turned out.”
              </p>
              <cite>
                Avni Jaiswal <small>· Google review</small>
              </cite>
            </blockquote>
            <blockquote>
              <div className="stars">★★★★★</div>
              <p>
                “The salon was clean and had a nice atmosphere. Highly recommended for anyone looking
                for quality service and a relaxing experience.”
              </p>
              <cite>
                Mahima Vyas <small>· Google review</small>
              </cite>
            </blockquote>
          </div>
        </section>

        {/* BOOKING BANNER */}
        <section className="booking-banner">
          <div>
            <SectionLabel>YOUR NEXT APPOINTMENT</SectionLabel>
            <h2>
              Ready for your next
              <br />
              <i>beauty experience?</i>
            </h2>
          </div>
          <button
            className="button button-dark"
            onClick={() => openBookingWithService()}
            data-testid="banner-book-button"
          >
            Book your appointment <ArrowUpRight size={16} />
          </button>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact section" id="contact">
          <div className="contact-copy">
            <SectionLabel>COME SAY HELLO</SectionLabel>
            <h2>
              Find your way
              <br />
              <i>to Ideal.</i>
            </h2>
            <div className="contact-details">
              <div>
                <MapPin size={18} />
                <p>
                  44-A, Main Road, near Baghira Apartment,
                  <br />
                  E-5, Arera Colony, Bhopal, MP 462016
                </p>
              </div>
              <div>
                <Clock3 size={18} />
                <p>
                  Open daily
                  <br />
                  <b>10:00 AM — 9:00 PM</b>
                </p>
              </div>
              <div>
                <Phone size={18} />
                <p>
                  Book on WhatsApp
                  <br />
                  <a
                    href={WA}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="contact-whatsapp-link"
                  >
                    +91 91797 67000
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-actions">
              <a
                className="button button-dark"
                href={MAP}
                target="_blank"
                rel="noreferrer"
                data-testid="directions-button"
              >
                Get directions <ArrowUpRight size={16} />
              </a>
              <a
                className="button button-light"
                href={WA}
                target="_blank"
                rel="noreferrer"
                data-testid="whatsapp-button"
              >
                WhatsApp us
              </a>
            </div>
          </div>
          <a
            href={MAP}
            target="_blank"
            rel="noreferrer"
            className="map-card block"
            aria-label="Open Ideal Family Salon in Google Maps"
          >
            <div className="map-grid" />
            <div className="map-pin">
              <MapPin size={25} />
            </div>
            <div className="map-label">
              <b>IDEAL FAMILY SALON</b>
              <span>ARERA COLONY · BHOPAL</span>
            </div>
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <Logo dark={true} />
        <p>
          Designed with elegance.
          <br />
          Created for confidence.
        </p>
        <div className="footer-links">
          <a href="#services" data-testid="footer-services-link">
            Services
          </a>
          <a href="#gallery" data-testid="footer-gallery-link">
            Gallery
          </a>
          <a href={MAP} target="_blank" rel="noreferrer" data-testid="footer-map-link">
            Google Maps
          </a>
          <a
            href="https://www.instagram.com/idealsalonbhopalpro/"
            target="_blank"
            rel="noreferrer"
            data-testid="footer-instagram-link"
            aria-label="Instagram profile"
          >
            <Instagram size={17} />
          </a>
        </div>
        <small>© 2025 Ideal Family Salon · Bhopal, India</small>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="mobile-cta">
        <a href="tel:+919179767000" data-testid="mobile-call-button">
          <Phone size={15} /> Call
        </a>
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          data-testid="mobile-whatsapp-button"
        >
          <span>◌</span> WhatsApp
        </a>
        <button onClick={() => openBookingWithService()} data-testid="mobile-book-button">
          <CalendarDays size={15} /> Book
        </button>
      </div>

      {/* BOOKING MODAL */}
      <AnimatePresence>
        {booking && (
          <div className="modal-backdrop" onClick={() => setBooking(false)}>
            <motion.div
              className="booking-modal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setBooking(false)}
                aria-label="Close booking form"
                data-testid="close-booking-modal"
              >
                <X />
              </button>

              {sent ? (
                <div className="success">
                  <span>✦</span>
                  <SectionLabel>REQUEST RECEIVED</SectionLabel>
                  <h2>
                    Thank you for
                    <br />
                    <i>choosing Ideal.</i>
                  </h2>
                  <p>Our team will contact you shortly to confirm your appointment.</p>
                  {lastSubmission && (
                    <div className="mb-6">
                      <a
                        href={buildWhatsAppUrl("919179767000", lastSubmission)}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-light w-full justify-center mb-3 text-xs"
                      >
                        Send details via WhatsApp <ArrowUpRight size={15} />
                      </a>
                    </div>
                  )}
                  <button
                    className="button button-dark"
                    onClick={() => setBooking(false)}
                    data-testid="close-success-button"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <SectionLabel>BOOK AN APPOINTMENT</SectionLabel>
                  <h2>
                    Let’s make time
                    <br />
                    <i>for you.</i>
                  </h2>
                  <form ref={formRef} onSubmit={submit}>
                    <input
                      name="name"
                      placeholder="Full name *"
                      data-testid="appointment-name-input"
                    />
                    <input
                      name="phone"
                      placeholder="Phone number *"
                      type="tel"
                      data-testid="appointment-phone-input"
                    />
                    <input
                      name="email"
                      placeholder="Email address *"
                      type="email"
                      data-testid="appointment-email-input"
                    />
                    <select
                      name="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      data-testid="appointment-service-select"
                    >
                      <option value="" disabled>
                        Select a service *
                      </option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    <div className="form-row">
                      <input
                        name="date"
                        type="date"
                        aria-label="Preferred date"
                        data-testid="appointment-date-input"
                      />
                      <input
                        name="time"
                        type="time"
                        aria-label="Preferred time"
                        data-testid="appointment-time-input"
                      />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Anything we should know?"
                      rows={3}
                      data-testid="appointment-message-input"
                    />
                    {error && (
                      <p className="form-error" data-testid="appointment-error">
                        {error}
                      </p>
                    )}
                    <button
                      className="button button-dark form-submit"
                      type="submit"
                      data-testid="appointment-submit-button"
                    >
                      Confirm appointment <ArrowUpRight size={16} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX MODAL */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            onClick={() => setLightbox(null)}
            data-testid="close-lightbox-button"
            aria-label="Close image"
          >
            <X />
          </button>
          <img src={gallery[lightbox]} alt="Selected salon gallery" />
        </div>
      )}
    </div>
  );
}
