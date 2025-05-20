import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useTheme } from "./ThemeProvider";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <motion.a 
              className="flex items-center space-x-2 group"
              variants={logoVariants}
              initial="normal"
              whileHover="hover"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="font-bold text-2xl gradient-text">
                Ihsaan.
              </span>
              <motion.span 
                className="bg-primary h-2 w-2 rounded-full hidden sm:block"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks 
              setIsMenuOpen={setIsMenuOpen} 
              activeSection={activeSection}
            />
            
            <motion.button
              onClick={toggleTheme}
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-full bg-card hover:bg-card/80 border border-primary/10 accent-glow transition-all duration-300"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-primary" />
              ) : (
                <MoonIcon className="h-5 w-5 text-primary" />
              )}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-full bg-card hover:bg-card/80 border border-primary/10 transition-all duration-300 mr-2"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-primary" />
              ) : (
                <MoonIcon className="h-5 w-5 text-primary" />
              )}
            </motion.button>
            
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md bg-card hover:bg-card/80 border border-primary/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <XIcon className="h-6 w-6 text-primary" />
                ) : (
                  <MenuIcon className="h-6 w-6 text-primary" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/10 shadow-lg"
          >
            <div className="px-4 py-3 space-y-3">
              <NavLinks 
                setIsMenuOpen={setIsMenuOpen} 
                isMobile={true} 
                activeSection={activeSection}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

const NavLinks = ({ 
  setIsMenuOpen, 
  isMobile = false,
  activeSection
}: { 
  setIsMenuOpen: (value: boolean) => void, 
  isMobile?: boolean,
  activeSection?: string
}) => {
  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = activeSection === link.id;
        
        return (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            whileHover={isMobile ? {} : { y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`relative ${
              isMobile
                ? "block px-4 py-2 rounded-lg text-base font-medium"
                : "text-sm font-medium"
            } ${
              isActive 
                ? "text-primary font-semibold" 
                : "text-foreground hover:text-primary"
            } transition-colors duration-300`}
          >
            {link.name}
            {!isMobile && isActive && (
              <motion.span
                layoutId="navIndicator"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {isMobile && isActive && (
              <motion.span
                layoutId="navIndicatorMobile"
                className="absolute left-0 top-0 w-1 h-full bg-primary rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.a>
        );
      })}
    </>
  );
};
