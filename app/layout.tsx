import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Add base tag for GitHub Pages */}
        <base href={process.env.NODE_ENV === "production" ? "/your-repo-name/" : "/"} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'