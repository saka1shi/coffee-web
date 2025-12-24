import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showAd, setShowAd] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { to: "/menu", text: "Menu" },
    { to: "/locations", text: "Locations" },
    { to: "/about", text: "About Us" },
    { to: "/news", text: "News" }
  ];

  return (
    <div>
      {showAd && (
        <div className="advertising">
          <p>Buy one coffee, get one free — this week only (April 14–20)</p>
          <svg
            onClick={() => setShowAd(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="close-btn"
          >
            <path d="M2 2l12 12M14 2L2 14" stroke="black" strokeWidth="2" />
          </svg>
        </div>
      )}

      <div className="head">
        <div className="container">
          <div className="main">
            <img 
              src="/Logo.png" 
              alt="logo" 
              className="mobile-logo"
            />
             
            <nav>
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
              <Link className="nav-link" to="/locations">
                Locations
              </Link>
              <span className="desktop-logo-container">
                <a href="/Hero"><img src="/Logo.png" alt="logo" /></a>
              </span>
              <Link className="nav-link" to="/about">
                About Us
              </Link>
              <Link className="nav-link" to="/news">
                News
              </Link>
            </nav>

            <div
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <img 
                src="/Icon Button.svg" 
                alt="Open menu" 
                className={`burger-icon ${menuOpen ? "hidden" : ""}`}
              />
              <img 
                src="/Icon close button.svg" 
                alt="Close menu" 
                className={`close-icon ${!menuOpen ? "hidden" : ""}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <Link 
            key={item.to}
            onClick={closeMenu} 
            to={item.to}
            className="menu-item"
            style={{
              '--delay': `${index * 0.1}s`,
              animationDelay: `${index * 0.1}s`
            }}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;