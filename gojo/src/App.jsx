import React from 'react'
import User from './components/User'

const App = () => {
  return (
    <div>
      App
      <User name="Siva" dept="IT" age={20} 
      skills={["Html", "Css", "Js", "Java", "MERN"]} />      
    </div>
  )
}

export default App

//rafce to create a component structure