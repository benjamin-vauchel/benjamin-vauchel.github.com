import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const formations = [
  {
    year: "2025",
    title: "Expert en Data Science — AI Engineer",
    level: "BAC+5 (RNCP Niveau 7)",
    school: "OpenClassrooms",
    details: "804 heures supervisées · 12 projets professionnalisants · Machine Learning, Deep Learning, NLP, Computer Vision, MLOps, Big Data",
  },
  {
    year: "2014",
    title: "Développement web avec Symfony 2",
    level: "Certification",
    school: "SensioLabs",
    details: "Formation certifiante sur le framework Symfony par ses créateurs",
  },
];

export function FormationSection() {
  return (
    <section id="formation" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">
            <span className="mode-indicator mr-2" />
            Formation
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-10">Diplômes & Certifications</h3>
        </motion.div>

        <div className="space-y-6">
          {formations.map((f, i) => (
            <motion.div
              key={f.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="font-mono text-xs text-primary">{f.year}</span>
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary">
                      {f.level}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{f.title}</h4>
                  <p className="text-sm text-primary font-mono mb-2">{f.school}</p>
                  <p className="text-sm text-secondary-foreground font-body leading-relaxed">{f.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
