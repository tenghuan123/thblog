import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Home, Search, User, Bookmark, TrendingUp, Calendar, ArrowRight } from "lucide-react"

export default function ImprovedBlogHomepage() {
  const latestArticles = [
    { id: 1, title: "10 Tips for Productive Remote Work", date: "June 20, 2023", excerpt: "Discover how to stay productive while working from home...", category: "Productivity", image: "/placeholder.svg?height=200&width=400" },
    { id: 2, title: "The Rise of AI in Everyday Life", date: "June 18, 2023", excerpt: "Explore how artificial intelligence is impacting our daily routines...", category: "Technology", image: "/placeholder.svg?height=200&width=400" },
    { id: 3, title: "Sustainable Living: Small Changes, Big Impact", date: "June 15, 2023", excerpt: "Learn about simple ways to reduce your carbon footprint...", category: "Lifestyle", image: "/placeholder.svg?height=200&width=400" },
  ]

  const popularArticles = [
    { id: 4, title: "5 Must-Visit Hidden Gems in Europe", reads: 15000, category: "Travel" },
    { id: 5, title: "Beginner's Guide to Meditation", reads: 12000, category: "Wellness" },
    { id: 6, title: "Understanding Cryptocurrency: A Simple Explanation", reads: 10000, category: "Finance" },
  ]

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
                <li><Link href="/about"><Button variant="ghost" size="sm"><User className="mr-2 h-4 w-4" />About</Button></Link></li>
                <li><Link href="/archive"><Button variant="ghost" size="sm"><BookOpen className="mr-2 h-4 w-4" />Archive</Button></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Personal Blog</h1>
          <p className="text-xl text-muted-foreground mb-6">Exploring ideas, sharing insights, and learning together.</p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search articles..." className="pl-10 pr-4 py-2 w-full" />
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="ml-auto">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Popular Articles</h2>
          <div className="grid gap-4">
            {popularArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{article.title}</span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <TrendingUp className="mr-1 h-4 w-4" />
                        {article.reads.toLocaleString()} reads
                      </span>
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Subscribe to Our Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Stay updated with our latest articles and insights. No spam, we promise!</p>
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow bg-primary-foreground text-primary" />
                <Button variant="secondary">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">About the Author</h2>
          <Card>
            <CardContent className="flex items-center space-x-4 pt-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" alt="Author" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-muted-foreground mb-2">Passionate writer, tech enthusiast, and lifelong learner.</p>
                <Button variant="outline" size="sm">
                  Read More About Me
                </Button>
              </div>
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