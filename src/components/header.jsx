import React, { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, BookOpen } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Handle scroll events
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    // Handle resize events for responsive design
    const mediaQuery = window.matchMedia("(min-width: 768px)")
    const handleResize = (e) => {
      setIsDesktop(e.matches)
    }
    
    // Set initial value
    setIsDesktop(mediaQuery.matches)
    
    // Add listener for subsequent changes
    mediaQuery.addListener(handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      mediaQuery.removeListener(handleResize)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="cursor-pointer">
            <div className="text-gradient">
              <h1 className="text-[30px] leading-none font-bold">Yudha</h1>
              <h3 className="text-[24px] leading-none font-normal">Cahyo</h3>
              <h5 className="text-[20px] leading-none font-semibold">Saputro</h5>
            </div>
          </a>

          {/* Desktop Navigation */}
          {isDesktop ? (
            <div className="flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-500 transition-colors">
                Home
              </a>
              <a href="/profile" className="text-gray-700 hover:text-blue-500 transition-colors">
                Profile
              </a>
              <a href="/portfolio" className="text-gray-700 hover:text-blue-500 transition-colors">
                Portfolio
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-500 transition-colors">
                Contact
              </a>
              <div className="flex space-x-4">
                <a href="https://github.com/wirosableng218" target="_blank" rel="noopener noreferrer"
                   className="text-gray-700 hover:text-gray-900 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/yudha-cahyo-9462631b1" target="_blank" rel="noopener noreferrer"
                   className="text-gray-700 hover:text-blue-700 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="/blog" className="text-gray-700 hover:text-red-700 transition-colors">
                  <BookOpen size={20} />
                </a>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && !isDesktop && (
          <div className="absolute top-full left-0 w-full bg-white/95 shadow-lg">
            <div className="flex flex-col px-4 py-2">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-gray-700 hover:text-blue-500 border-b border-gray-100 transition-colors"
              >
                Home
              </a>
              <a
                href="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-gray-700 hover:text-blue-500 border-b border-gray-100 transition-colors"
              >
                Profile
              </a>
              <a
                href="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-gray-700 hover:text-blue-500 border-b border-gray-100 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-gray-700 hover:text-blue-500 transition-colors"
              >
                Contact
              </a>

              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-6 py-4 border-t border-gray-100 mt-2">
                <a
                  href="https://github.com/wirosableng218"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yudha-cahyo-9462631b1"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="/blog"
                  className="text-gray-600 hover:text-red-700 transition-colors"
                >
                  <BookOpen size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
