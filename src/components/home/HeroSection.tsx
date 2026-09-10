import { AnimatePresence, motion } from "framer-motion";
import { Zap } from "lucide-react";
import imgcro1 from "../../assets/memories/1.jpg";
import imgcro2 from "../../assets/memories/8.jpg";
import imgcro3 from "../../assets/memories/7.jpg";
import imgcro4 from "../../assets/memories/9.jpg";
import imgcro5 from "../../assets/memories/10.jpg";
import imgcro6 from "../../assets/memories/12.jpg";
import imgcro7 from "../../assets/memories/13.jpg";
import { useEffect, useState } from "react";

export const HeroSection = () => {
    const images = [imgcro1, imgcro2, imgcro3, imgcro4, imgcro5, imgcro6, imgcro7];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/50 z-10 " />
            <motion.div
                className="absolute inset-0 flex"
                animate={{ x: `-${index * 100}%` }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                }}
            >
                {images.map((img, i) => (
                    <img key={i} src={img} className="w-full h-full object-cover flex-shrink-0" alt="" />
                ))}
            </motion.div>

            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-club-blue/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-club-green/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-club-red/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Animated Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="mb-6 inline-flex items-center justify-center"
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center  animate-float">
                            <img src="/whizzy.png" alt=""  />
                        </div>
                    </motion.div>

                    {/* Club Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4"
                    >
                        <span className="text-gradient">Whizzy Davians</span>
                        {/* <span className="text-white">Whizzy Davians</span> */}
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl md:text-2xl text-white text-muted-foreground font-medium"
                    >
                        Empowering students through events
                    </motion.p>
                </div>
            </div>
        </section>
    );
};
