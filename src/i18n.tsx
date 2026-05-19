import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en" | "pt";

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  es: {
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.coverage": "Experiencia multicultural",
    "nav.results": "Resultados",
    "nav.contact": "Contacto",
    "nav.cta": "Solicitar información",

    "hero.eyebrow": "Desarrollo de Negocios Internacionales",
    "hero.title": "Tu brazo comercial para escalar productos hacia negocios internacionales de alto impacto.",
    "hero.subtitle": "Más de 20 años diseñando estrategias de entrada, articulando ecosistemas de distribución y cerrando acuerdos comerciales en mercados de alto crecimiento. Convertimos productos competitivos en operaciones internacionales rentables y sostenibles.",
    "hero.cta1": "Agenda una consultoría estratégica",
    "hero.cta2": "Conoce nuestros servicios",
    "hero.stat1": "+20 años", "hero.stat1d": "de trayectoria comercial comprobada",
    "hero.stat2": "4 continentes", "hero.stat2d": "con operaciones concretadas",
    "hero.stat3": "10+ países", "hero.stat3d": "con presencia comercial activa",

    "about.eyebrow": "Quiénes somos",
    "about.title": "Tu brazo comercial internacional: el puente estratégico entre tu producto y los mercados que importan.",
    "about.p1": "GFZ-U-Connect S.C. opera como el brazo comercial internacional de empresas con visión de crecimiento. Actuamos como una extensión integral de tu equipo de ventas: abrimos mercados, generamos demanda calificada, construimos relaciones con distribuidores estratégicos y cerramos acuerdos en tu nombre.",
    "about.p2": "Diseñamos estrategias de entrada a mercado, articulamos ecosistemas de distribución de alto impacto y aceleramos la expansión internacional de tus productos a través de distintos continentes — sin que tengas que asumir la complejidad ni el costo de montar una operación internacional desde cero.",
    "about.b1": "Visión estratégica internacional",
    "about.b2": "Ejecución comercial comprobada",
    "about.b3": "Red de contactos de alto nivel",

    "services.eyebrow": "Lo que hacemos",
    "services.title": "Servicios diseñados para escalar tu negocio internacionalmente",
    "services.subtitle": "Acompañamiento integral en cada etapa del proceso de internacionalización, con resultados medibles y enfoque consultivo.",
    "s1.t": "Expansión a mercados internacionales", "s1.d": "Identificamos oportunidades de alto potencial y diseñamos rutas de entrada hacia mercados estratégicos.",
    "s2.t": "Ejecución comercial en mercados emergentes", "s2.d": "Desplegamos operaciones comerciales con KPIs claros y resultados medibles en geografías de alto crecimiento.",
    "s3.t": "Alianzas estratégicas y negociaciones de alto nivel", "s3.d": "Estructuramos acuerdos comerciales de alto valor con socios clave en cada región.",
    "s4.t": "Estrategia Go-to-Market", "s4.d": "Definimos posicionamiento, canales y modelo comercial para lanzamientos rentables y sostenibles.",
    "s5.t": "Desarrollo de canales y red de distribuidores", "s5.d": "Construimos ecosistemas de distribución sólidos, escalables y alineados a tu propuesta de valor.",
    "s6.t": "Cierre de acuerdos internacionales", "s6.d": "Negociamos y formalizamos contratos de compra-venta, distribución y representación comercial.",
    "s7.t": "Vinculación con embajadas y entidades gubernamentales", "s7.d": "Activamos relaciones institucionales con autoridades regulatorias, comerciales y diplomáticas.",
    "s8.t": "Representación en Expos y Cumbres internacionales", "s8.d": "Posicionamos tu marca en los foros y eventos de mayor relevancia para tu industria.",

    "coverage.eyebrow": "Experiencia multicultural",
    "coverage.title": "Experiencia multicultural comprobada en 4 continentes",
    "coverage.subtitle": "Negociaciones de alto nivel en América, África, Asia y Europa.",

    "results.eyebrow": "Resultados",
    "results.title": "Construyendo un legado de impacto medible",
    "results.subtitle": "Próximamente compartiremos métricas, testimoniales de clientes y marcas con las que hemos colaborado.",
    "results.soon": "Próximamente",
    "results.m1": "Clientes satisfechos",
    "results.m2": "Marcas representadas",
    "results.m3": "Testimoniales",

    "contact.eyebrow": "Contacto",
    "contact.title": "Conversemos sobre tu próxima expansión internacional",
    "contact.subtitle": "Cuéntanos sobre tu producto y los mercados que deseas conquistar. Un consultor especializado te responderá en menos de 48 horas.",
    "contact.name": "Nombre completo",
    "contact.company": "Empresa",
    "contact.email": "Correo electrónico",
    "contact.phone": "Teléfono",
    "contact.message": "¿Cómo podemos ayudarte?",
    "contact.send": "Enviar solicitud",
    "contact.sent": "¡Gracias! Hemos recibido tu mensaje y te contactaremos a la brevedad.",
    "contact.direct": "Contacto directo",

    "footer.tagline": "Tu brazo comercial internacional. Convertimos productos competitivos en negocios internacionales rentables.",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.coverage": "Multicultural Experience",
    "nav.results": "Results",
    "nav.contact": "Contact",
    "nav.cta": "Request information",

    "hero.eyebrow": "International Business Development",
    "hero.title": "Your commercial arm to scale products into high-impact international businesses.",
    "hero.subtitle": "Over 20 years architecting market entry strategies, orchestrating distribution ecosystems, and closing commercial agreements in high-growth markets. We turn competitive products into profitable, sustainable international operations.",
    "hero.cta1": "Book a strategic consultation",
    "hero.cta2": "Explore our services",
    "hero.stat1": "+20 years", "hero.stat1d": "of proven commercial track record",
    "hero.stat2": "4 continents", "hero.stat2d": "with deals successfully closed",
    "hero.stat3": "10+ countries", "hero.stat3d": "with active commercial presence",

    "about.eyebrow": "Who we are",
    "about.title": "Your international commercial arm: the strategic bridge between your product and the markets that matter.",
    "about.p1": "GFZ-U-Connect S.C. operates as the international commercial arm for growth-driven companies. We act as a full extension of your sales team: opening markets, generating qualified demand, building strategic distributor relationships, and closing deals on your behalf.",
    "about.p2": "We design market entry strategies, orchestrate high-impact distribution ecosystems, and accelerate international expansion across continents — without you having to absorb the complexity or cost of standing up an international operation from scratch.",
    "about.b1": "Strategic international vision",
    "about.b2": "Proven commercial execution",
    "about.b3": "High-level network of contacts",

    "services.eyebrow": "What we do",
    "services.title": "Services designed to scale your business internationally",
    "services.subtitle": "End-to-end support throughout every stage of internationalization, with measurable outcomes and a consultative approach.",
    "s1.t": "International market expansion", "s1.d": "We identify high-potential opportunities and design entry routes into strategic markets.",
    "s2.t": "Commercial execution in emerging markets", "s2.d": "We deploy commercial operations with clear KPIs and measurable results across high-growth geographies.",
    "s3.t": "Strategic partnerships & high-level negotiations", "s3.d": "We structure high-value commercial agreements with key partners in every region.",
    "s4.t": "Go-to-market strategy", "s4.d": "We define positioning, channels and commercial model for profitable, sustainable launches.",
    "s5.t": "Channel & distributor network development", "s5.d": "We build solid, scalable distribution ecosystems aligned to your value proposition.",
    "s6.t": "Closing international deals", "s6.d": "We negotiate and formalize purchase, distribution and commercial representation agreements.",
    "s7.t": "Engagement with embassies & government bodies", "s7.d": "We activate institutional relationships with regulatory, trade and diplomatic authorities.",
    "s8.t": "Representation at Expos & international Summits", "s8.d": "We position your brand at the most relevant forums and events in your industry.",

    "coverage.eyebrow": "Multicultural experience",
    "coverage.title": "Proven multicultural experience across 4 continents",
    "coverage.subtitle": "High-level negotiations across the Americas, Africa, Asia and Europe.",

    "results.eyebrow": "Results",
    "results.title": "Building a legacy of measurable impact",
    "results.subtitle": "Soon we will share metrics, client testimonials and the brands we have collaborated with.",
    "results.soon": "Coming soon",
    "results.m1": "Satisfied clients",
    "results.m2": "Brands represented",
    "results.m3": "Testimonials",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your next international expansion",
    "contact.subtitle": "Tell us about your product and the markets you want to reach. A specialized consultant will respond within 48 hours.",
    "contact.name": "Full name",
    "contact.company": "Company",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "How can we help you?",
    "contact.send": "Send request",
    "contact.sent": "Thank you! We've received your message and will be in touch shortly.",
    "contact.direct": "Direct contact",

    "footer.tagline": "Your international commercial arm. We turn competitive products into profitable international businesses.",
    "footer.rights": "All rights reserved.",
  },
  pt: {
    "nav.about": "Sobre nós",
    "nav.services": "Serviços",
    "nav.coverage": "Experiência multicultural",
    "nav.results": "Resultados",
    "nav.contact": "Contato",
    "nav.cta": "Solicitar informações",

    "hero.eyebrow": "Desenvolvimento de Negócios Internacionais",
    "hero.title": "Seu braço comercial para escalar produtos a negócios internacionais de alto impacto.",
    "hero.subtitle": "Mais de 20 anos desenhando estratégias de entrada, articulando ecossistemas de distribuição e fechando acordos comerciais em mercados de alto crescimento. Transformamos produtos competitivos em operações internacionais rentáveis e sustentáveis.",
    "hero.cta1": "Agendar consultoria estratégica",
    "hero.cta2": "Conhecer nossos serviços",
    "hero.stat1": "+20 anos", "hero.stat1d": "de trajetória comercial comprovada",
    "hero.stat2": "4 continentes", "hero.stat2d": "com negócios concretizados",
    "hero.stat3": "10+ países", "hero.stat3d": "com presença comercial ativa",

    "about.eyebrow": "Quem somos",
    "about.title": "Seu braço comercial internacional: a ponte estratégica entre o seu produto e os mercados que importam.",
    "about.p1": "A GFZ-U-Connect S.C. opera como o braço comercial internacional de empresas com visão de crescimento. Atuamos como uma extensão integral da sua equipe de vendas: abrimos mercados, geramos demanda qualificada, construímos relações com distribuidores estratégicos e fechamos acordos em seu nome.",
    "about.p2": "Desenhamos estratégias de entrada de mercado, articulamos ecossistemas de distribuição de alto impacto e aceleramos a expansão internacional dos seus produtos por diversos continentes — sem que você precise assumir a complexidade nem o custo de montar uma operação internacional do zero.",
    "about.b1": "Visão estratégica internacional",
    "about.b2": "Execução comercial comprovada",
    "about.b3": "Rede de contatos de alto nível",

    "services.eyebrow": "O que fazemos",
    "services.title": "Serviços desenhados para escalar seu negócio internacionalmente",
    "services.subtitle": "Acompanhamento integral em cada etapa do processo de internacionalização, com resultados mensuráveis e abordagem consultiva.",
    "s1.t": "Expansão para mercados internacionais", "s1.d": "Identificamos oportunidades de alto potencial e desenhamos rotas de entrada em mercados estratégicos.",
    "s2.t": "Execução comercial em mercados emergentes", "s2.d": "Implementamos operações comerciais com KPIs claros e resultados mensuráveis em geografias de alto crescimento.",
    "s3.t": "Parcerias estratégicas e negociações de alto nível", "s3.d": "Estruturamos acordos comerciais de alto valor com parceiros-chave em cada região.",
    "s4.t": "Estratégia Go-to-Market", "s4.d": "Definimos posicionamento, canais e modelo comercial para lançamentos rentáveis e sustentáveis.",
    "s5.t": "Desenvolvimento de canais e rede de distribuidores", "s5.d": "Construímos ecossistemas de distribuição sólidos, escaláveis e alinhados à sua proposta de valor.",
    "s6.t": "Fechamento de acordos internacionais", "s6.d": "Negociamos e formalizamos contratos de compra, venda, distribuição e representação comercial.",
    "s7.t": "Vinculação com embaixadas e órgãos governamentais", "s7.d": "Ativamos relações institucionais com autoridades regulatórias, comerciais e diplomáticas.",
    "s8.t": "Representação em Expos e Cúpulas internacionais", "s8.d": "Posicionamos sua marca nos fóruns e eventos mais relevantes do seu setor.",

    "coverage.eyebrow": "Experiência multicultural",
    "coverage.title": "Experiência multicultural comprovada em 4 continentes",
    "coverage.subtitle": "Negociações de alto nível nas Américas, África, Ásia e Europa.",

    "results.eyebrow": "Resultados",
    "results.title": "Construindo um legado de impacto mensurável",
    "results.subtitle": "Em breve compartilharemos métricas, depoimentos de clientes e marcas com as quais colaboramos.",
    "results.soon": "Em breve",
    "results.m1": "Clientes satisfeitos",
    "results.m2": "Marcas representadas",
    "results.m3": "Depoimentos",

    "contact.eyebrow": "Contato",
    "contact.title": "Vamos conversar sobre sua próxima expansão internacional",
    "contact.subtitle": "Conte-nos sobre seu produto e os mercados que deseja alcançar. Um consultor especializado responderá em menos de 48 horas.",
    "contact.name": "Nome completo",
    "contact.company": "Empresa",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.message": "Como podemos ajudar?",
    "contact.send": "Enviar solicitação",
    "contact.sent": "Obrigado! Recebemos sua mensagem e entraremos em contato em breve.",
    "contact.direct": "Contato direto",

    "footer.tagline": "Seu braço comercial internacional. Transformamos produtos competitivos em negócios internacionais rentáveis.",
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
