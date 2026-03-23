import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/contexts/ModeContext";
import { ExternalLink, Brain, Eye, BarChart3, BookOpen, Server, ShoppingCart, Linkedin, ShoppingBasket, Users, Speaker, Speech, Map, MapPin, BrainIcon, Smile, TagIcon, Bot } from "lucide-react";

import { FileText, Github } from "lucide-react";

interface Link {
  url: string;
  label: string;
  type: "github" | "pdf" | "linkedin";
}

interface Project {
  title: string;
  objective: string;
  highlights: string[];
  tags: string[];
  icon: React.ReactNode;
  mode: "data" | "backend";
  wip?: boolean;
  links?: Link[];
  image?: string;
}

const projects: Project[] = [
  {
    wip: true,
    title: "Analyse concurrencielle des salles d'escalade",
    objective: "Trouver le meilleur emplacement pour une nouvelle salle d'escalade.",
    highlights: [
      "Scrapping de données provenant d'OpenStreetMap, Google Maps et DataGouv",
      "Création d'un pipeline de traitement de données via Dagster et dlt",
      "Création d'une carte interactive en React pour visualiser les données",
    ],
    image: "/assets/Bloc Locator.png",
    tags: ["Dagster", "React", "Scrapping", "dlt", "OpenStreetMap", "Google Maps", "DataGouv"],
    icon: <MapPin className="h-5 w-5" />,
    mode: "data",
    links: []
  },
  {
    wip: true,
    title: "Fact checker de débats politiques en temps réel",
    objective: "Apporter des éléments factuels aux débats politiques en temps réel à partir de l'analyse d'une source vidéo.",
    highlights: [
      "Scrapping de débats politiques sur Youtube et labelling manuel",
      "Benchmarking de différentes solutions de dubbing, claim detection et fact-checking via Weights & Biases",
      "Reconnaissance vocale et visuelle des intervenants",
      "Intégration des solutions dans un pipeline de traitement vidéo accessible via API",
      "Interface React pour analyser les débats et visualiser les résultats",
    ],
    image: "/assets/Agora-Live-Check-480.gif",
    tags: ["Fact-checking", "Pyannote", "Whisper", "Kyutai", "Voxtral", "HuggingFace", "Mistral", "Camembert", "Tavily", "W&B", "FastAPI", "React"],
    icon: <Speech className="h-5 w-5" />,
    mode: "data",
    links: []
  },
  {
    title: "Segmentation d'images — Voiture autonome - POC",
    objective: "Veille technologique et identification d'une méthode plus récente visant à améliorer la performance d'un modèle précédent de segmentation sémantique basé sur U-Net et MobileNetV3Small",
    highlights: [
      "Modèle EoMT avec backbone DINOv3",
      "Framework LightlyTrain",
      "Dashboard Streamlit déployé sur Azure via Github Actions",
      "mIoU amélioré de 13% par rapport au modèle précédent"
    ],
    tags: ["Computer Vision", "Segmentation sémantique", "Docker", "LightlyTrain", "EoMT", "DINOv3", "Azure", "CI/CD", "Streamlit"],
    icon: <Eye className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://github.com/benjamin-vauchel/oc-p9-developpez-une-preuve-de-concept", label: "Code", type: "github" },
      { url: "https://github.com/benjamin-vauchel/oc-p9-developpez-une-preuve-de-concept/blob/main/note_methodologique.pdf", label: "Note méthodologique", type: "pdf" },
      { url: "https://www.linkedin.com/posts/benjamin-vauchel-0a148b117_segmentation-s%C3%A9mantique-activity-7425187185655443456-GiUQ", label: "Post LinkedIn", type: "linkedin" },
      { url: "https://github.com/benjamin-vauchel/oc-p9-developpez-une-preuve-de-concept/blob/main/presentation.pdf", label: "Présentation", type: "pdf" }
    ]
  },
  {
    title: "Segmentation d'images — Voiture autonome",
    objective: "Segmentation sémantique de paysages urbains (Cityscapes) pour un système embarqué avec une puissance de calcul limitée et une contrainte de temps réel",
    highlights: [
      "Dataset augmentation via Albumentations",
      "Comparaison de CNN via MLFlow : U-Net, MobileNetV2/V3, EfficientNet",
      "Gestion du déséquilibre des classes",
      "Dashboard Streamlit et API FastAPI déployés sur Azure via Github Actions",
    ],
    tags: ["Computer Vision", "Segmentation sémantique", "CNN", "MLFlow", "TensorFlow", "Albumentations", "Azure", "CI/CD", "Streamlit", "FastAPI"],
    icon: <Eye className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://github.com/benjamin-vauchel/oc-p8-traitez-les-images-pour-le-systeme-embarque-d-une-voiture-autonome", label: "Code", type: "github" },
      { url: "https://github.com/benjamin-vauchel/oc-p8-traitez-les-images-pour-le-systeme-embarque-d-une-voiture-autonome/blob/main/note_technique.pdf", label: "Note technique", type: "pdf" },
      { url: "https://www.linkedin.com/posts/benjamin-vauchel-0a148b117_segmentation-s%C3%A9mantique-activity-7425187185655443456-GiUQ", label: "Post LinkedIn", type: "linkedin" },
      { url: "https://github.com/benjamin-vauchel/oc-p8-traitez-les-images-pour-le-systeme-embarque-d-une-voiture-autonome/blob/main/presentation.pdf", label: "Présentation", type: "pdf" }
    ]
  },
  {
    title: "Analyse de Sentiments — Bad Buzz",
    objective: "Détection de bad buzz sur le réseau social X (sentiments négatif/positif) et application d'une démarche MLOps complète",
    highlights: [
      "Correction de labels via LLM-as-a-judge",
      "Comparaison via MLFlow de Bag of Words, Fasttext/Glove, BERT/sBERT",
      "Pipeline MLOps complet sur Azure ML",
      "UI Streamlit et API FastAPI déployé sur Azure via Github Actions",
      "Tests unitaires PyTest"
    ],
    tags: ["NLP", "Deep Learning", "BERT", "sBERT", "Fasttext", "Glove", "Azure ML", "MLOps", "PyTest", "CI/CD", "Github Actions", "Tensorflow"],
    icon: <Smile className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://github.com/benjamin-vauchel/oc-p7-realisez-une-analyse-de-sentiments-grace-au-deep-learning", label: "Code", type: "github" },
      { url: "https://github.com/benjamin-vauchel/oc-p7-realisez-une-analyse-de-sentiments-grace-au-deep-learning/blob/main/article_blog_mlops.pdf", label: "Article MLOps", type: "pdf" },
      { url: "https://www.linkedin.com/posts/benjamin-vauchel-0a148b117_mlops-activity-7417566303189803008-C1mW", label: "Post LinkedIn", type: "linkedin" },
      { url: "https://github.com/benjamin-vauchel/oc-p7-realisez-une-analyse-de-sentiments-grace-au-deep-learning/blob/main/presentation.pdf", label: "Présentation", type: "pdf" }
    ]
  },
  {
    title: "Système de scoring financier",
    objective: "Aide au traitement des demandes de prêts via un modèle de classification supervisé facilement interprétable.",
    highlights: [
      "Feature engineering",
      "Pipelines sklearn : scaling, imputation, rééquilibrage des classes, modélisation",
      "Comparaison de différentes approches : RegLog, RandomForest, CatBoost, LightGBM",
      "Optimisation hyperparamètres et seuil de décision",
      "Interprétation de l'importance globale et locale des features via SHAP",
    ],
    tags: ["ML Supervisé", "Scikit-Learn", "SHAP", "Optuna", "RandomForest", "CatBoost", "LightGBM", "Cross Validation"],
    icon: <BarChart3 className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://www.linkedin.com/posts/benjamin-vauchel-0a148b117_interpretable-machine-learning-activity-7397619827974197248-YDX2", label: "Post LinkedIn", type: "linkedin" }
    ]
  },
  {
    title: "Recommandation de contenu",
    objective: "MVP de recommandation de livres",
    highlights: [
      "Evaluation offline via Recall@k et HitRate@k",
      "Algorithme hybride : trending + content based filtering + collaborative filtering",
      "UI Streamlit et API FastAPI déployée sur Azure function via Github Actions",
    ],
    tags: ["Recommandation", "Streamlit", "FastAPI", "Azure function", "Content based filtering", "Collaborative filtering"],
    icon: <BookOpen className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://github.com/benjamin-vauchel/oc-p10-realisez-une-application-de-recommandation-de-contenu", label: "Code", type: "github" },
      { url: "https://github.com/benjamin-vauchel/oc-p10-realisez-une-application-de-recommandation-de-contenu/blob/main/presentation.pdf", label: "Présentation", type: "pdf" }
    ]
  },
  {
    title: "Classification de biens de consommation",
    objective: "Etude de faisabilité d'un moteur de classification de biens de consommation en différentes catégories, à partir de texte et d'image.",
    highlights: [
      "Prétraitement et analyse des textes : FastText, BERT, USE, sBERT",
      "Prétraitement et analyse des images : SIFT, ResNet50, VGG16",
      "Visualisation des embeddings via T-SNE et KMeans",
      "Qualité des embeddings via ARI et Silhouette",
      "Finetuning d'un modèle ResNet50"
    ],
    tags: ["Classification", "Machine Learning", "Deep Learning", "FastText", "BERT", "USE", "sBERT", "SIFT", "ResNet50", "VGG16", "T-SNE", "KMeans", "ARI", "Silhouette"],
    icon: <ShoppingBasket className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://www.linkedin.com/posts/benjamin-vauchel-0a148b117_aiengineer-datascience-machinelearning-activity-7413882697208516609-Id9C", label: "Post LinkedIn", type: "linkedin" }
    ]
  },
  {
    title: "Segmentation de clients",
    objective: "Application complète de recommandation de livres",
    highlights: [
      "Analyse des données via requêtes SQL",
      "Comparaison de modèles de clustering : RFM, KMeans, DBScan",
      "Analyse des résultats via coefficient de silhouette et qualité des clusters",
      "Simulation stabilité et évolution des clusters",
    ],
    tags: ["ML non supervisé", "SQL", "RFM", "KMeans", "DBScan", "Clustering", "ARI"],
    icon: <Users className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://www.linkedin.com/posts/benjamin-vauchel-0a148b117_segmentation-client-avec-k-means-activity-7402700947791179777-ouHE", label: "Post LinkedIn", type: "linkedin" }
    ]
  },
  {
    title: "Classification d'images sur une architecture Big Data",
    objective: "Extraire les features d'un large dataset d'images",
    highlights: [
      "Création d'un environnement cloud EMR sur AWS",
      "Calculs distribués avec PySpark sur clusters",
    ],
    tags: ["Big Data", "AWS EMR", "PySpark"],
    icon: <Server className="h-5 w-5" />,
    mode: "data",
    links: [
      { url: "https://github.com/benjamin-vauchel/oc-p11-realisez-un-traitement-dans-un-environnement-big-data-sur-le-cloud", label: "Code", type: "github" },
    ]
  },
  {
    title: "AI Tutor",
    objective: "Organiser et synthétiser des cours de formation pour une aide à la révision.",
    highlights: [
      "Synthèse de cours via LLM (LangChain + OpenAI)",
      "RAG sur l'ensemble des cours (LangChain + ChromaDB)",
      "Dialogue socratique (LangChain + OpenAI)",
      "Génération de podcasts (LangChain + OpenAI)",
      "Interface ReactJS et shadcn/ui ",
    ],
    tags: ["React", "FastAPI", "LLM", "LangChain", "RAG", "ChromaDB", "shadcn/ui"],
    icon: <BrainIcon className="h-5 w-5" />,
    mode: "data",
    links: []
  },
  {
    title: "Merchandising  - Matou Technologies",
    objective: "Solution de merchandising dans le cadre de la refonte de l'ERP de l'entreprise",
    highlights: [
      "API Symfony avec API Platform",
      "Indexation des catégories via Typesense",
      "Règles métiers complexes gérées via Directus",
      "Architecture DDD, tests PHPUnit",
    ],
    tags: ["API Platform", "Typesense", "DDD", "Directus"],
    icon: <TagIcon className="h-5 w-5" />,
    mode: "backend",
  },
  {
    title: "Boutique e-commerce — Onatera",
    objective: "Refonte de la boutique e-commerce sous Sylius",
    highlights: [
      "Modules de paiement Stripe, Payplug, Adyen",
      "Indexation des produits via Algolia pour recherche sémantique et catégorisation",
      "Intégration des pages de contenu via le CMS headless Prismic",
      "Composants front Catalyst",
    ],
    tags: ["Sylius", "Algolia", "Prismic", "Catalyst"],
    icon: <ShoppingCart className="h-5 w-5" />,
    mode: "backend",
  },
  {
    title: "Chatbot SAV - Recyclivre",
    objective: "Mise en place d'un chatbot pour répondre aux questions fréquentes des clients sur leurs commandes",
    highlights: [
      "Worflow Botpress",
      "Détection de l'intention via Dialogflow",
      "Connexion API de l'ERP pour récupération des commandes",
    ],
    tags: ["Botpress", "Dialogflow"],
    icon: <Bot className="h-5 w-5" />,
    mode: "backend",
  },
  {
    title: "Boutique e-commerce - Recyclivre",
    objective: "Refonte complète de la boutique Recyclivre sous Sylius",
    highlights: [
      "Cadrage projet avec prestataire externe",
      "Synchronisation des données entre Sylius et l'ERP",
    ],
    tags: ["Sylius", "Symfony"],
    icon: <ShoppingCart className="h-5 w-5" />,
    mode: "backend",
  },
  {
    title: "Marketplace - Recyclivre",
    objective: "Mise en place d'une marketplace Origami",
    highlights: [
      "Cadrage projet avec prestataire externe",
    ],
    tags: ["Origami"],
    icon: <ShoppingCart className="h-5 w-5" />,
    mode: "backend",
  },
  {
    title: "Solution marketing — Webrivage",
    objective: "Automatisation des campagnes emailing grâce à un ciblage comportemental spécifique pour chaque offre",
    highlights: [
      "Gestion de volumes massifs de données via SQS",
      "Tracking des clics et des ouvertures dans DynamoDB",
      "Adapters pour emailin providers (Mailgun, Sendinblue, Sendgrid ...)"
    ],
    tags: ["Symfony", "Docker", "AWS", "DynamoDB", "SQS", "DDD", "CQRS"],
    icon: <Server className="h-5 w-5" />,
    mode: "backend",
  },
  {
    title: "Solutions marketing — Webrivage",
    objective: "Détection des utilisateurs connectés pour ciblage marketing",
    highlights: [
      "Backend NestJS hébergé sur AWS lambda",
      "Gestion de volumes massifs de données",
    ],
    tags: ["Docker", "AWS", "API Gateway", "AWS Lambda", "NestJS", "Kinesis", "DynamoDB"],
    icon: <Server className="h-5 w-5" />,
    mode: "backend",
  },
  {
    title: "Solutions emailing — Webrivage",
    objective: "Backoffice interne pour la gestion et l'envoi de campagnes emailing",
    highlights: [
      "Module de templating emailing via Twig",
      "Règles de ciblage de populations complexes",
      "Gestion de volumes massifs de données",
      "Tracking des clics et des ouvertures dans DynamoDB",
      "Adapters pour emailin providers (Mailgun, Sendinblue, Sendgrid ...)"
    ],
    tags: ["Symfony", "Docker"],
    icon: <Server className="h-5 w-5" />,
    mode: "backend",
  },
  {
    title: "Backoffice interne — Webrivage",
    objective: "Backoffice interne pour la gestion de campagnes marketing",
    highlights: [
      "CRUD",
      "Historisation des modifications utilisateurs",
      "Editeur de YAML via AceEditor",
    ],
    tags: ["Symfony", "Docker", "Twig", "AceEditor", "Bootstrap"],
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
                      <span className="text-primary shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.wip && (
                    <span className="rounded bg-yellow-600 px-2 py-0.5 text-[10px] font-mono text-foreground">
                      WIP
                    </span>
                  )}
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded bg-secondary px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {
                  project.image && (
                    <div className="mt-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full rounded-lg border border-border"
                      />
                    </div>
                  )
                }

                {
                  project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-border/50">
                      {project.links.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1.5 text-[11px] font-mono transition-colors ${link.type === 'github'
                            ? 'text-muted-foreground hover:text-foreground' : link.type === 'pdf'
                              ? 'text-primary hover:text-primary/70' : 'text-blue-500 hover:text-blue-500/70'
                            }`}
                        >
                          {link.type === 'github' ? <Github className="h-3.5 w-3.5" /> : link.type === 'pdf' ? <FileText className="h-3.5 w-3.5" /> : <Linkedin className="h-3.5 w-3.5" />}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )
                }
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section >
  );
}
