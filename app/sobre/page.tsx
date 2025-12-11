import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background noise-overlay flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-serif italic text-muted-foreground text-sm tracking-[0.3em] mb-4">— A HISTÓRIA —</p>
            <h1 className="font-sans text-5xl md:text-7xl tracking-widerd text-[#bb1515]">SOBRE NÓS</h1>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <div className="text-center">
              <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed italic">
                {'"Onde é que está a porra do cavalo?"'}
              </p>
            </div>

            <div className="border-t border-border/30 pt-12 space-y-8">
              <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed">
                Caiçaras de São Vicente, SP (para os desinformados de plantão, a cidade que gerou a Terra de Santa Cruz), a banda Os Novos Profetas da Boemia existe apenas para um fim, muito modesto por sinal: subverter a ordem moral e social, instaurando uma doutrina conhecida como Neoboemia.
              </p>

              <ul className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed">
                Há 4 (quatro) membros componentes deste conjunto: 
                <li>Eduardo Leyser - vocalista e guitarrista solo</li>
                <li>Samuel Peres - vocalista e guitarra rítmica</li>
                <li>Ricardo Lazarini - vocalista, backing vocal e contrabaixo elétrico</li>
                <li>Matheus Menezes - apenas um baterista</li> 
              </ul>

              <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed">
                Inspirados fortemente por sertanejo raiz, country music, bluegrass, iê-iê-iê francês, maracatu baiano e principalmente rock (porra!), a banda promete tentar inovar em alguma coisa na música. Espero que consigam.
              </p>
            </div>

            {/* Final Statement */}
            <div className="pt-12 text-center">
              <p className="font-serif italic text-muted-foreground tracking-[0.2em]">— Make Boemia Great Again —</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
