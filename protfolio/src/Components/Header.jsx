import React from 'react'
import Typed from 'react-typed'
const Header = () => {
  return (
    <div className='header-wrap'>
      <div className="main-info">
        <h1>POOKIE SITE</h1>
        <Typed
          className='typed-text' strings={["WHAT", "HAHA"]}
          typeSpeed={40}
          backSpeed={30}
          loop />
        <a href='#' className='btn-main-offer'> contact me</a>
      </div>
    </div>
  )
}

export default Header