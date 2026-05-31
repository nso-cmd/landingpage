import { ShieldCheck } from "lucide-react";

export const Guarantee = () => (
  <section className="py-20">
    <div className="container mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-3xl bg-card-gradient gold-border p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">
        <div className="absolute -top-20 -right-20 h-60 w-60 bg-gold-gradient rounded-full blur-3xl opacity-20" />
        <div className="relative h-28 w-28 rounded-full bg-gold-gradient flex items-center justify-center shrink-0 animate-glow-pulse">
          <ShieldCheck className="h-14 w-14 text-navy-deep" />
        </div>
        <div className="relative text-center md:text-left">
          <h3 className="font-display text-2xl md:text-3xl font-bold">Garantia incondicional de 7 dias</h3>
          <p className="mt-3 text-muted-foreground">
            Leia o ebook, aplique as estratégias e, se por qualquer motivo não enxergar valor,
            devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </div>
  </section>
);