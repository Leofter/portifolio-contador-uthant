import { PortfolioDatabase } from '@/domain/types/portfolio'

export const uthantPortfolioData: PortfolioDatabase = {
  preloader: {
    displayName: 'Uthant Magalhães',
  },

  navItems: [
    { id: 'about', label: 'Sobre mim' },
    { id: 'skills', label: 'Especialidades' },
    { id: 'portfolio', label: 'Soluções' },
    { id: 'contact', label: 'CONTATO', isCta: true },
  ],

  socialLinks: [
    {
      id: 'email',
      label: 'E-mail',
      href: '#contact',
      iconType: 'mail',
    },
    {
      id: 'contabil',
      label: 'Soluções Contábeis',
      href: '#portfolio',
      iconType: 'scale',
    },
  ],

  hero: {
    greeting: '',
    fullName: 'Uthant Torres Magalhães',
    subtitleBelowName: 'Soluções Contábeis',
    role: 'Contador • A mais de 30 Anos',
    experienceBadge: '+30 ANOS NA ÁREA',
    currentFirmBadge: '',
    heroImage: '/img/uthant.png',
    photoCaption: 'Uthant Torres Magalhães — Soluções Contábeis',
    monogram: 'UTM',
  },

  introBanner: {
    title: 'SOLUÇÕES CONTÁBEIS',
    paragraphs: [
      'Especialista em Abertura, Baixa e Regularização de Empresas, Folha de Pagamento (eSocial, FGTS e INSS), Apuração de Impostos no Simples Nacional, MEI e Lucro Presumido (na data e em atraso), além de Declarações de IRPF, IRPJ e Parcelamentos.',
    ],
    ctaLabel: 'SAIBA MAIS',
    ctaTargetId: 'about',
    watermarkText: 'CONT',
  },

  about: {
    sectionTitle: 'SOBRE MIM',
    introParagraph:
      'Uthant Torres Magalhães é Contador formado pela Fundação Visconde de Cairu, com mais de 30 anos na área contábil, fiscal, societária e de departamento pessoal. Sua atuação une tradição, precisão técnica e atendimento próximo na abertura, baixa e regularização de empresas, apuração de impostos em dia ou em atraso e planejamento tributário.',
    exploreLabel: 'EXPLORAR SOLUÇÕES',
    services: [
      {
        id: 'abertura-regularizacao',
        title: 'ABERTURA, BAIXA & REGULARIZAÇÃO',
        description:
          'Cuida de todo o processo societário: elaboração e alteração de contrato social, inscrição e baixa de CNPJ, alvarás de funcionamento e registros nos órgãos competentes para manter a empresa 100% regularizada.',
        iconType: 'consulting',
        isPlaceholder: false,
      },
      {
        id: 'impostos-parcelamentos',
        title: 'IMPOSTOS & PARCELAMENTOS',
        description:
          'Apuração e emissão de guias de Simples Nacional, MEI, Lucro Presumido, ICMS, IPI, PIS, COFINS, IRPJ e CSLL — tanto na data quanto em atraso — além de Declarações de IRPF, IRPJ e parcelamentos fiscais.',
        iconType: 'litigation',
        isPlaceholder: false,
      },
      {
        id: 'dp-relatorios-planejamento',
        title: 'DP, RELATÓRIOS & PLANEJAMENTO',
        description:
          'Gestão completa de Departamento Pessoal (folha de pagamento, pró-labore, férias, 13º salário, rescisões, eSocial, FGTS e INSS), obrigações acessórias (DEFIS e DCTFWeb), Balanço Patrimonial, DRE e Planejamento Tributário legal.',
        iconType: 'planning',
        isPlaceholder: false,
      },
    ],
    stats: [],
  },

  skills: {
    sectionTitle: 'ESPECIALIDADES',
    categories: [
      {
        key: 'usingNow',
        title: 'ESPECIALIDADES PRINCIPAIS:',
      },
      {
        key: 'learning',
        title: 'DEPARTAMENTO PESSOAL & IMPOSTOS:',
      },
      {
        key: 'other',
        title: 'DECLARAÇÕES, RELATÓRIOS & GESTÃO:',
      },
    ],
    items: [
      // ESPECIALIDADES PRINCIPAIS (8 itens no grid do Figma)
      {
        id: 'abertura-empresas',
        name: 'ABERTURA DE EMPRESAS',
        category: 'usingNow',
        shortCode: 'CNPJ',
        badgeLabel: 'CONTÁBIL',
        accentColor: '#1E293B',
        detail: 'Contrato social, CNPJ, alvarás e registros nos órgãos competentes',
      },
      {
        id: 'baixa-regularizacao',
        name: 'BAIXA & REGULARIZAÇÃO',
        category: 'usingNow',
        shortCode: 'REG',
        badgeLabel: 'CONTÁBIL',
        accentColor: '#7F1D1D',
        detail: 'Encerramento seguro e regularização cadastral e fiscal de empresas',
      },
      {
        id: 'simples-nacional',
        name: 'SIMPLES NACIONAL',
        category: 'usingNow',
        shortCode: 'PGDAS',
        badgeLabel: 'IMPOSTOS',
        accentColor: '#0F172A',
        detail: 'Apuração mensal e emissão de guias na data e em atraso',
      },
      {
        id: 'mei-gestao',
        name: 'MEI • MICROEMPREENDEDOR',
        category: 'usingNow',
        shortCode: 'MEI',
        badgeLabel: 'IMPOSTOS',
        accentColor: '#334155',
        detail: 'Formalização, DASN-SIMEI, desenquadramento e acompanhamento completo',
      },
      {
        id: 'lucro-presumido',
        name: 'LUCRO PRESUMIDO',
        category: 'usingNow',
        shortCode: 'PRES',
        badgeLabel: 'IMPOSTOS',
        accentColor: '#450A0A',
        detail: 'Apuração de IRPJ, CSLL, PIS, COFINS, ICMS e IPI na data e em atraso',
      },
      {
        id: 'folha-pagamento',
        name: 'FOLHA DE PAGAMENTO',
        category: 'usingNow',
        shortCode: 'FOLHA',
        badgeLabel: 'DEP. PESSOAL',
        accentColor: '#1F2937',
        detail: 'Cálculos de folha mensal, pró-labore, férias, 13º salário e rescisões',
      },
      {
        id: 'esocial-fgts-inss',
        name: 'E-SOCIAL, FGTS & INSS',
        category: 'usingNow',
        shortCode: 'FGTS',
        badgeLabel: 'DEP. PESSOAL',
        accentColor: '#27272A',
        detail: 'Transmissão de eventos no eSocial e guias previdenciárias e trabalhistas',
      },
      {
        id: 'irpf-irpj-parcelamentos',
        name: 'IRPF, IRPJ & PARCELAMENTOS',
        category: 'usingNow',
        shortCode: 'IR/PARC',
        badgeLabel: 'FISCAL',
        accentColor: '#3F3F46',
        detail: 'Declarações de Imposto de Renda PF/PJ e parcelamentos de débitos',
      },

      // DEPARTAMENTO PESSOAL & IMPOSTOS (4 itens no grid do Figma)
      {
        id: 'impostos-na-data-atraso',
        name: 'NA DATA E EM ATRASO',
        category: 'learning',
        shortCode: 'GUIAS',
        badgeLabel: 'TRIBUTOS',
        accentColor: '#7F1D1D',
        detail: 'Emissão de guias correntes e recálculo atualizado de impostos em atraso',
      },
      {
        id: 'icms-ipi-pis-cofins',
        name: 'ICMS, IPI, PIS E COFINS',
        category: 'learning',
        shortCode: 'TRIB',
        badgeLabel: 'TRIBUTOS',
        accentColor: '#1E293B',
        detail: 'Apuração rigorosa de tributos estaduais e federais sobre faturamento',
      },
      {
        id: 'ferias-13-rescisoes',
        name: 'FÉRIAS, 13º E RESCISÕES',
        category: 'learning',
        shortCode: 'DP',
        badgeLabel: 'TRABALHISTA',
        accentColor: '#0F172A',
        detail: 'Cálculos trabalhistas completos, pró-labore e homologações preventivas',
      },
      {
        id: 'defis-dctfweb',
        name: 'DEFIS & DCTFWEB',
        category: 'learning',
        shortCode: 'DCTF',
        badgeLabel: 'OBRIGAÇÕES',
        accentColor: '#334155',
        detail: 'Entrega pontual de declarações obrigatórias ao governo para evitar multas',
      },

      // DECLARAÇÕES, RELATÓRIOS & GESTÃO (4 itens no grid do Figma)
      {
        id: 'balanco-patrimonial',
        name: 'BALANÇO PATRIMONIAL',
        category: 'other',
        shortCode: 'BAL',
        badgeLabel: 'CONTÁBIL',
        accentColor: '#18181B',
        detail: 'Demonstrações contábeis estruturadas com precisão técnica',
      },
      {
        id: 'dre-fluxo-caixa',
        name: 'DRE & FLUXO DE CAIXA',
        category: 'other',
        shortCode: 'DRE',
        badgeLabel: 'RELATÓRIOS',
        accentColor: '#27272A',
        detail: 'Demonstração do Resultado do Exercício e análise financeira',
      },
      {
        id: 'planejamento-tributario-legal',
        name: 'PLANEJAMENTO TRIBUTÁRIO',
        category: 'other',
        shortCode: 'PLAN',
        badgeLabel: 'ECONOMIA',
        accentColor: '#3F3F46',
        detail: 'Estratégias contábeis para a empresa pagar menos impostos de forma legal',
      },
      {
        id: 'formacao-cairu',
        name: 'VISCONDE DE CAIRU',
        category: 'other',
        shortCode: '+30A',
        badgeLabel: 'FORMAÇÃO',
        accentColor: '#7F1D1D',
        detail: 'Formado na Fundação Visconde de Cairu com +30 anos na área contábil',
      },
    ],
  },

  work: {
    sectionTitle: 'ATUAÇÃO & FUNÇÕES',
    sectionSubtitle: '',
    experienceSummaryBadge: '+30 ANOS NA ÁREA',
    educationBadge: 'GRADUADO PELA FUNDAÇÃO VISCONDE DE CAIRU',
    experiences: [],
  },

  portfolio: {
    sectionTitle: 'SOLUÇÕES',
    filters: [
      { id: 'all', label: 'TODAS' },
      { id: 'consultivo', label: 'EMPRESAS & DP' },
      { id: 'contencioso', label: 'IMPOSTOS & IR' },
    ],
    items: [
      {
        id: 'case-1',
        title: 'ABERTURA & BAIXA',
        category: 'consultivo',
        categoryLabel: 'societário, regularização',
        summary: 'Abertura, baixa e regularização completa de empresas',
        description:
          'Elaboração de contrato social, emissão de CNPJ, alvarás e registros nos órgãos competentes.',
        primaryActionLabel: 'SOLICITAR',
        secondaryActionLabel: 'CONTATO',
        gradientClass: 'from-[#18181b] via-[#27272a] to-[#09090b]',
        patternVariant: 'contract',
        isPlaceholder: false,
        defaultRequestMessage:
          'Gostaria de solicitar atendimento para abertura, baixa ou regulamentação de empresa.',
        requestOptions: [
          {
            id: 'abertura',
            label: 'ABERTURA',
            defaultMessage: 'Gostaria de solicitar abertura de empresa.',
          },
          {
            id: 'baixa',
            label: 'BAIXA',
            defaultMessage: 'Gostaria de solicitar baixa (encerramento) de empresa.',
          },
          {
            id: 'regulamentacao',
            label: 'REGULAMENTAÇÃO',
            defaultMessage: 'Gostaria de solicitar regulamentação e regularização de empresa.',
          },
        ],
      },
      {
        id: 'case-2',
        title: 'APURAÇÃO DE IMPOSTOS',
        category: 'contencioso',
        categoryLabel: 'simples nacional, mei, lucro presumido',
        summary: 'Guias de tributos calculadas na data e em atraso',
        description:
          'Simples Nacional, MEI, Lucro Presumido, ICMS, IPI, PIS, COFINS, IRPJ e CSLL com total precisão.',
        primaryActionLabel: 'SOLICITAR',
        secondaryActionLabel: 'CONTATO',
        gradientClass: 'from-[#1c1917] via-[#292524] to-[#0c0a09]',
        patternVariant: 'scales',
        isPlaceholder: false,
        defaultRequestMessage:
          'Gostaria de solicitar apuração e emissão de guias de impostos.',
        requestOptions: [
          {
            id: 'simples-nacional',
            label: 'SIMPLES NACIONAL',
            defaultMessage: 'Gostaria de solicitar apuração de impostos do Simples Nacional.',
          },
          {
            id: 'mei',
            label: 'MEI',
            defaultMessage: 'Gostaria de solicitar atendimento contábil e apuração para MEI.',
          },
          {
            id: 'lucro-presumido',
            label: 'LUCRO PRESUMIDO',
            defaultMessage: 'Gostaria de solicitar apuração de impostos no Lucro Presumido.',
          },
          {
            id: 'impostos-atraso',
            label: 'GUIAS EM ATRASO',
            defaultMessage: 'Gostaria de solicitar recálculo e emissão de impostos em atraso.',
          },
        ],
      },
      {
        id: 'case-3',
        title: 'DEPARTAMENTO PESSOAL',
        category: 'consultivo',
        categoryLabel: 'folha, esocial, fgts, inss',
        summary: 'Gestão completa de folha de pagamento e encargos',
        description:
          'Cálculos de folha, pró-labore, férias, 13º salário, rescisões, eSocial, FGTS e INSS.',
        primaryActionLabel: 'SOLICITAR',
        secondaryActionLabel: 'CONTATO',
        gradientClass: 'from-[#111827] via-[#1f2937] to-[#030712]',
        patternVariant: 'ledger',
        isPlaceholder: false,
        defaultRequestMessage:
          'Gostaria de solicitar serviços de Departamento Pessoal.',
        requestOptions: [
          {
            id: 'folha-pagamento',
            label: 'FOLHA DE PAGAMENTO',
            defaultMessage: 'Gostaria de solicitar cálculo e gestão de folha de pagamento.',
          },
          {
            id: 'esocial-fgts-inss',
            label: 'E-SOCIAL / FGTS / INSS',
            defaultMessage: 'Gostaria de solicitar regularização e envio de eSocial, FGTS e INSS.',
          },
          {
            id: 'ferias-13-rescisao',
            label: 'FÉRIAS / 13º / RESCISÃO',
            defaultMessage: 'Gostaria de solicitar cálculo de férias, 13º salário ou rescisão.',
          },
        ],
      },
      {
        id: 'case-4',
        title: 'IRPF, IRPJ & OBRIGAÇÕES',
        category: 'contencioso',
        categoryLabel: 'declarações, defis, dctfweb',
        summary: 'Declarações obrigatórias e Imposto de Renda PF/PJ',
        description:
          'Entrega de DEFIS, DCTFWeb, Declarações de IRPF e IRPJ e parcelamentos fiscais para evitar multas.',
        primaryActionLabel: 'SOLICITAR',
        secondaryActionLabel: 'CONTATO',
        gradientClass: 'from-[#27272a] via-[#18181b] to-[#09090b]',
        patternVariant: 'shield',
        isPlaceholder: false,
        defaultRequestMessage:
          'Gostaria de solicitar elaboração de declarações e obrigações fiscais.',
        requestOptions: [
          {
            id: 'declaracao-irpf',
            label: 'DECLARAÇÃO IRPF',
            defaultMessage: 'Gostaria de solicitar declaração de Imposto de Renda Pessoa Física (IRPF).',
          },
          {
            id: 'declaracao-irpj',
            label: 'DECLARAÇÃO IRPJ',
            defaultMessage: 'Gostaria de solicitar declaração de Imposto de Renda Pessoa Jurídica (IRPJ).',
          },
          {
            id: 'defis-dctfweb',
            label: 'DEFIS / DCTFWEB',
            defaultMessage: 'Gostaria de solicitar entrega de obrigações acessórias (DEFIS / DCTFWeb).',
          },
        ],
      },
      {
        id: 'case-5',
        title: 'RELATÓRIOS CONTÁBEIS',
        category: 'consultivo',
        categoryLabel: 'balanço, dre, fluxo de caixa',
        summary: 'Demonstrações contábeis para gestão segura',
        description:
          'Elaboração de Balanço Patrimonial, DRE (Demonstração do Resultado do Exercício) e fluxo de caixa.',
        primaryActionLabel: 'SOLICITAR',
        secondaryActionLabel: 'CONTATO',
        gradientClass: 'from-[#1e1b4b]/40 via-[#18181b] to-[#09090b]',
        patternVariant: 'columns',
        isPlaceholder: false,
        defaultRequestMessage:
          'Gostaria de solicitar elaboração de relatórios contábeis.',
        requestOptions: [
          {
            id: 'balanco-patrimonial',
            label: 'BALANÇO PATRIMONIAL',
            defaultMessage: 'Gostaria de solicitar elaboração de Balanço Patrimonial.',
          },
          {
            id: 'dre',
            label: 'DRE',
            defaultMessage: 'Gostaria de solicitar elaboração de DRE (Demonstração do Resultado do Exercício).',
          },
          {
            id: 'fluxo-caixa',
            label: 'FLUXO DE CAIXA',
            defaultMessage: 'Gostaria de solicitar relatório contábil de fluxo de caixa.',
          },
        ],
      },
      {
        id: 'case-6',
        title: 'PLANEJAMENTO & PARCELAMENTOS',
        category: 'contencioso',
        categoryLabel: 'economia fiscal, regularização',
        summary: 'Pague menos impostos de forma legal e regularize passivos',
        description:
          'Planejamento tributário personalizado e estruturação de parcelamentos de tributos.',
        primaryActionLabel: 'SOLICITAR',
        secondaryActionLabel: 'CONTATO',
        gradientClass: 'from-[#311010]/60 via-[#18181b] to-[#09090b]',
        patternVariant: 'court',
        isPlaceholder: false,
        defaultRequestMessage:
          'Gostaria de solicitar planejamento tributário ou parcelamento.',
        requestOptions: [
          {
            id: 'planejamento-tributario',
            label: 'PLANEJAMENTO TRIBUTÁRIO',
            defaultMessage: 'Gostaria de solicitar planejamento tributário para pagar menos impostos de forma legal.',
          },
          {
            id: 'parcelamentos',
            label: 'PARCELAMENTOS',
            defaultMessage: 'Gostaria de solicitar parcelamento e regularização de débitos fiscais.',
          },
        ],
      },
    ],
    footerText: 'Uthant Torres Magalhães • Soluções Contábeis com +30 anos de excelência!',
  },

  contact: {
    sectionTitle: 'CONTATO',
    introText:
      'Entre em contato com Uthant Torres Magalhães e solucione os problemas contabeis da sua empresa',
    highlightBannerText: 'Contabilidade com responsabilidade e experiencia',
    formPlaceholders: {
      name: 'DIGITE SEU NOME*',
      email: 'DIGITE SEU E-MAIL*',
      phone: 'TELEFONE / WHATSAPP',
      message: 'COMO POSSO AJUDAR SUA EMPRESA OU DECLARAÇÃO?*',
      submit: 'ENVIAR MENSAGEM',
    },
    directContacts: [],
    footer: {
      backToTopLabel: 'VOLTAR AO TOPO',
      copyrightOwner: 'Uthant Torres Magalhães — Soluções Contábeis',
      rightsReservedText: 'Todos os Direitos Reservados.',
    },
  },
}
