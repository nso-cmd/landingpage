import { Button } from "@/components/ui/button";
import { BookOpen, ClipboardCheck, Calendar, Bot, LineChart, ShieldCheck, Lock, CreditCard } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";
import { CHECKOUT_URL, PRICE } from "@/config/checkout";

const stack = [
  { icon: BookOpen, title: "O Mapa do Crescimento Digital", tag: "Produto principal", value: "R$ 39", highlight: true },
  { icon: ClipboardCheck, title: "Checklist de Crescimento Digital", tag: "Bônus #1", value: "R$ 29" },
  { icon: Calendar, title: "Plano de Ação de 30 Dias", tag: "Bônus #2", value: "R$ 47" },
  { icon: Bot, title: "Prompt Pack para ChatGPT", tag: "Bônus #3", value: "R$ 67" },
  { icon: LineChart, title: "Template de Planejamento de Conteúdo", tag: "Bônus #4", value: "R$ 57" },
];

export const Offer = () => (
  <section id="comprar" className="py-24 bg-hero relative overflow-hidden">
    <div className="absolute inset-0 opacity-40"
      style={{ backgroundImage: "radial-gradient(circle at 50% 30%, hsl(var(--gold) / 0.18), transparent 60%)" }} />
    <div className="container mx-auto relative max-w-6xl">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gold uppercase tracking-[0.3em] text-xs">Oferta completa</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold">
          Um <span className="text-gradient-gold">sistema completo</span> de crescimento digital
        </h2>
        <p className="mt-4 text-muted-foreground">
          Mais do que um ebook — um plano de execução com bônus que aceleram seus primeiros resultados.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
        {/* Stack list */}
        <div className="space-y-3">
          {stack.map((s) => (
            <div
              key={s.title}
              className={`flex items-center gap-4 p-4 md:p-5 rounded-xl bg-card-gradient transition-all ${
                s.highlight ? "border border-gold/60 shadow-gold" : "gold-border"
              }`}
            >
              <div className="h-12 w-12 shrink-0 rounded-lg bg-gold-gradient flex items-center justify-center text-navy-deep">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-gold">{s.tag}</div>
                <div className="font-display text-base md:text-lg truncate">{s.title}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Valor</div>
                <div className="font-display text-lg text-gold">{s.value}</div>
              </div>
            </div>
          ))}

          <div className="mt-6 p-6 rounded-2xl bg-card-gradient border border-gold/60 shadow-gold">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Valor total do pacote</span>
              <span className="line-through text-muted-foreground">{PRICE.full}</span>
            </div>
            <div className="mt-2 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-gold">Hoje você investe</div>
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">{PRICE.today}</div>
                <div className="text-xs text-muted-foreground mt-1">{PRICE.installments}</div>
              </div>
              <div className="rounded-full bg-gold/15 border border-gold/40 px-3 py-1 text-xs text-gold whitespace-nowrap">
                Economize R$ 199,10
              </div>
            </div>
          </div>
        </div>

        {/* CTA card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gold-gradient blur-3xl opacity-20 rounded-full" />
          <div className="relative flex flex-col items-center text-center">
            <img src={ebookCover} alt="" width={1024} height={1536} loading="lazy" className="max-h-[380px] w-auto drop-shadow-2xl animate-float" />
            <Button size="xl" variant="hero" className="mt-8 w-full sm:w-auto" asChild>
              <a href={CHECKOUT_URL}>Quero Meu Ebook Agora</a>
            </Button>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><Lock className="h-4 w-4 text-gold" /> Pagamento seguro</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Garantia 7 dias</span>
              <span className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-gold" /> Pix · Cartão · Boleto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);