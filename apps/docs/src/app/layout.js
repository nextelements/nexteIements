import './css/globals.css'
import './css/docs.css'

import { ThemeProvider } from '@nextelements/themes'
import { cx } from '@nextelements/utilities'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Layout } from '../components/Layout'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={cx(geistSans.variable, geistMono.variable)}>
          <ThemeProvider themes={[ 'light', 'dark', 'customTheme' ]}>
            <Layout>{ children }</Layout>
          </ThemeProvider>
        </body>
    </html>
  );
}

