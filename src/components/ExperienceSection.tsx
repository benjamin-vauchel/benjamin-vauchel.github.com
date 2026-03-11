import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/contexts/ModeContext";
import { Briefcase } from "lucide-react";

interface Experience {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  tags?: string[];
  mode: "data" | "backend" | "both";
}

const experiences: Experience[] = [
  {
    period: "2025",
    title: "Formation AI Engineer (BAC+5)",
    company: "OpenClassrooms",
    location: "En ligne",
    description: [
      "12 projets professionnalisants : scoring financier, segmentation d'images, analyse de sentiments, recommandation de contenu, Big Data sur le Cloud...",
      "804 heures de formation supervisée couvrant ML, Deep Learning, NLP, Computer Vision, MLOps",
    ],
    tags: ["Python", "TensorFlow", "PyTorch", "MLFlow", "AWS", "Azure"],
    mode: "data",
  },
  {
    period: "2024",
    title: "Développeur Symfony",
    company: "Matou Technologies",
    location: "Rousset",
    description: [
      "Solution de merchandising avec API Platform et Typesense",
      "Analyse des besoins métiers pour la refonte d'un ERP : enquêtes contextuelles, user journey, prototypage Figma",
      "Développement d'API Symfony (DDD, API Platform, tests PHPUnit)",
    ],
    tags: ["Symfony", "API Platform", "Typesense", "DDD", "Figma"],
    mode: "backend",
  },
  {
    period: "2022 – 2024",
    title: "Développeur Symfony",
    company: "Onatera",
    location: "Aix-En-Provence",
    description: [
      "Refonte de la boutique e-commerce pour l'ouverture à l'international",
      "Intégration de Sylius, moteur de recherche Algolia, composants front Catalyst",
    ],
    tags: ["Sylius", "Algolia", "Catalyst", "E-commerce"],
    mode: "backend",
  },
  {
    period: "2021",
    title: "Lead Développeur Symfony",
    company: "Recyclivre",
    location: "Paris",
    description: [
      "Chef de projet technique : refonte boutique Sylius et marketplace (Symfony + Origami)",
      "Développement d'un bot conversationnel (Botpress + Dialogflow) pour le SAV",
      "Formation de l'équipe à Symfony, Sylius, tests et GIT",
    ],
    tags: ["Sylius", "Marketplace", "Botpress", "Dialogflow", "Lead"],
    mode: "backend",
  },
  {
    period: "2016 – 2021",
    title: "Lead Développeur Symfony",
    company: "Webrivage",
    location: "Aix-en-Provence",
    description: [
      "Solutions marketing à fort trafic : collecte de données, emailing de masse, notifications d'activités",
      "Stack : Symfony / Docker / AWS",
    ],
    tags: ["Symfony", "Docker", "AWS", "High Traffic"],
    mode: "backend",
  },
  {
    period: "2013 – 2016",
    title: "Développeur PHP",
    company: "3SC Global Services",
    location: "Marseille",
    description: ["Développement d'applications web PHP"],
    mode: "backend",
  },
  {
    period: "2007 – 2013",
    title: "Développeur Web Full Stack",
    company: "Auto Entrepreneur & Idea Conseil",
    location: "Bordeaux",
    description: ["Freelance puis en agence – sites vitrines et applications web"],
    mode: "backend",
  },
];

export function ExperienceSection() {
  const { isData, mode } = useMode();

  const filtered = experiences.filter(
    (e) => e.mode === "both" || e.mode === mode
  );

  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">
            <span className="mode-indicator mr-2" />
            Expériences
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-10">Parcours professionnel</h3>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-8">
              {filtered.map((exp, i) => (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 top-1.5 w-3 h-3 rounded-full border-2 border-primary bg-background" />

                  <div className="glass-card p-6">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <span className="font-mono text-xs text-primary">{exp.period}</span>
                      <span className="text-muted-foreground text-xs">·</span>
                      <span className="text-xs text-muted-foreground">{exp.location}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{exp.title}</h4>
                    <p className="text-sm text-primary font-mono mb-3 flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {exp.company}
                    </p>
                    <ul className="space-y-1 mb-3">
                      {exp.description.map((d, j) => (
                        <li key={j} className="text-sm text-secondary-foreground font-body leading-relaxed">
                          — {d}
                        </li>
                      ))}
                    </ul>
                    {exp.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="rounded bg-secondary px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
