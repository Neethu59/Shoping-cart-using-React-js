import React from 'react'
import'./Product.css';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
export default function Product() {
  const key="cartdata"

    const [product,setProduct]=useState([])
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem(key))||[])
    
    useEffect(()=>{
axios.get("https://fakestoreapi.com/products")
.then(response=>{
    console.log(response.data)
    setProduct(response.data)
})
    },[])

    const navigate=useNavigate()


    const cartdetails=(id)=>{
        const filterdata=product.filter(details=>{
          return details.id===id
        } ) 
        console.log(filterdata)
        console.log("beforecart===>",cart)

        setCart([...cart,...filterdata])
        console.log("cart",cart)
         var count=cart.length 
         console.log(count)
            // navigate("/cart")
      }
      useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(cart))
      },[cart])
  return (
    <>
    <Navbar/>
    
  <div class="row row-cols-1 row-cols-md-3 g-4">

  {product.map((data)=>(
  <div class="col">
    <div class="card" style={{marginLeft:"20%",height:"10%"}}>
        <div id="card">
      <img src={data?.image} class="card-img-top"
        alt="Hollywood Sign on The Hill"style={{height:"10%",width:"20%"}} />
         <h3>{data?.title}</h3>
        <h5>${data?.price}</h5>
        <p>{data?.category}</p>
         <p>{data?.description}</p>
         </div>
      <div class="card-body">
    
       <button   onClick={()=>{cartdetails(data.id)
        // ;navigate('/cart')
        }}>Add to Cart</button>
        <hr/>
      </div>
    </div>
  </div>
  ))}
  </div>


    </>
  )
}




 
  
