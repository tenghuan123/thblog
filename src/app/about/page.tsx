import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Home, Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function AboutMe() {
  const skills = ["Web Development", "Content Writing", "SEO", "Digital Marketing", "UI/UX Design"]
  const interests = ["Technology", "Travel", "Photography", "Reading", "Hiking"]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-primary">MyBlog</span>
            </Link>
            <nav>
              <ul className="flex space-x-1">
                <li><Link href="/"><Button variant="ghost" size="sm"><Home className="mr-2 h-4 w-4" />Home</Button></Link></li>
                <li><Link href="/about"><Button variant="ghost" size="sm">About</Button></Link></li>
                <li><Link href="/archive"><Button variant="ghost" size="sm">Archive</Button></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/placeholder.svg" alt="Jane Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">Jane Doe</h1>
                <p className="text-xl text-muted-foreground mb-4">Web Developer & Tech Enthusiast</p>
                <div className="flex justify-center md:justify-start space-x-2">
                  <Button variant="outline" size="sm">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4">
                Hello! I'm Jane Doe, a passionate web developer and tech enthusiast based in San Francisco. With over 5 years of experience in the tech industry, I've developed a deep love for creating intuitive and efficient web applications.
              </p>
              <p className="mb-4">
                My journey in tech began when I built my first website at the age of 15. Since then, I've been constantly learning and exploring new technologies. This blog is my way of sharing my knowledge, experiences, and insights with fellow developers and tech enthusiasts.
              </p>
              <p>
                When I'm not coding or writing blog posts, you can find me hiking in the beautiful California mountains, experimenting with new recipes in the kitchen, or curled up with a good book and a cup of coffee.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Interests</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="outline">{interest}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">My Blog Journey</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4">
                I started this blog in 2020 as a way to document my learning journey and share my experiences with the wider tech community. What began as a personal project has grown into a platform where I discuss various topics related to web development, emerging technologies, and the tech industry as a whole.
              </p>
              <p className="mb-4">
                Through this blog, I aim to:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Share practical tips and tutorials for fellow developers</li>
                <li>Explore and analyze the latest trends in technology</li>
                <li>Provide insights into my personal projects and experiences</li>
                <li>Foster a community of lifelong learners in the tech space</li>
              </ul>
              <p>
                I'm always excited to connect with like-minded individuals, so feel free to reach out if you'd like to discuss technology, collaboration opportunities, or just to say hello!
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">MyBlog</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            © 2023 MyBlog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}