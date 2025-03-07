import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Button.css";

const Button = ({ text, isLoading, className = "", style = {} }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = () => {
    if (!isLoading) {
      navigate("/chat");
    }
  };

  return (
    <button 
      className={`custom-button ${className}`} 
      onClick={handleClick} 
      disabled={isLoading} 
      style={style}
    >
      {isLoading ? <span className="loader"></span> : text}
    </button>
  );
};

export default Button;
