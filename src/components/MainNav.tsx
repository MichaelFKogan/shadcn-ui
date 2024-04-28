// src/components/MainNav.tsx
import React from "react"
import Link from "next/link";
import cn from "classnames";
import { DarkMode } from "@/components/DarkMode"
import { MusicPlayer } from "@/components/MusicPlayer"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import './styles/main-nav.css'
import { Menu, TreePalm } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

import { homepage } from '../data/data'

// Define ListItem component
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
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
    );
  });
  ListItem.displayName = "ListItem";


export function MainNav({ handleSidebarToggle, sidebarOpen, handleKeywordSelection }) {

    const components: { title: string; href: string; description: string }[] = [
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        },
        {
          title: "Progress",
          href: "/docs/primitives/progress",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
          title: "Scroll-area",
          href: "/docs/primitives/scroll-area",
          description: "Visually or semantically separates content.",
        },
        {
          title: "Tabs",
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

    return (
        <header className="sticky top-0 z-10 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <Menu strokeWidth={2} className={`mr-6 ${sidebarOpen ? "hidden" : "block"}`} onClick={handleSidebarToggle} />
                    <a className="mr-6 flex items-center space-x-2" onClick={() => handleKeywordSelection('')}>
                        {/* <TreePalm strokeWidth={1} /> */}
                        <span className="hidden font-bold sm:inline-block">NomadHub</span>
                    </a>
                    <nav className="flex items-center gap-4 text-sm lg:gap-6">
                        <a className="text-sm transition-colors hover:text-foreground/80 text-foreground/60">Submit A Link</a>
                    </nav>
                </div>

                <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Countries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Essentials
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>


                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R16u6la:" data-state="closed">
                    <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M3 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>

                    <span className="sr-only">Toggle Menu</span>
                </button>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center" style={{ columnGap: "10px" }}>
                        <MusicPlayer />
                        <DarkMode />
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default MainNav;