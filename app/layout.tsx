import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jaykumar Patel - Software Development Engineer",
  description:
    "Portfolio of Jaykumar Patel, a passionate Software Development Engineer with expertise in full-stack development, blockchain technology, and scalable system architecture.",
  keywords: ["Software Engineer", "Full Stack Developer", "Java", "Spring Boot", "React", "Blockchain", "Portfolio"],
  authors: [{ name: "Jaykumar Patel" }],
  openGraph: {
    title: "Jaykumar Patel - Software Development Engineer",
    description:
      "Portfolio of Jaykumar Patel, a passionate Software Development Engineer with expertise in full-stack development, blockchain technology, and scalable system architecture.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
