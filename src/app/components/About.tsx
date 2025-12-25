import { motion } from 'motion/react';

export function About() {
  const stats = [
    { label: 'Experience', value: '7+ Years' },
    { label: 'Projects Shipped', value: '15+' },
    { label: 'Users Impacted', value: '500K+' },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] border-t border-white/10" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label mb-8 md:mb-12">INFO</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="mb-6 md:mb-8">
                Building Platforms<br />
                That Scale
              </h2>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-4 md:mb-6">
                Senior Product Manager with 7+ years of experience building scalable platforms across GovTech, EdTech, AgriTech, and B2B SaaS.
              </p>
              <p className="text-base md:text-lg text-white/60 leading-relaxed">
                I specialize in converting complex operational, regulatory, and business requirements into reliable digital systems used at scale.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-white/10 pb-4 md:pb-6"
                >
                  <p className="label mb-2">{stat.label}</p>
                  <p className="text-3xl md:text-4xl text-[#c4ff0d]">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}