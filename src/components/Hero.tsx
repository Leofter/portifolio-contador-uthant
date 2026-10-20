import { motion } from 'framer-motion'
import { Mail, Linkedin, Scale } from 'lucide-react'
import { portfolioService } from '@/services/portfolioService'
import { FigmaSeparator } from '@/components/FigmaDecorations'

export function Hero() {
  const hero = portfolioService.getHeroData()
  const socialLinks = portfolioService.getSocialLinks()

  const renderSocialIcon = (iconType: 'mail' | 'linkedin' | 'scale') => {
    switch (iconType) {
      case 'mail':
        return <Mail className="w-7 h-7 text-black" strokeWidth={2.2} />
      case 'linkedin':
        return <Linkedin className="w-7 h-7 text-black" strokeWidth={2.2} />
      case 'scale':
        return <Scale className="w-7 h-7 text-black" strokeWidth={2.2} />
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#D7D7D7]"
    >
      {/* ===================================================================
          DESKTOP & TABLET DIAGONAL SPLIT BACKGROUND (Figma Rectangle 67)
         =================================================================== */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-[-18%] right-[-18%] w-[68%] lg:w-[64%] h-[145%] bg-black origin-center pointer-events-none shadow-[-20px_0_50px_rgba(0,0,0,0.25)]"
        style={{
          transform: 'rotate(9.67deg)',
        }}
      />

      {/* Mobile Dark Atmospheric Background */}
      <div
        aria-hidden="true"
        className="md:hidden absolute inset-0 bg-gradient-to-b from-[#141414] via-[#1c1c1c] to-[#000000] pointer-events-none"
      />

      {/* ===================================================================
          MAIN HERO CONTAINER
         =================================================================== */}
      <div className="relative z-10 max-w-[1440px] mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between pt-20 md:pt-24 px-6 sm:px-10 lg:px-20">
        {/* LEFT COLUMN — Text & Social Boxes (Desktop on #D7D7D7) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-[50%] lg:w-[48%] py-8 md:py-12 flex flex-col items-center md:items-start text-center md:text-left z-20"
        >
          {/* Experience Highlight Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 bg-black/90 text-white border border-black/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="font-montserrat font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase">
              {hero.experienceBadge}
            </span>
          </div>

          {/* Greeting ("Hi, I am" -> "Olá, eu sou") */}
          <p className="font-advent md:font-raleway font-normal md:font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[47px] text-white md:text-black mb-2 md:mb-4">
            {hero.greeting}
          </p>

          {/* Professional Name in High Prominence ("Uthant Torres Magalhães") */}
          <h1 className="font-montserrat md:font-raleway font-bold text-4xl sm:text-5xl lg:text-[64px] xl:text-[74px] leading-[1.08] tracking-tight text-white md:text-black mb-1.5">
            {hero.fullName}
          </h1>

          {/* Subtitle Directly Below Name in Smaller Font ("Soluções Contábeis") */}
          <p className="font-montserrat md:font-raleway font-semibold text-sm sm:text-lg lg:text-[20px] tracking-[0.22em] uppercase text-gray-200 md:text-neutral-800 mb-4">
            {hero.subtitleBelowName}
          </p>

          {/* Role / Specialty ("Contador • +30 Anos na Área") */}
          <p className="font-montserrat md:font-raleway font-semibold md:font-extrabold text-base sm:text-xl lg:text-[23px] lg:leading-[29px] text-gray-300 md:text-[#919191] max-w-xl">
            {hero.role}
          </p>

          {/* Current Firm & Past Experience Sub-badge */}
          <p className="mt-3 font-montserrat font-semibold text-xs tracking-[0.16em] uppercase text-gray-400 md:text-neutral-700">
            {hero.currentFirmBadge}
          </p>

          {/* Mobile Ornamental Divider (Figma separatorWhite) */}
          <div className="md:hidden w-full">
            <FigmaSeparator variant="white" className="my-5" />
          </div>

          {/* 3 Social Icon Boxes (Figma Rectangle 68, 69, 70 -> 61x56px #C4C4C4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 md:mt-12 flex items-center gap-6 sm:gap-8"
          >
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-label={link.label}
                title={link.label}
                className="w-[56px] h-[52px] sm:w-[61px] sm:h-[56px] bg-[#C4C4C4] hover:bg-white transition-all duration-300 flex items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:-translate-y-1"
              >
                {renderSocialIcon(link.iconType)}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN — Lawyer Portrait (Root image arthur.png) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="w-full md:w-[50%] lg:w-[52%] flex flex-col items-center md:items-end justify-end self-end mt-4 md:mt-0 relative z-10"
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[650px] flex items-end justify-center">
            {/* Subtle back-glow behind portrait on black diagonal */}
            <div
              aria-hidden="true"
              className="absolute inset-x-10 bottom-10 h-3/4 rounded-full bg-white/[0.04] blur-3xl pointer-events-none"
            />
            <img
              src={hero.heroImage}
              alt={hero.photoCaption}
              className="w-full h-auto max-h-[520px] sm:max-h-[620px] lg:max-h-[760px] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] select-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
