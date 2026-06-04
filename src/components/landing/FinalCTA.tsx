import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, PRICE } from "@/config/checkout";
import { Lock, ShieldCheck, CreditCard, BadgeCheck } from "lucide-react";

export const FinalCTA = () => (
  <section className="py-20 bg-hero">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="font-display text-3xl md:text-5xl font-bold">
        Seu próximo nível começa <span className="text-gradient-gold">hoje</span>
      </h2>
      <p className="mt-4 text-muted-foreground">
        Comece agora, aplique nos próximos dias, transforme nas próximas semanas.
      </p>
      <div className="mt-8 flex items-baseline justify-center gap-3">
        <span className="text-sm text-muted-foreground line-through">{PRICE.full}</span>
        <span className="font-display text-5xl text-gradient-gold font-bold">{PRICE.today}</span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{PRICE.installments}</p>
      <Button size="xl" variant="hero" className="mt-8" asChild>
        <a href={CHECKOUT_URL}>Quero Meu Ebook Agora</a>
      </Button>
      <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-gold" /> Compra 100% segura</span>
        <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-gold" /> Ambiente protegido</span>
        <span className="flex items-center gap-1.5"><CreditCard className="h-4 w-4 text-gold" /> Pix · Cartão · Boleto</span>
        <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gold" /> Garantia 7 dias</span>
      </div>
    </div>
  </section>
);