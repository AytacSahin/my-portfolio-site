import React from 'react'
import { useTranslation } from 'react-i18next'
import { projectsDataEn, projectsDataTr } from '../sources/data/projectsData.js'

const Projects = () => {

    const { t, i18n } = useTranslation()


    return (
        <div className='mt-10 pb-20'>
            <div>
                <h2 className='text-[#1F2937] text-5xl leading-none font-semibold dark:text-[#AEBCCF] mb-10'>{t("projects")}</h2>
                <div className='flex flex-wrap'>
                    {(i18n.language === "tr" ? projectsDataEn : projectsDataTr)

                        .map((item, index) => (

                            <div key={index} className='w-[20rem] h-[36rem] mx-auto flex flex-col justify-between mb-12 sm:w-[20rem] sm:h-[36rem] max-[640px]:w-[16rem] max-[640px]:h-[40rem]'>

                                <div className='mb-8'>
                                    <img className='w-[20rem] h-[14rem] object-fill' src={item.img} alt="project_picture"></img>
                                    <h3 className='text-[#4338CA] text-3xl leading-7 font-medium mt-8 dark:text-[#B7AAFF] mb-6'>{item.title}</h3>
                                    <h4 className='text-[#6B7280] text-sm leading-tight font-normal dark:text-[#FFFFFF]'>{item.description}</h4>
                                </div>

                                <div>
                                    <div className='mb-4 flex sm:flex-row max-[640px]:flex-col max-[640px]:gap-1'>
                                        {item.methodsofproject.map((item, index) => (
                                            <span key={index} className='text-[#3730A3] border-2 border-solid rounded-md border-[#3730A3] p-2 mr-4 dark:text-[#8F88FF] dark:border-[#8F88FF dark:bg-[#383838]'>
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    <div className='flex justify-between mb-4 underline text-[#3730A3] dark:text-[#E1E1FF]'>
                                        <a href={item.githubLink}>Github</a>
                                        <a href={item.deployLink}>{t("view_site")}</a>
                                    </div>
                                </div>

                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Projects