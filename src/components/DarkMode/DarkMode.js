import React from "react"
// DarkMode.js
import React from "react"
import "./DarkMode.css"

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`dark_mode ${isDarkMode ? "dark" : ""}`}>
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label
        className="dark_mode_label"
        htmlFor="darkmode-toggle"
      >
        <Sun />
        <Moon />
      </label>
    </div>
  )
}

export default DarkMode
