import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">泓动数据有限公司</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              专注于AI搜索优化服务，帮助企业在AI时代抢占营销先机
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">联系方式</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span>咨询热线：135 8030 6740</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>商务合作：10132127@qq.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>广州市</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">快速链接</h3>
            <div className="space-y-2">
              <a
                href="#ai-optimization"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                AI搜索优化
              </a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                联系我们
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 泓动数据有限公司. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
