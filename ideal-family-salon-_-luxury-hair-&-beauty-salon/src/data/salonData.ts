export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'beauty' | 'makeup' | 'spa';
  duration: string;
  description: string;
  benefits: string[];
  recommendedFor: string;
  priceNote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'hair' | 'makeup' | 'treatments';
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  service: string;
  date: string;
  location: string;
  quote: string;
}

export const SALON_INFO = {
  name: 'Ideal Family Salon',
  tagline: 'Where Beauty Meets Elegance',
  subheadline:
    'Premium beauty, hair and styling experiences designed to make you feel confident, beautiful and unforgettable.',
  phone: '+91 9179767000',
  phoneRaw: '+919179767000',
  email: 'contact@theidealsalon.in',
  address: {
    street: '44-A, Main Road, E-5, Arera Colony',
    landmark: 'Near Baghira Apartment',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462016',
    full: '44-A, Main Road, E-5, Arera Colony (Near Baghira Apartment), Bhopal, Madhya Pradesh – 462016',
  },
  hours: {
    days: 'Monday – Sunday (All 7 Days)',
    timing: '10:00 AM – 9:00 PM',
  },
  rating: 4.9,
  reviewCount: 380,
  googleMapsUrl: 'https://maps.app.goo.gl/SqD344gvwBKWXFUR7',
  embedMapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.529813955355!2d77.42825577587784!3d23.213247279038237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c427829d94821%3A0x93ea4c14ce871700!2sIdeal%20Family%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

export const SERVICES_DATA: ServiceItem[] = [
  // Hair
  {
    id: 'haircut-styling',
    name: 'Precision Haircut & Couture Styling',
    category: 'hair',
    duration: '45–60 mins',
    description:
      'Customized hair sculpting tailored to your facial geometry, hair texture, and daily lifestyle, finished with an editorial blow-dry.',
    benefits: ['Bespoke face-framing', 'Deep conditioning rinse', 'Volumizing blowout finish'],
    recommendedFor: 'Men & women seeking a refined, effortless transformation',
    priceNote: 'Starting from ₹499 (Men) / ₹899 (Women)',
  },
  {
    id: 'hair-spa-botox',
    name: 'Keratin & Hair Botox Treatment',
    category: 'hair',
    duration: '90–120 mins',
    description:
      'Advanced protein restoration treatment that eliminates frizz, restores damaged hair fibers, and locks in mirror-like shine for up to 4 months.',
    benefits: ['Zero frizz & anti-humidity', 'Intensive peptide nourishment', 'Silky, tangle-free texture'],
    recommendedFor: 'Dry, colored, chemically treated, or frizzy hair',
    priceNote: 'Custom consultation based on length & density',
  },
  {
    id: 'balayage-highlights',
    name: 'French Balayage & Ombré Color',
    category: 'hair',
    duration: '120–180 mins',
    description:
      'Hand-painted dimension using ammonia-safe luxury lightening pigments, curated root melting, and a high-gloss toning gloss.',
    benefits: ['Seamless seamless grow-out', 'Plex bond-protection technology', 'Customized toners'],
    recommendedFor: 'Sun-kissed, dimensional multi-tone hair color',
    priceNote: 'Consultation with Master Colorist',
  },
  {
    id: 'moroccan-hair-spa',
    name: 'Moroccan Argan Luxury Hair Spa',
    category: 'hair',
    duration: '60 mins',
    description:
      'Sensory scalp stimulation, acupressure massage, pure cold-pressed argan elixir infusion, and ozone steaming for rejuvenated scalp health.',
    benefits: ['Relieves scalp tension', 'Stimulates follicle microcirculation', 'Intense cuticle hydration'],
    recommendedFor: 'Stressed hair, dandruff-prone or dry scalps',
    priceNote: 'From ₹1,499',
  },
  {
    id: 'glamour-blowdry',
    name: 'Signature Hollywood Waves & Blow Dry',
    category: 'hair',
    duration: '45 mins',
    description:
      'Luminous volume, classic bouncy waves, or sleek glass-hair blowout crafted with ionic styling tools and premium heat-defense serums.',
    benefits: ['Long-lasting 48hr hold', 'Glossy lightweight finish', 'Heat protection shield'],
    recommendedFor: 'Parties, dinners, corporate galas & photo shoots',
    priceNote: 'From ₹799',
  },

  // Beauty & Skin
  {
    id: 'hydra-radiance-facial',
    name: 'Medical-Grade Hydra Radiance Facial',
    category: 'beauty',
    duration: '60–75 mins',
    description:
      'Multi-step hydro-dermabrasion that vacuums pores, exfoliates dead cellular layers, and infuses multi-molecular hyaluronic acid and antioxidants.',
    benefits: ['Instant dewy glass-skin glow', 'Deep pore purification', 'Immediate plumping effect'],
    recommendedFor: 'Dull, dehydrated, congested or tired skin',
    priceNote: 'From ₹2,499',
  },
  {
    id: 'o3-radiance-glow',
    name: 'O3+ Diamond Radiance Treatment',
    category: 'beauty',
    duration: '60 mins',
    description:
      'Targeted whitening and brightening therapy utilizing active oxygenation, melanin inhibitors, and cold peel-off alginate mask.',
    benefits: ['Reduces hyperpigmentation', 'Even skin tone & radiance', 'Antioxidant cellular defense'],
    recommendedFor: 'Sun-damaged skin, brides-to-be, uneven complexions',
    priceNote: 'From ₹2,199',
  },
  {
    id: 'deep-detox-cleanup',
    name: 'Botanical Deep Detox Cleanup',
    category: 'beauty',
    duration: '45 mins',
    description:
      'Gentle herbal enzyme exfoliation, vacuum blackhead extraction, soothing calming mist, and skin barrier sealing lotion.',
    benefits: ['Unclogs congested pores', 'Balances oil production', 'Non-invasive, soothing'],
    recommendedFor: 'Routine monthly skin maintenance',
    priceNote: 'From ₹1,199',
  },
  {
    id: 'luxury-waxing-threading',
    name: 'Rica Liposoluble Waxing & Brow Architecture',
    category: 'beauty',
    duration: '30–60 mins',
    description:
      'Pain-conscious Italian Rica wax enriched with vegetable oils and titanium dioxide, paired with precision thread brow symmetry mapping.',
    benefits: ['98% natural origin resin', 'Minimal redness or irritation', 'Precise geometric brow shape'],
    recommendedFor: 'Sensitive skin requiring smooth, painless hair removal',
    priceNote: 'Package pricing available',
  },

  // Makeup & Bridal
  {
    id: 'couture-bridal-makeover',
    name: 'Couture Signature Bridal Makeover',
    category: 'makeup',
    duration: '180–240 mins',
    description:
      'Complete royal bridal transformation including HD airbrush complexion, waterproof tear-proof sealing, jewelry setting, dupatta draping, and luxury floral hair ornamentation.',
    benefits: ['Airbrush 24hr long-wear', 'Complimentary pre-wedding trial consultation', 'Full saree/lehenga draping & accessorizing'],
    recommendedFor: 'Brides seeking timeless elegance on their wedding day',
    priceNote: 'Personalized Bridal Packages from ₹12,000',
  },
  {
    id: 'hd-party-glam',
    name: 'High-Definition Evening & Party Glam',
    category: 'makeup',
    duration: '75–90 mins',
    description:
      'Camera-ready HD makeup tailored to event lighting, complete with sculpted contouring, soft-focus setting, and customized eyelash application.',
    benefits: ['Seamless flash photography finish', 'Mink/silk faux lash accent', 'Transfer-resistant matte or glow finish'],
    recommendedFor: 'Cocktails, receptions, sangeet, and festive celebrations',
    priceNote: 'From ₹3,499',
  },
  {
    id: 'pre-bridal-rituals',
    name: 'Pre-Bridal Glow & Wellness Package',
    category: 'makeup',
    duration: '3-Session Ritual',
    description:
      'Comprehensive 3-step beauty package conducted across 2 weeks before your wedding: full body polishing, luxury facial, hair botox, and nail art.',
    benefits: ['Full body radiance & softening', 'Customized skincare timeline', 'Complete bridal preparedness'],
    recommendedFor: 'Brides seeking head-to-toe pampering before wedding week',
    priceNote: 'Bespoke packages starting ₹15,999',
  },

  // Spa & Nails
  {
    id: 'rose-petal-manicure-pedicure',
    name: 'Rose Petal & Champagne Luxury Mani-Pedi',
    category: 'spa',
    duration: '75 mins',
    description:
      'Foot and hand soak in warm organic rose water and milk, dead sea salt exfoliation, collagen mask booties, relaxing massage, and high-shine gel polish.',
    benefits: ['Heals cracked heels & cuticles', 'Promotes deep somatic relaxation', 'Chip-resistant gel gloss'],
    recommendedFor: 'Tired hands and feet in need of pampering',
    priceNote: 'From ₹1,899',
  },
  {
    id: 'gel-nail-extensions',
    name: 'Sculpted Gel Extensions & Luxury Nail Art',
    category: 'spa',
    duration: '90 mins',
    description:
      'Custom length nail extensions with reinforced soft gel, chrome powder accents, minimalist french tips, or embellished bridal crystals.',
    benefits: ['Non-damaging soft gel system', 'Durable 4-week chip-free wear', 'Endless bespoke designs'],
    recommendedFor: 'Bridal nails, events, or fashion-forward styling',
    priceNote: 'From ₹1,999',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Grand Styling Sanctuary',
    category: 'interior',
    imageUrl: '/src/assets/images/hero_luxury_salon_1793967875008.jpg',
    description: 'Bespoke arched backlit vanity mirrors, warm ivory finishes, and plush styling suites in Arera Colony.',
  },
  {
    id: 'gal-2',
    title: 'Precision Styling & Consultation',
    category: 'hair',
    imageUrl: '/src/assets/images/about_salon_styling_1793967891392.jpg',
    description: 'Personalized hair texture evaluation with senior master stylists using international salon products.',
  },
  {
    id: 'gal-3',
    title: 'Caramel Balayage Transformation',
    category: 'hair',
    imageUrl: '/src/assets/images/salon_transformation_hair_1793967908048.jpg',
    description: 'Multidimensional hand-painted balayage waves with mirror shine and zero root demarcations.',
  },
  {
    id: 'gal-4',
    title: 'Royal Bridal Artistry',
    category: 'makeup',
    imageUrl: '/src/assets/images/salon_bridal_makeup_1793967908570.jpg',
    description: 'Radiant wedding glamour featuring luminous skin, rose gold accents, and couture dupatta styling.',
  },
  {
    id: 'gal-5',
    title: 'Tranquil Facial & Skin Sanctuary',
    category: 'treatments',
    imageUrl: '/src/assets/images/salon_spa_facial_1793967925361.jpg',
    description: 'Rejuvenating hydro-dermabrasion and clinical skincare therapies in our private aesthetic suites.',
  },
  {
    id: 'gal-6',
    title: 'Bespoke Hair Repair & Nourishment',
    category: 'treatments',
    imageUrl: '/src/assets/images/salon_hair_before_1793967941253.jpg',
    description: 'Expert texture reversal diagnosing damaged hair fibers before targeted botox restoration.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Pooja Sharma',
    rating: 5,
    service: 'Bridal Makeup & Styling',
    date: 'October 2026',
    location: 'Arera Colony, Bhopal',
    quote:
      'Ideal Family Salon made my wedding day completely unforgettable. The bridal makeup stayed flawless through 12 hours of rituals and tears of joy. The master stylist understood exactly the soft-glam royal look I wanted!',
  },
  {
    id: 'rev-2',
    name: 'Dr. Ananya Verma',
    rating: 5,
    service: 'Keratin Treatment & Balayage',
    date: 'September 2026',
    location: 'E-3 Arera Colony, Bhopal',
    quote:
      'Hands down the most professional salon in Bhopal. The ambiance is clean, bright, and genuinely luxurious. My hair transformation was spectacular—from frizzy brassy strands to silky caramel balayage waves. Highly recommended!',
  },
  {
    id: 'rev-3',
    name: 'Rohan Malhotra',
    rating: 5,
    service: 'Men’s Haircut & Beard Sculpting',
    date: 'November 2026',
    location: 'MP Nagar, Bhopal',
    quote:
      'Finding a salon with real attention to detail for men’s styling is rare. The stylists take time for consultation and use premium shears and styling products. Best haircut experience in the city.',
  },
  {
    id: 'rev-4',
    name: 'Simran & Shweta Patel',
    rating: 5,
    service: 'Hydra Facial & Mani-Pedi',
    date: 'October 2026',
    location: 'Char Imli, Bhopal',
    quote:
      'My sister and I booked an afternoon spa day for Hydra Facials and Rose Petal pedicures. The staff is polite, hygienic standards are spotless, and the glow on our faces lasted for weeks!',
  },
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: 'Professional Expertise',
    description:
      'Certified master stylists and licensed cosmetologists trained in international hair and skin protocols.',
  },
  {
    title: 'Premium Global Products',
    description:
      'Exclusively using genuine products from Kérastase, L’Oréal Professionnel, Olaplex, O3+, and Rica.',
  },
  {
    title: 'Personalized Consultations',
    description:
      'Every appointment begins with a thorough diagnosis of your hair texture, scalp condition, and skin goals.',
  },
  {
    title: 'Modern Advanced Techniques',
    description:
      'State-of-the-art styling tools, hydra-dermabrasion technology, and precision color formulation.',
  },
  {
    title: 'Pristine Hygienic Environment',
    description:
      'Hospital-grade sterilization for tools, single-use disposable kits, and immaculate, sanitized private suites.',
  },
  {
    title: 'Customer Satisfaction',
    description:
      'Over 380+ verified 5-star reviews from Bhopal residents who trust us with their most important moments.',
  },
];

export const EXPERIENCE_PILLARS = [
  {
    number: '01',
    title: 'Expert Professionals',
    subtitle: 'Master Stylists & Estheticians',
    description:
      'Our dedicated team brings years of specialized salon craftsmanship, continually refining techniques to deliver perfection.',
  },
  {
    number: '02',
    title: 'Premium Products',
    subtitle: 'Zero Compromise on Quality',
    description:
      'We curate only dermatologist-tested, salon-exclusive formulas that protect and nourish your natural beauty without harsh toxins.',
  },
  {
    number: '03',
    title: 'Personalized Attention',
    subtitle: 'Tailored Exclusively to You',
    description:
      'No rushed sessions or cookie-cutter styles. We take the time to listen, advise, and handcraft an experience unique to your preferences.',
  },
  {
    number: '04',
    title: 'Relaxing Ambience',
    subtitle: 'An Oasis of Serenity',
    description:
      'Step out of the city buzz into warm champagne hues, calming acoustics, plush ergonomic seating, and warm hospitality.',
  },
];
