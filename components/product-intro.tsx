"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"

export function ProductIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="product-intro" className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: "url(/images/ai-brain-network.jpg)" }}
        />
        <div className="absolute inset-0 bg-secondary/30" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">产品介绍</h2>
          <p className="text-xl text-accent font-semibold">AI 搜索优化产品介绍</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-8 sm:p-12 bg-card/80 backdrop-blur-sm border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">什么是 AIEO 服务？</h3>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  <p>
                    AIEO（AI Engine
                    Optimization）即AI引擎优化服务，泓动数据聚焦生成式AI搜索生态，深度研发品牌营销内容生成技术体系化布局方案，以算法驱动内容策略，通过AI内容精准触达与智能发友，助力企业抢占AI营销流量高地。
                  </p>
                  <p>
                    区别于传统SEO优化，泓动数据AIEO服务可以深度剖析AI引擎的底层逻辑，通过语义适配、权威内容构建与全域数据布局，让企业品牌、产品信息无缝融入
                    AI回答，成为用户问题的"标准答案"。
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
