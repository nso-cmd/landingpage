import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, PRICE } from "@/config/checkout";

export const FinalCTA = () => (
  <section className="py-20">
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
      <Button size="xl" variant="hero" className="mt-8" asChild>
        <a href={CHECKOUT_URL}>Quero Meu Ebook Agora</a>
      </Button>
    </div>
  </section>
);