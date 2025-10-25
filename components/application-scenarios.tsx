"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ShoppingCart, GraduationCap, Plane, Building2, Sparkles, Home, Gamepad2, Heart } from "lucide-react"

const scenarios = [
  {
    title: "快消零售",
    description: '在"如何选择性价比较高"等问题中，让品牌成为AI推荐的首选',
    icon: ShoppingCart,
    image: "/images/retail-bg.jpg",
  },
  {
    title: "教育培训",
    description: '在"考研机构怎么选"等咨询中，让机构信息优先出现在AI答案，吸引潜在学员',
    icon: GraduationCap,
    image: "/images/education-bg.jpg",
  },
  {
    title: "旅游出行",
    description: '在"适合亲子游的小众目的地推荐"这类提问下，将旅游线路、服务优势融入AI答案，为企业引流获客',
    icon: Plane,
    image: "/images/travel-bg.jpg",
  },
  {
    title: "金融服务",
    description: '针对"新手如何选择理财产品"等问题，将金融服务及方案融入AI推荐内容，建立用户信赖',
    icon: Building2,
    image: "/images/finance-bg.jpg",
  },
  {
    title: "美妆护肤",
    description: '当用户搜索"敏感肌适合的护肤品"，使品牌的温和配方、用户好评等信息优先展示在AI回答，助力美妆企业开拓市场',
    icon: Sparkles,
    image: "/images/beauty-bg.jpg",
  },
  {
    title: "房产家居",
    description: '对于"小户型装修性价比较高"，让家居品牌的设计方案、产品描配建议在AI答客中占据优势，吸引装修需求用户',
    icon: Home,
    image: "/images/home-bg.jpg",
  },
  {
    title: "游戏娱乐",
    description: '在"热门角色扮演游戏推荐"提问中，将游戏厂商的新游特色、玩家攻略融入AI答案，提升游戏曝光度与下载量',
    icon: Gamepad2,
    image: "/images/gaming-bg.jpg",
  },
  {
    title: "医疗健康",
    description: '将专业医疗知识与品牌服务结合，成为 AI 推荐的权威健康顾问',
    icon: Heart,
    image: "/images/healthcare-bg.jpg",
  },
]
function ScenarioCard({ scenario, index }: { scenario: (typeof scenarios)[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = scenario.icon

  return (
    <motion.div
      ref = { ref }
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 }
      : {
        opacity: 0, y
        : 50
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500"
    >
{
  /* Background Image */
}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${scenario.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      </div>
{
  /* Content */
}
      <div className="relative p-8 h-full flex flex-col">
        <div className="mb-6">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
            <Icon className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-3">
          {
            scenario.title
          }
          </h3>
        </div>
        <p className="text-foreground/90 leading-relaxed text-pretty font-medium">
{
  scenario.description
}
</p>
      </div>
    </motion.div>
  )
}

export function ApplicationScenarios() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-gradient-to-br from-muted/60 via-muted/40 to-accent/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-4xl font-display text-accent">"</span>
            <h2 className="text-4xl lg:text-5xl font-display text-foreground">AIEO 应用场景</h2>
            <span className="text-4xl font-display text-accent">"</span>
            <div className="h-px w-8 bg-accent" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((scenario, index) => (
            <ScenarioCard key={scenario.title} scenario={scenario} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
