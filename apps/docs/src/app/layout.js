import './globals.css'

import { ThemeProvider } from '@nextelements/themes'
import { classNames } from '@nextelements/utilities'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={classNames(geistSans.variable, geistMono.variable)}>
          <ThemeProvider themes={[ 'light', 'dark', 'customTheme' ]}>
            { children }
          </ThemeProvider>
        </body>
    </html>
  );
}

