import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI/ML Portfolio - Pavan Kumar',
  description: 'Modern portfolio website showcasing AI/ML projects and expertise',
  keywords: 'AI, ML, Machine Learning, Data Science, Portfolio',
  authors: [{ name: 'Pavan Kumar' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}