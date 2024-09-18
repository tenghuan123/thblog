'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginRegister() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Account Access</CardTitle>
        <CardDescription>Login or create a new account to get started.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="login" className="w-[300px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={onSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" placeholder="Enter your email" type="email" autoComplete="email" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" placeholder="Enter your password" type="password" autoComplete="current-password" required />
                </div>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form onSubmit={onSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="register-name">Name</Label>
                  <Input id="register-name" placeholder="Enter your name" autoComplete="name" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="register-email">Email</Label>
                  <Input id="register-email" placeholder="Enter your email" type="email" autoComplete="email" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="register-password">Password</Label>
                  <Input id="register-password" placeholder="Create a password" type="password" autoComplete="new-password" required />
                </div>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Submit'
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}