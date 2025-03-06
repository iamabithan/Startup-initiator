"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import "./FAQ.css";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-box">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`faq-item ${
              index !== faqs.length - 1 ? "border-bottom" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <div className="faq-button-container">
              <button className={`faq-button ${activeIndex === index ? 'active' : ''}`}>
                <Plus
                  className={`faq-icon ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                />
                {faq.title}
              </button>
            
            <AnimatePresence mode="sync">
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.14 }}
                  className="faq-content open"
                >
                  <p>{faq.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
