"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Target, Shield, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "精准曝光",
    description: "让品牌在用户提问的相关AI回答中占据核心位置，让品牌和服务被精准曝光",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Shield,
    title: "信任塑造",
    description: "借助AI的权威背书，快速建立用户信任感的信任感，提升用户品牌好感度",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: TrendingUp,
    title: "抢占市场",
    description: "快速让品牌在AI搜索结果中夺得曝光，大幅缩短营销周期，使企业能迅速在竞争中抢占先手优势",
    gradient: "from-orange-500/10 to-red-500/10",
  },
]

export function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-3"
          style={{ backgroundImage: "url(/images/digital-innovation.jpg)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">能帮企业做到什么？</h2>
          <p className="text-lg text-muted-foreground uppercase tracking-wider">WHAT CAN IT DO FOR ENTERPRISES?</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="group relative overflow-hidden bg-card hover:shadow-2xl transition-all duration-500 border-border/50 h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative p-8 space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
