"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, FileEdit, Zap, TrendingUp, RotateCcw } from "lucide-react"

const steps = [
  {
    title: "需求诊断",
    icon: Search,
    points: [
      "1、NLP驱动的竞品语义分析与关键词提取",
      "2、多模态数据采集挖掘企业需求",
      "3、全域营销数据ETL整合至数据仓库",
    ],
  },
  {
    title: "策略定制",
    icon: FileEdit,
    points: ["1、LLM算法特性解析与适配策略设计", "2、深度学习构建用户画像知识图谱", "3、强化学习优化营销ROI动态策略"],
  },
  {
    title: "优化执行",
    icon: Zap,
    points: [
      "1、Transformer架构生成多场景内容",
      "2、JSON-LD协议实现语义结构化标记",
      "3、多模态输入模型驱动跨平台智能分发",
    ],
  },
  {
    title: "效果追踪",
    icon: TrendingUp,
    points: ["1、可视化看板实时监控KPI指标", "2、聚类+PCA算法进行竞品Benchmark对比", "3、因果推断优化动态调整策略参数"],
  },
  {
    title: "定期复盘",
    icon: RotateCcw,
    points: [
      "1、时序分析结合因果推断进行效果归因",
      "2、跟踪Diffusion、多模态大模型等技术趋势",
      "3、联邦学习框架下协同优化服务模型",
    ],
  },
]

export function ServiceProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/service-process-bg.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/90 via-accent/85 to-primary/90" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent-foreground" />
            <span className="text-4xl font-display text-accent-foreground">"</span>
            <h2 className="text-4xl lg:text-5xl font-display text-accent-foreground">服务流程</h2>
            <span className="text-4xl font-display text-accent-foreground">"</span>
            <div className="h-px w-8 bg-accent-foreground" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-accent-foreground/95 backdrop-blur-sm rounded-3xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-display text-foreground">{step.title}</h3>
                  </div>
                  <ul className="space-y-3 text-left">
                    {step.points.map((point, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
