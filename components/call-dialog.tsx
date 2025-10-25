"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { PhoneCall } from "lucide-react"

type CallDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  phoneNumber: string
  qrImage: string
  wechatNumber?: string
  countdownSeconds?: number
  agentImage?: string
}

export function CallDialog({
  open,
  onOpenChange,
  phoneNumber,
  qrImage,
  wechatNumber = "135 8030 6740",
  countdownSeconds = 600,
  agentImage = "/images/assistant-call.png",
}: CallDialogProps) {
  const [secondsRemaining, setSecondsRemaining] = useState(countdownSeconds)

  useEffect(() => {
    if (!open) return
    setSecondsRemaining(countdownSeconds)
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [open, countdownSeconds])

  const minutes = String(Math.floor(secondsRemaining / 60)).padStart(2, "0")
  const seconds = String(secondsRemaining % 60).padStart(2, "0")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[min(90vw,1100px)] max-w-5xl sm:max-w-none border-none p-0 shadow-2xl shadow-black/20 overflow-hidden rounded-3xl">
        <div className="grid gap-0 md:grid-cols-[1.1fr_1.1fr]">
          <div className="p-6 sm:p-8 space-y-6 bg-background flex flex-col">
            <div>
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground">扫码拨打电话</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground mt-2">
                请使用微信扫码拨打电话，稍后会有专属顾问与您联系
              </DialogDescription>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch gap-4 rounded-2xl border border-border bg-muted/30 p-4">
              <div className="flex-1 flex items-center justify-center sm:justify-start gap-3 rounded-2xl bg-accent px-5 py-4 text-accent-foreground text-2xl font-semibold shadow-inner shadow-black/10">
                <PhoneCall className="h-6 w-6" />
                {phoneNumber}
              </div>
              <div className="sm:w-48 flex flex-col gap-1 rounded-2xl border border-dashed border-accent/40 px-4 py-3 text-center">
                <div className="text-sm font-medium text-muted-foreground tracking-wider">客服微信</div>
                <span className="text-lg font-semibold text-foreground">{wechatNumber}</span>
                <div className="flex justify-center pt-3">
                  <Image
                    src={qrImage}
                    alt="客服微信二维码"
                    width={140}
                    height={140}
                    className="h-36 w-36 object-contain rounded-lg border border-border bg-white p-1"
                  />
                </div>
                <p className="text-xs text-muted-foreground">扫码拨打电话 / 添加客服微信</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">距离号码失效还剩</span>
              <span className="text-lg font-semibold text-accent">{minutes} 分 {seconds} 秒</span>
            </div>
          </div>
          <div className="relative bg-gradient-to-br from-accent/95 to-accent/70">
            <Image
              src={agentImage}
              alt="客服团队"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 text-background space-y-2">
              <p className="text-sm opacity-80">24/7 专属客服为您服务</p>
              <p className="text-xl font-semibold">也可直接拨打 {phoneNumber}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
