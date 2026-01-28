import { useState } from 'react';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  // const prods=[
  //       {id:1,name:"Laptop ",description:"Mac Laptop",price:"80000"},
  //       {id:2,name:"Mobile ",description:"OnePlus +",price:"30000"},
  //       {id:3,name:"Tablet ",description:"Mac Tablet",price:"60000"},
  //       {id:4,name:"Airpods ",description:" Apple Airpods",price:"25000"}
  //   ];
  //const prod=prods.find((p)=>p.id===Number(id))

    const {id}=useParams();
    const [prod,setProd]=useState({})
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${id}`)
     .then(response => response.json())
     .then(data => setProd(data));
    })

  return (
    <div>
      <h1>Product Details</h1>
      <h2>Title : {prod.title}</h2>
      <p>Price : {prod.price}</p>
      <p>Description : {prod.description}</p>
      <p>category : {prod.category}</p>
    </div>

  )
}

export default ProductDetails