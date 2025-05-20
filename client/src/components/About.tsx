import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get to know me, my background, and what I'm passionate about.
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
                <div className="w-full h-80 bg-gradient-to-br from-primary/80 to-indigo-500/80 rounded-lg shadow-xl overflow-hidden flex items-center justify-center">
                  <svg className="w-40 h-40 text-white/20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7 11c0-4.97-4.03-8-7-8s-7 3.03-7 8h14z" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-200 dark:bg-indigo-900/30 rounded-lg -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-200 dark:bg-slate-800 rounded-lg -z-10"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Who Am I?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm Ihsaan Ullah, a 24-year-old Frontend Developer with a passion for creating 
                  beautiful, functional web experiences. I hold a Bachelor's degree in Software 
                  Engineering and specialize in frontend development and creative styling.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  My Expertise
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  My core strengths include frontend development, creative styling, AI prompting, 
                  and CSS/Tailwind expertise. I enjoy bringing designs to life and creating 
                  engaging user interfaces that are both visually appealing and highly functional.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Learning & Goals
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm currently enhancing my skills in backend development, advanced React/Next.js, 
                  and AI-powered applications. My career goal is to gain hands-on experience in a 
                  professional environment where I can grow and contribute meaningfully to innovative projects.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors shadow-md hover:shadow-lg font-medium"
                >
                  Let's Connect
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
