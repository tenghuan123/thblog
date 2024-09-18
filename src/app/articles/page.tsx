import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, ThumbsUp, Share2 } from "lucide-react"

export default function BlogDetails() {
  const post = {
    title: "The Future of Web Development: Trends to Watch in 2023",
    author: "Jane Doe",
    date: "June 15, 2023",
    content: `
      <p>As we move further into 2023, the world of web development continues to evolve at a rapid pace. New technologies, frameworks, and methodologies are emerging, reshaping the way we build and interact with websites and web applications.</p>
      <h2>1. The Rise of JAMstack</h2>
      <p>JAMstack (JavaScript, APIs, and Markup) is gaining momentum as a modern web development architecture. It offers better performance, higher security, and easier scaling compared to traditional web architectures.</p>
      <h2>2. Progressive Web Apps (PWAs) Become Mainstream</h2>
      <p>PWAs continue to bridge the gap between web and mobile applications, offering app-like experiences directly through the browser. Expect to see more businesses adopting PWAs for their online presence.</p>
      <h2>3. AI and Machine Learning Integration</h2>
      <p>Artificial Intelligence and Machine Learning are finding their way into web development, powering everything from chatbots to personalized user experiences and predictive analytics.</p>
    `,
    comments: [
      { author: "John Smith", content: "Great article! I'm particularly excited about the potential of AI in web development." },
      { author: "Emily Johnson", content: "PWAs have been a game-changer for our business. It's good to see them becoming more mainstream." }
    ]
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-6">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder-avatar.jpg" alt={post.author} />
          <AvatarFallback>{post.author[0]}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="text-sm font-medium">{post.author}</p>
          <p className="text-sm text-muted-foreground">{post.date}</p>
        </div>
      </div>
      <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      <Separator className="my-8" />
      <div className="flex space-x-4 mb-8">
        <Button variant="outline" size="sm">
          <ThumbsUp className="mr-2 h-4 w-4" />
          Like
        </Button>
        <Button variant="outline" size="sm">
          <MessageCircle className="mr-2 h-4 w-4" />
          Comment
        </Button>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {post.comments.map((comment, index) => (
        <Card key={index} className="mb-4">
          <CardHeader>
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <span className="ml-2 font-medium">{comment.author}</span>
            </div>
          </CardHeader>
          <CardContent>
            <p>{comment.content}</p>
          </CardContent>
        </Card>
      ))}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Leave a comment</h3>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Write your comment here..." className="mb-4" />
          <Input placeholder="Your name" className="mb-4" />
          <Input type="email" placeholder="Your email" className="mb-4" />
        </CardContent>
        <CardFooter>
          <Button>Submit Comment</Button>
        </CardFooter>
      </Card>
    </div>
  )
}