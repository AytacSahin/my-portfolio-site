import React from 'react'
import { skillsData } from '../sources/data/skillsData'

const Skills = () => {

    return (
        <div className='text-left'>
            <div>
                <h2 className='text-[#1F2937] text-5xl leading-none font-semibold dark:text-[#AEBCCF]'>Skills</h2>
                <div className='flex justify-between'>

                    {skillsData.map((item, index) => (
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