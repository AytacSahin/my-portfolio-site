import React from 'react'

const navLinkBarButtons = ["Skills", "Projects", "Hire me"]

const NavLinkBar = () => {
  return (
    <div className='flex justify-between items-center'>

      <div>
        <h2 className='text-[#7B61FF] rounded-full bg-[#EEEBFF] w-16 h-16 text-center rotate-45 flex justify-center items-center'>A</h2>
      </div>

      <div className='flex gap-20'>

        {navLinkBarButtons.map((item, index) => (
          <button key={index} type="button" className='w-32 h-12 text-lg font-medium border-2 border-[#F5F5F5] rounded-lg text-[#6B7280] hover:border-[#3730A3] dark:border-[#252128] dark:hover:bg-[#EEEBFF] dark:hover:border-[#3730A3]'>
            {item}
          </button>
        ))}

      </div>

    </div>
  )
}

export default NavLinkBar