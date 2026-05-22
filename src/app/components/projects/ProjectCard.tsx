import { motion } from "motion/react";
import { ExternalLink, Github, Eye } from "lucide-react";

import { TechBadge } from "../TechBadge";
import { techIcons } from "../techIcons";

import type { Project } from "./projects.types";

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({
  project,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
      }}
      className="
        group
        bg-slate-50
        rounded-2xl
        overflow-hidden
        border
        border-slate-100
        hover:shadow-xl
        transition-shadow
      "
    >
      <div className="relative overflow-hidden h-64">

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-slate-900/60
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            flex
            items-center
            justify-center
            gap-4
          "
        >
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}

          {project.views && (
            <a
              href={project.views}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Eye size={20} />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8">

        <h3 className="text-xl font-bold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-blue-600">
          {project.role}
        </p>

        <p className="mt-4 text-slate-600 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <TechBadge
              key={tech}
              name={tech}
              icon={techIcons[tech] || null}
            />
          ))}
        </div>

      </div>
    </motion.div>
  );
}