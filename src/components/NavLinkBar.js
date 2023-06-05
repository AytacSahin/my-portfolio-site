import React from 'react'

const NavLinkBar = () => {
  return (
    <div className='navlink'>

      <div>
        <h2 className='text-[#7B61FF] rounded-full bg-[#EEEBFF] w-16 h-16 text-center rotate-45'>A</h2>
      </div>

      <div className='navlink_rigth'>
        <h4>Skills</h4>
        <h4 className='text-center text-gray-500'>Projects</h4>
        <h4>Hire me</h4>
      </div>

    </div>
  )
}

export default NavLinkBar