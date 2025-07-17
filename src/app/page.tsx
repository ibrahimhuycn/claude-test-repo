"use client"

import { useState, useEffect, useRef } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HomePage from "@/components/pages/home-page"
import CD4LIMSPage from "@/components/pages/cd4-lims-page"
import AboutUsPage from "@/components/pages/about-us-page"
import ContactUsPage from "@/components/pages/contact-us-page"

export default function NinjaInformaticsApp() {
  const [currentPage, setCurrentPage] = useState("home")
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigateTo = (page: string) => {
    // Only proceed if we're actually changing pages
    if (page !== currentPage) {
      setCurrentPage(page)
    }
  }

  // Bulletproof scroll-to-top solution
  useEffect(() => {
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Force scroll to top with multiple strategies
    const scrollToTopReliably = () => {
      // Strategy 1: Immediate smooth scroll
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // Strategy 2: Backup after React renders
      scrollTimeoutRef.current = setTimeout(() => {
        if (window.scrollY > 10) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
      
      // Strategy 3: Final guarantee after all content loads
      scrollTimeoutRef.current = setTimeout(() => {
        if (window.scrollY > 10) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 300)
      
      // Strategy 4: Absolute final backup (instant if smooth fails)
      scrollTimeoutRef.current = setTimeout(() => {
        if (window.scrollY > 10) {
          window.scrollTo({ top: 0, behavior: 'instant' })
          // Follow up with smooth for visual feedback
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }, 50)
        }
      }, 600)
    }

    // Execute scroll strategy
    scrollToTopReliably()

    // Cleanup timeout on unmount
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [currentPage])

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />
      case 'cd4lims':
        return <CD4LIMSPage navigateTo={navigateTo} />
      case 'aboutus':
        return <AboutUsPage navigateTo={navigateTo} />
      case 'contactus':
        return <ContactUsPage navigateTo={navigateTo} />
      default:
        return <HomePage navigateTo={navigateTo} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  )
}
