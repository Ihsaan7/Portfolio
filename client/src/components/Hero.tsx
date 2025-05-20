import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-16 pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-950 dark:to-slate-900"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Ihsaan Ullah</span>
            </h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Frontend Developer & Creative Stylist
            </motion.h2>

            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Bringing designs to life with clean code and creative styling. 
              Passionate about building engaging user experiences and making the web beautiful.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a 
                href="#projects" 
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors shadow-md hover:shadow-lg font-medium"
              >
                View My Work
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white rounded-lg border border-gray-200 dark:border-slate-700 transition-colors shadow-sm hover:shadow-md font-medium"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <a href="#about" aria-label="Scroll down">
                <svg 
                  className="w-6 h-10 text-gray-500 dark:text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
