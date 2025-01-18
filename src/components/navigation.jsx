import React, { useState, useEffect } from "react"
import { BiMenu, BiX } from "react-icons/bi"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import AOS from "aos"
import "aos/dist/aos.css"
import { Link as RouterLink, useLocation } from "react-router-dom"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setIsVisible(window.scrollY < 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = () => {
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    if (window.scrollY > 50) {
      setIsVisible(false)
    }
  }

  if (location.pathname === "/contact") {
    return null
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto max-w-[1200px] px-20">
        <div className="flex justify-between">
          {/* Logo */}
          <RouterLink
            to="/"
            className="cursor-pointer"
          >
            <div>
              <h1
                className="text-[30px] leading-none font-bold text-gradient"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Yudha
              </h1>
              <h3
                className="text-[24px] leading-none font-normal text-gradient"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Cahyo
              </h3>
              <h5
                className="text-[20px] leading-none font-semibold text-gradient"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Saputro
              </h5>
            </div>
          </RouterLink>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center space-x-8"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <RouterLink
              to="/"
              className="text-gray-600 hover:text-primary"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/profile"
              className="text-gray-600 hover:text-primary"
            >
              Profile
            </RouterLink>
            <RouterLink
              to="/portfolio"
              className="text-gray-600 hover:text-primary"
            >
              Portfolio
            </RouterLink>
            <RouterLink
              to="/contact"
              className="text-gray-600 hover:text-primary"
            >
              Contact
            </RouterLink>
          </div>

          {/* Social Icons */}
          <div
            className="flex items-center space-x-4"
            data-aos="zoom-out-left"
            data-aos-duration="2000"
            data-aos-delay="0"
          >
            <a href="https://github.com/yourusername">
              <BsGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername">
              <BsLinkedin />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {isMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} pt-4`}
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <div className="flex flex-col space-y-4">
            <RouterLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-primary"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/profile"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-primary"
            >
              Profile
            </RouterLink>
            <RouterLink
              to="/portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-primary"
            >
              Portfolio
            </RouterLink>
            <RouterLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-primary"
            >
              Contact
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
