import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getCurrentEvent } from "@/data/events";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const currentEvent = getCurrentEvent();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!currentEvent) return;

    const calculateTimeLeft = () => {
      const eventDate = new Date(currentEvent.date).getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [currentEvent]);

  if (!currentEvent) return null;

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="py-8"
    >
      <p className="text-center text-muted-foreground mb-4 text-sm font-medium">
        Countdown to <span className="text-primary font-semibold">{currentEvent.name}</span>
      </p>
      <div className="flex justify-center gap-3 md:gap-6">
        {timeBlocks.map((block, index) => (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-card border border-border shadow-md flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-club-blue/10 via-club-green/10 to-club-red/10" />
              <span className="text-2xl md:text-3xl font-bold text-foreground relative z-10">
                {block.value.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-2 font-medium">{block.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
