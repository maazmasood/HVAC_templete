import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-secondary px-5 md:px-0 md:pl-16 ">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">La Piazza</h3>
            <p className="mb-2 text-sm text-muted-foreground">cafe | bar | restaurant</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:info@lapiazza.de">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> (123) 456-7890
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 123 Restaurant Street, Dorsten
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Opening Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Monday - Friday: 11:30 - 22:00</p>
              <p>Saturday: 12:00 - 23:00</p>
              <p>Sunday: 12:00 - 21:00</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} La Piazza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
