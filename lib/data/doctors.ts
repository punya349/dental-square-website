export interface Doctor {
  id: string
  name: string
  role: string
  specialty: string
  image: string
  bio: string
  qualifications: string[]
  experience: string
}

export const doctors: Doctor[] = [
  {
    id: "dr-deepak-arora",
    name: "Dr. Deepak Arora",
    role: "Lead Dentist & Co-Founder",
    specialty: "Dental Implants & Oral Surgery",
    image: "/images/doctors/Deepak.jpeg",
    bio: "Dr. Deepak Arora brings exceptional expertise in dental implants and oral surgery to the clinic. His precision, skill, and caring approach have made him a trusted choice for complex dental procedures. He is committed to using cutting-edge equipment and the latest techniques to ensure optimal outcomes for every patient. His ability to walk patients through treatment options with patience and clarity sets him apart.",
    qualifications: [
      "M.D.S (Prosthodontics), Gold Medalist",
      "PCAD, New York Fellowship in Implantology",
      "Nobel Biocare, Sweden"
    ],
    experience: "30+ years"
  },
  {
    id: "dr-rachna-arora",
    name: "Dr. Rachna Arora",
    role: "Senior Dentist & Co-Founder",
    specialty: "Orthodontics & Cosmetic Dentistry",
    image: "/images/doctors/Rachna.jpeg",
    bio: "Dr. Rachna Arora co-founded Dr Arora's Dental Square with a vision to provide exceptional dental care where every patient feels like family. With extensive experience in orthodontics and cosmetic dentistry, she is known for her gentle approach, attention to detail, and ability to make patients feel at ease throughout their treatment. Her professional expertise combined with genuine compassion has earned her the trust of thousands of patients.",
    qualifications: [
      "MDS (Orthodontics & Dentofacial Orthopaedics)",
      "Invisalign Certified Orthodontist",
      "PCAD, New York"
    ],
    experience: "28+ years"
  }
]

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Office Manager",
    role: "Office Manager",
    image: "/images/team/team-1.jpg"
  },
  {
    id: "team-2",
    name: "Dental Hygienist",
    role: "Dental Hygienist",
    image: "/images/team/team-2.jpg"
  },
  {
    id: "team-3",
    name: "Dental Assistant",
    role: "Dental Assistant",
    image: "/images/team/team-3.jpg"
  },
  {
    id: "team-4",
    name: "Patient Coordinator",
    role: "Patient Coordinator",
    image: "/images/team/team-4.jpg"
  }
]
