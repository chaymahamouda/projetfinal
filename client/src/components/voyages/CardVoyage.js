import React from 'react'
import Description from './Description'
import "./voyages.css"

function CardVoyage({el}) {
  return (
   
    <div className='voyy' style={{marginTop:"-150px"}}>
    <div class="container1">
      <div class="card1">
        <div class="imgBx1">
          <img src={el.url} alt={el.name}/>
        </div>
        <div class="contentBx1">
         <h2>{el.name}</h2>
         
           <div class="size1"> 
          <h2>{el.prix}</h2>
    
           </div> 
    
          <Description el={el}/>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default CardVoyage