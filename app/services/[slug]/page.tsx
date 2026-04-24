import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowLeft, CheckCircle, Phone, Shield, Zap, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { services } from "@/lib/data/services"
import { clinicInfo } from "@/lib/data/clinic"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  
  if (!service) {
    return {
      title: "Service Not Found | Dr Arora's Dental Square",
    }
  }

  return {
    title: `${service.title} | Dr Arora's Dental Square`,
    description: service.shortDescription,
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const relatedServices = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3)

  const whyChooseUsIcons = [Target, Zap, Shield, Users]

  return (
    <>
      {/* Breadcrumb & Back Link */}
      <div className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium capitalize text-primary">
                {service.category} Dentistry
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {service.overview}
              </p>
              {service.introText && (
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {service.introText}
                </p>
              )}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Book This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${clinicInfo.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call to Inquire
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages/Benefits Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {service.uses ? "Advantages" : "Benefits"} of {service.title}
              </h2>
              <ul className="mt-8 space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Uses Section - Only for CBCT and similar services */}
            {service.uses && (
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Uses of {service.title.split("&")[0].trim()}
                </h2>
                <ul className="mt-8 space-y-4">
                  {service.uses.map((use, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-lg text-muted-foreground">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What Is Pediatric Dentistry Section */}
      {service.whatIsPediatricDentistry && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* What Is Pediatric Dentistry */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold text-card-foreground">
                  What is Pediatric Dentistry?
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.whatIsPediatricDentistry.description}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.whatIsPediatricDentistry.approach}
                </p>
              </div>
              
              {/* Why Pediatric Care Is Important */}
              {service.whyPediatricCareImportant && (
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Why Pediatric Dental Care is Important
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {service.whyPediatricCareImportant.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Pediatric Dental Services We Offer */}
      {service.pediatricServices && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Pediatric Dental Services We Offer
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Comprehensive dental care tailored for children of all ages.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.pediatricServices.map((serviceItem, index) => (
                <div key={index} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {serviceItem.name}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {serviceItem.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What Pediatric Dentistry Can Help With */}
      {service.whatPediatricCanHelp && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What Pediatric Dentistry Can Help With
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our pediatric dental services address a wide range of children&apos;s dental needs.
              </p>
            </div>
            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4">
              {service.whatPediatricCanHelp.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What Is Preventive Dentistry Section */}
      {service.whatIsPreventiveDentistry && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* What Is Preventive Dentistry */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold text-card-foreground">
                  What is Preventive Dentistry?
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.whatIsPreventiveDentistry.description}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.whatIsPreventiveDentistry.focus}
                </p>
              </div>
              
              {/* Why Preventive Care Is Important */}
              {service.whyPreventiveCareImportant && (
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Why Preventive Care is Important
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {service.whyPreventiveCareImportant.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Preventive Dental Services We Offer */}
      {service.preventiveServices && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Preventive Dental Services We Offer
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Comprehensive preventive care for patients of all ages.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
              {service.preventiveServices.map((serviceItem, index) => (
                <div key={index} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary/30 hover:shadow-md">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{serviceItem}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dental Sealants */}
      {service.dentalSealants && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-center text-xl font-bold text-card-foreground">
                  Dental Sealants
                </h3>
                <p className="mt-4 text-center text-muted-foreground">
                  A protective barrier against tooth decay.
                </p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.dentalSealants.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What Preventive Dentistry Helps With */}
      {service.whatPreventiveHelps && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What Preventive Dentistry Helps With
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our preventive care addresses a wide range of oral health needs.
              </p>
            </div>
            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4">
              {service.whatPreventiveHelps.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What Are Dentures Section */}
      {service.whatAreDentures && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <h3 className="text-xl font-bold text-card-foreground">
                  What Are Dentures?
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.whatAreDentures.description}
                </p>
                <div className="mt-6">
                  <p className="font-medium text-card-foreground">They help:</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {service.whatAreDentures.helps.map((item, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                      >
                        <CheckCircle className="h-4 w-4" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Types of Removable Dentures */}
      {(service.partialDentures || service.completeDentures) && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Types of Removable Dentures
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We offer various denture options to suit your needs.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Partial Dentures */}
              {service.partialDentures && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Partial Dentures
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.partialDentures.description}
                  </p>
                  <div className="mt-6">
                    <p className="font-medium text-card-foreground">Types available:</p>
                    <div className="mt-4 space-y-3">
                      {service.partialDentures.types.map((type, index) => (
                        <div key={index} className="rounded-lg border border-border bg-background px-4 py-3">
                          <p className="font-medium text-card-foreground">{type.name}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{type.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Complete Dentures */}
              {service.completeDentures && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Complete Dentures
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.completeDentures.description}
                  </p>
                  <div className="mt-6">
                    <p className="font-medium text-card-foreground">Types available:</p>
                    <ul className="mt-4 space-y-3">
                      {service.completeDentures.types.map((type, index) => (
                        <li key={index} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                          <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Immediate Dentures */}
      {service.immediateDentures && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-center text-xl font-bold text-card-foreground">
                  Immediate Dentures
                </h3>
                <ul className="mt-6 space-y-3">
                  {service.immediateDentures.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Removable Dentures + Limitations */}
      {(service.whyChooseRemovableDentures || service.dentureLimitations) && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Why Choose */}
              {service.whyChooseRemovableDentures && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Why Choose Removable Dentures?
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {service.whyChooseRemovableDentures.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Limitations */}
              {service.dentureLimitations && (
                <div className="rounded-2xl border border-border bg-muted/30 p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Limitations to Consider
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {service.dentureLimitations.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="h-2 w-2 shrink-0 rounded-full bg-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Denture Care & Maintenance */}
      {service.dentureCare && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Care & Maintenance
              </h2>
              <p className="mt-4 text-muted-foreground">
                Keep your dentures in great condition with proper care.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
              {service.dentureCare.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What Is Smile Designing Section */}
      {service.whatIsSmileDesigning && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* What Is Smile Designing */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold text-card-foreground">
                  What is Smile Designing?
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.whatIsSmileDesigning.description}
                </p>
                <div className="mt-6">
                  <p className="font-medium text-card-foreground">It helps:</p>
                  <ul className="mt-3 space-y-2">
                    {service.whatIsSmileDesigning.helps.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Digital Smile Planning */}
              {service.digitalSmilePlanning && (
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Digital Smile Planning
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    At Dr Arora&apos;s Dental Square, smile designing is supported by:
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.digitalSmilePlanning.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    This allows patients to visualize their new smile before treatment begins.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Who Needs Smile Designing */}
      {service.whoNeedsSmileDesigning && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Who Needs Smile Designing?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                You may be an ideal candidate if you have:
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
              {service.whoNeedsSmileDesigning.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Treatments Used in Smile Designing */}
      {service.smileDesigningTreatments && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Treatments Used in Smile Designing
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We combine various advanced treatments to create your perfect smile.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.smileDesigningTreatments.map((treatment, index) => (
                <div key={index} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {treatment.name}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {treatment.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What Smile Designing Can Fix */}
      {service.whatSmileDesigningCanFix && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What Smile Designing Can Fix
              </h2>
            </div>
            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4">
              {service.whatSmileDesigningCanFix.issues.map((issue, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{issue}</span>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
                <p className="text-lg font-medium text-primary">
                  {service.whatSmileDesigningCanFix.result}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Is Smile Designing Painful */}
      {service.isSmileDesigningPainful && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <h3 className="text-xl font-bold text-card-foreground">
                  Is Smile Designing Painful?
                </h3>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  {service.isSmileDesigningPainful.map((item, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      <CheckCircle className="h-4 w-4" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What Is Surgical Extraction Section */}
      {service.whatIsSurgicalExtraction && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* What Is Surgical Extraction */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold text-card-foreground">
                  What is Surgical Tooth Extraction?
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.whatIsSurgicalExtraction.description}
                </p>
                <div className="mt-6">
                  <p className="font-medium text-card-foreground">Surgical extraction is required when:</p>
                  <ul className="mt-3 space-y-2">
                    {service.whatIsSurgicalExtraction.requiredWhen.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* CBCT Role */}
              {service.cbctRoleInExtraction && (
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Role of CBCT in Surgical Extraction
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    We use advanced 3D CBCT imaging for:
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.cbctRoleInExtraction.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* When Is Surgical Extraction Needed */}
      {service.whenSurgicalExtractionNeeded && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                When is Surgical Extraction Needed?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Surgical extraction may be required in the following situations:
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
              {service.whenSurgicalExtractionNeeded.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Types of Surgical Extractions */}
      {service.surgicalExtractionTypes && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Types of Surgical Extractions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We perform various types of surgical extractions based on your needs.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.surgicalExtractionTypes.map((type, index) => (
                <div key={index} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {type.name}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {type.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Is Surgical Extraction Painful + Recovery */}
      {(service.isSurgicalExtractionPainful || service.recoveryAfterExtraction) && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Is It Painful */}
              {service.isSurgicalExtractionPainful && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Is Surgical Extraction Painful?
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {service.isSurgicalExtractionPainful.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Recovery */}
              {service.recoveryAfterExtraction && (
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Recovery After Surgical Extraction
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {service.recoveryAfterExtraction.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Post-Extraction Care */}
      {service.postExtractionCare && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Post-Extraction Care
              </h2>
              <p className="mt-4 text-muted-foreground">
                Follow these guidelines for optimal healing.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
              {service.postExtractionCare.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What Are Braces Section */}
      {service.whatAreBraces && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* What Are Braces */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold text-card-foreground">
                  What are Braces?
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.whatAreBraces.description}
                </p>
                <div className="mt-6">
                  <p className="font-medium text-card-foreground">They help:</p>
                  <ul className="mt-3 space-y-2">
                    {service.whatAreBraces.helps.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Why Choose Braces */}
              {service.whyChooseBraces && (
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Why Choose Braces?
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {service.whyChooseBraces.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Types of Braces */}
      {service.bracesTypes && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Types of Braces
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We offer multiple braces options to suit your needs and lifestyle.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.bracesTypes.map((type, index) => (
                <div key={index} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {type.name}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {type.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What Braces Can Correct */}
      {service.whatBracesCanCorrect && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What Braces Can Correct
              </h2>
              <p className="mt-4 text-muted-foreground">
                Braces can address a wide range of orthodontic issues.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
              {service.whatBracesCanCorrect.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Invisalign Clear Aligners Section */}
      {service.invisalignInfo && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Invisalign Info */}
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {service.invisalignInfo.intro}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-card-foreground">
                  Invisalign Clear Aligners
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.invisalignInfo.description}
                </p>
                
                {/* Invisalign Benefits */}
                {service.invisalignBenefits && (
                  <div className="mt-6">
                    <p className="font-medium text-card-foreground">Benefits:</p>
                    <ul className="mt-3 space-y-2">
                      {service.invisalignBenefits.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Invisalign Process */}
              {service.invisalignProcess && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    How Invisalign Works
                  </h3>
                  <div className="mt-6 space-y-4">
                    {service.invisalignProcess.map((step) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          {step.step}
                        </div>
                        <div>
                          <p className="font-medium text-card-foreground">{step.title}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* What Invisalign Can Correct */}
      {service.whatInvisalignCanCorrect && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What Invisalign Can Correct
              </h2>
              <p className="mt-4 text-muted-foreground">
                Clear aligners are effective for many orthodontic issues.
              </p>
            </div>
            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4">
              {service.whatInvisalignCanCorrect.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What Is Teeth Whitening Section */}
      {service.whatIsTeethWhitening && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* What Is Teeth Whitening */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold text-card-foreground">
                  What is Teeth Whitening?
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.whatIsTeethWhitening}
                </p>
                
                {/* How Whitening Works */}
                {service.howWhiteningWorks && (
                  <div className="mt-6">
                    <p className="font-medium text-card-foreground">How it works:</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.howWhiteningWorks}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Why Professional Whitening */}
              {service.whyProfessionalWhitening && (
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Why Choose Professional Whitening?
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {service.whyProfessionalWhitening.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Causes of Tooth Discoloration */}
      {service.causesOfDiscoloration && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Common Causes of Tooth Discoloration
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Understanding what causes stains helps you maintain a brighter smile.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
              {service.causesOfDiscoloration.map((cause, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{cause}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How Long Whitening Lasts */}
      {service.howLongWhiteningLasts && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-center text-xl font-bold text-card-foreground">
                  How Long Does Whitening Last?
                </h3>
                <p className="mt-4 text-center text-lg text-primary font-medium">
                  Results typically last {service.howLongWhiteningLasts.duration}
                </p>
                <p className="mt-4 text-center text-muted-foreground">
                  Duration depends on:
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.howLongWhiteningLasts.dependsOn.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  {service.howLongWhiteningLasts.note}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What Is Root Canal Treatment Section */}
      {service.whatIsRCT && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* What Is RCT */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold text-card-foreground">
                  What is Root Canal Treatment?
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.whatIsRCT.description}
                </p>
                <div className="mt-6">
                  <p className="font-medium text-card-foreground">RCT helps:</p>
                  <ul className="mt-3 space-y-2">
                    {service.whatIsRCT.helps.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Painless RCT */}
              {service.painlessRCT && (
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Painless Root Canal Treatment
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Modern RCT is comfortable and stress-free.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.painlessRCT.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Who Needs RCT + When Is It Necessary */}
      {(service.whoNeedsRCT || service.whenIsRCTNecessary) && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Who Needs RCT */}
              {service.whoNeedsRCT && (
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Who Needs Root Canal Treatment?
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    You may need RCT if you experience:
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.whoNeedsRCT.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
                        <div className="h-2 w-2 shrink-0 rounded-full bg-destructive" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* When Is RCT Necessary */}
              {service.whenIsRCTNecessary && (
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    When is RCT Necessary?
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Root canal treatment becomes necessary when:
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.whenIsRCTNecessary.points.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
                    <p className="text-sm font-medium text-destructive">
                      {service.whenIsRCTNecessary.warning}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Rotary Technology + Single Sitting RCT */}
      {(service.rotaryTechnology || service.singleSittingRCT) && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Rotary Technology */}
              {service.rotaryTechnology && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Rotary Root Canal Technology
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.rotaryTechnology.description}
                  </p>
                  <div className="mt-6">
                    <p className="font-medium text-card-foreground">Advantages:</p>
                    <ul className="mt-3 space-y-2">
                      {service.rotaryTechnology.advantages.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Single Sitting RCT */}
              {service.singleSittingRCT && (
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    Single-Sitting Root Canal Treatment
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.singleSittingRCT.description}
                  </p>
                  <div className="mt-6">
                    <p className="font-medium text-card-foreground">Benefits:</p>
                    <ul className="mt-3 space-y-2">
                      {service.singleSittingRCT.benefits.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* RCT Duration + After RCT + Clinic Features */}
      {(service.rctDuration || service.afterRCT || service.clinicFeatures) && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {/* RCT Duration */}
              {service.rctDuration && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">
                    How Long Does RCT Take?
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {service.rctDuration.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* After RCT */}
              {service.afterRCT && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">
                    After RCT - What Next?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.afterRCT.description}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.afterRCT.points.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Clinic Features */}
              {service.clinicFeatures && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">
                    Advanced RCT Clinic Features
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {service.clinicFeatures.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* What Are Dental Implants Section */}
      {service.whatAreImplants && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* What Are Implants */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold text-card-foreground">
                  What Are Dental Implants?
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.whatAreImplants.description}
                </p>
                <div className="mt-6">
                  <p className="font-medium text-card-foreground">They provide:</p>
                  <ul className="mt-3 space-y-2">
                    {service.whatAreImplants.provides.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Fixed Implant Teeth */}
              {service.whatAreFixedImplantTeeth && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    What Are Fixed Implant Teeth?
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.whatAreFixedImplantTeeth.description}
                  </p>
                  <div className="mt-6">
                    <p className="font-medium text-card-foreground">They:</p>
                    <ul className="mt-3 space-y-2">
                      {service.whatAreFixedImplantTeeth.points.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Problems with Removable Dentures */}
      {service.dentureProblems && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Problems with Removable Dentures
              </h2>
              <p className="mt-4 text-muted-foreground">
                Traditional removable dentures come with several challenges:
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
              {service.dentureProblems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-destructive" />
                  <span className="text-sm text-muted-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Implants Are Modern Choice */}
      {service.whyModernChoice && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Why Implants Are the Modern Choice
              </h2>
            </div>
            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4">
              {service.whyModernChoice.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fixed Teeth vs Removable Dentures Comparison */}
      {(service.comparisonFixed && service.comparisonRemovable) && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Fixed Teeth vs Removable Dentures
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                See how fixed implant teeth compare to traditional removable dentures.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
              {/* Fixed Teeth */}
              <div className="rounded-2xl border-2 border-primary bg-card p-8">
                <h3 className="text-center text-xl font-bold text-primary">
                  Fixed Implant Teeth
                </h3>
                <ul className="mt-6 space-y-4">
                  {service.comparisonFixed.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Removable Dentures */}
              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <h3 className="text-center text-xl font-bold text-muted-foreground">
                  Removable Dentures
                </h3>
                <ul className="mt-6 space-y-4">
                  {service.comparisonRemovable.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 shrink-0 rounded-full bg-muted-foreground" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Fixed Implants Feel Natural + Pain Info + CBCT Planning */}
      {(service.whyFeelsNatural || service.implantPainInfo || service.cbctPlanning) && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Why Feels Natural */}
              {service.whyFeelsNatural && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">
                    Why Fixed Implants Feel More Natural
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.whyFeelsNatural}
                  </p>
                </div>
              )}
              
              {/* Pain Info */}
              {service.implantPainInfo && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">
                    Are Implant Treatments Painful?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Implant procedures are safe and comfortable.
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.implantPainInfo.map((info, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* CBCT Planning */}
              {service.cbctPlanning && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">
                    Advanced Planning with CBCT
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We use advanced 3D CBCT technology for:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.cbctPlanning.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Ideal Candidate + Implant Types */}
      {(service.idealCandidate || service.implantTypes) && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Ideal Candidate */}
              {service.idealCandidate && (
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Who Should Choose Dental Implants?
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    You may be an ideal candidate if you:
                  </p>
                  <ul className="mt-6 space-y-4">
                    {service.idealCandidate.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-lg text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Implant Types */}
              {service.implantTypes && (
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Types of Implant Solutions
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    We offer various implant options to meet your needs.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {service.implantTypes.map((type, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4"
                      >
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        <span className="font-medium text-card-foreground">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* What Are Crowns & Bridges Section */}
      {(service.whatAreCrowns || service.whatAreBridges) && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* What Are Crowns */}
              {service.whatAreCrowns && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    What Are Dental Crowns?
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.whatAreCrowns.description}
                  </p>
                  <div className="mt-6">
                    <p className="font-medium text-card-foreground">Crowns restore:</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.whatAreCrowns.restores.map((item, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* What Are Bridges */}
              {service.whatAreBridges && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-xl font-bold text-card-foreground">
                    What Are Dental Bridges?
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.whatAreBridges.description}
                  </p>
                  <div className="mt-6">
                    <p className="font-medium text-card-foreground">Bridges help:</p>
                    <ul className="mt-3 space-y-2">
                      {service.whatAreBridges.helps.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Who Needs Crowns or Bridges Section */}
      {service.whoNeedsIt && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Who Needs Crowns or Bridges?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Crowns or bridges may be recommended if you have:
              </p>
            </div>
            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4">
              {service.whoNeedsIt.map((need, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{need}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Crown & Bridge Types Section */}
      {service.crownBridgeTypes && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Types of Crowns & Bridges
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We offer various options to suit your needs and preferences.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.crownBridgeTypes.map((type, index) => (
                <div key={index} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {type.name}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {type.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Digital Benefits Section */}
      {service.digitalBenefits && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Why Digital Crowns & Bridges Are Better
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Our advanced digital dentistry techniques ensure superior results.
                </p>
                <ul className="mt-8 space-y-4">
                  {service.digitalBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-lg text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                {/* Durability Info */}
                {service.durability && (
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-semibold text-card-foreground">
                      How Long Do Crowns & Bridges Last?
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {service.durability}
                    </p>
                  </div>
                )}
                {/* Pain Info */}
                {service.painInfo && (
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-semibold text-card-foreground">
                      Are Crowns & Bridges Painful?
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {service.painInfo.map((info, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                          {info}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Issues It Can Fix Section - For Veneers */}
      {service.issuesItCanFix && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Issues Veneers Can Fix
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Dental veneers are versatile and can address a variety of cosmetic dental concerns.
              </p>
            </div>
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-4">
              {service.issuesItCanFix.map((issue, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Veneer Types Section */}
      {service.veneerTypes && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Types of Veneers
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We offer multiple veneer options to suit your needs and budget.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {service.veneerTypes.map((veneer, index) => (
                <div key={index} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {veneer.name}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {veneer.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Veneer Procedure Steps Section */}
      {service.procedureSteps && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Our Veneer Procedure
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                A step-by-step look at how we create your perfect smile.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.procedureSteps.map((step, index) => (
                <div key={index} className="relative rounded-xl border border-border bg-card p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-card-foreground">
                    {step.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {step.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filling Types Section - For Cosmetic & Restorative */}
      {service.fillingTypes && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Types of Dental Fillings
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Dental fillings are restorative materials used to repair teeth damaged by decay, fractures, or wear. They help restore tooth structure, strength, function, and appearance.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.fillingTypes.map((filling, index) => (
                <div key={index} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {filling.name}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {filling.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Indirect Fillings Section */}
      {service.indirectFillings && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Indirect Fillings
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {service.indirectFillings.description}
                </p>
                <div className="mt-6">
                  <h3 className="font-semibold text-foreground">Recommended when:</h3>
                  <ul className="mt-3 space-y-2">
                    {service.indirectFillings.recommendedWhen.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-semibold text-card-foreground">Types of Indirect Fillings</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {service.indirectFillings.types.map((type, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CBCT for Implants & RCT Section - Only for CBCT */}
      {(service.implantInfo || service.rctInfo) && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* CBCT for Implants */}
              {service.implantInfo && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {service.implantInfo.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.implantInfo.description}
                  </p>
                </div>
              )}
              
              {/* CBCT for RCT */}
              {service.rctInfo && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {service.rctInfo.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.rctInfo.points.map((point, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Safety Info Section - Only for CBCT */}
      {service.safetyInfo && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {service.safetyInfo.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {service.safetyInfo.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Procedure Steps Section */}
      <section className={service.safetyInfo ? "bg-muted/30 py-16 sm:py-24" : "bg-muted/30 py-16 sm:py-24"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What to Expect
            </h2>
            <p className="mt-4 text-muted-foreground">
              {service.uses 
                ? "Here is what your experience will look like at our clinic."
                : `Here is a step-by-step overview of what your ${service.title.toLowerCase()} procedure will look like at our clinic.`
              }
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {service.procedure.map((step) => (
                <div key={step.step} className="flex gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post Care Section */}
      {service.postCare && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Post-Treatment Care
              </h2>
              <p className="mt-4 text-muted-foreground">
                Follow these guidelines after your procedure for the best results.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.postCare.map((care, index) => (
                  <div key={index} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{care}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section - Only for services with this field */}
      {service.whyChooseUs && (
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Why Choose Us
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.whyChooseUs.map((reason, index) => {
                const Icon = whyChooseUsIcons[index % whyChooseUsIcons.length]
                return (
                  <div key={index} className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold text-card-foreground">{reason}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className={service.whyChooseUs ? "bg-muted/30 py-16 sm:py-24" : "bg-background py-16 sm:py-24"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Have questions about {service.title.toLowerCase()}? We have answers.
            </p>
            <Accordion type="single" collapsible className="mt-8">
              {service.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Related Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              You might also be interested in these services.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {related.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Book your {service.title.toLowerCase()} appointment today and take the 
              first step towards a healthier smile.
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
