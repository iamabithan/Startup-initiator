import React from "react";
import "./StartupCard.css";

const StartupCard = ({ image, platform, name, rating, reviews, revenue, investors, minInvestment }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <p className="category">Startup</p>
        <h2 className="title">{name}</h2>
        <div className="rating">
          <span className="rating-value">{rating}</span>
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="reviews">({reviews})</span>
        </div>
        <p className="description">Doubled Revenue YoY in the First Half of...</p>
        <div className="stats">
          <div className="stat">
            <p className="stat-value">${revenue}M</p>
            <p className="stat-label">Raised</p>
          </div>
          <div className="stat">
            <p className="stat-value">{investors}</p>
            <p className="stat-label">Investors</p>
          </div>
          <div className="stat">
            <p className="stat-value">{minInvestment}</p>
            <p className="stat-label">Min. Investment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;