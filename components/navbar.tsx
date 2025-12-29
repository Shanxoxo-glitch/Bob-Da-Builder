import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
          AlumniConnect
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/70">
          <Link href="/directory" className="hover:text-primary transition-colors">
            Directory
          </Link>
          <Link href="/events" className="hover:text-primary transition-colors">
            Events
          </Link>
          <Link href="/mentorship" className="hover:text-primary transition-colors">
            Mentorship
          </Link>
          <Link href="/giving" className="hover:text-primary transition-colors">
            Giving
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login">
          <Button variant="ghost" className="text-sm">
            Log in
          </Button>
        </Link>
        <Link href="/signup">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Join Platform
          </Button>
        </Link>
      </div>
    </nav>
  )
}
