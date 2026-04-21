import { Suspense, lazy } from "react";
import { Card } from "@/components/ui/card";

// Lazy load Three.js components to avoid unnecessary bundle bloat
const ThreeDTechShowcase = lazy(() => import("./ThreeDTechShowcase"));

interface TechStack {
  name: string;
  icon: string;
  color: string;
}

const techStack: TechStack[] = [
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "TypeScript", icon: "📘", color: "#3178c6" },
  { name: "Tailwind CSS", icon: "🎨", color: "#06b6d4" },
  { name: "Node.js", icon: "🟢", color: "#68a063" },
  { name: "Express", icon: "🚀", color: "#000000" },
  { name: "MongoDB", icon: "🍃", color: "#13aa52" },
];

export default function TechStackShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, performant, and maintainable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Showcase */}
          <div className="h-96 rounded-lg overflow-hidden bg-muted/50 border border-border/50" data-scroll-animate="scaleIn">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading 3D showcase...</p>
                </div>
              </div>
            }>
              <ThreeDTechShowcase />
            </Suspense>
          </div>

          {/* Tech Stack Grid */}
          <div data-scroll-animate="stagger">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((tech) => (
                <Card key={tech.name} className="glass border-border/50 hover:border-primary/50 hover:glow-effect transition-all duration-300 p-4 text-center group cursor-pointer">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-sm">{tech.name}</h3>
                  <div 
                    className="h-1 w-0 mx-auto mt-2 rounded-full group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: tech.color }}
                  ></div>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-border/50">
              <h3 className="font-semibold mb-3">Why These Technologies?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span><strong>React:</strong> Component-driven UI with excellent performance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span><strong>TypeScript:</strong> Type-safe code for fewer bugs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span><strong>Tailwind CSS:</strong> Rapid UI development with consistency</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span><strong>Node.js & Express:</strong> Scalable backend solutions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span><strong>MongoDB:</strong> Flexible and scalable data storage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
