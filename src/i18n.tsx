import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en" | "pt";

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  es: {
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.coverage": "Cobertura",
    "nav.results": "Resultados",
    "nav.contact": "Contacto",
    "nav.cta": "Solicitar información",

    "hero.eyebrow": "Dirección de Expansión de Mercados Internacionales",
    "hero.title": "Llevamos tu producto a nuevos mercados internacionales.",
    "hero.subtitle": "Más de 20 años ejerciendo la Dirección de Expansión de Mercados para empresas que han comercializado con éxito en México y en más de 10 países. Diseñamos la estrategia, abrimos canales de distribución y conducimos la negociación hasta el cierre comercial.",
    "hero.cta1": "Hablemos de tu proyecto",
    "hero.cta2": "Conoce nuestros servicios",
    "hero.stat1": "+20 años", "hero.stat1d": "dirigiendo expansión comercial",
    "hero.stat2": "4 continentes", "hero.stat2d": "con negocios concretados",
    "hero.stat3": "10+ países", "hero.stat3d": "con comercialización comprobada",

    "about.eyebrow": "Quiénes somos",
    "about.title": "Tu Dirección de Expansión de Mercados, sin sumar estructura interna.",
    "about.p1": "GFZ-U-Connect S.C. opera como una Dirección de Expansión de Mercados externa para empresas que buscan crecer fuera de su geografía actual. Asumimos la responsabilidad de abrir mercados, estructurar la red comercial y llevar las negociaciones hasta el cierre.",
    "about.p2": "Trabajamos con la disciplina de un equipo directivo: diagnóstico de mercado, estrategia de entrada, desarrollo de canales y seguimiento comercial con indicadores claros, en México y en más de 10 países donde hemos comercializado.",
    "about.b1": "Estrategia con visión internacional",
    "about.b2": "Trayectoria comercial comprobada",
    "about.b3": "Red estratégica internacional",

    "services.eyebrow": "Lo que hacemos",
    "services.title": "Las funciones de un Director de Expansión, a tu servicio",
    "services.subtitle": "Cubrimos las responsabilidades clave de una Dirección de Expansión de Mercados: estrategia, apertura de canales, alianzas y cierre comercial internacional.",
    "s1.t": "Apertura de nuevos mercados internacionales", "s1.d": "Identificamos oportunidades, evaluamos viabilidad y definimos las rutas de entrada hacia mercados prioritarios.",
    "s2.t": "Dirección comercial en mercados emergentes", "s2.d": "Conducimos la operación comercial en geografías de alto crecimiento con metas, indicadores y rendición de cuentas.",
    "s3.t": "Alianzas estratégicas y negociaciones", "s3.d": "Estructuramos acuerdos de alto valor con socios, distribuidores y clientes clave en cada región.",
    "s4.t": "Estrategia Go-to-Market", "s4.d": "Definimos posicionamiento, propuesta de valor, canales y modelo comercial para un lanzamiento sólido.",
    "s5.t": "Desarrollo de canales y red de distribuidores", "s5.d": "Reclutamos, evaluamos y activamos distribuidores para construir una red comercial escalable.",
    "s6.t": "Cierre de acuerdos internacionales", "s6.d": "Negociamos y formalizamos contratos de compra-venta, distribución y representación comercial.",
    "s7.t": "Vinculación con embajadas y entidades gubernamentales", "s7.d": "Activamos relaciones institucionales con autoridades regulatorias, comerciales y diplomáticas.",
    "s8.t": "Representación en Expos y Cumbres internacionales", "s8.d": "Posicionamos tu marca y generamos contactos calificados en los foros más relevantes del sector.",

    "coverage.eyebrow": "Cobertura comercial",
    "coverage.title": "Hemos comercializado en 4 continentes y más de 10 países",
    "coverage.subtitle": "América · África · Asia · Europa",

    "results.eyebrow": "Resultados",
    "results.title": "Construyendo un legado de impacto medible",
    "results.subtitle": "Próximamente compartiremos métricas, testimoniales de clientes y marcas con las que hemos colaborado.",
    "results.soon": "Próximamente",
    "results.m1": "Clientes satisfechos",
    "results.m2": "Marcas representadas",
    "results.m3": "Testimoniales",

    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos de tu próxima expansión internacional",
    "contact.subtitle": "Cuéntanos sobre tu producto y los mercados que quieres abrir. Te respondemos en menos de 48 horas.",
    "contact.name": "Nombre completo",
    "contact.company": "Empresa",
    "contact.email": "Correo electrónico",
    "contact.phone": "Teléfono",
    "contact.message": "¿Cómo podemos ayudarte?",
    "contact.send": "Enviar solicitud",
    "contact.sent": "¡Gracias! Hemos recibido tu mensaje.",
    "contact.direct": "Contacto directo",

    "footer.tagline": "Dirección de Expansión de Mercados Internacionales.",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.coverage": "Coverage",
    "nav.results": "Results",
    "nav.contact": "Contact",
    "nav.cta": "Request information",

    "hero.eyebrow": "International Market Expansion Leadership",
    "hero.title": "We take your product into new international markets.",
    "hero.subtitle": "Over 20 years leading International Market Expansion for companies that have successfully commercialized in Mexico and 10+ countries. We design the strategy, open distribution channels and lead negotiations through to closing.",
    "hero.cta1": "Let's talk about your project",
    "hero.cta2": "Explore our services",
    "hero.stat1": "+20 years", "hero.stat1d": "leading market expansion",
    "hero.stat2": "4 continents", "hero.stat2d": "with closed deals",
    "hero.stat3": "10+ countries", "hero.stat3d": "with proven commercialization",

    "about.eyebrow": "Who we are",
    "about.title": "Your Market Expansion Director, without adding internal headcount.",
    "about.p1": "GFZ-U-Connect S.C. acts as an external Market Expansion Directorate for companies looking to grow beyond their current geography. We take ownership of opening markets, structuring the commercial network and leading negotiations to the close.",
    "about.p2": "We work with the discipline of an executive team: market diagnosis, entry strategy, channel development and commercial follow-up with clear KPIs, in Mexico and the 10+ countries where we have commercialized.",
    "about.b1": "Strategy with an international vision",
    "about.b2": "Proven commercial track record",
    "about.b3": "International strategic network",

    "services.eyebrow": "What we do",
    "services.title": "A Market Expansion Director's responsibilities, at your service",
    "services.subtitle": "We cover the core responsibilities of an International Market Expansion Directorate: strategy, channel building, partnerships and deal closing.",
    "s1.t": "Opening new international markets", "s1.d": "We identify opportunities, assess feasibility and define entry routes into priority markets.",
    "s2.t": "Commercial leadership in emerging markets", "s2.d": "We lead commercial operations in high-growth geographies with targets, KPIs and accountability.",
    "s3.t": "Strategic partnerships & negotiations", "s3.d": "We structure high-value agreements with partners, distributors and key clients in every region.",
    "s4.t": "Go-to-market strategy", "s4.d": "We define positioning, value proposition, channels and commercial model for a strong launch.",
    "s5.t": "Distributor & channel development", "s5.d": "We recruit, vet and activate distributors to build a scalable commercial network.",
    "s6.t": "Closing international deals", "s6.d": "We negotiate and formalize purchase, distribution and representation agreements.",
    "s7.t": "Engagement with embassies & government", "s7.d": "We activate institutional relationships with regulatory, commercial and diplomatic authorities.",
    "s8.t": "Representation at Expos & Summits", "s8.d": "We position your brand and generate qualified leads at the industry's most relevant forums.",

    "coverage.eyebrow": "Commercial coverage",
    "coverage.title": "We have commercialized across 4 continents and 10+ countries",
    "coverage.subtitle": "America · Africa · Asia · Europe",

    "results.eyebrow": "Results",
    "results.title": "Building a legacy of measurable impact",
    "results.subtitle": "Soon we will share metrics, client testimonials and the brands we have collaborated with.",
    "results.soon": "Coming soon",
    "results.m1": "Satisfied clients",
    "results.m2": "Brands represented",
    "results.m3": "Testimonials",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your next international expansion",
    "contact.subtitle": "Tell us about your product and the markets you want to open. We respond within 48 hours.",
    "contact.name": "Full name",
    "contact.company": "Company",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "How can we help you?",
    "contact.send": "Send request",
    "contact.sent": "Thank you! We've received your message.",
    "contact.direct": "Direct contact",

    "footer.tagline": "International Market Expansion Leadership.",
    "footer.rights": "All rights reserved.",
  },
  pt: {
    "nav.about": "Sobre nós",
    "nav.services": "Serviços",
    "nav.coverage": "Cobertura",
    "nav.results": "Resultados",
    "nav.contact": "Contato",
    "nav.cta": "Solicitar informações",

    "hero.eyebrow": "Direção de Expansão de Mercados Internacionais",
    "hero.title": "Levamos o seu produto a novos mercados internacionais.",
    "hero.subtitle": "Mais de 20 anos exercendo a Direção de Expansão de Mercados para empresas que comercializaram com sucesso no México e em mais de 10 países. Desenhamos a estratégia, abrimos canais de distribuição e conduzimos a negociação até o fechamento.",
    "hero.cta1": "Vamos falar do seu projeto",
    "hero.cta2": "Conheça nossos serviços",
    "hero.stat1": "+20 anos", "hero.stat1d": "liderando expansão comercial",
    "hero.stat2": "4 continentes", "hero.stat2d": "com negócios concretizados",
    "hero.stat3": "10+ países", "hero.stat3d": "com comercialização comprovada",

    "about.eyebrow": "Quem somos",
    "about.title": "Sua Direção de Expansão de Mercados, sem ampliar a estrutura interna.",
    "about.p1": "A GFZ-U-Connect S.C. atua como uma Direção de Expansão de Mercados externa para empresas que buscam crescer além da sua geografia atual. Assumimos a responsabilidade de abrir mercados, estruturar a rede comercial e conduzir as negociações até o fechamento.",
    "about.p2": "Trabalhamos com a disciplina de um time executivo: diagnóstico de mercado, estratégia de entrada, desenvolvimento de canais e acompanhamento comercial com indicadores claros, no México e nos mais de 10 países onde comercializamos.",
    "about.b1": "Estratégia com visão internacional",
    "about.b2": "Trajetória comercial comprovada",
    "about.b3": "Rede estratégica internacional",

    "services.eyebrow": "O que fazemos",
    "services.title": "As responsabilidades de um Diretor de Expansão, ao seu serviço",
    "services.subtitle": "Cobrimos as responsabilidades-chave de uma Direção de Expansão de Mercados Internacionais: estratégia, abertura de canais, alianças e fechamento comercial.",
    "s1.t": "Abertura de novos mercados internacionais", "s1.d": "Identificamos oportunidades, avaliamos a viabilidade e definimos as rotas de entrada em mercados prioritários.",
    "s2.t": "Direção comercial em mercados emergentes", "s2.d": "Conduzimos a operação comercial em geografias de alto crescimento, com metas, indicadores e prestação de contas.",
    "s3.t": "Parcerias estratégicas e negociações", "s3.d": "Estruturamos acordos de alto valor com parceiros, distribuidores e clientes-chave em cada região.",
    "s4.t": "Estratégia Go-to-Market", "s4.d": "Definimos posicionamento, proposta de valor, canais e modelo comercial para um lançamento sólido.",
    "s5.t": "Desenvolvimento de canais e rede de distribuidores", "s5.d": "Recrutamos, avaliamos e ativamos distribuidores para construir uma rede comercial escalável.",
    "s6.t": "Fechamento de acordos internacionais", "s6.d": "Negociamos e formalizamos contratos de compra, venda, distribuição e representação.",
    "s7.t": "Vinculação com embaixadas e órgãos governamentais", "s7.d": "Ativamos relações institucionais com autoridades regulatórias, comerciais e diplomáticas.",
    "s8.t": "Representação em Expos e Cúpulas", "s8.d": "Posicionamos sua marca e geramos contatos qualificados nos fóruns mais relevantes do setor.",

    "coverage.eyebrow": "Cobertura comercial",
    "coverage.title": "Já comercializamos em 4 continentes e mais de 10 países",
    "coverage.subtitle": "América · África · Ásia · Europa",

    "results.eyebrow": "Resultados",
    "results.title": "Construindo um legado de impacto mensurável",
    "results.subtitle": "Em breve compartilharemos métricas, depoimentos de clientes e marcas com as quais colaboramos.",
    "results.soon": "Em breve",
    "results.m1": "Clientes satisfeitos",
    "results.m2": "Marcas representadas",
    "results.m3": "Depoimentos",

    "contact.eyebrow": "Contato",
    "contact.title": "Vamos falar sobre sua próxima expansão internacional",
    "contact.subtitle": "Conte-nos sobre seu produto e os mercados que deseja abrir. Respondemos em menos de 48 horas.",
    "contact.name": "Nome completo",
    "contact.company": "Empresa",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.message": "Como podemos ajudar?",
    "contact.send": "Enviar solicitação",
    "contact.sent": "Obrigado! Recebemos sua mensagem.",
    "contact.direct": "Contato direto",

    "footer.tagline": "Direção de Expansão de Mercados Internacionais.",
    "footer.rights": "Todos os direitos reservados.",
  },
};

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "es",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved && ["es", "en", "pt"].includes(saved)) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  const t = (k: string) => dictionaries[lang][k] ?? k;

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
