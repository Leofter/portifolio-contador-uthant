export interface NavItem {
  id: string
  label: string
  isCta?: boolean
}

export interface SocialLink {
  id: string
  label: string
  href: string
  iconType: 'mail' | 'linkedin' | 'scale'
}

export interface PreloaderData {
  displayName: string
}

export interface HeroData {
  greeting: string
  fullName: string
  subtitleBelowName: string
  role: string
  experienceBadge: string
  currentFirmBadge: string
  heroImage: string
  photoCaption: string
  monogram: string
}

export interface IntroBannerData {
  title: string
  paragraphs: string[]
  ctaLabel: string
  ctaTargetId: string
  watermarkText: string
}

export interface ServicePillar {
  id: string
  title: string
  description: string
  iconType: 'consulting' | 'litigation' | 'planning'
  isPlaceholder?: boolean
}

export interface AccountantStat {
  label: string
  value: string
  detail: string
  isPlaceholder?: boolean
}

export interface AboutData {
  sectionTitle: string
  introParagraph: string
  exploreLabel: string
  services: ServicePillar[]
  stats: AccountantStat[]
}

export type SkillCategoryKey = 'usingNow' | 'learning' | 'other'

export interface SkillItem {
  id: string
  name: string
  category: SkillCategoryKey
  shortCode: string
  badgeLabel?: string
  accentColor: string
  detail: string
  isPlaceholder?: boolean
}

export interface SkillsData {
  sectionTitle: string
  categories: {
    key: SkillCategoryKey
    title: string
  }[]
  items: SkillItem[]
}

export interface AccountingFunctionItem {
  id: string
  stepNumber: string
  role: string
  organization: string
  location: string
  period: string
  durationBadge: string
  isCurrent?: boolean
  isPlaceholder?: boolean
  description: string
  specialtyHighlight: string
  tags: string[]
}

export interface WorkData {
  sectionTitle: string
  sectionSubtitle: string
  experienceSummaryBadge: string
  educationBadge: string
  experiences: AccountingFunctionItem[]
}

export type PortfolioFilterCategory = 'all' | 'consultivo' | 'contencioso'

export interface PortfolioItem {
  id: string
  title: string
  category: 'consultivo' | 'contencioso'
  categoryLabel: string
  summary: string
  description: string
  primaryActionLabel: string
  secondaryActionLabel: string
  gradientClass: string
  patternVariant: 'scales' | 'columns' | 'ledger' | 'shield' | 'contract' | 'court'
  isPlaceholder: boolean
}

export interface PortfolioSectionData {
  sectionTitle: string
  filters: {
    id: PortfolioFilterCategory
    label: string
  }[]
  items: PortfolioItem[]
  footerText: string
}

export interface ContactDirectItem {
  label: string
  value: string
  href: string
  isPlaceholder?: boolean
}

export interface ContactData {
  sectionTitle: string
  introText: string
  formPlaceholders: {
    name: string
    email: string
    phone: string
    message: string
    submit: string
  }
  directContacts: ContactDirectItem[]
  footer: {
    backToTopLabel: string
    copyrightOwner: string
    rightsReservedText: string
  }
}

export interface PortfolioDatabase {
  preloader: PreloaderData
  navItems: NavItem[]
  socialLinks: SocialLink[]
  hero: HeroData
  introBanner: IntroBannerData
  about: AboutData
  skills: SkillsData
  work: WorkData
  portfolio: PortfolioSectionData
  contact: ContactData
}
