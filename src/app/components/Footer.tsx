import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 sm:px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="label text-white/40 text-xs md:text-sm">
            © 2025 ABHIJEET KUMAR
          </p>
          
          <div className="flex gap-6 md:gap-8">
            <a 
              href="https://www.linkedin.com/in/abhijeet-kumar-spm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="label text-xs md:text-sm text-white/40 hover:text-[#c4ff0d] transition-colors"
            >
              LINKEDIN
            </a>
            <a 
              href="mailto:spm.abhijeet@gmail.com"
              className="label text-xs md:text-sm text-white/40 hover:text-[#c4ff0d] transition-colors"
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}