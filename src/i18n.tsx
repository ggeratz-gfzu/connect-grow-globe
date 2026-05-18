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

    "hero.eyebrow": "Desarrollo de Negocios Internacionales",
    "hero.title": "Convertimos productos en negocios internacionales.",
    "hero.subtitle": "Más de 20 años de experiencia y trayectoria comercial comprobada en México y mercados internacionales. Diseñamos estrategias de entrada, ecosistemas de distribución y escalamos productos hacia mercados de alto crecimiento.",
    "hero.cta1": "Agenda una consultoría",
    "hero.cta2": "Conoce nuestros servicios",
    "hero.stat1": "+20 años", "hero.stat1d": "de trayectoria comercial",
    "hero.stat2": "4 continentes", "hero.stat2d": "con negocios concretados",
    "hero.stat3": "10+ países", "hero.stat3d": "con operaciones comerciales comprobadas",

    "about.eyebrow": "Quiénes somos",
    "about.title": "Tu brazo comercial internacional: el puente estratégico entre tu producto y nuevos mercados.",
    "about.p1": "GFZ-U-Connect S.C. es el brazo comercial internacional de las empresas que quieren crecer. Funcionamos como una extensión de tu equipo de ventas: abrimos mercados, generamos demanda, construimos relaciones con distribuidores y cerramos acuerdos en tu nombre.",
    "about.p2": "Diseñamos estrategias de entrada a mercado, desarrollamos ecosistemas de distribución de alto impacto y aceleramos la expansión de tus productos a través de distintos continentes — sin que tengas que montar una operación internacional desde cero.",
    "about.b1": "Estrategia con visión internacional",
    "about.b2": "Ejecución comercial comprobada",
    "about.b3": "Red estratégica internacional",

    "services.eyebrow": "Lo que hacemos",
    "services.title": "Servicios diseñados para escalar internacionalmente",
    "services.subtitle": "Acompañamiento integral en cada etapa de la expansión internacional de tu negocio.",
    "s1.t": "Expansión a mercados internacionales", "s1.d": "Identificamos oportunidades y abrimos rutas de entrada hacia mercados estratégicos.",
    "s2.t": "Ejecución comercial en mercados emergentes", "s2.d": "Implementamos operaciones comerciales con resultados medibles en geografías de alto crecimiento.",
    "s3.t": "Alianzas estratégicas y negociaciones", "s3.d": "Estructuramos acuerdos de alto valor con socios clave en cada región.",
    "s4.t": "Estrategia Go-to-Market", "s4.d": "Definimos el posicionamiento, canales y modelo comercial para un lanzamiento exitoso.",
    "s5.t": "Creación de canales y red de distribuidores", "s5.d": "Construimos ecosistemas de distribución sólidos y escalables.",
    "s6.t": "Cierre de acuerdos internacionales", "s6.d": "Negociamos y formalizamos contratos de compra-venta y representación comercial.",
    "s7.t": "Vinculación con embajadas y entidades gubernamentales", "s7.d": "Activamos relaciones estratégicas con autoridades regulatorias y diplomáticas.",
    "s8.t": "Representación en Expos y Cumbres internacionales", "s8.d": "Posicionamos tu marca en los foros más relevantes de la industria.",

    "coverage.eyebrow": "Cobertura internacional",
    "coverage.title": "Experiencia comercial activa en 4 continentes",
    "coverage.subtitle": "América · África · Asia · Europa",

    "results.eyebrow": "Resultados",
    "results.title": "Construyendo un legado de impacto medible",
    "results.subtitle": "Próximamente compartiremos métricas, testimoniales de clientes y marcas con las que hemos colaborado.",
    "results.soon": "Próximamente",
    "results.m1": "Clientes satisfechos",
    "results.m2": "Marcas representadas",
    "results.m3": "Testimoniales",

    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos sobre tu próxima expansión internacional",
    "contact.subtitle": "Cuéntanos sobre tu producto y los mercados que deseas conquistar. Te responderemos en menos de 48 horas.",
    "contact.name": "Nombre completo",
    "contact.company": "Empresa",
    "contact.email": "Correo electrónico",
    "contact.phone": "Teléfono",
    "contact.message": "¿Cómo podemos ayudarte?",
    "contact.send": "Enviar solicitud",
    "contact.sent": "¡Gracias! Hemos recibido tu mensaje.",
    "contact.direct": "Contacto directo",

    "footer.tagline": "Tu brazo comercial internacional. Convertimos productos en negocios internacionales.",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.coverage": "Coverage",
    "nav.results": "Results",
    "nav.contact": "Contact",
    "nav.cta": "Request information",

    "hero.eyebrow": "International Business Development",
    "hero.title": "We turn products into international businesses.",
    "hero.subtitle": "Over 20 years of proven commercial experience and track record in Mexico and international markets. We architect market entry strategies, build high-impact distribution ecosystems, and scale products into high-growth markets.",
    "hero.cta1": "Book a consultation",
    "hero.cta2": "Explore our services",
    "hero.stat1": "+20 years", "hero.stat1d": "of commercial execution",
    "hero.stat2": "4 continents", "hero.stat2d": "with active presence",
    "hero.stat3": "10+ countries", "hero.stat3d": "of proven operation",

    "about.eyebrow": "Who we are",
    "about.title": "Your international commercial arm: the strategic bridge between your product and new markets.",
    "about.p1": "GFZ-U-Connect S.C. is the international commercial arm for companies that want to grow. We work as an extension of your sales team: opening markets, generating demand, building distributor relationships and closing deals on your behalf.",
    "about.p2": "We design market entry strategies, build high-impact distribution ecosystems and accelerate product expansion across continents — without you having to stand up an international operation from scratch.",
    "about.b1": "Strategy with an international vision",
    "about.b2": "Proven commercial execution",
    "about.b3": "International strategic network",

    "services.eyebrow": "What we do",
    "services.title": "Services designed to scale internationally",
    "services.subtitle": "End-to-end support throughout every stage of your international expansion.",
    "s1.t": "International market expansion", "s1.d": "We identify opportunities and open entry routes into strategic markets.",
    "s2.t": "Commercial execution in emerging markets", "s2.d": "We deploy commercial operations with measurable results across high-growth geographies.",
    "s3.t": "Strategic partnerships & negotiations", "s3.d": "We structure high-value agreements with key partners in every region.",
    "s4.t": "Go-to-market strategy", "s4.d": "We define positioning, channels and commercial model for a successful launch.",
    "s5.t": "Distributor & channel creation", "s5.d": "We build solid, scalable distribution ecosystems.",
    "s6.t": "Closing international deals", "s6.d": "We negotiate and formalize purchase, sale and representation agreements.",
    "s7.t": "Engagement with embassies & government", "s7.d": "We activate strategic relationships with regulatory and diplomatic authorities.",
    "s8.t": "Representation at Expos & Summits", "s8.d": "We position your brand at the most relevant industry forums.",

    "coverage.eyebrow": "International coverage",
    "coverage.title": "Active commercial experience across 4 continents",
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
    "contact.subtitle": "Tell us about your product and the markets you want to reach. We respond within 48 hours.",
    "contact.name": "Full name",
    "contact.company": "Company",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "How can we help you?",
    "contact.send": "Send request",
    "contact.sent": "Thank you! We've received your message.",
    "contact.direct": "Direct contact",

    "footer.tagline": "Your international commercial arm. We turn products into international businesses.",
    "footer.rights": "All rights reserved.",
  },
  pt: {
    "nav.about": "Sobre nós",
    "nav.services": "Serviços",
    "nav.coverage": "Cobertura",
    "nav.results": "Resultados",
    "nav.contact": "Contato",
    "nav.cta": "Solicitar informações",

    "hero.eyebrow": "Desenvolvimento de Negócios Internacionais",
    "hero.title": "Transformamos produtos em negócios internacionais.",
    "hero.subtitle": "Mais de 20 anos de experiência e trajetória comercial comprovada no México e em mercados internacionais. Desenhamos estratégias de entrada, ecossistemas de distribuição e escalamos produtos em mercados de alto crescimento.",
    "hero.cta1": "Agendar consultoria",
    "hero.cta2": "Conhecer nossos serviços",
    "hero.stat1": "+20 anos", "hero.stat1d": "de execução comercial",
    "hero.stat2": "4 continentes", "hero.stat2d": "com presença ativa",
    "hero.stat3": "10+ países", "hero.stat3d": "de operação comprovada",

    "about.eyebrow": "Quem somos",
    "about.title": "Seu braço comercial internacional: a ponte estratégica entre o seu produto e novos mercados.",
    "about.p1": "A GFZ-U-Connect S.C. é o braço comercial internacional das empresas que querem crescer. Funcionamos como uma extensão da sua equipe de vendas: abrimos mercados, geramos demanda, construímos relações com distribuidores e fechamos acordos em seu nome.",
    "about.p2": "Desenhamos estratégias de entrada de mercado, construímos ecossistemas de distribuição de alto impacto e aceleramos a expansão dos seus produtos por diversos continentes — sem que você precise montar uma operação internacional do zero.",
    "about.b1": "Estratégia com visão internacional",
    "about.b2": "Execução comercial comprovada",
    "about.b3": "Rede estratégica internacional",

    "services.eyebrow": "O que fazemos",
    "services.title": "Serviços desenhados para escalar internacionalmente",
    "services.subtitle": "Acompanhamento integral em cada etapa da expansão internacional do seu negócio.",
    "s1.t": "Expansão para mercados internacionais", "s1.d": "Identificamos oportunidades e abrimos rotas de entrada em mercados estratégicos.",
    "s2.t": "Execução comercial em mercados emergentes", "s2.d": "Implementamos operações comerciais com resultados mensuráveis em geografias de alto crescimento.",
    "s3.t": "Parcerias estratégicas e negociações", "s3.d": "Estruturamos acordos de alto valor com parceiros-chave em cada região.",
    "s4.t": "Estratégia Go-to-Market", "s4.d": "Definimos posicionamento, canais e modelo comercial para um lançamento bem-sucedido.",
    "s5.t": "Criação de canais e rede de distribuidores", "s5.d": "Construímos ecossistemas de distribuição sólidos e escaláveis.",
    "s6.t": "Fechamento de acordos internacionais", "s6.d": "Negociamos e formalizamos contratos de compra, venda e representação.",
    "s7.t": "Vinculação com embaixadas e órgãos governamentais", "s7.d": "Ativamos relações estratégicas com autoridades regulatórias e diplomáticas.",
    "s8.t": "Representação em Expos e Cúpulas", "s8.d": "Posicionamos sua marca nos fóruns mais relevantes do setor.",

    "coverage.eyebrow": "Cobertura global",
    "coverage.title": "Experiência comercial ativa em 4 continentes",
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
    "contact.subtitle": "Conte-nos sobre seu produto e os mercados que deseja alcançar. Respondemos em menos de 48 horas.",
    "contact.name": "Nome completo",
    "contact.company": "Empresa",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.message": "Como podemos ajudar?",
    "contact.send": "Enviar solicitação",
    "contact.sent": "Obrigado! Recebemos sua mensagem.",
    "contact.direct": "Contato direto",

    "footer.tagline": "Transformamos produtos em negócios globais.",
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
