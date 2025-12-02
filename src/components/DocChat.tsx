import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Sparkles, Trash2, BookOpen, Code, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
  suggestions?: string[];
}

interface DocChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const quickPrompts = [
  { icon: BookOpen, text: "How to start with Git?", prompt: "How do I get started with Git?" },
  { icon: Code, text: "Git best practices", prompt: "What are Git best practices?" },
  { icon: GitBranch, text: "Branching strategies", prompt: "Explain Git branching strategies" },
];

const DocChat = ({ isOpen, onClose }: DocChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your Git documentation assistant. Ask me anything about Git commands, workflows, or best practices!",
      suggestions: [
        "How do I create a new branch?",
        "What's the difference between merge and rebase?",
        "How to undo the last commit?"
      ]
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || isLoading) return;

    if (!messageText) setInput("");
    setMessages(prev => [...prev, { role: "user", content: textToSend }]);
    setIsLoading(true);

    // Simulate AI response with suggestions
    setTimeout(() => {
      const responses = [
        {
          content: "Git is a distributed version control system. Each developer has a complete copy of the repository history on their local machine. This allows for offline work and provides redundancy.",
          suggestions: ["Tell me about Git workflows", "How to collaborate with Git?", "Git vs SVN comparison"]
        },
        {
          content: "To create a new branch, use: `git checkout -b <branch-name>`. This creates and switches to the new branch in one command. Alternatively, use `git branch <branch-name>` followed by `git checkout <branch-name>`.",
          suggestions: ["How to delete a branch?", "How to merge branches?", "What are remote branches?"]
        },
        {
          content: "The staging area (index) is an intermediate area where commits can be formatted and reviewed before completing the commit. Use `git add` to stage files and `git commit` to save them.",
          suggestions: ["How to unstage files?", "What is git status?", "Git commit best practices"]
        },
        {
          content: "Use `git rebase` to integrate changes from one branch onto another by rewriting commit history for a linear progression. This is useful for keeping a clean project history.",
          suggestions: ["Rebase vs merge?", "Interactive rebase tutorial", "Resolving rebase conflicts"]
        },
        {
          content: "To undo the last commit while keeping changes: `git reset --soft HEAD~1`. To discard changes: `git reset --hard HEAD~1`. Use with caution as hard reset can't be undone.",
          suggestions: ["How to revert a commit?", "Git reflog explanation", "Recovering lost commits"]
        }
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: randomResponse.content,
        suggestions: randomResponse.suggestions
      }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hi! I'm your Git documentation assistant. Ask me anything about Git commands, workflows, or best practices!",
        suggestions: [
          "How do I create a new branch?",
          "What's the difference between merge and rebase?",
          "How to undo the last commit?"
        ]
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full md:w-[550px] bg-background border-l-2 border-primary/20 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b-2 border-primary/20 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Chat with Git Docs</h2>
              <p className="text-xs text-muted-foreground">AI-powered assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClearChat}
              className="hover:bg-primary/10 text-muted-foreground hover:text-foreground"
              title="Clear chat"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-primary/10 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Quick prompts - shown when chat is empty */}
        {messages.length === 1 && (
          <div className="p-4 border-b bg-muted/30">
            <p className="text-sm font-medium text-foreground mb-3">Quick start:</p>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSend(prompt.prompt)}
                  className="gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                >
                  <prompt.icon className="h-3 w-3" />
                  {prompt.text}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div key={index} className="space-y-2">
                <div
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-xl px-4 py-3 shadow-sm",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-card border border-border text-foreground rounded-bl-sm"
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                </div>
                
                {/* Suggestions */}
                {message.role === "assistant" && message.suggestions && index === messages.length - 1 && !isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] space-y-2">
                      <p className="text-xs text-muted-foreground px-2">Related questions:</p>
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="cursor-pointer hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                            onClick={() => handleSend(suggestion)}
                          >
                            {suggestion}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-xl px-4 py-3 rounded-bl-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t-2 border-primary/20 bg-gradient-to-t from-muted/30 to-transparent">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Git commands, workflows..."
              className="flex-1 bg-background border-primary/20 focus:border-primary"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="bg-primary hover:bg-primary/90 shadow-lg"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-muted-foreground">
              AI-powered Git documentation assistant
            </p>
            <Badge variant="outline" className="text-xs">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Online
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocChat;
