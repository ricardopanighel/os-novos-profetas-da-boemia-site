import Link from "next/link"
import Image from "next/image"
import type { BandMember } from "@/lib/band-data"

interface WantedPosterProps {
  member: BandMember
  size?: "small" | "large"
}

export function WantedPoster({ member, size = "small" }: WantedPosterProps) {
  const isLarge = size === "large"

  return (
    <Link
      href={`/membro/${member.slug}`}
      className={`group block relative ${isLarge ? "" : "hover:scale-[1.02]"} transition-transform duration-500`}
    >
      <div className={`poster-aged relative bg-[#f5f0e6] ${isLarge ? "p-8 md:p-12" : "p-4 md:p-6"}`}>
        {/* Wanted Header */}
        <div className="text-center border-b-2 border-black/80 pb-2 mb-4">
          <h2
            className={`font-sans text-black ${isLarge ? "text-5xl md:text-7xl" : "text-3xl md:text-4xl"} tracking-wider`}
          >
            PROCURADO
          </h2>
          <p className={`font-serif italic text-black/70 ${isLarge ? "text-lg" : "text-xs"} mt-1`}>Vivo ou Morto</p>
        </div>

        {/* Member Image */}
        <div className={`relative ${isLarge ? "aspect-4/4" : "aspect-3/3"} bg-black/10 overflow-hidden`}>
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Member Info */}
        <div className="mt-4 text-center">
          <h3
            className={`font-sans text-black ${isLarge ? "text-4xl md:text-6xl" : "text-xl md:text-2xl"} tracking-wider`}
          >
            {member.alias}
          </h3>
          <p className={`font-serif text-black/70 ${isLarge ? "text-xl" : "text-sm"} mt-1`}>{member.role}</p>

          {/* Bounty */}
          <div className={`mt-4 pt-4 border-t border-black/30 ${isLarge ? "mt-6 pt-6" : ""}`}>
            <p className={`font-sans text-black/60 ${isLarge ? "text-lg" : "text-xs"} tracking-widest`}>RECOMPENSA</p>
            <p
              className={`font-sans text-black ${isLarge ? "text-5xl md:text-6xl" : "text-2xl md:text-3xl"} tracking-wider`}
            >
              {member.bounty}
            </p>
          </div>
        </div>

        {/* Corner burns */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-black/20 to-transparent" />
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-black/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-black/20 to-transparent" />
      </div>
    </Link>
  )
}
