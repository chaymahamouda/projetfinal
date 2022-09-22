import React from 'react'
import { useSelector } from 'react-redux'
import CardVoyage from './CardVoyage'
import "./voyages.css"

function VoyageO() {
    const voyages=useSelector((state)=>state.voyage.voyages)
    console.log(voyages)
  return (
    <div  style={{display:"flex", justifyContent:"space-around" ,width:"100%", flexWrap:"wrap", marginTop:"160px"}}>
        {voyages?.filter((el)=>el.categorie=="Voyage organisée").map((el)=><CardVoyage el={el}/>)}</div>
  
 

  )
}

export default VoyageO