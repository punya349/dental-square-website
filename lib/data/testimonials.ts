export interface Testimonial {
  id: string
  name: string
  quote: string
  service: string
  rating: number
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Nidhi Rathee",
    quote: "Felt completely at ease and confident in Dr. Rachna Arora and Dr. Deepak Arora. I needed to get a perfect smile and undergo some additional treatments. My lower and upper jaw needed implants and was terrified by the thought. Then I consulted Dr Rachna and Dr Deepak and I'm really glad I did! Both of them are not only very professional but also incredibly kind. They took the time to walk me through his various treatment options available. I felt completely at ease and confident in their care. Their clinic is spotless, and they have cutting-edge equipment that usually other dentists don't have. The staff is friendly and professional, and I was able to schedule my appointment quickly. Got my confident smile back. I highly recommend Dr Arora Dental Square. Thank you, Doctor, for your fantastic work!",
    service: "Dental Implants",
    rating: 5,
    image: "/images/testimonials/patient-1.jpg"
  },
  {
    id: "2",
    name: "Kunal Dhiman",
    quote: "I had an amazing orthodontic experience with Dr. Rachna Arora at Dr Arora's Dental Square Clinic. The staff was very friendly and welcoming and the clinic is well-organized. Dr Rachna is very professional, took time to explain everything clearly, and made me feel at ease throughout my treatment. I truly appreciate their gentle approach and attention to details. Highly recommend for anyone looking for a skilled and caring dentist!",
    service: "Orthodontics",
    rating: 5,
    image: "/images/testimonials/patient-2.jpg"
  },
  {
    id: "3",
    name: "Adarsh Bala",
    quote: "It's really wonderful to get dental treatment especially implant. I strongly recommend to have the services of experienced doctors at this clinic. Moreover, the staff associated in this clinic is very helpful, skilled and courteous.",
    service: "Dental Implants",
    rating: 5
  }
]
