import { useState, useEffect } from 'react'
import { Scale, Menu, X } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import { portfolioService } from '@/services/portfolioService'
import { cn } from '@/lib/utils'

export function Navigation() {
  const activeSection = useActiveSection()
  const isVisible = useScrollVisibility()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = portfolioService.getNavigationItems()
  const heroData = portfolioService.getHeroData()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Top Header (Figma Navbar + Navbar after scroll #0B0B0B) */}
      <header
        className={cn(
          'hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 lg:px-20 transition-all duration-300',
          isScrolled
            ? 'h-[66px] bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg border-b border-white/10'
            : 'h-[96px] bg-transparent'
        )}
      >
        {/* Top Left Logo (Figma logo 1) */}
        <button
          onClick={() => scrollToSection('home')}
          aria-label="Início - Uthant Torres Magalhães"
          className="flex items-center gap-3 group text-left"
        >
          <div
            className={cn(
              'w-12 h-11 flex items-center justify-center border-2 transition-all duration-300 font-montserrat font-extrabold text-sm tracking-tighter',
              isScrolled
                ? 'border-white text-white bg-black group-hover:bg-white group-hover:text-black'
                : 'border-black text-black bg-transparent group-hover:bg-black group-hover:text-white'
            )}
          >
            <Scale className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                'font-montserrat font-bold text-xs tracking-[0.2em] uppercase transition-colors',
                isScrolled ? 'text-white' : 'text-black'
              )}
            >
              {heroData.monogram} • CONTABILIDADE
            </span>
            <span
              className={cn(
                'font-opensans text-[10px] tracking-wider uppercase transition-colors',
                isScrolled ? 'text-gray-400' : 'text-neutral-700'
              )}
            >
              {heroData.subtitleBelowName}
            </span>
          </div>
        </button>

        {/* Top Right Links + White Pill CTA (Figma Group 1) */}
        <div className="flex items-center gap-2 lg:gap-6">
          {navItems.map((item) => {
            if (item.isCta) {
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-[147px] h-[46px] rounded-[30px] bg-white border-4 border-white text-black font-montserrat font-bold text-[14px] lg:text-[15px] leading-[18px] flex items-center justify-center tracking-wider uppercase hover:bg-transparent hover:text-white transition-all duration-300 shadow-md"
                >
                  {item.label}
                </button>
              )
            }

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'px-3 lg:px-4 h-[46px] font-montserrat font-bold text-[15px] lg:text-[17px] leading-[21px] text-white transition-all duration-300 relative flex items-center justify-center',
                  'hover:opacity-75',
                  activeSection === item.id &&
                    'after:absolute after:bottom-1.5 after:left-3 after:right-3 after:h-[2px] after:bg-white'
                )}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </header>

      {/* Mobile Top Navbar & Dropdown Menu (Figma Mobile Rectangle 76-81) */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="h-[57px] bg-black px-5 flex items-center justify-between border-b border-white/20">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 text-white"
          >
            <Scale className="w-5 h-5 text-white" />
            <span className="font-montserrat font-bold text-xs tracking-[0.2em] uppercase">
              Uthant Magalhães
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="text-white p-1.5 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown rows matching Figma Mobile Dropdown */}
        <div
          className={cn(
            'flex flex-col w-full transition-all duration-300 overflow-hidden shadow-2xl',
            mobileMenuOpen
              ? 'max-h-[420px] opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          )}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'w-full h-[57px] font-montserrat font-semibold text-[12px] leading-[15px] tracking-widest uppercase flex items-center justify-center transition-colors border-b border-white/10',
                item.isCta
                  ? 'bg-white text-black font-bold'
                  : 'bg-black/85 backdrop-blur-md text-white hover:bg-black',
                activeSection === item.id &&
                  !item.isCta &&
                  'underline underline-offset-4'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Navegação Lateral Fixa (Canto Inferior Direito) — Comportamento Idêntico ao Site-BoxeTeam-Robenilson */}
      <nav
        aria-label="Navegação Lateral Rápida"
        className={cn(
          'hidden md:block fixed bottom-0 right-0 z-50 p-6 md:p-10 transition-all duration-500',
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-8 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-end gap-3">
          <button
            onClick={() => scrollToSection('home')}
            className={cn(
              'text-xs font-montserrat font-semibold uppercase tracking-widest text-white mix-blend-difference transition-all duration-300 relative py-1',
              'hover:opacity-60',
              activeSection === 'home' &&
                'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
            )}
          >
            Início
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'text-xs font-montserrat font-semibold uppercase tracking-widest text-white mix-blend-difference transition-all duration-300 relative py-1',
                'hover:opacity-60',
                activeSection === item.id &&
                  'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
