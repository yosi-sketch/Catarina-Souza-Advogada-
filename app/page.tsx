"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeAlert,
  Briefcase,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5538988010869";
const PHONE_DISPLAY = "(38) 98801-0869";
const EMAIL_CONTACT = "contato@catarinasouzaadvogada.com.br";

const ADDRESS_TEXT =
  "Beco da Pena, 29 - Centro, Diamantina - MG, 39100-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Catarina+Souza+Advogada+Beco+da+Pena+29+Centro+Diamantina+MG";

const LOGO_SRC = "/Logo Dourado Catarina Souza Advogada.png";
const IMG_CONSIGNADO_SRC =
  "/imgi_9_825270124_18280603321291086_6369584387742786089_n.jpg";
const IMG_SUPERENDIVIDAMENTO_SRC =
  "/imgi_10_825449120_18280129957291086_5701673160777369769_n.jpg";
const IMG_ESCRITORIO_BANCARIO_SRC =
  "/imgi_14_794492546_18277284577291086_8367043188480776381_n.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Catarina Souza! Gostaria de agendar uma consulta jurídica.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-bancario-superendividamento",
    title: "Direito Bancário & Superendividamento",
    icon: Landmark,
    tag: "Repactuação & Defesa contra Bancos",
    summary:
      "Repactuação global de dívidas pela Lei do Superendividamento, revisão de contratos bancários e proteção da sua renda familiar.",
    details:
      "Se o pagamento das suas dívidas compromete o sustento básico da sua família, a Lei do Superendividamento garante o direito à repactuação judicial ou extrajudicial com preservação do mínimo existencial. Atuamos estrategicamente contra abusos bancários, juros excessivos e descontos que sufocam seu orçamento.",
    topics: [
      "Ação de Repactuação de Dívidas pela Lei do Superendividamento",
      "Preservação do Mínimo Existencial e limitação de descontos em conta/folha",
      "Revisão de Contratos Bancários, Financiamentos e Juros Abusivos",
      "Defesa estratégica em Execuções Bancárias, Busca e Apreensão e Cobranças",
      "Renegociação segura de passivos junto a instituições financeiras",
      "Auditoria jurídica de tarifas embutidas, venda casada e seguros indevidos",
    ],
    whatsAppText:
      "Olá, Dra. Catarina Souza! Gostaria de orientação sobre a Lei do Superendividamento e minhas dívidas bancárias.",
  },
  {
    id: "emprestimo-consignado-fraudes",
    title: "Empréstimos Consignados & Fraudes",
    icon: BadgeAlert,
    tag: "Proteção de Aposentados & Servidores",
    summary:
      "Descontaram um empréstimo consignado que você não contratou? Atuamos para suspender a cobrança e buscar indenização.",
    details:
      "Aposentados, pensionistas do INSS e servidores públicos são alvos frequentes de descontos indevidos, empréstimos não autorizados e cartões consignados (RMC/RCC) intermináveis. Ingressamos com pedidos liminares urgentes para cessar os descontos imediatamente, restituir os valores em dobro e reparar os danos morais.",
    topics: [
      "Cancelamento liminar de Empréstimo Consignado Não Contratado",
      "Suspensão de descontos abusivos de RMC e RCC (Cartão Consignado)",
      "Restituição em dobro de valores descontados indevidamente do benefício",
      "Indenização por danos morais decorrentes de fraude bancária e golpe",
      "Anulação de descontos de associações e sindicatos não autorizados no INSS",
      "Defesa contra golpes digitais, falsas centrais bancárias e fraudes via PIX",
    ],
    whatsAppText:
      "Olá, Dra. Catarina Souza! Descontaram um empréstimo consignado que não contratei e preciso de orientação jurídica.",
  },
  {
    id: "direito-consumidor",
    title: "Direito do Consumidor",
    icon: ShieldCheck,
    tag: "Defesa dos Seus Direitos",
    summary:
      "Exclusão de negativação indevida no SPC/Serasa, combate a cobranças abusivas, falhas de serviços e indenizações.",
    details:
      "Defendemos o consumidor de Diamantina e região perante grandes empresas, concessionárias, operadoras e bancos. Atuamos com agilidade para retirar restrições indevidas do seu nome, cancelar cobranças ilegais e garantir a justa reparação por falhas na prestação de serviços ou defeitos em produtos.",
    topics: [
      "Exclusão urgente de inscrição indevida no SPC, Serasa e protestos",
      "Indenização por cobranças abusivas e serviços não solicitados",
      "Demandas contra falhas em serviços essenciais (energia, água, telefonia e saúde)",
      "Direito de arrependimento, vícios ocultos de produtos e garantia legal",
      "Cancelamento de voos, extravio de bagagem e práticas abusivas no turismo",
      "Tutelas de urgência para restabelecimento imediato de serviços cortados",
    ],
    whatsAppText:
      "Olá, Dra. Catarina Souza! Preciso de assessoria jurídica em uma causa de Direito do Consumidor.",
  },
  {
    id: "direito-civel-contratos",
    title: "Direito Cível & Contratos",
    icon: Scale,
    tag: "Segurança Jurídica & Patrimônio",
    summary:
      "Ações indenizatórias, cobranças, elaboração de contratos, responsabilidade civil e solução eficaz de conflitos patrimoniais.",
    details:
      "Com profundo conhecimento jurídico e atenção minuciosa a cada detalhe processual, protegemos o seu patrimônio e prevenimos prejuízos. Atuamos na elaboração e análise de contratos, ações de cobrança, execução de títulos, questões imobiliárias e reparação integral por danos materiais e morais.",
    topics: [
      "Ações de Indenização por Danos Materiais, Morais e Estéticos",
      "Elaboração, revisão e rescisão de contratos civis, rurais e empresariais",
      "Cobranças judiciais, execuções de títulos e recuperação de créditos",
      "Direito Imobiliário: locações, despejo, usucapião e regularização de imóveis",
      "Responsabilidade civil em acidentes e descumprimentos contratuais",
      "Acordos extrajudiciais seguros com força de título executivo",
    ],
    whatsAppText:
      "Olá, Dra. Catarina Souza! Gostaria de agendar uma consulta na área de Direito Cível e Contratos.",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    icon: HeartHandshake,
    tag: "Atendimento Humanizado & Ético",
    summary:
      "Condução acolhedora, discreta e firme em divórcios, pensão alimentícia, guarda, partilha de bens e inventários.",
    details:
      "Questões familiares exigem sensibilidade humana aliada à segurança técnica. Conduzimos divórcios consensuais em cartório ou judiciais, ações de alimentos, guarda e regulamentação de convivência, bem como inventários e partilhas, sempre priorizando a dignidade e a tranquilidade da família.",
    topics: [
      "Divórcio Consensual Rápido em Cartório e Divórcio Judicial",
      "Pensão Alimentícia: fixação, revisão de valor, exoneração e execução",
      "Guarda Compartilhada ou Unilateral e Regulamentação de Visitas",
      "Reconhecimento e Dissolução de União Estável com partilha justa",
      "Inventário Extrajudicial (em Cartório) e Inventário Judicial",
      "Planejamento sucessório e proteção do patrimônio familiar",
    ],
    whatsAppText:
      "Olá, Dra. Catarina Souza! Gostaria de uma consulta especializada em Direito de Família e Sucessões.",
  },
  {
    id: "previdenciario-correspondencia",
    title: "Previdenciário & Correspondência",
    icon: Briefcase,
    tag: "INSS & Diligências em Diamantina",
    summary:
      "Aposentadorias, benefícios do INSS (BPC/LOAS, auxílios) e atuação como advogada correspondente na Comarca de Diamantina - MG.",
    details:
      "Defendemos segurados na conquista de aposentadorias, pensão por morte, auxílio-doença e BPC/LOAS na via administrativa e judicial. Além disso, prestamos suporte de excelência em correspondência jurídica, audiências e diligências para escritórios de todo o Brasil na Comarca de Diamantina e microrregião.",
    topics: [
      "Aposentadorias por Idade, Tempo de Contribuição, Rural e Especial",
      "Benefício Assistencial (BPC/LOAS) para idosos e pessoas com deficiência",
      "Auxílio por Incapacidade Temporária, Aposentadoria por Invalidez e Pensão por Morte",
      "Reversão judicial de benefícios negados ou cessados indevidamente pelo INSS",
      "Correspondência Jurídica em Diamantina - MG: audiências, protocolos e despachos",
      "Diligências presenciais, cópias, certidões e acompanhamento na 12ª Subseção OAB/MG",
    ],
    whatsAppText:
      "Olá, Dra. Catarina Souza! Gostaria de atendimento em Direito Previdenciário / Serviços Jurídicos em Diamantina.",
  },
];

function GoogleIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const clientReviews = [
  {
    name: "Ricardo Soares",
    reviewsCount: "1 avaliação no Google",
    date: "Há 4 anos",
    content:
      "Excelente profissional com atendimento humanizado e compromisso com o resultado! Vasto conhecimento na área Jurídica. Esta eu indico.",
    reply: "Obrigada. Sempre à disposição.",
  },
  {
    name: "Joelma Albino",
    reviewsCount: "7 avaliações no Google",
    date: "Há 3 anos",
    content:
      "Ótimo serviço de advocacia, tirou todas as minhas dúvidas e resolveu meu problema. Melhor escritório da cidade.",
    reply:
      "Obrigada pela avaliação! Nossa equipe sempre estará disponível oferecendo o melhor serviço de advocacia da cidade!",
  },
  {
    name: "Rogerio Souza",
    reviewsCount: "1 avaliação no Google",
    date: "Há 4 anos",
    content:
      "Excelente profissional! Muito compromissada com seus clientes! Essa eu indico!",
    reply:
      "Obrigada pela avaliação! É uma satisfação saber que pude ajudar a resolver suas questões jurídicas de forma eficiente e eficaz. Sempre me esforço para oferecer um serviço personalizado e de qualidade aos meus clientes.",
  },
  {
    name: "Stéfani Luíza",
    reviewsCount: "9 avaliações · 1 foto",
    date: "Há 3 anos",
    content:
      "Profissional atenta às necessidades do cliente. A melhor advogada de Diamantina-MG.",
    reply: "Obrigada, fico à disposição!",
  },
  {
    name: "Fabricia Almeida",
    reviewsCount: "1 avaliação no Google",
    date: "Há 3 anos",
    content:
      "Excelente profissional, atenciosa, parabéns por sua dedicação e profissionalismo.",
    reply: "Obrigada pelo feedback, fico à disposição!",
  },
  {
    name: "Claudia Ferreira",
    reviewsCount: "1 avaliação no Google",
    date: "Há 3 anos",
    content:
      "Excelente profissional, ética, competente e responsável. Gratidão!",
    reply:
      "Muito obrigada pela confiança em meu trabalho! Estou sempre às ordens.",
  },
  {
    name: "Daniela Silva",
    reviewsCount: "2 avaliações · 1 foto",
    date: "Há 5 meses",
    content: "Maravilhosa, atenciosa. Só tenho a agradecer.",
  },
  {
    name: "Daniele Andrade",
    reviewsCount: "2 avaliações no Google",
    date: "Há 1 ano",
    content: "Ótima profissional, me ajudou bastante, super indico!!!",
    reply: "Muito obrigada Daniele. Sempre às ordens!",
  },
  {
    name: "Amanda Mafra",
    reviewsCount: "2 avaliações no Google",
    date: "Há 4 anos",
    content: "Melhor advogada de Diamantina/MG e região!",
    reply: "Obrigada Amanda!",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.07] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]"
            : "font-serif text-4xl leading-[1.07] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.5rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-brand-100/80"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    if (!activeArea) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-ivory text-ink">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[110px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Catarina Souza Advogada — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-95"
            >
              <Image
                src={LOGO_SRC}
                width={1774}
                height={887}
                alt="Catarina Souza Advogada — Diamantina - MG"
                priority
                className="h-[68px] w-auto object-contain sm:h-[84px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                A Advogada & Escritório
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#orientacoes">
                Dívidas & Consignados
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Catarina Souza Advogada"
                className="grid size-10 place-items-center rounded-full border border-ink/15 text-brand-800 transition-all hover:border-brand-800 hover:bg-brand-50 hover:text-brand-900"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp de Catarina Souza Advogada"
                className="grid size-10 place-items-center rounded-full border border-ink/15 text-brand-800 transition-all hover:border-brand-800 hover:bg-brand-50 hover:text-brand-900"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                className="rounded-full shadow-sm"
              >
                Consulta no WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-ink/10 bg-ivory px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada & Escritório", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Superendividamento & Consignados", "#orientacoes"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede em Diamantina", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-ink-soft hover:text-brand-800"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-800 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:bg-brand-900"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> Falar no WhatsApp:{" "}
                      {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-ink transition-all hover:border-brand-800"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <MapPin size={15} /> Beco da Pena, 29 - Centro, Diamantina
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-ink/10"
        >
          {/* Subtle gold ambient orbs */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-brand-100/60 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div variants={reveal} className="eyebrow mb-6">
                <span className="size-2 shrink-0 rounded-full bg-brand-800" />
                <span>
                  Diamantina - MG · Centro · 5,0 ��� no Google (22 avaliações)
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.1rem] leading-[0.99] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.65rem]"
              >
                Atendimento jurídico{" "}
                <span className="font-serif italic text-brand-800">
                  humanizado
                </span>{" "}
                e compromisso real com o seu resultado.
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Defesa técnica, ética e personalizada conduzida pela{" "}
                <strong className="font-semibold text-ink">
                  Dra. Catarina Souza
                </strong>
                . Referência em{" "}
                <strong className="font-semibold text-ink">
                  Direito Bancário, Lei do Superendividamento, Fraudes em
                  Empréstimo Consignado, Consumidor, Cível, Família e
                  Previdenciário
                </strong>{" "}
                — com sede no Centro de Diamantina (MG) e atuação em toda a
                Microrregião e no Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Agendar Consulta no WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-ink transition-colors hover:text-brand-800"
                >
                  Conhecer áreas de atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink/10 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-brand-600 text-brand-600" />{" "}
                  5,0 estrelas no Google (22 avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={16} className="text-brand-800" /> Bancário,
                  Previdenciário, INSS & Cível
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-800" /> Beco da Pena,
                  29 · Centro, Diamantina - MG
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Portrait Presentation - Dra. Catarina Souza */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-2"
            >
              {/* Main portrait framed cleanly on the upper portrait area */}
              <div className="relative aspect-[0.82] overflow-hidden rounded-3xl border border-brand-600/35 bg-brand-950 shadow-2xl ring-1 ring-brand-600/20">
                <Image
                  src={IMG_CONSIGNADO_SRC}
                  alt="Dra. Catarina Souza — Advogada em Diamantina - MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="origin-top scale-[1.58] object-cover object-top"
                />
                <div className=" inset-x-0 bottom-0 absolute h-2/5 bg-gradient-to-t from-brand-950 via-brand-950/75 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Catarina Souza
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-200">
                      Advogada · Diamantina & Região - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-300/40 bg-brand-950/70 text-brand-200 backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-3 -left-3 rounded-2xl border border-brand-700/25 bg-white/95 p-3.5 shadow-card backdrop-blur-md sm:-left-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1 text-brand-700">
                    <Star size={13} className="fill-brand-600 text-brand-600" />
                    <span className="font-serif text-base font-bold text-ink">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-ink-soft">
                  22 Avaliações no Google
                </p>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -right-3 top-6 rounded-full border border-brand-700/25 bg-ivory/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-brand-800 shadow-card backdrop-blur-md sm:-right-5">
                ÉTICA & ATENDIMENTO HUMANIZADO
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-ink/10 bg-white/80"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima unânime com 22 avaliações no Google Maps",
              ],
              [
                "Previdenciário & INSS",
                "aposentadorias, benefícios e defesa dos segurados",
              ],
              [
                "Diamantina - MG",
                "sede no Beco da Pena, 29 - Centro e atendimento on-line",
              ],
              [
                "Seg a Sex · 8h–18h",
                "atendimento próximo, transparente e comprometido",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-brand-800 sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Catarina Souza & O Escritório */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 lg:px-12">
            {/* Real Office photo of Dra. Catarina Souza in blue blazer with award frame behind */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[500px]"
            >
              <div className="relative aspect-[0.88] overflow-hidden rounded-2xl border border-brand-700/20 bg-brand-950 shadow-card">
                <Image
                  src={IMG_ESCRITORIO_BANCARIO_SRC}
                  alt="Dra. Catarina Souza em seu escritório de advocacia em Diamantina - MG"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="origin-top scale-[1.22] object-cover object-[50%_14%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950/90 via-brand-950/35 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[330px] rounded-xl border border-brand-700/30 bg-ivory px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-800">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Advocacia de Referência em Diamantina
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  Dra. Catarina Souza
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-brand-800">
                  Catarina Souza Sociedade Individual de Advocacia
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  Sede no Beco da Pena, 29 — Centro Histórico de Diamantina -
                  MG.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l border-t border-brand-700/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                SOBRE O ESCRITÓRIO & ADVOGADA TITULAR
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.09] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem]"
              >
                Vasto conhecimento jurídico aliado a um{" "}
                <span className="italic text-brand-800">
                  atendimento próximo e resolutivo.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Com atuação consolidada em{" "}
                <strong className="text-ink">
                  Diamantina e em toda a Microrregião de Diamantina (MG)
                </strong>
                , o escritório{" "}
                <strong className="text-ink">Catarina Souza Advogada</strong>{" "}
                destaca-se pela dedicação minuciosa a cada cliente, ética
                inabalável e compromisso com soluções jurídicas rápidas,
                seguras e eficientes.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Seja na proteção de consumidores e aposentados contra{" "}
                <strong className="text-ink">
                  empréstimos consignados não contratados e superendividamento
                </strong>
                , seja na busca por aposentadoria, BPC/LOAS, auxílio por incapacidade,
                pensão por morte ou revisão de benefício, cada caso recebe escuta
                atenta, orientação transparente e estratégia personalizada.
              </motion.p>

              {/* Profile Highlight Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-ink/10 bg-ivory/80 p-5 transition-all hover:border-brand-700/40 hover:bg-ivory"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-full border-2 border-brand-700/40 shadow-sm">
                    <Image
                      src={IMG_SUPERENDIVIDAMENTO_SRC}
                      alt="Dra. Catarina Souza"
                      fill
                      className="origin-top scale-[1.8] object-cover object-[50%_10%]"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-brand-800">
                      Advogada Titular
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-ink">
                      Dra. Catarina Souza
                    </h3>
                    <p className="text-xs text-ink-soft">
                      Bancário · Superendividamento · Consignados · Consumidor ·
                      Cível · Família · INSS
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-brand-900">
                      Beco da Pena, 29 - Centro, Diamantina - MG · Atendimento
                      presencial e digital
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-medium text-ink sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-800"
                  />
                  <span>
                    Atendimento humanizado, ético e atento às suas necessidades
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-800"
                  />
                  <span>
                    Esclarecimento completo de dúvidas em linguagem clara
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-800"
                  />
                  <span>
                    Sede própria no Centro de Diamantina - MG (Beco da Pena, 29)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-800"
                  />
                  <span>
                    Nota máxima 5,0 estrelas no Google em 22 avaliações reais
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Catarina Souza! Gostaria de agendar uma consulta sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Catarina
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-brand-800"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="SERVIÇOS JURÍDICOS & PILARES DE ATUAÇÃO"
                description="Soluções jurídicas personalizadas para defender sua renda, seu patrimônio, seus direitos como consumidor e sua família na Microrregião de Diamantina e em todo o Brasil."
              >
                Atuação estratégica e comprometida com{" "}
                <span className="italic text-brand-800">
                  a defesa dos seus direitos.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione uma especialidade abaixo para ver os detalhes de
                atuação e iniciar seu atendimento pelo WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col rounded-xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-700/40 hover:shadow-card sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-800 transition-colors group-hover:bg-brand-800 group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-brand-700/50">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-800">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.65rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800 hover:text-brand-700"
                    >
                      Ver detalhes e tópicos{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Seção Especial: Orientações Jurídicas em Destaque (Superendividamento & Consignados) */}
        <section
          id="orientacoes"
          className="scroll-mt-24 border-y border-ink/10 bg-[#f4ede0] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="PROTEÇÃO FINANCEIRA & DEFESA DO CONSUMIDOR"
                description="Confira duas das principais frentes de atuação do escritório Catarina Souza Advogada na proteção da sua renda, aposentadoria e dignidade financeira."
              >
                Cobranças abusivas ou dívidas impagáveis?{" "}
                <span className="italic text-brand-800">
                  Conheça os seus direitos.
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Catarina Souza! Quero analisar meu caso de dívida bancária / empréstimo consignado."
                )}
                target="_blank"
                size="md"
                className="rounded-full shadow-sm"
              >
                <WhatsAppIcon size={16} /> Analisar Meu Caso no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Lei do Superendividamento (imgi_10 full visual) */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group grid items-center gap-6 rounded-2xl border border-brand-700/25 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/45 sm:grid-cols-[1fr_1.05fr] sm:gap-7 sm:p-5"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-brand-700/25 bg-brand-950 shadow-md">
                  <Image
                    src={IMG_SUPERENDIVIDAMENTO_SRC}
                    alt="Está difícil pagar todas as suas dívidas? Conheça a possibilidade de repactuação prevista na Lei do Superendividamento — Catarina Souza Advogada"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex h-full flex-col justify-between py-1 sm:pr-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-700/20 bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-800">
                      <Landmark size={13} /> Lei nº 14.181/2021
                    </span>
                    <h3 className="mt-3.5 font-serif text-2xl leading-tight text-ink sm:text-[1.65rem]">
                      Repactuação de Dívidas pelo Superendividamento
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft">
                      Quando empréstimos e dívidas comprometem o sustento básico,
                      a lei permite repactuar todos os débitos em um plano
                      compatível com sua renda, preservando o mínimo existencial.
                    </p>
                    <ul className="mt-3.5 space-y-1.5 text-xs font-medium text-ink">
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="shrink-0 text-brand-800"
                        />
                        <span>Proteção da renda e do mínimo existencial</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="shrink-0 text-brand-800"
                        />
                        <span>Plano judicial ou extrajudicial de pagamento</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-5 pt-3 border-t border-ink/10">
                    <a
                      href={getWhatsAppUrl(
                        "Olá, Dra. Catarina Souza! Vi a orientação sobre a Lei do Superendividamento e gostaria de saber como funciona a repactuação de dívidas."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/25 bg-brand-50/80 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-800 hover:text-white"
                    >
                      <span className="inline-flex items-center gap-2">
                        <WhatsAppIcon size={15} /> Solicitar análise de dívidas
                      </span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>

              {/* Card 2: Empréstimo Consignado Não Contratado (imgi_9 full visual) */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group grid items-center gap-6 rounded-2xl border border-brand-700/25 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/45 sm:grid-cols-[1fr_1.05fr] sm:gap-7 sm:p-5"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-brand-700/25 bg-brand-950 shadow-md">
                  <Image
                    src={IMG_CONSIGNADO_SRC}
                    alt="Descontaram um empréstimo consignado que você não contratou? Saiba o que fazer! — Catarina Souza Advogada"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex h-full flex-col justify-between py-1 sm:pr-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-700/20 bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-800">
                      <BadgeAlert size={13} /> Defesa contra Fraudes
                    </span>
                    <h3 className="mt-3.5 font-serif text-2xl leading-tight text-ink sm:text-[1.65rem]">
                      Empréstimo Consignado Não Contratado
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft">
                      Identificou descontos desconhecidos no seu benefício do
                      INSS ou contracheque? Atuamos com urgência para suspender
                      as cobranças e buscar restituição e indenização.
                    </p>
                    <ul className="mt-3.5 space-y-1.5 text-xs font-medium text-ink">
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="shrink-0 text-brand-800"
                        />
                        <span>Pedido liminar para suspender descontos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="shrink-0 text-brand-800"
                        />
                        <span>Restituição em dobro e danos morais</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-5 pt-3 border-t border-ink/10">
                    <a
                      href={getWhatsAppUrl(
                        "Olá, Dra. Catarina Souza! Descontaram um empréstimo consignado que eu não contratei e gostaria de saber como proceder."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/25 bg-brand-50/80 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-800 hover:text-white"
                    >
                      <span className="inline-flex items-center gap-2">
                        <WhatsAppIcon size={15} /> Denunciar desconto indevido
                      </span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Nosso Compromisso Ético e Operacional */}
        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-brand-700/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-brand-800/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO PROFISSIONAL"
                light
                description="O reconhecimento como um dos escritórios mais bem avaliados de Diamantina - MG é fruto de um método de trabalho pautado na ética, na escuta atenta e na eficiência técnica."
              >
                Dedicação personalizada e{" "}
                <span className="italic text-brand-200">
                  compromisso com cada cliente.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-brand-400/25 bg-white/5 p-6 font-serif text-base italic leading-7 text-brand-100">
                &ldquo;Excelente profissional com atendimento humanizado e
                compromisso com o resultado! Vasto conhecimento na área
                Jurídica. Esta eu indico.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-brand-300">
                  — Ricardo Soares · Avaliação 5,0 ★ no Google
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "01",
                  "Atendimento humanizado e escuta acolhedora",
                  "Recebemos cada cliente com atenção integral, tirando todas as dúvidas de forma clara, respeitosa e sem jargões complicados.",
                ],
                [
                  "02",
                  "Estratégia jurídica sob medida para o seu caso",
                  "Analisamos minuciosamente contratos, extratos previdenciários e documentos processuais para construir a tese jurídica mais sólida e eficaz.",
                ],
                [
                  "03",
                  "Ética, responsabilidade e acompanhamento transparente",
                  "Atuamos com seriedade absoluta do início à conclusão da demanda, mantendo você informado sobre cada avanço do seu processo.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-brand-300">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-brand-100/75">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 estrelas · 22 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="AVALIAÇÕES NO GOOGLE · NOTA 5,0 ★ (22 AVALIAÇÕES)"
                description="Confira os depoimentos reais de clientes que confiaram suas causas à Dra. Catarina Souza em Diamantina e região."
              >
                Reconhecida pelos clientes pela{" "}
                <span className="italic text-brand-800">
                  atenção, ética e excelência.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-2xl border border-brand-700/25 bg-ivory/80 p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-brand-700/15 bg-white shadow-sm">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-ink">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-brand-600">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-brand-600 text-brand-600"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-900">
                    Catarina Souza Advogada · Diamantina
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-brand-800 transition-colors hover:text-brand-950"
                  >
                    22 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-700/40 hover:shadow-card sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Date + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-brand-600">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-brand-600 text-brand-600"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-ink-soft">
                        <GoogleIcon size={13} />
                        <span>{review.date}</span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-ink/90">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {/* Owner reply if present */}
                    {review.reply && (
                      <div className="mt-4 rounded-lg border border-brand-700/20 bg-brand-50/80 p-3 text-[11px] leading-relaxed text-brand-950">
                        <span className="mb-0.5 block text-[9px] font-bold uppercase tracking-wider text-brand-800">
                          Resposta de Catarina Souza Advogada:
                        </span>
                        &ldquo;{review.reply}&rdquo;
                      </div>
                    )}
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full border border-brand-700/30 bg-brand-50 font-serif text-sm font-semibold text-brand-900">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-ink">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-ink/10 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Atendimento humanizado",
                  "Compromisso com o resultado",
                  "Ética, competente e responsável",
                  "Melhor escritório de Diamantina",
                  "Tirou todas as dúvidas",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ivory px-3.5 py-1.5 text-[11px] font-medium text-ink-soft"
                  >
                    <CheckCircle2 size={13} className="text-brand-800" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 transition-colors hover:text-brand-950"
              >
                Ver perfil completo no Google Maps{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização */}
        <section
          id="contato"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & SEDE EM DIAMANTINA - MG"
                description="Agende seu atendimento presencial em nosso escritório no Centro de Diamantina ou fale conosco pelo WhatsApp para atendimento rápido em toda a região."
              >
                Estamos à disposição para{" "}
                <span className="italic text-brand-800">
                  defender os seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-ink-soft">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-ink">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-ink-soft">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-brand-800"
                  />
                  <div>
                    <p className="font-semibold text-ink">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5">
                      Segunda a Sexta-feira: 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-ink-soft/80">
                      Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-brand-800" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-ink transition-colors hover:text-brand-800"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-brand-800" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-brand-800"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-brand-800"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Address & Office Hours Card */}
            <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-brand-800" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-800">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-800">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    Diamantina · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-ink-soft">
                <strong className="font-semibold text-ink">
                  Catarina Souza Advogada
                </strong>
                <br />
                Dra. Catarina Souza · Serviços Jurídicos na Microrregião de
                Diamantina, MG
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-xl border border-ink/10 bg-ivory/70 p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-800">
                  Expediente Semanal
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-ink-soft">
                  <span>Segunda a Sexta-feira</span>
                  <span className="text-right font-semibold text-ink">
                    08:00 – 18:00
                  </span>
                  <span>Sábado e Domingo</span>
                  <span className="text-right text-ink-soft">Fechado</span>
                </div>
              </div>

              <div className="my-7 h-px bg-ink/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Centro Histórico de Diamantina · Atendimento presencial e
                  digital
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-800 hover:bg-brand-50 hover:text-brand-900"
                >
                  Traçar Rota no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="bg-brand-800 px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-200">
                <Sparkles size={13} /> CATARINA SOUZA ADVOGADA · DIAMANTINA -
                MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica segura, ética e comprometida com
                o seu resultado?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Catarina Souza! Gostaria de agendar uma consulta inicial para avaliar meu caso."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-900 shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-950 px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Catarina Souza Advogada"
                className="inline-block"
              >
                <Image
                  src={LOGO_SRC}
                  width={1774}
                  height={887}
                  alt="Catarina Souza Advogada"
                  className="h-20 w-auto object-contain"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-brand-100/70">
                Serviços jurídicos com atendimento humanizado, ética e
                compromisso com o resultado na Microrregião de Diamantina - MG
                e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-brand-300">
                Dra. Catarina Souza · Catarina Souza Sociedade Individual de
                Advocacia
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-brand-100/75">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada & Escritório
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#orientacoes">
                  Superendividamento & Consignados
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede em Diamantina
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Contato & Endereço
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-brand-100/75">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Catarina Souza! Gostaria de solicitar um atendimento."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-brand-200"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={15} className="shrink-0" /> Telefone:{" "}
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </a>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-brand-200/80">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:00 às
                  18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-brand-100/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Catarina Souza Advogada (Catarina
              Souza Sociedade Individual de Advocacia). Todos os direitos
              reservados.
            </p>
            <p>
              Conteúdo meramente informativo, em estrita conformidade com o
              Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Quick Action Button */}
        <aside
          aria-label="Acesso rápido WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dra. Catarina Souza! Gostaria de tirar uma dúvida sobre meu caso."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-brand-950 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar no WhatsApp
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-ink/10 bg-ivory p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand-800 hover:text-brand-800"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ESPECIALIDADE JURÍDICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-ink sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-ink"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-brand-800" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    className="rounded-full shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta área
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-ink-soft transition-colors hover:text-ink"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
