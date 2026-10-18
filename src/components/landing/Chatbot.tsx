import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICE } from "@/config/checkout";

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
    `Hoje, o pacote completo (ebook + 4 bônus, valor total de ${PRICE.full}) sai por apenas ${PRICE.today}. Pague via Pix, cartão ou boleto; o acesso é enviado após a confirmação do pagamento.`,
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
        "Sou um assistente automático e posso responder às perguntas abaixo sobre conteúdo, preço, entrega, compra e garantia. Escolha uma delas para continuar.";
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 700);
  };

  return (
    <>
      <Button
        variant="hero"
        size="icon"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Fechar chat" : "Abrir chat"}
        aria-expanded={open}
        aria-controls="mapa-chat"
        className="fixed bottom-[calc(6rem+env(safe-area-inset-bottom))] right-4 sm:bottom-24 sm:right-6 z-50 h-12 w-12 rounded-full"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {open && (
        <div id="mapa-chat" role="dialog" aria-label="Atendimento Mapa Digital" className="fixed bottom-[calc(9.5rem+env(safe-area-inset-bottom))] right-4 sm:right-6 z-50 w-[calc(100%-2rem)] max-w-sm h-[min(560px,calc(100dvh-11rem))] rounded-lg bg-card gold-border shadow-elegant overflow-hidden animate-fade-up flex flex-col">
          <div className="p-4 bg-gold-gradient text-navy-deep shrink-0">
            <div className="font-display font-bold">Atendimento Mapa Digital</div>
            <div className="text-xs opacity-80">Assistente virtual</div>
          </div>

          <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 space-y-3" aria-live="polite">
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
                  <Button
                    variant="outline"
                    key={q}
                    onClick={() => send(q)}
                    className="justify-start h-auto min-h-11 whitespace-normal text-left text-sm px-3 py-2 rounded-lg gold-border bg-transparent hover:bg-gold/10 hover:text-foreground"
                  >
                    {q}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="p-3 border-t border-border flex gap-2 shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreva sua dúvida..."
              aria-label="Sua dúvida"
              className="flex-1 min-w-0 bg-muted text-base rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gold"
            />
            <Button type="submit" size="icon" variant="hero" aria-label="Enviar" className="h-11 w-11 shrink-0" disabled={!input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};