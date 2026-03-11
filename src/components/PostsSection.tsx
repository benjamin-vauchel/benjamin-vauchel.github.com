import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, ThumbsUp } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

interface Post {
    id: string;
    date: string;
    content: string;
    link: string;
    image?: string;
}

const posts: Post[] = [
    {
        id: "1",
        date: "Février 2026",
        content: "🚗 Voilà un projet qui m’a particulièrement plu : concevoir un modèle d’analyse d’image pour un système embarqué de véhicule autonome. Concrètement, il s’agissait d’identifier sur une image de paysage urbain où se situaient les piétons, les voitures, les bâtiments, la route, etc. À cela s’ajoutaient deux contraintes fortes : opérer dans un environnement à la puissance de calcul limitée et traiter du [...]",
        link: "https://www.linkedin.com/posts/benjamin-vauchel-0a148b117_segmentation-s%C3%A9mantique-activity-7425187185655443456-GiUQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB0UsrkBkLIWIMKb0gzuYFnjyr7K6SbgYVo",
    },
    {
        id: "2",
        date: "Janvier 2026",
        content: "🧠 5ème projet : analyser la description et la photo d’un produit pour en déduire sa catégorie (mobilier, produit de beauté, montre, …) et surtout comparer les approches Machine Learning et Deep Learning pour l’analyse de texte et d’image [...]",
        link: "https://www.linkedin.com/posts/benjamin-vauchel-0a148b117_aiengineer-datascience-machinelearning-activity-7413882697208516609-Id9C?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB0UsrkBkLIWIMKb0gzuYFnjyr7K6SbgYVo",
    }
];

export function PostsSection() {
    return (
        <section id="posts" className="section-padding bg-card/30">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">
                        <span className="mode-indicator mr-2" />
                        Réseaux
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold mb-10">Dernières Publications</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card flex flex-col h-full bg-background border border-border/50 hover:border-primary/30 transition-colors"
                        >
                            <div className="p-5 flex-1 relative">
                                {/* Header (Author) */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-border">
                                        <img src={avatar} alt="Benjamin Vauchel" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground text-sm leading-none flex items-center gap-1.5 mb-1">
                                            Benjamin Vauchel
                                            <span className="text-[10px] bg-blue-100/10 border border-blue-500/20 text-blue-500 font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-widest">In</span>
                                        </h4>
                                        <span className="text-xs text-muted-foreground font-mono block">{post.date}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <p className="text-sm text-secondary-foreground font-body leading-relaxed whitespace-pre-wrap">
                                    {post.content}
                                </p>
                                {post.image && (
                                    <div className="mt-4 rounded-lg overflow-hidden border border-border max-h-48">
                                        <img src={post.image} alt="Illustration du post" className="w-full h-full object-cover" />
                                    </div>
                                )}
                            </div>

                            {/* Footer (Stats & Link) */}
                            <div className="px-5 py-3 border-t border-border/40 bg-muted/20 flex items-center justify-between text-muted-foreground text-xs font-mono">

                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-primary hover:text-primary/70 transition-colors font-semibold uppercase tracking-wider text-[10px]"
                                >
                                    Lire la suite sur LinkedIn <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
