import React from 'react'

const Profile = () => {
  return (
    <div className='text-left'>

      <div >
        <h2>Profile</h2>
      </div>

      <div className='flex'>

        <div>
          <h3>Profile</h3>
          <div className='flex'>
            <div >
              <h4>Birth Date</h4>
              <h4>City</h4>
              <h4>Education</h4>
              <h4>Role</h4>
            </div>
            <div className='pl-5'>
              <h4>03.07.1991</h4>
              <h4>Istanbul</h4>
              <h4>Yildiz Technical University</h4>
              <h4>Frontend Developer</h4>
            </div>
          </div>
        </div>

        <div className='pl-5'>
          <h3>About Me</h3>
          <p>Hi, I'm Aytac Sahin. I'm a full stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with graeat user experiences. Let's shake hands with me.</p>
          <br />
          <p>Hi, I'm Aytac Sahin. I'm a full stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with graeat user experiences. Let's shake hands with me.</p>
        </div>

      </div>
    </div>
  )
}

export default Profile