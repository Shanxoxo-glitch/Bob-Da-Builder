import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Image from "next/image"

const EVENTS = [
  {
    title: "10-Year Grand Reunion",
    date: "July 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Ballroom, Campus Center",
    category: "Reunion",
    attendees: 420,
    image: "/university-reunion-event.jpg",
  },
  {
    title: "AI in Modern Business Webinar",
    date: "June 10, 2025",
    time: "1:00 PM - 2:30 PM",
    location: "Online (Zoom)",
    category: "Webinar",
    attendees: 156,
    image: "/tech-webinar-preview.jpg",
  },
  {
    title: "Annual Alumni Golf Tournament",
    date: "August 22, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Green Valley Country Club",
    category: "Sports",
    attendees: 84,
    image: "/golf-tournament.jpg",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Upcoming Events</h1>
            <p className="text-muted-foreground">Stay connected through reunions, webinars, and meetups.</p>
          </div>
          <Button className="rounded-full px-6">Propose an Event</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event, i) => (
            <Card
              key={i}
              className="overflow-hidden border-border/50 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-background/90 text-foreground hover:bg-background backdrop-blur-sm border-none">
                  {event.category}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4 pb-6">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-primary" />
                    {event.location}
                  </div>
                </div>
                <div className="flex items-center text-xs font-medium text-muted-foreground bg-secondary/50 w-fit px-3 py-1 rounded-full">
                  <Users className="w-3 h-3 mr-1.5" />
                  {event.attendees} Alumni Attending
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full group/btn bg-transparent" variant="outline">
                  RSVP Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Newsletter/Communication Hub Section */}
        <section className="mt-24 bg-primary text-primary-foreground rounded-3xl p-12 overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Never miss an update.</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Subscribe to the Monthly Alumni Digest for curated stories, job opportunities, and upcoming event
              reminders.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full px-6 py-3 bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-white/50"
              />
              <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-base font-bold">
                Subscribe
              </Button>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        </section>
      </main>
    </div>
  )
}
