import { useState } from 'react';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';


const UserDetails = () => {
    const {id}=useParams();
    const [user,setUser]=useState({})
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/users/${id}`)
     .then(response => response.json())
     .then(data => setUser(data));
    })
  return (
    <div>
      <h1>User Details</h1>
      <h2>UserId : {user.id}</h2>
      <p>User Name : {user.username}</p>
      <p>User Email : {user.email}</p>
      <p>User Password : {user.password}</p>
    </div>

  )
}

export default UserDetails