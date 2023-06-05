import React from 'react'
import { AbilitiesData } from '../sources/data/AbilitiesData'

const Skills = () => {

    const data = AbilitiesData()

    return (
        <div className='text-left'>
            <div>
                <h2 className='text-5xl leading-none font-semibold'>Skills</h2>
                <div className='flex justify-between'>

                    {data.map((item, index) => (
                        <div key={index} className='abilities_card'>
                            <h3 className='text-[#4338CA] text-5xl '>{item.title}</h3>
                            <h4>{item.description}</h4>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default Skills