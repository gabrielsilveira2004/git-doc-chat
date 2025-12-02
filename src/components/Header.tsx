import { MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onChatOpen: () => void;
}

const Header = ({ onChatOpen }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <svg className="h-10 w-10" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M92 46c0 25.405-20.595 46-46 46S0 71.405 0 46 20.595 0 46 0s46 20.595 46 46z" fill="hsl(var(--primary))"/>
              <path d="M67.742 28.258l-38.5 38.5-10-10 38.5-38.5 10 10z" fill="white"/>
              <path d="M24.258 67.742l38.5-38.5 10 10-38.5 38.5-10-10z" fill="white" opacity="0.8"/>
            </svg>
            <span className="text-2xl font-bold text-foreground">git</span>
            <span className="text-sm text-muted-foreground">--fast-version-control</span>
          </a>
          
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
            <a href="#downloads" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Downloads
            </a>
            <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Type / to search..."
              className="w-64 pl-9 bg-muted/50"
            />
          </div>
          
          <Button
            onClick={onChatOpen}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Chat with Docs</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
