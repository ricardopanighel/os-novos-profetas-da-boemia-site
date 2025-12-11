import Link from "next/link"
import { Mail, Instagram, Youtube, Music } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const socialLinks = [
  { name: "INSTAGRAM", href: "https://instagram.com/osnovosprofetasdaboemia", icon: Instagram },
  { name: "YOUTUBE", href: "https://youtube.com/@osnovosprofetasdaboemia", icon: Youtube },
  { name: "SPOTIFY", href: "https://open.spotify.com/intl-pt/artist/33nhxkKo0qdlIZBa5mRU2Q?si=iIGoRF26Tbum6puPnETO7g", icon: Music },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background noise-overlay flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-serif italic text-muted-foreground text-sm tracking-[0.3em] mb-4">
              — ENTRE EM CONTATO —
            </p>
            <h1 className="font-sans text-5xl md:text-7xl tracking-wider text-foreground">CONTATO</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              {/* Email */}
              <div>
                <p className="font-sans text-xs tracking-[0.25em] text-muted-foreground mb-3">EMAIL GERAL</p>
                <Link
                  href="mailto:osnovosprofetasdaboemia@gmail.com"
                  className="font-serif text-xl md:text-2xl text-foreground hover:text-muted-foreground transition-colors"
                >
                  osnovosprofetasdaboemia@gmail.com
                </Link>
              </div>
            </div>

            {/* Social & Info */}
            <div className="space-y-12">
              {/* Social Links */}
              <div>
                <p className="font-sans text-xs tracking-[0.25em] text-muted-foreground mb-6">REDES SOCIAIS</p>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 border border-border/50 group-hover:border-foreground group-hover:bg-foreground transition-all">
                        <social.icon
                          size={20}
                          className="text-foreground group-hover:text-background transition-colors"
                        />
                      </div>
                      <span className="font-sans text-sm tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
                        {social.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Management */}
              <div>
                <p className="font-sans text-xs tracking-[0.25em] text-muted-foreground mb-3">MANAGEMENT</p>
                <p className="font-serif text-lg text-foreground">Estúdio Lücãs</p>
                <p className="font-serif text-muted-foreground mt-1">São Vicente, Brasil</p>
              </div>
            </div>
          </div>

          {/* CTA Block */}
          <div className="mt-20 text-center py-16 border border-border/30 bg-accent/10">
            <Mail className="mx-auto mb-6 text-muted-foreground" size={32} />
            <h3 className="font-sans text-2xl md:text-3xl tracking-wider text-foreground mb-4">QUER NOS CONTRATAR?</h3>
            <p className="font-serif italic text-muted-foreground max-w-md mx-auto mb-8">
              Para shows, festivais e eventos especiais, entre em contato através do email.
            </p>
            <Link
              href="mailto:osnovosprofetasdaboemia@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/50 hover:border-foreground hover:bg-foreground hover:text-background transition-all"
            >
              <span className="font-sans text-sm tracking-[0.25em]">ENTRAR EM CONTATO</span>
            </Link>
          </div>

          {/* Warning */}
          <div className="mt-16 text-center">
            <p className="font-serif italic text-muted-foreground/60 text-sm">
              ⚠ Responderemos quando a boemia permitir ⚠
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
