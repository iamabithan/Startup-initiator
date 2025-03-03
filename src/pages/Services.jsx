import React from "react";
import "./Service.css";
import Button from "../components/Button";
import SpotlightCard from "../components/Animations/SpotlightCard";
import Automation from "../assets/icons/automation.svg";
import Autorenew from "../assets/icons/autorenew.svg";
import Cast from "../assets/icons/cast.svg";
import Group from "../assets/icons/group.svg";
import VitalSigns from "../assets/icons/vital_signs.svg";
import Web from "../assets/icons/web.svg";

const Services = () => {
  const serviceData = [
    {
      title: "Funding Progress Tracker",
      description: "Manage investor outreach, track funding milestones, and automate follow-ups.",
      icon: VitalSigns,
    },
    {
      title: "AI powered Pitch Analyzer",
      description: "Receive instant Feedback on your Pitch deck to maximize investor interest.. ",
      icon: Web,
    },
    {
      title: "Networking Hub",
      description: "Build valuable connections with investors, mentors, and startup founders.",
      icon: Automation,
    },
    {
      title: "Smart Investor Matching",
      description: "Connect with the right investors based on funding stage, industry and startup potential.",
      icon: Group,
    },
    {
      title: "24/7 Virtual AI  Mentor",
      description: "Get expert Guidance on fundraising, scaling, and startup challenges anytime.",
      icon: Autorenew,
    },
    {
      title: "Personalized Responses",
      description: "Personalization makes your interactions more engaging and tailored to your unique needs.",
      icon: Cast,
    },
    
    
  ];

  return (
    <div className="service-page">
      <div className="service-header">
        <Button
          text={"Get Started"}
          style={{ height: "28px", fontSize: "12px" }}
        />
        <a className="service-title">
          Revolutionizing Startup Success with AI - Driven Insights
        </a>
        <a id="tagline">Find Investors, Improve Pitches and scale with AI </a>
      </div>
      <div className="card-section">
        <div className="card-grid">
          {serviceData.map((service, index) => (
            <SpotlightCard key={index} className="service-card">
              <div className="icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p className="description">{service.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
