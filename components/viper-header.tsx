"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function ViperHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 md:h-20 px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/viperqb-logo.png"
            alt="ViperQB Logo"
            width={40}
            height={40}
            className="transition-transform group-hover:scale-105"
          />
          <span className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            ViperQB
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/#security"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Security
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-foreground hover:text-accent" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/20"
            asChild
          >
            <Link href="/demo">Get Demo</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl p-4 space-y-4">
          <Link
            href="/#features"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
          >
            Features
          </Link>
          <Link href="/#pricing" className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2">
            Pricing
          </Link>
          <Link
            href="/#security"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
          >
            Security
          </Link>
          <Link href="/#contact" className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2">
            Contact
          </Link>
          <div className="flex gap-3 pt-4 border-t border-border/50">
            <Button variant="outline" size="sm" className="flex-1 border-border bg-transparent text-foreground" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold" asChild>
              <Link href="/demo">Get Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
