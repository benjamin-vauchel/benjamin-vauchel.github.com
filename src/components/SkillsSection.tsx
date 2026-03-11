import { motion } from "framer-motion";
import { useMode } from "@/contexts/ModeContext";
import { AnimatePresence } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const dataSkills: SkillCategory[] = [
  {
    title: "Langages & Libs",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "DuckDB", "Jupyter", "Marimo", "Streamlit", "Matplotlib", "Seaborn"],
  },
  {
    title: "Deep Learning",
    skills: ["TensorFlow", "PyTorch", "HuggingFace", "CNN", "RNN", "LSTM", "Transformers"],
  },
  {
    title: "Domaines IA",
    skills: ["NLP", "Computer Vision", "ML Supervisé", "ML Non-Supervisé", "Analyse de Sentiments", "Segmentation sémantique", "Systèmes de Recommandation"],
  },
  {
    title: "MLOps & Big Data",
    skills: ["MLFlow", "Weights & Biases", "PySpark", "AWS", "Azure", "GitHub Actions", "Docker"],
  },
];

const backendSkills: SkillCategory[] = [
  {
    title: "Frameworks",
    skills: ["Symfony 2→7", "API Platform", "Sylius", "NodeJS", "VueJS", "React", "Catalyst"],
  },
  {
    title: "Bases de données",
    skills: ["MySQL", "PostgreSQL", "Algolia", "Typesense", "ElasticSearch"],
  },
  {
    title: "Architecture",
    skills: ["DDD", "API REST", "Microservices", "Docker", "AWS", "CI/CD"],
  },
  {
    title: "Méthodologies",
    skills: ["Tests PHPUnit", "Agile/Scrum", "Code Review", "Prototypage Figma", "Lead Dev"],
  },
];

export function SkillsSection() {
  const { isData } = useMode();
  const skills = isData ? dataSkills : backendSkills;

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">
            <span className="mode-indicator mr-2" />
            Compétences
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-10">Stack technique</h3>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={isData ? "data" : "backend"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <h4 className="font-mono text-sm font-semibold text-primary mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-secondary px-3 py-1 text-xs font-mono text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
