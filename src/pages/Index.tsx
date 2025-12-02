import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DocSection from "@/components/DocSection";
import DocChat from "@/components/DocChat";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onChatOpen={() => setIsChatOpen(true)} />
      <main>
        <Hero />
        <Features />
        <DocSection onChatOpen={() => setIsChatOpen(true)} />
      </main>
      <footer className="border-t py-8 mt-20">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Git is a member of Software Freedom Conservancy</p>
        </div>
      </footer>
      <DocChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
