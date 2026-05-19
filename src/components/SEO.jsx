import { Helmet } from 'react-helmet-async'

const SITE_URL  = 'https://blackienetworks.com'
const SITE_NAME = 'Blackie Networks'
const OG_IMAGE  = `${SITE_URL}/og-image.png`

export default function SEO({ title, description, path = '/', type = 'website', jsonLd }) {
  const fullTitle    = `${title} | ${SITE_NAME}`
  const canonicalUrl = `${SITE_URL}${path}`

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name"    content={SITE_NAME} />
      <meta property="og:type"         content={type} />
      <meta property="og:title"        content={fullTitle} />
      <meta property="og:description"  content={description} />
      <meta property="og:url"          content={canonicalUrl} />
      <meta property="og:image"        content={OG_IMAGE} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale"       content="en_KE" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={OG_IMAGE} />

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
