import { uthantPortfolioData } from '@/data/uthantPortfolioData'
import {
  AboutData,
  ContactData,
  HeroData,
  IntroBannerData,
  NavItem,
  PortfolioSectionData,
  PreloaderData,
  SkillsData,
  SocialLink,
  WorkData,
} from '@/domain/types/portfolio'

/**
 * Camada de Aplicação / Serviço (Application Service Layer)
 * Responsável por prover os dados de domínio do portfólio de Uthant Torres Magalhães
 * para a camada de apresentação (UI), mantendo o desacoplamento em camadas.
 */
export const portfolioService = {
  getPreloaderData(): PreloaderData {
    return uthantPortfolioData.preloader
  },

  getNavigationItems(): NavItem[] {
    return uthantPortfolioData.navItems
  },

  getSocialLinks(): SocialLink[] {
    return uthantPortfolioData.socialLinks
  },

  getHeroData(): HeroData {
    return uthantPortfolioData.hero
  },

  getIntroBannerData(): IntroBannerData {
    return uthantPortfolioData.introBanner
  },

  getAboutData(): AboutData {
    return uthantPortfolioData.about
  },

  getSkillsData(): SkillsData {
    return uthantPortfolioData.skills
  },

  getWorkData(): WorkData {
    return uthantPortfolioData.work
  },

  getPortfolioData(): PortfolioSectionData {
    return uthantPortfolioData.portfolio
  },

  getContactData(): ContactData {
    return uthantPortfolioData.contact
  },
}
