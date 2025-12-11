import Link from "next/link"
import { Youtube, Play } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { songs } from "@/lib/band-data"

const streamingLinks = [
  { name: "SPOTIFY", href: "https://open.spotify.com/intl-pt/artist/33nhxkKo0qdlIZBa5mRU2Q?si=iIGoRF26Tbum6puPnETO7g"},
  { name: "APPLE MUSIC", href: "https://music.apple.com/us/artist/os-novos-profetas-da-bo%C3%AAmia/1858023342?uo=4"},
  { name: "DEEZER", href: "https://www.deezer.com/br/artist/359345772?app_id=140685"},
  { name: "YOUTUBE", href: "https://youtube.com/@osnovosprofetasdaboemia"}
]

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-background noise-overlay flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-serif italic text-muted-foreground text-sm tracking-[0.3em] mb-4">
              — OS NOVOS PROFETAS DA BOÊMIA —
            </p>
            <h1 className="font-sans text-5xl md:text-7xl tracking-wider text-foreground">MÚSICAS</h1>
          </div>

          {/* Songs List */}
          <div className="space-y-1">
            {songs.map((song, index) => (
              <div
                key={song.title}
                className="group border-b border-border/30 py-8 hover:bg-accent/20 transition-colors px-4 -mx-4"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-6">
                    {/* Track Number */}
                    <span className="font-sans text-4xl md:text-5xl text-muted-foreground/30 w-16 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h2 className="font-sans text-2xl md:text-3xl tracking-wider text-foreground group-hover:text-foreground transition-colors">
                        {song.title.toUpperCase()}
                      </h2>
                      <p className="font-serif italic text-muted-foreground mt-1">{song.description}</p>
                      <p className="font-sans text-xs tracking-[0.2em] text-muted-foreground/60 mt-2">{song.year}</p>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 shrink-0">
                    <Link
                      href={song.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border/50 hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                      aria-label={`Ouvir ${song.title} no Spotify`}
                    >
                      <Play size={16} />
                    </Link>
                    <Link
                      href={song.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border/50 hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                      aria-label={`Assistir ${song.title} no YouTube`}
                    >
                      <Youtube size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Streaming Platforms */}
          <div className="mt-20 pt-12 border-t border-border/30">
            <p className="text-center font-sans text-sm tracking-[0.25em] text-muted-foreground mb-8">
              OUÇA EM TODAS AS PLATAFORMAS
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {streamingLinks.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border/50 hover:border-foreground hover:bg-foreground hover:text-background transition-all text-xs tracking-[0.2em] text-muted-foreground hover:text-background"
                >
                  {platform.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Album Teaser */}
          <div className="mt-20 text-center py-16 border border-border/30 bg-accent/10">
            <p className="font-serif italic text-muted-foreground text-sm tracking-[0.2em] mb-4">EM BREVE</p>
            <h3 className="font-sans text-3xl md:text-5xl tracking-wider text-foreground">ÁLBUM COMPLETO</h3>
            <p className="font-sans text-6xl md:text-8xl tracking-wider text-foreground/20 mt-4">2026</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
