import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Para quem é o ebook?", a: "Para criadores, consultores, especialistas e empreendedores digitais que querem estruturar autoridade e renda online." },
  { q: "Como recebo o material?", a: "O acesso é enviado por e-mail imediatamente após a confirmação do pagamento, em formato PDF de alta qualidade." },
  { q: "Preciso ter experiência prévia?", a: "Não. O conteúdo é estruturado para iniciantes e também aprofunda estratégias para quem já está no jogo." },
  { q: "Posso ler no celular?", a: "Sim. O ebook foi projetado para leitura confortável em qualquer dispositivo." },
  { q: "Tem garantia?", a: "Sim — 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor." },
];

export const FAQ = () => (
  <section className="py-24 bg-navy-deep">
    <div className="container mx-auto max-w-3xl">
      <div className="text-center">
        <p className="text-gold uppercase tracking-[0.3em] text-xs">Dúvidas</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold">Perguntas frequentes</h2>
      </div>
      <Accordion type="single" collapsible className="mt-12 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="rounded-xl bg-card-gradient gold-border px-6 border-b-0">
            <AccordionTrigger className="text-left font-display text-lg hover:text-gold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);