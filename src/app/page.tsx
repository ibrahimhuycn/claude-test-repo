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

  // Robust scroll-to-top implementation
  useEffect(() => {
    // Multiple scroll attempts with different timings to ensure it works
    const scrollToTop = () => {
      // Immediate scroll (for fast pages like Home)
      window.scrollTo({ top: 0, behavior: 'instant' })
      
      // Follow up with smooth scroll after content loads
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
      
      // Final fallback scroll for slower loading content
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 300)
    }

    scrollToTop()
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
