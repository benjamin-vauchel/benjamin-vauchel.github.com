import { motion } from "framer-motion";
import { useMode } from "@/contexts/ModeContext";
import { AnimatePresence } from "framer-motion";

export function AboutSection() {
  const { isData } = useMode();

  const content = isData
    ? "Après 17 ans de développement backend — essentiellement sur Symfony — j'ai décidé de faire un pas de côté pour étoffer mes compétences. Face à l'émergence de l'IA, j'ai suivi une formation diplomante d'AI Engineer chez OpenClassrooms pour être aujourd'hui capable de concevoir, modéliser et déployer des solutions d'intelligence artificielle robustes, directement exploitables en production."
    : "Fort de 17 ans d'expérience en développement backend, j'ai construit une expertise solide sur l'écosystème Symfony à travers des projets variés (sites vitrines, collecte de données, emailing de masse, e-commerce, ERP et marketplace) toujours dans une démarche de qualité (CI/CD, tests, DDD, architecture hexagonale).";

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">
            <span className="mode-indicator mr-2" />
            À propos
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            {isData ? "De Symfony à l'IA" : "Expert Symfony"}
          </h3>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={isData ? "data" : "backend"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8"
          >
            <p className="text-secondary-foreground leading-relaxed text-base font-body">
              {content}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
