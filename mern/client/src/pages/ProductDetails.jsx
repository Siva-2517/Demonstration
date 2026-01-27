import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const prods=[
        {id:1,name:"Laptop ",description:"Mac Laptop",price:"80000"},
        {id:2,name:"Mobile ",description:"OnePlus +",price:"30000"},
        {id:3,name:"Tablet ",description:"Mac Tablet",price:"60000"},
        {id:4,name:"Airpods ",description:" Apple Airpods",price:"25000"}
    ];
    const {id}=useParams();
    const prod=prods.find((p)=>p.id===Number(id))

  return (
    <div>
      <h1>Product DEtails</h1>
      <h2>{prod.name}</h2>
      <p>Price:{prod.price}</p>
      <p>{prod.description}</p>
    </div>

  )
}

export default ProductDetails