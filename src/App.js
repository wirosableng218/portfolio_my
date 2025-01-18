import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Navigation from "./components/navigation"
import Profile from "./components/profile"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home />}
          index
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
