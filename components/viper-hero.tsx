"use client"

import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Zap, Lock } from "lucide-react"

export function ViperHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container max-w-6xl mx-auto relative">
        <div className="text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm animate-fade-in">
            <span className="text-sm font-medium text-accent flex items-center gap-2">
              <Zap className="w-3 h-3" />
              Enterprise Blockchain Middleware
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            <span className="block animate-fade-in-up stagger-1">Enterprise Trust</span>
            <span className="block animate-fade-in-up stagger-2">Infrastructure </span>
            <span className="block bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent animate-fade-in-up stagger-3">
              Built on Blockchain
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-4">
            ViperQB unifies 10 critical security modules—file transfer, KYC verification, access control, audit
            logging—into one modular platform. <span className="text-accent font-semibold">80% cheaper</span>,
            auditable, and production-ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up stagger-5">
            <Button
              size="lg"
              className="bg-[#83ca4d] hover:bg-[#46852e] text-[#0f1a10] font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              asChild
            >
              <Link href="/demo" className="flex items-center gap-2">
                Start Free Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#244217] hover:border-[#83ca4d] hover:text-[#83ca4d] transition-all hover:scale-105 bg-transparent"
              asChild
            >
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-3xl mx-auto animate-fade-in-up stagger-6">
            <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/50 transition-all hover:scale-105 backdrop-blur-sm">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <p className="font-bold text-3xl text-accent mb-2">10</p>
              <p className="text-sm text-muted-foreground">Security Modules</p>
            </div>
            <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/50 transition-all hover:scale-105 backdrop-blur-sm">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <p className="font-bold text-3xl text-accent mb-2">80%</p>
              <p className="text-sm text-muted-foreground">Cost Savings</p>
            </div>
            <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/50 transition-all hover:scale-105 backdrop-blur-sm">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <Lock className="w-6 h-6" />
              </div>
              <p className="font-bold text-3xl text-accent mb-2">100%</p>
              <p className="text-sm text-muted-foreground">On-Chain Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
