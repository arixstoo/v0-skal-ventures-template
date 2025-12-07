"use client"

import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Enterprise?</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Join enterprises worldwide using ViperQB for blockchain-verified security infrastructure. Start your free
          trial today or schedule a demo with our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#83ca4d] hover:bg-[#46852e] text-[#0f1a10] font-semibold group shadow-xl"
            asChild
          >
            <Link href="/demo">
              Start Free Trial <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#244217] hover:border-[#83ca4d] hover:text-[#83ca4d] bg-transparent"
            asChild
          >
            <Link href="#contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
