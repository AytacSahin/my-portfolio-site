import React from 'react'
import { useTranslation } from 'react-i18next'
import { skillsDataEN, skillsDataTR } from '../sources/data/skillsData'

const Skills = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className='text-left'>
            <div>
                <h2 className='text-[#1F2937] text-5xl leading-none font-semibold dark:text-[#AEBCCF]'>{t("skills")}</h2>
                <div className='flex justify-between'>

                    { (i18n.language === "tr" ? skillsDataEN : skillsDataTR)
                    .map((item, index) => (
                        <div key={index} className='w-[30%] mb-10'>
                            <h3 className='text-[#4338CA] text-3xl leading-7 font-medium mt-8 dark:text-[#B7AAFF]'>{item.title}</h3>
                            <h4 className='text-[#6B7280] text-xs leading-4 font-normal mt-8 dark:text-[#FFFFFF]'>{item.description}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills