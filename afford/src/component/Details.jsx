import React, { useEffect , useState} from 'react'

const Details = ({setData}) => {
const api = 'https://dummyjson.com/products';


const fetchData = async(url)=>{
  try{
    const res = await fetch(url);
    const jsonData = await res.json();
    setData(jsonData.products);
    console.log(jsonData);

  }catch(e){
    console.error(e);
  }
}

useEffect(()=>{
  fetchData(api);
},[])



  return (
    <div>
  
    </div>
  )
}

export default Details;
