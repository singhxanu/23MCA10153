import React, { useState } from 'react'
import Details from './Details';
const Apishow = () => {
const[data,setData]=useState([]);




  return (
   <>
 <Details setData={setData}/>
 {data.map((products)=>(

   <div  id ={products.id} class="card" style={{width:' 18rem'}}>
  <img src={products.images[0] } class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{products.title}</h5>
    <p class="card-text">{products.description}</p>
  </div>
</div>
))}
   </>
  )
}

export default Apishow;
