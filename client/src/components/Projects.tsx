import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Netflix UI Clone",
      description: "A modern Netflix UI clone built with Next.js and Tailwind CSS. Features responsive design and modern UI components matching Netflix's aesthetic.",
      tags: ["Next.js", "JavaScript", "Tailwind CSS"],
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      link: "https://netflixuiclone-dhv31epcd-egzziwd-8640s-projects.vercel.app"
    },
    {
      id: 2,
      title: "Soft UI 3 Dashboard",
      description: "A modern dashboard clone featuring a clean and intuitive interface. Built with Next.js and Tailwind CSS, showcasing advanced UI/UX design principles.",
      tags: ["Next.js", "JavaScript", "Tailwind CSS"],
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      link: "https://soft-ui-3-dashboard-master-3ngvvai8r-egzziwd-8640s-projects.vercel.app"
    },
    {
      id: 3,
      title: "Movie & TV Show Website",
      description: "An interactive movie and TV show website with a dark theme. Features include movie listings, details, and a responsive design.",
      tags: ["HTML", "CSS", "JavaScript", "jQuery"],
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      link: "https://ihsaan7.github.io/Movie-TvShow-Website-main/"
    },
    {
      id: 4,
      title: "Digital Resume",
      description: "A creative and modern digital resume showcasing personal information, skills, and experience with an innovative design approach.",
      tags: ["HTML", "CSS", "JavaScript"],
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      link: "https://ihsaan7.github.io/Digital-Resume/"
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
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://drive.google.com/file/d/10UdY4MD2XyUSfY9g-fKMi9Iz09_D5DcI/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors shadow-sm hover:shadow-md font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
            <p className="text-gray-600 dark:text-gray-400">
              These are just a few examples of my work. I'm always working on new projects and learning new technologies.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white rounded-lg border border-gray-200 dark:border-slate-600 transition-colors shadow-sm hover:shadow-md font-medium"
            >
              Interested in Working Together?
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
