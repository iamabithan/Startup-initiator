import React from 'react'
import './Startups.css'
import StartupCard from '../components/StartupCard'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
const Startups = () => {
  return (
    <div>
      <div className='startup-header'>
        <a style={{fontSize:'16px',fontWeight:'semi-bold', color:'#A7A0F8'}}>Startup Programs</a>
        <a style={{fontSize:'36px',fontWeight:'semi-bold'}}>Startup Programs</a>
        <a style={{fontSize:'20px',fontWeight:'normal',color:'#667085'}}>Offerings that have raised the most money in the last few days</a>
      </div>
      <div className='startup-card-section'>
      <StartupCard
        image={image1}
        platform="startengine"
        name="Zepto"
        rating="4.3"
        reviews="16,325"
        revenue="6.25"
        investors="2695"
        minInvestment="500"
      />
      <StartupCard
        image={image2}
        platform="startengine"
        name="Ola Electric"
        rating="4.3"
        reviews="16,325"
        revenue="6.25"
        investors="2695"
        minInvestment="500"
      />
      <StartupCard
        image={image3}
        platform="startengine"
        name="Swiggy"
        rating="4.3"
        reviews="16,325"
        revenue="6.25"
        investors="2695"
        minInvestment="500"
      />
      </div>
    </div>
  )
}

export default Startups
