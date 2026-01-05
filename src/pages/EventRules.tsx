import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getEventBySlug } from "@/data/events";

const EventRules = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : null;

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to={`/events/${event.slug}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Event Details
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Official Rules
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{event.name}</h1>
            <p className="text-muted-foreground">Please read all rules carefully before participating</p>
          </motion.div>

          {/* Rules List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8"
          >
            <ol className="space-y-4">
              {event.rules.map((rule, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-foreground leading-relaxed pt-1">{rule}</p>
                </motion.li>
              ))}
            </ol>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent/20 flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Agreement Required</p>
                <p className="text-sm text-muted-foreground">
                  By registering for this event, you agree to follow all the rules listed above.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to={`/events/${event.slug}`}>
                <ArrowLeft className="w-4 h-4" />
                Back to Event Details
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default EventRules;
