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
          <p className="text-gold uppercase tracking-[0.3em] text-xs">Garantia</p>
          <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">
            Risco Zero <span className="text-gradient-gold">para Você</span>
          </h3>
          <p className="mt-3 text-muted-foreground">
            Experimente o conteúdo por 7 dias. Caso não fique satisfeito, solicite o reembolso
            dentro do prazo — devolvemos 100% do seu investimento, sem perguntas e sem burocracia.
          </p>
        </div>
      </div>
    </div>
  </section>
);