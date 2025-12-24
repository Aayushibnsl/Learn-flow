import { Navbar } from "@/components/layout/Navbar";
import { useResources } from "@/hooks/use-resources";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Download, BookOpen } from "lucide-react";

export default function Home() {
  const { data: resources, isLoading, error } = useResources();

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-neutral-100">
      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:py-24">
        
        {/* HERO */}
        <section className="mb-32 max-w-2xl fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
            A Structured <br/>
            <span className="text-muted-foreground/80">Learning Space</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Notes, roadmaps, and learning resources — built slowly and thoughtfully to help you navigate complex ideas.
          </p>
        </section>

        {/* RESOURCES GRID */}
        <section id="resources" className="mb-32">
          <div className="flex items-center justify-between mb-12 fade-in delay-100">
            <h2 className="text-2xl font-serif">Library</h2>
            <div className="h-px flex-1 bg-border/60 ml-8" />
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-sm" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              Failed to load resources. Please try refreshing.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 fade-in delay-200">
              {resources?.map((resource, index) => (
                <Card key={resource.id} className="group border-0 shadow-none bg-transparent rounded-none p-0">
                  <div className="aspect-[4/3] bg-secondary mb-6 flex items-center justify-center group-hover:bg-secondary/80 transition-colors cursor-pointer overflow-hidden">
                    {index === 0 && resource.title.includes("Web3") ? (
                      <img 
                        src="/images/web3-cover.png" 
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-testid={`img-resource-${resource.id}`}
                      />
                    ) : (
                      <BookOpen className="w-8 h-8 text-muted-foreground/40 group-hover:scale-110 transition-transform duration-500" />
                    )}
                  </div>
                  <CardHeader className="p-0 mb-3 space-y-2">
                    <div className="text-xs font-medium tracking-wider text-muted-foreground uppercase">{resource.category}</div>
                    <CardTitle className="text-xl font-serif font-normal group-hover:underline decoration-1 underline-offset-4 decoration-muted-foreground/50">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-base text-muted-foreground mb-4 line-clamp-3">
                      {resource.description}
                    </CardDescription>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto font-normal text-foreground hover:no-underline group/btn"
                      onClick={() => window.open(resource.url, '_blank')}
                      data-testid={`button-download-${resource.id}`}
                    >
                      <span className="border-b border-foreground/30 pb-0.5 group-hover/btn:border-foreground transition-colors">
                        Download Resource
                      </span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
              
              {resources && resources.length === 0 && (
                <div className="col-span-full py-12 text-center text-muted-foreground">
                  No resources published yet.
                </div>
              )}
            </div>
          )}
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 border-t border-border/40 fade-in delay-300">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <img 
                src="/images/aayushi.jpg" 
                alt="Aayushi Bansal"
                className="w-full md:max-w-sm h-auto rounded-lg object-cover mx-auto md:mx-0"
                data-testid="img-aayushi"
              />
            </div>
            <div className="md:col-span-8 space-y-6">
              <h2 className="text-3xl font-serif">About Me</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello, I’m <strong className="font-medium text-foreground">Aayushi Bansal</strong>.
                </p>
                <p>
                  I’m a student exploring technology, systems, and how complex ideas can be broken down clearly. 
                  My work focuses on creating structured learning paths that help others navigate technical concepts with ease.
                </p>
                <p>
                  This platform serves as a digital garden where I cultivate and share my notes, roadmaps, and resources.
                  It is built with the intention of being a quiet, focused space for learning.
                </p>
              </div>
              <div className="pt-4">
                 <a 
                   href="https://www.linkedin.com/in/aayushi-bansal-620b12286/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   data-testid="link-linkedin"
                 >
                   <Button variant="outline" className="rounded-none border-foreground/20 hover:bg-secondary">
                     Get in touch
                   </Button>
                 </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 border-t border-border/40 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Aayushi Bansal. All rights reserved.</p>
      </footer>
    </div>
  );
}
