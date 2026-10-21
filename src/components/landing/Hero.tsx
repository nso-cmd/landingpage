import { Button } from "@/components/ui/button";
import { ShieldCheck, Star, Lock } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";
import brandCompass from "@/assets/brand-compass.png";
import { CHECKOUT_URL, PRICE } from "@/config/checkout";

export const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-hero">
      <nav className="relative z-10 container mx-auto flex items-center justify-between py-4 md:py-6">
        <div className="flex items-center gap-2">
          <img src={brandCompass} alt="Mapa Digital" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="font-display text-lg tracking-wide">Mapa Digital</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-4 w-4 text-gold" /> Compra 100% segura
        </div>
      </nav>

      <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-4 pb-10 lg:pt-16 lg:pb-24">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-wide text-gold">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            Sistema completo de crescimento digital
          </div>
          <h1 className="mt-4 font-display text-[1.75rem] sm:text-4xl md:text-[3.4rem] leading-[1.15] md:leading-[1.05] font-bold">
            Transforme seu conhecimento em <span className="text-gradient-gold">autoridade, audiência e renda digital</span> — mesmo começando do zero.
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
            Descubra o passo a passo utilizado para construir uma presença digital que gera influência,
            oportunidades e crescimento real.
          </p>

          <img src={ebookCover} alt="Capa do ebook O Mapa do Crescimento Digital" width={1024} height={1536} className="lg:hidden mx-auto mt-5 h-44 sm:h-64 w-auto object-contain drop-shadow-xl" />

          <div className="mt-5 lg:mt-8 flex flex-col gap-3">
            <p className="text-sm text-muted-foreground">Ebook + 4 bônus por <strong className="text-gold text-lg">{PRICE.today}</strong></p>
            <Button size="xl" variant="hero" className="w-full sm:w-fit px-5 sm:px-10" asChild>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">Quero Meu Ebook Agora</a>
            </Button>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 shrink-0 text-gold" />
              Pagamento protegido · Garantia de 7 dias
            </div>
          </div>

          <div className="mt-5 lg:mt-10 text-xs text-muted-foreground">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="flex gap-1" aria-label="5 estrelas">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-gold text-gold" />)}</span>
              <span>Centenas de leitores aplicando o método</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:flex justify-center animate-fade-in">
          <img
            src={ebookCover}
            alt="Capa do ebook O Mapa do Crescimento Digital"
            width={1024}
            height={1536}
            className="relative max-h-[380px] sm:max-h-[480px] md:max-h-[560px] w-auto animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
};