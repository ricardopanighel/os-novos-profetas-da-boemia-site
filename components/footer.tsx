import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="relative h-10 w-20">
              <Image
              src="/images/logo.png"
              alt="Logo da banda Os Novos Profetas da Boemia"
              fill
              className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 invert"
              />
            </div>

            <p className="font-serif italic text-muted-foreground text-sm mt-1">
              Os Novos Profetas da Boêmia
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="/sobre"
              className="text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              SOBRE
            </Link>
            <Link
              href="/musicas"
              className="text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              MÚSICAS
            </Link>
            <Link
              href="/contatos"
              className="text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              CONTATO
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} — A PROFECIA CONTINUA
          </p>
        </div>
      </div>
    </footer>
  );
}
