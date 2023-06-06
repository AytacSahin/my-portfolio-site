import React from 'react'

const profileElements = [
  { "Birth Date": "03.07.1991" },
  { "City": "Istanbul" },
  { "Education": "Yildiz Technical University" },
  { "Role": "Frontend Developer" },
]

const Profile = () => {

  return (
    <div className='mt-10'>

      <div >
        <h2 className='text-[#1F2937] text-5xl leading-none font-semibold dark:text-[#AEBCCF]'>Profile</h2>
      </div>

      <div className='flex mb-10 mr-16'>

        <div>
          <h3 className='text-[#4338CA] text-3xl leading-7 font-medium mt-8 dark:text-[#B7AAFF] mb-6'>Profile</h3>

          <div className='flex flex-col w-80'>
            {profileElements.map((item, index) => (
              <div key={index}>
                <div className='flex pb-2'>
                  <h4 className='w-[40%] font-semibold text-[#000000] dark:text-[#FFFFFF] '>{Object.keys(item)[0]}</h4>
                  <h4 className='text-[#000000] dark:text-[#FFFFFF] '>{Object.values(item)[0]}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className='pl-5'>
          <h3 className='text-[#4338CA] text-3xl leading-7 font-medium mt-8 dark:text-[#B7AAFF] mb-6'>About Me</h3>

          <p className='text-[#6B7280] dark:text-[#FFFFFF]'>Hi, I'm Aytac Sahin. I'm a full stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with graeat user experiences. Let's shake hands with me.</p>

          <br />

          <p className='text-[#6B7280] dark:text-[#FFFFFF]'>Hi, I'm Aytac Sahin. I'm a full stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with graeat user experiences. Let's shake hands with me.</p>

        </div>

      </div>
    </div >
  )
}

export default Profile