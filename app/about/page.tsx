import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Heart, Lightbulb, Shield, Sparkles, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoctorCard } from "@/components/ui/doctor-card"
import { doctors, teamMembers } from "@/lib/data/doctors"
import { clinicInfo, clinicGallery } from "@/lib/data/clinic"

const valueIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  award: Award,
  heart: Heart,
  lightbulb: Lightbulb,
  shield: Shield,
}

export const metadata = {
  title: "About Us | Dr Arora's Dental Square",
  description: "Learn about Dr Arora's Dental Square, serving Ambala with exceptional dental care for nearly three decades. Meet Dr. Deepak Arora and Dr. Rachna Arora.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-background to-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              About Our Clinic
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Exceptional Dental Care for Nearly Three Decades
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              For nearly three decades, Dr Arora&apos;s Dental Square has stood as a beacon of 
              exceptional dental care in the heart of Ambala — a place where advanced dentistry 
              blends seamlessly with warmth, compassion, and personalised attention.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Story
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A Legacy of Excellence in Dentistry
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  What started 28 years ago as a dream has today evolved into a state-of-the-art 
                  multi-speciality dental centre, guided by the expertise of the eminent duo 
                  <span className="font-medium text-foreground"> Dr. Deepak Arora (MDS Prosthodontics)</span> and 
                  <span className="font-medium text-foreground"> Dr. Rachna Arora (MDS Orthodontist)</span>.
                </p>
                <p className="leading-relaxed">
                  Their dedication to precision, ethics, and gentle treatment forms the foundation 
                  of every smile we craft.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="/images/clinic/clinic-exterior.jpg"
                  alt="Dr Arora's Dental Square clinic exterior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Care Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="/images/dental-equipment.jpg"
                  alt="Advanced dental technology and equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Technology & Care
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                World-Class Technology, Exceptional Comfort
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Step into an environment that radiates impeccable cleanliness, hospital-grade 
                  hygiene, and calming comfort — because your safety and peace of mind matter 
                  as much as your treatment.
                </p>
                <p className="leading-relaxed">
                  Our clinic is equipped with the latest dental technology including 
                  <span className="font-medium text-foreground"> 3D CBCT, digital dentistry, painless systems, 
                  and advanced sterilisation</span>, ensuring world-class care at every step.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">3D CBCT Imaging</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Stethoscope className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">Painless Systems</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">Advanced Sterilisation</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">Digital Dentistry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Trust Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Experience & Trust
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Generations of Trust, Lifetimes of Smiles
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Over the years, we&apos;ve had the privilege of serving generations of local 
                  families as well as patients traveling from across India and abroad.
                </p>
                <p className="leading-relaxed">
                  From routine treatments to complex full-mouth restorations, we are committed 
                  to creating smiles that are not only beautiful but long-lasting and healthy.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="/images/clinic/patient-treatment.jpg"
                  alt="Dental professionals treating a patient at Dr Arora's Dental Square"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {clinicInfo.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary-foreground sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Mission
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {clinicInfo.about.mission}
            </h2>
          </div>
          <div className="mt-16">
            <h3 className="mb-8 text-center text-xl font-semibold text-foreground">
              Our Core Values
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clinicInfo.about.values.map((value) => {
                const Icon = valueIcons[value.icon] || Award
                return (
                  <div
                    key={value.title}
                    className="rounded-xl border border-border bg-card p-6 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-card-foreground">
                      {value.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Team
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet our expert dentists
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team of highly qualified professionals brings years of experience 
              and a passion for dental excellence.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} showFullBio />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Facility
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A modern, comfortable environment
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our state-of-the-art facility is designed with your comfort in mind, 
              featuring the latest dental technology.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clinicGallery.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Every smile is a story
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              At Dr Arora&apos;s Dental Square, every smile is a story — and we&apos;re here to make 
              yours extraordinary.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule Your Visit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
