"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Header height offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.location.href = "/"}
          >
            <div className="font-bold text-xl tracking-tight">
              <img 
                src="/logo.jpg" 
                alt="泓动数据有限公司 Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="font-bold text-xl tracking-tight">
              <span className="text-foreground">泓动数据</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("product-intro")}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              产品介绍
            </button>
            <button
              onClick={() => scrollToSection("success-cases")}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              成功案例
            </button>
            <button
              onClick={() => scrollToSection("customer-testimonials")}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              客户评价
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              优势介绍
            </button>
            <button
              onClick={() => scrollToSection("service-process")}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              服务流程
            </button>
            <button
              onClick={() => scrollToSection("company-intro")}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              公司介绍
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              联系我们
            </button>
          </nav>

          <Button
            onClick={() => (window.location.href = "tel:400-926-9885")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6"
          >
            <Phone className="w-4 h-4 mr-2" />
            拨打电话
          </Button>
        </div>
      </div>
    </header>
  )
}