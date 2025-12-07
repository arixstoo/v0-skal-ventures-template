"use client"

import { Shield, Lock, Eye, Zap } from "lucide-react"
import { Card } from "./ui/card"

export function SecuritySection() {
  return (
    <section
      id="security"
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-background via-primary-darker/5 to-background"
    >
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Enterprise-Grade Security</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for compliance, audited, and verified on blockchain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-8 border-primary-darker/30 text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">AES-256 Encryption</h3>
            <p className="text-sm text-muted-foreground">
              Military-grade encryption for all data in transit and at rest
            </p>
          </Card>

          <Card className="p-8 border-primary-darker/30 text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Eye className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Full Audit Trail</h3>
            <p className="text-sm text-muted-foreground">Every action logged and verifiable on blockchain forever</p>
          </Card>

          <Card className="p-8 border-primary-darker/30 text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Role-Based Access</h3>
            <p className="text-sm text-muted-foreground">Granular permissions with policy enforcement at every layer</p>
          </Card>

          <Card className="p-8 border-primary-darker/30 text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Real-Time Monitoring</h3>
            <p className="text-sm text-muted-foreground">Alerting, forensics, and incident response in milliseconds</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
