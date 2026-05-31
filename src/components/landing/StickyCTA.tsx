import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, PRICE } from "@/config/checkout";
import { ShieldCheck } from "lucide-react";

export const StickyCTA = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-5xl m-3 rounded-2xl bg-card/95 backdrop-blur gold-border shadow-elegant px-4 py-3 flex items-center justify-between gap-3">
        <div className="hidden sm:flex items-center gap-3 min-w-0">
          <ShieldCheck className="h-5 w-5 text-gold shrink-0" />
          <div className="min-w-0">
            <div className="font-display text-sm truncate">O Mapa do Crescimento Digital</div>
            <div className="text-xs text-muted-foreground">
              <span className="line-through mr-2">{PRICE.full}</span>
              <span className="text-gold font-semibold">{PRICE.today}</span>
            </div>
          </div>
        </div>
        <Button size="lg" variant="hero" className="ml-auto" asChild>
          <a href={CHECKOUT_URL}>Quero Meu Ebook Agora</a>
        </Button>
      </div>
    </div>
  );
};