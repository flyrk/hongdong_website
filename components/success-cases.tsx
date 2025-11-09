"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const cases = [
  {
    tag: "Deepseek优化",
    tagColor: "bg-blue-500",
    title: "科技企业搜索流量提升",
    description: "为某科技公司提供Deepseek优化服务，3个月内搜索曝光提升189%，转化率提升42%。",
    industry: "科技行业",
    image: "/images/case-tech.jpg",
  },
  {
    tag: "豆包优化",
    tagColor: "bg-orange-500",
    title: "心理咨询内容推荐优化",
    description: "为某心理咨询机构优化豆包AI推荐内容，用户点击率提升67%，平均咨询时间增加53%。",
    industry: "电商行业",
    image: "/images/case-consulting.jpg",
  },
  {
    tag: "多平台优化",
    tagColor: "bg-purple-500",
    title: "教育机构AI平台布局",
    description: "为某教育机构提供多平台平台SEOAI优化，覆盖Deepseek、豆包等平台，咨询量提长210%。",
    industry: "教育行业",
    image: "/images/case-education.jpg",
  },
]

function CaseCard({ caseItem, index }: { caseItem: (typeof cases)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${caseItem.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Image Area */}
        <div className="h-48 flex items-start justify-start p-6">
          <span className={`${caseItem.tagColor} text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg`}>
            {caseItem.tag}
          </span>
        </div>

        {/* Text Content */}
        <div className="p-6 pt-2 flex flex-col flex-grow">
          <h3 className="text-xl font-display font-bold text-foreground mb-3 text-pretty">{caseItem.title}</h3>
          <p className="text-foreground/80 leading-relaxed mb-4 flex-grow text-pretty">{caseItem.description}</p>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <span className="text-sm text-muted-foreground">{caseItem.industry}</span>
            <button className="text-accent hover:text-accent/80 transition-colors duration-300 flex items-center gap-2 text-sm font-medium group/btn">
              查看详情
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function SuccessCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="success-cases" className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">成功案例</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            我们帮助各行业客户在生成式引擎平台上取得显著成效
          </p>
          <div className="mt-6 mx-auto w-16 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <CaseCard key={caseItem.title} caseItem={caseItem} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-base font-medium border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 bg-transparent"
          >
            查看更多案例
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
