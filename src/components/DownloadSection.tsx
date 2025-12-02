import { Download, Github, Apple, Monitor, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DownloadSection = () => {
  return (
    <section id="downloads" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Latest Release</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Download Git
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the latest version of Git for your platform
          </p>
        </div>

        {/* Latest Version Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-card to-card/50 backdrop-blur">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Badge className="bg-primary text-primary-foreground">v2.52.0</Badge>
                    <span className="text-sm text-muted-foreground">Released Nov 17, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Latest Source Release
                  </h3>
                  <p className="text-muted-foreground">
                    The most recent stable version with the latest features and improvements
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg">
                    <Download className="h-5 w-5" />
                    Download Now
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Release Notes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform Downloads */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="group hover:shadow-lg transition-all hover:border-primary/40 cursor-pointer">
            <CardContent className="pt-6">
              <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Linux
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Available for all major distributions
              </p>
              <div className="space-y-2 text-sm">
                <a href="#" className="flex items-center text-primary hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Linux GUIs
                </a>
                <a href="#" className="flex items-center text-primary hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Tarballs
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all hover:border-primary/40 cursor-pointer">
            <CardContent className="pt-6">
              <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Apple className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                macOS
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Optimized builds for Mac
              </p>
              <div className="space-y-2 text-sm">
                <a href="#" className="flex items-center text-primary hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Mac Build
                </a>
                <a href="#" className="flex items-center text-primary hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Homebrew
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all hover:border-primary/40 cursor-pointer">
            <CardContent className="pt-6">
              <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Source Code
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Build from source
              </p>
              <div className="space-y-2 text-sm">
                <a href="#" className="flex items-center text-primary hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  GitHub Repository
                </a>
                <a href="#" className="flex items-center text-primary hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Kernel.org
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All downloads are provided by{" "}
            <a href="#" className="text-primary hover:underline">
              Software Freedom Conservancy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
