export const doctors = [
  {
    id: "dr-deepak-arora",
    name: "Dr. Deepak Arora",
    image: "/images/doctors/dr-deepak-arora.jpg",
    qualifications: [
      "M.D.S (Prosthodontics), Gold Medalist",
      "PCAD, New York Fellowship in Implantology",
      "Nobel Biocare, Sweden"
    ],
    specializations: [
      "Dental Implants",
      "Fixed Teeth",
      "Crowns & Bridges",
      "Full Mouth Rehabilitation"
    ]
  },
  {
    id: "dr-rachna-arora",
    name: "Dr. Rachna Arora",
    image: "/images/doctors/dr-rachna-arora.jpg",
    qualifications: [
      "MDS (Orthodontics & Dentofacial Orthopaedics)",
      "Invisalign Certified Orthodontist",
      "PCAD, New York"
    ],
    specializations: [
      "Smile Designing",
      "Invisible Braces",
      "Lingual Braces",
      "Aligners",
      "Dentofacial Orthopaedics"
    ]
  }
]

export const clinicGallery = [
  { id: 1, src: "/images/clinic/clinic-exterior.jpg", alt: "Clinic Exterior" },
  { id: 2, src: "/images/clinic/reception-area.jpg", alt: "Reception & Waiting Area" },
  { id: 3, src: "/images/clinic/consultation-room.jpg", alt: "Consultation Room" },
  { id: 5, src: "/images/clinic/waiting-area.jpg", alt: "Waiting Area" },
  { id: 6, src: "/images/clinic/team-photo.jpg", alt: "Our Team" }
]

export const clinicInfo = {
  name: "Dr Arora's Dental Square",
  tagline: "Your Trusted Dental Care",
  headline: "Expertise You Can Rely On",
  phone: "+91 9466181995",
  phoneSecondary: "+91 9466180995",
  email: "drarorasdentalsquare@gmail.com",
  emailSecondary: "dentistrachna@gmail.com",
  address: {
    street: "995, Urban Estate, Sector-7",
    city: "Ambala City",
    state: "Haryana",
    zip: "",
    full: "995, Urban Estate, Sector-7, Ambala City"
  },
  hours: [
    { day: "Monday", hours: "9:30 AM – 7:00 PM" },
    { day: "Tuesday", hours: "9:30 AM – 7:00 PM" },
    { day: "Wednesday", hours: "9:30 AM – 7:00 PM" },
    { day: "Thursday", hours: "9:30 AM – 7:00 PM" },
    { day: "Friday", hours: "9:30 AM – 7:00 PM" },
    { day: "Saturday", hours: "9:30 AM – 7:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ],
  socialLinks: {
    facebook: "https://facebook.com/drarorasdentalsquare",
    instagram: "https://instagram.com/drarorasdentalsquare",
    twitter: "https://twitter.com/drarorasdental"
  },
  about: {
    short: "At Dr Arora's Dental Square, every smile begins with trust, and every patient becomes family. Led by Dr. Deepak Arora and Dr. Rachna Arora, our clinic combines professional expertise with genuine compassion to deliver exceptional dental care.",
    mission: "Our mission is to provide the highest quality dental care with a personal touch. We believe in building lasting relationships with our patients, ensuring they feel comfortable, informed, and confident throughout their dental journey.",
    values: [
      {
        title: "Excellence",
        description: "We pursue excellence in everything we do, utilizing cutting-edge equipment and the latest dental techniques.",
        icon: "award"
      },
      {
        title: "Compassion",
        description: "We treat every patient with kindness, understanding, and respect, making them feel like family.",
        icon: "heart"
      },
      {
        title: "Innovation",
        description: "We embrace the latest dental technology to provide the best possible outcomes for our patients.",
        icon: "lightbulb"
      },
      {
        title: "Integrity",
        description: "We maintain the highest ethical standards, providing honest and transparent care.",
        icon: "shield"
      }
    ]
  },
  stats: [
    { value: "28+", label: "Years of Experience" },
    { value: "50,000+", label: "Happy Patients" },
    { value: "2", label: "Expert Dentists" },
    { value: "98%", label: "Patient Satisfaction" }
  ]
}
