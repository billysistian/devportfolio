import { AnimatePresence, motion } from "motion/react";

import { useLanguage } from "../../hooks/useLanguage";

import { ProjectCard } from "./ProjectCard";
import { projectImages } from "./projectImages";
import { useProjectsPagination } from "./projects.hooks";

export function Projects() {

  const { t } = useLanguage();

  const projects = t.projects.projects.map(
    (project: any, index: number) => ({
      ...project,
      ...projectImages[index],
    })
  );

  const {
    displayCount,
    hasMoreProjects,
    handleLoadMore,
  } = useProjectsPagination(projects.length);

  const displayedProjects = projects.slice(0, displayCount);

  return (
    <section
      id="projects"
      className="py-20 bg-white"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold uppercase text-sm">
            {t.projects.sectionLabel}
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            {t.projects.title}
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            {t.projects.description}
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <AnimatePresence mode="popLayout">

            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
              />
            ))}

          </AnimatePresence>

        </div>

        {hasMoreProjects && (
          <div className="mt-12 text-center">

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLoadMore}
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-3.5
                bg-blue-600
                text-white
                rounded-lg
                font-medium
                hover:bg-blue-700
                transition-colors
              "
            >
              {t.projects.loadMore}
            </motion.button>

          </div>
        )}

      </div>

    </section>
  );
}