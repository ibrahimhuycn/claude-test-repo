"use client"

import { useState, useEffect } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HomePage from "@/components/pages/home-page"
import CD4LIMSPage from "@/components/pages/cd4-lims-page"
import AboutUsPage from "@/components/pages/about-us-page"
import ContactUsPage from "@/components/pages/contact-us-page"

export default function NinjaInformaticsApp() {
  const [currentPage, setCurrentPage] = useState("home")

  const navigateTo = (page: string) => {
    // Only proceed if we're actually changing pages
    if (page !== currentPage) {
      setCurrentPage(page)
    }
  }

  // Enhanced smooth scroll-to-top that works reliably
  useEffect(() => {
    const smoothScrollToTop = () => {
      // First attempt: immediate smooth scroll
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // Second attempt: after content has time to render
      setTimeout(() => {
        // Only scroll again if we're not already at the top
        if (window.scrollY > 50) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 150)
      
      // Final attempt: ensure we're at the top after all content loads
      setTimeout(() => {
        // Only scroll if still not at top
        if (window.scrollY > 50) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 400)
    }

    smoothScrollToTop()
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
