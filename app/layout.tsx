import type { Metadata } from 'next'
import Script from 'next/script'
import UnicornScene from 'unicornstudio-react/next'
import './globals.css'

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
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased flex flex-col" style={{ fontFamily: "'PP Agrandir', sans-serif" }}>
        <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
        <div className="fixed inset-0 -z-10">
        <UnicornScene
          projectId="DQAxZZ5IK1QPCHyuQu3C"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js"
          width="100%"
          height="100%"
        />
      </div>
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

        <main className="max-w-2xl mx-auto px-4 py-12 flex-1">
          {children}
        </main>

        <footer className="border-t border-gray-100 bg-white">
          <div className="max-w-2xl mx-auto px-4 py-6 text-sm text-gray-400 text-center">
            Built with Next.js and Markdown.
          </div>
        </footer>
      </body>
    </html>
  )
}
