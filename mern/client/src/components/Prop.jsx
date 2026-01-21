import React from 'react'

const Prop = ({name,dept,age,skills}) => {
  return (
    <div>
      <h1>I am {name} from the {dept} and my age is {age}</h1>
      <h3>Skills:</h3>
      <ol>
        {skills.map((itr)=>(
            <li>{itr}</li>

        ))}

      </ol>
    </div>
  )
}

export default Prop