import { motion } from 'framer-motion'
import { portfolioService } from '@/services/portfolioService'
import { SectionBoxHeader } from '@/components/FigmaDecorations'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Skills() {
  const skillsData = portfolioService.getSkillsData()

  return (
    <section
      id="skills"
      className="bg-figma-radial pt-12 pb-24 sm:pb-32 px-6 sm:px-10 lg:px-20 text-black"
    >
      <div className="max-w-[1004px] mx-auto flex flex-col items-center">
        {/* Figma Boxed Section Header (SKILLS / ESPECIALIDADES) */}
        <motion.div {...fadeInUp} className="mb-16 sm:mb-24">
          <SectionBoxHeader title={skillsData.sectionTitle} />
        </motion.div>

        {/* 3 Categories (ATUAÇÃO PRINCIPAL / FOCO & ATUALIZAÇÃO / OUTRAS COMPETÊNCIAS) */}
        <div className="w-full space-y-20 sm:space-y-24">
          {skillsData.categories.map((category) => {
            const categoryItems = skillsData.items.filter(
              (item) => item.category === category.key
            )

            return (
              <div key={category.key} className="w-full">
                {/* Category Heading (Montserrat 700, 30px, letter-spacing 0.18538em) */}
                <motion.h3
                  {...fadeInUp}
                  className="font-montserrat font-bold text-xl sm:text-2xl md:text-[30px] leading-[37px] tracking-[0.18538em] text-black uppercase mb-12 text-center sm:text-left"
                >
                  {category.title}
                </motion.h3>

                {/* 4-column Grid matching Figma Skills Icons & Labels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                  {categoryItems.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.07 }}
                      className="flex flex-col items-center text-center group"
                    >
                      {/* Emblem Box (96x100px in Figma) */}
                      <div
                        className="w-[92px] h-[96px] flex flex-col items-center justify-center border-2 border-black/80 shadow-[4px_4px_0px_rgba(0,0,0,0.85)] transition-transform duration-300 group-hover:-translate-y-1.5 mb-5 relative overflow-hidden"
                        style={{ backgroundColor: skill.accentColor }}
                      >
                        <span className="font-montserrat font-extrabold text-xl tracking-wider text-white">
                          {skill.shortCode}
                        </span>
                        <span className="mt-1 text-[9px] font-montserrat uppercase tracking-widest text-white/75">
                          {skill.badgeLabel || 'CONTÁBIL'}
                        </span>
                      </div>

                      {/* Skill Name (Montserrat 400, 24px -> responsive, letter-spacing 0.13538em) */}
                      <h4 className="font-montserrat font-normal text-base sm:text-[18px] lg:text-[20px] leading-[26px] tracking-[0.13538em] text-black uppercase mb-1.5">
                        {skill.name}
                      </h4>

                      {/* Clear Lorem Ipsum Markup Subtitle */}
                      <p className="font-opensans text-[11px] text-neutral-600 max-w-[200px] leading-snug">
                        {skill.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
