"use client"

import Link from "next/link"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary-darker/20 bg-primary-darker/20 py-16 px-4">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-foreground transition-colors">
                  Demo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-darker/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 ViperQB. All rights reserved.</p>
          <p>Built on Qubic blockchain. Enterprise-grade security infrastructure.</p>
        </div>
      </div>
    </footer>
  )
}
