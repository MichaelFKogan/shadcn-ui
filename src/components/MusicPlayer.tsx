// src/components/MusicPlayer.tsx
'use client'
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import './styles/music-player.css'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);



  const Play = () => { 
      setIsPlaying(!isPlaying);
  }


  return (
    <>

        <Button variant="ghost" size="icon" onClick={Play}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="play w-6 h-6">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
        </Button>

        <div className={`spotify-player border-2 ${isPlaying ? "opacity-100" : "opacity-0"}`}>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E8P3HYYmdhmfL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

    </>
  );
}

export default MusicPlayer;
