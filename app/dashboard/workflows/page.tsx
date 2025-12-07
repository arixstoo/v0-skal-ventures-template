"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Play, Pause, Trash2, Eye, ChevronRight } from "lucide-react"

const workflows = [
  {
    id: 1,
    name: "Auto-Approve KYC Score > 0.95",
    trigger: "kyc_verification_complete",
    actions: ["approve_kyc", "send_email"],
    status: "active",
    runs: 342,
    lastRun: "2 min ago",
  },
  {
    id: 2,
    name: "Alert on Rate Limit Spike",
    trigger: "rate_limit_exceeded",
    actions: ["create_alert", "webhook_notify"],
    status: "active",
    runs: 28,
    lastRun: "15 min ago",
  },
  {
    id: 3,
    name: "Archive Old Files",
    trigger: "schedule_daily_midnight",
    actions: ["archive_files", "log_audit"],
    status: "active",
    runs: 45,
    lastRun: "Yesterday 00:01",
  },
  {
    id: 4,
    name: "Manual Review - Low Confidence KYC",
    trigger: "kyc_confidence_low",
    actions: ["create_review_task", "notify_admin"],
    status: "paused",
    runs: 12,
    lastRun: "3 days ago",
  },
]

export default function WorkflowsPage() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<(typeof workflows)[0] | null>(null)

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Workflow Automation</h1>
          <p className="text-muted-foreground mt-1">Create triggers and actions without code</p>
        </div>
        <Button className="gap-2 bg-accent hover:bg-accent-dark text-primary-darker">
          <Plus className="w-4 h-4" />
          New Workflow
        </Button>
      </div>

      {/* Workflows Table */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Active Workflows</CardTitle>
          <CardDescription>Automation rules with blockchain-verified execution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader className="bg-background/50">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Trigger</TableHead>
                  <TableHead>Actions</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Runs</TableHead>
                  <TableHead>Last Run</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workflows.map((workflow) => (
                  <TableRow key={workflow.id} className="hover:bg-background/50 transition-colors">
                    <TableCell className="font-medium">{workflow.name}</TableCell>
                    <TableCell className="font-mono text-xs bg-background rounded px-2 py-1 w-fit">
                      {workflow.trigger}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      <div className="flex gap-1 flex-wrap">
                        {workflow.actions.map((action, i) => (
                          <Badge key={i} variant="secondary" className="text-xs font-mono">
                            {action}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={workflow.status === "active" ? "default" : "secondary"}>{workflow.status}</Badge>
                    </TableCell>
                    <TableCell className="text-sm font-semibold">{workflow.runs}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{workflow.lastRun}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => setSelectedWorkflow(workflow)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" title={workflow.status === "active" ? "Pause" : "Resume"}>
                        {workflow.status === "active" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-error hover:text-error">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Detail */}
      {selectedWorkflow && (
        <Card className="border-border border-accent/30 bg-accent/5">
          <CardHeader>
            <CardTitle>Workflow: {selectedWorkflow.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-2">Trigger</p>
                <div className="bg-background rounded-lg p-4 font-mono text-sm text-accent">
                  {selectedWorkflow.trigger}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2">Actions</p>
                <div className="space-y-2">
                  {selectedWorkflow.actions.map((action, i) => (
                    <div key={i} className="bg-background rounded-lg p-3 font-mono text-sm flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-accent" />
                      {action}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  <Badge className="mt-1" variant={selectedWorkflow.status === "active" ? "default" : "secondary"}>
                    {selectedWorkflow.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Total Runs</p>
                  <p className="font-semibold text-lg mt-1">{selectedWorkflow.runs}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Last Run</p>
                  <p className="text-sm mt-1">{selectedWorkflow.lastRun}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
