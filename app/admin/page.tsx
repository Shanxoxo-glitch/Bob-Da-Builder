import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutDashboard, Users, Calendar, Heart, Search, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"

export default function AdminDashboard() {
  return (
    <Suspense fallback={null}>
      <div className="min-h-screen bg-background font-sans">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">System Administration</h1>
              <p className="text-muted-foreground">Manage the AlumniConnect community and platform health.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search platform..." className="pl-10 w-64 h-10 rounded-full" />
              </div>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Alumni", value: "12,482", trend: "+12% this year", icon: Users },
              { label: "Active Mentors", value: "542", trend: "82% satisfaction", icon: LayoutDashboard },
              { label: "Total Donations", value: "$2.4M", trend: "105% of goal", icon: Heart },
              { label: "Upcoming Events", value: "14", trend: "3 this week", icon: Calendar },
            ].map((stat, i) => (
              <Card key={i} className="border-border/50 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <stat.icon className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
                    {stat.label}
                  </span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="bg-transparent border-b border-border w-full justify-start rounded-none h-auto p-0 gap-8">
              {["Overview", "User Management", "Donation Logs", "Event Analytics"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab.toLowerCase().replace(" ", "-")}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-4 h-auto font-bold text-sm"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="overview" className="space-y-8 animate-in fade-in-50 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Engagement Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { user: "Sarah Chen", action: "signed up as a mentor", time: "2 mins ago" },
                        { user: "Marcus Johnson", action: "donated $500 to STEM fund", time: "15 mins ago" },
                        { user: "Elena Rodriguez", action: "RSVP'd to Grand Reunion", time: "1 hour ago" },
                        { user: "John Doe", action: "updated career history", time: "3 hours ago" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs">
                              {item.user[0]}
                            </div>
                            <div>
                              <span className="font-bold">{item.user}</span>
                              <span className="text-muted-foreground ml-2">{item.action}</span>
                            </div>
                          </div>
                          <span className="text-muted-foreground text-xs">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Health</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Data Storage</span>
                        <span>42%</span>
                      </div>
                      {/* Added Progress component import and usage */}
                      <Progress value={42} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>API Response Time</span>
                        <span>98% Optimal</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    <div className="pt-4 flex gap-4">
                      <Button variant="outline" className="flex-1 bg-transparent">
                        System Logs
                      </Button>
                      <Button className="flex-1">Configure Limits</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </Suspense>
  )
}

function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <div className={`w-full bg-secondary rounded-full overflow-hidden ${className}`}>
      <div className="bg-primary h-full transition-all duration-500 ease-in-out" style={{ width: `${value}%` }} />
    </div>
  )
}
