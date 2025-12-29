import { Navbar } from "@/components/navbar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, MapPin, Briefcase, GraduationCap } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const ALUMNI = [
  {
    name: "Sarah Chen",
    class: "2018",
    major: "Computer Science",
    role: "Senior Engineer at TechCorp",
    location: "San Francisco, CA",
    avatar: "/professional-portrait.png",
  },
  {
    name: "Marcus Johnson",
    class: "2015",
    major: "Business Administration",
    role: "Marketing Director",
    location: "New York, NY",
    avatar: "/smiling-professional.png",
  },
  {
    name: "Elena Rodriguez",
    class: "2020",
    major: "Biology",
    role: "Research Scientist",
    location: "Boston, MA",
    avatar: "/scientist-portrait.png",
  },
]

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Alumni Directory</h1>
            <p className="text-muted-foreground">Find and connect with your former classmates.</p>
          </div>
          <div className="flex gap-3">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search names, majors, or companies..." className="pl-10 h-11" />
            </div>
            <Button variant="outline" className="h-11 px-4 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALUMNI.map((person, i) => (
            <Card key={i} className="group hover:shadow-md transition-shadow border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <Avatar className="w-20 h-20 border-2 border-background shadow-sm">
                    <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
                    <AvatarFallback>{person.name[0]}</AvatarFallback>
                  </Avatar>
                  <Button variant="ghost" size="sm" className="text-primary font-medium hover:bg-primary/5">
                    Connect
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{person.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <GraduationCap className="w-3.5 h-3.5 mr-1.5" />
                    Class of {person.class} • {person.major}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-foreground/80">
                    <Briefcase className="w-4 h-4 mr-2.5 text-primary/60" />
                    {person.role}
                  </div>
                  <div className="flex items-center text-foreground/80">
                    <MapPin className="w-4 h-4 mr-2.5 text-primary/60" />
                    {person.location}
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-none">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
