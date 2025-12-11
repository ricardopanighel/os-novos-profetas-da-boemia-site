import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WantedPoster } from "@/components/wanted-poster"
import { bandMembers } from "@/lib/band-data"

interface PageProps {
  params: Promise<{ nome: string }>
}

export async function generateStaticParams() {
  return bandMembers.map((member) => ({
    nome: member.slug,
  }))
}

export default async function MemberPage({ params }: PageProps) {
  const { nome } = await params
  const member = bandMembers.find((m) => m.slug === nome)

  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background noise-overlay flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-[0.2em]">VOLTAR</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Large Poster */}
            <div className="max-w-lg mx-auto lg:mx-0 lg:sticky lg:top-28">
              <WantedPoster member={member} size="large" />
            </div>

            {/* Member Bio */}
            <div className="flex flex-col justify-center py-8">
              <p className="font-serif italic text-muted-foreground text-sm tracking-[0.3em] mb-4">
                — ARQUIVO CONFIDENCIAL —
              </p>

              <h1 className="font-sans text-5xl md:text-7xl tracking-wider text-foreground leading-none mb-2">
                {member.alias}
              </h1>

              <p className="font-serif text-xl text-muted-foreground mb-8">{member.role}</p>

              <div className="space-y-6">
                <p className="font-serif text-lg md:text-xl text-foreground/90 leading-relaxed">{member.bio}</p>

                <div className="pt-8 border-t border-border/30">
                  <p className="font-sans text-sm tracking-[0.2em] text-muted-foreground mb-2">NOME VERDADEIRO</p>
                  <p className="font-serif text-xl text-foreground">{member.name}</p>
                </div>

                <div className="pt-6">
                  <p className="font-sans text-sm tracking-[0.2em] text-muted-foreground mb-2">CRIME PRINCIPAL</p>
                  <p className="font-serif text-xl text-foreground italic">{member.crime}</p>
                </div>

                <div className="pt-6">
                  <p className="font-sans text-sm tracking-[0.2em] text-muted-foreground mb-2">RECOMPENSA</p>
                  <p className="font-sans text-4xl text-foreground tracking-wider">{member.bounty}</p>
                </div>
              </div>

              {/* Warning */}
              <div className="mt-12 p-6 border border-border/50 bg-accent/30">
                <p className="font-sans text-xs tracking-[0.25em] text-muted-foreground text-center">
                  ⚠ EXTREMAMENTE PERIGOSO ⚠
                </p>
                <p className="font-serif italic text-sm text-muted-foreground text-center mt-2">
                  Aproxime-se por sua conta e risco
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
