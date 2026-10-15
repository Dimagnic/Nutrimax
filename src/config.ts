// ============================================================
//  DATOS DEL NEGOCIO — edita aquí sin tocar los componentes.
//  Todo lo que dice "POR DEFINIR" es texto de relleno que debes
//  sustituir con información real del cliente.
//  Las listas vacías ([]) ocultan su sección automáticamente.
// ============================================================

export const business = {
  name: "Nutrimax",
  owner: "L. García",
  tagline: "Gimnasio y suplementos",
  whatsapp: "522219663226", // solo dígitos, con lada de país
  whatsappDisplay: "+52 221 966 3226",
  email: "", // ej. "contacto@nutrimax.mx"  (vacío = no se muestra)
  address: "", // ej. "Calle 1 #123, Col. Centro, Puebla"
  hours: "", // ej. "Lun–Vie 6:00–21:00 · Sáb 8:00–14:00"
  mapUrl: "", // enlace de Google Maps (opcional)
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: "",
  },
};

export const waMessage = "Hola Nutrimax, quiero información.";

export const nav = [
  { id: "solucion", label: "Solución" },
  { id: "testimonios", label: "Testimonios", needs: "reviews" },
  { id: "como-funciona", label: "Cómo funciona" },
  { id: "galeria", label: "Galería" },
  { id: "planes", label: "Planes" },
  { id: "preguntas", label: "Preguntas" },
] as const;

export const navCta = "Contáctanos";

export const hero = {
  eyebrow: "Gimnasio y suplementos deportivos",
  titleA: "Entrena fuerte, nútrete mejor",
  titleAccent: "y alcanza tu meta",
  text: "En Nutrimax encuentras entrenamiento y suplementación en un solo lugar. Escríbenos y te orientamos.",
  price: "", // ej. "$499" — vacío oculta el precio
  priceNote: "", // ej. "MXN al mes"
  priceSmall: "",
  cta: "Quiero información",
  ctaWa: "Escribir por WhatsApp",
  small: "Respondemos por WhatsApp. Sin compromiso.",
  bullets: [] as string[], // lista corta opcional bajo los botones
};

// Franja de indicadores. Déjala vacía hasta tener datos reales.
export const stats: { icon: string; value: string; label: string }[] = [];
export const statsEyebrow = "";

export const problems = {
  title: "¿Cuántas veces has dejado tu meta a medias?",
  items: [
    { img: "problem-1.jpg", title: "¿No sabes por dónde empezar?", text: "Sin una guía clara es fácil perder tiempo y motivación." },
    { img: "problem-2.jpg", title: "¿No ves resultados?", text: "Entrenar sin una buena nutrición frena tu avance." },
    { img: "problem-3.jpg", title: "¿No sabes qué suplemento elegir?", text: "Hay muchas opciones y cuesta decidir sin orientación." },
    { img: "problem-4.jpg", title: "¿Te falta constancia?", text: "Un lugar y un equipo que te acompañen hacen la diferencia." },
  ],
  closing: "Cuando entrenas y te nutres con orientación, cada día cuenta.",
  closingStrong: "Nutrimax te ayuda a ponerlo en práctica.",
};

export const solution = {
  title: "Un solo lugar para entrenar, nutrirte y avanzar",
  items: [
    { icon: "dumbbell", title: "Entrenas con un objetivo", text: "Te orientamos para que cada sesión te acerque a tu meta." },
    { icon: "bottle", title: "Eliges tus suplementos con asesoría", text: "Te ayudamos a encontrar lo que mejor se adapta a ti." },
    { icon: "chat", title: "Te atendemos por WhatsApp", text: "Resuelve tus dudas y pide información de forma directa." },
    { icon: "target", title: "Avanzas a tu ritmo", text: "Tu meta es lo importante; nosotros te acompañamos." },
  ],
  cta: "Quiero información",
};

export const dark = {
  eyebrow: "Entrenamiento y suplementación",
  title: "Entrena. Nútrete. Repite.",
  text: "Combina tu rutina con la suplementación adecuada. Cuéntanos tu objetivo y te orientamos por WhatsApp.",
  tableHead: ["¿Qué buscas?", "Cómo te ayudamos"],
  rows: [
    ["Empezar a entrenar", "Escríbenos y te explicamos cómo comenzar."],
    ["Mejorar mi nutrición", "Te orientamos sobre suplementos y productos."],
    ["Resolver una duda", "Respondemos por WhatsApp."],
  ],
  note: "POR DEFINIR: reemplaza esta tabla con los servicios reales del negocio.",
  img: "feature.jpg",
};

