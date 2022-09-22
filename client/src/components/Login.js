import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../JS/userSlice/userSlice';
import "./Login.css"

const Login = ({ping, setping}) => {
const [login, setLogin] = useState({
  email:"",
  password:"",
})
const dispatch=useDispatch();
const isAuth =localStorage.getItem("token");
let navigate=useNavigate();
  return (
    <div style={{marginTop:"120px"}}>
       {/* <div className='header'>
        <h1> Welcome to our site</h1>
        <p>welcome back please enter your details</p>

        </div> */}
<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form onSubmit={(e)=>e.preventDefault()} class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="Email" class="login__input" placeholder="Email" onChange={(e)=>setLogin({...login,email:e.target.value})} required/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"onChange={(e)=>setLogin({...login,password:e.target.value})}/>
				</div>
        
				<button class="button login__submit" onClick={()=>{
      dispatch(userLogin(login));
	 
			setTimeout(() => {
				setping(!ping);
				navigate("/profile");
			}, 1000);
         }}>
					<span class="button__text" style={{marginLeft:"65px"}}>Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<Link to="/register" style={{textDecoration:"none"}}><h5 style={{color:"#045E8C",width:"80%",display:"flex",justifyContent:"center",textAlign:"right",marginTop:"-10px"}}>Register Now</h5></Link>

		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>


        
    </div>
  )
}

export default Login