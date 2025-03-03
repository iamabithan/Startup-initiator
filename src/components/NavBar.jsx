import React, { useState } from "react";
import logo from "../assets/icons/Logo.svg";
import "./NavBar.css";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="nav-bar">
       <div className="hamburger" onClick={() => setSidebarOpen(true)}>
        <Menu size={24} />
      </div>
      <img src={logo} className="logo" />

      {/* Desktop Menu */}
      <div className="button-container">
        <div>FAQ</div>
        <div>Pricing</div>
        <div>Support</div>
      </div>

      <Button text={"Get Started"} className="get-started-btn" />

      {/* Hamburger Icon for Mobile */}
     

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <motion.div 
          className="sidebar" 
          initial={{ x: "-100%" }} 
          animate={{ x: 0 }} 
          exit={{ x: "-100%" }} 
          transition={{ duration: 0.3 }}
        >
          <div className="sidebar-header">
            <img src={logo} className="sidebar-logo" />
            <X size={24} className="close-icon" onClick={() => setSidebarOpen(false)} />
          </div>

          <div className="sidebar-links">
            <div>FAQ</div>
            <div>Pricing</div>
            <div>Support</div>
            <Button text={"Get Started"} className="mobile-btn" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
