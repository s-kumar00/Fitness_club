import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="cointainer main__header-container">
        <div className="main__header-left">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
        <div className="main__header-right">
          <h4>NO <span>PAIN</span> <p>NO <span>GAIN</span></p></h4>
          <h3>SORE TODAY <p>STRONG TOMORROW</p></h3>
          <h1>BEING FIT IS THE NEW SEXY IN THIS CENTURY.</h1>
          <Link to="/plans" className='btn'>get started</Link>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
