import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DocSection from "@/components/DocSection";
import DownloadSection from "@/components/DownloadSection";
import DocChat from "@/components/DocChat";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onChatOpen={() => setIsChatOpen(true)} />
      <main>
        <Hero />
        <Features />
        <DownloadSection />
        <DocSection onChatOpen={() => setIsChatOpen(true)} />
      </main>
      <footer className="border-t-2 border-primary/20 py-8 mt-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Git is a member of <span className="text-primary font-medium">Software Freedom Conservancy</span></p>
        </div>
      </footer>
      <DocChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
