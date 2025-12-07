"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, QrCode, Lock, Unlock, Trash2, Eye } from "lucide-react"

const devices = [
  {
    id: "dev_001",
    name: "Front Door",
    type: "RFID Reader",
    status: "online",
    lastAccess: "2025-01-12 15:32:18",
    totalAccesses: 247,
  },
  {
    id: "dev_002",
    name: "Server Room",
    type: "Biometric",
    status: "online",
    lastAccess: "2025-01-12 14:15:03",
    totalAccesses: 89,
  },
  {
    id: "dev_003",
    name: "Parking Gate",
    type: "RFID Reader",
    status: "offline",
    lastAccess: "2025-01-12 12:45:22",
    totalAccesses: 156,
  },
]

const accessEvents = [
  {
    deviceId: "dev_001",
    user: "john@company.com",
    action: "access_granted",
    txHash: "0x8f2b3...a1e2",
    time: "2025-01-12 15:32:18",
  },
  {
    deviceId: "dev_002",
    user: "alice@company.com",
    action: "access_denied",
    txHash: "0x4c9d5...f3b8",
    time: "2025-01-12 14:15:03",
  },
  {
    deviceId: "dev_001",
    user: "bob@company.com",
    action: "access_granted",
    txHash: "0x2a1e7...c9f4",
    time: "2025-01-12 13:42:15",
  },
  { deviceId: "dev_003", user: "carol@company.com", action: "offline", txHash: null, time: "2025-01-12 13:10:00" },
]

export default function IoTPage() {
  const [selectedDevice, setSelectedDevice] = useState<(typeof devices)[0] | null>(null)

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">IoT Access Control</h1>
          <p className="text-muted-foreground mt-1">Real-time access logs with blockchain verification</p>
        </div>
        <Button className="gap-2 bg-accent hover:bg-accent-dark text-primary-darker">
          <Plus className="w-4 h-4" />
          Add Device
        </Button>
      </div>

      {/* Devices List */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Registered Devices</CardTitle>
          <CardDescription>{devices.length} IoT devices connected</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader className="bg-background/50">
                <TableRow>
                  <TableHead>Device ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Access</TableHead>
                  <TableHead>Total Accesses</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.map((device) => (
                  <TableRow key={device.id} className="hover:bg-background/50 transition-colors">
                    <TableCell className="font-mono text-xs text-accent">{device.id}</TableCell>
                    <TableCell className="font-semibold">{device.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{device.type}</TableCell>
                    <TableCell>
                      <Badge variant={device.status === "online" ? "default" : "secondary"}>{device.status}</Badge>
                    </TableCell>
                    <TableCell className="text-sm">{device.lastAccess}</TableCell>
                    <TableCell className="font-semibold">{device.totalAccesses}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => setSelectedDevice(device)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" title="QR Code">
                        <QrCode className="w-4 h-4" />
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

      {/* Live Access Feed */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Live Access Feed</CardTitle>
          <CardDescription>Real-time access events with blockchain verification</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {accessEvents.map((event, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-background/80 transition-colors"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div
                    className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${event.action === "access_granted" ? "bg-success" : event.action === "access_denied" ? "bg-error" : "bg-warning"}`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs text-accent">{event.deviceId}</span>
                      <span className="font-medium text-sm">{event.user}</span>
                      <Badge variant="secondary" className="text-xs">
                        {event.action.replace(/_/g, " ")}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
                  </div>
                </div>
                {event.txHash && (
                  <span className="font-mono text-xs text-accent ml-4 hover:underline cursor-pointer">
                    {event.txHash}
                  </span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Device Detail */}
      {selectedDevice && (
        <Card className="border-border border-accent/30 bg-accent/5">
          <CardHeader>
            <CardTitle>Device: {selectedDevice.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Device ID</p>
                <p className="font-mono text-sm mt-1 text-accent">{selectedDevice.id}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Type</p>
                <p className="font-semibold text-sm mt-1">{selectedDevice.type}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <Badge className="mt-1" variant={selectedDevice.status === "online" ? "default" : "secondary"}>
                  {selectedDevice.status}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Accesses</p>
                <p className="font-semibold text-lg mt-1">{selectedDevice.totalAccesses}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="bg-transparent gap-2">
                <Lock className="w-4 h-4" />
                Lock Device
              </Button>
              <Button variant="outline" className="bg-transparent gap-2">
                <Unlock className="w-4 h-4" />
                Unlock Device
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
