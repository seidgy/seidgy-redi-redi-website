type CountryCode =
  | 'AR' | 'BR' | 'CL' | 'CO' | 'EC' | 'ES' | 'IN' | 'MX' | 'NG'
  | 'PY' | 'PE' | 'US' | 'UK' | 'UY'

type LinkType =
  | 'home' | 'sobre' | 'catalogo' | 'blog' | 'premium' | 'entrar'
  | 'politica' | 'termos' | 'ajuda' | 'registro'

const countries: Record<CountryCode, Record<LinkType, string>> = {
  AR: {
    home: 'https://rediredi.com/ar/',
    sobre: 'https://rediredi.com/ar/sobre-ar/',
    catalogo: 'https://rediredi.com/ar/como-generar-mas-visitas-a-su-catalogo-digital-ar/',
    blog: 'https://rediredi.com/ar/blog-ar/',
    premium: 'https://rediredi.com/ar/planes-premium-ar/',
    politica: 'https://rediredi.com/ar/politica-de-privacidad/',
    termos: 'https://rediredi.com/ar/terminos-y-condiciones/',
    ajuda: 'https://help.rediredi.com/es/',
    entrar: 'https://app.rediredi.com/es/signin',
    registro: 'https://app.rediredi.com/es/signup'
  },
  BR: {
    home: 'https://rediredi.com/br/',
    sobre: 'https://rediredi.com/br/sobre-br/',
    catalogo: 'https://rediredi.com/br/catalogo-online-2/',
    blog: 'https://rediredi.com/br/blog-br/',
    premium: 'https://rediredi.com/br/premium-br/',
    politica: 'https://rediredi.com/br/politica-de-privacidade/',
    termos: 'https://rediredi.com/br/termos-e-condicoes/',
    ajuda: 'https://help.rediredi.com/pt-BR/',
    entrar: 'https://app.rediredi.com/pt-BR/signin',
    registro: 'https://app.rediredi.com/pt-BR/signup'
  },
  CL: {
    home: 'https://rediredi.com/cl/',
    sobre: 'https://rediredi.com/cl/sobre-cl/',
    catalogo: 'https://rediredi.com/cl/catalogo-cl/',
    blog: 'https://rediredi.com/cl/blog-cl/',
    premium: 'https://rediredi.com/cl/planes-premium-cl/',
    politica: 'https://rediredi.com/cl/politica-de-privacidad/',
    termos: 'https://rediredi.com/cl/terminos-y-condiciones/',
    ajuda: 'https://help.rediredi.com/es/',
    entrar: 'https://app.rediredi.com/es/signin',
    registro: 'https://app.rediredi.com/es/signup'
  },
  CO: {
    home: 'https://rediredi.com/co/',
    sobre: 'https://rediredi.com/co/sobre-co/',
    catalogo: 'https://rediredi.com/co/como-generar-mas-visitas-a-su-catalogo-digital-co/',
    blog: 'https://rediredi.com/co/blog-co/',
    premium: 'https://rediredi.com/co/premium-co/',
    politica: 'https://rediredi.com/co/politica-de-privacidad/',
    termos: 'https://rediredi.com/co/terminos-y-condiciones/',
    ajuda: 'https://help.rediredi.com/es/',
    entrar: 'https://app.rediredi.com/es/signin',
    registro: 'https://app.rediredi.com/es/signup'
  },
  EC: {
    home: 'https://rediredi.com/ec/',
    sobre: 'https://rediredi.com/es/sobre-es/',
    catalogo: 'https://rediredi.com/es/como-generar-mas-visitas-a-su-catalogo-digital/',
    blog: 'https://rediredi.com/es/blog-es/',
    premium: 'https://rediredi.com/ec/premium-es-ec/',
    politica: 'https://rediredi.com/ec/politica-de-privacidad/',
    termos: 'https://rediredi.com/ec/terminos-y-condiciones/',
    ajuda: 'https://help.rediredi.com/es/',
    entrar: 'https://app.rediredi.com/es/signin',
    registro: 'https://app.rediredi.com/es/signup'
  },
  ES: {
    home: 'https://rediredi.com/es/',
    sobre: 'https://rediredi.com/es/sobre-es/',
    catalogo: 'https://rediredi.com/es/como-generar-mas-visitas-a-su-catalogo-digital/',
    blog: 'https://rediredi.com/es/blog-es/',
    premium: 'https://rediredi.com/es/premium-es-es/',
    politica: 'https://rediredi.com/es/politica-de-privacidad/',
    termos: 'https://rediredi.com/es/terminos-y-condiciones/',
    ajuda: 'https://help.rediredi.com/es/',
    entrar: 'https://app.rediredi.com/es/signin',
    registro: 'https://app.rediredi.com/es/signup'
  },
  IN: {
    home: 'https://rediredi.com/in/',
    sobre: 'https://rediredi.com/in/about-in/',
    catalogo: 'http://rediredi.com/in/how-to-generate-more-visits-to-your-digital-catalog-in/',
    blog: 'https://rediredi.com/in/blog-in/',
    premium: 'https://rediredi.com/in/premium-in/',
    politica: 'https://rediredi.com/in/privacy-policy/',
    termos: 'https://rediredi.com/in/terms-and-conditions/',
    ajuda: 'https://help.rediredi.com/en/',
    entrar: 'https://app.rediredi.com/en/signin',
    registro: 'https://app.rediredi.com/en/signup'
  },
  MX: {
    home: 'https://rediredi.com/mx/',
    sobre: 'https://rediredi.com/mx/sobre-mx/',
    catalogo: 'https://rediredi.com/mx/como-generar-mas-visitas-a-su-catalogo-digital-mx/',
    blog: 'https://rediredi.com/mx/blog-mx/',
    premium: 'https://rediredi.com/mx/premium-mx/',
    politica: 'https://rediredi.com/mx/politica-de-privacidad/',
    termos: 'https://rediredi.com/mx/terminos-y-condiciones/',
    ajuda: 'https://help.rediredi.com/es/',
    entrar: 'https://app.rediredi.com/es/signin',
    registro: 'https://app.rediredi.com/es/signup'
  },
  NG: {
    home: 'https://rediredi.com/ng/',
    sobre: 'https://rediredi.com/ng/about-ng/',
    catalogo: 'https://rediredi.com/ng/how-to-generate-more-visits-to-your-digital-catalog-ng/',
    blog: 'https://rediredi.com/ng/blog-ng/',
    premium: 'https://rediredi.com/ng/premium-ng/',
    politica: 'https://rediredi.com/ng/privacy-policy/',
    termos: 'https://rediredi.com/ng/terms-and-conditions/',
    ajuda: 'https://help.rediredi.com/en/',
    entrar: 'https://app.rediredi.com/en/signin',
    registro: 'https://app.rediredi.com/en/signup'
  },
  PY: {
    home: 'https://rediredi.com/py/',
    sobre: 'https://rediredi.com/py/sobre-py/',
    catalogo: 'https://rediredi.com/py/catalogo-py/',
    blog: 'https://rediredi.com/py/blog-py/',
    premium: 'https://rediredi.com/py/planes-premium-py/',
    politica: 'https://rediredi.com/py/politica-de-privacidad/',
    termos: 'https://rediredi.com/py/terminos-y-condiciones/',
    ajuda: 'https://help.rediredi.com/es/',
    entrar: 'https://app.rediredi.com/es/signin',
    registro: 'https://app.rediredi.com/es/signup'
  },
  PE: {
    home: 'https://rediredi.com/pe/',
    sobre: 'https://rediredi.com/pe/sobre-pe/',
    catalogo: 'https://rediredi.com/pe/catalogo-pe/',
    blog: 'https://rediredi.com/pe/blog-pe/',
    premium: 'https://rediredi.com/pe/axpos-planes-premium-pe/',
    politica: 'https://rediredi.com/pe/politica-de-privacidad/',
    termos: 'https://rediredi.com/pe/terminos-y-condiciones/',
    ajuda: 'https://help.rediredi.com/es/',
    entrar: 'https://app.rediredi.com/es/signin',
    registro: 'https://app.rediredi.com/es/signup'
  },
  US: {
    home: 'https://rediredi.com/us/',
    sobre: 'https://rediredi.com/us/about-us/',
    catalogo: 'https://rediredi.com/us/storefront-us/',
    blog: 'https://rediredi.com/us/blog-us/',
    premium: 'https://rediredi.com/us/premium-us/',
    politica: 'https://rediredi.com/us/privacy-policy/',
    termos: 'https://rediredi.com/us/terms-and-conditions/',
    ajuda: 'https://help.rediredi.com/en/',
    entrar: 'https://app.rediredi.com/en/signin',
    registro: 'https://app.rediredi.com/en/signup'
  },
  UK: {
    home: 'https://rediredi.com/uk/',
    sobre: 'https://rediredi.com/uk/about-uk/',
    catalogo: 'https://rediredi.com/uk/storefront-uk/',
    blog: 'https://rediredi.com/uk/blog-uk/',
    premium: 'https://rediredi.com/uk/premium-uk/',
    politica: 'https://rediredi.com/uk/privacy-policy/',
    termos: 'https://rediredi.com/uk/terms-and-conditions/',
    ajuda: 'https://help.rediredi.com/en/',
    entrar: 'https://app.rediredi.com/en/signin',
    registro: 'https://app.rediredi.com/en/signup'
  },
  UY: {
    home: 'https://rediredi.com/uy/',
    sobre: 'https://rediredi.com/uy/sobre-uy/',
    catalogo: 'https://rediredi.com/uy/axpos-catalogo-uy/',
    blog: 'https://rediredi.com/uy/blog-uy/',
    premium: 'https://rediredi.com/uy/planes-premium-uy/',
    politica: 'https://rediredi.com/uy/politica-de-privacidad/',
    termos: 'https://rediredi.com/uy/terminos-y-condiciones/',
    ajuda: 'https://help.rediredi.com/es/',
    entrar: 'https://app.rediredi.com/es/signin',
    registro: 'https://app.rediredi.com/es/signup'
  }
}

export function getCountryLink(code: string, section: LinkType): string {
  const country = countries[code.toUpperCase() as CountryCode] || countries['US']
  return country[section]
}
