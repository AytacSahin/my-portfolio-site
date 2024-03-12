import React from 'react'
import { useTranslation } from 'react-i18next'
import { personalPageDataEn, personalPageDataTr } from '../sources/data/personalPageData'
import PersonalPageHeader from './PersonalPageHeader'

const PersonalPage = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className='mb-20'>
            <PersonalPageHeader />
            <div className='flex flex-col items-center'>

                <h1 className='tracking-[15px] text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl max-[640px]:text-2xl max-[320px]:text-xl text-center mt-10 mb-10 text-[#1F2937] dark:text-[#AEBCCF]'>{t("blog_title")}</h1>

                <div className='flex flex-wrap justify-center gap-12'>
                    {(i18n.language === "tr" ? personalPageDataEn : personalPageDataTr)
                        .map((item, index) => (
                            <div key={index} className='max-[640px]:w-[300px] sm:w-[400px] flex flex-col shadow-2xl rounded-[20px] dark:bg-black'>

                                <div className='w-full max-[640px]:h-[300px] sm:h-[400px] mt-0 mr-8 lg:mr-8 md:mr-0 sm:mr-0 max-[640px]:mr-0 max-[320px]:mr-0 overflow-hidden'>
                                    <img src={item.image} className='w-full h-full object-cover text-[#1F2937] dark:text-[#AEBCCF] border-0 dark:border-[5px] dark:border-[#B7AAFF] rounded-[20px]' alt="blog_picture" />
                                </div>

                                <div className='p-6 text-center'>
                                    <div className='flex justify-end '>
                                        <h3 className='w-[8em] h-[3em] p-2 mt-[-50px] text-lg xl:text-base lg:text-base md:text-sm sm:text-sm max-[640px]:text-xs max-[320px]:text-xs text-black mb-2 rounded-2xl border-[#B7AAFF] border-[4px] bg-[#F9F9F9]'>{item.date}</h3>
                                    </div>
                                    <div>
                                        <h2 className='mb-4 text-3xl font-bold xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl max-[640px]:text-xl max-[320px]:text-base text-[#4338CA] dark:text-[#B7AAFF]'>{item.title}</h2>
                                    </div>
                                    <div>
                                        <h3 className='text-lg xl:text-base lg:text-base md:text-sm sm:text-sm max-[640px]:text-xs max-[320px]:text-xs text-[#1F2937] dark:text-[#AEBCCF]'>{item.description}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default PersonalPage