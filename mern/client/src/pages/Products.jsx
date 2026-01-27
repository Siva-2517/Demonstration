import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
    const prods=[
        {id:1,name:"Laptop ",price:"80000"},
        {id:2,name:"Mobile ",price:"30000"},
        {id:3,name:"Tablet ",price:"60000"},
        {id:4,name:"Airpods ",price:"25000"}
    ];
  return (
    <>
    <div>
        <h1>Products Page</h1>
        {prods.map((prod)=>(
            <div key={prod.id}>
                <h4>{prod.name}</h4>
                <h5>{prod.price}</h5>
                <Link to={`/product/${prod.id}`}>View Details</Link>
                </div>
        ))}
    </div>
    </>
    )
    }

export default Products