import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getCurrentEvent, getUpcomingEvents, getPastEvents } from "@/data/events";

const Events = () => {
    const currentEvent = getCurrentEvent();
    const upcomingEvents = getUpcomingEvents();
    const pastEvents = getPastEvents();

    return (
        <Layout>
            <div className="min-h-screen py-20">
                <div className="container mx-auto px-4">
                    {/* Page Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Events</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover our exciting lineup of events designed to inspire, engage, and empower.</p>
                    </motion.div>

                    {/* Current Event */}
                    {currentEvent && (
                        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-16">
                            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                                Happening Now
                            </h2>
                            <div className="bg-card rounded-2xl h-[] border border-border shadow-lg overflow-hidden">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="relative h-64 md:h-[25rem]  overflow-hidden">
                                        <img src={currentEvent.image} alt={currentEvent.name} className="w-full h-full object-cover " />
                                    </div>
                                    <div className="p-8 flex flex-col ">
                                        <span className="inline-block w-fit px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">Current Event</span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{currentEvent.name}</h3>
                                        <p className="text-muted-foreground mb-6">{currentEvent.shortDescription}</p>
                                        <div className="flex flex-col gap-2 mb-6">
                                            <div className="flex items-center gap-2 text-foreground">
                                                <Calendar className="w-5 h-5 text-club-blue" />
                                                <span>
                                                    {new Date(currentEvent.date).toLocaleDateString("en-US", {
                                                        weekday: "long",
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-foreground">
                                                <MapPin className="w-5 h-5 text-club-red" />
                                                <span>{currentEvent.venue}</span>
                                            </div>
                                        </div>
                                        <Button variant="hero" size="lg" className="w-fit" asChild>
                                            <Link to={`/events/${currentEvent.slug}`}>
                                                View Details
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    )}
                    {/* Upcoming Events */}
                    {/* 
                    {upcomingEvents.length > 0 && (
                        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-16">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Upcoming Events</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {upcomingEvents.map((event, index) => (
                                    <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }}>
                                        <Link to={`/events/${event.slug}`} className="block group">
                                            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                                <div className="h-40 overflow-hidden relative">
                                                    <img src={event.image} alt={event.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Upcoming</span>
                                                </div>
                                                <div className="p-5">
                                                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{event.name}</h3>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>
                                                            {new Date(event.date).toLocaleDateString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric",
                                                            })}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">{event.shortDescription}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    )}
                                                                */}

                    {/* Past Events */}
                    {pastEvents.length > 0 && (
                        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                            <h2 className="text-2xl font-bold text-foreground mb-6">Past Events</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {pastEvents.map((event, index) => (
                                    <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }}>
                                        <Link to={`/events/${event.slug}`} className="block group">
                                            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-80 hover:opacity-100">
                                                <div className="h-40 overflow-hidden relative">
                                                    <img src={event.image} alt={event.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                                    <span className="absolute top-4 left-4 px-3 py-1 bg-muted-foreground/20 text-muted-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                                                        Completed
                                                    </span>
                                                </div>
                                                <div className="p-5">
                                                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{event.name}</h3>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>
                                                            {new Date(event.date).toLocaleDateString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric",
                                                            })}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">{event.shortDescription}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Events;
