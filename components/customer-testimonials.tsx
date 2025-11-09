"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "张总监",
    title: "某科技公司技术部",
    rating: 5,
    content:
      "感动!Deepseek优化服务帮助我们的技术内容优化了更多曝光，3个月内搜索流量翻了一番，营产询盘量显著提升。",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "李经理",
    title: "某心理咨询机构市场部",
    rating: 5,
    content:
      "我们在豆包平台的内容一直没有好的表现，直到与动数据合作后，内容推荐量提升了160%，用户互动率翻倍提振，非常感谢他们的专业服务。",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "王校长",
    title: "某教育机构",
    rating: 4.5,
    content:
      "泓动数据不仅提供了专业的优化服务，还为我们团队进行了培训，让我们自己也能进行基础优化。现在我们自己也能进行基础优化代了。",
    avatar: "/images/avatar-3.jpg",
  },
]

export function CustomerTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="customer-testimonials" className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground">客户评价</h2>
          <p className="text-lg text-muted-foreground">来自各行业客户的真实反馈</p>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-2xl hover:border-accent/50 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(testimonial.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : testimonial.rating % 1 !== 0 && i === Math.floor(testimonial.rating)
                            ? "fill-yellow-400/50 text-yellow-400"
                            : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 text-base leading-relaxed mb-8 min-h-[120px]">{testimonial.content}</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>

                {/* Decorative quote */}
                <div className="absolute top-6 right-6 text-6xl text-accent/10 font-serif leading-none">"</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
