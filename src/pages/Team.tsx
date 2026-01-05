import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { getCurrentMembers, getAlumni } from "@/data/team";
import { Zap } from "lucide-react";

const Team = () => {
    const currentMembers = getCurrentMembers();
    const alumni = getAlumni();

    return (
        <Layout>
            <div className="min-h-screen py-20">
                <div className="container mx-auto px-4">
                    {/* Page Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet the Team</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The passionate individuals who make Whizzy Davians what it is today.</p>
                    </motion.div>

                    {/* About Section */}
                    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-20"></motion.section>

                    {/* Current Members */}
                    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-20">
                        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Current Members</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {currentMembers.map((member, index) => (
                                <motion.div key={member.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.05 }} className="group">
                                    <div className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        {/* Avatar */}
                                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-club-blue via-club-green to-club-red p-1">
                                            <div className="w-full h-full overflow-hidden rounded-full bg-card flex items-center justify-center">
                                                <span className="text-3xl">
                                                    <img src={`${member.image}`} className="h-[8rem] object-cover" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                                        <p className="text-sm text-primary font-medium">{member.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Alumni */}
                    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Alumni & Ex-Members</h2>
                        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">Honoring those who laid the foundation and shaped our club's legacy.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {alumni.map((member, index) => (
                                <motion.div key={member.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.05 }} className="group">
                                    <div className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-90 hover:opacity-100">
                                        {/* Avatar */}
                                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted p-1">
                                            <div className="w-full h-full overflow-hidden rounded-full bg-card flex items-center justify-center">
                                                <span className="text-3xl ">
                                                    {" "}
                                                    <img src={`${member.image}`} className="h-[8rem] object-cover" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                                        <p className="text-sm text-muted-foreground font-medium mb-1">{member.role}</p>
                                        {member.batch && <p className="text-xs text-muted-foreground">Batch: {member.batch}</p>}
                                        {member.contribution && <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{member.contribution}</p>}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>
        </Layout>
    );
};

export default Team;
