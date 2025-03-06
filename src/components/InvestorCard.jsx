import React from "react";
import "./InvesterCard.css";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


const InvesterCard = ({ image, name, role, description, twitter, linkedin }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="profile-img" />
      <h3 className="name">{name}</h3>
      <p className="role">{role}</p>
      <p className="description">{description}</p>
      <div className="social-links">
        {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer"><FaSquareTwitter style={{color:'#ccc'}}/></a>}
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><RiInstagramFill style={{color:'#ccc'}}/></a>}
      </div>
    </div>
  );
};

export default InvesterCard;
