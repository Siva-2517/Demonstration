import React from 'react'
import { useState } from 'react'
const State = () => {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)

  return (
    <>
    <div>
      <h1>useState example</h1>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
    <div>
        <h1>Like button</h1>
        <h2>❤️:{like}</h2>
        <button onClick={() => setLike(like + 1)}>Like</button>
        <h2>🤍:{dislike}</h2>
        <button onClick={() => setDislike(dislike + 1)}>Dislike</button>
      </div>
      </>
  )
}

export default State