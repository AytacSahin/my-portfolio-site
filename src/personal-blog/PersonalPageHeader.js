import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import backicon from '../sources/svg/back.svg'

const PersonalPageHeader = () => {

    const { t } = useTranslation()

    return (
        <NavLink to="/" >
            <div id="goingontop" className='flex gap-6'>
                <img src={backicon} alt="Back Icon" className="scale-150" />
                <h5 className='max-[640px]:hidden visible text-xl text-[#1F2937] dark:text-[#AEBCCF]'>{t('main_page')}</h5>
            </div>
        </NavLink>
    )
}

export default PersonalPageHeader