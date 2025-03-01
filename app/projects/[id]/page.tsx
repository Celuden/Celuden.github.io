import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, ArrowLeft, Star } from "lucide-react"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectId = Number.parseInt(params.id)

  // This would typically come from a database or CMS
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
      longDescription: `
        This e-commerce platform was built to provide a complete online shopping experience. The application includes features such as:
        
        - User authentication and profile management
        - Product browsing with filtering and search capabilities
        - Shopping cart and checkout process
        - Payment processing with Stripe
        - Order history and tracking
        - Admin dashboard for product and order management
        
        The frontend was built with React, utilizing Redux for state management and styled-components for styling. The backend was developed with Node.js and Express, with MongoDB as the database. Stripe was integrated for payment processing.
        
        This project was a great opportunity to learn about e-commerce workflows and payment processing. It also provided experience in building a full-stack application with a complex architecture.
      `,
      image: "/placeholder.svg?height=400&width=800&text=E-commerce+Platform",
      screenshots: [
        "/placeholder.svg?height=300&width=500&text=Screenshot+1",
        "/placeholder.svg?height=300&width=500&text=Screenshot+2",
        "/placeholder.svg?height=300&width=500&text=Screenshot+3",
      ],
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-ecommerce-demo.com",
      features: [
        "User authentication",
        "Product management",
        "Shopping cart",
        "Payment processing",
        "Order tracking",
        "Admin dashboard",
      ],
      technologies: {
        frontend: ["React", "Redux", "styled-components", "Axios"],
        backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
        deployment: ["Vercel", "MongoDB Atlas", "Stripe API"],
      },
      challenges: [
        "Implementing secure user authentication",
        "Setting up Stripe payment processing",
        "Creating an intuitive admin dashboard",
        "Optimizing database queries for performance",
      ],
      learnings: [
        "Gained experience with payment gateway integration",
        "Improved understanding of state management in complex applications",
        "Learned about e-commerce workflows and best practices",
        "Enhanced skills in building responsive user interfaces",
      ],
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A task management application with drag-and-drop functionality, user collaboration, and real-time updates.",
      longDescription: `
        This task management application was designed to help teams organize and track their work efficiently. The application includes features such as:
        
        - Task creation, editing, and deletion
        - Drag-and-drop functionality for task organization
        - User collaboration with real-time updates
        - Task assignment and due date tracking
        - Project and board organization
        - Notifications and reminders
        
        The application was built with React for the frontend, utilizing React DnD for drag-and-drop functionality. Firebase was used for the backend, providing real-time database capabilities, authentication, and hosting.
        
        This project was particularly interesting because it required implementing real-time updates and collaborative features. It was also a good opportunity to learn about Firebase and its capabilities.
      `,
      image: "/placeholder.svg?height=400&width=800&text=Task+Management",
      screenshots: [
        "/placeholder.svg?height=300&width=500&text=Screenshot+1",
        "/placeholder.svg?height=300&width=500&text=Screenshot+2",
        "/placeholder.svg?height=300&width=500&text=Screenshot+3",
      ],
      tags: ["React", "Firebase", "Tailwind CSS", "React DnD"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://your-task-manager-demo.com",
      features: [
        "Drag-and-drop task organization",
        "Real-time collaboration",
        "Task assignment",
        "Due date tracking",
        "Project organization",
        "Notifications",
      ],
      technologies: {
        frontend: ["React", "React DnD", "Tailwind CSS", "date-fns"],
        backend: ["Firebase Realtime Database", "Firebase Authentication", "Firebase Cloud Functions"],
        deployment: ["Firebase Hosting", "GitHub Actions"],
      },
      challenges: [
        "Implementing drag-and-drop functionality",
        "Setting up real-time updates",
        "Managing complex state across multiple users",
        "Designing an intuitive user interface",
      ],
      learnings: [
        "Gained experience with Firebase and its real-time capabilities",
        "Improved understanding of drag-and-drop implementations",
        "Learned about collaborative application design",
        "Enhanced skills in state management for real-time applications",
      ],
    },
    // Add more projects as needed
  ]

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

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
        <div className="relative hero-pattern">
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent"></div>

          <div className="container px-4 md:px-6 py-20 relative">
            <Button variant="ghost" size="sm" className="mb-8 hover:text-primary hover:bg-primary/10" asChild>
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>

            <div className="grid gap-8 lg:grid-cols-['2fr_1fr']">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
                    {project.title}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="bg-primary/20 text-primary hover:bg-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-secondary opacity-70 blur-lg"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover relative z-10"
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">Project Overview</h2>
                  <p className="text-muted-foreground whitespace-pre-line">{project.longDescription}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/10 red-highlight">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-primary mb-4">Features</h2>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Button className="glow-effect flex-1" asChild>
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button variant="outline" className="border-primary/20 hover:bg-primary/10 flex-1" asChild>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">Screenshots</h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {project.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="aspect-video relative rounded-lg overflow-hidden project-card red-tint"
                      >
                        <Image
                          src={screenshot || "/placeholder.svg"}
                          alt={`${project.title} Screenshot ${index + 1}`}
                          fill
                          className="object-cover project-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 sticky top-24">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Technologies</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-primary/80 mb-2">Frontend</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.frontend.map((tech) => (
                                <Badge key={tech} variant="outline" className="border-primary/20 text-primary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-primary/80 mb-2">Backend</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.backend.map((tech) => (
                                <Badge key={tech} variant="outline" className="border-primary/20 text-primary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-primary/80 mb-2">Deployment</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.deployment.map((tech) => (
                                <Badge key={tech} variant="outline" className="border-primary/20 text-primary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
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

