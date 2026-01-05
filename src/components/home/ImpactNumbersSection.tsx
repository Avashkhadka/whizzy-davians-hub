import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Users, Heart, Trophy } from "lucide-react";

const stats = [
  { icon: Calendar, value: 10, suffix: "+", label: "Events", color: "club-blue" },
  { icon: Users, value: 500, suffix: "+", label: "Students", color: "club-green" },
  { icon: Heart, value: 30, suffix: "+", label: "Volunteers", color: "club-red" },
  { icon: Trophy, value: 2026, suffix: "", label: "Year of BCA Cup", color: "club-blue" },
];

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const Counter = ({ end, suffix, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const ImpactNumbersSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to student empowerment.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 bg-card rounded-2xl border border-border shadow-sm text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-club-blue/5 via-club-green/5 to-club-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className={`w-12 h-12 mx-auto rounded-xl bg-${stat.color}/10 flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                <Counter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
