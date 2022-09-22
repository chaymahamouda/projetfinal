import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./dashboard.css"

function Dashbord() {
    
  return (
    
<div className='dash'>
  <div className='dashh'>
   <div className='side-menu'>
     <div className='brand-name'>
     <h1> <img src="admin.svg" alt="Home"></img> &nbsp; Admin</h1>
     </div>
     <ul>
      <li><img src="dash.svg" ></img>&nbsp; Dashboard</li>
      <Link to="/"><li><img src="home.svg" ></img>&nbsp; Home</li></Link>
     <Link to="/voyages"> <li><img src="voyage.svg" ></img>&nbsp; Voyages</li></Link>
     <Link to="/reservation"><li><img src="reserver.svg" ></img>&nbsp; Reservation</li></Link> 
     <Link to="/users"> <li> <img src="users.svg" ></img>&nbsp; Users</li></Link>
     </ul>
    </div>
      <div className='containerr'>
        <div className='header'>
          <div className='nav'>
           <div className='search'>
             <input type="text" placeholder='search..'></input>
               <button type="submit"><img src='search.svg'></img></button>
            </div>
                <div className='user'>
                  
                   <img src='notifications.png'></img>
                    <div className='img-case1'>
                    <Link to="/profile">  <img src='image.png' style={{marginTop:"6px"}}></img></Link>
                    </div>
                </div>
          </div>
       </div>
        <div className='contentt'>
           <div className='cardss' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",
           width:"100%",padding:"20px 15px",marginTop:"90px"}}>
            <div className='carrd'>
              <div className='box'  >
                <h1>2194</h1>
                <Link to="/voyages"> <h3>Voyages</h3></Link>
              </div>
              <div className='icon-casse'>
                 <img src="voyage.svg" ></img>
              </div>
            </div>

            <div className='carrd'>
              <div className='box'>
                <h1>2194</h1>
                <Link to="/reservation"><h3>Reservation</h3></Link>
              </div>
              <div className='icon-casse'>
                 <img src="reserver.svg" ></img>
              </div>
            </div>

            <div className='carrd'>
              <div className='box'>
                <h1>4100</h1>
                <Link to="/users"><h3>Users</h3></Link>
              </div>
              <div className='icon-casse'>
                 <img src="users.svg" ></img>
              </div>
            </div>
           </div>
           <div className='contentt-2'></div>
        </div>
     </div>
  </div>
</div>

   
  )
}

export default Dashbord