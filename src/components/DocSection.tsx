import { Book, FileText, Video, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const docCategories = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn Git basics and installation",
    link: "#"
  },
  {
    icon: FileText,
    title: "Reference",
    description: "Complete command reference",
    link: "#"
  },
  {
    icon: Video,
    title: "Videos & Tutorials",
    description: "Visual guides and screencasts",
    link: "#"
  },
  {
    icon: MessageSquare,
    title: "Community",
    description: "Get help and contribute",
    link: "#"
  }
];

interface DocSectionProps {
  onChatOpen: () => void;
}

const DocSection = ({ onChatOpen }: DocSectionProps) => {
  return (
    <section id="docs" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Documentation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Comprehensive guides, references, and tutorials to help you master Git
          </p>
          <Button
            onClick={onChatOpen}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Ask the AI Assistant
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="pt-6">
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-card border rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Pro Git Book</h3>
              <p className="text-muted-foreground">
                The entire Pro Git book by Scott Chacon and Ben Straub is available to read online for free
              </p>
            </div>
            <Button variant="outline" size="lg">
              Read Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocSection;
