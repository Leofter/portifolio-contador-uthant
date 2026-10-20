import { motion } from 'framer-motion'
import { Briefcase, Building2, Award, GraduationCap, MapPin } from 'lucide-react'
import { portfolioService } from '@/services/portfolioService'
import { SectionBoxHeader, FigmaSeparator } from '@/components/FigmaDecorations'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Work() {
  const workData = portfolioService.getWorkData()

  return (
    <section
      id="work"
      className="bg-figma-radial py-20 sm:py-28 px-6 sm:px-10 lg:px-20 text-black border-t border-black/10"
    >
      <div className="max-w-[1066px] mx-auto flex flex-col items-center">
        {/* Figma Boxed Section Header */}
        <motion.div {...fadeInUp} className="mb-8">
          <SectionBoxHeader title={workData.sectionTitle} wide />
        </motion.div>

        {/* Experience & Education Highlights (+30 Anos na Área • Fundação Visconde de Cairu) */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-5"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-black text-white font-montserrat font-bold text-xs tracking-[0.2em] uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>+30 ANOS NA ÁREA</span>
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#D7D7D7] text-black border-2 border-black font-montserrat font-bold text-xs tracking-[0.16em] uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>{workData.educationBadge}</span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
          className="max-w-[720px] text-center font-opensans text-sm sm:text-[15px] text-neutral-800 mb-6"
        >
          {workData.sectionSubtitle}
        </motion.p>

        <FigmaSeparator variant="black" className="mb-14" />

        {/* Structured Grid of Main Accounting Functions (No Timeline Spine) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {workData.experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.75,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
              className="flex flex-col h-full"
            >
              <div className="h-full flex flex-col justify-between bg-white/90 border-l-[5px] border-b-[5px] border-t border-r border-black p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.14)] transition-all duration-300">
                <div>
                  {/* Top Row: Experience Indicator & Category Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2">
                      <span
                        className={`w-8 h-8 flex items-center justify-center font-montserrat font-extrabold text-xs border-2 border-black ${
                          exp.isCurrent
                            ? 'bg-black text-white'
                            : 'bg-[#D7D7D7] text-black'
                        }`}
                      >
                        {exp.stepNumber}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-montserrat font-bold text-xs tracking-wider uppercase text-neutral-700">
                        <Award className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>

                    <span
                      className={`px-3 py-1 font-montserrat font-bold text-[11px] tracking-[0.15em] uppercase ${
                        exp.isCurrent
                          ? 'bg-black text-white'
                          : 'bg-[#D7D7D7] text-black border border-black'
                      }`}
                    >
                      {exp.durationBadge}
                    </span>
                  </div>

                  {/* Function Title */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <Building2 className="w-5 h-5 text-black shrink-0" />
                    <h3 className="font-raleway font-extrabold text-xl sm:text-2xl text-black tracking-tight">
                      {exp.organization}
                    </h3>
                  </div>

                  {/* Scope / Subtitle */}
                  <p className="font-montserrat font-bold text-xs sm:text-sm text-neutral-800 uppercase tracking-wider mb-2">
                    {exp.role}
                  </p>

                  {/* Area tag */}
                  <p className="inline-flex items-center gap-1.5 font-opensans text-xs text-neutral-600 mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </p>

                  {/* Main Function Description */}
                  <p className="font-opensans text-sm text-black leading-relaxed mb-4 text-justify">
                    {exp.description}
                  </p>

                  {/* Specialty Highlight Box */}
                  <div className="p-3.5 bg-[#D7D7D7]/55 border border-black/40 mb-5">
                    <p className="font-opensans text-xs text-neutral-900 leading-relaxed text-justify">
                      {exp.specialtyHighlight}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 font-montserrat font-semibold text-[10px] tracking-wider uppercase bg-black/5 border border-black/25 text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <FigmaSeparator variant="black" className="mt-16" />
      </div>
    </section>
  )
}
