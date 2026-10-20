import { motion } from 'framer-motion'
import { FileText, ShieldCheck } from 'lucide-react'
import { portfolioService } from '@/services/portfolioService'
import {
  SectionBoxHeader,
  FigmaSeparator,
  FigmaBracketButton,
} from '@/components/FigmaDecorations'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function About() {
  const about = portfolioService.getAboutData()

  const scrollToSolutions = () => {
    const el = document.getElementById('portfolio')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderPillarIcon = (type: 'consulting' | 'litigation' | 'planning') => {
    switch (type) {
      case 'consulting':
        return <FileText className="w-14 h-14 text-black/15" strokeWidth={1.5} />
      case 'litigation':
        return (
          <img
            src="/logo/contabilidade-logo.png"
            alt=""
            className="w-14 h-14 object-contain opacity-15"
          />
        )
      case 'planning':
        return (
          <ShieldCheck className="w-14 h-14 text-black/15" strokeWidth={1.5} />
        )
    }
  }

  const topRowServices = about.services.slice(0, 2)
  const bottomService = about.services[2]

  return (
    <section
      id="about"
      className="bg-figma-radial pt-24 sm:pt-32 pb-16 px-6 sm:px-10 lg:px-20 text-black"
    >
      <div className="max-w-[1066px] mx-auto flex flex-col items-center">
        {/* Figma Boxed Section Header */}
        <motion.div {...fadeInUp} className="mb-12 sm:mb-16">
          <SectionBoxHeader title={about.sectionTitle} />
        </motion.div>

        {/* Intro Paragraph (Larger font size as requested) */}
        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="max-w-[820px] text-center font-opensans text-base sm:text-lg lg:text-[20px] leading-[1.7] text-[#050505] mb-10"
        >
          {about.introParagraph}
        </motion.p>

        {/* Explore Bracket Button */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="mb-10"
        >
          <FigmaBracketButton
            label={about.exploreLabel}
            variant="black"
            onClick={scrollToSolutions}
          />
        </motion.div>

        {/* Ornamental Separator 1 */}
        <FigmaSeparator variant="black" className="my-10 sm:my-14" />

        {/* 3 Services Grid (2 on top, 1 centered on bottom — Identical to Figma) */}
        <div className="w-full mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-12 lg:mb-16">
            {topRowServices.map((service, idx) => (
              <motion.div
                key={service.id}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: idx * 0.15 }}
                className="relative pl-6 sm:pl-10"
              >
                {/* Watermark Icon behind Title (Figma luminosity icon) */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 -top-3 pointer-events-none"
                >
                  {renderPillarIcon(service.iconType)}
                </div>

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="font-montserrat font-bold text-xl sm:text-[24px] leading-[30px] tracking-[0.18538em] text-black uppercase">
                      {service.title}
                    </h3>
                    {service.isPlaceholder && (
                      <span className="px-2 py-0.5 text-[10px] font-montserrat font-bold uppercase tracking-wider bg-black/10 text-black/80 border border-black/20">
                        Lorem Ipsum
                      </span>
                    )}
                  </div>
                  <p className="font-opensans font-normal text-base sm:text-[17px] leading-[1.65] text-black text-justify">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3rd Service Centered on Bottom Row (Figma Service 3) */}
          {bottomService && (
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="max-w-[540px] mx-auto relative pl-6 sm:pl-10"
            >
              <div
                aria-hidden="true"
                className="absolute left-0 -top-3 pointer-events-none"
              >
                {renderPillarIcon(bottomService.iconType)}
              </div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <h3 className="font-montserrat font-bold text-xl sm:text-[24px] leading-[30px] tracking-[0.18538em] text-black uppercase">
                    {bottomService.title}
                  </h3>
                  {bottomService.isPlaceholder && (
                    <span className="px-2 py-0.5 text-[10px] font-montserrat font-bold uppercase tracking-wider bg-black/10 text-black/80 border border-black/20">
                      Lorem Ipsum
                    </span>
                  )}
                </div>
                <p className="font-opensans font-normal text-base sm:text-[17px] leading-[1.65] text-black text-justify">
                  {bottomService.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Ornamental Separator 2 */}
        <FigmaSeparator variant="black" className="mt-16 sm:mt-20 mb-4" />
      </div>
    </section>
  )
}
