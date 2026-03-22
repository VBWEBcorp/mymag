export const siteConfig = {
  name: 'myMag',
  url: 'https://mymag.app',
  locale: 'en_US',
  description:
    'myMag — Create personalized, professionally printed magazines in minutes with AI. From Zurich, for the world.',
  ogImage: 'https://mymag.app/og.png',
  twitterHandle: '@mymag',
  themeColor: '#4a90d9',
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} — ${siteConfig.name}`
}

export const routes = ['/', '/create'] as const
