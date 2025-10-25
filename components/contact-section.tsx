"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, DollarSign, Zap } from "lucide-react"


export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", phone: "" })

  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Tech circuit background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/contact-tech-bg.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-accent/90 to-accent/95" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-accent-foreground mb-8">联系我们</h2>
              <div className="space-y-4 text-accent-foreground">
                <div>
                  <p className="text-xl mb-2">全国服务热线：</p>
                  <p className="text-4xl font-bold">400-926-9885</p>
                </div>
                <div>
                  <p className="text-xl mb-2">微信号：</p>
                  <p className="text-3xl font-bold">180 4654 5420</p>
                </div>
                <div className="pt-4">
                  <p className="text-lg">总部：北京市丰台区搜宝商务中心3号楼27层</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-accent-foreground rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-center mb-8">免费咨询</h3>
              <form className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="请留下您的姓名（必填）"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 text-lg rounded-xl"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="请留下您的电话（必填）"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-14 text-lg rounded-xl"
                  />
                </div>
                <Button size="lg" className="w-full h-14 text-lg rounded-xl">
                  马上提交
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
