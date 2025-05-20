import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-slate-700 rounded-full">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-6 h-6"
              aria-hidden="true"
            />
          </div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="border-t border-gray-100 dark:border-slate-700">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-3 text-primary hover:text-primary/80 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
        >
          View Project
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </motion.div>
  );
}
