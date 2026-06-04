import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type Msg = { from: "bot" | "user"; text: string };

const quickQuestions = [
  "O que vou aprender?",
  "Para quem é?",
  "Quanto custa?",
  "Como recebo?",
  "Tem garantia?",
  "Como funciona a compra?",
];

const answers: Record<string, string> = {
  "O que vou aprender?":
    "Você vai aprender o mapa completo para transformar conhecimento em autoridade, audiência e renda digital — posicionamento, conteúdo estratégico, crescimento orgânico e monetização. Tudo aplicável imediatamente.",
  "Para quem é?":
    "O ebook foi criado para criadores de conteúdo, especialistas, autônomos, afiliados, infoprodutores e qualquer pessoa que queira construir autoridade e gerar oportunidades através da internet.",
  "Quanto custa?":
    "Hoje, o pacote completo (ebook + 4 bônus, valor total de R$ 239) sai por apenas R$ 39,90 — em até 12x no cartão ou Pix com acesso imediato.",
  "Como recebo?":
    "O acesso é enviado por e-mail imediatamente após a confirmação do pagamento, em PDF de alta qualidade. Você pode ler no celular, tablet ou computador.",
  "Tem garantia?":
    "Sim. Você possui 7 dias de garantia para solicitar reembolso caso o material não atenda às suas expectativas.",
  "Como funciona a compra?":
    "Clique em 'Quero Meu Ebook Agora', finalize seu pagamento via Pix, Cartão ou Boleto em ambiente 100% seguro, e receba o acesso digital imediatamente após a confirmação.",
};

export const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Olá! 👋 Posso ajudar você a descobrir se o Mapa do Crescimento Digital é ideal para o seu momento." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Msg = { from: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => {
      const reply = answers[text] ||
        "Ótima pergunta! Nossa equipe responde em instantes — enquanto isso, garanta seu acesso pelo botão 'Quero meu Ebook Agora'. Posso ajudar com mais alguma coisa?";
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 700);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Abrir chat"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gold-gradient text-navy-deep shadow-gold flex items-center justify-center hover:scale-110 transition-transform animate-glow-pulse"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm rounded-2xl bg-card gold-border shadow-elegant overflow-hidden animate-fade-up flex flex-col" style={{ height: "min(560px, 75vh)" }}>
          <div className="p-4 bg-gold-gradient text-navy-deep">
            <div className="font-display font-bold">Atendimento Mapa Digital</div>
            <div className="text-xs opacity-80">Online · Responde em instantes</div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${m.from === "user" ? "bg-gold text-navy-deep" : "bg-muted text-foreground"}`}>
                  {m.text}
                </div>
              </div>
            ))}

            <div className="pt-2 space-y-2">
              <p className="text-xs text-muted-foreground">Perguntas rápidas:</p>
              <div className="grid grid-cols-1 gap-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-left text-xs px-3 py-2 rounded-lg gold-border hover:bg-gold/10 hover:border-gold/60 transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="p-3 border-t border-border flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreva sua dúvida..."
              className="flex-1 bg-muted text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gold"
            />
            <Button type="submit" size="icon" variant="hero" aria-label="Enviar">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};