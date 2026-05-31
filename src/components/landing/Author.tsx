export const Author = () => (
  <section className="py-24 bg-navy-deep">
    <div className="container mx-auto grid md:grid-cols-[260px_1fr] gap-12 items-center max-w-4xl">
      <div className="relative mx-auto">
        <div className="absolute inset-0 bg-gold-gradient blur-2xl opacity-30 rounded-full" />
        <div className="relative h-56 w-56 rounded-full bg-card-gradient gold-border flex items-center justify-center font-display text-7xl text-gradient-gold">
          A
        </div>
      </div>
      <div>
        <p className="text-gold uppercase tracking-[0.3em] text-xs">Sobre o autor</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">[Nome do Autor]</h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Especialista em estratégia digital e marca pessoal, com mais de uma década ajudando criadores,
          consultores e empreendedores a transformar conhecimento em autoridade e renda recorrente.
          Já impactou diretamente milhares de profissionais que hoje vivem do digital com solidez e propósito.
        </p>
        <p className="mt-4 text-sm text-muted-foreground italic">
          (Este bloco é totalmente editável — substitua pelo seu texto e foto reais.)
        </p>
      </div>
    </div>
  </section>
);