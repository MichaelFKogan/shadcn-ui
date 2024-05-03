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
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSongTitle, setCurrentSongTitle] = useState("");
  const audioRef = useRef(new Audio());

  const songTitles = [
    "1. Floating in Bliss",
    "2. Touch",
    "3. Scary Island",
    "4. Turtle Time",
  ];

  const artistNames = [
    "Artist 1",
    "Artist 2",
    "Artist 3",
    "Artist 4",
  ];

  useEffect(() => {
    // Function to play the current song
    const playCurrentSong = () => {
      audioRef.current.src = `/audio/${songTitles[currentSongIndex].toLowerCase().replace(/\s/g, '-')}.mp3`;
      audioRef.current.play().catch(error => {
        console.error('Failed to play audio:', error);
      });
    };

    // Set the initial song title
    setCurrentSongTitle(songTitles[currentSongIndex]);

    // Play the initial song if isPlaying is true
    if (isPlaying) {
      playCurrentSong();
    }

    // Add event listeners
    audioRef.current.addEventListener('play', () => console.log('Audio playing'));
    audioRef.current.addEventListener('pause', () => console.log('Audio paused'));

    // Cleanup function to remove event listeners
    return () => {
      audioRef.current.pause();
      audioRef.current.removeEventListener('play', () => console.log('Audio playing'));
      audioRef.current.removeEventListener('pause', () => console.log('Audio paused'));
    };
  }, []); // This effect runs once on mount and cleanup on unmount

  useEffect(() => {
    if (isPlaying) {
      // Play the current song when the index changes and isPlaying is true
      audioRef.current.src = `/audio/${songTitles[currentSongIndex].toLowerCase().replace(/\s/g, '-')}.mp3`;
      audioRef.current.play().catch(error => {
        console.error('Failed to play audio:', error);
      });
    }
    setCurrentSongTitle(songTitles[currentSongIndex]);
  }, [currentSongIndex, isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error('Failed to play:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const Play = () => { 
    if (!isPlaying) {
      audioRef.current.play().catch(error => {
        console.error('Failed to play:', error);
      });
      setIsPlaying(!isPlaying);
    }
  }

  const Pause = () => { 
    if (isPlaying) {
      audioRef.current.pause(); 
      setIsPlaying(!isPlaying);
    }
  }

  const switchSong = (direction) => {
    let newIndex = currentSongIndex + direction;
    if (newIndex < 0) {
      newIndex = songTitles.length - 1;
    } else if (newIndex >= songTitles.length) {
      newIndex = 0;
    }
    setCurrentSongIndex(newIndex);
  };

  return (
    <>

      <Popover>
      <PopoverTrigger>

        <Button variant="ghost" size="icon" onClick={Play}>
        {isPlaying ? (
              <div className="music-bars">
                <span />
                <span />
                <span />
              </div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="play w-6 h-6">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
        </Button>

      </PopoverTrigger>
        <PopoverContent>
          <div className="flex items-center justify-between popover">
            <h3>{currentSongTitle}</h3>
            <div className="flex items-center">

            <Button variant="ghost" size="icon" className="text-sm mr-2 text-muted-foreground" onClick={Pause}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pause w-6 h-6">
                <rect x="6" y="5" width="4" height="14"></rect>
                <rect x="14" y="5" width="4" height="14"></rect>
              </svg>
            </Button>

              <Button variant="ghost" size="icon" className="text-sm text-muted-foreground" onClick={() => switchSong(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polygon points="14 18 14 6 5 12 14 18"></polygon>
                  <line x1="4" y1="6" x2="4" y2="18"></line>
                </svg>
              </Button>

              <Button variant="ghost" size="icon" className="text-sm text-muted-foreground" onClick={() => switchSong(1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polygon points="10 18 10 6 19 12 10 18"></polygon>
                  <line x1="5" y1="6" x2="5" y2="18"></line>
                </svg>
              </Button>
            </div>
          </div>
          <a href="https://www.google.como" className="artist-name"><p className="text-xs text-muted-foreground">{artistNames[currentSongIndex]}</p></a>
        </PopoverContent>
      </Popover>

    </>
  );
}

export default MusicPlayer;
