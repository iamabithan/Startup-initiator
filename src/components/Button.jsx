import React from "react";
import "./Button.css";

const Button = ({ text, isLoading, onClick, className = "", style = {} }) => {
  return (
    <button 
      className={`custom-button ${className}`} 
      onClick={onClick} 
      disabled={isLoading} 
      style={style}
    >
      {isLoading ? <span className="loader"></span> : text}
    </button>
  );
};

export default Button;
