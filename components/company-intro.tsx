"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function CompanyIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="company-intro" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-accent mb-6">公司介绍</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  泓动数据，企业数字化营销的GEO生成式优化引领者！公司以企业本地化搜索增长为核心，聚焦AI与空间智能技术前沿，自主研发生成式GEO优化服务体系。依托资深技术团队与垂直领域大模型，我们全面兼容并增强20余家主流生成式引擎与地图服务平台，为企业提供一站式生成式地理位置优化解决方案。
                </p>
                <p className="text-pretty">
                  从本地内容生成到空间算法适配，从区域流量捕捉到地域品牌建设，泓动数据赋能企业在生成式AI与本地搜索交汇的新时代赢得先机，让每一次基于位置的用户请求，都转化为品牌曝光与业务增长的契机。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/ai-datacenter.jpg" alt="AI Technology Center" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-transparent" />

              {/* Floating AI badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-32 h-32 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                >
                  <span className="text-5xl font-bold text-accent-foreground">AI</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
