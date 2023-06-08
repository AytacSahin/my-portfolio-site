import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const PersonalPageHeader = () => {

    const { t } = useTranslation()

    return (
        <div>
            <NavLink to="/" className="text-[#3730A3] text-lg leading-7 font-medium bg-[#F5F5F5] w-48 h-12 border-2 border-[#3730A3] hover:bg-[#3730A3] hover:text-[#FFFFFF] rounded-md inline-flex items-center dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-[#000000] mr-2 mb-2 px-7">
                🔙{" "}{t('main_page')}
            </NavLink>
        </div>
    )
}

export default PersonalPageHeader