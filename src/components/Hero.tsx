import { Download, GitBranch, Zap, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Version 2.52.0 Now Available</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                --fast-version-control
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Git is a <span className="text-primary font-semibold">free and open source</span> distributed 
                version control system designed to handle everything from small to very large projects 
                with <span className="text-primary font-semibold">speed and efficiency</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg">
                <Download className="h-5 w-5" />
                Download 2.52.0
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <GitBranch className="h-5 w-5" />
                View on GitHub
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="pt-4 text-center">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">Lightning Fast</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="pt-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">Distributed</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="pt-4 text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">Open Source</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right content - Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-card/80 backdrop-blur border-2 border-primary/20 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <div className="bg-background/80 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">$ git init</div>
                  <div className="text-primary">Initialized empty Git repository</div>
                  <div className="text-muted-foreground">$ git add .</div>
                  <div className="text-muted-foreground">$ git commit -m "Initial commit"</div>
                  <div className="text-primary">[main (root-commit) 1a2b3c4] Initial commit</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-2 bg-primary/60 rounded"></div>
                  <div className="h-2 bg-primary/40 rounded"></div>
                  <div className="h-2 bg-primary/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
