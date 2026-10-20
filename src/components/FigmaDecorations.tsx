import { cn } from '@/lib/utils'

interface SectionBoxHeaderProps {
  title: string
  variant?: 'black' | 'white'
  className?: string
  wide?: boolean
}

/**
 * Caixa de título icônica do Figma:
 * Rectangle 35 / 48 / 49 -> border: 8px solid #000000, Montserrat 700, 30px, letter-spacing 0.35538em
 */
export function SectionBoxHeader({
  title,
  variant = 'black',
  className,
  wide = false,
}: SectionBoxHeaderProps) {
  const isWhite = variant === 'white'
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center border-[6px] sm:border-[8px] px-8 sm:px-14 py-4 sm:py-6 select-none',
        wide ? 'min-w-[260px] sm:min-w-[420px]' : 'min-w-[240px] sm:min-w-[380px]',
        isWhite ? 'border-white text-white' : 'border-black text-black',
        className
      )}
    >
      <h2 className="font-montserrat font-bold text-base sm:text-2xl md:text-[30px] leading-tight tracking-[0.28em] sm:tracking-[0.35538em] uppercase text-center pl-[0.28em]">
        {title}
      </h2>
    </div>
  )
}

interface FigmaSeparatorProps {
  variant?: 'black' | 'white'
  className?: string
}

/**
 * Separador geométrico ornamental do Figma (separatorBlack.png / separatorWhite.png - 170px x 12px)
 */
export function FigmaSeparator({
  variant = 'black',
  className,
}: FigmaSeparatorProps) {
  const strokeColor = variant === 'white' ? '#FFFFFF' : '#000000'
  return (
    <div
      className={cn('flex items-center justify-center my-8', className)}
      aria-hidden="true"
    >
      <svg
        width="170"
        height="14"
        viewBox="0 0 170 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 7H58L66 2L74 12L85 2L96 12L104 2L112 7H170"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

interface FigmaBracketButtonProps {
  label: string
  onClick?: () => void
  href?: string
  variant?: 'black' | 'white'
  size?: 'sm' | 'md'
  type?: 'button' | 'submit'
  className?: string
}

/**
 * Botão característico do Figma com barras verticais à esquerda e à direita
 * (Line 9 / Line 10 - border: 2px ou 3px solid, transform: rotate(90deg))
 */
export function FigmaBracketButton({
  label,
  onClick,
  href,
  variant = 'black',
  size = 'md',
  type = 'button',
  className,
}: FigmaBracketButtonProps) {
  const isWhite = variant === 'white'
  const baseClasses = cn(
    'inline-flex items-center justify-center font-montserrat font-bold uppercase transition-all duration-300 relative group',
    size === 'sm'
      ? 'h-[27px] px-5 text-[12px] tracking-[0.095em] border-l-2 border-r-2'
      : 'h-[38px] sm:h-[45px] px-8 sm:px-10 text-[13px] sm:text-[15px] tracking-[0.14em] border-l-[3px] border-r-[3px]',
    isWhite
      ? 'border-white text-white hover:bg-white hover:text-black'
      : 'border-black text-black hover:bg-black hover:text-white',
    className
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className={baseClasses}>
        <span>{label}</span>
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      <span>{label}</span>
    </button>
  )
}
