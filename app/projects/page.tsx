import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
      image: "/placeholder.svg?height=200&width=400&text=E-commerce+Platform",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-ecommerce-demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A task management application with drag-and-drop functionality, user collaboration, and real-time updates.",
      image: "/placeholder.svg?height=200&width=400&text=Task+Management",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://your-task-manager-demo.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
      image: "/placeholder.svg?height=200&width=400&text=Weather+Dashboard",
      tags: ["JavaScript", "OpenWeather API", "Chart.js"],
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://your-weather-dashboard-demo.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      image: "/placeholder.svg?height=200&width=400&text=Portfolio+Website",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio-demo.com",
    },
    {
      id: 5,
      title: "Recipe Finder",
      description:
        "A recipe finder application that allows users to search for recipes based on ingredients they have.",
      image: "/placeholder.svg?height=200&width=400&text=Recipe+Finder",
      tags: ["React", "Spoonacular API", "CSS"],
      github: "https://github.com/yourusername/recipe-finder",
      demo: "https://your-recipe-finder-demo.com",
    },
    {
      id: 6,
      title: "Budget Tracker",
      description: "A budget tracking application that helps users manage their finances and track expenses.",
      image: "/placeholder.svg?height=200&width=400&text=Budget+Tracker",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      github: "https://github.com/yourusername/budget-tracker",
      demo: "https://your-budget-tracker-demo.com",
    },
  ]

  return (
    <div className="min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Star className="h-5 w-5 mr-2 text-primary" />
          <span className="font-bold text-xl">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main>
        <section className="relative py-20 hero-pattern">
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text mb-4">
                My Projects
              </h1>
              <p className="text-xl text-muted-foreground">
                A collection of my work, ranging from web applications to design projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="block transform-gpu">
                  <Card
                    className={`project-card bg-card/50 backdrop-blur-sm border-primary/10 red-tint ${
                      index % 3 === 1 ? "lg:translate-y-8" : ""
                    }`}
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover project-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white font-medium">View Project</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold text-primary">{project.title}</h2>
                        <p className="text-muted-foreground line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="border-primary/20 text-primary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-end pt-4 gap-2">
                          <Button variant="ghost" size="sm" className="hover:text-primary hover:bg-primary/10" asChild>
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="h-4 w-4" />
                              <span className="sr-only">GitHub</span>
                            </Link>
                          </Button>
                          <Button variant="ghost" size="sm" className="hover:text-primary hover:bg-primary/10" asChild>
                            <Link
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span className="sr-only">Live Demo</span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© 2024 Your Name. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link className="text-sm hover:text-primary transition-colors" href="/">
                Home
              </Link>
              <Link className="text-sm hover:text-primary transition-colors" href="/projects">
                Projects
              </Link>
              <Link className="text-sm hover:text-primary transition-colors" href="/#contact">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

