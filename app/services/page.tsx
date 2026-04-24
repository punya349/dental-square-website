"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
import { services, serviceCategories } from "@/lib/data/services"
import { clinicInfo } from "@/lib/data/clinic"
import { cn } from "@/lib/utils"

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter((service) => service.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-background to-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Services
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Comprehensive Dental Care for Every Smile
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              From preventive care to advanced treatments, we offer a full range of 
              dental services tailored to meet your unique needs with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Services Grid - Responsive 1/2/3/4 columns */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">
                No services found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Sets Us Apart
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "28+ Years Experience",
                description: "Trusted by generations of families with nearly three decades of expertise."
              },
              {
                title: "Advanced Technology",
                description: "3D CBCT imaging, digital dentistry, and state-of-the-art equipment."
              },
              {
                title: "Painless Procedures",
                description: "Modern techniques ensure comfortable, anxiety-free dental experiences."
              },
              {
                title: "Expert Specialists",
                description: "MDS qualified doctors specializing in orthodontics and prosthodontics."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Not sure which service you need?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80 text-pretty">
              Our team is happy to help you determine the best treatment plan for 
              your dental needs. Schedule a consultation today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Book a Consultation
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
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
