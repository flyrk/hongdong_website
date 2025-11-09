"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const advantages = [
  {
    title: "专业技术团队",
    description: "由10年 + AI算法工程师与资深营销专家组成，深度理解AI推荐机制，定制专属优化策略",
  },
  {
    title: "快速达成体化",
    description: "72小时完成数据部署，1周内显著提升AI回答曝光率，抢占市场先机",
  },
  {
    title: "全平台覆盖",
    description: "支持20+主流AI内容生成引擎，覆盖政务、电商、家居等全行业场景",
  },
  {
    title: "透明化效果追踪",
    description: "定期汇报AI端展示数据，跟踪用户反馈，及时调整策略，保障服务价值持续释放",
  },
]

export function AdvantagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="advantages"
      className="py-24 px-6 lg:px-8 bg-gradient-to-br from-muted/70 via-background to-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/10" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/ai-chip-tech.jpg" alt="AI Technology" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px w-8 bg-accent" />
                <span className="text-2xl font-display text-accent">"</span>
              </div>
              <h3 className="text-2xl font-display text-foreground">优势介绍</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-display text-accent">"</span>
                <div className="h-px w-8 bg-accent" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Advantages */}
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-accent/50">
                  <h3 className="text-xl font-display text-foreground mb-3 group-hover:text-accent transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
