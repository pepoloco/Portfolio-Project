import React from 'react'
import Typed from 'react-typed'
const Header = () => {
  return (
    <div className='header-wrap'>
      <div className="main-info">
        <h1>Currently learning</h1>
        <Typed
          className='typed-text' strings={["JAVASCRIPT", "HTML & CSS", "REACT", "BOOTSTRAP"]}
          typeSpeed={40}
          backSpeed={30}
          loop />
      </div>
    </div>
  )
}

export default Header