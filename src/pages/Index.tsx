import { Hero } from "@/components/landing/Hero";
import { WhatYouLearn } from "@/components/landing/WhatYouLearn";
import { Benefits } from "@/components/landing/Benefits";
import { Author } from "@/components/landing/Author";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Guarantee } from "@/components/landing/Guarantee";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Chatbot } from "@/components/landing/Chatbot";
import { Offer } from "@/components/landing/Offer";
import { Authority } from "@/components/landing/Authority";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { InlineCTA } from "@/components/landing/InlineCTA";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Hero />
    <WhatYouLearn />
    <Benefits />
    <InlineCTA eyebrow="Comece hoje" />
    <Authority />
    <Offer />
    <InlineCTA eyebrow="Oferta por tempo limitado" />
    <Testimonials />
    <InlineCTA eyebrow="Junte-se a quem já aplica" />
    <Guarantee />
    <Author />
    <FAQ />
    <FinalCTA />
    <Footer />
    <StickyCTA />
    <Chatbot />
  </main>
);

export default Index;
