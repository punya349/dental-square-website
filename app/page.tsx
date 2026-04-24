import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
import { DoctorCard } from "@/components/ui/doctor-card"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { services } from "@/lib/data/services"
import { doctors } from "@/lib/data/doctors"
import { testimonials } from "@/lib/data/testimonials"
import { clinicInfo } from "@/lib/data/clinic"

export default function HomePage() {
  const featuredServiceSlugs = [
    "fixed-teeth-with-implants",
    "teeth-straightening", 
    "painless-root-canal",
    "3d-cbct-digital-diagnostics"
  ]
  const featuredServices = services.filter(s => featuredServiceSlugs.includes(s.slug))
  const featuredDoctors = doctors.slice(0, 2)
  const featuredTestimonials = testimonials.slice(0, 2)

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                {clinicInfo.tagline}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {clinicInfo.headline.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-primary">{clinicInfo.headline.split(" ").slice(-1)}</span>
              </h1>
              <p className="mt-3 text-lg font-semibold text-foreground">
                Best Dentist in Ambala – Dr Arora Dental Square
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Welcome to Dr Arora&apos;s Dental Square, widely regarded as one of the best dental clinics in Ambala. 
                Where every smile begins with trust, and every patient becomes family.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Book Appointment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${clinicInfo.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </a>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                {clinicInfo.stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl">
                <Image
                  src="/images/clinic/reception-area.jpg"
                  alt="Modern dental clinic"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-4 shadow-lg sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">Trusted Care</p>
                    <p className="text-xs text-muted-foreground">10,000+ happy patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comprehensive dental care for your whole family
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From routine cleanings to advanced procedures, we offer a full range of 
              dental services to keep your smile healthy and beautiful.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/clinic/team-photo.jpg"
                alt="Our dental team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Our Clinic
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Exceptional care with a personal touch
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {clinicInfo.about.short}
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "State-of-the-art dental technology",
                  "Comfortable, spa-like environment",
                  "Personalized treatment plans",
                  "Flexible financing options"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Team
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet our experienced dentists
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team of skilled professionals is committed to providing you with 
              the highest quality dental care.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/about#team">
                Meet The Full Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What our patients say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Do not just take our word for it. Here is what our patients have to say 
              about their experience at {clinicInfo.name}.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to transform your smile?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Schedule your appointment today and take the first step towards a 
              healthier, more beautiful smile.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <a href={`tel:${clinicInfo.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {clinicInfo.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
