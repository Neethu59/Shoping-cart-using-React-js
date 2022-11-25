// import { Details } from '@mui/icons-material';
import React,{useEffect,useState} from 'react'
// import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { ElectricalServices } from '@mui/icons-material';
// import CurrencyRupeeIcon from '@mui/icons-material';
export default function Cart() {
    // const {data}=useParams()
    const key="cartdata"
    const [state, setState] = useState(JSON.parse(localStorage.getItem(key)));
    const [total,setTotal]=useState(0);
    const[persentage,setpersentage]=useState(0);
    useEffect(()=>{
  localStorage.getItem(state)
  
  },[state])

  
  const deletecart=(id)=>{
    console.log(id)
    console.log(state);
    const deletedata=state.filter(details=>{
      return details.id!==id
    } )
console.log(deletedata)
setState(deletedata)
//  const key=deletedata
// localStorage.setItem(key)


  }
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(state))
  },[state])
  
  useEffect(()=>{
    localStorage.getItem(state)
    setTotal(state.reduce((total,currentItem) =>  total = total + currentItem.price , 0 ));
  },[state])
console.log(total)

useEffect(()=>{
  if(total>=500)
  {
    var counter=(total*10)
    var value=(counter/100)
   var amount ="Diacount Rate is ₹"+value
   setpersentage(amount)
   console.log(amount)
  }
  
  else{
    setpersentage("No discount")
  }
},[persentage])

console.log(persentage)

const navigate=useNavigate()
  return (
    <>
    <Navbar />

    <button style={{marginLeft:"80%",backgroundColor:"red",color:"white",borderRadius:"25px",padding:"1%"}}>total:₹ {total}</button>

    <h3 style={{marginLeft:"75%",backgroundColor:"Green",color:"white",borderRadius:"25px",paddingRight:"10%"}}>{persentage}</h3>
     <div class="row row-cols-1 row-cols-md-3 g-4">

{state&&state.map((data)=>(
<div class="col">
  <div class="card" style={{marginLeft:"20%",height:"10%"}}>
      <div id="card">
    <img src={data.image} class="card-img-top"
      alt="Hollywood Sign on The Hill"style={{height:"10%",width:"20%"}} />

       <h3>{data?.title}</h3>
      <h5>${data?.price}</h5>
      <p>{data?.category}</p>
       <p>{data?.description}</p>
       </div>
    <div class="card-body">
    
    <button style={{backgroundColor:"red",color:"white"}} onClick={()=>{deletecart(data?.id)}}>Remove  </button>
    {/* <button style={{backgroundColor:"blue",color:"white"}}>Add  </button> */}
    <button style={{backgroundColor:"Green",color:"white"}}onClick={()=>{deletecart(data?.id);navigate("/")}}>Update  </button>
     
      <hr/>
    </div>
  </div>
</div>
))}
</div>

    </>
  )
}
