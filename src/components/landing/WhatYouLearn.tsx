import { Compass, TrendingUp, Target, Sparkles, Users, DollarSign } from "lucide-react";

const items = [
  { icon: Compass, title: "Posicionamento de autoridade", desc: "Defina um nicho lucrativo e construa uma marca pessoal magnética." },
  { icon: TrendingUp, title: "Crescimento orgânico real", desc: "Métodos atualizados para escalar seguidores qualificados em 90 dias." },
  { icon: Target, title: "Conteúdo que converte", desc: "Frameworks de copy e roteiros prontos para criar conteúdos virais e estratégicos." },
  { icon: Sparkles, title: "Marca pessoal premium", desc: "Identidade visual, narrativa e percepção de valor de uma marca consolidada." },
  { icon: Users, title: "Audiência engajada", desc: "Como transformar seguidores em fãs e fãs em clientes recorrentes." },
  { icon: DollarSign, title: "Monetização inteligente", desc: "5 modelos de receita validados para criadores e especialistas digitais." },
];

export const WhatYouLearn = () => (
  <section className="py-24 bg-navy-deep">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gold uppercase tracking-[0.3em] text-xs">Conteúdo</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold">O que você vai aprender</h2>
        <p className="mt-4 text-muted-foreground">Um mapa passo a passo — sem teoria genérica — para transformar conhecimento em resultado.</p>
      </div>
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="group p-8 rounded-2xl bg-card-gradient gold-border hover:border-gold/60 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-xl bg-gold-gradient flex items-center justify-center text-navy-deep mb-5 group-hover:scale-110 transition-transform">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl mb-2">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);