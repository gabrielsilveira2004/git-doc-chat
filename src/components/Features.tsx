import { Zap, GitBranch, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Nearly all operations are performed locally, giving it a huge speed advantage."
  },
  {
    icon: GitBranch,
    title: "Branching & Merging",
    description: "Git's branching model lets you have multiple independent branches of development."
  },
  {
    icon: Shield,
    title: "Data Assurance",
    description: "The integrity of source code is guaranteed through cryptographic hashing."
  },
  {
    icon: Users,
    title: "Distributed",
    description: "Every developer has a full copy of the repository including complete history."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Git?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Git has become the most widely used version control system in the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
