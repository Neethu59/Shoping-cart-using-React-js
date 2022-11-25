import React, { useEffect } from 'react'
import'./Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import {Search} from '@mui/icons-material/';
import {ShoppingCartSharp} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {Badge} from '@mui/material';
import { useState } from 'react';
export default function Navbar() {
  const key="cartdata"


  const [state, setState] = useState(JSON.parse(localStorage.getItem(key)));
  useEffect(()=>{
    
    console.log(state)
  },[state])
  
  const navigate=useNavigate()
  console.log(state);
  return (
    <>
     <div className=' navbook'>

     <p style={{marginLeft:"5%",marginTop:"2%"}} onClick={()=>{navigate('/')}}>Home</p>
    <p style={{marginLeft:"5%",marginTop:"2%"}}>About</p>
<input type="text" placeholder="search book by author or publisher "  id="inputtext"></input><Search id="search"/>
   
  <p style={{marginLeft:"10%",marginTop:"2%"}}>FAQ</p>
 
   <Badge 
   badgeContent={state?.length} 
   color="primary" id="badge">
   <ShoppingCartSharp id="cart" onClick={()=>{navigate('/cart')}}/>
</Badge>
  
  <input type="button" class="btn btn-danger" value="sign in" style={{marginLeft:"5%",height:"10%",marginTop:"2%",borderRadius:"50px"}}></input>
  
    </div>
    
    
    </>
  )
}

