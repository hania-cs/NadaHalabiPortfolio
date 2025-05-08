"use client"

import type React from "react"
import { useEffect, useState } from "react"
import "./App.css"
import ghibliCharacter from "./assets/ghibli-character.png"
import AboutSection from "./components/AboutSection"
import WorkSection from "./components/WorkSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

const App: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    // Set loaded state after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      {/* Elegant grid background */}
      <div className="grid-background">
        <div className="grid-lines"></div>
      </div>

      {/* Main content */}
      <div className="portfolio-container">
        {/* Left section with character */}
        <div className="left-section">
          <div className="character-frame">
            <img
              src={ghibliCharacter || "/placeholder.svg"}
              alt="Designer Illustration"
              className="character-illustration"
            />
          </div>
        </div>

        {/* Right section with text */}
        <div className="right-section">
          <div className="content-wrapper">
            <div className="designer-title">
              <h1 className="title-large">Nada Halabi</h1>
              <span className="title-medium">Graphic Designer</span>
            </div>

            <div className="portfolio-text">
              <div className="text-line">
                <span className="elegant-text">Portfolio</span>
                <div className="line-decoration"></div>
              </div>

              <p className="designer-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis id sequi possimus saepe eveniet nulla deserunt odit delectus dolorum incidunt!
              </p>

              <div className="portfolio-categories">
                <div className="category">
                  <span className="category-number">01</span>
                  <span className="category-name">lorem</span>
                </div>
                <div className="category">
                  <span className="category-number">02</span>
                  <span className="category-name">lorem</span>
                </div>
                <div className="category">
                  <span className="category-number">03</span>
                  <span className="category-name">lorem</span>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <button className="view-work-btn">
                View Work
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Work Section */}
      <WorkSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer name="Your Name" />

      {/* Floating elements */}
      <div className="floating-elements">
        <div className="floating-circle" style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}></div>
        <div className="floating-square" style={{ transform: `translateY(${scrollPosition * -0.1}px)` }}></div>
        <div className="floating-line" style={{ transform: `rotate(${scrollPosition * 0.05}deg)` }}></div>
      </div>
    </div>
  )
}

export default App
