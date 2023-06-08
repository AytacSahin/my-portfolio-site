import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const PersonalPageHeader = () => {

    const { t, i18n } = useTranslation()

    return (
        <div>
            <NavLink to="/personal-blog" className="text-[#3730A3] text-lg leading-7 font-medium bg-[#F5F5F5] w-36 h-12 border-2 border-[#3730A3] hover:bg-[#3730A3] hover:text-[#FFFFFF] rounded-md inline-flex items-center dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-[#000000] mr-2 mb-2 px-9">
                {t('contact')}
            </NavLink>
        </div>
    )
}

export default PersonalPageHeader