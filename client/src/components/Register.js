import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../JS/userSlice/userSlice';
import "./Login.css"
const Register = ({ping, setping}) => {
  const navigate=useNavigate();
const [register, setregister] = useState({
  name:"",
  lastName:"",
  email:"",
  password:"",

});

const dispatch=useDispatch();
  return (
    <div>
{/* <div className='header'>
        <h1> Welcome to our site</h1>
        <p>welcome back please enter your details</p>

   </div> */}
<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form onSubmit={(e)=>e.preventDefault()} class="login">
      <div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="text" class="login__input" placeholder="Name" 
          onChange={(e)=>setregister({...register,name:e.target.value})}/>
				</div>
        <div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="text" class="login__input" placeholder="LastName" 
          onChange={(e)=>setregister({...register,lastName:e.target.value})}/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email"
           onChange={(e)=>setregister({...register,email:e.target.value})}/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"
          onChange={(e)=>setregister({...register,password:e.target.value})}/>
				</div>
				<button class="button login__submit"
         onClick={()=>{dispatch(userRegister(register)); setping(!ping);
			setTimeout(() => {
				setping(!ping)
				navigate("/profile");
			}, 1000);}}>
					<span class="button__text"style={{marginLeft:"40px"}}>Create Account</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>	
       <h5 style={{color:"#045E8C",width:"80%",display:"flex",justifyContent:"center",textAlign:"right",marginTop:"10px"}}> we already have account <Link to="/login" style={{color:"#045E8C",marginLeft:"10px"}}>  Sign in </Link></h5>		  
			</form>

      
			
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

export default Register