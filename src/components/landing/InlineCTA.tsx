import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, PRICE } from "@/config/checkout";
import { Lock, ShieldCheck, CreditCard } from "lucide-react";

type Props = { label?: string; eyebrow?: string };

export const InlineCTA = ({
  label = "Quero Meu Ebook Agora",
  eyebrow,
}: Props) => (
  <section className="py-12">
    <div className="container mx-auto max-w-4xl">
      <div className="rounded-2xl bg-card-gradient gold-border p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="flex-1">
          {eyebrow && (
            <p className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs">{eyebrow}</p>
          )}
          <p className="font-display text-xl md:text-2xl mt-1">
            Garanta o acesso por apenas{" "}
            <span className="text-gradient-gold font-bold">{PRICE.today}</span>
          </p>
          <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1"><Lock className="h-3.5 w-3.5 text-gold" /> Compra segura</span>
            <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-gold" /> Garantia 7 dias</span>
            <span className="flex items-center gap-1"><CreditCard className="h-3.5 w-3.5 text-gold" /> Pix · Cartão · Boleto</span>
          </div>
        </div>
        <Button size="xl" variant="hero" className="w-full md:w-auto" asChild>
          <a href={CHECKOUT_URL}>{label}</a>
        </Button>
      </div>
    </div>
  </section>
);