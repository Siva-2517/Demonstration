import React from 'react'
import { useState } from 'react'

const State = () => {
    const [c,setC]=useState(0)
    const [li,setLi]=useState(0)
    const [dli,setDli]=useState(0)
  return (
    <div>
        <h3>UseState example</h3>
        <h3>Count : {c}</h3>
        <button onClick={()=>setC(c+1)}>Increment</button>
        <h3>Like Button</h3>
        <h3>❤️:{li}</h3>
        <button onClick={()=>setLi(li+1)}>Like</button>
        <h3>Dis-Like Button</h3>
        <h3>🖤:{dli}</h3>
        <button onClick={()=>setDli(dli+1)}>Dis-Like</button>
    </div>
  )
}

export default State