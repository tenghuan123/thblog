'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Plus, Edit, Trash2, Save, X } from "lucide-react"

type Document = {
  id: number;
  title: string;
  content: string;
  lastModified: Date;
}

export default function DocumentEditor() {
  const [documents, setDocuments] = useState<Document[]>([
    { id: 1, title: "Welcome Document", content: "Welcome to your online document editor!", lastModified: new Date() },
  ])
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [newDocumentTitle, setNewDocumentTitle] = useState("")

  const createDocument = () => {
    if (newDocumentTitle.trim() === "") return
    const newDoc: Document = {
      id: documents.length + 1,
      title: newDocumentTitle,
      content: "",
      lastModified: new Date()
    }
    setDocuments([...documents, newDoc])
    setSelectedDocument(newDoc)
    setIsEditing(true)
    setNewDocumentTitle("")
  }

  const updateDocument = (updatedDoc: Document) => {
    const updatedDocs = documents.map(doc => 
      doc.id === updatedDoc.id ? { ...updatedDoc, lastModified: new Date() } : doc
    )
    setDocuments(updatedDocs)
    setSelectedDocument(updatedDoc)
    setIsEditing(false)
  }

  const deleteDocument = (id: number) => {
    setDocuments(documents.filter(doc => doc.id !== id))
    if (selectedDocument?.id === id) {
      setSelectedDocument(null)
      setIsEditing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-primary">OnlineDocs</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/3 lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {documents.map(doc => (
                    <div key={doc.id} className="flex items-center justify-between py-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => {
                          setSelectedDocument(doc)
                          setIsEditing(false)
                        }}
                      >
                        {doc.title}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteDocument(doc.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" /> New Document
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Document</DialogTitle>
                    </DialogHeader>
                    <Input
                      placeholder="Document Title"
                      value={newDocumentTitle}
                      onChange={(e) => setNewDocumentTitle(e.target.value)}
                    />
                    <DialogFooter>
                      <Button onClick={createDocument}>Create</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </aside>

          <section className="w-full md:w-2/3 lg:w-3/4">
            {selectedDocument ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {isEditing ? (
                      <Input
                        value={selectedDocument.title}
                        onChange={(e) => setSelectedDocument({ ...selectedDocument, title: e.target.value })}
                      />
                    ) : (
                      selectedDocument.title
                    )}
                    <div>
                      {isEditing ? (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateDocument(selectedDocument)}
                          >
                            <Save className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsEditing(false)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setIsEditing(true)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      className="min-h-[300px]"
                      value={selectedDocument.content}
                      onChange={(e) => setSelectedDocument({ ...selectedDocument, content: e.target.value })}
                    />
                  ) : (
                    <div className="prose max-w-none">
                      {selectedDocument.content.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Last modified: {selectedDocument.lastModified.toLocaleString()}
                  </p>
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-10">
                  <p className="text-muted-foreground">Select a document to view or edit</p>
                </CardContent>
              </Card>
            )}
          </section>
        </div>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center">
            <p className="text-sm text-muted-foreground">
              © 2023 OnlineDocs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}