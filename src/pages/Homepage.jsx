import React from 'react'
import './Homepage.css'
import image1 from '../assets/images/homepageImage.png'
import Button from '../components/Button'

const Homepage = () => {
  return (
    <div>
     
        <div className='hompage-header'>
            <a id='slogan'>Innovate. Connect. Fund -<a id='company-name'>AI Powered</a> <br></br> Success For Startups</a>
            <a id='tagline'>“The Smarter way to pitch, fund and scale your startup”</a>
            <Button text={"Start conversation for free"} style={{height:'48px', width:'280px'}}/>
            <img src={image1} alt="Home Page image" className='image1' />
        </div>
    </div>
  )
}

export default Homepage
