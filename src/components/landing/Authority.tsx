import { CheckCircle2, Sparkles } from "lucide-react";

const points = [
  "Material desenvolvido com base em estratégias atuais de crescimento digital.",
  "Linguagem prática e objetiva.",
  "Aplicação imediata.",
  "Focado em resultados reais.",
];

const triggers = [
  "Baseado em princípios modernos de crescimento digital.",
  "Centenas de leitores aplicando esse método.",
  "Pagamento protegido e garantia de 7 dias.",
  "Passo a passo estruturado.",
  "Mais do que um ebook — um plano de execução.",
];

export const Authority = () => (
  <section className="py-24 bg-navy-deep">
    <div className="container mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-3xl bg-card-gradient gold-border p-10 md:p-14">
        <div className="absolute -top-24 -right-24 h-72 w-72 bg-gold-gradient rounded-full blur-3xl opacity-20" />
        <div className="relative grid md:grid-cols-2 gap-10">
          <div>
            <div className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.3em]">
              <Sparkles className="h-4 w-4" /> Por que confiar
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">
              Um método estruturado para <span className="text-gradient-gold">resultados reais</span>
            </h2>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            {triggers.map((t) => (
              <div key={t} className="px-4 py-3 rounded-lg bg-background/40 border border-gold/20 text-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);