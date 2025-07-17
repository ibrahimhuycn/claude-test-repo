"use client"

import { useState } from "react"
import { Home, Database, Users, Phone, Menu, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface HeaderProps {
  currentPage: string
  navigateTo: (page: string) => void
}

export default function Header({ currentPage, navigateTo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (page: string) => {
    navigateTo(page)
    setIsOpen(false)
  }

  const NavMenu = () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink 
            className={`${navigationMenuTriggerStyle()} cursor-pointer min-w-fit px-6 ${currentPage === 'home' ? 'bg-accent text-accent-foreground' : ''}`}
            onClick={() => navigateTo('home')}
          >
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink 
            className={`${navigationMenuTriggerStyle()} cursor-pointer min-w-fit px-6 ${currentPage === 'cd4lims' ? 'bg-accent text-accent-foreground' : ''}`}
            onClick={() => navigateTo('cd4lims')}
          >
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span>CD4 LIMS</span>
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink 
            className={`${navigationMenuTriggerStyle()} cursor-pointer min-w-fit px-6 ${currentPage === 'aboutus' ? 'bg-accent text-accent-foreground' : ''}`}
            onClick={() => navigateTo('aboutus')}
          >
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>About Us</span>
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink 
            className={`${navigationMenuTriggerStyle()} cursor-pointer min-w-fit px-6 ${currentPage === 'contactus' ? 'bg-accent text-accent-foreground' : ''}`}
            onClick={() => navigateTo('contactus')}
          >
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Contact Us</span>
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )

  const MobileMenu = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <div className="flex flex-col space-y-4 mt-4">
          <button 
            onClick={() => handleNavigate('home')}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-left transition-colors ${currentPage === 'home' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'}`}
          >
            <Home className="h-4 w-4 flex-shrink-0" />
            <span>Home</span>
          </button>
          <button 
            onClick={() => handleNavigate('cd4lims')}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-left transition-colors ${currentPage === 'cd4lims' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'}`}
          >
            <Database className="h-4 w-4 flex-shrink-0" />
            <span>CD4 LIMS</span>
          </button>
          <button 
            onClick={() => handleNavigate('aboutus')}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-left transition-colors ${currentPage === 'aboutus' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'}`}
          >
            <Users className="h-4 w-4 flex-shrink-0" />
            <span>About Us</span>
          </button>
          <button 
            onClick={() => handleNavigate('contactus')}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-left transition-colors ${currentPage === 'contactus' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'}`}
          >
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span>Contact Us</span>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-6 flex">
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Building className="h-5 w-5" />
            </div>
            <div>
              <span className="hidden font-bold text-lg sm:inline-block">
                NINJA INFORMATICS SOLUTIONS
              </span>
              <span className="font-bold text-base sm:hidden">
                NIS
              </span>
            </div>
          </button>
        </div>
        
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <div className="hidden md:flex">
            <NavMenu />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
