import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '../data/projects';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex flex-col md:flex-row bg-black">
        {/* Sidebar - Project Metadata - Hidden on mobile, shown on desktop */}
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          exit={{ x: -400 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex md:w-96 bg-black border-r border-white/10 overflow-y-auto flex-col"
        >
          <div className="p-8 flex-1">
            <button
              onClick={onClose}
              className="mb-12 text-white/60 hover:text-[#c4ff0d] transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="label">Back</span>
            </button>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl mb-4">{project.name}</h2>
                <p className="text-white/60">{project.outcome}</p>
              </div>

              <div>
                <p className="label mb-3">DOMAIN</p>
                <p className="text-white">{project.domain}</p>
              </div>

              <div>
                <p className="label mb-3">SERVICES</p>
                <div className="space-y-2">
                  <p className="text-white">PRODUCT STRATEGY</p>
                  <p className="text-white">SYSTEM DESIGN</p>
                  <p className="text-white">EXECUTION</p>
                </div>
              </div>

              <div>
                <p className="label mb-3">RESULTS</p>
                <div className="space-y-3">
                  {project.impact.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#c4ff0d] mt-1">+</span>
                      <p className="text-white/80 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 border-t border-white/10">
            <p className="text-xs text-white/40">
              Creating impactful solutions for complex operational systems.
            </p>
          </div>
        </motion.div>

        {/* Main Content - Case Study Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 overflow-y-auto bg-[#0a0a0a]"
        >
          <div className="sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10 z-10">
            <div className="p-4 md:p-8 flex justify-between items-center">
              {/* Mobile: Show back button */}
              <button
                onClick={onClose}
                className="md:hidden text-white/60 hover:text-[#c4ff0d] transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-mono uppercase tracking-wider">Back</span>
              </button>
              
              {/* Desktop: Show close button on right */}
              <div className="flex-1 md:flex md:justify-end">
                <button
                  onClick={onClose}
                  className="hidden md:block p-2 text-white/60 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Header - Project Metadata */}
          <div className="md:hidden px-4 py-6 border-b border-white/10 bg-black/50">
            <h2 className="text-2xl mb-3">{project.name}</h2>
            <p className="text-white/60 text-sm mb-4">{project.outcome}</p>
            <div className="flex gap-4 text-xs">
              <div>
                <p className="label mb-1">DOMAIN</p>
                <p className="text-white/80">{project.domain}</p>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-16 max-w-4xl space-y-12 md:space-y-16">
            {/* Problem Statement */}
            <Section title="Problem Statement">
              <p className="text-white/80 text-lg leading-relaxed">{project.problem}</p>
            </Section>

            {/* Users & Stakeholders */}
            <Section title="Users & Stakeholders">
              <ul className="space-y-3">
                {project.users.map((user, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#c4ff0d] mt-1">→</span>
                    <span className="text-white/80">{user}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Constraints */}
            <Section title="Constraints">
              <ul className="space-y-3">
                {project.constraints.map((constraint, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white/40 mt-1">•</span>
                    <span className="text-white/80">{constraint}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Solution Overview */}
            <Section title="Solution Overview">
              <p className="text-white/80 text-lg leading-relaxed">{project.solution}</p>
            </Section>

            {/* System / Workflow Flow */}
            <Section title="System / Workflow Flow">
              <ol className="space-y-6">
                {project.workflow.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="label text-[#c4ff0d] mt-1">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-white/80 flex-1">{step}</span>
                  </li>
                ))}
              </ol>
            </Section>

            {/* Key Features */}
            <Section title="Key Features">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="border border-white/10 p-4 hover:border-[#c4ff0d]/50 transition-colors">
                    <p className="text-white/80">{feature}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Impact & Outcomes */}
            <Section title="Impact & Outcomes">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.impact.map((item, index) => (
                  <div key={index} className="border-l-2 border-[#c4ff0d] pl-6">
                    <p className="text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Learnings */}
            <Section title="Learnings">
              <ul className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#c4ff0d] mt-1">✦</span>
                    <span className="text-white/80 italic">{learning}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div>
      <p className="label mb-6">{title.toUpperCase()}</p>
      {children}
    </div>
  );
}