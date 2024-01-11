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
      </head>
      <body>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
