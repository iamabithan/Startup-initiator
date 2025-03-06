import React from 'react'
import NavBar from './NavBar'
import Homepage from '../pages/Homepage'
import Services from '../pages/Services'
import Startups from '../pages/Startups'
import CommingSoon from '../pages/CommingSoon'
import Investers from '../pages/Investers'
import JoinCommunity from '../pages/JoinCommunity'
import QandA from '../pages/QandA'
import Footer from '../pages/Footer'

const Layout = () => {
  return (
    <div >
      <NavBar />
      <Homepage />
      <Services />
      <Startups />
      <CommingSoon />
      <Investers />
      <JoinCommunity />
      <QandA />
      <Footer />
    </div>
  )
}

export default Layout
