import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="border-t border-border section-padding py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono text-sm font-semibold text-foreground">
            Benjamin <span className="text-primary">Vauchel</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1 font-body">
            Data Scientist & Backend Engineer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="mailto:benjamin.vauchel@gmail.com" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-mono">
            <Mail className="h-3.5 w-3.5" /> benjamin.vauchel@gmail.com
          </a>
          <a href="tel:+33669973889" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-mono">
            <Phone className="h-3.5 w-3.5" /> 06.69.97.38.89
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/benjamin-vauchel/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/benjamin-vauchel-0a148b117/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-8 pt-6 border-t border-border">
        <p className="text-center text-[10px] text-muted-foreground font-mono">
          © {new Date().getFullYear()} Benjamin Vauchel — Portfolio
        </p>
      </div>
    </footer>
  );
}
