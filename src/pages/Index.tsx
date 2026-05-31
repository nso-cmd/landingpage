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

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Hero />
    <WhatYouLearn />
    <Benefits />
    <Guarantee />
    <Testimonials />
    <Author />
    <FAQ />
    <FinalCTA />
    <Footer />
    <Chatbot />
  </main>
);

export default Index;
