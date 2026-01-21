import { useState, useEffect } from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

const Effect = () => {
  //when no dependency array is initislized, it runs on every render
  //when empty dependency array is initialized, it runs only once when component is mounted
  //when dependency array with variables is initialized, it runs when those variables change
  const [count, setCount] = useState(0)
  const [user,setUser]=useState([])

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    }
  })
  useEffect(() => {
    console.log(`From useeffect hook:${count}`);
  }, [count])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    
      .then((response) => response.json()
    )
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <h1>Useeffect example</h1>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h1>Users</h1>
      <ol>
      {user.map((usr)=>(
        <li>Name:{usr.name} Email:{usr.email}</li>
      ))}
      </ol>
    </>
  )
}

export default Effect