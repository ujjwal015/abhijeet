import { motion } from 'motion/react';

export function Skills() {
  const skillGroups = [
    {
      category: 'Product',
      skills: ['Product Strategy', 'Roadmapping', 'PRDs', 'Backlog Management', 'Stakeholder Alignment']
    },
    {
      category: 'Execution',
      skills: ['Agile / Scrum', 'Jira', 'Confluence', 'Sprint Planning', 'UAT', 'Go-Live']
    },
    {
      category: 'Domains',
      skills: ['GovTech', 'EdTech', 'AgriTech', 'HRTech', 'B2B SaaS']
    },
    {
      category: 'Tech Awareness',
      skills: ['API-based systems', 'Role-based access', 'Workflow engines', 'AI-assisted decision systems']
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-black border-t border-white/10" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label mb-8 md:mb-12">SKILLS</p>
          <h2 className="mb-12 md:mb-16">Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-white/10 pb-6 md:pb-8"
              >
                <p className="label mb-4 md:mb-6">{group.category.toUpperCase()}</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 md:px-4 py-1.5 md:py-2 border border-white/20 text-white/80 text-xs md:text-sm hover:border-[#c4ff0d] hover:text-[#c4ff0d] transition-colors duration-300"
                    >
                      {skill}
                    </span>
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