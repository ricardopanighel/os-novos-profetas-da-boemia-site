import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WantedPoster } from "@/components/wanted-poster"
import { bandMembers, latestSingleUrl } from "@/lib/band-data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background noise-overlay flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background pointer-events-none" />

          <div className="relative z-10 text-center max-w-4xl">
            <p className="font-serif italic text-muted-foreground text-sm md:text-base tracking-[0.3em] mb-4">
              — A PROFECIA FOI ESCRITA —
            </p>
            <h1 className="font-sans text-5xl md:text-8xl lg:text-9xl tracking-wider text-foreground leading-none">
              OS NOVOS
              <br />
              <span className="text-foreground/80">PROFETAS</span>
              <br />
              DA BOÊMIA
            </h1>
            <p className="font-serif italic text-muted-foreground text-lg md:text-xl mt-8 max-w-xl mx-auto">
              Está instaurada a Neoboêmia Caiçara.
            </p>

            {/* CTA do último single */}
            <Link
              href={latestSingleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-12 px-8 py-4 border border-foreground/50 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
            >
              <span className="font-sans text-sm tracking-[0.25em]">NOVO SINGLE</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Wanted Posters Grid */}
        <section className="px-6 py-20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <p className="font-serif italic text-muted-foreground text-sm tracking-[0.3em] mb-2">PROCURADOS</p>
              <h2 className="font-sans text-4xl md:text-6xl tracking-wider text-foreground">OS PROFETAS</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {bandMembers.map((member) => (
                <WantedPoster key={member.slug} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Atmospheric Divider */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border/10 to-transparent" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <p className="font-sans text-3xl md:text-5xl tracking-[0.2em] text-foreground/60">
              BOÊMIA
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
