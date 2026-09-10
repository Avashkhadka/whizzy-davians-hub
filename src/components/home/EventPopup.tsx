import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getCurrentEvent } from "@/data/events";

export const EventPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentEvent = getCurrentEvent();

    useEffect(() => {
        // Show popup after a short delay
        const timer = setTimeout(() => {
            if (currentEvent) {
                setIsOpen(true);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [currentEvent]);

    if (!currentEvent) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed z-50 max-w-lg mr-[1rem] lg:mr-0 popup-card"
                   
                    >
                        <div className="bg-card rounded-2xl shadow-xl overflow-hidden ">
                            {/* Event Image */}
                            <div className="relative h-[22rem] overflow-hidden">
                                <img src={currentEvent.image} alt={currentEvent.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full mb-2">Happening Now</span>
                                    <h2 className="text-2xl font-bold text-primary-foreground">{currentEvent.name}</h2>
                                </div>

                                {/* Close Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors"
                                    aria-label="Close popup"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <p className="text-muted-foreground">{currentEvent.shortDescription}</p>

                                <div className="flex flex-col gap-2 text-sm">
                                    <div className="flex items-center gap-2 text-foreground">
                                        <Calendar className="w-4 h-4 text-club-blue" />
                                        <span>{new Date(currentEvent.date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-foreground">
                                        <MapPin className="w-4 h-4 text-club-red" />
                                        <span>{currentEvent.venue}</span>
                                    </div>
                                </div>

                                <Button variant="hero" size="lg" className="w-full" asChild>
                                    <Link to={`/events/${currentEvent.slug}`} onClick={() => setIsOpen(false)}>
                                        View Details
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
