'use client'
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button"

export function PlayerToggle() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Initialize the audio player when the component mounts
        audioRef.current = new Audio("/audio/floating-in-bliss_by_alkis.mp3");
    }, []);

    const togglePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }; 

  return (
    <Button variant="outline" size="icon"onClick={togglePlayPause}>
      {isPlaying ? (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5" // Adjusted thickness
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="6" y="5" width="4" height="14"></rect>
        <rect x="14" y="5" width="4" height="14"></rect>
      </svg>
      ) : (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5" // Adjusted thickness
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
      )}
    </Button>
  );
}

export default PlayerToggle;
