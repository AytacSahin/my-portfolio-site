import React from 'react'
import { projectsData } from '../sources/data/projectsData'

const Projects = () => {

    return (
        <div className='mt-10'>
            <div>
                <h2 className='text-[#1F2937] text-5xl leading-none font-semibold dark:text-[#AEBCCF] mb-8'>Projects</h2>
                <div className='flex flex-wrap'>
                    {projectsData.map((item, index) => (

                        <div key={index} className='w-[20rem] mx-auto'>

                            <div className='mb-8'>
                                <img src={item.img} alt="project_picture"></img>
                                <h3 className='text-[#4338CA] text-3xl leading-7 font-medium mt-8 dark:text-[#B7AAFF] mb-6'>{item.title}</h3>
                                <h4 className='text-[#6B7280] text-sm leading-tight font-normal dark:text-[#FFFFFF] mb-6'>{item.description}</h4>
                            </div>

                            <div className='mb-4 flex'>
                                {item.methodsofproject.map((item, index) => (
                                    <span key={index} className='text-[#3730A3] border-2 border-solid rounded-md border-[#3730A3] p-2 mr-4 dark:text-[#8F88FF] dark:border-[#8F88FF dark:bg-[#383838]'>
                                        {item}
                                    </span>
                                ))}
                            </div>
                         
                            <div className='flex justify-between mb-10 underline text-[#3730A3] dark:text-[#E1E1FF]'>
                                <a href={item.githubLink}>Github</a>
                                <a href={item.deployLink}>View Site</a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Projects