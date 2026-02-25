export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AISCEND',
  url: 'https://automatizacionesaiscend.com',
  logo: 'https://automatizacionesaiscend.com/logo600.png',
  description: 'Soluciones de automatización con IA para negocios',
  sameAs: [
    'https://www.facebook.com/AISCEND',
    'https://twitter.com/AISCEND_AI',
    'https://www.linkedin.com/company/aiscend',
    'https://www.instagram.com/aiscend_ai'
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: ['es', 'en']
  }
};

export const serviceSchema = (name: string, description: string, image: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  image,
  provider: {
    '@type': 'Organization',
    name: 'AISCEND',
    url: 'https://automatizacionesaiscend.com'
  }
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const webPageSchema = (title: string, description: string, url: string, image: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url,
  image,
  isPartOf: {
    '@type': 'WebSite',
    name: 'AISCEND',
    url: 'https://automatizacionesaiscend.com'
  }
});
