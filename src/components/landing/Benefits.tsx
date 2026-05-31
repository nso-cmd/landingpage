import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Clareza total sobre o próximo passo do seu crescimento digital",
  "Aumento mensurável de autoridade e percepção de valor",
  "Mais oportunidades de parcerias, vendas e clientes premium",
  "Conteúdos estratégicos que vendem sem parecer venda",
  "Liberdade para escalar receita sem depender de algoritmo",
  "Confiança para se posicionar como referência no seu mercado",
];

export const Benefits = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-background to-navy-deep" />
    <div className="container mx-auto relative grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-gold uppercase tracking-[0.3em] text-xs">Resultados</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold">
          O que <span className="text-gradient-gold">muda</span> na sua jornada
        </h2>
        <p className="mt-4 text-muted-foreground max-w-lg">
          Mais do que um ebook: um plano de ação completo para você parar de adivinhar e começar a colher resultados.
        </p>
      </div>
      <ul className="space-y-4">
        {benefits.map((b) => (
          <li key={b} className="flex gap-4 p-5 rounded-xl bg-card-gradient gold-border">
            <CheckCircle2 className="h-6 w-6 text-gold shrink-0 mt-0.5" />
            <span className="text-foreground/90">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);