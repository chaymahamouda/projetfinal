import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useredit } from '../JS/userSlice/userSlice';
import "./profile.css"

function Profile({ping, setping}) {
    const [edited, setedited] = useState({});
    const navigate=useNavigate();
const user=useSelector((state)=>state?.user?.user);

const dispatch=useDispatch();
  return (
    <div className='profile'style={{marginTop:"120px"}}>
    <div className='chayma' style={{textAlign: "center",marginLeft:"250px" }}>
<div class="container rounded bg-white mt-5 mb-5" style={{backgroundColor:"transparent",width:"50%",marginTop:"30%",marginLeft:"205px"}}>
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">{user?.name}</span><span class="text-black-50">{user?.email}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right" style={{marginTop:"20px"}}>Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder={user?.name}  onChange={(e)=>setedited({...edited, name:e.target.value})}/></div>
                    <div class="col-md-6"><label class="labels">LastName</label><input type="text" class="form-control"  placeholder={user?.lastName}  onChange={(e)=>setedited({...edited, lastName:e.target.value})}/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder={user?.email}  onChange={(e)=>setedited({...edited, email:e.target.value})}/></div>
                    
                </div>
                
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Password</label><input type="password" class="form-control" placeholder={user?.password}  onChange={(e)=>setedited({...edited, password:e.target.value})}/></div>
                    
                </div> 
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder={user?.telephone} onChange={(e)=>setedited({...edited, telephone:e.target.value})}/></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder={user?.adress} onChange={(e)=>setedited({...edited, adress:e.target.value})}/></div>
                    </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" onClick={()=>{dispatch(useredit({id:user?._id, edited})); setping(!ping);
			setTimeout(() => {
				setping(!ping)
				navigate("/profile");
			}, 1000);}} type="button">Edit Profile</button></div>
            </div>
        </div>
       
        </div>
    </div>
</div>
</div>

   
  )
}

export default Profile