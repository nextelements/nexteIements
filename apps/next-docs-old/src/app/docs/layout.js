import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { Provider } from '@/components/provider';

export default function DocumentLayout ({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Provider>{ children }</Provider> 
      </body>
    </html>
  );
}

