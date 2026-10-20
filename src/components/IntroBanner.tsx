import { motion } from 'framer-motion'
import { portfolioService } from '@/services/portfolioService'
import { FigmaBracketButton } from '@/components/FigmaDecorations'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

/**
 * Seção de destaque escura logo abaixo do Hero (correspondente ao bloco ITberries do Figma)
 * Background: #1D1D1D com marca d'água rotacionada à direita (23.89deg)
 */
export function IntroBanner() {
  const banner = portfolioService.getIntroBannerData()

  const handleScrollToTarget = () => {
    const el = document.getElementById(banner.ctaTargetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full bg-[#1D1D1D] overflow-hidden py-14 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-24 border-t border-white/10">
      {/* Rotated Watermark Emblem on the Right (Figma Logo ITB: rotate(23.89deg), border 18px solid #000000) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-12 sm:right-6 lg:right-20 -bottom-10 sm:-top-8 w-[240px] h-[220px] sm:w-[320px] sm:h-[300px] border-[14px] sm:border-[18px] border-black/60 flex items-center justify-center opacity-35 sm:opacity-50"
        style={{ transform: 'rotate(23.89deg)' }}
      >
        <span className="font-varela text-[110px] sm:text-[160px] leading-none tracking-[3.78px] text-black/70">
          {banner.watermarkText}
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1148px]">
        <motion.h2
          {...fadeInUp}
          className="font-montserrat font-bold text-xl sm:text-2xl lg:text-[30px] leading-[37px] tracking-[0.18538em] text-white uppercase mb-6"
        >
          {banner.title}
        </motion.h2>

        <div className="space-y-4 mb-8">
          {banner.paragraphs.map((paragraph, idx) => {
            const isLorem = paragraph.includes('LOREM IPSUM')
            return (
              <motion.p
                key={idx}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: idx * 0.12 }}
                className={`font-opensans text-sm sm:text-[15px] leading-[1.55] text-justify ${
                  isLorem
                    ? 'text-gray-300/90 border-l-2 border-amber-400/70 pl-4 py-1 bg-white/[0.03]'
                    : 'text-white'
                }`}
              >
                {paragraph}
              </motion.p>
            )
          })}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.25 }}
        >
          <FigmaBracketButton
            label={banner.ctaLabel}
            variant="white"
            onClick={handleScrollToTarget}
          />
        </motion.div>
      </div>
    </section>
  )
}
