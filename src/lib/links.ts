/**
 * URLs centralizadas con UTMs y mensajes predefinidos para analytics
 */

const WHATSAPP_BASE = "https://wa.me/34647186479"
const CAL_BASE = "https://cal.linkialab.com"

const whatsAppText = (text: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`

const calWithUtm = (utmCampaign: string) =>
  `${CAL_BASE}?utm_source=website&utm_medium=cta&utm_campaign=${utmCampaign}`

export const LINKS = {
  whatsapp: {
    hero: whatsAppText(
      "Hola, me interesa saber más sobre vuestros servicios de automatización."
    ),
    ctaSection: whatsAppText(
      "Hola, quiero agendar una consulta sobre automatización con IA."
    ),
    floatingButton: whatsAppText(
      "Hola, vengo de la web y me gustaría más información."
    ),
    footer: whatsAppText(
      "Hola, vengo de la web y me gustaría más información."
    ),
    notFound: whatsAppText(
      "Hola, tuve un problema en la web y necesito ayuda."
    ),
  },
  calendar: {
    hero: calWithUtm("hero"),
    ctaSection: calWithUtm("cta_section"),
    header: calWithUtm("header"),
    footer: calWithUtm("footer"),
    faq: calWithUtm("faq"),
    process: calWithUtm("process"),
  },
} as const
