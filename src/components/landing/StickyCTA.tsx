import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, PRICE } from "@/config/checkout";
import { ShieldCheck } from "lucide-react";

export const StickyCTA = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <div className="mx-auto max-w-5xl sm:mb-3 sm:rounded-lg bg-card/95 backdrop-blur border-t border-gold/30 sm:gold-border shadow-elegant px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-4 sm:py-3 flex items-center justify-between gap-3">
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
        <div className="flex sm:hidden items-center gap-2 min-w-0 flex-1">
          <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground leading-tight">
              <span className="block">Ebook + 4 bônus</span>
              <span className="text-gold text-lg font-semibold">{PRICE.today}</span>
            </div>
          </div>
        </div>
        <Button size="default" variant="hero" className="ml-auto h-12 shrink-0 text-sm px-5 sm:text-base sm:px-6" asChild>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" tabIndex={show ? 0 : -1}>
            <span className="sm:hidden">Quero agora</span>
            <span className="hidden sm:inline">Quero Meu Ebook Agora</span>
          </a>
        </Button>
      </div>
    </div>
  );
};