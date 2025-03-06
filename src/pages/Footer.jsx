import React from "react";
import logo from "../assets/icons/Logo.svg"; // Adjust path based on your folder structure
import "./Footer.css"; // Import CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="BotBuzz Logo" className="logo-img" />
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Updates</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Pricing</h3>
            <ul>
              <li><a href="#">Basic Pricing Plan</a></li>
              <li><a href="#">Plus Pricing Plan</a></li>
              <li><a href="#">Teams Pricing Plan</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><a href="#">AI Personalities</a></li>
              <li><a href="#">Bot Buzz AI</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Others</h3>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>Copyright © 2025. All rights reserved</p>
        <div className="footer-buttons">
          <button className="footer-btn">Socials</button>
          <button className="footer-btn">BotBuzz Community</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
