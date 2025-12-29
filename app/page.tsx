import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Calendar, Briefcase, Heart } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-pretty">
              Reconnect with your <span className="text-primary">legacy.</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
              The centralized hub for alumni to network, mentor current students, and stay updated on institutional
              milestones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground h-14 px-8 rounded-full text-lg group">
                Get started — it's free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="relative aspect-square bg-primary/10 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/professional-university-alumni-networking.jpg"
              alt="Alumni platform preview"
              fill
              className="object-cover mix-blend-multiply opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-secondary/30 py-24 px-6 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Built for the entire community</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Global Directory",
                  desc: "Search and connect with fellow alumni across the world.",
                },
                {
                  icon: Calendar,
                  title: "Event Management",
                  desc: "Never miss a reunion, webinar, or local chapter meetup.",
                },
                {
                  icon: Briefcase,
                  title: "Career Growth",
                  desc: "Exclusive job boards and professional networking opportunities.",
                },
                {
                  icon: Heart,
                  title: "Secure Giving",
                  desc: "Transparent donation tracking to support future generations.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-background p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section inspired by Alpaca/Typeform layouts */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-bold tracking-widest uppercase text-sm">For Institutions</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Institutional grade management.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            <div className="bg-foreground text-background p-12 rounded-3xl space-y-6">
              <code className="text-primary text-sm">// Alumni Database v2.0</code>
              <h3 className="text-3xl font-bold">Secure Data Management</h3>
              <p className="text-background/70 text-lg">
                Manage thousands of profiles with encrypted career tracking, donation history, and engagement analytics.
              </p>
              <Button
                variant="outline"
                className="border-background/20 hover:bg-background hover:text-foreground bg-transparent"
              >
                View Admin Demo
              </Button>
            </div>
            <div className="space-y-6 px-4">
              <div className="border-b border-border pb-6">
                <h4 className="font-bold text-xl mb-2">Real-time Analytics</h4>
                <p className="text-foreground/60">Track alumni engagement and donation trends with ease.</p>
              </div>
              <div className="border-b border-border pb-6">
                <h4 className="font-bold text-xl mb-2">Automated Communications</h4>
                <p className="text-foreground/60">Send personalized newsletters and event invites automatically.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Mentorship Matching</h4>
                <p className="text-foreground/60">Connect students with alumni based on industry and interests.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tight text-primary">AlumniConnect</div>
          <div className="flex gap-8 text-sm text-foreground/60">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary">
              Contact Support
            </Link>
          </div>
          <p className="text-sm text-foreground/40">© 2025 AlumniConnect Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
