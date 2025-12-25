import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      company: 'Radiant Infonet Pvt Ltd',
      period: 'June 2023 - September 2025',
      roles: [
        {
          title: 'Senior Product Manager',
          period: 'June 2024 - September 2025',
          highlights: [
            'Led development of large-scale GovTech platforms serving 500K+ users',
            'Managed multi-tenant assessment systems for 15+ government Sector Skill Councils',
            'Delivered complex workflow-heavy systems from 0→1 to nationwide scale'
          ]
        },
        {
          title: 'Product Manager',
          period: 'June 2023 - May 2024',
          highlights: [
            'Built hybrid commerce platform (E-Marketing eRetail) connecting online discovery with offline fulfillment',
            'Developed QR-based tracking systems deployed across 100+ operational centers',
            'Designed AgriTech B2C + B2B export platform for Northeast farmers'
          ]
        }
      ]
    },
    {
      company: 'Lecturenotes',
      period: 'August 2022 - April 2023',
      roles: [
        {
          title: 'Associate Product Manager',
          period: 'August 2022 - April 2023',
          highlights: [
            'Transitioned from EdTech domain expertise to core product management',
            'Led feature development and user research for EdTech platform'
          ]
        }
      ]
    },
    {
      company: 'Tutorbin',
      period: 'April 2021 - August 2022',
      roles: [
        {
          title: 'Expert',
          period: 'April 2021 - August 2022',
          highlights: [
            'Provided domain expertise in EdTech and assessment systems',
            'Contributed to product strategy and feature prioritization'
          ]
        }
      ]
    },
    {
      company: 'Sirena Technologies',
      period: 'September 2018 - February 2021',
      roles: [
        {
          title: 'Senior Robotics Engineer',
          period: 'December 2019 - February 2021',
          highlights: [
            'Led robotics engineering projects and technical implementations',
            'Developed foundation in systems thinking and technical product design'
          ]
        },
        {
          title: 'Robotics Engineer',
          period: 'September 2018 - November 2019',
          highlights: [
            'Worked on robotics systems and automation solutions',
            'Built understanding of hardware-software integration'
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] border-t border-white/10" id="experience">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label mb-8 md:mb-12">ARCHIVE</p>
          <h2 className="mb-12 md:mb-16">Experience</h2>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-l-2 border-white/10 pl-4 md:pl-8 hover:border-[#c4ff0d] transition-colors duration-300"
              >
                <p className="label mb-3 md:mb-4">{exp.period}</p>
                <h3 className="text-xl md:text-2xl mb-6 text-white">{exp.company}</h3>
                
                <div className="space-y-8">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-3">
                        <h4 className="text-lg md:text-xl text-[#c4ff0d]">{role.title}</h4>
                        <p className="text-sm text-white/40 font-mono">{role.period}</p>
                      </div>
                      <ul className="space-y-2 md:space-y-3">
                        {role.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-white/60">
                            <span className="text-[#c4ff0d] mt-1 flex-shrink-0">→</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}