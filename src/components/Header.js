import React from 'react'
import headerImage from '../sources/images/header/headerImage.png'
import HeaderButtons from '../sources/buttons/HeaderButtons'

const Header = () => {
  return (
    <div className=' flex flex-row justify-between'>

      <div className='text-left'>
        <h4>----------Aytaç Şahin</h4>
        <h1>Creative thinker Minimalism lover</h1>
        <p>Hi, I'm Aytac Sahin. I'm a full stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with graeat user experiences. Let's shake hands with me.</p>

        <div>
          <HeaderButtons />
        </div>

      </div>

      <div>
        <img className='rounded-lg' src={headerImage} alt="profile_picture"></img>
      </div>

    </div>
  )
}

export default Header