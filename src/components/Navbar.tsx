import { ModeToggle } from "./ModeToggle";
import { Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border bg-background/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="font-mono text-sm font-semibold text-foreground tracking-tight">
          B<span className="text-primary">.</span>Vauchel
        </a>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">À propos</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Compétences</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Expériences</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projets</a>
            <a href="#formation" className="hover:text-foreground transition-colors">Formation</a>
          </div>

          <ModeToggle />

          <div className="flex items-center gap-2">
            <a href="https://github.com/benjamin-vauchel/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/benjamin-vauchel-0a148b117/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:46aslq761@mozmail.com" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
