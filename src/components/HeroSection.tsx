import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/contexts/ModeContext";
import { MapPin, Download } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

export function HeroSection() {
  const { isData } = useMode();

  const title = isData ? "Data Scientist" : "Backend Engineer";
  const subtitle = isData
    ? "AI Engineer · Machine Learning · Deep Learning · NLP · Computer Vision"
    : "Symfony Senior · API Platform · Sylius · 17 ans d'expérience";
  const cv = isData ? "CV 2026 - Data Scientist.pdf" : "CV 2026 - Dev Symfony Senior.pdf";

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--mode-primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--mode-primary)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="relative mx-auto max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/30 glow-border">
              <img src={avatar} alt="Benjamin Vauchel" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary animate-pulse-glow" />
          </motion.div>

          <div className="text-center md:text-left flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm text-muted-foreground mb-2"
            >
              {'>'} hello_world
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-2"
            >
              Benjamin <span className="text-gradient">Vauchel</span>
            </motion.h1>

            <AnimatePresence mode="wait">
              <motion.h2
                key={title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl font-mono font-semibold text-primary mb-4"
              >
                {title}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={subtitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm text-muted-foreground max-w-xl mb-6 font-body"
              >
                {subtitle}
              </motion.p>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <MapPin className="h-3.5 w-3.5" /> Nans-les-Pins, France
              </span>
              <span className="text-border">|</span>
              <span className="text-xs text-muted-foreground font-mono">40 ans</span>
              <span className="text-border">|</span>

              <div className="flex gap-3 mt-2 md:mt-0">
                <a
                  href={`/assets/pdfs/${cv}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-mono text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  <Download className="h-3.5 w-3.5" />
                  Télécharger CV
                </a>

                <a
                  href="mailto:46aslq761@mozmail.com"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-mono text-primary hover:bg-primary/20 transition-colors"
                >
                  Me contacter
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
