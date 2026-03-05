import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SuperNova Dev | Engenharia Full-Stack, Mobile & IA',
  description: 'Agência de software especializada em desenvolvimento full-stack, apps mobile com Flutter, automação com IA e sistemas escaláveis. React, Next.js, Go, Flutter, Claude API.',
  keywords: 'desenvolvimento software, full-stack, Flutter, Next.js, Go, automação IA, WhatsApp bot, Firebase, React',
  authors: [{ name: 'Lucas Ferreira Assunção Mello' }],
  openGraph: {
    title: 'SuperNova Dev | Engenharia Full-Stack, Mobile & IA',
    description: 'Agência de software especializada em desenvolvimento full-stack, apps mobile e automação com IA.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
