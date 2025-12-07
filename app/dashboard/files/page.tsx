"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Upload, Download, Trash2, Eye, Lock } from "lucide-react"

const transfers = [
  {
    id: 1,
    filename: "contract-agreement.pdf",
    sender: "john@company.com",
    receiver: "client@external.com",
    size: "2.4 MB",
    hash: "0x8f2b3...a1e2",
    status: "completed",
    timestamp: "2025-01-12 14:32",
  },
  {
    id: 2,
    filename: "financial-report-q4.xlsx",
    sender: "finance@company.com",
    receiver: "audit@external.com",
    size: "5.1 MB",
    hash: "0x4c9d5...f3b8",
    status: "completed",
    timestamp: "2025-01-12 13:15",
  },
  {
    id: 3,
    filename: "technical-specs.docx",
    sender: "eng@company.com",
    receiver: "partner@external.com",
    size: "1.2 MB",
    hash: "0x2a1e7...c9f4",
    status: "pending",
    timestamp: "2025-01-12 12:45",
  },
]

export default function FilesPage() {
  const [selectedFile, setSelectedFile] = useState<(typeof transfers)[0] | null>(null)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">File Transfer</h1>
        <p className="text-muted-foreground mt-1">Secure, encrypted file sharing with blockchain verification</p>
      </div>

      {/* Upload Section */}
      <Card className="border-border border-dashed">
        <CardContent className="p-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">Upload a file to transfer</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Drag and drop or click to browse. Files are encrypted with AES-256-GCM.
              </p>
            </div>
            <Button className="bg-accent hover:bg-accent-dark text-primary-darker">Select File</Button>
          </div>
        </CardContent>
      </Card>

      {/* Transfer History */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Transfer History</CardTitle>
          <CardDescription>All encrypted file transfers with blockchain proof</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader className="bg-background/50">
                <TableRow>
                  <TableHead>Filename</TableHead>
                  <TableHead>Sender</TableHead>
                  <TableHead>Receiver</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>TxHash</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transfers.map((transfer) => (
                  <TableRow key={transfer.id} className="hover:bg-background/50 transition-colors">
                    <TableCell className="font-medium">{transfer.filename}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{transfer.sender}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{transfer.receiver}</TableCell>
                    <TableCell className="text-sm">{transfer.size}</TableCell>
                    <TableCell>
                      <Badge variant={transfer.status === "completed" ? "default" : "secondary"}>
                        {transfer.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-sm text-accent cursor-pointer hover:underline">
                      {transfer.hash}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{transfer.timestamp}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => setSelectedFile(transfer)} title="View details">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" title="Download">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-error hover:text-error" title="Revoke">
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

      {/* Detail View */}
      {selectedFile && (
        <Card className="border-border border-accent/30 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-accent" />
              File Details: {selectedFile.filename}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">File Hash</p>
                <p className="font-mono text-sm mt-1">{selectedFile.hash}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">File Size</p>
                <p className="text-sm mt-1 font-semibold">{selectedFile.size}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="text-sm mt-1 font-semibold text-accent">{selectedFile.status.toUpperCase()}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Timestamp</p>
                <p className="text-sm mt-1">{selectedFile.timestamp}</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 font-mono text-xs text-muted-foreground">
              <p>Audit trail entries for this file: 3 blockchain confirmations</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
