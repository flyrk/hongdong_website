"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, BarChart3, FileText, Settings, Users, RotateCcw, Check, ArrowRight } from "lucide-react"

const services = [
  {
    title: "生成式引擎优化",
    description: "针对Deepseek、豆包等生成式AI平台的搜索算法，优化内容结构与呈现方式，提升自然搜索排名。",
    icon: Search,
    features: ["关键词策略规划", "内容生成优化", "语义理解增强"],
  },
  {
    title: "搜索效果分析",
    description: "通过专业工具和方法，全面分析您的内容在各平台的搜索表现，提供数据支持优化决策。",
    icon: BarChart3,
    features: ["排名监控与分析", "竞争对手分析", "转化率追踪"],
  },
  {
    title: "AI内容策略",
    description: "结合生成式AI特点，制定内容创作策略，使您的内容既符合AI算法理解机制。",
    icon: FileText,
    features: ["内容结构优化", "标示词工程", "多平台适配策略"],
  },
  {
    title: "技术实施支持",
    description: "提供完整的技术实施方案，帮助您的系统与生成式引擎平台无缝对接，实现最佳优化效果。",
    icon: Settings,
    features: ["API集成服务", "数据对接方案", "技术难题解决"],
  },
  {
    title: "专业培训服务",
    description: "提供定制化培训课程，帮助您的团队掌握生成式引擎优化技巧，提升自主运营能力。",
    icon: Users,
    features: ["定制培训课程", "实战案例教学", "一对一指导"],
  },
  {
    title: "持续优化服务",
    description: "生成式引擎技术不断更新，我们提供持续优化服务，确保您始终保持竞争优势。",
    icon: RotateCcw,
    features: ["定期效果评估", "算法更新应对", "长期策略调整"],
  },
]

export function ServiceProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="service-process"
      className="py-24 px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display mb-4 text-balance">我们的服务</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            专业的GEO生成式引擎优化解决方案，助力企业提升搜索效果
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display mb-4 text-foreground">{service.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group/link"
                  >
                    咨询详情
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
