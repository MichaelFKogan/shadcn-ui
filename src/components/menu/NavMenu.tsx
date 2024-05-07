// src/components/MainNav.tsx
'use client'
import React, { useState, useEffect} from "react";
import { DarkMode } from "@/components/menu/DarkMode"
import { MusicPlayer } from "@/components/menu/MusicPlayer"
import '../styles/navmenu.css'
import { Login } from "@/components/Login"
// import { MusicPlayerSpotify } from "@/components/MusicPlayerSpotify"
// import { PodcastPlayer } from "@/components/PodcastPlayer"
import { Submit } from "@/components/Submit"
import { Button } from "@/components/ui/button";
import '../styles/main-nav.css'
import { Menu, TreePalm } from "lucide-react"
import Link from 'next/link';
import cn from 'classnames';

import { firebaseApp } from '../../lib/firebase'; // Import the firebaseApp, not auth
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { signOut } from 'firebase/auth';

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuLink } from "@/components/ui/navigation-menu";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  


  const components: { title: string; href: string; description: string }[] = [
    {
      title: "💯 Featured",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "📍 Essentials",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "📸 Social Media",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "👔 Jobs",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "🏄‍♀️ Lifestyle",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]
  

export function NavMenu({ handleSidebarToggle, sidebarOpen, setSidebarOpen, showForm, clearAll, handleShowForm, handleCountrySelection }) {
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

    const auth = getAuth(firebaseApp);

    useEffect(() => {
        // Check if user is already logged in
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLoggedIn(true);
            } else {
                setUserLoggedIn(false);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [auth]);

    return (
        <header className="nav-menu sticky top-0 z-10 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">

                    {/* <Button variant="ghost" size="icon" className={`hamburger-menu mr-5 ${sidebarOpen ? "collapsed" : "inline-flex"} ${showForm ? "hidden" : "inline-flex"}`} onClick={handleSidebarToggle} >
                        <Menu strokeWidth={2}/>
                    </Button> */}

                    <a className="mr-6 flex items-center space-x-2 logo-text" onClick={() => { handleShowForm('home'); clearAll(); }}>
                        {/* <TreePalm strokeWidth={1} /> */}
                        <span className="hidden font-bold sm:inline-block">NomadHub</span>
                    </a>
{/* 
                    <nav className="flex items-center text-sm main-menu">

                        <Button variant="ghost" className="text-sm transition-colors hover:text-foreground/80 text-foreground/90" onClick={() => handleCountrySelection('💯 Featured')}><span className="emoji">💯</span> Featured</Button>
                        <Button variant="ghost" className="text-sm transition-colors hover:text-foreground/80 text-foreground/90" onClick={() => handleCountrySelection('📍 Essentials')}><span className="emoji">📍</span> Essentials</Button>
                        <Button variant="ghost" className="text-sm transition-colors hover:text-foreground/80 text-foreground/90" onClick={() => handleCountrySelection('📸 Social Media')}><span className="emoji">📸</span> Social Media</Button>
                        <Button variant="ghost" className="text-sm transition-colors hover:text-foreground/80 text-foreground/90" onClick={() => handleCountrySelection('👔 Jobs')}><span className="emoji">👔</span> Work</Button>
                        <Button variant="ghost" className="text-sm transition-colors hover:text-foreground/80 text-foreground/90" onClick={() => handleCountrySelection('🏄‍♀️ Lifestyle')}><span className="emoji">🏄‍♀️</span> Lifestyle</Button>
                    </nav> */}






    <NavigationMenu>
      <NavigationMenuList>


{/* MENU 1 */}


        {/* <Button variant="ghost" className="ml-auto mr-3" onClick={clearAll()}>
            💯 All
        </Button> */}




{/* MENU 2 */}
<NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                
              {/* {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
              ))} */}

              <div onClick={() => handleCountrySelection('💯 Featured')}>
              <ListItem title="💯 Featured">
              Discover curated resources that are highly recommended for digital nomads, including tools, websites, and services that can enhance your remote work and travel experience.
              </ListItem>
              </div>

              <div onClick={() => handleCountrySelection('📍 Essentials')}>
              <ListItem title="📍 Essentials">
              Explore the must-have resources and tools every digital nomad needs, from reliable internet services and travel insurance to essential gear and travel-friendly banking solutions.
              </ListItem>
              </div>

              <div onClick={() => handleCountrySelection('📸 Social Media')}>
              <ListItem title="📸 Social Media">
              Connect with the digital nomad community and stay updated on the latest trends, events, and opportunities through popular social media platforms used by fellow remote workers and travelers.
              </ListItem>
              </div>

              <div onClick={() => handleCountrySelection('👔 Jobs')}>
              <ListItem title="👔 Jobs">
              Find remote job opportunities specifically tailored for digital nomads, including job boards, freelance platforms, and remote-friendly companies looking to hire remote workers.
              </ListItem>
              </div>

              <div onClick={() => handleCountrySelection('🏄‍♀️ Lifestyle')}>
              <ListItem title="🏄‍♀️ Lifestyle">
              Embrace the digital nomad lifestyle with tips and resources on travel destinations, accommodation options, health and wellness, and other aspects of living a fulfilling life on the road.
              </ListItem>
              </div>

              <div onClick={() => handleCountrySelection('📘 Learn')}>
              <ListItem title="📘 Learn">
              Expand your skills and knowledge with online courses, workshops, and educational resources designed for digital nomads, covering topics such as remote work, entrepreneurship, and personal development.
              </ListItem>
              </div>


            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>




{/* MENU 3 */}
        <NavigationMenuItem>
          <NavigationMenuTrigger><span className="menu-emoji">⛩ </span> Asia</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6">
              
              <li className="row-span-3">
                  <div
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                    <div className="continent country-click" onClick={() => handleCountrySelection('⛩ Asia')}><span className="sidebar-emoji">⛩</span>Asia</div>
                    </div>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇭 Thailand')}><span className="sidebar-emoji">🇹🇭</span> Thailand</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛺 Bangkok')}><span className="sidebar-emoji">🛺</span> Bangkok</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐘 Chiang Mai')}><span className="sidebar-emoji">🐘</span> Chiang Mai</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🌊 Kho Phangan')}><span className="sidebar-emoji">🌊</span> Kho Phangan</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇯🇵 Japan')}><span className="sidebar-emoji">🇯🇵</span> Japan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🗼 Tokyo')}><span className="sidebar-emoji">🗼</span> Tokyo</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏯 Osaka')}><span className="sidebar-emoji">🏯</span> Osaka</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('👘 Kyoto')}><span className="sidebar-emoji">👘</span> Kyoto</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇮🇩 Indonesia')}><span className="sidebar-emoji">🇮🇩</span> Indonesia</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏝 Bali')}><span className="sidebar-emoji">🏝</span> Bali</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏄‍♀️ Canggu')}><span className="sidebar-emoji">🏄‍♀️</span> Canggu</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐒 Ubud')}><span className="sidebar-emoji">🐒</span> Ubud</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇰🇷 Korea')}><span className="sidebar-emoji">🇰🇷</span> Korea</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍱 Seoul')}><span className="sidebar-emoji">🍱</span> Seoul</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🚝 Busan')}><span className="sidebar-emoji">🚝</span> Busan</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇻🇳 Vietnam')}><span className="sidebar-emoji">🇻🇳</span> Vietnam</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛵 Ho Chi Minh City')}><span className="sidebar-emoji">🛵</span> Ho Chi Minh City</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍲 Hanoi')}><span className="sidebar-emoji">🍲</span> Hanoi</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇨🇳 China')}><span className="sidebar-emoji">🇨🇳</span> China</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🥡 Beijing')}><span className="sidebar-emoji">🥡</span> Beijing</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🧧 Shanghai')}><span className="sidebar-emoji">🧧</span> Shanghai</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇭🇰 Hong Kong')}><span className="sidebar-emoji">🇭🇰</span> Hong Kong</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇼 Taiwan')}><span className="sidebar-emoji">🇹🇼</span> Taiwan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('Taipei')}>Taipei</a>
                                <hr className="my-2"/>
                  </div>
              </li>              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>





        <NavigationMenuItem>
          <NavigationMenuTrigger><div><span className="menu-emoji">💃🏻</span> Latin America</div></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6">
              
              <li className="row-span-3">
                  <div
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                    <div><span className="sidebar-emoji">⛩</span> <span className="country-click" onClick={() => handleCountrySelection('⛩ Asia')}>Asia</span></div>
                    </div>
                    <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇭 Thailand')}><span className="sidebar-emoji">🇹🇭</span> Thailand</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛺 Bangkok')}><span className="sidebar-emoji">🛺</span> Bangkok</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐘 Chiang Mai')}><span className="sidebar-emoji">🐘</span> Chiang Mai</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🌊 Kho Phangan')}><span className="sidebar-emoji">🌊</span> Kho Phangan</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇯🇵 Japan')}><span className="sidebar-emoji">🇯🇵</span> Japan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🗼 Tokyo')}><span className="sidebar-emoji">🗼</span> Tokyo</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏯 Osaka')}><span className="sidebar-emoji">🏯</span> Osaka</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('👘 Kyoto')}><span className="sidebar-emoji">👘</span> Kyoto</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇮🇩 Indonesia')}><span className="sidebar-emoji">🇮🇩</span> Indonesia</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏝 Bali')}><span className="sidebar-emoji">🏝</span> Bali</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏄‍♀️ Canggu')}><span className="sidebar-emoji">🏄‍♀️</span> Canggu</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐒 Ubud')}><span className="sidebar-emoji">🐒</span> Ubud</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇰🇷 Korea')}><span className="sidebar-emoji">🇰🇷</span> Korea</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍱 Seoul')}><span className="sidebar-emoji">🍱</span> Seoul</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🚝 Busan')}><span className="sidebar-emoji">🚝</span> Busan</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇻🇳 Vietnam')}><span className="sidebar-emoji">🇻🇳</span> Vietnam</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛵 Ho Chi Minh City')}><span className="sidebar-emoji">🛵</span> Ho Chi Minh City</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍲 Hanoi')}><span className="sidebar-emoji">🍲</span> Hanoi</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇨🇳 China')}><span className="sidebar-emoji">🇨🇳</span> China</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🥡 Beijing')}><span className="sidebar-emoji">🥡</span> Beijing</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🧧 Shanghai')}><span className="sidebar-emoji">🧧</span> Shanghai</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇭🇰 Hong Kong')}><span className="sidebar-emoji">🇭🇰</span> Hong Kong</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇼 Taiwan')}><span className="sidebar-emoji">🇹🇼</span> Taiwan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('Taipei')}>Taipei</a>
                                <hr className="my-2"/>
                  </div>
              </li>              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        </NavigationMenuList>
    </NavigationMenu>

    <NavigationMenu>
    <NavigationMenuList>


        <NavigationMenuItem>
          <NavigationMenuTrigger><div><span className="menu-emoji">🇪🇺</span> Europe</div></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6">
              
              <li className="row-span-3">
                  <div
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                    <div><span className="sidebar-emoji">⛩</span> <span className="country-click" onClick={() => handleCountrySelection('⛩ Asia')}>Asia</span></div>
                    </div>
                    <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇭 Thailand')}><span className="sidebar-emoji">🇹🇭</span> Thailand</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛺 Bangkok')}><span className="sidebar-emoji">🛺</span> Bangkok</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐘 Chiang Mai')}><span className="sidebar-emoji">🐘</span> Chiang Mai</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🌊 Kho Phangan')}><span className="sidebar-emoji">🌊</span> Kho Phangan</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇯🇵 Japan')}><span className="sidebar-emoji">🇯🇵</span> Japan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🗼 Tokyo')}><span className="sidebar-emoji">🗼</span> Tokyo</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏯 Osaka')}><span className="sidebar-emoji">🏯</span> Osaka</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('👘 Kyoto')}><span className="sidebar-emoji">👘</span> Kyoto</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇮🇩 Indonesia')}><span className="sidebar-emoji">🇮🇩</span> Indonesia</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏝 Bali')}><span className="sidebar-emoji">🏝</span> Bali</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏄‍♀️ Canggu')}><span className="sidebar-emoji">🏄‍♀️</span> Canggu</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐒 Ubud')}><span className="sidebar-emoji">🐒</span> Ubud</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇰🇷 Korea')}><span className="sidebar-emoji">🇰🇷</span> Korea</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍱 Seoul')}><span className="sidebar-emoji">🍱</span> Seoul</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🚝 Busan')}><span className="sidebar-emoji">🚝</span> Busan</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇻🇳 Vietnam')}><span className="sidebar-emoji">🇻🇳</span> Vietnam</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛵 Ho Chi Minh City')}><span className="sidebar-emoji">🛵</span> Ho Chi Minh City</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍲 Hanoi')}><span className="sidebar-emoji">🍲</span> Hanoi</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇨🇳 China')}><span className="sidebar-emoji">🇨🇳</span> China</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🥡 Beijing')}><span className="sidebar-emoji">🥡</span> Beijing</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🧧 Shanghai')}><span className="sidebar-emoji">🧧</span> Shanghai</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇭🇰 Hong Kong')}><span className="sidebar-emoji">🇭🇰</span> Hong Kong</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇼 Taiwan')}><span className="sidebar-emoji">🇹🇼</span> Taiwan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('Taipei')}>Taipei</a>
                                <hr className="my-2"/>
                  </div>
              </li>              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger><div><span className="menu-emoji">🕌</span> Middle East</div></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6">
              
              <li className="row-span-3">
                  <div
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                    <div><span className="sidebar-emoji">⛩</span> <span className="country-click" onClick={() => handleCountrySelection('⛩ Asia')}>Asia</span></div>
                    </div>
                    <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇭 Thailand')}><span className="sidebar-emoji">🇹🇭</span> Thailand</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛺 Bangkok')}><span className="sidebar-emoji">🛺</span> Bangkok</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐘 Chiang Mai')}><span className="sidebar-emoji">🐘</span> Chiang Mai</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🌊 Kho Phangan')}><span className="sidebar-emoji">🌊</span> Kho Phangan</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇯🇵 Japan')}><span className="sidebar-emoji">🇯🇵</span> Japan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🗼 Tokyo')}><span className="sidebar-emoji">🗼</span> Tokyo</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏯 Osaka')}><span className="sidebar-emoji">🏯</span> Osaka</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('👘 Kyoto')}><span className="sidebar-emoji">👘</span> Kyoto</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇮🇩 Indonesia')}><span className="sidebar-emoji">🇮🇩</span> Indonesia</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏝 Bali')}><span className="sidebar-emoji">🏝</span> Bali</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏄‍♀️ Canggu')}><span className="sidebar-emoji">🏄‍♀️</span> Canggu</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐒 Ubud')}><span className="sidebar-emoji">🐒</span> Ubud</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇰🇷 Korea')}><span className="sidebar-emoji">🇰🇷</span> Korea</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍱 Seoul')}><span className="sidebar-emoji">🍱</span> Seoul</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🚝 Busan')}><span className="sidebar-emoji">🚝</span> Busan</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇻🇳 Vietnam')}><span className="sidebar-emoji">🇻🇳</span> Vietnam</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛵 Ho Chi Minh City')}><span className="sidebar-emoji">🛵</span> Ho Chi Minh City</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍲 Hanoi')}><span className="sidebar-emoji">🍲</span> Hanoi</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇨🇳 China')}><span className="sidebar-emoji">🇨🇳</span> China</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🥡 Beijing')}><span className="sidebar-emoji">🥡</span> Beijing</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🧧 Shanghai')}><span className="sidebar-emoji">🧧</span> Shanghai</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇭🇰 Hong Kong')}><span className="sidebar-emoji">🇭🇰</span> Hong Kong</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇼 Taiwan')}><span className="sidebar-emoji">🇹🇼</span> Taiwan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('Taipei')}>Taipei</a>
                                <hr className="my-2"/>
                  </div>
              </li>              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger><div><span className="menu-emoji">🌊</span> Oceania</div></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6">
              
              <li className="row-span-3">
                  <div
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                    <div><span className="sidebar-emoji">⛩</span> <span className="country-click" onClick={() => handleCountrySelection('⛩ Asia')}>Asia</span></div>
                    </div>
                    <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇭 Thailand')}><span className="sidebar-emoji">🇹🇭</span> Thailand</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛺 Bangkok')}><span className="sidebar-emoji">🛺</span> Bangkok</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐘 Chiang Mai')}><span className="sidebar-emoji">🐘</span> Chiang Mai</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🌊 Kho Phangan')}><span className="sidebar-emoji">🌊</span> Kho Phangan</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇯🇵 Japan')}><span className="sidebar-emoji">🇯🇵</span> Japan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🗼 Tokyo')}><span className="sidebar-emoji">🗼</span> Tokyo</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏯 Osaka')}><span className="sidebar-emoji">🏯</span> Osaka</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('👘 Kyoto')}><span className="sidebar-emoji">👘</span> Kyoto</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇮🇩 Indonesia')}><span className="sidebar-emoji">🇮🇩</span> Indonesia</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏝 Bali')}><span className="sidebar-emoji">🏝</span> Bali</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏄‍♀️ Canggu')}><span className="sidebar-emoji">🏄‍♀️</span> Canggu</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐒 Ubud')}><span className="sidebar-emoji">🐒</span> Ubud</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇰🇷 Korea')}><span className="sidebar-emoji">🇰🇷</span> Korea</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍱 Seoul')}><span className="sidebar-emoji">🍱</span> Seoul</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🚝 Busan')}><span className="sidebar-emoji">🚝</span> Busan</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇻🇳 Vietnam')}><span className="sidebar-emoji">🇻🇳</span> Vietnam</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛵 Ho Chi Minh City')}><span className="sidebar-emoji">🛵</span> Ho Chi Minh City</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍲 Hanoi')}><span className="sidebar-emoji">🍲</span> Hanoi</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇨🇳 China')}><span className="sidebar-emoji">🇨🇳</span> China</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🥡 Beijing')}><span className="sidebar-emoji">🥡</span> Beijing</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🧧 Shanghai')}><span className="sidebar-emoji">🧧</span> Shanghai</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇭🇰 Hong Kong')}><span className="sidebar-emoji">🇭🇰</span> Hong Kong</a>
                                <hr className="my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇼 Taiwan')}><span className="sidebar-emoji">🇹🇼</span> Taiwan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('Taipei')}>Taipei</a>
                                <hr className="my-2"/>
                  </div>
              </li>              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>

                </div>

                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R16u6la:" data-state="closed">
                    <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M3 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>

                    <span className="sr-only">Toggle Menu</span>
                </button>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center" style={{ columnGap: "10px" }}>
                        <nav className="flex items-center gap-4 text-sm lg:gap-6">
                            <a className="text-sm transition-colors hover:text-foreground/80 text-foreground/90" onClick={() => {handleShowForm('form'); setSidebarOpen(false)}}>Submit A Link</a>
                        </nav>
                        <MusicPlayer musicOpen={musicOpen} handleMusicOpen={handleMusicOpen} />
                        <DarkMode />
                    </nav>
                </div>
            </div>
        </header>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
      )
    })
    ListItem.displayName = "ListItem"

export default NavMenu;