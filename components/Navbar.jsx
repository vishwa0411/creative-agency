"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  function toggleTheme() {
    const newMode = !darkMode;
    setDarkMode(newMode);

    const theme = newMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">

      <div className="logo">
        Creative<span>Studio</span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <div className="nav-actions">

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

        <button
          className={`theme-switch ${darkMode ? "dark" : "light"}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <span className="switch-label">
            {darkMode ? "OFF" : "ON"}
          </span>

          <span className="switch-circle">
            {darkMode ? "🌙" : "☀"}
          </span>
        </button>

      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </nav>
  );
}