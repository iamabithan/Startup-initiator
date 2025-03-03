import React from 'react'
import NavBar from './NavBar'
import Homepage from '../pages/Homepage'
import Services from '../pages/Services'
import Startups from '../pages/Startups'
import CommingSoon from '../pages/CommingSoon'

const Layout = () => {
  return (
    <div >
      <NavBar />
      <Homepage />
      <Services />
      <Startups />
      <CommingSoon />
    </div>
  )
}

export default Layout
