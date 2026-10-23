import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#120f0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.catarinasouzaadvogada.com.br"),
  title:
    "Catarina Souza Advogada | Diamantina - MG | Serviços Jurídicos Especializados",
  description:
    "Atendimento jurídico humanizado, ético e comprometido com resultados em Diamantina e toda a Microrregião de Diamantina - MG. Dra. Catarina Souza é especialista em Direito Bancário, Lei do Superendividamento, Fraudes em Empréstimo Consignado, Direito do Consumidor, Cível, Família e Previdenciário. Sede no Beco da Pena, 29 - Centro, Diamantina - MG. Nota máxima 5,0 estrelas no Google (22 avaliações).",
  keywords: [
    "Catarina Souza Advogada",
    "Dra. Catarina Souza",
    "Advogada Diamantina MG",
    "Escritório de Advocacia Diamantina",
    "Serviços Jurídicos Diamantina MG",
    "Direito Bancário Diamantina",
    "Lei do Superendividamento Diamantina",
    "Empréstimo Consignado Não Contratado",
    "Direito do Consumidor Diamantina",
    "Direito Cível Diamantina",
    "Direito de Família Diamantina",
    "Direito Previdenciário INSS Diamantina",
    "Aposentadoria e BPC LOAS Diamantina",
    "Auxílio por Incapacidade e Pensão por Morte",
    "Revisão de Benefício do INSS",
    "Advogada Correspondente Diamantina MG",
  ],
  authors: [
    { name: "Dra. Catarina Souza" },
    { name: "Catarina Souza Advogada" },
  ],
  creator: "Catarina Souza Advogada",
  publisher: "Catarina Souza Advogada",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.catarinasouzaadvogada.com.br",
    title:
      "Catarina Souza Advogada | Soluções Jurídicas em Diamantina - MG",
    description:
      "Atendimento humanizado e compromisso com o resultado na Microrregião de Diamantina - MG. Especialista em Direito Bancário, Superendividamento, Consignados, Consumidor, Cível e Família. Nota 5,0 ★ no Google.",
    siteName: "Catarina Souza Advogada",
    images: [
      {
        url: "/Logo Dourado Catarina Souza Advogada.png",
        width: 1774,
        height: 887,
        alt: "Catarina Souza Advogada — Diamantina - MG",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Catarina Souza Advogada",
    alternateName: "Catarina Souza Sociedade Individual de Advocacia",
    founder: {
      "@type": "Person",
      name: "Dra. Catarina Souza",
      jobTitle: "Advogada Titular",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Beco da Pena, 29 - Centro",
      addressLocality: "Diamantina",
      addressRegion: "MG",
      postalCode: "39100-000",
      addressCountry: "BR",
    },
    telephone: "+55-38-98801-0869",
    url: "https://www.catarinasouzaadvogada.com.br",
    image:
      "https://www.catarinasouzaadvogada.com.br/Logo%20Dourado%20Catarina%20Souza%20Advogada.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "22",
    },
    areaServed: [
      "Diamantina",
      "Microrregião de Diamantina",
      "Vale do Jequitinhonha",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
