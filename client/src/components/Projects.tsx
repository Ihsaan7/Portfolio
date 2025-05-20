import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A responsive dashboard for e-commerce analytics built with Next.js and Tailwind CSS. Features include real-time data visualization and user authentication.",
      tags: ["Next.js", "Tailwind CSS", "Chart.js", "API Integration"],
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Website Template",
      description: "A customizable portfolio template for developers and designers. Built with modern web technologies and featuring smooth animations and dark mode support.",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Responsive Design"],
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects. Features include drag-and-drop interface, task priorities, and team collaboration tools.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      link: "#"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A weather application with a clean UI that provides current conditions and forecasts. Features location detection and detailed weather information.",
      tags: ["JavaScript", "CSS3", "Weather API", "Geolocation API"],
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            These are just a few examples of my work. I'm always working on new projects and learning new technologies.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white rounded-lg border border-gray-200 dark:border-slate-600 transition-colors shadow-sm hover:shadow-md font-medium"
          >
            Interested in Working Together?
          </a>
        </motion.div>
      </div>
    </section>
  );
}
