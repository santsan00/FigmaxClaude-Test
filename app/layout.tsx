import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: {
    default: 'My Blog',
    template: '%s | My Blog',
  },
  description: 'A minimal blog built with Next.js and Markdown.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-white text-gray-900 font-sans antialiased">
        <header className="border-b border-gray-100">
          <div className="max-w-2xl mx-auto px-4 py-5 flex items-center justify-between">
            <a
              href="/"
              className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
            >
              My Blog
            </a>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-12">
          {children}
        </main>

        <footer className="border-t border-gray-100 mt-24">
          <div className="max-w-2xl mx-auto px-4 py-6 text-sm text-gray-400 text-center">
            Built with Next.js and Markdown.
          </div>
        </footer>
      </body>
    </html>
  )
}
