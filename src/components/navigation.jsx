import React, { useState, useEffect } from "react"
import { Github, Linkedin, BookOpen } from "lucide-react"
import { Link as RouterLink } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-transparent py-6"
      data-aos="fade-down"
    >
      <div className="container mx-auto max-w-[1200px] px-4 md:px-20">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <RouterLink
            to="/"
            className="cursor-pointer flex items-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div>
              <h1
                className="text-[30px] leading-none font-bold text-gradient"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Yudha
              </h1>
              <h3
                className="text-[24px] leading-none font-normal text-gradient"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-delay="100"
              >
                Cahyo
              </h3>
              <h5
                className="text-[20px] leading-none font-semibold text-gradient"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-delay="200"
              >
                Saputro
              </h5>
            </div>
          </RouterLink>

          {/* Navbar Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            <RouterLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="nav-link transition duration-300"
              data-aos="fade-down"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/profile"
              onClick={() => setIsMenuOpen(false)}
              className="nav-link transition duration-300"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Profile
            </RouterLink>
            <RouterLink
              to="/portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="nav-link transition duration-300"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Portfolio
            </RouterLink>
            <RouterLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="nav-link transition duration-300"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Contact
            </RouterLink>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/wirosableng218"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Github
                size={20}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              />
            </a>
            <a
              href="https://linkedin.com/in/yudha-cahyo-9462631b1"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Linkedin
                size={20}
                className="text-gray-700 hover:text-blue-700 transition-colors"
              />
            </a>
            <a
              href="/blog"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <BookOpen
                size={20}
                className="text-gray-700 hover:text-red-700 transition-colors"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="absolute top-12 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-4 px-4 transition-all duration-300 ease-in-out z-50"
            data-aos="fade-down"
          >
            <div className="flex flex-col space-y-3">
              <RouterLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-500 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-100"
                data-aos="fade-up"
              >
                Home
              </RouterLink>
              <RouterLink
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-500 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-100"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Profile
              </RouterLink>
              <RouterLink
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-500 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-100"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Portfolio
              </RouterLink>
              <RouterLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-500 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-100"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Contact
              </RouterLink>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-6 mt-6 pt-6 border-t border-gray-200">
              <a
                href="https://github.com/yourusername"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-gray-600 hover:text-blue-700 transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="/blog"
                className="text-gray-600 hover:text-red-700 transition-all duration-300 transform hover:scale-110"
              >
                <BookOpen size={24} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
