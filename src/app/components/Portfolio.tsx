import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

interface PortfolioProps {
  onProjectClick: (project: Project) => void;
}

export function Portfolio({ onProjectClick }: PortfolioProps) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-black border-t border-white/10" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 md:mb-16">
            <p className="label mb-6 md:mb-8">SELECTED WORK</p>
            <h2>Case Studies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                onClick={() => onProjectClick(project)}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}