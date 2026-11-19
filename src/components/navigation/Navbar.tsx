
import { useEffect, useState } from "react";

import {
  Code2,
  Mail,
  Palette,
  Sun,
  Moon,
  FileText,
} from "lucide-react";

import "./Navbar.css";

type Theme = "light" | "dark";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Work", href: "#work" },
  { label: "Praise", href: "#praise" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const root = document.documentElement;

    root.classList.add("theme-transition");

    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );

    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 400);
  };

  return (
    <nav className="main-navbar">

      {/* Brand */}
      <a href="#home" className="navbar-brand">
        <Code2 size={27} strokeWidth={2.5} />
        <span>Nandagopal V</span>
      </a>

      {/* Navigation Links */}
      <div className="navbar-links">
        {navigationItems.map((item) => (
          <a
            href={item.href}
            key={item.label}
            className={`nav-item ${item.label === "Home" ? "active" : ""
              }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Theme Toggle */}
      <button
        type="button"
        className="navbar-theme-button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"
          } theme`}
        title={`Switch to ${theme === "light" ? "dark" : "light"
          } theme`}
      >
        <Palette className="theme-palette-icon" size={17} />

        {theme === "light" ? (
          <Moon className="theme-state-icon" size={14} />
        ) : (
          <Sun className="theme-state-icon" size={14} />
        )}
      </button>

      {/* Resume and Hire Me */}
      <div className="navbar-actions">

        <a
          href="/resume (4).pdf"
          download="V-Nandagopal-Resume.pdf"
          className="navbar-resume-button"
        >
          <FileText size={16} />
          <span>Resume</span>
        </a>

        <a href="#contact" className="navbar-hire-button">
          <Mail size={16} />
          <span>Hire Me</span>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
