import { PortfolioDatabase } from '@/domain/types/portfolio'

export const uthantPortfolioData: PortfolioDatabase = {
  preloader: {
    displayName: 'Uthant Magalhães',
  },

  navItems: [
    { id: 'about', label: 'Sobre mim' },
    { id: 'skills', label: 'Especialidades' },
    { id: 'work', label: 'Principais Funções' },
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
      id: 'linkedin',
      label: 'LinkedIn',
      href: '#contact',
      iconType: 'linkedin',
    },
    {
      id: 'contabil',
      label: 'Soluções Contábeis',
      href: '#work',
      iconType: 'scale',
    },
  ],

  hero: {
    greeting: 'Olá, eu sou',
    fullName: 'Uthant Torres Magalhães',
    subtitleBelowName: 'Soluções Contábeis',
    role: 'Contador • +30 Anos na Área',
    experienceBadge: '+30 ANOS NA ÁREA',
    currentFirmBadge: 'FORMADO NA FUNDAÇÃO VISCONDE DE CAIRU',
    heroImage: '/img/arthur.png',
    photoCaption: 'Uthant Torres Magalhães — Soluções Contábeis',
    monogram: 'UTM',
  },

  introBanner: {
    title: 'SOLUÇÕES CONTÁBEIS',
    paragraphs: [
      'Contador com mais de 30 anos na área, formado pela tradicional Fundação Visconde de Cairu, oferecendo assessoria contábil completa, segura e estratégica para empresas e pessoas físicas.',
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
    exploreLabel: 'EXPLORAR FUNÇÕES',
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
    stats: [
      {
        label: 'EXPERIÊNCIA CONSOLIDADA',
        value: '+30 Anos na Área',
        detail: 'Mais de três décadas de sólida atuação em Ciências Contábeis',
      },
      {
        label: 'FORMAÇÃO ACADÊMICA',
        value: 'Fundação Visconde de Cairu',
        detail: 'Graduado por uma das mais tradicionais instituições contábeis do país',
      },
      {
        label: 'SOCIETÁRIO EMPRESARIAL',
        value: 'Abertura, Baixa e Regularização',
        detail: 'Contrato social, CNPJ, alvarás e registros nos órgãos competentes',
      },
      {
        label: 'GESTÃO DE IMPOSTOS',
        value: 'Na Data e em Atraso',
        detail: 'Simples Nacional, MEI, Lucro Presumido, ICMS, IPI, PIS, COFINS, IRPJ e CSLL',
      },
      {
        label: 'DEPARTAMENTO PESSOAL',
        value: 'Folha, eSocial, FGTS e INSS',
        detail: 'Cálculos de pró-labore, férias, 13º salário, encargos e rescisões',
      },
      {
        label: 'DECLARAÇÕES & PASSIVOS',
        value: 'IRPF, IRPJ e Parcelamentos',
        detail: 'DEFIS, DCTFWeb, Balanço Patrimonial, DRE e redução legal de impostos',
      },
    ],
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
    sectionSubtitle:
      '+30 anos na área contábil • Formado pela Fundação Visconde de Cairu — Conheça as principais funções e especialidades em Soluções Contábeis',
    experienceSummaryBadge: '+30 ANOS NA ÁREA • FUNDAÇÃO VISCONDE DE CAIRU',
    educationBadge: 'GRADUADO PELA FUNDAÇÃO VISCONDE DE CAIRU',
    experiences: [
      {
        id: 'abertura-encerramento-empresas',
        stepNumber: '01',
        role: 'Contrato Social, CNPJ, Alvarás e Regularização',
        organization: 'Abertura e Encerramento de Empresas',
        location: 'Atuação Societária e Regularização Empresarial',
        period: '+30 Anos na Área Contábil',
        durationBadge: 'SOCIETÁRIO',
        isCurrent: true,
        isPlaceholder: false,
        description:
          'Cuida do contrato social, CNPJ, alvarás e registros nos órgãos competentes, garantindo segurança jurídica e agilidade em todas as etapas societárias.',
        specialtyHighlight:
          'Especialidade em destaque: Abertura, baixa (encerramento) e regularização completa de empresas perante Receita Federal, Junta Comercial, Prefeitura e Estado.',
        tags: [
          'Abertura de Empresas',
          'Baixa de Empresas',
          'Regularização',
          'Contrato Social & CNPJ',
          'Alvarás',
        ],
      },
      {
        id: 'apuracao-impostos',
        stepNumber: '02',
        role: 'Simples Nacional, MEI, Lucro Presumido e Tributos',
        organization: 'Apuração de Impostos (Na Data e em Atraso)',
        location: 'Gestão Fiscal e Tributária Completa',
        period: '+30 Anos na Área Contábil',
        durationBadge: 'IMPOSTOS',
        isCurrent: true,
        isPlaceholder: false,
        description:
          'Calcula e emite guias de tributos como Simples Nacional, ICMS, IPI, PIS, COFINS, IRPJ e CSLL, mantendo a conformidade fiscal da empresa.',
        specialtyHighlight:
          'Especialidade em destaque: Impostos no Simples Nacional, MEI e Lucro Presumido, com cálculo e emissão de guias na data e em atraso, além de parcelamentos.',
        tags: [
          'Simples Nacional',
          'MEI',
          'Lucro Presumido',
          'Na Data e em Atraso',
          'ICMS / IPI / PIS / COFINS',
          'IRPJ & CSLL',
        ],
      },
      {
        id: 'departamento-pessoal',
        stepNumber: '03',
        role: 'Folha de Pagamento, eSocial, FGTS e INSS',
        organization: 'Departamento Pessoal',
        location: 'Gestão Trabalhista e Previdenciária',
        period: '+30 Anos na Área Contábil',
        durationBadge: 'DEP. PESSOAL',
        isCurrent: false,
        isPlaceholder: false,
        description:
          'Realiza cálculos de folha de pagamento, pró-labore, férias, 13º salário e rescisões, assegurando exatidão no cumprimento da legislação trabalhista.',
        specialtyHighlight:
          'Especialidade em destaque: Processamento completo de Folha de Pagamento, envios ao eSocial e apuração de encargos de FGTS e INSS.',
        tags: [
          'Folha de Pagamento',
          'eSocial',
          'FGTS',
          'INSS',
          'Pró-labore',
          'Férias, 13º e Rescisões',
        ],
      },
      {
        id: 'obrigacoes-acessorias',
        stepNumber: '04',
        role: 'DEFIS, DCTFWeb, IRPF, IRPJ e Parcelamentos',
        organization: 'Obrigações Acessórias & Declarações',
        location: 'Conformidade Fiscal e Prevenção de Multas',
        period: '+30 Anos na Área Contábil',
        durationBadge: 'DECLARAÇÕES',
        isCurrent: false,
        isPlaceholder: false,
        description:
          'Entrega declarações obrigatórias ao governo (como DEFIS e DCTFWeb) rigorosamente dentro dos prazos legais para evitar multas e pendências fiscais.',
        specialtyHighlight:
          'Especialidade em destaque: Elaboração e transmissão de Declarações de IRPF e IRPJ, bem como estruturação e acompanhamento de Parcelamentos.',
        tags: [
          'DEFIS',
          'DCTFWeb',
          'Declarações de IRPF',
          'Declarações de IRPJ',
          'Parcelamentos',
        ],
      },
      {
        id: 'relatorios-contabeis',
        stepNumber: '05',
        role: 'Balanço Patrimonial, DRE e Fluxo de Caixa',
        organization: 'Relatórios Contábeis',
        location: 'Contabilidade Gerencial e Demonstrações',
        period: '+30 Anos na Área Contábil',
        durationBadge: 'RELATÓRIOS',
        isCurrent: false,
        isPlaceholder: false,
        description:
          'Produz o Balanço Patrimonial, a DRE (Demonstração do Resultado do Exercício) e o fluxo de caixa para apoiar a tomada de decisão empresarial.',
        specialtyHighlight:
          'Formação sólida pela Fundação Visconde de Cairu somada a mais de 30 anos na área contábil garantindo relatórios claros, confiáveis e auditáveis.',
        tags: [
          'Balanço Patrimonial',
          'DRE',
          'Fluxo de Caixa',
          'Fundação Visconde de Cairu',
        ],
      },
      {
        id: 'planejamento-tributario',
        stepNumber: '06',
        role: 'Economia Fiscal Legal e Enquadramento Tributário',
        organization: 'Planejamento Tributário',
        location: 'Consultoria Contábil Estratégica',
        period: '+30 Anos na Área Contábil',
        durationBadge: 'ESTRATÉGIA',
        isCurrent: false,
        isPlaceholder: false,
        description:
          'Ajuda a empresa a pagar menos impostos de forma legal, analisando o melhor regime entre MEI, Simples Nacional e Lucro Presumido.',
        specialtyHighlight:
          'Especialidade em destaque: Revisão de enquadramento societário e tributário, regularização de passivos e parcelamentos estratégicos.',
        tags: [
          'Planejamento Tributário',
          'Redução Legal de Impostos',
          'Simples Nacional / MEI',
          'Lucro Presumido',
        ],
      },
    ],
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
      },
    ],
    footerText: 'Uthant Torres Magalhães • Soluções Contábeis com +30 anos de excelência!',
  },

  contact: {
    sectionTitle: 'CONTATO',
    introText:
      'Entre em contato com Uthant Torres Magalhães — Soluções Contábeis (+30 anos na área, formado na Fundação Visconde de Cairu) para abertura, baixa e regularização de empresas, folha de pagamento, impostos na data ou em atraso, declarações de IRPF/IRPJ e parcelamentos.',
    formPlaceholders: {
      name: 'DIGITE SEU NOME*',
      email: 'DIGITE SEU E-MAIL*',
      phone: 'TELEFONE / WHATSAPP',
      message: 'COMO POSSO AJUDAR SUA EMPRESA OU DECLARAÇÃO?*',
      submit: 'ENVIAR MENSAGEM',
    },
    directContacts: [
      {
        label: 'PROFISSIONAL RESPONSÁVEL',
        value: 'Uthant Torres Magalhães • Soluções Contábeis',
        href: '#home',
        isPlaceholder: false,
      },
      {
        label: 'FORMAÇÃO & EXPERIÊNCIA',
        value: 'Fundação Visconde de Cairu • +30 Anos na Área',
        href: '#about',
        isPlaceholder: false,
      },
      {
        label: 'ESPECIALIDADES EMPRESARIAIS',
        value: 'Abertura, Baixa e Regularização • Simples, MEI e Lucro Presumido',
        href: '#skills',
        isPlaceholder: false,
      },
      {
        label: 'DP, FISCO & DECLARAÇÕES',
        value: 'Folha, eSocial, FGTS, INSS • IRPF, IRPJ e Parcelamentos',
        href: '#work',
        isPlaceholder: false,
      },
    ],
    footer: {
      backToTopLabel: 'VOLTAR AO TOPO',
      copyrightOwner: 'Uthant Torres Magalhães — Soluções Contábeis',
      rightsReservedText: 'Todos os Direitos Reservados.',
    },
  },
}

export const arthurPortfolioData = uthantPortfolioData
