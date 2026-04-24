import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Doctor } from "@/lib/data/doctors"

interface DoctorCardProps {
  doctor: Doctor
  className?: string
  showFullBio?: boolean
}

export function DoctorCard({ doctor, className, showFullBio = false }: DoctorCardProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
          <p className="text-sm font-medium opacity-90">{doctor.specialty}</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-card-foreground">
          {doctor.name}
        </h3>
        <p className="mt-1 text-sm text-primary">{doctor.role}</p>
        {showFullBio ? (
          <>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {doctor.bio}
            </p>
            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Qualifications
              </p>
              <ul className="space-y-1">
                {doctor.qualifications.map((qual, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {doctor.experience} experience
            </div>
          </>
        ) : (
          <p className="mt-2 text-xs text-muted-foreground">
            {doctor.experience} experience
          </p>
        )}
      </div>
    </div>
  )
}
