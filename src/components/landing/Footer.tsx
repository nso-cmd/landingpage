import brandCompass from "@/assets/brand-compass.png";

export const Footer = () => (
  <footer className="border-t border-border bg-navy-deep">
    <div className="container mx-auto py-12 grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div className="flex items-center gap-2">
          <img src={brandCompass} alt="Mapa Digital" width={40} height={40} loading="lazy" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg">Mapa Digital</span>
        </div>
        <p className="mt-4 text-muted-foreground">Estratégia digital para quem quer transformar conhecimento em legado.</p>
      </div>
      <div>
        <h4 className="font-display text-base mb-3 text-gold">Institucional</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li><a href="#comprar" className="hover:text-gold transition-colors">Quero o ebook</a></li>
          <li><a href="mailto:contato@mapadigital.com.br" className="hover:text-gold transition-colors">Política de Privacidade</a></li>
          <li><a href="mailto:contato@mapadigital.com.br" className="hover:text-gold transition-colors">Política de Reembolso</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-base mb-3 text-gold">Contato</h4>
        <p className="text-muted-foreground">contato@mapadigital.com.br</p>
        <p className="text-muted-foreground mt-2">Suporte em até 24h úteis</p>
      </div>
    </div>
    <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Mapa Digital · Todos os direitos reservados.
    </div>
  </footer>
);