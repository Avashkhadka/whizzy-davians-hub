import { motion } from "framer-motion";
import { Trophy, Music, Palette, Heart, Award, Users } from "lucide-react";

const activities = [
  {
    icon: Trophy,
    title: "Sports & Tournament",
    description: "Compete in exciting inter-college tournaments across various sports.",
    color: "club-blue",
  },
  {
    icon: Music,
    title: "Cultural Programs",
    description: "Showcase your talents in dance, music, drama, and more.",
    color: "club-red",
  },
  {
    icon: Palette,
    title: "Creative Activities",
    description: "Express yourself through art, design, and creative workshops.",
    color: "club-green",
  },
  {
    icon: Heart,
    title: "Social Engagement",
    description: "Give back to the community through meaningful initiatives.",
    color: "club-red",
  },
  {
    icon: Award,
    title: "Leadership",
    description: "Develop essential leadership skills through workshops and practice.",
    color: "club-blue",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Build lasting connections and learn to work effectively in teams.",
    color: "club-green",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We create opportunities for students to grow, learn, and excel in various domains.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              variants={item}
              className="group p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-${activity.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <activity.icon className={`w-7 h-7 text-${activity.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{activity.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{activity.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
