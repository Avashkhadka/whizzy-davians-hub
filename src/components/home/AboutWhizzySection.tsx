import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const AboutWhizzySection = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                            <Zap className="w-4 h-4" />
                            About Whizzy Davians
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">More Than Just a Club</h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Whizzy Davians was founded with a vision to create a vibrant community where students can discover their potential, develop new skills, and forge lifelong friendships. We
                            believe that college life should be about more than just academics – it's about experiences that shape who you become.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-6 bg-card rounded-2xl border border-border"
                            >
                                <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                                <p className="text-sm text-muted-foreground">To empower every student to discover and develop their unique talents.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-6 bg-card rounded-2xl border border-border"
                            >
                                {/* <div className="w-12 h-12 mx-auto rounded-xl bg-club-green/10 flex items-center justify-center mb-4">
                                    <span className="text-2xl">👁️</span>
                                </div> */}
                                <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                                <p className="text-sm text-muted-foreground">To be the leading platform for holistic student development in our region.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="p-6 bg-card rounded-2xl border border-border"
                            >
                                {/* <div className="w-12 h-12 mx-auto rounded-xl bg-club-red/10 flex items-center justify-center mb-4">
                                    <span className="text-2xl">💪</span>
                                </div> */}
                                <h3 className="font-semibold text-foreground mb-2">Our Values</h3>
                                <p className="text-sm text-muted-foreground">Excellence, integrity, inclusivity, and a commitment to growth.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
