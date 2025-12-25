import { motion } from 'motion/react';
import { Mail, Linkedin, FileText } from 'lucide-react';

export function Contact() {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1T6kyGi5gnzSRfd1s6ZcfS3An-ChFxMWN/view?usp=drive_link', '_blank');
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label mb-8 md:mb-12">CONTACT</p>
          <h2 className="mb-12 md:mb-16">Let's Connect</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Email */}
            <div>
              <p className="label mb-4">EMAIL</p>
              <a 
                href="mailto:spm.abhijeet@gmail.com"
                className="text-lg md:text-xl text-white hover:text-[#c4ff0d] transition-colors break-all"
              >
                spm.abhijeet@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="label mb-4">PHONE</p>
              <a 
                href="tel:+917004546858"
                className="text-lg md:text-xl text-white hover:text-[#c4ff0d] transition-colors"
              >
                +91 7004546858
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <p className="label mb-4">LINKEDIN</p>
              <a 
                href="https://www.linkedin.com/in/abhijeet-kumar-spm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-white hover:text-[#c4ff0d] transition-colors inline-flex items-center gap-2"
              >
                Connect
                <span className="text-sm">↗</span>
              </a>
            </div>
          </div>

          {/* Resume Button */}
          <div className="pt-6 md:pt-8 border-t border-white/10">
            <button
              onClick={handleResumeClick}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#c4ff0d] text-black font-mono text-xs md:text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300 inline-flex items-center justify-center gap-2 md:gap-3"
            >
              <FileText className="w-4 h-4 md:w-5 md:h-5" />
              View Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}