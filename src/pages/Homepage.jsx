import React from 'react'
import NavBar from '../components/NavBar'
import './Homepage.css'
import image1 from '../assets/images/homepageImage.png'
import Button from '../components/Button'

const Homepage = () => {
  return (
    <div>
        <NavBar />
        <div className='hompage-header'>
            <a id='slogan'>Unlock The Power Of <a id='company-name'>BotBuzz AI</a> <br></br> With Smartest AI</a>
            <a id='tagline'>Your Personal AI, Tailored for Every Conversation, Anytime, Anywhere</a>
            <Button text={"Start conversation for free"} style={{height:'48px', width:'280px'}}/>
            <img src={image1} alt="Home Page image" className='image1' />
        </div>
    </div>
  )
}

export default Homepage
