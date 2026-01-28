import React, {  useContext } from 'react'
import { userContext } from '../App';


const Profile = () => {
  // const name=useContext(userContext);
  // const age=useContext(userContext);
  // // const skills=useContext(userContext);
  const {name,age,skills}=useContext(userContext)

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