import { Button } from "@/components/ui/button";
import { Download, Book, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="container py-20 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Git is a{" "}
              <span className="text-primary">free and open source</span>{" "}
              distributed version control system
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Designed to handle everything from small to very large projects with speed and efficiency.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 h-5 w-5" />
              Download 2.52.0
            </Button>
            <Button size="lg" variant="outline">
              <Book className="mr-2 h-5 w-5" />
              Read Documentation
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>Lightning Fast</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div>Huge Ecosystem</div>
            <div className="h-4 w-px bg-border" />
            <div>Powerful Tools</div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-card border rounded-lg p-8 shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground">
{`$ git clone https://github.com/user/repo
Cloning into 'repo'...
remote: Counting objects: 100
remote: Compressing objects: 100%
Receiving objects: 100%

$ git checkout -b feature
Switched to a new branch 'feature'

$ git commit -m "Add new feature"
[feature abc123] Add new feature

$ git push origin feature
Counting objects: 3, done.
Writing objects: 100%
To https://github.com/user/repo
 * [new branch] feature -> feature`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
