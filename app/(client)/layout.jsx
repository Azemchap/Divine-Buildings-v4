import React from 'react'
import App from '../../components/App'
import BackToTop from '../../components/BackToTop'
import SocialLinks from '../../components/SocialLinks'

import './globals.css'
import Script from 'next/script'
import { ThemeProvider } from '../../components/themeprovider'

export const metadata = {
  title: 'Divine Buildings',
  description: 'This is a website where you can buy all kinds of construction and house plans.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='relative'>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <App>
            {children}
          </App>
          <BackToTop />
          <SocialLinks />
          <Script
            type="text/javascript"
            async defer
            src="//assets.pinterest.com/js/pinit.js" />
        </ThemeProvider>
      </body>
    </html>
  )
}
