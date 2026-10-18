import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Download } from "lucide-react";
import { CHECKOUT_URL } from "@/config/checkout";

const steps = [
  { icon: Mail, title: "Confirme seu e-mail", desc: "Acabamos de enviar o acesso ao ebook e bônus para o e-mail informado na compra." },
  { icon: Download, title: "Baixe seu material", desc: "Acesse o link de download e salve o material em seu dispositivo." },
];

const Obrigado = () => (
  <main className="min-h-screen bg-hero text-foreground">
    <div className="container mx-auto py-20 max-w-3xl text-center">
      <div className="mx-auto h-20 w-20 rounded-full bg-gold-gradient flex items-center justify-center animate-glow-pulse">
        <CheckCircle2 className="h-10 w-10 text-navy-deep" />
      </div>
      <h1 className="mt-8 font-display text-4xl md:text-5xl font-bold">
        Parabéns pela sua <span className="text-gradient-gold">decisão</span>.
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Seu acesso já está sendo preparado.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-4 text-left">
        {steps.map((s, i) => (
          <div key={s.title} className="p-6 rounded-2xl bg-card-gradient gold-border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gold-gradient flex items-center justify-center text-navy-deep">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-gold">Passo {i + 1}</span>
            </div>
            <h3 className="mt-4 font-display text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Button size="xl" variant="hero" className="w-full sm:w-auto px-5 sm:px-10" asChild>
          <a href={CHECKOUT_URL}>Voltar à página de compra</a>
        </Button>
      </div>
    </div>
  </main>
);

export default Obrigado;
