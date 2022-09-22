import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../JS/userSlice/userSlice'

function Navbar() {
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const isAuth = localStorage.getItem("token");

  const user=useSelector((state)=>state.user.user);
    const [color, setColor] = useState(false)
    const changeColor=()=>{
        if(window.scrollY>=90){
          setColor(true)
        }else{
          setColor(false)
        }
      }
      window.addEventListener('scroll',changeColor)
    return (
        <div  className={color ? 'navbar navbar-color':'navbar'}>
            <div className='logouser'>
                <img src="logo.svg" />
                <h1>ALMAS TRAVEL</h1>
            </div>
            <div className='voyage'>
                <div><Link to="/" style={{textDecoration:"none", color:"white"}}>Home</Link></div>
         <Link  to="/service" style={{textDecoration:"none", color:"white"}}> <div className='service'>Service

              <div>
               
            </div>
            </div></Link>  
<div><Link to="/contact" style={{textDecoration:"none", color:"white"}}>Contact</Link></div>
<div><Link to="/about"style={{textDecoration:"none", color:"white"}}>About</Link></div>
<div><Link to="/devis"style={{textDecoration:"none", color:"white"}}>Devis</Link></div>
{user?<div><Link to="/profile"style={{textDecoration:"none", color:"white"}}>Profile</Link></div>:null}

            </div>
            <div className='logouser'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                 fill="white" class="bi bi-person-circle" viewBox="0 0 16 16" >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
               {!isAuth? <div className='login'>
                 <Link to="/login" style={{textDecoration:"none", color:"white"}}><div ><p> Login</p></div></Link> 
                    {/* <div style={{textDecoration:"none"}}><span>Dashbord</span></div> */}
                </div>:null
                }
                 {isAuth? <div className='login' style={{marginTop:"-50px"}}>
                <div onClick={()=>{
          dispatch(logout());
          navigate("/login");
          }}><p> Logout</p></div>
                   {/* <div style={{textDecoration:"none"}}><span>Dashbord</span></div> */}
               </div>:null
                }
{user?.categorie=="admin"? <Link to="/dashboard" style={{textDecoration:"none", color:"white",marginLeft:"8px",fontWeight:"700"}}><div ><p> Dashbord</p></div></Link> 
:null}
                {/* <div>
                {user?<button onClick={()=>{
          dispatch(logout());
          navigate("/");
          }} style={{textDecoration:"none", color:"white",backgroundColor:"transparent",border:"none",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",width:"20px",marginTop:"70px",marginLeft:"-190px"}}>logout</button>:null}
          
                </div> */}
            </div>
        </div>
    )
}

export default Navbar