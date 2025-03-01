import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Star, Code, Boxes } from "lucide-react"
import { getImagePath } from "@/utils/path"

export default function Home() {
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
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen relative flex items-center hero-pattern overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          {/* Add red circle backgrounds */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-8">
                <div className="space-y-4 max-w-[600px]">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                    Hi, I'm <span className="gradient-text inline-block">Your Name</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Creative developer crafting digital experiences through code and design.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="glow-effect red-border-glow" size="lg" asChild>
                    <Link href="/projects">View Projects</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10" asChild>
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:text-primary hover:bg-primary/10"
                    asChild
                  >
                    <Link href="https://github.com/yourusername">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:text-primary hover:bg-primary/10"
                    asChild
                  >
                    <Link href="https://linkedin.com/in/yourusername">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:text-primary hover:bg-primary/10"
                    asChild
                  >
                    <Link href="mailto:your.email@example.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative lg:h-[700px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 floating">
                  <Image
                    src={getImagePath("/placeholder.svg?height=600&width=600") || "/placeholder.svg"}
                    alt="Profile"
                    width={600}
                    height={600}
                    className="rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="diagonal-section bg-muted relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">About Me</h2>
                <p className="text-muted-foreground text-lg">
                  I'm a passionate developer with a keen eye for design and a love for creating seamless user
                  experiences. With expertise in modern web technologies, I bring ideas to life through clean code and
                  intuitive interfaces.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/10 red-highlight">
                    <CardContent className="p-6">
                      <Code className="h-8 w-8 mb-3 text-primary" />
                      <h3 className="text-lg font-bold mb-2">Development</h3>
                      <p className="text-muted-foreground">
                        Building robust and scalable applications with modern technologies.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/10 red-highlight">
                    <CardContent className="p-6">
                      <Boxes className="h-8 w-8 mb-3 text-primary" />
                      <h3 className="text-lg font-bold mb-2">Design</h3>
                      <p className="text-muted-foreground">
                        Creating beautiful and functional user interfaces that delight users.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="bg-card/50 backdrop-blur-sm p-4">
                      <div className="text-4xl font-bold text-primary mb-2">{i}+</div>
                      <div className="text-sm text-muted-foreground">Years of Experience</div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="diagonal-section-reverse relative py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
                Here are some of my recent works. Each project is crafted with attention to detail and a focus on user
                experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((project) => (
                <Link href={`/projects/${project}`} key={project} className="block transform-gpu">
                  <Card className="overflow-hidden project-card bg-card/50 backdrop-blur-sm border-primary/10 red-tint h-full">
                    <div className="aspect-video relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                        alt={`Project ${project}`}
                        fill
                        className="object-cover project-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white font-medium">View Project</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-primary">Project {project}</h3>
                        <p className="text-muted-foreground">
                          A brief description of project {project} and what technologies were used.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge variant="outline" className="border-primary/20 text-primary">
                            React
                          </Badge>
                          <Badge variant="outline" className="border-primary/20 text-primary">
                            Node.js
                          </Badge>
                          <Badge variant="outline" className="border-primary/20 text-primary">
                            MongoDB
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button className="glow-effect red-border-glow" size="lg" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-20" id="contact">
          <div className="container px-4 md:px-6">
            <div className="max-w-[600px] mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text mb-4">
                Let's Connect
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Have a project in mind? Let's work together to bring your ideas to life.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="glow-effect red-border-glow" size="lg" asChild>
                  <Link href="mailto:your.email@example.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Me
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10" asChild>
                  <Link href="https://linkedin.com/in/yourusername">
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
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
              <Link className="text-sm hover:text-primary transition-colors" href="#contact">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

