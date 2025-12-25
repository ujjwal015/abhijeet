import { motion } from 'motion/react';
import { ArrowDown, Sparkles, ShoppingCart, Zap, TrendingUp, Briefcase, GraduationCap, Download } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export function Hero({ onViewProjects, onContact }: HeroProps) {
  const stats = [
    { value: '500K+', label: 'Users Impacted' },
    { value: '15+', label: 'Gov Platforms' }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 md:px-12 pt-32 sm:pt-36 md:pt-24 pb-16 md:pb-12 bg-black overflow-hidden">
      {/* Enhanced animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(196,255,13,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(196,255,13,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(196,255,13,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(196,255,13,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      {/* Multiple gradient orbs for depth */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#c4ff0d] opacity-[0.08] blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#c4ff0d] opacity-[0.06] blur-[130px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#c4ff0d] opacity-[0.04] blur-[140px] rounded-full" />

      {/* Download Resume Button - Top Right */}
      <motion.a
        href="https://drive.google.com/file/d/1T6kyGi5gnzSRfd1s6ZcfS3An-ChFxMWN/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-16 md:top-20 right-4 sm:right-6 md:right-12 z-20 group"
      >
        <div className="flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 border-2 border-[#c4ff0d]/40 bg-black/80 backdrop-blur-sm hover:bg-[#c4ff0d]/10 hover:border-[#c4ff0d] transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,255,13,0.4)] hover:scale-105">
          <Download className="w-4 h-4 md:w-5 md:h-5 text-[#c4ff0d] group-hover:animate-bounce" />
          <span className="text-[#c4ff0d] font-mono text-xs md:text-sm uppercase tracking-wider font-bold">
            Resume
          </span>
        </div>
      </motion.a>

      <div className="flex-1 flex flex-col justify-center max-w-7xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 md:mb-10 px-4 py-2 border border-[#c4ff0d]/40 bg-[#c4ff0d]/10 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-[#c4ff0d] rounded-full animate-pulse" />
            <span className="text-[#c4ff0d] text-xs md:text-sm font-mono uppercase tracking-wider">Immediately Available for Opportunity</span>
          </motion.div>

          {/* Main title with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-8 md:mb-10"
          >
            <h1 className="leading-[0.9] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 md:mb-8">
              <span className="text-white">ABHIJEET</span>{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#c4ff0d] to-[#a8d60a] blur-xl opacity-50" />
                <span className="relative bg-gradient-to-r from-[#c4ff0d] via-[#d4ff4d] to-[#c4ff0d] bg-clip-text text-transparent animate-pulse">
                  KUMAR
                </span>
              </span>
            </h1>
            
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c4ff0d] via-[#c4ff0d]/50 to-transparent">
                <motion.div
                  animate={{ y: [0, '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-full h-1/3 bg-gradient-to-b from-white to-[#c4ff0d]"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#c4ff0d] font-mono uppercase tracking-wider font-bold">
                SENIOR PRODUCT MANAGER
              </h2>
            </div>
          </motion.div>
          
          {/* Expertise badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-10 md:mb-12"
          >
            <div className="group px-4 py-2 border border-[#c4ff0d]/30 bg-[#c4ff0d]/5 hover:bg-[#c4ff0d]/10 transition-all duration-300 hover:border-[#c4ff0d]/60">
              <div className="flex items-center gap-2 text-[#c4ff0d]">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-mono uppercase tracking-wider">AI/ML Systems</span>
              </div>
            </div>
            <div className="group px-4 py-2 border border-[#c4ff0d]/30 bg-[#c4ff0d]/5 hover:bg-[#c4ff0d]/10 transition-all duration-300 hover:border-[#c4ff0d]/60">
              <div className="flex items-center gap-2 text-[#c4ff0d]">
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm font-mono uppercase tracking-wider">Ecommerce</span>
              </div>
            </div>
            <div className="group px-4 py-2 border border-[#c4ff0d]/30 bg-[#c4ff0d]/5 hover:bg-[#c4ff0d]/10 transition-all duration-300 hover:border-[#c4ff0d]/60">
              <div className="flex items-center gap-2 text-[#c4ff0d]">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-mono uppercase tracking-wider">Platform Eng</span>
              </div>
            </div>
            <div className="group px-4 py-2 border border-[#c4ff0d]/30 bg-[#c4ff0d]/5 hover:bg-[#c4ff0d]/10 transition-all duration-300 hover:border-[#c4ff0d]/60">
              <div className="flex items-center gap-2 text-[#c4ff0d]">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-mono uppercase tracking-wider">B2B SaaS</span>
              </div>
            </div>
            <div className="group px-4 py-2 border border-[#c4ff0d]/30 bg-[#c4ff0d]/5 hover:bg-[#c4ff0d]/10 transition-all duration-300 hover:border-[#c4ff0d]/60">
              <div className="flex items-center gap-2 text-[#c4ff0d]">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-mono uppercase tracking-wider">HRMS</span>
              </div>
            </div>
            <div className="group px-4 py-2 border border-[#c4ff0d]/30 bg-[#c4ff0d]/5 hover:bg-[#c4ff0d]/10 transition-all duration-300 hover:border-[#c4ff0d]/60">
              <div className="flex items-center gap-2 text-[#c4ff0d]">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-mono uppercase tracking-wider">ED-Tech</span>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="max-w-3xl mb-12 md:mb-16"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-light">
              Building enterprise-grade platforms that serve <span className="text-[#c4ff0d] font-normal">500K+ users</span> across government, 
              agriculture, education, and HRMS sectors with <span className="text-[#c4ff0d] font-normal">AI-powered intelligence</span>.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16 max-w-2xl"
          >
            {stats.map((stat, index) => (
              <div key={index} className="border border-white/10 p-4 md:p-6 bg-white/5 backdrop-blur-sm hover:border-[#c4ff0d]/40 transition-all duration-300 group">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#c4ff0d] mb-2 font-mono group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onViewProjects}
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-[#c4ff0d] text-black font-mono text-sm md:text-base uppercase tracking-wider font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(196,255,13,0.6)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-[#c4ff0d] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button
              onClick={onContact}
              className="group px-8 md:px-10 py-4 md:py-5 border-2 border-[#c4ff0d]/40 text-white font-mono text-sm md:text-base uppercase tracking-wider font-bold hover:bg-[#c4ff0d]/10 hover:border-[#c4ff0d] transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,255,13,0.3)] hover:scale-105"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="flex flex-col items-center gap-2 pb-4 md:pb-0 relative z-10"
      >
        <span className="text-[#c4ff0d]/60 text-xs font-mono uppercase tracking-wider">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#c4ff0d] cursor-pointer hover:text-white transition-colors"
          onClick={onViewProjects}
        >
          <ArrowDown className="w-6 h-6 md:w-7 md:h-7" />
        </motion.div>
      </motion.div>
    </section>
  );
}