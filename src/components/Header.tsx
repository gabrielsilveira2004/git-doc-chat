import { MessageSquare, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  onChatOpen: () => void;
}

const Header = ({ onChatOpen }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-3 group">
            <svg className="h-10 w-10 transition-transform group-hover:scale-110" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M92 46c0 25.405-20.595 46-46 46S0 71.405 0 46 20.595 0 46 0s46 20.595 46 46z" fill="hsl(var(--primary))"/>
              <path d="M67.742 28.258l-38.5 38.5-10-10 38.5-38.5 10 10z" fill="white"/>
              <path d="M24.258 67.742l38.5-38.5 10 10-38.5 38.5-10-10z" fill="white" opacity="0.8"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">git</span>
              <span className="text-xs text-muted-foreground">--fast-version-control</span>
            </div>
          </a>
          
          <nav className="hidden lg:flex gap-1">
            <a href="#about" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-md transition-colors">
              About
            </a>
            <a href="#docs" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-md transition-colors">
              Documentation
            </a>
            <a href="#downloads" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-md transition-colors">
              Downloads
            </a>
            <a href="#community" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-md transition-colors">
              Community
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search docs..."
              className="w-48 lg:w-64 pl-9 bg-muted/50 border-primary/20 focus:border-primary"
            />
          </div>
          
          <Button
            onClick={onChatOpen}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-md relative"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Chat with Docs</span>
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-destructive text-white border-2 border-background">
              AI
            </Badge>
          </Button>

          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
