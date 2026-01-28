import React from 'react'
import Profile from '../component/Profile'
import State from '../hooks/State'
import Form from '../hooks/Form'
import Parent from '../component/Parent'
import {Link } from 'react-router-dom'
import {useState} from 'react'
import {userContext} from '../App'

const Home = () => {
  const [user,setuser]=useState({
    name:"siva",
    age:20,
    skills:["Html","Css","Js","Java"]
  })
  return (
    <>
    <div>Welcome to the Home Page🏠</div> <br />
    <Parent />
    <userContext.Provider value={user}>
          <Profile    />
    </userContext.Provider>
    <Link to='/form'><button>Form</button></Link><br /> <br />
    <Link to='/state'><button>State</button></Link>
    <Link to='/reducer'><button>Reducer</button></Link>

    </>
  )
}
export default Home