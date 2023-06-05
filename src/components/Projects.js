import React from 'react'
import { ProjectsData } from '../sources/data/ProjectsData'

const Projects = () => {

    return (
        <div className='text-left w-full'>
            <div>
                <h2>Projects</h2>
                <div className='flex flex-row flex-wrap justify-between'>
                    {ProjectsData().map((item, index) => (
                        <div key={index} className=' w-[400px] bg-[#F5F5F5]'>
                            <div className='mb-4'>
                                <img src={item.img} alt="project_picture"></img>
                                <h3>{item.title}</h3>
                                <h4>{item.description}</h4>
                            </div>

                            <div className='mb-4'>
                                {item.methodsofproject.map((item, index) => (
                                    <span key={index} className='border-2 border-solid border-black rounded-l p-2 mr-4'>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects