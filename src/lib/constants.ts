// =============================================
// CLIENT CONFIGURATION
// Replace all {{PLACEHOLDER}} values with real client data
// =============================================

export const SITE = {
  name: '{{CLIENT_NAME}}',
  shortName: '{{CLIENT_SHORT_NAME}}',
  domain: '{{DOMAIN}}',
  url: 'https://{{DOMAIN}}',
} as const;

export const COMPANY = {
  legalName: '{{LEGAL_NAME}}',
  tradeName: '{{TRADE_NAME}}',
  cnpj: '{{CNPJ}}',
  since: {{SINCE_YEAR}},
  description: '{{COMPANY_DESCRIPTION}}',
} as const;

export const CONTACT = {
  phone: '{{PHONE_FULL}}',
  phoneFormatted: '{{PHONE_FORMATTED}}',
  whatsapp: '{{WHATSAPP_NUMBER}}',
  whatsappLink: 'https://wa.me/{{WHATSAPP_NUMBER}}',
  email: '{{EMAIL}}',
  address: {
    street: '{{STREET}}',
    neighborhood: '{{NEIGHBORHOOD}}',
    city: '{{CITY}}',
    state: '{{STATE}}',
    cep: '{{CEP}}',
    full: '{{FULL_ADDRESS}}',
  },
  hours: {
    weekday: '{{WEEKDAY_HOURS}}',
    saturday: '{{SATURDAY_HOURS}}',
    sunday: '{{SUNDAY_HOURS}}',
  },
} as const;

// Add all cities the client serves
export const CITIES = [
  { name: '{{CITY_1_NAME}}', slug: '{{CITY_1_SLUG}}', state: '{{STATE}}' },
] as const;

// Add all services the client offers
export const SERVICES = [
  {
    id: '{{SERVICE_1_ID}}',
    name: '{{SERVICE_1_NAME}}',
    slug: '{{SERVICE_1_SLUG}}',
    icon: '{{SERVICE_1_ICON}}',
    description: '{{SERVICE_1_DESCRIPTION}}',
  },
] as const;

// Key selling points
export const DIFFERENTIALS = [
  { icon: '{{DIFF_1_ICON}}', title: '{{DIFF_1_TITLE}}', description: '{{DIFF_1_DESCRIPTION}}' },
  { icon: '{{DIFF_2_ICON}}', title: '{{DIFF_2_TITLE}}', description: '{{DIFF_2_DESCRIPTION}}' },
  { icon: '{{DIFF_3_ICON}}', title: '{{DIFF_3_TITLE}}', description: '{{DIFF_3_DESCRIPTION}}' },
] as const;

// FAQ
export const FAQ = [
  { question: '{{FAQ_1_QUESTION}}', answer: '{{FAQ_1_ANSWER}}' },
  { question: '{{FAQ_2_QUESTION}}', answer: '{{FAQ_2_ANSWER}}' },
  { question: '{{FAQ_3_QUESTION}}', answer: '{{FAQ_3_ANSWER}}' },
] as const;
