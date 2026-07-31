import { Project, LocationItem, DeveloperPartner, Testimonial, GalleryItem, FAQItem } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'godrej-township-pune-1',
    name: 'Godrej Township',
    developer: 'Godrej Properties',
    location: 'Hinjewadi, Pune',
    city: 'Pune',
    typology: '2 & 3 Bed Residences',
    priceRange: '₹60L-₹2Cr',
    category: 'Residences & Townships',
    status: 'New Launches',
    image: '/src/assets/images/godrej_township_1785429180067.jpg',
    featured: true,
    newLaunch: true,
    description: 'A master-planned luxury township offering premium 2 & 3 BHK residences surrounded by lush greenery, modern clubhouses, and seamlessly connected to Pune IT Hubs.',
    amenities: ['Clubhouse', 'Swimming Pool', 'Gymnasium', 'Tennis Court', '24/7 Security', 'Landscaped Gardens']
  },
  {
    id: 'godrej-township-wakad',
    name: 'Godrej Township',
    developer: 'Godrej Properties',
    location: 'Wakad, Pune',
    city: 'Pune',
    typology: '2 & 3 Bed Residences',
    priceRange: '₹75L-₹1.8Cr',
    category: 'Residences & Townships',
    status: 'Ready Possession',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    featured: true,
    newLaunch: false,
    description: 'Ready-to-move ultra-spacious 2 & 3 BHK apartments with private balconies, rooftop infinity pool, and high-speed elevator access.',
    amenities: ['Infinity Pool', 'Children Play Area', 'Yoga Deck', 'EV Charging Station']
  },
  {
    id: 'godrej-township-baner',
    name: 'Godrej Township',
    developer: 'Godrej Properties',
    location: 'Baner, Pune',
    city: 'Pune',
    typology: '2 & 3 Bed Residences',
    priceRange: '₹90L-₹2.5Cr',
    category: 'Residences & Townships',
    status: 'New Launches',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    featured: true,
    newLaunch: true,
    description: 'Exquisite modern homes situated in Baner with panoramic hill views, world-class sports arenas, and energy-efficient architecture.',
    amenities: ['Sky Lounge', 'Co-working Space', 'Squash Court', 'Multi-purpose Hall']
  },
  {
    id: 'godrej-township-delhi',
    name: 'Godrej Township',
    developer: 'Godrej Properties',
    location: 'Sector 150, Noida, Delhi NCR',
    city: 'Delhi NCR',
    typology: '2 & 3 Bed Residences',
    priceRange: '₹85L-₹2.2Cr',
    category: 'Residences & Townships',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    featured: true,
    newLaunch: false,
    description: 'Luxury high-rise township in Delhi NCR featuring expansive golf course views, eco-friendly smart home technology, and rapid expressway connectivity.',
    amenities: ['Golf Course View', 'Smart Locks', 'Olympic Size Pool', 'Jogging Track']
  },
  {
    id: 'godrej-township-balewadi',
    name: 'Godrej Township',
    developer: 'Godrej Properties',
    location: 'Balewadi, Pune',
    city: 'Pune',
    typology: '2 & 3 Bed Residences',
    priceRange: '₹70L-₹1.9Cr',
    category: 'Residences & Townships',
    status: 'Ready Possession',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    featured: false,
    newLaunch: false,
    description: 'Modern urban living spaces located close to Balewadi High Street with gourmet dining, shopping arcades, and international schools nearby.',
    amenities: ['Balewadi High St Access', 'Mini Theatre', 'Spa & Wellness', 'Creche']
  },
  {
    id: 'godrej-township-punawale',
    name: 'Godrej Township',
    developer: 'Godrej Properties',
    location: 'Punawale, Pune',
    city: 'Pune',
    typology: '2 & 3 Bed Residences',
    priceRange: '₹65L-₹1.5Cr',
    category: 'Residences & Townships',
    status: 'New Launches',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    featured: false,
    newLaunch: true,
    description: 'Affordable luxury apartments in the rapidly growing corridor of Punawale, designed for contemporary family living.',
    amenities: ['Rooftop Garden', 'Intercom System', 'Badminton Court', 'CCTV']
  }
];

