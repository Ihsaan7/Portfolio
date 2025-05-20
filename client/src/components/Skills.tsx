import { motion } from "framer-motion";
import SkillTag from "./SkillTag";

export default function Skills() {
  const skills = [
    { id: 1, name: "HTML", category: "Languages & Tools" },
    { id: 2, name: "CSS", category: "Languages & Tools" },
    { id: 3, name: "JavaScript", category: "Languages & Tools" },
    { id: 4, name: "jQuery", category: "Languages & Tools" },
    { id: 5, name: "React.js", category: "Languages & Tools" },
    { id: 6, name: "Next.js", category: "Languages & Tools" },
    { id: 7, name: "Node.js", category: "Languages & Tools" },
    { id: 8, name: "Tailwind CSS", category: "Languages & Tools" },
    { id: 9, name: "C++ (basic)", category: "Languages & Tools" },
    { id: 10, name: "Data Structures (basic)", category: "Languages & Tools" },
    { id: 11, name: "Frontend Development", category: "Specialties" },
    { id: 12, name: "Creative Styling", category: "Specialties" },
    { id: 13, name: "AI Prompting", category: "Specialties" },
    { id: 14, name: "Responsive Design", category: "Specialties" },
    { id: 15, name: "Backend Development", category: "Learning" },
    { id: 16, name: "Advanced React/Next.js", category: "Learning" },
    { id: 17, name: "AI-powered Applications", category: "Learning" }
  ];

  const categories = ["Languages & Tools", "Specialties", "Learning"];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here's a comprehensive overview of my technical abilities, specialties, and what I'm currently learning.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <SkillTag name={skill.name} category={category} />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-16 text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Always Learning & Growing
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            I believe in continuous improvement and am always expanding my skillset. 
            I'm enthusiastic about learning new technologies and staying updated with the 
            latest trends in web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
