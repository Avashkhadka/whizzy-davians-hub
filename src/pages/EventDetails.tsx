import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowLeft, FileText, Building2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getEventBySlug } from "@/data/events";

const EventDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : null;

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden"
              >
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-3 ${
                      event.status === "current"
                        ? "bg-secondary text-secondary-foreground"
                        : event.status === "upcoming"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {event.status === "current" ? "Happening Now" : event.status === "upcoming" ? "Upcoming" : "Completed"}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">{event.name}</h1>
                </div>
              </motion.div>

              {/* Event Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-club-blue/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-club-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-semibold text-foreground">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-club-green/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-club-green" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-semibold text-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-club-red/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-club-red" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Venue</p>
                      <p className="font-semibold text-foreground">{event.venue}</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-foreground mb-4">About This Event</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{event.fullDescription}</p>

                <h2 className="text-xl font-bold text-foreground mb-4">Registration Info</h2>
                <p className="text-muted-foreground leading-relaxed">{event.registrationInfo}</p>
              </motion.div>

              {/* Sponsors */}
              {event.sponsors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card rounded-2xl border border-border p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Our Sponsors</h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {event.sponsors.map((sponsor, index) => (
                      <div
                        key={index}
                        className="p-4 bg-muted/50 rounded-xl text-center border border-border"
                      >
                        <div className="w-16 h-16 mx-auto bg-background rounded-lg flex items-center justify-center mb-3 text-2xl">
                          🏢
                        </div>
                        <p className="font-medium text-foreground text-sm mb-1">{sponsor.name}</p>
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            sponsor.tier === "Title Sponsor"
                              ? "bg-secondary/20 text-secondary"
                              : sponsor.tier === "Co-Sponsor"
                              ? "bg-primary/20 text-primary"
                              : "bg-accent/20 text-accent"
                          }`}
                        >
                          {sponsor.tier}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Rules Button */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Event Rules</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Read the complete rules and guidelines for this event.
                </p>
                <Button variant="default" className="w-full" asChild>
                  <Link to={`/events/${event.slug}/rules`}>View Rules</Link>
                </Button>
              </div>

              {/* Quick Info */}
              <div className="bg-muted/50 rounded-2xl border border-border p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium text-foreground capitalize">{event.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sponsors</span>
                    <span className="font-medium text-foreground">{event.sponsors.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rules</span>
                    <span className="font-medium text-foreground">{event.rules.length}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetails;