export const LOCATIONS_DATA: LocationItem[] = [
  {
    id: 'hinjewadi',
    name: 'HINJEWADI',
    city: 'Pune',
    projectCount: 24,
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'wakad',
    name: 'WAKAD',
    city: 'Pune',
    projectCount: 24,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'punawale',
    name: 'PUNAWALE',
    city: 'Pune',
    projectCount: 24,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'baner',
    name: 'BANER',
    city: 'Pune',
    projectCount: 24,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'balewadi',
    name: 'BALEWADI',
    city: 'Pune',
    projectCount: 24,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tathawade',
    name: 'TATHAWADE',
    city: 'Pune',
    projectCount: 24,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
  }
];

export const DEVELOPERS_DATA: DeveloperPartner[] = [
  {
    id: 'godrej',
    name: 'Godrej Properties',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Godrej_Logo.svg',
    projectsCount: 42
  },
  {
    id: 'vtp',
    name: 'VTP Realty',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
    projectsCount: 38
  },
  {
    id: 'kasturi',
    name: 'Kasturi Housing',
    logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=200&q=80',
    projectsCount: 19
  },
  {
    id: 'panchshil',
    name: 'Panchshil Realty',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80',
    projectsCount: 25
  },
  {
    id: 'kolte-patil',
    name: 'Kolte-Patil Developers',
    logo: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&w=200&q=80',
    projectsCount: 31
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Vinayak Gaitonde',
    date: '22 January 2025',
    review: 'Clear claim transferred my physical shares within given time, professional, very prompt, overall a hassle-free experience, I highly recommend.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    designation: 'Home Owner at Godrej Township'
  },
  {
    id: 'test-2',
    author: 'Vinayak Gaitonde',
    date: '22 January 2025',
    review: 'Very reliable, gives personal attention & above all, very reasonable charges. I have given them shares which are in IEPF for transferring into my demat account. At present after completing all documentation by them the matter is with IEPF for their clearance. My Best Wishes to Shrikant and his team.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    designation: 'Investor & Buyer'
  },
  {
    id: 'test-3',
    author: 'Vinayak Gaitonde',
    date: '22 January 2025',
    review: 'Clear claim transferred my physical shares within given time, professional, very prompt, overall a hassle-free experience, I highly recommend.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    designation: 'Resident in Baner'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Godrej Township Modern High Rise',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-2',
    title: 'Luxury Apartment Interior Living Room',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-3',
    title: 'Twin Towers Skyline at Dusk',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-4',
    title: 'High Rise Residential View',
    category: 'Aerial View',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-5',
    title: 'Resort Style Swimming Pool',
    category: 'Amenities',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-6',
    title: 'Landscaped Central Garden',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-7',
    title: 'Modern Clubhouse & Lounge',
    category: 'Amenities',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-8',
    title: 'Penthouse Balcony Overlooking City',
    category: 'View',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-9',
    title: 'Master Bedroom Suite',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-10',
    title: 'Smart Kitchen & Modular Dining',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Earth Sukham?',
    answer: 'Earth Sukham is a real estate platform that helps homebuyers discover verified residential properties with expert guidance and investment opportunities.'
  },
  {
    id: 'faq-2',
    question: 'What types of properties do you offer?',
    answer: 'We specialize in verified 2 & 3 BHK luxury residences, township developments, penthouses, gated community villas, and commercial real estate across prime corridors in Pune and Delhi NCR.'
  },
  {
    id: 'faq-3',
    question: 'Do you assist first-time home buyers?',
    answer: 'Yes! We provide end-to-end guidance including site visits, price negotiation, documentation, home loan assistance, legal verification, and key handover management.'
  },
  {
    id: 'faq-4',
    question: 'How do I choose the right property?',
    answer: 'Our dedicated property advisors assess your location preferences, family size, connectivity needs, budget, and long-term appreciation potential to curate verified property shortlists tailored specifically to your lifestyle.'
  }
];
