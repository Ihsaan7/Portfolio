import { motion } from "framer-motion";

export default function About() {
  // Photo of Ihsaan for about section
  const profileImagePath = "/images/profile2.jpg";
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="mb-4 inline-block">
            <span className="bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full border border-primary/20">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 gradient-text">
            Get to Know Me Better
          </h2>
          <p className="text-lg text-foreground/80">
            My background, expertise, and what drives my passion for creating on the web.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Profile Image with decorative elements */}
                <div className="relative w-full h-96 rounded-xl shadow-xl overflow-hidden animated-border p-0.5">
                  <img 
                    src={profileImagePath} 
                    alt="Ihsaan Ullah" 
                    className="w-100 h-200 object-contain rounded-lg" 
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-secondary/20 dark:bg-secondary/10 rounded-lg -z-10 blur-sm"></div>
                <div className="absolute -top-6 -left-6 w-28 h-28 bg-primary/20 dark:bg-primary/10 rounded-lg -z-10 blur-sm"></div>
                
                <motion.div 
                  className="absolute -bottom-3 -right-3 flex items-center justify-center rounded-full bg-background p-3 shadow-lg border border-primary/20"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-primary text-3xl font-bold">22</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-card p-6 rounded-lg shadow-sm border border-primary/10 hover-lift"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center">
                  <span className="text-primary mr-2 text-3xl">•</span>
                  <span>Who Am I?</span>
                </h3>
                <p className="text-foreground/80">
                  I'm Ihsaan Ullah, a 22-year-old Frontend Developer based in Islamabad, Pakistan. 
                  With a passion for creating beautiful, functional web experiences, I hold a Bachelor's 
                  degree in Software Engineering and specialize in frontend development and creative styling.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="bg-card p-6 rounded-lg shadow-sm border border-primary/10 hover-lift"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center">
                  <span className="text-secondary mr-2 text-3xl">•</span>
                  <span>My Expertise</span>
                </h3>
                <p className="text-foreground/80">
                  My core strengths include frontend development, creative styling, AI prompting, 
                  and CSS/Tailwind expertise. I enjoy bringing designs to life and creating 
                  engaging user interfaces that are both visually appealing and highly functional.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="bg-card p-6 rounded-lg shadow-sm border border-primary/10 hover-lift"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center">
                  <span className="text-accent mr-2 text-3xl">•</span>
                  <span>Learning & Goals</span>
                </h3>
                <p className="text-foreground/80">
                  I'm currently enhancing my skills in backend development, advanced React/Next.js, 
                  and AI-powered applications. My career goal is to gain hands-on experience in a 
                  professional environment where I can grow and contribute meaningfully to innovative projects.
                </p>
              </motion.div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block px-6 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-md hover:shadow-lg font-medium group overflow-hidden relative hover-lift animated-border"
                >
                  <span className="relative z-10 flex items-center">
                    Let's Connect
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
