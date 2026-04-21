import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { CaseStudyData } from "@/data/caseStudies";

export function CaseStudyHero({ caseStudy }: { caseStudy: CaseStudyData }) {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-6">
            Case Study
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">{caseStudy.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{caseStudy.shortDescription}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to={{ pathname: "/contact", hash: "#contact-form" }} state={{ project: caseStudy.title }}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                View Live
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Key metrics at bottom */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="glass rounded-lg p-4 border border-border/50">
              <div className="text-sm text-muted-foreground mb-1">Timeline</div>
              <div className="text-lg font-semibold">{caseStudy.timeline}</div>
            </div>
            <div className="glass rounded-lg p-4 border border-border/50">
              <div className="text-sm text-muted-foreground mb-1">Team</div>
              <div className="text-lg font-semibold">{caseStudy.team.split(",").length} members</div>
            </div>
            <div className="glass rounded-lg p-4 border border-border/50">
              <div className="text-sm text-muted-foreground mb-1">Category</div>
              <div className="text-lg font-semibold">{caseStudy.category}</div>
            </div>
            <div className="glass rounded-lg p-4 border border-border/50">
              <div className="text-sm text-muted-foreground mb-1">Tech Stack</div>
              <div className="text-lg font-semibold">{caseStudy.allTechnologies.length} techs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudyChallenge({ challenge }: { challenge: CaseStudyData["challenge"] }) {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Challenge</h2>
            <p className="text-xl text-muted-foreground">{challenge.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {challenge.painPoints.map((point, idx) => (
              <Card key={idx} className="glass border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                      <span className="text-primary font-bold">{idx + 1}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground">{point}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudySolution({ solution }: { solution: CaseStudyData["solution"] }) {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Solution</h2>
            <p className="text-xl text-muted-foreground">{solution.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Approach */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Approach</h3>
              <div className="space-y-4">
                {solution.approach.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {solution.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyResults({ results }: { results: CaseStudyData["results"] }) {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Results & Impact</h2>
            <p className="text-lg text-muted-foreground">Measurable outcomes that demonstrate value</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {results.metrics.map((metric, idx) => (
              <Card key={idx} className="glass border-border/50 text-center hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  {metric.icon && <div className="text-3xl mb-2">{metric.icon}</div>}
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial */}
          <Card className="glass border-border/50 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8">
              <blockquote className="mb-4">
                <p className="text-lg italic text-foreground">"{results.testimonial}"</p>
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {results.testimonialAuthor
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold">{results.testimonialAuthor}</div>
                  <div className="text-sm text-muted-foreground">{results.testimonialRole}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyFeatures({ features }: { features: string[] }) {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-primary/5 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyCTA({ caseStudy }: { caseStudy: CaseStudyData }) {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-12 border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Like what you see? Let's discuss how we can create a similar impact for your business.
          </p>
          <Link to={{ pathname: "/contact", hash: "#contact-form" }} state={{ project: caseStudy.title }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
