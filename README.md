# Portfólio Profissional — Uthant Torres Magalhães (Soluções Contábeis)

Portfólio profissional desenvolvido para o contador **Uthant Torres Magalhães** (**Soluções Contábeis** • **+30 anos na área** • Formado pela **Fundação Visconde de Cairu**), combinando **Arquitetura em Camadas**, **Preloader de Entrada (Awwwards Style)**, **Navegação Lateral Inteligente** e **Animações (`Framer Motion`)** com a identidade visual do **Figma**.

---

## 1. Stack Tecnológico

- **Linguagem:** TypeScript
- **Framework:** React 18 + Vite
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion (`AnimatePresence`, animações de entrada e scroll)

---

## 2. Arquitetura em Camadas (`src/`)

```text
portifolio-contador-uthant/
├── index.html                           # Entrada HTML e fontes Google (Montserrat, Raleway, Open Sans, Varela, Nunito)
├── src/
│   ├── domain/
│   │   └── types/portfolio.ts           # 1. Camada de Domínio (Interfaces e contratos TypeScript)
│   ├── data/
│   │   └── arthurPortfolioData.ts       # 2. Camada de Dados (Repositório estruturado de Uthant Torres Magalhães)
│   ├── services/
│   │   └── portfolioService.ts          # 3. Camada de Aplicação / Serviço (Seletores para a UI)
│   ├── hooks/
│   │   ├── useActiveSection.ts          # Detecção de seção ativa via IntersectionObserver
│   │   └── useScrollVisibility.ts       # Controle de visibilidade da navegação lateral durante o scroll
│   ├── components/                      # 4. Camada de Apresentação (UI & Figma Design)
│   │   ├── Preloader.tsx                # Tela de entrada minimalista ("Uthant Magalhães") estilo Awwwards
│   │   ├── Navigation.tsx               # Navbar superior (Figma) + Navegação Lateral Inferior Direita + Menu Mobile
│   │   ├── Hero.tsx                     # Hero Section diagonal (#D7D7D7 / #000000) com "Uthant Torres Magalhães" e "Soluções Contábeis"
│   │   ├── IntroBanner.tsx              # Banner escuro (#1D1D1D) com marca d'água rotacionada ("CONT")
│   │   ├── About.tsx                    # Seção Sobre Mim, 3 Pilares Contábeis e Ficha Resumo (+30 anos & Visconde de Cairu)
│   │   ├── Skills.tsx                   # Especialidades organizadas em 3 categorias (Societário, DP/eSocial/FGTS/INSS, Impostos & IR)
│   │   ├── Work.tsx                     # Painel de +30 Anos na Área e 6 Principais Funções Contábeis (sem linha do tempo)
│   │   ├── Portfolio.tsx                # Vitrine filtrável de Soluções Contábeis (Todas, Empresas & DP, Impostos & IR)
│   │   ├── Contact.tsx                  # Formulário com bordas em L (5px solid #000) e Rodapé com Voltar ao Topo
│   │   ├── FigmaDecorations.tsx         # Componentes reutilizáveis do Figma (Headers com borda 8px, Separadores, Botões)
│   │   └── GrainOverlay.tsx             # Textura visual sutil
│   └── pages/
│       ├── Index.tsx                    # Composição principal do portfólio
│       └── NotFound.tsx                 # Página 404
└── README.md                            # Documentação técnica do projeto
```

---

## 3. Destaques Profissionais e Especialidades

- **Profissional:** Uthant Torres Magalhães — *Soluções Contábeis*
- **Experiência:** **+30 anos na área** contábil
- **Formação Acadêmica:** **Fundação Visconde de Cairu**
- **Principais Funções:**
  1. **Abertura e Encerramento de Empresas:** Contrato social, CNPJ, alvarás e registros nos órgãos competentes.
  2. **Apuração de Impostos:** Cálculo e emissão de guias de Simples Nacional, ICMS, IPI, PIS, COFINS, IRPJ e CSLL (**na data e em atraso**).
  3. **Departamento Pessoal:** Cálculos de folha de pagamento, pró-labore, férias, 13º salário, rescisões, **eSocial, FGTS e INSS**.
  4. **Obrigações Acessórias & Declarações:** Entrega de DEFIS, DCTFWeb, **Declarações de IRPF e IRPJ** e **Parcelamentos**.
  5. **Relatórios Contábeis:** Balanço Patrimonial, DRE (Demonstração do Resultado do Exercício) e fluxo de caixa.
  6. **Planejamento Tributário:** Estratégias para a empresa pagar menos impostos de forma legal (**Simples Nacional, MEI e Lucro Presumido**).

---

## 4. Como Executar

```bash
# Instalar dependências
npm install

# Executar ambiente de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```
