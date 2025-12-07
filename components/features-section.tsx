"use client"

import { Shield, Lock, Users, Zap, Eye, BarChart3, RefreshCw, Radio, Boxes, LogOut } from "lucide-react"
import { Card } from "./ui/card"

const features = [
  {
    icon: Lock,
    title: "Secure File Transfer",
    description: "AES-256-GCM encrypted file transfers with on-chain proof of delivery and blockchain verification.",
  },
  {
    icon: Users,
    title: "KYC Verification",
    description: "Automated liveness detection, document authentication, and face matching with ML-powered accuracy.",
  },
  {
    icon: Eye,
    title: "Audit & Forensics",
    description: "Complete audit trail for every action, searchable logs, and export to compliance frameworks.",
  },
  {
    icon: Radio,
    title: "IoT Access Control",
    description: "Real-time access logs for physical/digital resources with RFID and device provisioning.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Zapier-like automation engine with triggers, conditions, and blockchain-verified actions.",
  },
  {
    icon: Shield,
    title: "Policy Management",
    description: "Role-based access control, rule editor, and granular permission enforcement.",
  },
  {
    icon: Boxes,
    title: "Plugin Ecosystem",
    description: "Enable/disable modules per tenant, custom configurations, and per-plugin billing.",
  },
  {
    icon: BarChart3,
    title: "Metrics & Monitoring",
    description: "Real-time dashboards, request rate charts, latency tracking, and alerting.",
  },
  {
    icon: RefreshCw,
    title: "Secure Vault",
    description: "Encrypted secrets management with key rotation and compliance-ready access logs.",
  },
  {
    icon: LogOut,
    title: "Single Sign-On",
    description: "Enterprise SSO integration with audit trail for every authentication event.",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-background via-[#244217]/10 to-background"
    >
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">10 Powerful Modules</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for enterprise security, audited and verifiable on blockchain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Card
                key={i}
                className="p-6 border-[#244217]/30 hover:border-[#83ca4d]/50 hover:bg-[#244217]/5 transition-all cursor-pointer group"
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-[#83ca4d]/10 group-hover:bg-[#83ca4d]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#83ca4d]" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
