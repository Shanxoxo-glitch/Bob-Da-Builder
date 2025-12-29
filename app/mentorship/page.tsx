import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, MessageSquare, Star, Search, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Suspense } from "react"

const MENTORS = [
  {
    name: "Dr. Aris Thorne",
    role: "AI Ethics Lead @ FutureWorks",
    expertise: ["Artificial Intelligence", "Career Pivoting", "Ethics"],
    rating: 4.9,
    reviews: 24,
    avatar: "/mentor-1.png",
  },
  {
    name: "Sarah Jenkins",
    role: "Senior Product Designer @ DesignHub",
    expertise: ["UI/UX Design", "Portfolio Review", "Product Strategy"],
    rating: 5.0,
    reviews: 18,
    avatar: "/mentor-2.png",
  },
  {
    name: "David Kwok",
    role: "Investment Analyst @ Global Capital",
    expertise: ["Venture Capital", "Financial Modeling", "FinTech"],
    rating: 4.8,
    reviews: 31,
    avatar: "/mentor-3.png",
  },
]

export default function MentorshipPage() {
  return (
    <Suspense fallback={null}>
      <div className="min-h-screen bg-background font-sans">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Empower the Next Generation
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Mentorship & Career Hub</h1>
              <p className="text-muted-foreground text-lg">
                Connect with industry leaders from your alma mater. Seek guidance, review your career path, or offer
                your expertise as a mentor.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-full px-6 bg-transparent">
                Become a Mentor
              </Button>
              <Button className="rounded-full px-6">Find a Mentor</Button>
            </div>
          </div>

          <Tabs defaultValue="mentors" className="space-y-8">
            <TabsList className="bg-secondary/50 p-1 rounded-full w-full max-w-md">
              <TabsTrigger value="mentors" className="rounded-full flex-1">
                Find Mentors
              </TabsTrigger>
              <TabsTrigger value="jobs" className="rounded-full flex-1">
                Job Board
              </TabsTrigger>
              <TabsTrigger value="my-sessions" className="rounded-full flex-1">
                My Sessions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mentors" className="space-y-8 animate-in fade-in-50 duration-500">
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input placeholder="Search by industry, expertise, or company..." className="pl-12 h-14 rounded-2xl" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MENTORS.map((mentor, i) => (
                  <Card key={i} className="border-border/50 hover:shadow-lg transition-all">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-primary/10">
                        <AvatarImage src={mentor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{mentor.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {mentor.role}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill, j) => (
                          <Badge
                            key={j}
                            variant="secondary"
                            className="bg-primary/5 text-primary border-none text-[10px]"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm font-medium">
                        <div className="flex items-center gap-1 text-yellow-600">
                          <Star className="w-4 h-4 fill-current" />
                          {mentor.rating}
                        </div>
                        <div className="text-muted-foreground">({mentor.reviews} reviews)</div>
                      </div>
                      <Button className="w-full group rounded-xl" variant="secondary">
                        <MessageSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Book a Session
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="jobs" className="animate-in fade-in-50 duration-500">
              <div className="bg-secondary/20 border border-dashed border-border rounded-3xl p-12 text-center space-y-4">
                <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Exclusive Job Board coming soon</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  We're curating high-impact opportunities from our global alumni network. Stay tuned!
                </p>
                <Button variant="link" className="text-primary font-bold">
                  Get notified
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Career Stats Section */}
          <section className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border p-8 rounded-3xl space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Active Mentors</div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                Ready to guide you through industry-specific challenges.
              </p>
            </div>
            <div className="bg-background border border-border p-8 rounded-3xl space-y-2">
              <div className="text-3xl font-bold text-primary">1.2k</div>
              <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Sessions Completed</div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                Meaningful connections built across 40+ countries.
              </p>
            </div>
            <div className="bg-background border border-border p-8 rounded-3xl space-y-2">
              <div className="text-3xl font-bold text-primary">85%</div>
              <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Success Rate</div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                Mentees reporting significant career progress post-session.
              </p>
            </div>
          </section>
        </main>
      </div>
    </Suspense>
  )
}
