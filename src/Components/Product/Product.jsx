import React from 'react'
import'./Product.css';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
export default function Product() {
  const key="cartdat"

    const [product,setProduct]=useState([])
    // const[item,setItem]=useState({})
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem(key))||[])
    const[name,setname]=useState("All Catogory")
    const[item,setItem]=useState([])
    console.log(name);
    const dd = (e)=>{
    axios.get(`https://fakestoreapi.com/products/category/${e}`)
    .then(respons=>{
      console.log("catogory====>",respons.data)
      setProduct(respons.data)
      setname(e)
    })
   
     
    }
    
    useEffect(()=>{
axios.get("https://fakestoreapi.com/products")
.then(response=>{
    console.log(response.data)
    setProduct(response.data)
setItem(response.data)
   

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
    
    {/* <button id="alll"  class="all0" onClick={item}>All</button> */}
  <button id="all"  class="all1" onClick={()=>{ dd("men's clothing")}}>men's clothing</button>
  <button id="all"  class="all2" onClick={()=>{ dd("jewelery")}}>jewelery</button>
  <button id="all"  class="all3" onClick={()=>{ dd("electronics")}}>electronics</button>
  <button id="all" class="all4" onClick={()=>{ dd("women's clothing")}}>women's clothing</button>
  <h1 style={{marginLeft:"10%",color:"ActiveBorder"}}>{name}</h1>
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




 
  
