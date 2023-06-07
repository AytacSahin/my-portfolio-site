import React from 'react'
import headerImage from '../sources/images/header/headerImage.png'
import HeaderButtons from '../sources/buttons/HeaderButtons'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const { t, i18n } = useTranslation()

  return (
    <div className='mt-20 mb-20 flex justify-between 2xl:bg-blue-500 xl:bg-green-600 lg:bg-orange-600 md:bg-yellow-500 sm:bg-fuchsia-500'>

      <div className='w-[60%] pr-20 flex flex-col justify-between items-start'>

        <div className='flex flex-row mb-8'>
          <div className='flex-col'>
            <div className='w-32 h-3.5 '>
            </div>
            <div className='w-32 h-3.5 border-t-2 border-[#3730A3] dark:border-[#BAB2E7]'>
            </div>
          </div>
          <div>
            <h4 className='text-[#4338CA] text-xl leading-7 font-medium pl-4 dark:text-[#B7AAFF]'>{t('aytac_sahin')}</h4>
          </div>
        </div>

        <h1 className='text-[#1F2937] text-7xl leading-none font-bold dark:text-[#AEBCCF] mb-6 lg:text-5xl'>{t('promotional_text')}</h1>
        <p className='text-[#6B7280] text-lg leading-7 font-normal dark:text-[#FFFFFF] mb-6'>{t('about_me')}</p>

        <div>
          <HeaderButtons />
        </div>

      </div>

      <div className='drop-shadow-2xl dark:drop-shadow-none m-auto mr-0'>
        <img className='border-[#252128] border-8 rounded-3xl dark:border-[#AEBCCF]' src={headerImage} alt="profile_picture"></img>
      </div>

    </div>
  )
}

export default Header