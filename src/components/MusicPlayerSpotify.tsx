// src/components/MusicPlayer.tsx
'use client'
import * as React from "react";
import { Button } from "@/components/ui/button";
import './styles/music-player.css'

export function MusicPlayerSpotify({musicOpen, handleMusicOpen}) {

  return (
    <>

        <Button variant="ghost" size="icon" onClick={handleMusicOpen}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="play w-6 h-6">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-play"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg> */}
        </Button>

        <div className={`spotify-player border-2 ${musicOpen ? "show" : "hide"}`}>
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1EIdGNFH1prDdr?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            {/* <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E8P3HYYmdhmfL?utm_source=generator" width="100%" height="752" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
        </div>

    </>
  );
}

export default MusicPlayerSpotify;
