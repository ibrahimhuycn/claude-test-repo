import type { Metadata } from 'next'
import './globals.css'
import { fontClasses } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Ninja Informatics Solutions - Advanced Laboratory Information Management',
  description: 'Streamline workflows, ensure accuracy, and enhance patient care with our advanced LIMS solution — your lab\'s perfect helper cell.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontClasses.body}>{children}</body>
    </html>
  )
}
