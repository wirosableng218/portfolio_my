import React from "react"

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16"
    >
      <div className="container mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1 - About */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-gradient font-primary text-xl font-bold mb-4">Yudha Cahyo Saputro</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Backend Developer yang berfokus pada pengembangan web dan aplikasi dengan pengalaman dalam berbagai teknologi modern.</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                className="text-primary hover:text-secondary transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-primary hover:text-secondary transition-colors"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="mailto:your.email@domain.com"
                className="text-primary hover:text-secondary transition-colors"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>

          {/* Kolom 2 - Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-gradient font-primary text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#profile"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3 - Contact */}
          <div>
            <h3 className="text-gradient font-primary text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>Taman Raya Rajeg Blok K16/21 Kec. Rajeg Desa.Mekarsari Kab.Tangerang, Indonesia</span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <i className="fas fa-phone mr-2"></i>
                <span>+62 858-5234-5718</span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <i className="fas fa-envelope mr-2"></i>
                <span>
                  <a href="mailto:yudhasaputro82@gmail.com">yudhasaputro82@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Yudha Cahyo Saputro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
