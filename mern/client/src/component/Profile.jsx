import React from 'react'

const Profile = ({name,age,skills}) => {
  return (
    <div>
       <h1>I am {name} and I am {age} years old.</h1>
       <ul>
        {skills.map((skill,index)=>{
         return <li key={index}>{skill}</li>
        })}
       </ul>
    </div>
  )
}

export default Profile