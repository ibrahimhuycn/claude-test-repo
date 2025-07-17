import { Ubuntu, Ubuntu_Mono } from 'next/font/google'

// Configure Ubuntu font with optimal settings
export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-ubuntu',
})

// Configure Ubuntu Mono for code/technical content
export const ubuntuMono = Ubuntu_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-ubuntu-mono',
})

// Font configuration object for easy reference
export const fontConfig = {
  sans: ubuntu,
  mono: ubuntuMono,
} as const

// CSS classes for easy application
export const fontClasses = {
  body: `${ubuntu.variable} ${ubuntuMono.variable}`,
  sans: ubuntu.className,
  mono: ubuntuMono.className,
} as const
