import React from 'react'
import Profile from '../component/Profile'
import State from '../hooks/State'
import Form from '../hooks/Form'
import Parent from '../component/Parent'

const Home = () => {
  return (
    <>
    <div>Welcome to the Home Page🏠</div> <br />
    <Parent />
    <Profile name="Siva" age={20} skills={["Html","Css","Js","Java"]} />
    <State />
    <Form />
    </>
  )
}
export default Home