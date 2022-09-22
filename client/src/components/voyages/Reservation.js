import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addreservation } from '../../JS/Reservationslice/ReservationSlice';

function Reservation({ping,setping}) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch(); 
    const [reservation, setreservation] = useState({
      Name:"", 
       LastName:"", 
       email:"", 
       PhoneNumber:"",
       
       Expirydate:"",
       DateV :"",
       Period:"",

    })
  return (
    <div>
       <button type="button" class="btn btn-primary"style={{marginLeft:"1000px",marginTop:"5px",marginBottom:"20px"}}  onClick={()=>setShow(!show)}>Reservation</button> 
        <div className='modal-content' >
        {show ?(
   <div  style={{width:"100%"}}>
    <button type="button" class="btn btn-danger" style={{marginLeft:"1050px",marginTop:"10px"}} onClick={()=>setShow(!show)}>X</button>
    <div style={{display:"flex", marginTop:"20px",height:"auto"}} >
        <img src='reservation.jpg' style={{width:"280px",marginBottom:"20px",marginLeft:"30px"}}></img>
        <div style={{width:"50%",margin:"0 auto",display:"flex",flexDirection:"column"}}>
    <p>Name:</p>
    <input className='input1' type="text" placeholder="enter name" onChange={(e)=>setreservation({...reservation, Name:e.target.value})}  />
    <p style={{marginTop:"5px"}}>LastName:</p>
    <input className='input2' type="text" placeholder="enter last name" onChange={(e)=>setreservation({...reservation, LastName:e.target.value})}/>
    <p style={{marginTop:"5px"}}>Email:</p>
    <input className='input3' type="email" placeholder="enter email" onChange={(e)=>setreservation({...reservation, email:e.target.value})}/>
    <p style={{marginTop:"5px"}}>Phone Number:</p>
    <input className='input4' type="text"placeholder="enter phone number" onChange={(e)=>setreservation({...reservation, PhoneNumber:e.target.value})}/>
    <p style={{marginTop:"5px"}}>Expiry date of your passport:</p>
    <input className='input4' type="date"placeholder="enter date" onChange={(e)=>setreservation({...reservation, Expirydate:e.target.value})}/>
    <p style={{marginTop:"5px"}}>Date to go out:</p>
    <input className='input4' type="date"placeholder="enter date" onChange={(e)=>setreservation({...reservation, DateV:e.target.value})}/>
    <p style={{marginTop:"5px"}}>Period in days :</p>
    <input className='input4' type="text"placeholder="enter period" onChange={(e)=>setreservation({...reservation, Period:e.target.value})}/>
    <button type="button" class="btn btn-primary" style={{marginTop:"10px"}}
     onClick={()=>{dispatch(addreservation(reservation)); setping(!ping);
			setTimeout(() => {
				setping(!ping)
			}, 1000);}}>Submit</button>
    <div/>
  </div>
  </div>
  </div>
  
):null
}
</div>
       
    </div>
    
  )
}

export default Reservation