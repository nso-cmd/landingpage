import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, Mail, Download } from "lucide-react";
import { WHATSAPP_GROUP_URL } from "@/config/checkout";

const steps = [
  { icon: Mail, title: "Confirme seu e-mail", desc: "Acabamos de enviar o acesso ao ebook e bônus para o e-mail informado na compra." },
  { icon: Download, title: "Baixe seu material", desc: "Acesse o link de download e salve o material em seu dispositivo." },
  { icon: MessageCircle, title: "Entre no grupo exclusivo", desc: "Continue sendo acompanhado com conteúdos extras, lives e tira-dúvidas no WhatsApp." },
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

      <div className="mt-12 grid md:grid-cols-3 gap-4 text-left">
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

      <div className="mt-12 p-8 rounded-3xl bg-card-gradient border border-gold/60 shadow-gold">
        <h2 className="font-display text-2xl md:text-3xl font-bold">Acesso ao grupo exclusivo</h2>
        <p className="mt-3 text-muted-foreground">
          Entre agora no grupo do WhatsApp e continue sendo acompanhado na sua jornada de crescimento digital.
        </p>
        <Button size="xl" variant="hero" className="mt-6" asChild>
          <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noreferrer">
            <MessageCircle className="h-5 w-5" />
            Entrar no Grupo Exclusivo do WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </main>
);

export default Obrigado;