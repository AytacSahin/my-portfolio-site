import React from 'react'
import headerImage from '../sources/images/header/headerImage.png'
import HeaderButtons from '../sources/buttons/HeaderButtons'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const { t, i18n } = useTranslation()

  return (
    <div className='mt-20 mb-20 flex flex-row justify-between lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col'>

      <div className='mr-8 flex flex-col justify-between items-start lg:mr-8 lg:text-left md:text-center md:mx-auto md:mb-5 sm:w-[90%] sm:text-center sm:mx-auto sm:mb-5 max-[640px]:text-center max-[640px]:mx-auto max-[640px]:mb-5 max-[640px]:w-[90%]'>

        <div className='flex flex-row mb-8 mx-0 lg:mx-0 md:mx-auto sm:mx-auto max-[640px]:mx-auto sm:flex-row max-[640px]:flex-col-reverse'>
          <div className='flex-col'>
            <div className='w-32 h-3.5 '>
            </div>
            <div className='w-32 h-3.5 border-t-2 border-[#3730A3] dark:border-[#BAB2E7]'>
            </div>
          </div>
          <div>
            <h4 className='text-[#4338CA] text-xl leading-7 font-medium pl-4 dark:text-[#B7AAFF] sm:pl-4 max-[640px]:pl-0'>{t('aytac_sahin')}</h4>
          </div>
        </div>

        <h1 className='text-[#1F2937] text-8xl leading-none font-bold dark:text-[#AEBCCF] mb-6 lg:text-7xl md:text-6xl sm:text-5xl max-[640px]:text-4xl'>{t('promotional_text')}</h1>
        <p className='text-[#6B7280] text-lg leading-7 font-normal dark:text-[#FFFFFF] mb-6'>{t('about_me')}</p>

        <div className='mx-0 lg:mx-0 md:mx-auto sm:mx-auto max-[640px]:mx-auto'>
          <HeaderButtons />
        </div>

      </div>

      <div className='w-[65%] drop-shadow-2xl dark:drop-shadow-none m-auto mr-0 lg:mr-0 md:mr-auto sm:mr-auto max-[640px]:mr-auto'>
        <img className='border-[#252128] mt-4 mb-4 border-8 rounded-3xl dark:border-[#AEBCCF] lg:md-auto md:m-auto' src={headerImage} alt="profile_picture"></img>
      </div>

    </div>
  )
}

export default Header