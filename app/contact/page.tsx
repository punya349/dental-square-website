"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, GraduationCap, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { clinicInfo, doctors, clinicGallery } from "@/lib/data/clinic"
import { services } from "@/lib/data/services"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-background to-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Contact Us
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              We would love to hear from you
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Have questions or ready to schedule your appointment? Reach out to us 
              and our friendly team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Doctors Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Team
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Doctors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Experienced dental professionals dedicated to your oral health and beautiful smile.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="grid gap-8 md:grid-cols-2 max-w-2xl">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex flex-col items-center">
                  {/* Doctor Image */}
                  <div className="relative h-80 w-full shrink-0 overflow-hidden bg-muted">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Doctor Details */}
                  <div className="flex flex-1 flex-col items-center p-6 text-center w-full">
                    <h3 className="text-xl font-bold text-card-foreground">
                      {doctor.name}
                    </h3>
                    
                    {/* Qualifications */}
                    <div className="mt-4 w-full">
                      <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span>Qualifications</span>
                      </div>
                      <ul className="mt-2 space-y-1">
                        {doctor.qualifications.map((qual, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Specializations */}
                    <div className="mt-4 w-full">
                      <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
                        <Stethoscope className="h-4 w-4 text-primary" />
                        <span>Specialization</span>
                      </div>
                      <div className="mt-2 flex flex-wrap justify-center gap-2">
                        {doctor.specializations.map((spec, index) => (
                          <span
                            key={index}
                            className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Gallery Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Our Clinic
            </h2>
            <p className="mt-2 text-muted-foreground">
              A modern, comfortable environment for your dental care.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clinicGallery.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Send us a message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Thank you for reaching out!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    We have received your message and will get back to you within 
                    24 hours. For immediate assistance, please call us at{" "}
                    <a href={`tel:${clinicInfo.phone}`} className="text-primary hover:underline">
                      {clinicInfo.phone}
                    </a>
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select name="service">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        {services.map((service) => (
                          <SelectItem key={service.slug} value={service.slug}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select name="preferredTime">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                          <SelectItem value="evening">Evening (4PM - 7PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Contact Information
              </h2>
              <p className="mt-2 text-muted-foreground">
                Prefer to reach out directly? Here is how you can contact us.
              </p>

              <div className="mt-8 space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Phone</h3>
                    <p className="mt-1 text-muted-foreground">
                      <a href={`tel:${clinicInfo.phone}`} className="hover:text-primary transition-colors">
                        {clinicInfo.phone}
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href={`tel:${clinicInfo.phoneSecondary}`} className="hover:text-primary transition-colors">
                        {clinicInfo.phoneSecondary}
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Call us for immediate assistance
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Email</h3>
                    <p className="mt-1 text-muted-foreground">
                      <a href={`mailto:${clinicInfo.email}`} className="hover:text-primary transition-colors">
                        {clinicInfo.email}
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href={`mailto:${clinicInfo.emailSecondary}`} className="hover:text-primary transition-colors">
                        {clinicInfo.emailSecondary}
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Address</h3>
                    <p className="mt-1 text-muted-foreground">
                      {clinicInfo.address.street}
                    </p>
                    <p className="text-muted-foreground">
                      {clinicInfo.address.city}, {clinicInfo.address.state} {clinicInfo.address.zip}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground">Office Hours</h3>
                    <div className="mt-2 space-y-1">
                      {clinicInfo.hours.map((item) => (
                        <div
                          key={item.day}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-muted-foreground">{item.day}</span>
                          <span className="font-medium text-card-foreground">
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Find Us
            </h2>
            <p className="mt-2 text-muted-foreground">
              Conveniently located in Sector-7, Urban Estate, Ambala City
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <div className="aspect-[16/9] w-full bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.5!2d76.8!3d30.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAmbala%20City%2C%20Haryana!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr Arora's Dental Square Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Dental Emergency?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              If you are experiencing a dental emergency, do not wait. Call us 
              immediately and we will prioritize getting you the care you need.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <a href={`tel:${clinicInfo.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Emergency Line: {clinicInfo.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
