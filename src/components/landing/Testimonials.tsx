import { Star } from "lucide-react";

const testimonials = [
  { name: "Mariana Castro", role: "Consultora de carreira", text: "Em 60 dias dobrei meu engajamento e fechei 3 contratos premium aplicando o método. Vale 10x o preço." },
  { name: "Rafael Lima", role: "Criador de conteúdo", text: "Finalmente entendi como transformar meu conhecimento em produto. Saí da estagnação e estruturei uma esteira de receita." },
  { name: "Juliana Prado", role: "Mentora de negócios", text: "O ebook mais direto e estratégico que já li sobre crescimento digital. Sem enrolação, só o que funciona." },
];

export const Testimonials = () => (
  <section className="py-24">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gold uppercase tracking-[0.3em] text-xs">Depoimentos</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold">Quem aplicou, transformou</h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure key={t.name} className="p-8 rounded-2xl bg-card-gradient gold-border flex flex-col">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
            </div>
            <blockquote className="text-foreground/90 italic">"{t.text}"</blockquote>
            <figcaption className="mt-6 pt-6 border-t border-border">
              <div className="font-display text-lg">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);