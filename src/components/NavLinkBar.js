import React from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const NavLinkBar = () => {

  const { t } = useTranslation()

    return (
    <div className='flex justify-between items-center md:flex-row sm:flex-col sm:item-center max-[640px]:flex-col max-[640px]:items-center'>

      <div>
        <h2 id="animated-logo" className='animate-rotate text-[#7B61FF] text-2xl leading-8 font-semibold rounded-full bg-[#EEEBFF] w-16 h-16 text-center rotate-45 flex justify-center items-center dark:bg-[#4731D3] dark:text-[#8F88FF] '>A</h2>
      </div>

      <div className='flex justify-end w-[60%] gap-5 md:my-auto md:justify-end sm:w-full sm:mt-5 sm:justify-center max-[640px]:flex-col max-[640px]:w-full max-[640px]:items-center max-[640px]:gap-2 max-[640px]:mt-5'>

        <Link to="skilssLink" smooth={true} duration={700}>
          <button type="button" className='text-lg leading-7 font-medium w-36 h-12 border-2 border-[#F9F9F9] rounded-md text-[#6B7280] hover:border-[#3730A3] hover:text-[#3730A3] dark:border-[#252128] dark:hover:bg-[#FFFFFF] dark:hover:border-[#3730A3]'>
          {t('skills')}
          </button>
        </Link>

        <Link to="projectLink" smooth={true} duration={700}>
          <button type="button" className='text-lg leading-7 font-medium w-36 h-12 border-2 border-[#F9F9F9] rounded-md text-[#6B7280] hover:border-[#3730A3] hover:text-[#3730A3] dark:border-[#252128] dark:hover:bg-[#FFFFFF] dark:hover:border-[#3730A3]'>
          {t('projects')}
          </button>
        </Link>

        <a href="mailto:haytacsahin@gmail.com">
          <button href="mailto:haytacsahin@gmail.com" className='text-lg leading-7 font-medium w-36 h-12 border-2 border-[#F9F9F9] rounded-md text-[#6B7280] hover:border-[#3730A3] hover:text-[#3730A3] dark:border-[#252128] dark:hover:bg-[#FFFFFF] dark:hover:border-[#3730A3]'>
          {t('contact')}
          </button>
        </a>

      </div>

    </div>
  )
}

export default NavLinkBar