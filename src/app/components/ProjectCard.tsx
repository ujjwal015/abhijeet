import { motion } from 'motion/react';
import { ArrowUpRight, Eye } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer border border-white/10 hover:border-[#c4ff0d] hover:shadow-[0_0_30px_rgba(196,255,13,0.3)] transition-all duration-300 relative overflow-hidden h-full flex flex-col"
    >
      {/* Neon glow background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#c4ff0d]/0 via-[#c4ff0d]/0 to-[#c4ff0d]/0 group-hover:from-[#c4ff0d]/5 group-hover:via-[#c4ff0d]/10 group-hover:to-[#c4ff0d]/5 transition-all duration-500" />
      
      <div className="relative p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex-1">
          <p className="label mb-3 text-white/60 group-hover:text-[#c4ff0d] transition-colors duration-300">
            {project.domain}
          </p>
          <h3 className="text-xl md:text-2xl mb-4 text-white group-hover:text-[#c4ff0d] transition-all duration-300 leading-tight">
            {project.name}
          </h3>
          <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300 text-sm leading-relaxed line-clamp-3">
            {project.outcome}
          </p>
        </div>
        
        {/* Click to view indicator */}
        <div className="mt-6 pt-6 border-t border-white/5 group-hover:border-[#c4ff0d]/30 transition-colors duration-300 flex items-center justify-between">
          <p className="text-xs font-mono uppercase tracking-wider text-white/40 group-hover:text-[#c4ff0d] transition-colors duration-300">
            View Case Study
          </p>
          <div className="flex items-center gap-2">
            <motion.div
              className="text-white/40 group-hover:text-[#c4ff0d] transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <Eye className="w-4 h-4" />
            </motion.div>
            
            <motion.div
              className="text-white/40 group-hover:text-[#c4ff0d] transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 45 }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}