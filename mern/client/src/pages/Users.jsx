import { useState } from 'react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


const Users = () => {
  // const prods=[
  //       {id:1,name:"Laptop ",description:"Mac Laptop",price:"80000"},
  //       {id:2,name:"Mobile ",description:"OnePlus +",price:"30000"},
  //       {id:3,name:"Tablet ",description:"Mac Tablet",price:"60000"},
  //       {id:4,name:"Airpods ",description:" Apple Airpods",price:"25000"}
  //   ];
  //const prod=prods.find((p)=>p.id===Number(id))

    //const {id}=useParams();
    const [users,setUser]=useState([])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => setUser(data));
    })

  return (
    <div>
        <h1>Users Page</h1>
        {users.map((user)=>(
            <div key={user.id}>
                <h4>{user.username}</h4>
                <h5>${user.email}</h5>
                <Link to={`/user/${user.id}`}>View User Details</Link>
                </div>
        ))}
    </div>

  )
}

export default Users

  