"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, MessageCircle, MapPin, Mail, Clock, Globe } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactMethods = [
    {
      icon: Phone,
      title: "全国服务热线",
      content: "135 8030 6740",
      description: "7x24小时服务",
    },
    {
      icon: MessageCircle,
      title: "微信号",
      content: "Hongdongshuju",
      description: "快速响应咨询",
    },
    {
      icon: Mail,
      title: "邮箱",
      content: "412735649@qq.com",
      description: "商务合作咨询",
    },
  ]

  const companyInfo = [
    {
      icon: MapPin,
      title: "总部地址",
      content: "广东省广州市番禺区南村镇万惠一路 96 号",
    },
    {
      icon: Clock,
      title: "工作时间",
      content: "周一至周日 9:00-21:00",
    },
    {
      icon: Globe,
      title: "服务范围",
      content: "全国企业AI营销服务",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Tech circuit background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/contact-tech-bg.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-accent/90 to-accent/95" />
        {/* Tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-accent-foreground mb-4">联系我们</h2>
          <p className="text-xl text-accent-foreground/80">随时为您提供专业的AI营销咨询服务</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="relative bg-accent-foreground/10 backdrop-blur-md border border-accent-foreground/20 rounded-2xl p-8 text-center hover:bg-accent-foreground/20 hover:border-accent-foreground/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                  <method.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-accent-foreground/70 mb-3">{method.title}</h3>
                <p className="text-2xl lg:text-3xl font-bold text-accent-foreground mb-2">{method.content}</p>
                <p className="text-sm text-accent-foreground/60">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {companyInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="flex items-start space-x-4 bg-accent-foreground/10 backdrop-blur-md border border-accent-foreground/20 rounded-xl p-6 hover:bg-accent-foreground/20 hover:border-accent-foreground/40 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-accent-foreground/70 mb-2">{info.title}</h4>
                <p className="text-lg font-medium text-accent-foreground leading-relaxed">{info.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <p className="text-accent-foreground/60 text-lg">泓动数据 · 企业数字化营销革新者</p>
        </motion.div>
      </div>
    </section>
  )
}
