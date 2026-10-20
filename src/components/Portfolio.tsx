import { useState, MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Scale,
  Landmark,
  FileSpreadsheet,
  ShieldAlert,
  FileSignature,
  BookOpen,
} from 'lucide-react'
import { portfolioService } from '@/services/portfolioService'
import { PortfolioFilterCategory, PortfolioItem } from '@/domain/types/portfolio'
import {
  SectionBoxHeader,
  FigmaBracketButton,
} from '@/components/FigmaDecorations'
import { cn } from '@/lib/utils'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Portfolio() {
  const portfolioData = portfolioService.getPortfolioData()
  const [activeFilter, setActiveFilter] =
    useState<PortfolioFilterCategory>('all')
  const [selectedItemId, setSelectedItemId] = useState<string | null>('case-1')
  const [requestStepItemId, setRequestStepItemId] = useState<string | null>(null)

  const filteredItems =
    activeFilter === 'all'
      ? portfolioData.items
      : portfolioData.items.filter((item) => item.category === activeFilter)

  const sendMessageToContact = (messageText: string) => {
    window.dispatchEvent(
      new CustomEvent('portfolio:prefill-contact', {
        detail: { message: messageText },
      })
    )
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
    setTimeout(() => {
      const textareaEl = document.getElementById(
        'contact-message'
      ) as HTMLTextAreaElement | null
      if (textareaEl) {
        textareaEl.focus({ preventScroll: true })
      }
    }, 650)
  }

  const handlePrimarySolicitarClick = (
    e: MouseEvent,
    item: PortfolioItem
  ) => {
    e.stopPropagation()
    if (item.requestOptions && item.requestOptions.length > 1) {
      setSelectedItemId(item.id)
      setRequestStepItemId(item.id)
    } else {
      const singleMsg =
        item.requestOptions?.[0]?.defaultMessage || item.defaultRequestMessage
      sendMessageToContact(singleMsg)
    }
  }

  const handleSecondaryContatoClick = (
    e: MouseEvent,
    item: PortfolioItem
  ) => {
    e.stopPropagation()
    sendMessageToContact(item.defaultRequestMessage)
  }

  const handleOptionSelect = (e: MouseEvent, defaultMessage: string) => {
    e.stopPropagation()
    setRequestStepItemId(null)
    sendMessageToContact(defaultMessage)
  }

  const renderPatternIcon = (
    variant:
      | 'scales'
      | 'columns'
      | 'ledger'
      | 'shield'
      | 'contract'
      | 'court'
  ) => {
    const iconProps = {
      className:
        'w-28 h-28 text-white/10 group-hover:scale-110 transition-transform duration-700',
      strokeWidth: 1,
    }
    switch (variant) {
      case 'scales':
        return <Scale {...iconProps} />
      case 'columns':
        return <Landmark {...iconProps} />
      case 'ledger':
        return <FileSpreadsheet {...iconProps} />
      case 'shield':
        return <ShieldAlert {...iconProps} />
      case 'contract':
        return <FileSignature {...iconProps} />
      case 'court':
        return <BookOpen {...iconProps} />
    }
  }

  return (
    <section id="portfolio" className="w-full bg-[#1A1A1A] text-white">
      {/* ===================================================================
          PORTFOLIO HEADER BANNER (Figma 321px height banner with boxed header)
         =================================================================== */}
      <div
        className="relative w-full h-[220px] sm:h-[321px] flex items-center justify-center overflow-hidden px-6"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(215, 215, 215, 0.85) 0%, rgba(160, 160, 160, 0.72) 60%, rgba(110, 110, 110, 0.85) 100%)',
        }}
      >
        {/* Subtle Architectural Grid Pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <motion.div {...fadeInUp} className="relative z-10">
          <SectionBoxHeader title={portfolioData.sectionTitle} wide />
        </motion.div>
      </div>

      {/* ===================================================================
          FILTERBAR (Figma Filterbar: 587px width, Line 25 #AAAAAA, Line 26 #FFFFFF)
         =================================================================== */}
      <div className="pt-10 pb-8 px-6 flex justify-center">
        <div className="w-full max-w-[587px]">
          <div className="grid grid-cols-3 text-center">
            {portfolioData.filters.map((filter) => {
              const isActive = activeFilter === filter.id
              return (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveFilter(filter.id)
                    setRequestStepItemId(null)
                  }}
                  className={cn(
                    'h-[48px] font-montserrat font-semibold text-xs sm:text-[14px] leading-[17px] tracking-wider uppercase flex items-center justify-center transition-colors relative',
                    isActive
                      ? 'text-[#FFFBFB]'
                      : 'text-[#7C7C7C] hover:text-gray-300'
                  )}
                >
                  {filter.label}
                  {/* Active Bottom Line Indicator (Line 26) */}
                  {isActive && (
                    <motion.div
                      layoutId="portfolioFilterUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white z-10"
                    />
                  )}
                </button>
              )
            })}
          </div>
          {/* Base Filter Line (Line 25) */}
          <div className="w-full h-[1px] bg-[#AAAAAA]/60" />
        </div>
      </div>

      {/* ===================================================================
          PROJECTS SHOWCASE GRID (Figma 3x2 full-bleed grid, 400px height)
         =================================================================== */}
      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => {
            const isHighlighted = selectedItemId === item.id
            const isSelectingOption = requestStepItemId === item.id

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                onClick={() => {
                  if (isSelectingOption) {
                    setRequestStepItemId(null)
                    return
                  }
                  setSelectedItemId(isHighlighted ? null : item.id)
                }}
                className={cn(
                  'relative h-[320px] sm:h-[380px] lg:h-[400px] overflow-hidden border border-white/10 group cursor-pointer bg-gradient-to-br',
                  item.gradientClass
                )}
              >
                {/* Background Emblem & Subtle Watermark */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none">
                  {renderPatternIcon(item.patternVariant)}
                  <span className="mt-4 font-montserrat font-bold text-xs tracking-[0.25em] text-white/30 uppercase">
                    {item.title}
                  </span>
                </div>

                {/* Hover / Active Overlay */}
                <div
                  className={cn(
                    'absolute inset-0 bg-black/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 sm:p-8 text-center transition-all duration-300',
                    isHighlighted || isSelectingOption
                      ? 'opacity-100'
                      : 'opacity-90 md:opacity-0 md:group-hover:opacity-100'
                  )}
                >
                  {/* Italic Category Label ("societário, regularização") */}
                  <span className="font-montserrat italic font-semibold text-[11px] leading-[14px] tracking-[0.095em] text-gray-300 mb-2">
                    {item.categoryLabel}
                  </span>

                  {/* Project Title ("ABERTURA & BAIXA") */}
                  <h3 className="font-montserrat font-bold text-lg sm:text-[22px] lg:text-[25px] leading-[1.28] tracking-[0.20538em] text-white uppercase mb-3">
                    {item.title}
                  </h3>

                  {isSelectingOption && item.requestOptions ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col items-center w-full"
                    >
                      <p className="font-montserrat font-bold text-xs sm:text-sm uppercase tracking-[0.22em] text-white mb-5">
                        Solicitar
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-3 max-w-[380px]">
                        {item.requestOptions.map((option) => (
                          <FigmaBracketButton
                            key={option.id}
                            label={option.label}
                            variant="white"
                            size="sm"
                            onClick={(e) => {
                              if (e) handleOptionSelect(e, option.defaultMessage)
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      {/* Summary & Description */}
                      <p className="font-montserrat font-medium text-[11px] sm:text-xs leading-[16px] tracking-[-0.015em] text-gray-200 max-w-[330px] mb-2">
                        {item.summary}
                      </p>
                      <p className="font-opensans text-[11px] text-gray-400 max-w-[330px] mb-6">
                        {item.description}
                      </p>

                      {/* Action Buttons ("SOLICITAR" / "CONTATO") */}
                      <div className="flex items-center gap-5">
                        <FigmaBracketButton
                          label={item.primaryActionLabel}
                          variant="white"
                          size="sm"
                          onClick={(e) => {
                            if (e) handlePrimarySolicitarClick(e, item)
                          }}
                        />
                        <FigmaBracketButton
                          label={item.secondaryActionLabel}
                          variant="white"
                          size="sm"
                          onClick={(e) => {
                            if (e) handleSecondaryContatoClick(e, item)
                          }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* ===================================================================
          SECTION FOOTER
         =================================================================== */}
      <div className="py-10 sm:py-12 px-6 text-center">
        <p className="font-montserrat font-semibold text-base sm:text-[20px] leading-[24px] text-[#FFFBFB]">
          {portfolioData.footerText}
        </p>
      </div>
    </section>
  )
}
