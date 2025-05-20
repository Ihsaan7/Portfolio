import { motion } from "framer-motion";

interface SkillTagProps {
  name: string;
  category: string;
}

export default function SkillTag({ name, category }: SkillTagProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Languages & Tools":
        return {
          bg: "bg-indigo-100 dark:bg-indigo-900/30",
          text: "text-indigo-800 dark:text-indigo-300",
          border: "border-indigo-200 dark:border-indigo-800"
        };
      case "Specialties":
        return {
          bg: "bg-teal-100 dark:bg-teal-900/30",
          text: "text-teal-800 dark:text-teal-300",
          border: "border-teal-200 dark:border-teal-800"
        };
      case "Learning":
        return {
          bg: "bg-amber-100 dark:bg-amber-900/30",
          text: "text-amber-800 dark:text-amber-300",
          border: "border-amber-200 dark:border-amber-800"
        };
      default:
        return {
          bg: "bg-gray-100 dark:bg-gray-800",
          text: "text-gray-800 dark:text-gray-300",
          border: "border-gray-200 dark:border-gray-700"
        };
    }
  };

  const colors = getCategoryColor(category);

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-full ${colors.bg} ${colors.text} ${colors.border} border text-sm font-medium inline-block transition-transform duration-200`}
    >
      {name}
    </motion.span>
  );
}
