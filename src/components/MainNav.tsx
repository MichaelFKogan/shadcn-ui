// src/components/MainNav.tsx
'use client'
import { useState} from "react";
import { DarkMode } from "@/components/DarkMode"
import { MusicPlayer } from "@/components/MusicPlayer"
// import { MusicPlayerSpotify } from "@/components/MusicPlayerSpotify"
// import { PodcastPlayer } from "@/components/PodcastPlayer"
import { Submit } from "@/components/Submit"
import { Button } from "@/components/ui/button";
import './styles/main-nav.css'
import { Menu, TreePalm } from "lucide-react"
import { signOut } from 'firebase/auth';
  

export function MainNav({ handleSidebarToggle, sidebarOpen, clearAll }) {
    const [userLoggedIn, setUserLoggedIn] = useState(false); // State to manage user
    const [podcastOpen, setPodcastOpen] = useState(false);
    const [musicOpen, setMusicOpen] = useState(false);

    const handlePodcastOpen = () => { 
        if(musicOpen){
            setMusicOpen(false);
        }
        setPodcastOpen(!podcastOpen);
    }

    const handleMusicOpen = () => { 
        if(podcastOpen){
            setPodcastOpen(false);
        }
        setMusicOpen(!musicOpen);
    }

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUserLoggedIn(false);
        } catch (error) {
            console.error('Logout error:', error.message);
            // Handle logout error
        }
    };

    return (
        <header className="sticky top-0 z-10 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">

                    <Button variant="ghost" size="icon" className={`hamburger-menu mr-5 ${sidebarOpen ? "collapsed" : "inline-flex"}`} onClick={handleSidebarToggle} >
                        <Menu strokeWidth={2}/>
                    </Button>

                    <a className="mr-6 flex items-center space-x-2 logo-text" onClick={() => clearAll()}>
                        {/* <TreePalm strokeWidth={1} /> */}
                        <span className="hidden font-bold sm:inline-block">NomadHub</span>
                    </a>
                    <nav className="flex items-center gap-4 text-sm lg:gap-6">
                        <Submit />
                    </nav>
                </div>

                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R16u6la:" data-state="closed">
                    <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M3 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>

                    <span className="sr-only">Toggle Menu</span>
                </button>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center" style={{ columnGap: "10px" }}>
                    
                    {userLoggedIn ? (<><p>User Is Logged In</p> <Button variant="ghost" className="text-muted-foreground" onClick={handleLogout}>Sign Out</Button></>) : ( <a className="text-muted-foreground text-sm" onClick={handleLogout}>Sign Out</a> )}
                       
                        {/* <Button variant="ghost" size="icon" onClick={handlePodcastOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                        </Button> */}

                        {/* <PodcastPlayer podcastOpen={podcastOpen} handlePodcastOpen={handlePodcastOpen}/> */}
                        {/* <MusicPlayerSpotify musicOpen={musicOpen} handleMusicOpen={handleMusicOpen} /> */}
                        <MusicPlayer musicOpen={musicOpen} handleMusicOpen={handleMusicOpen} />
                        <DarkMode />
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default MainNav;