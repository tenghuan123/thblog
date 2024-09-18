'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Home, Search, Calendar, ArrowRight } from "lucide-react"

export default function QueryPage() {
  const categories = [
    "All", "Technology", "Productivity", "Lifestyle", "Travel", "Finance", "Health"
  ]

  const articles = [
    { id: 1, title: "10 Tips for Productive Remote Work", date: "June 20, 2023", excerpt: "Discover how to stay productive while working from home...", category: "Productivity", image: "/placeholder.svg?height=200&width=400" },
    { id: 2, title: "The Rise of AI in Everyday Life", date: "June 18, 2023", excerpt: "Explore how artificial intelligence is impacting our daily routines...", category: "Technology", image: "/placeholder.svg?height=200&width=400" },
    { id: 3, title: "Sustainable Living: Small Changes, Big Impact", date: "June 15, 2023", excerpt: "Learn about simple ways to reduce your carbon footprint...", category: "Lifestyle", image: "/placeholder.svg?height=200&width=400" },
    { id: 4, title: "5 Must-Visit Hidden Gems in Europe", date: "June 12, 2023", excerpt: "Discover these lesser-known but breathtaking destinations...", category: "Travel", image: "/placeholder.svg?height=200&width=400" },
    { id: 5, title: "Understanding Cryptocurrency: A Beginner's Guide", date: "June 10, 2023", excerpt: "Get to grips with the basics of Bitcoin, Ethereum, and more...", category: "Finance", image: "/placeholder.svg?height=200&width=400" },
    { id: 6, title: "The Benefits of Mindfulness Meditation", date: "June 8, 2023", excerpt: "Explore how mindfulness can improve your mental health and productivity...", category: "Health", image: "/placeholder.svg?height=200&width=400" },
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArticles = articles.filter(article => 
    (selectedCategory === "All" || article.category === selectedCategory) &&
    (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  )

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
                <li><Link href="/query"><Button variant="ghost" size="sm">Articles</Button></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Explore Articles</h1>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search articles..." 
              className="pl-10 pr-4 py-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge>{article.category}</Badge>
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

        {filteredArticles.length === 0 && (
          <div className="text-center py-8">
            <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
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