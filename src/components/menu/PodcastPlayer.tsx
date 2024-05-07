// src/components/Podcastlayer.tsx
'use client'
import * as React from "react";
import { Button } from "@/components/ui/button";
import './styles/podcast-player.css'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export function PodcastPlayer({podcastOpen, handlePodcastOpen}) {

  return (
    <>

        <Button variant="ghost" size="icon" onClick={handlePodcastOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-podcast"><path d="M16.85 18.58a9 9 0 1 0-9.7 0"/><path d="M8 14a5 5 0 1 1 8 0"/><circle cx="12" cy="11" r="1"/><path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"/></svg>
        </Button>

        <div className={`podcast-player border-2 ${podcastOpen ? "show" : "hide"}`}>
            {/* <Carousel   opts={{align: "start", loop: true,}} orientation="vertical | horizontal">
                <CarouselContent>
                    <CarouselItem>
                        <iframe src="https://open.spotify.com/embed/show/0MVpQzxKUP03L9HhXMdmuL?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </CarouselItem>
                    <CarouselItem>
                        <iframe src="https://open.spotify.com/embed/show/0MVpQzxKUP03L9HhXMdmuL?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </CarouselItem>
                    <CarouselItem>
                        <iframe src="https://open.spotify.com/embed/show/0MVpQzxKUP03L9HhXMdmuL?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </CarouselItem>
                </CarouselContent>
            </Carousel> */}

            <Carousel
                opts={{
                    align: "start", loop: true,
                }}
                orientation="vertical"
                className="w-full"
                style={{marginTop: "50px", marginBottom: "50px"}}
                >
                <CarouselContent className="-mt-1" style={{maxHeight: "752px"}}>

                    <CarouselItem className="pt-1 md:basis-1/2">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex items-center justify-center p-6">
                                <iframe src="https://open.spotify.com/embed/show/0MVpQzxKUP03L9HhXMdmuL?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="pt-1 md:basis-1/2">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex items-center justify-center p-6">
                                <iframe src="https://open.spotify.com/embed/show/6cq2iaGUmfcNRVIGAGXtEb?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="pt-1 md:basis-1/2">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex items-center justify-center p-6">
                            <iframe src="https://open.spotify.com/embed/episode/2Dp9RRP0Xxq8A2C61kQyYX?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    </>
  );
}

export default PodcastPlayer;
