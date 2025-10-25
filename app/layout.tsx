import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "AI 搜索优化——泓动数据",
  description: "抢占AI营销时代先机 让AI搜索为企业发声",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body className={`font-sans antialiased ${_inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
