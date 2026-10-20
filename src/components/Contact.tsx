import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ChevronsUp, Mail, Linkedin, Scale, CheckCircle2 } from 'lucide-react'
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

export function Contact() {
  const contactData = portfolioService.getContactData()
  const socialLinks = portfolioService.getSocialLinks()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4500)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderFooterSocialIcon = (iconType: 'mail' | 'linkedin' | 'scale') => {
    switch (iconType) {
      case 'mail':
        return <Mail className="w-5 h-5" />
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />
      case 'scale':
        return <Scale className="w-5 h-5" />
    }
  }

  return (
    <>
      {/* ===================================================================
          CONTACT SECTION (Figma Radial Gradient + L-shaped 5px black inputs)
         =================================================================== */}
      <section
        id="contact"
        className="bg-figma-radial pt-24 sm:pt-32 pb-24 sm:pb-32 px-6 sm:px-10 lg:px-20 text-black"
      >
        <div className="max-w-[763px] mx-auto flex flex-col items-center">
          {/* Boxed Section Header (CONTACT / CONTATO) */}
          <motion.div {...fadeInUp} className="mb-12">
            <SectionBoxHeader title={contactData.sectionTitle} />
          </motion.div>

          {/* Intro Paragraph */}
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="font-opensans text-sm sm:text-[15px] leading-[21px] text-center text-black mb-4"
          >
            {contactData.introText}
          </motion.p>

          {/* Ornamental Separator (separatorBlack) */}
          <FigmaSeparator variant="black" className="my-10 sm:my-12" />

          {/* Direct Contact Info Cards (Marked with Lorem Ipsum where applicable) */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14"
          >
            {contactData.directContacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`p-4 border-l-[4px] border-b-[4px] border-black transition-colors ${
                  item.isPlaceholder
                    ? 'bg-white/50 border-t border-r border-dashed border-t-black/30 border-r-black/30'
                    : 'bg-white/85 border-t border-r border-t-black/20 border-r-black/20'
                }`}
              >
                <p className="font-montserrat font-bold text-[10px] tracking-[0.15em] text-neutral-600 uppercase mb-1">
                  {item.label}
                </p>
                <p className="font-opensans font-semibold text-xs sm:text-sm text-black break-words">
                  {item.value}
                </p>
              </a>
            ))}
          </motion.div>

          {/* Figma Contact Form (Rectangle 50-57: 5px solid black left & bottom borders) */}
          <motion.form
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full max-w-[609px] space-y-10"
          >
            {/* Input 1: Name */}
            <div>
              <label htmlFor="contact-name" className="sr-only">
                {contactData.formPlaceholders.name}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder={contactData.formPlaceholders.name}
                className="w-full h-[48px] bg-transparent border-l-[5px] border-b-[5px] border-black px-4 font-montserrat font-bold text-xs sm:text-[14px] leading-[17px] tracking-[0.04em] text-black placeholder:text-[#8B8B8B] focus:outline-none focus:bg-black/[0.03] transition-colors"
              />
            </div>

            {/* Input 2: Email */}
            <div>
              <label htmlFor="contact-email" className="sr-only">
                {contactData.formPlaceholders.email}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder={contactData.formPlaceholders.email}
                className="w-full h-[48px] bg-transparent border-l-[5px] border-b-[5px] border-black px-4 font-montserrat font-bold text-xs sm:text-[14px] leading-[17px] tracking-[0.04em] text-black placeholder:text-[#8B8B8B] focus:outline-none focus:bg-black/[0.03] transition-colors"
              />
            </div>

            {/* Input 3: Phone */}
            <div>
              <label htmlFor="contact-phone" className="sr-only">
                {contactData.formPlaceholders.phone}
              </label>
              <input
                id="contact-phone"
                type="tel"
                placeholder={contactData.formPlaceholders.phone}
                className="w-full h-[48px] bg-transparent border-l-[5px] border-b-[5px] border-black px-4 font-montserrat font-bold text-xs sm:text-[14px] leading-[17px] tracking-[0.04em] text-black placeholder:text-[#8B8B8B] focus:outline-none focus:bg-black/[0.03] transition-colors"
              />
            </div>

            {/* Input 4: Message (Height 184px in Figma Rectangle 56) */}
            <div>
              <label htmlFor="contact-message" className="sr-only">
                {contactData.formPlaceholders.message}
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder={contactData.formPlaceholders.message}
                className="w-full h-[165px] sm:h-[184px] bg-transparent border-l-[5px] border-b-[5px] border-black p-4 font-montserrat font-bold text-xs sm:text-[14px] leading-[17px] tracking-[0.04em] text-black placeholder:text-[#8B8B8B] focus:outline-none focus:bg-black/[0.03] transition-colors resize-none"
              />
            </div>

            {/* Submit Button (Line 17 & Line 18: 3px solid black vertical brackets) */}
            <div className="pt-4 flex flex-col items-center gap-4">
              <FigmaBracketButton
                type="submit"
                label={contactData.formPlaceholders.submit}
                variant="black"
                className="min-w-[197px]"
              />

              {submitted && (
                <div className="flex items-center gap-2 text-xs font-montserrat font-semibold text-black bg-black/10 px-4 py-2 border border-black/30">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    Mensagem registrada! Uthant Torres Magalhães retornará o contato em breve.
                  </span>
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </section>

      {/* ===================================================================
          FOOTER (Figma Rectangle 66: height 326px, background #1A1A1A)
         =================================================================== */}
      <footer className="w-full bg-[#1A1A1A] text-white py-16 sm:py-20 px-6 flex flex-col items-center justify-center">
        {/* Back to Top Button (ic:baseline-double-arrow + BACK TO TOP) */}
        <button
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-2 mb-10 focus:outline-none"
        >
          <ChevronsUp className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-1" />
          <span className="font-montserrat font-bold text-xs sm:text-[15px] leading-[18px] tracking-[0.18538em] uppercase text-white">
            {contactData.footer.backToTopLabel}
          </span>
        </button>

        {/* Social Icons Row (30x30px vectors in Figma) */}
        <div className="flex items-center gap-7 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-label={link.label}
              className="w-[34px] h-[34px] border border-white/30 flex items-center justify-center text-white/90 hover:bg-white hover:text-black transition-all duration-300"
            >
              {renderFooterSocialIcon(link.iconType)}
            </a>
          ))}
        </div>

        {/* Copyright (@2026 Uthant Torres Magalhães All Rights Reserved - Nunito 700 18px) */}
        <p className="font-nunito font-bold text-sm sm:text-[18px] leading-[25px] text-center text-white/90">
          @{new Date().getFullYear()} {contactData.footer.copyrightOwner}{' '}
          <span className="font-normal text-white/75">
            {contactData.footer.rightsReservedText}
          </span>
        </p>
      </footer>
    </>
  )
}
