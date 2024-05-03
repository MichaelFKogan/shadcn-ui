// src/pages/submit.tsx
import React from 'react'
import "../components/styles/submit.css"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import Select from 'react-select'

import { ThemeProvider } from "@/components/theme-provider"
import '../app/globals.css'

export default function Submit() {

    const continents = [
        {value: "Worldwide", label: "🌏 Worldwide"},
        {value: "Asia", label: "⛩️ Asia "},
        {value: "Latin America", label: "💃 Latin America "},
        {value: "Europe", label: "🇪🇺 Europe"},
        {value: "North America", label: "🗽 North America"},
        {value: "Middle East", label: "🕌 Middle East"},
        {value: "Oceania", label: "🏄 Oceania"},
        {value: "Africa", label: "🦓 Africa"},
      ]

  return (
    <>
    <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
    >
        <div className='page-wrapper container'>
        <h1 className="">Submit A Link</h1>

            <Card className="mt-6 p-10">
            {/* <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Title</CardDescription>
            </CardHeader> */}

            <CardContent className="mt-6">
                <h3>Title</h3>
                <Input type="text" placeholder="Title" />
            </CardContent>

            <CardContent>
                <h3>URL</h3>
                <Input type="text" placeholder="URL" />
            </CardContent>

            <CardContent>
                <h3>Category</h3>
                {/* <Select options={categories} /> */}
            </CardContent>


            <hr className='mt-4 pb-4'/>
            <CardContent><h3 className='text-muted-foreground'>(Optional)</h3></CardContent>
            
            <CardContent>
                <h3>Tags</h3>
                <Input type="text" placeholder="Tags" />
            </CardContent>

            <CardContent>
                <h3>City</h3>
                <Input type="text" placeholder="City" />
            </CardContent>

            <CardContent>
                <h3>Country</h3>
                <Input type="text" placeholder="Country" />
            </CardContent>

            <CardContent>
                <h3>Continent</h3>
                <Select options={continents} />
            </CardContent>

            <CardContent>
                <h3>Description</h3>
                <Textarea/>
            </CardContent>

            <div className='w-full text-right'>
                <Button variant="secondary" className="ml-auto">
                    Submit
                </Button>
            </div>


            {/* <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
            </Card>
        </div>

    
    </ThemeProvider>
    </>
  );
}
