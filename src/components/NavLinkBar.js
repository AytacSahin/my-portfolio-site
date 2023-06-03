import React from 'react'

const NavLinkBar = () => {
  return (
    <div className='navlink'>

      <div className='navlink_left'>
        <h3 className='text-cyan-200 hover:text-red-600'>A</h3>
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