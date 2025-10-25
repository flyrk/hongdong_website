"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Headphones, MessageCircle } from "lucide-react"

export type ConsultationMessage = {
  id: number | string
  sender: "agent" | "user"
  content: string
}

type ConsultationWidgetProps = {
  initialMessages?: ConsultationMessage[]
  triggerLabel?: string
  supportText?: string
  heading?: string
  subheading?: string
}

const defaultMessages: ConsultationMessage[] = [
  { id: 1, sender: "agent", content: "您好，这里是 AIEO 专属客服，很高兴为您服务～" },
  { id: 2, sender: "agent", content: "方便留下您的需求或联系方式吗？我们将安排专业顾问与您对接。" },
  { id: 3, sender: "agent", content: "若您比较着急，也可以直接拨打 400-926-9885，24 小时畅通。" },
]

export function ConsultationWidget({
  initialMessages = defaultMessages,
  triggerLabel = "免费咨询",
  supportText = "我们可以接入企业 CRM 或 AI 智能客服系统",
  heading = "AIEO 专属客服",
  subheading = "在线 1v1 咨询，平均 2 分钟响应",
}: ConsultationWidgetProps) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [pendingMessage, setPendingMessage] = useState("")
  const messageListRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (open && messageListRef.current) {
      messageListRef.current.scrollTo({
        top: messageListRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [messages, open])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!pendingMessage.trim()) return
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", content: pendingMessage.trim() },
    ])
    setPendingMessage("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2">
        <DialogTrigger asChild>
          <button
            type="button"
            className="group focus-visible:outline-none"
            aria-label="打开在线咨询"
          >
            <div className="relative flex flex-col items-center gap-3">
              <span className="bg-accent text-accent-foreground rounded-full p-4 shadow-2xl shadow-accent/40 transition-transform duration-300 group-hover:scale-105">
                <MessageCircle className="h-7 w-7" />
              </span>
              <span className="rounded-full bg-background/90 px-5 py-1 text-sm font-semibold text-foreground shadow-lg shadow-background/40 ring-1 ring-border">
                {triggerLabel}
              </span>
            </div>
          </button>
        </DialogTrigger>
      </div>
      <DialogContent className="max-w-md border-none p-0 shadow-2xl overflow-hidden">
        <DialogHeader className="bg-accent px-6 py-5 text-accent-foreground">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Headphones className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <DialogTitle className="text-lg font-semibold tracking-wide text-accent-foreground">
                {heading}
              </DialogTitle>
              <DialogDescription className="text-accent-foreground/80 text-sm">
                {subheading}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="bg-background px-6 py-5 space-y-5">
          <div
            ref={messageListRef}
            className="max-h-96 overflow-y-auto space-y-4 pr-2"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    message.sender === "user"
                      ? "bg-accent text-accent-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Textarea
              placeholder="请输入您的问题或需求..."
              value={pendingMessage}
              onChange={(event) => setPendingMessage(event.target.value)}
              className="min-h-[100px] rounded-2xl border-border bg-muted/40 p-4 text-sm"
            />
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground">
                {supportText}
              </span>
              <Button
                type="submit"
                size="lg"
                className="rounded-full px-6"
              >
                发送
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
