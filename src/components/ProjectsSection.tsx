import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/contexts/ModeContext";
import { ExternalLink, Brain, Eye, BarChart3, BookOpen, Server, ShoppingCart } from "lucide-react";

import { FileText, Github } from "lucide-react";

interface Link {
  url: string;
  label: string;
  type: "github" | "pdf";
}

interface Project {
  title: string;
  objective: string;
  highlights: string[];
  tags: string[];
  icon: React.ReactNode;
  mode: "data" | "backend";
  links?: Link[];
}

const projects: Project[] = [
  {
    title: "Segmentation d'images — Voiture autonome - Version 2",
    objective: "Mise en production d'un modèle de détection de masques et dashboard",
    highlights: [
      "Pipeline CI/CD complet (GitHub Actions)",
      "Déploiement API sur le Cloud de la prédiction",
      "Monitoring MLFlow et Test Unitaires",
    ],
    tags: ["MLOps", "Azure", "CI/CD", "API"],
    icon: <Eye className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://github.com/benjamin-vauchel/oc-p9-developpez-une-preuve-de-concept", label: "Voir le code", type: "github" },
      { url: "https://github.com/benjamin-vauchel/oc-p9-developpez-une-preuve-de-concept/blob/main/note_methodologique.pdf", label: "Note méthodologique", type: "pdf" }
    ]
  },
  {
    title: "Segmentation d'images — Voiture autonome - Version 1",
    objective: "Segmentation sémantique de paysages urbains (Cityscapes) pour un système embarqué",
    highlights: [
      "Comparaison de CNN via MLFlow : U-Net, MobileNetV2/V3, EfficientNet",
      "POC modèle EoMT avec backbone DINOv3",
      "Gestion du déséquilibre des classes (data augmentation, focal loss)",
    ],
    tags: ["Computer Vision", "CNN", "MLFlow", "TensorFlow"],
    icon: <Eye className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://github.com/benjamin-vauchel/oc-p8-traitez-les-images-pour-le-systeme-embarque-d-une-voiture-autonome", label: "Voir le code", type: "github" },
      { url: "https://github.com/benjamin-vauchel/oc-p8-traitez-les-images-pour-le-systeme-embarque-d-une-voiture-autonome/blob/main/note_technique.pdf", label: "Note technique", type: "pdf" }
    ]
  },
  {
    title: "Analyse de Sentiments — Bad Buzz",
    objective: "Détection de Bad Buzz sur le réseau social X (sentiments négatif/positif)",
    highlights: [
      "Correction de labels via LLM-as-a-judge",
      "Approches : Bag of Words, RNN+LSTM, BERT/sBERT",
      "Pipeline MLOps complet sur Azure ML",
    ],
    tags: ["NLP", "Deep Learning", "BERT", "Azure ML", "MLOps"],
    icon: <Brain className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://github.com/benjamin-vauchel/oc-p7-realisez-une-analyse-de-sentiments-grace-au-deep-learning", label: "Voir le code", type: "github" },
      { url: "https://github.com/benjamin-vauchel/oc-p7-realisez-une-analyse-de-sentiments-grace-au-deep-learning/blob/main/article_blog_mlops.pdf", label: "Article MLOps", type: "pdf" }
    ]
  },
  {
    title: "Système de scoring financier",
    objective: "Modèle d'apprentissage supervisé pour l'octroi de crédits",
    highlights: [
      "Pipelines sklearn, régression logistique, CatBoost, LightGBM",
      "Optimisation hyperparamètres (Optuna, TunedThresholdClassifierCV)",
      "SHAP pour feature importance globale et locale",
    ],
    tags: ["ML Supervisé", "Scikit-Learn", "SHAP", "Optuna"],
    icon: <BarChart3 className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://github.com/benjamin-vauchel", label: "Voir le code", type: "github" }
    ]
  },
  {
    title: "Recommandation de contenu",
    objective: "Application complète de recommandation de livres",
    highlights: [
      "Sélection d'architecture logicielle",
      "Scripts de chaîne de traitements IA end-to-end",
      "Interface Streamlit et déploiement",
    ],
    tags: ["Recommandation", "Streamlit", "Python", "End-to-End"],
    icon: <BookOpen className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://github.com/benjamin-vauchel", label: "Voir le code", type: "github" }
    ]
  },
  {
    title: "Classification d'images sur le Cloud",
    objective: "Architecture Big Data pour extraire des features d'un large dataset d'images",
    highlights: [
      "Création d'un environnement cloud EMR sur AWS",
      "Calculs distribués avec PySpark sur clusters",
    ],
    tags: ["Big Data", "AWS EMR", "PySpark", "Cloud"],
    icon: <Server className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://github.com/benjamin-vauchel", label: "Voir le code", type: "github" },
      { url: "/assets/pdfs/vision-note-technique.pdf", label: "Note Technique", type: "pdf" }
    ]
  },
  {
    title: "Marketplace Recyclivre",
    objective: "Refonte complète de la boutique et création d'une marketplace",
    highlights: [
      "Architecture Sylius + Origami",
      "Bot conversationnel SAV (Botpress + Dialogflow)",
      "Formation et management de l'équipe technique",
    ],
    tags: ["Sylius", "Symfony", "Marketplace", "Botpress"],
    icon: <ShoppingCart className="h-5 w-5" />,
    mode: "backend",
  },
  {
    title: "Merchandising Matou Technologies",
    objective: "Solution de merchandising et refonte ERP interne",
    highlights: [
      "API Symfony avec API Platform et Typesense",
      "Architecture DDD, tests PHPUnit",
      "Analyse UX : enquêtes contextuelles, user journey, prototypage Figma",
    ],
    tags: ["API Platform", "Typesense", "DDD", "Figma"],
    icon: <Server className="h-5 w-5" />,
    mode: "backend",
  },
  {
    title: "E-commerce international — Onatera",
    objective: "Ouverture de la boutique e-commerce à l'international",
    highlights: [
      "Refonte Sylius avec moteur de recherche Algolia",
      "Composants front Catalyst",
    ],
    tags: ["Sylius", "Algolia", "E-commerce", "International"],
    icon: <ShoppingCart className="h-5 w-5" />,
    mode: "backend",
  },
  {
    title: "Solutions marketing — Webrivage",
    objective: "Plateforme de collecte de données et emailing à fort trafic",
    highlights: [
      "Architecture haute disponibilité Symfony / Docker / AWS",
      "Gestion de volumes massifs de données",
    ],
    tags: ["Symfony", "Docker", "AWS", "High Traffic"],
    icon: <Server className="h-5 w-5" />,
    mode: "backend",
  },
];

export function ProjectsSection() {
  const { mode } = useMode();
  const filtered = projects.filter((p) => p.mode === mode);

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">
            <span className="mode-indicator mr-2" />
            Projets
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-10">
            {mode === "data" ? "Projets Data & IA" : "Projets Backend"}
          </h3>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 group hover:glow-border transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm leading-tight">{project.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-body">{project.objective}</p>
                  </div>
                </div>

                <ul className="space-y-1 mb-4 ml-1">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="text-xs text-secondary-foreground font-body flex gap-2">
                      <span className="text-primary mt-0.5 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded bg-secondary px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-border/50">
                    {project.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-[11px] font-mono transition-colors ${link.type === 'github'
                          ? 'text-muted-foreground hover:text-foreground'
                          : 'text-primary hover:text-primary/70'
                          }`}
                      >
                        {link.type === 'github' ? <Github className="h-3.5 w-3.5" /> : <FileText className="h-3.5 w-3.5" />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
