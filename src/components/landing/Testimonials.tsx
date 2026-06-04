import { Star } from "lucide-react";

const testimonials = [
  { name: "Lucas M.", role: "Criador de conteúdo", text: "Eu consumia muito conteúdo sobre marketing digital, mas nunca conseguia colocar em prática. O ebook me ajudou a organizar minhas ideias e finalmente criar um plano." },
  { name: "Fernanda R.", role: "Consultora", text: "A leitura é simples e objetiva. Em poucos dias já consegui enxergar oportunidades que eu não estava percebendo." },
  { name: "Guilherme S.", role: "Infoprodutor", text: "Gostei porque não é um material cheio de teoria. Dá para aplicar imediatamente." },
  { name: "Camila A.", role: "Empreendedora digital", text: "Comprei esperando algumas dicas e recebi um verdadeiro mapa para organizar minha presença digital." },
];

export const Testimonials = () => (
  <section className="py-24">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gold uppercase tracking-[0.3em] text-xs">Depoimentos</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold">Quem aplicou, transformou</h2>
      </div>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t) => (
          <figure key={t.name} className="p-8 rounded-2xl bg-card-gradient gold-border flex flex-col hover:border-gold/50 transition-colors">
            <div className="flex gap-1 mb-4" aria-label="Avaliação 5 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
            </div>
            <blockquote className="text-foreground/90 italic text-sm leading-relaxed">"{t.text}"</blockquote>
            <figcaption className="mt-6 pt-6 border-t border-border flex items-center gap-3">
              <div
                aria-hidden
                className="h-12 w-12 rounded-full bg-gold-gradient flex items-center justify-center font-display text-navy-deep font-bold text-lg shrink-0"
              >
                {t.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="font-display text-base truncate">{t.name}</div>
                <div className="text-xs text-muted-foreground truncate">{t.role} · Leitor verificado</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);