export type Review = { name: string; place: string; stars: number; text: string; youtube?: string };
export const reviews: Review[] = []; // Solo testimonios reales. Vacío = sección oculta.
export const reviewsSection = {
  eyebrow: "Clientes reales",
  title: "Lo que dicen nuestros clientes",
  cta: "¿Quieres resultados como estos?",
  ctaBtn: "Quiero información",
};

export type Video = { title: string; text?: string; youtube: string };
export const videos: Video[] = []; // IDs de YouTube. Vacío = sección oculta.
export const videosSection = {
  title: "Conócenos en video",
  text: "Mira cómo trabajamos.",
  cta: "Quiero información",
};

export const gallery = {
  eyebrow: "Galería",
  title: "Nutrimax en acción",
  // Pon fotos en public/images/gallery/ con estos nombres (jpg).
  items: [
    { file: "1.jpg", caption: "Foto 1" },
    { file: "2.jpg", caption: "Foto 2" },
    { file: "3.jpg", caption: "Foto 3" },
    { file: "4.jpg", caption: "Foto 4" },
    { file: "5.jpg", caption: "Foto 5" },
    { file: "6.jpg", caption: "Foto 6" },
  ],
  moreLabel: "", // ej. "Ver todas las fotos" (vacío = oculto)
  moreUrl: "", // ej. enlace a Instagram
};

export const plansSection = {
  eyebrow: "Planes y precios",
  title: "Elige lo que necesitas",
  bullets: [
    "POR DEFINIR: condiciones generales de los planes.",
    "Precios en MXN.",
    "Suplementos y extras se cotizan por separado.",
  ],
  promoImg: "promo.jpg", // banner opcional: public/images/promo.jpg
};

export const store = {
  title: "¿Buscas suplementos?",
  text: "Pregúntanos por disponibilidad y precios de nuestros productos por WhatsApp.",
  btn: "Pedir por WhatsApp",
  waText: "Hola Nutrimax, quiero información de suplementos.",
  intro: "Empieza por lo esencial",
  introTitle: "Información clara antes de decidir",
  introText: "Escríbenos y te explicamos cómo funciona cada opción.",
  cards: [
    { title: "Pregunta sin compromiso", text: "Resolvemos tus dudas por WhatsApp." },
    { title: "Te orientamos", text: "Te ayudamos a elegir según tu objetivo." },
    { title: "Empiezas cuando quieras", text: "Tú decides el momento." },
    { title: "Pedido por WhatsApp", text: "Confirmamos disponibilidad contigo." },
  ],
};

export const steps = {
  title: "Así empiezas",
  items: [
    { title: "Nos escribes", text: "Por WhatsApp o con el formulario." },
    { title: "Te orientamos", text: "Entendemos tu objetivo." },
    { title: "Nos visitas", text: "Conoce el lugar y los productos." },
    { title: "Eliges", text: "Decides lo que más te conviene." },
  ],
};

export const support = {
  title: "Acompañamiento en tu proceso",
  img: "team.jpg",
  subtitle: "Nutrimax, a tu lado",
  text: "POR DEFINIR: describe aquí cómo acompaña el negocio a sus clientes.",
  cta: "Quiero información",
};

export const faqs = [
  { q: "¿Necesito experiencia para empezar?", a: "POR DEFINIR. Escríbenos por WhatsApp y te respondemos." },
  { q: "¿Qué suplementos manejan?", a: "POR DEFINIR. Pregúntanos por WhatsApp para ver disponibilidad." },
  { q: "¿Cuánto cuesta?", a: "POR DEFINIR. Consulta precios actualizados por WhatsApp." },
  { q: "¿Cuál es el horario?", a: "POR DEFINIR. Consúltalo por WhatsApp." },
  { q: "¿Dónde están ubicados?", a: "POR DEFINIR. Escríbenos y te compartimos la ubicación." },
];
export const faqTitle = { eyebrow: "Antes de decidir", title: "Preguntas frecuentes" };

export const form = {
  eyebrow: "El siguiente paso",
  title: "Contáctanos",
  text: "Déjanos tus datos y te respondemos por WhatsApp.",
  points: [
    { icon: "shield", strong: "Sin compromiso.", text: "Primero resolvemos tus dudas." },
    { icon: "pin", strong: "Atención directa.", text: "Te respondemos por WhatsApp." },
    { icon: "headset", strong: "Te acompañamos.", text: "Orientación desde el primer mensaje." },
  ],
  callout: "Tu meta empieza con el primer paso.",
  alt: "¿Prefieres hablar ya?",
  submit: "Enviar por WhatsApp",
  privacy: "Acepto que Nutrimax use mis datos para atender mi consulta.",
  fine: "Usaremos estos datos solo para atender tu consulta.",
};

export const footer = {
  about: "Gimnasio y suplementos.",
  legal: [] as { label: string; href: string }[], // aviso de privacidad, etc.
};
