import type React from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ShieldCheck, TrendingUp, Users } from "lucide-react"

const CAMPAIGNS = [
  {
    title: "STEM Excellence Fund",
    description: "Support next-gen laboratories and research grants for undergraduate students.",
    raised: 125000,
    goal: 250000,
    donors: 142,
  },
  {
    title: "Alumni Scholarship 2025",
    description: "Full-ride scholarships for talented students from underprivileged backgrounds.",
    raised: 45000,
    goal: 50000,
    donors: 89,
  },
]

export default function GivingPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-3xl mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Support your alma mater.</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your contributions fuel innovation, support diversity, and ensure that future generations have access to the
            same world-class education you received.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-2xl font-bold">Active Campaigns</h2>
            <div className="space-y-6">
              {CAMPAIGNS.map((campaign, i) => (
                <Card key={i} className="border-border/50 overflow-hidden group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-2xl">{campaign.title}</CardTitle>
                        <CardDescription className="text-base">{campaign.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="rounded-full px-3 py-1 bg-primary/5 text-primary border-none">
                        Active
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>
                          ${campaign.raised.toLocaleString()} <span className="text-muted-foreground">raised</span>
                        </span>
                        <span className="text-muted-foreground">Goal: ${campaign.goal.toLocaleString()}</span>
                      </div>
                      <Progress value={(campaign.raised / campaign.goal) * 100} className="h-3 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                        <Users className="w-4 h-4" />
                        {campaign.donors} Donors
                      </div>
                      <Button className="rounded-full px-8">Donate Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <Card className="bg-primary text-primary-foreground border-none rounded-3xl p-4 shadow-xl shadow-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6" />
                  Secure & Transparent
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  100% of your donations go directly to the chosen fund. We provide full audit reports and impact
                  summaries every quarter.
                </p>
                <div className="pt-2 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    Tax-deductible receipts
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    Encrypted transactions
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary/30 rounded-3xl p-8 border border-border/50 space-y-6">
              <h3 className="font-bold text-lg">Impact Dashboard</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Alumni Giving</span>
                  <span className="font-bold text-primary">$2.4M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Students Supported</span>
                  <span className="font-bold text-primary">840+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">New Lab Equipments</span>
                  <span className="font-bold text-primary">12</span>
                </div>
              </div>
              <Button variant="outline" className="w-full rounded-full border-border bg-transparent">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Full Impact Report
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function Badge({ children, variant, className }: { children: React.ReactNode; variant?: string; className?: string }) {
  return <div className={`text-xs font-bold uppercase tracking-wider ${className}`}>{children}</div>
}
