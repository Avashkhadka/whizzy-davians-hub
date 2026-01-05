import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import invitation from "@/assets/file/4th_BCA_CUP_INVITATION_FORM.pdf";
const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Moments & Memories", path: "/gallery" },
    { name: "Meet the Team", path: "/team" },
];

const REGISTER_URL = "/";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10  flex items-center justify-center transition-all duration-300">
                        <img src="/whizzy.png" alt="" />
                    </div>
                    <span className="text-xl font-bold text-foreground">Whizzy Davians</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors duration-300 relative ${
                                location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            {link.name}
                            {location.pathname === link.path && <motion.div layoutId="navbar-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                        </Link>
                    ))}
                </div>

                {/* Register Button */}
                <div className="hidden md:block">
                    <Button variant="nav" size="default" asChild>
                        <a href={invitation} download={true} target="_blank" rel="noopener noreferrer">
                            Registration Form
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-base font-medium py-2 ${location.pathname === link.path ? "text-primary" : "text-muted-foreground"}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button variant="nav" size="lg" className="mt-2" asChild>
                                <a href={invitation} download={true} target="_blank" rel="noopener noreferrer">
                                    Registration Form
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
