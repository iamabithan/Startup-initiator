import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "./CommingSoon.css";
import StartupCard from "../components/StartupCard";
import image1 from "../assets/images/image1.png";
import Button from "../components/Button";

const startupData = [
  {
    image: image1,
    platform: "startengine",
    name: "Zepto",
    rating: "4.3",
    reviews: "16,325",
    revenue: "6.25",
    investors: "2695",
    minInvestment: "500",
  },
  {
    image: image1,
    platform: "startengine",
    name: "Ola Electric",
    rating: "4.3",
    reviews: "16,325",
    revenue: "6.25",
    investors: "2695",
    minInvestment: "500",
  },
  {
    image: image1,
    platform: "startengine",
    name: "Swiggy",
    rating: "4.3",
    reviews: "16,325",
    revenue: "6.25",
    investors: "2695",
    minInvestment: "500",
  },
  {
    image: image1,
    platform: "startengine",
    name: "Zomato",
    rating: "4.3",
    reviews: "16,325",
    revenue: "6.25",
    investors: "2695",
    minInvestment: "500",
  },
  {
    image: image1,
    platform: "startengine",
    name: "Tesla",
    rating: "4.3",
    reviews: "16,325",
    revenue: "6.25",
    investors: "2695",
    minInvestment: "500",
  },
  {
    image: image1,
    platform: "startengine",
    name: "SpaceX",
    rating: "4.3",
    reviews: "16,325",
    revenue: "6.25",
    investors: "2695",
    minInvestment: "500",
  },
];

const CommingSoon = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="comming-soon-header">
        <a style={{ fontSize: "36px", fontWeight: "semi-bold" }}>Coming soon</a>
        <a style={{ fontSize: "20px", fontWeight: "normal", color: "#667085" }}>
          Offerings that have raised the most money in the last few days
        </a>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="swiper-container"
      >
        {startupData.map((item, index) => (
          <SwiperSlide key={index}>
            <StartupCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="custom-pagination">
        {startupData.slice(0, 2).map((_, index) => (
          <motion.div
            key={index}
            className="dot"
            initial={{ width: 12, height: 12 }}
            animate={{
              width: activeIndex === index ? 30 : 12,
              height: 12,
              borderRadius: activeIndex === index ? 6 : 50,
              backgroundColor: activeIndex === index ? "#7468fc" : "#aaa",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="footer-container">
        <Button text={"Explore all startups"} style={{backgroundColor:'#7468fc'}}/>
      </div>

    </div>
  );
};

export default CommingSoon;
