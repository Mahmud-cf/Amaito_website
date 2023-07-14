import React from 'react'
import Carousel from '../SmallComponent/Carousel'

function OurClient() {
  return (
    <div className='container-fluid our-client' >
        <div className="container">
        <div className="services-section-wrapper">
          <h1>Our Clients</h1>
          <div className="hr-icon"></div>
          <p>Our esteemed customers</p>
          <Carousel/>
        </div>
        </div>
    </div>
  )
}

export default OurClient