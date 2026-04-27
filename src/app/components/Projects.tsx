import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import presensiImg from "@/assets/images/presensi-app.png";
import companyImg from "@/assets/images/company-profile-gac.png";
import payrollImg from "@/assets/images/admin-payroll.png";
import cmsImg from "@/assets/images/cms.png";
import erpImg from "@/assets/images/erp.png";
import { useLanguage } from "../hooks/useLanguage";
import { useState } from "react";
import { TechBadge } from "./TechBadge";
import { techIcons } from "./techIcons";

export function Projects() {
  const { t } = useLanguage();
  const [displayCount, setDisplayCount] = useState(4);
  const PROJECTS_PER_PAGE = 4;

  const projectExtras = [
    {
      image: presensiImg,
      demo: "/case-study-presensi-app.pdf",
      github: null,
    },
    {
      image: payrollImg,
      demo: "https://payroll.gomega.co.id",
      github: null,
    },
    {
      image: companyImg,
      demo: "https://gomega.co.id",
      github: null,
    },
    {
      image: cmsImg,
      demo: "https://gomega.co.id/login",
      github: null,
    },
    {
      image: erpImg,
      demo: "https://gomega.gomega.co.id",
      github: null,
    },
  ];

  const projects = t.projects.projects.map((proj: any, idx: number) => ({
    ...proj,
    image: projectExtras[idx]?.image,
    demo: projectExtras[idx]?.demo,
    github: projectExtras[idx]?.github,
  }));

  const displayedProjects = projects.slice(0, displayCount);
  const hasMoreProjects = displayCount < projects.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + PROJECTS_PER_PAGE, projects.length));
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            {t.projects.sectionLabel}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 font-['Poppins']">
            {t.projects.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            {t.projects.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project: any, idx: number) => (
              <motion.div
                key={`${project.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: (idx % PROJECTS_PER_PAGE) * 0.1 }}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 sm:md-4 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-4">
                      {project.role}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  {project.tech.map((tech: string) => (
                    <TechBadge
                      key={tech}
                      name={tech}
                      icon={techIcons[tech] || null}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <AnimatePresence>
            {hasMoreProjects && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                onClick={handleLoadMore}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                {t.projects.loadMore}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
