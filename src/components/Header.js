import React from 'react'
import headerImage from '../sources/images/headerImage.png'

const Header = () => {
  return (
    <div>

      <div className='header_left'>
        <h4>Aytaç Şahin</h4>
        <h1>Creative thinker Minimalism lover</h1>
        <h4>Hi, I'm Aytac Sahin. I'm a full stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with graeat user experiences. Let's shake hands with me.</h4>
      </div>

      <div className='header_left_links'>
        <span >Hire me</span>
        <button href="https://github.com/AytacSahin">Github</button>
        <button href="https://www.linkedin.com/in/ayta%C3%A7-%C5%9Fahin-686877146/">Linkedin</button>
      </div>

      <div className='header_right'>
        <img src={headerImage} alt="profile_picture"></img>
      </div>

    </div>
  )
}

export default Header