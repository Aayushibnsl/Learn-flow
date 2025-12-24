import { Link, useLocation } from "wouter";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="w-full border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-medium tracking-tight hover:opacity-70 transition-opacity">
          Aayushi Bansal
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className={`hover:text-foreground transition-colors ${location === "/" ? "text-foreground" : ""}`}>
            Resources
          </Link>
          <a href="#about" className="hover:text-foreground transition-colors cursor-pointer">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
