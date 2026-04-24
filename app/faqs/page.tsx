import Link from "next/link"
import { ArrowRight, Smile, Sparkles, Stethoscope, Monitor, Baby, Zap, Sun, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "FAQs | Dr Arora's Dental Square",
  description: "Find answers to frequently asked questions about dental implants, braces, root canal treatment, teeth whitening, and more at Dr Arora's Dental Square.",
}

const faqCategories = [
  {
    id: "dental-implants",
    title: "Dental Implants & Missing Teeth",
    icon: Smile,
    questions: [
      {
        question: "What are dental implants?",
        answer: "Dental implants are titanium posts placed in the jawbone to replace missing teeth. They provide a strong and permanent foundation for artificial teeth."
      },
      {
        question: "Who needs dental implants?",
        answer: "Patients who have lost one or more teeth due to decay, gum disease, or injury and want a fixed, long-term solution."
      },
      {
        question: "Are dental implants painful?",
        answer: "No, the procedure is performed under local anesthesia and is usually painless. Mild discomfort after the procedure is temporary."
      },
      {
        question: "How long do dental implants last?",
        answer: "With proper care and regular check-ups, implants can last 15–20 years or even a lifetime."
      },
      {
        question: "Do implants look natural?",
        answer: "Yes, they are designed to match your natural teeth in shape, color, and function."
      },
      {
        question: "How long does implant treatment take?",
        answer: "Treatment usually takes 3–6 months depending on healing and bone condition."
      }
    ]
  },
  {
    id: "braces-aligners",
    title: "Braces, Aligners & Smile Correction",
    icon: Sparkles,
    questions: [
      {
        question: "What orthodontic problems can be corrected?",
        answer: "Crowded teeth, spacing, overbite, underbite, crossbite, and alignment issues."
      },
      {
        question: "What orthodontic options do you offer?",
        answer: "Metal braces, ceramic braces, self-ligating braces, and clear aligners (Invisalign)."
      },
      {
        question: "Are clear aligners effective?",
        answer: "Yes, they are effective for mild to moderate alignment issues."
      },
      {
        question: "How long does orthodontic treatment take?",
        answer: "Usually 6–24 months depending on complexity."
      },
      {
        question: "Do braces or aligners hurt?",
        answer: "Mild discomfort may occur initially but reduces quickly."
      }
    ]
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment (RCT)",
    icon: Stethoscope,
    questions: [
      {
        question: "Is root canal treatment painful?",
        answer: "No, modern RCT is virtually painless with advanced techniques."
      },
      {
        question: "Can RCT be done in one visit?",
        answer: "Yes, most cases are completed in a single sitting."
      },
      {
        question: "Why is a crown required after RCT?",
        answer: "It protects the treated tooth and restores strength."
      },
      {
        question: "What is the success rate of RCT?",
        answer: "Approximately 90–95%."
      }
    ]
  },
  {
    id: "cbct-diagnostics",
    title: "CBCT & Digital Diagnostics",
    icon: Monitor,
    questions: [
      {
        question: "What is CBCT?",
        answer: "CBCT is a 3D imaging scan that provides detailed views of teeth, jaw, and surrounding structures."
      },
      {
        question: "Is CBCT safe?",
        answer: "Yes, it uses low radiation and is safe when used appropriately."
      },
      {
        question: "Why is CBCT important for implants?",
        answer: "It helps measure bone, locate nerves, and plan precise implant placement."
      },
      {
        question: "Can CBCT help in other treatments?",
        answer: "Yes, it is useful for orthodontics, root canals, and complex cases."
      }
    ]
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    icon: Baby,
    questions: [
      {
        question: "Why is children's dentistry important?",
        answer: "It supports proper development, prevents cavities, and builds healthy habits early."
      },
      {
        question: "When should a child first visit the dentist?",
        answer: "By age 1 or within 6 months of first tooth eruption."
      },
      {
        question: "Are treatments safe for children?",
        answer: "Yes, child-friendly techniques ensure safety and comfort."
      }
    ]
  },
  {
    id: "dental-lasers",
    title: "Dental Lasers",
    icon: Zap,
    questions: [
      {
        question: "What is dental laser treatment?",
        answer: "Laser dentistry uses focused light energy for precise, minimally invasive procedures."
      },
      {
        question: "Is laser treatment painful?",
        answer: "No, it is usually painless and may not require injections."
      },
      {
        question: "What are the benefits of lasers?",
        answer: "Minimal discomfort, faster healing, reduced bleeding, and high precision."
      }
    ]
  },
  {
    id: "whitening-cleaning",
    title: "Teeth Whitening & Cleaning",
    icon: Sun,
    questions: [
      {
        question: "Is professional whitening safe?",
        answer: "Yes, it is safe under dental supervision."
      },
      {
        question: "How long do whitening results last?",
        answer: "6–18 months depending on habits."
      },
      {
        question: "Is cleaning painful?",
        answer: "No, professional cleaning is comfortable and essential for oral health."
      }
    ]
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth & Surgical Extraction",
    icon: Scissors,
    questions: [
      {
        question: "What is an impacted tooth?",
        answer: "A tooth that cannot fully erupt and remains trapped in the jaw or gums."
      },
      {
        question: "When is removal required?",
        answer: "When it causes pain, infection, or affects nearby teeth."
      },
      {
        question: "Is surgical extraction painful?",
        answer: "No, it is performed under anesthesia and is comfortable."
      },
      {
        question: "How long is recovery?",
        answer: "Usually 3–5 days with proper care."
      }
    ]
  }
]

export default function FAQsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-background to-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              FAQs
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Clear answers for your dental concerns and confident decisions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.id}
                  className="rounded-2xl border border-border bg-card overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 border-b border-border bg-muted/30 px-6 py-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-card-foreground">
                      {category.title}
                    </h2>
                  </div>
                  
                  {/* Questions Accordion */}
                  <Accordion type="single" collapsible className="px-6">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.id}-${index}`}
                        className="border-b border-border last:border-0"
                      >
                        <AccordionTrigger className="py-5 text-left font-medium text-card-foreground hover:text-primary hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Contact Dr Arora&apos;s Dental Square for expert guidance and personalized dental care.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Us
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
