import { Button } from "@/components/ui/button";
import { ShieldCheck, Star, Lock } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";
import { CHECKOUT_URL } from "@/config/checkout";

export const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--gold) / 0.18), transparent 40%), radial-gradient(circle at 80% 60%, hsl(var(--copper) / 0.15), transparent 45%)" }} />
      <nav className="relative z-10 container mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gold-gradient flex items-center justify-center font-display text-navy-deep font-bold">M</div>
          <span className="font-display text-lg tracking-wide">Mapa Digital</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-4 w-4 text-gold" /> Compra 100% segura
        </div>
      </nav>

      <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-12 items-center pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full gold-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest text-gold">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            Sistema completo de crescimento digital
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-[3.4rem] leading-[1.05] font-bold">
            Transforme seu conhecimento em <span className="text-gradient-gold">autoridade, audiência e renda digital</span> — mesmo começando do zero.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Descubra o passo a passo utilizado para construir uma presença digital que gera influência,
            oportunidades e crescimento real.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="xl" variant="hero" asChild>
              <a href={CHECKOUT_URL}>Quero Meu Ebook Agora</a>
            </Button>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-gold" />
              Pagamento protegido · Garantia de 7 dias
            </div>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              <span className="ml-2">Centenas de leitores aplicando o método</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center animate-fade-in">
          <div className="absolute inset-0 bg-gold-gradient blur-3xl opacity-25 rounded-full" />
          <img
            src={ebookCover}
            alt="Capa do ebook O Mapa do Crescimento Digital"
            width={1024}
            height={1536}
            className="relative max-h-[560px] w-auto animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
};