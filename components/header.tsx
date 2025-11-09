"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useState } from "react"
import { CallDialog } from "@/components/call-dialog"


export function Header() {
  const [callDialogOpen, setCallDialogOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl tracking-tight">
              <img 
                src="/placeholder-logo.svg" 
                alt="泓动数据有限公司 Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="text-sm text-muted-foreground hidden sm:block">广州泓动数据有限公司</div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#ai-optimization"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              AI搜索优化
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              联系我们
            </a>
          </nav>

          <Button
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6"
            onClick={() => setCallDialogOpen(true)}
          >
            <Phone className="w-4 h-4 mr-2" />
            拨打电话
          </Button>
        </div>
      </div>
      <CallDialog
        open={callDialogOpen}
        onOpenChange={setCallDialogOpen}
        phoneNumber="400-926-9885"
        qrImage="/images/contact-wechat-qr.png"
      />
    </header>
  )
}
