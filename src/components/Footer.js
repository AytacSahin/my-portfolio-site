import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

const Footer = () => {

  const { t } = useTranslation()

  return (
    <div>
      <div>
        <h2 className='w-[50%] text-[#1F2937] text-5xl leading-none font-semibold dark:text-[#AEBCCF] pt-28 pb-20 <lg:w-[70%] md:w-[80%] sm:w-[90%] max-[640px]:w-[95%] lg:text-4xl sm:text-3xl max-[640px]:text-2xl max-[320px]:text-xl'>{t("footer_descripton")}</h2>
      </div>

      <div className='flex justify-between pb-28 md:flex-row sm:flex-col max-[640px]:flex-col max-[320px]:flex-col'>
        <div>
          <span>👉</span>
          <a className='text-[#AF0C48] text-xl leading-6 font-normal underline dark:text-[#BAB2E7]' href="mailto:haytacsahin@gmail.com">haytacsahin@gmail.com</a>
        </div>
        <div className='text-[18px] leading-[150%] font-medium md:mt-0 sm:mt-5 max-[640px]:mt-5 max-[320px]:mt-5 sm:text-[18px] max-[640px]:text-[14px] max-[320px]:text-[10px]'>

          <Link to="top" smooth={true} duration={700}>
            <NavLink to="/personal-blog">
              <span className='ml-5 text-[#0A0A14] dark:text-[#E1E1FF]'>{t("personal_blog")}</span>
            </NavLink>
          </Link>

          <a className='ml-5 text-[#00AB6B] dark:text-[#17D18B]' href="https://github.com/AytacSahin">Github</a>
          <a className='ml-5 text-[#0077B5] dark:text-[#0BA6F6]' href="https://www.linkedin.com/in/ayta%C3%A7-%C5%9Fahin-686877146/">Linkedin</a>
        </div>
      </div>

    </div>
  )
}

export default Footer