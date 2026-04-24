import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Testimonial } from "@/lib/data/testimonials"

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border border-border bg-card p-6",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < testimonial.rating
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            )}
          />
        ))}
      </div>
      <Quote className="mb-3 h-8 w-8 text-primary/20" />
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {testimonial.quote}
      </p>
      <div className="border-t border-border pt-4">
        <p className="text-sm font-semibold text-card-foreground">
          {testimonial.name}
        </p>
        <p className="text-xs text-muted-foreground">{testimonial.service}</p>
      </div>
    </div>
  )
}
