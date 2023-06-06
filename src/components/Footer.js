import React from 'react'

const Footer = () => {
  return (
    <div>

      <div>
        <h2 className='w-[50%] text-[#1F2937] text-5xl leading-none font-semibold dark:text-[#AEBCCF] pt-28 pb-20'>Lets work together on your next product.</h2>
      </div>

      <div className='flex justify-between pb-28'>
        <div>
          <span>👉</span>
          <a className='text-[#AF0C48] text-xl leading-6 font-normal underline dark:text-[#BAB2E7]' href="mailto:haytacsahin@gmail.com">haytacsahin@gmail.com</a>
        </div>
        <div >
          <a className='ml-5 text-[#0A0A14] dark:text-[#E1E1FF]' href="https://www.google.com/maps">Personal Blog</a>
          <a className='ml-5 text-[#00AB6B] dark:text-[#17D18B]' href="https://github.com/AytacSahin">Github</a>
          <a className='ml-5 text-[#0077B5] dark:text-[#0BA6F6]' href="https://www.linkedin.com/in/ayta%C3%A7-%C5%9Fahin-686877146/">Linkedin</a>
        </div>
      </div>

    </div>
  )
}

export default Footer