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
  title: {
    default: "GEO生成式引擎优化专家 - 泓动数据科技有限公司官网",
    template: "%s | 泓动数据科技有限公司"
  },
  description: "泓动数据科技有限公司专注于GEO生成式引擎优化、AI搜索优化、短视频截流和抖音代运营服务，帮助企业提升在线可见性和流量转化。",
  keywords: [
    "泓动数据",
    "GEO优化",
    "AI搜索优化",
    "短视频截流",
    "抖音代运营",
    "数据科技",
    "搜索引擎优化",
    "SEO优化",
    "内容营销"
  ],
  authors: [{ name: "泓动数据科技有限公司" }],
  creator: "泓动数据科技有限公司",
  publisher: "泓动数据科技有限公司",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/favicon.ico' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
  openGraph: {
    title: "GEO生成式引擎优化专家 - 泓动数据科技有限公司官网",
    description: "泓动数据科技有限公司专注于GEO生成式引擎优化、AI搜索优化、短视频截流和抖音代运营服务，帮助企业提升在线可见性和流量转化。",
    url: "https://hongdong.com", // 请替换为实际域名
    siteName: "泓动数据科技有限公司",
    images: [
      {
        url: "/images/hero-tech-bg.jpg", // 请替换为实际的OG图片路径
        width: 1200,
        height: 630,
        alt: "泓动数据科技有限公司"
      }
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO生成式引擎优化专家 - 泓动数据科技有限公司官网",
    description: "泓动数据科技有限公司专注于GEO生成式引擎优化、AI搜索优化、短视频截流和抖音代运营服务，帮助企业提升在线可见性和流量转化。",
    images: ["/images/hero-tech-bg.jpg"], // 请替换为实际的Twitter卡片图片路径
  },
  alternates: {
    canonical: "https://hongdong.com", // 请替换为实际域名
  },
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