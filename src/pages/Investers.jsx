import React from "react";
import InvesterCard from "../components/InvestorCard";
import "./Invester.css";
import { FaSquareTwitter } from "react-icons/fa6";
import avatar1 from "../assets/images/Avatar.png";
import avatar2 from "../assets/images/Avatar (1).png";
import avatar3 from "../assets/images/Avatar (2).png";
import avatar4 from "../assets/images/Avatar (3).png";

const investorsData = [
  {
    image: avatar1,
    name: "Theresa Webb",
    role: "Application Support Analyst Lead",
    description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    twitter: <FaSquareTwitter />,
    linkedin: "https://linkedin.com/in/example",
  },
  {
    image: avatar2,
    name: "Marvin McKinney",
    role: "Software Engineer",
    description: "Ex-Google, Founder at StartupX.",
    twitter: "https://twitter.com/example",
    linkedin: "https://linkedin.com/in/example",
  },
  {
    image: avatar3,
    name: "Leslie Alexander",
    role: "Product Manager",
    description: "Angel investor and mentor at TechStars.",
    twitter: "https://twitter.com/example",
    linkedin: "https://linkedin.com/in/example",
  },
  {
    image: avatar4,
    name: "Floyd Miles",
    role: "CTO at ABC Tech",
    description: "Tech enthusiast and AI researcher.",
    twitter: "https://twitter.com/example",
    linkedin: "https://linkedin.com/in/example",
  },
];

const Investers = () => {
  return (
    <div className="investers-container">
      <div className="inverster-header">
        <span className="header-mini">Investors</span>
        <span className="header-header">Our Investors</span>
      </div>
      <div className="investers-row">
        {investorsData.map((investor, index) => (
          <InvesterCard
            key={index}
            image={investor.image}
            name={investor.name}
            role={investor.role}
            description={investor.description}
            twitter={investor.twitter}
            linkedin={investor.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default Investers;
