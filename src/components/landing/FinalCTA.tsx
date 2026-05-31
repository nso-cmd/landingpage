import { Button } from "@/components/ui/button";
import { Lock, ShieldCheck, CreditCard } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";

export const FinalCTA = () => (
  <section id="comprar" className="py-24 bg-hero relative overflow-hidden">
    <div className="absolute inset-0 opacity-40"
      style={{ backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--gold) / 0.18), transparent 60%)" }} />
    <div className="container mx-auto relative grid lg:grid-cols-2 gap-12 items-center max-w-5xl">
      <div className="flex justify-center">
        <img src={ebookCover} alt="" width={1024} height={1536} loading="lazy" className="max-h-[420px] w-auto drop-shadow-2xl animate-float" />
      </div>
      <div className="text-center lg:text-left">
        <p className="text-gold uppercase tracking-[0.3em] text-xs">Oferta exclusiva</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold">
          Seu próximo nível começa <span className="text-gradient-gold">hoje</span>
        </h2>
        <p className="mt-4 text-muted-foreground">Acesso imediato. Para sempre seu. Garantia de 7 dias.</p>

        <div className="mt-8 flex items-baseline justify-center lg:justify-start gap-3">
          <span className="text-sm text-muted-foreground line-through">De R$ 97</span>
          <span className="font-display text-5xl text-gradient-gold font-bold">R$ 47</span>
          <span className="text-sm text-muted-foreground">à vista</span>
        </div>

        <Button size="xl" variant="hero" className="mt-8 w-full sm:w-auto">
          Quero meu Ebook Agora
        </Button>

        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-5 text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><Lock className="h-4 w-4 text-gold" /> Pagamento seguro</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Garantia 7 dias</span>
          <span className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-gold" /> Pix · Cartão · Boleto</span>
        </div>
      </div>
    </div>
  </section>
);