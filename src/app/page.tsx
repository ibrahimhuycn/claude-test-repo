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
    // Only scroll to top if we're actually changing pages
    if (page !== currentPage) {
      // First update the page
      setCurrentPage(page)
      
      // Then scroll to top after a tiny delay to ensure the page has rendered
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 50)
    } else {
      setCurrentPage(page)
    }
  }

  // Alternative: use useEffect to scroll when page changes
  useEffect(() => {
    // Scroll to top whenever the page changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
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
