import React from 'react'
import { AbilitiesData } from '../sources/data/AbilitiesData'

const Abilities = () => {

    const data = AbilitiesData()

    return (
        <div>
            <h2>Skills</h2>
            {data.map((item, index) => (
                <div key={index} className='abilities_card'>
                    <h3>{item.title}</h3>
                    <h4>{item.description}</h4>
                </div>
            ))}
        </div>
    )
}

export default Abilities