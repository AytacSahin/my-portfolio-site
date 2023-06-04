import React from 'react'
import { ProjectsData } from '../sources/data/ProjectsData'

const Projects = () => {

    return (
        <div className='text-left'>
            <div>
                <h2>Projects</h2>
                <div className='flex justify-between flex-wrap'>

                    {ProjectsData().map((item, index) => (
                        <div key={index} className='abilities_card'>
                            <div className='flex justify-start flex-col flex-wrap w-96'>
                                <img className='rounded-lg' src={item.img} alt="project_picture"></img>
                                <h3>{item.title}</h3>
                                <h4>{item.description}</h4>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

        </div>

    )
}

export default Projects