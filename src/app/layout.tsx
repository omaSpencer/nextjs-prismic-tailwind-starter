import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/png'
          sizes='any'
          href='https://prismic.io/favicon.ico'
        />
        <meta property='og:url' content='Canonical link preview URL' />
      </head>
      <body>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
