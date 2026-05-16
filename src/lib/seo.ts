import { SITE, COMPANY, CONTACT } from './constants';

export function generateTitle(pageTitle: string, city?: string): string {
  const parts = [pageTitle, SITE.shortName];
  if (city) parts.push(city);
  return parts.join(' | ');
}

export function generateDescription(text: string): string {
  return text.length > 157 ? text.substring(0, 157) + '...' : text;
}

export function generateLocalBusinessSchema(overrides: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.tradeName,
    description: COMPANY.description,
    url: SITE.url,
    telephone: CONTACT.phoneFormatted,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.cep,
      addressCountry: 'BR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    areaServed: overrides.areaServed || [],
    ...overrides,
  };
}

export function generateServiceSchema(service: { name: string; description: string; slug: string }, city?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.tradeName,
      url: SITE.url,
    },
    areaServed: city ? { '@type': 'City', name: city } : undefined,
    url: `${SITE.url}/${service.slug}/`,
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
