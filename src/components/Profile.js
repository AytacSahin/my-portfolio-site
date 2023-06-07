import React from 'react'
import { useTranslation } from 'react-i18next'
import { profileElementsEn, profileElementsTr } from '../sources/data/profileData'

const Profile = () => {

  const { t, i18n } = useTranslation()

  return (
    <div className='mt-10'>
      <div >
        <h2 className='text-[#1F2937] text-5xl leading-none font-semibold dark:text-[#AEBCCF]'>{t("profile")}</h2>
      </div>
      <div className='flex flex-row mb-10 mr-16 lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col'>
        <div>
          <h3 className='text-[#4338CA] text-3xl leading-7 font-medium mt-8 dark:text-[#B7AAFF] mb-6'>{t("profile")}</h3>
          <div className='flex flex-col w-80 lg:w-80 md:w-auto sm:w-auto max-[640px]:w-auto'>
            {(i18n.language === "tr" ? profileElementsEn : profileElementsTr)
              .map((item, index) => (
                <div key={index}>
                  <div className='flex pb-2'>
                    <h4 className='w-[40rem] font-semibold text-[#000000] dark:text-[#FFFFFF] '>{Object.keys(item)[0]}</h4>
                    <h4 className='text-[#000000] dark:text-[#FFFFFF] w-[30rem]'>{Object.values(item)[0]}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className='pl-5 lg:pl-5 md:pl-0 sm:pl-0 max-[640px]:pl-0'>
          <h3 className='text-[#4338CA] text-3xl leading-7 font-medium mt-8 dark:text-[#B7AAFF] mb-6'>{t("about_header")}</h3>
          <p className='text-[#6B7280] dark:text-[#FFFFFF]'>{t("about_text_one")}</p>
          <br />
          <p className='text-[#6B7280] dark:text-[#FFFFFF]'>{t("about_text_two")}</p>
        </div>
      </div>
    </div >
  )
}

export default Profile