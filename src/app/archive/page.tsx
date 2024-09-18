'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Home, ChevronRight, ChevronDown, Calendar } from "lucide-react"

type Article = {
  id: number;
  title: string;
  date: Date;
  slug: string;
}

type GroupedArticles = {
  [year: string]: {
    [month: string]: Article[];
  };
}

export default function ArchivePage() {
  // Sample data - replace with actual data from your CMS or database
  const articles: Article[] = [
    { id: 1, title: "10 Tips for Productive Remote Work", date: new Date("2023-06-20"), slug: "10-tips-productive-remote-work" },
    { id: 2, title: "The Rise of AI in Everyday Life", date: new Date("2023-06-18"), slug: "rise-of-ai-everyday-life" },
    { id: 3, title: "Sustainable Living: Small Changes, Big Impact", date: new Date("2023-05-15"), slug: "sustainable-living-small-changes" },
    { id: 4, title: "5 Must-Visit Hidden Gems in Europe", date: new Date("2023-04-12"), slug: "5-must-visit-hidden-gems-europe" },
    { id: 5, title: "Understanding Cryptocurrency: A Beginner's Guide", date: new Date("2022-12-10"), slug: "understanding-cryptocurrency-beginners-guide" },
    { id: 6, title: "The Benefits of Mindfulness Meditation", date: new Date("2022-11-08"), slug: "benefits-mindfulness-meditation" },
    { id: 7, title: "How to Start Your Own Vegetable Garden", date: new Date("2022-05-20"), slug: "start-your-own-vegetable-garden" },
    { id: 8, title: "The Future of Electric Vehicles", date: new Date("2022-03-15"), slug: "future-of-electric-vehicles" },
    { id: 9, title: "Mastering the Art of Public Speaking", date: new Date("2021-11-30"), slug: "mastering-art-of-public-speaking" },
    { id: 10, title: "The Impact of Social Media on Mental Health", date: new Date("2021-09-05"), slug: "impact-social-media-mental-health" },
  ]

  const groupArticlesByYearAndMonth = (articles: Article[]): GroupedArticles => {
    return articles.reduce((acc, article) => {
      const year = article.date.getFullYear().toString()
      const month = article.date.toLocaleString('default', { month: 'long' })
      
      if (!acc[year]) {
        acc[year] = {}
      }
      if (!acc[year][month]) {
        acc[year][month] = []
      }
      acc[year][month].push(article)
      return acc
    }, {} as GroupedArticles)
  }

  const groupedArticles = groupArticlesByYearAndMonth(articles)
  const [expandedYears, setExpandedYears] = useState<string[]>([])

  const toggleYear = (year: string) => {
    setExpandedYears(prev => 
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    )
  }

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
        <h1 className="text-3xl font-bold mb-6">Article Archive</h1>

        <Card>
          <CardHeader>
            <CardTitle>Browse by Year and Month</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px] pr-4">
              {Object.entries(groupedArticles).reverse().map(([year, months]) => (
                <Collapsible
                  key={year}
                  open={expandedYears.includes(year)}
                  onOpenChange={() => toggleYear(year)}
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                      <span>{year}</span>
                      {expandedYears.includes(year) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {Object.entries(months).reverse().map(([month, monthArticles]) => (
                      <div key={`${year}-${month}`} className="ml-4 mt-2">
                        <h3 className="font-semibold text-lg mb-2">{month}</h3>
                        <ul className="space-y-2">
                          {monthArticles.map((article) => (
                            <li key={article.id}>
                              <Link href={`/article/${article.slug}`} className="flex items-center hover:text-primary">
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>{article.date.toLocaleDateString()} - {article.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CollapsibleContent>
                  <Separator className="my-2" />
                </Collapsible>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
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