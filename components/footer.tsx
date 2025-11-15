"use client"

import { Mail, MapPin, Linkedin, Twitter, Github, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const services = ["生成式引擎优化", "Deepseek优化", "豆包优化", "搜索效果分析", "AI内容策略", "专业培训服务"]

  const aboutLinks = [
    { label: "公司简介", href: "#company" },
    { label: "团队介绍", href: "#company" },
    { label: "成功案例", href: "#cases" },
    { label: "新闻动态", href: "#" },
    { label: "加入我们", href: "#" },
    { label: "联系我们", href: "#contact" },
  ]

  const legalLinks = [
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
    { label: "法律声明", href: "#" },
  ]

  return (
    <footer className="bg-[#1a1d29] text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">泓</span>
              </div>
              <h3 className="text-xl font-bold text-white">泓动数据</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              专注于GEO生成式引擎优化，助力企业在AI时代抢占搜索及内容流量
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
              >
                <Github className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">服务项目</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">关于我们</h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">联系方式</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400 leading-relaxed">广东省广州市番禺区南村镇万惠一路 96 号</p>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <span className="block">微信: </span>
                  <span className="text-blue-400 hover:text-blue-300 transition-colors">Hongdongshuju</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:412735649@qq.com"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  412735649@qq.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2025 泓动数据科技有限公司 版权所有
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group z-50"
      >
        <svg
          className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  )
}
