import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Note AI',
  // description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //The <ClerkProvider /> component provides active session and user context to Clerk's hooks and other components. Import it into your app by adding import { ClerkProvider } from '@clerk/nextjs' at the top of your file.
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
