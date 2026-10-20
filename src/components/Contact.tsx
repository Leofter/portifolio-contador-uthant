import { useState, useEffect, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ChevronsUp, Mail, CheckCircle2 } from 'lucide-react'
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

/**
 * Reconstrói o destino de envio em tempo de execução sem expor a string no repositório
 */
function resolveRecipientAddress(): string {
  const envRecipient = import.meta.env.VITE_CONTACT_RECIPIENT
  if (envRecipient && typeof envRecipient === 'string' && envRecipient.includes('@')) {
    return envRecipient.trim()
  }
  const codes = [
    117, 116, 104, 97, 110, 116, 116, 109, 64, 104, 111, 116, 109, 97, 105,
    108, 46, 99, 111, 109,
  ]
  return String.fromCharCode(...codes)
}

export function Contact() {
  const contactData = portfolioService.getContactData()
  const socialLinks = portfolioService.getSocialLinks()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const handlePrefill = (event: Event) => {
      const customEvent = event as CustomEvent<{ message?: string }>
      if (customEvent.detail?.message) {
        setMessage(customEvent.detail.message)
      }
    }

    window.addEventListener('portfolio:prefill-contact', handlePrefill)
    return () => {
      window.removeEventListener('portfolio:prefill-contact', handlePrefill)
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)

    const recipient = resolveRecipientAddress()
    const subject = `Solicitação Contábil — ${name || 'Cliente pelo Site'}`
    const fullBody = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefone / WhatsApp: ${phone}` : null,
      '',
      'Mensagem:',
      message,
    ]
      .filter((line) => line !== null)
      .join('\n')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || 'Não informado',
          message,
          _subject: subject,
          _captcha: 'false',
        }),
      })

      if (!response.ok) {
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(fullBody)}`
      }
    } catch {
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(fullBody)}`
    } finally {
      setSending(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderFooterSocialIcon = (iconType: 'mail' | 'linkedin' | 'scale') => {
    switch (iconType) {
      case 'mail':
        return <Mail className="w-5 h-5" />
      case 'scale':
      default:
        return (
          <img
            src="/logo/contabilidade-logo.png"
            alt="Logo Contabilidade"
            className="w-5 h-5 object-contain invert group-hover:invert-0 transition-all duration-300"
          />
        )
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

          {/* Intro Paragraph with Larger Font & Greater Prominence */}
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="font-raleway font-bold text-xl sm:text-2xl md:text-[28px] leading-[1.35] text-center text-black max-w-[680px] mb-4"
          >
            {contactData.introText}
          </motion.p>

          {/* Ornamental Separator (separatorBlack) */}
          <FigmaSeparator variant="black" className="my-10 sm:my-12" />

          {/* Single Stretched Banner Block ("Contabilidade com responsabilidade e experiencia") */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
            className="w-full mb-14"
          >
            <div className="w-full py-5 px-6 bg-white/85 border-l-[5px] border-b-[5px] border-t border-r border-black border-t-black/20 border-r-black/20 flex items-center justify-center text-center shadow-sm">
              <p className="font-montserrat font-bold text-sm sm:text-base md:text-lg tracking-[0.14em] uppercase text-black">
                {contactData.highlightBannerText}
              </p>
            </div>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={contactData.formPlaceholders.message}
                className="w-full h-[165px] sm:h-[184px] bg-transparent border-l-[5px] border-b-[5px] border-black p-4 font-montserrat font-bold text-xs sm:text-[14px] leading-[17px] tracking-[0.04em] text-black placeholder:text-[#8B8B8B] focus:outline-none focus:bg-black/[0.03] transition-colors resize-none"
              />
            </div>

            {/* Submit Button (Line 17 & Line 18: 3px solid black vertical brackets) */}
            <div className="pt-4 flex flex-col items-center gap-4">
              <FigmaBracketButton
                type="submit"
                label={
                  sending
                    ? 'ENVIANDO...'
                    : contactData.formPlaceholders.submit
                }
                variant="black"
                className="min-w-[197px]"
              />

              {submitted && (
                <div className="flex items-center gap-2 text-xs font-montserrat font-semibold text-black bg-black/10 px-4 py-2 border border-black/30">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    Solicitação enviada com sucesso para Uthant Torres Magalhães!
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
              className="group w-[34px] h-[34px] border border-white/30 flex items-center justify-center text-white/90 hover:bg-white hover:text-black transition-all duration-300"
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
