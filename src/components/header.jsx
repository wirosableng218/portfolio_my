import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Link as RouterLink } from "react-router-dom"
import { BiMenu, BiX } from "react-icons/bi"
import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })

  return (
    <div className="container mx-auto max-w-[1200px] px-20">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-gradient font-secondary">
          <h1 className="text-[30px]">Yudha</h1>
          <h3 className="text-[24px]">Cahyo</h3>
          <h5 className="text-[20px]">Saputro</h5>
        </div>

        {/* Desktop Navigation */}
        {isDesktop ? (
          <div
            className="flex items-center space-x-8"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <RouterLink to="/" className="text-gray-600 hover:text-primary">Home</RouterLink>
            <RouterLink to="/profile" className="text-gray-600 hover:text-primary">Profile</RouterLink>
            <RouterLink to="/portfolio" className="text-gray-600 hover:text-primary">Portfolio</RouterLink>
            <RouterLink to="/contact" className="text-gray-600 hover:text-primary">Contact</RouterLink>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername"><BsGithub /></a>
              <a href="https://www.linkedin.com/in/yudha-cahyo-9462631b1"><BsLinkedin /></a>
            </div>
          </div>
        ) : (
          <button
            className="lg:hidden text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {isMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && !isDesktop && (
        <div
          className="flex flex-col space-y-4 pt-4"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <RouterLink to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary">Home</RouterLink>
          <RouterLink to="/profile" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary">Profile</RouterLink>
          <RouterLink to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary">Portfolio</RouterLink>
          <RouterLink to="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary">Contact</RouterLink>
        </div>
      )}
    </div>
  )
}
